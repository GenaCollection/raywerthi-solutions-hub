"""Original score + sound design for the RayWerThi brag video.

80 BPM (beat 0.75 s), D major. Chords follow the picture: every scene cut lands on a beat
and the harmony moves with it. Effects are tuned to the key and sent to the same reverb.
Writes work/audio.wav (48 kHz stereo).
"""
import numpy as np
import wave

SR = 48000
DUR = 22.5
N = int(SR * DUR)
rng = np.random.default_rng(7)

BEAT = 0.75


def mf(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def t_axis(n):
    return np.arange(n) / SR


def env_adsr(n, a, d, s, r, sustain_len):
    """Attack/decay/sustain level/release over n samples (seconds for a, d, r)."""
    t = t_axis(n)
    e = np.zeros(n)
    a = max(a, 1e-4)
    e = np.where(t < a, t / a, e)
    dm = (t >= a) & (t < a + d)
    e = np.where(dm, 1 - (1 - s) * (t - a) / max(d, 1e-4), e)
    sm = (t >= a + d) & (t < sustain_len)
    e = np.where(sm, s, e)
    rm = t >= sustain_len
    e = np.where(rm, s * np.clip(1 - (t - sustain_len) / max(r, 1e-4), 0, 1), e)
    return e


class Bus:
    def __init__(self):
        self.l = np.zeros(N)
        self.r = np.zeros(N)

    def add(self, sig, start, gain=1.0, pan=0.0):
        i = int(round(start * SR))
        if i >= N:
            return
        sig = sig[: N - i]
        gl = gain * np.cos((pan + 1) * np.pi / 4)
        gr = gain * np.sin((pan + 1) * np.pi / 4)
        self.l[i : i + len(sig)] += sig * gl
        self.r[i : i + len(sig)] += sig * gr

    def add_st(self, l, r, start, gain=1.0):
        i = int(round(start * SR))
        n = min(len(l), N - i)
        self.l[i : i + n] += l[:n] * gain
        self.r[i : i + n] += r[:n] * gain


def onepole_lp(x, fc):
    a = np.exp(-2 * np.pi * fc / SR)
    y = np.empty_like(x)
    acc = 0.0
    for i in range(len(x)):
        acc = (1 - a) * x[i] + a * acc
        y[i] = acc
    return y


def lp_fft(x, fc, soft=1.5):
    """Zero-phase gentle low-pass in the frequency domain (fast for long buffers)."""
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / (1 + (f / fc) ** (2 * soft))
    return np.fft.irfft(X, len(x))


def hp_fft(x, fc, soft=1.5):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 - 1 / (1 + (f / fc) ** (2 * soft))
    return np.fft.irfft(X, len(x))


def bp_fft(x, lo, hi):
    return hp_fft(lp_fft(x, hi), lo)


# ---------------- harmony ----------------
CH = {
    'D': dict(root=38, pad=[57, 61, 64, 66, 69], arp=[74, 78, 81, 85, 88]),
    'Bm': dict(root=35, pad=[54, 57, 61, 62, 66], arp=[71, 74, 78, 81, 85]),
    'G': dict(root=31, pad=[54, 57, 59, 62, 66], arp=[74, 78, 79, 83, 86]),
    'Em': dict(root=40, pad=[55, 59, 62, 66, 67], arp=[71, 74, 76, 79, 83]),
    'Asus': dict(root=33, pad=[55, 57, 59, 62, 64], arp=[69, 71, 74, 76, 81]),
}
TIMELINE = [
    (0.0, 3.0, 'D'), (3.0, 6.75, 'Bm'), (6.75, 10.5, 'G'), (10.5, 13.5, 'Em'), (13.5, 15.75, 'Asus'),
    (15.75, 16.75, 'Bm'), (16.75, 17.75, 'G'), (17.75, 18.75, 'Asus'), (18.75, 22.5, 'D'),
]

dry = Bus()   # direct
wet = Bus()   # reverb send


def saw_pad_voice(freq, n, detune=0.0):
    t = t_axis(n)
    y = np.zeros(n)
    for k in range(1, 7):
        y += np.sin(2 * np.pi * freq * k * (1 + detune) * t + rng.uniform(0, 6.28)) / k ** 1.7
    return y


# Pad: warm, slow attack, crossfades between chords
for (a, b, name) in TIMELINE:
    L = b - a + 0.9
    n = int(L * SR)
    atk = 0.9 if a == 0 else 0.35
    e = env_adsr(n, atk, 0.5, 0.85, 0.9, (b - a))
    lvl = 0.05
    for j, m in enumerate(CH[name]['pad']):
        f = mf(m)
        vl = saw_pad_voice(f, n, -0.0025) * e
        vr = saw_pad_voice(f, n, +0.0025) * e
        dry.add_st(vl, vr, a, lvl)
        wet.add_st(vl, vr, a, lvl * 0.8)

# Hook: pad is filtered shut and opens with the blind
hook_n = int(3.0 * SR)
cut = np.ones(N)
tt = t_axis(N)
open_curve = np.clip((tt - 0.2) / 2.6, 0, 1) ** 1.6
# apply a time-varying brightness by blending a dark and a bright version of the first 3 s
for bus in (dry, wet):
    for ch in ('l', 'r'):
        x = getattr(bus, ch)
        seg = x[: hook_n + SR].copy()
        dark = lp_fft(seg, 380)
        m = open_curve[: len(seg)]
        mix = dark * (1 - m) + seg * m
        x[: len(seg)] = mix

# Bass: sine + a little 2nd/3rd harmonic so it reads on phone speakers
BASS_PATTERN = [0.0, 1.5, 2.25]  # beats in a 4-beat bar (1, 3-and-a-half... syncopated)
def bass_note(m, dur):
    n = int((dur + 0.15) * SR)
    t = t_axis(n)
    f = mf(m)
    y = np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) + 0.12 * np.sin(2 * np.pi * 3 * f * t)
    e = env_adsr(n, 0.008, 0.25, 0.55, 0.12, dur)
    return y * e

def chord_at(t):
    for a, b, name in TIMELINE:
        if a <= t < b:
            return name
    return 'D'

beat_times = np.arange(3.0, 21.0, BEAT)
for bt in beat_times:
    name = chord_at(bt + 0.01)
    dry.add(bass_note(CH[name]['root'], BEAT * 0.9), bt, 0.16)
    # syncopated pickup on the "and" of every 2nd beat
    if int(round((bt - 3.0) / BEAT)) % 2 == 1:
        dry.add(bass_note(CH[name]['root'] + 12, BEAT * 0.35), bt + BEAT / 2, 0.07)

# Marimba-like plucks: 8th-note arpeggio
def pluck(m, vel=1.0, dur=0.9):
    n = int(dur * SR)
    t = t_axis(n)
    f = mf(m)
    y = np.sin(2 * np.pi * f * t) * np.exp(-t * 5.5)
    y += 0.28 * np.sin(2 * np.pi * f * 3.98 * t) * np.exp(-t * 22)
    y += 0.10 * np.sin(2 * np.pi * f * 9.2 * t) * np.exp(-t * 40)
    y *= np.minimum(1, t / 0.002)
    return y * vel

ARP = [0, 2, 4, 1, 3, 2, 4, 3]
eighths = np.arange(3.0, 21.0, BEAT / 2)
for k, et in enumerate(eighths):
    name = chord_at(et + 0.01)
    notes = CH[name]['arp']
    m = notes[ARP[k % len(ARP)]]
    vel = 1.0 if k % 2 == 0 else 0.7
    pan = [-0.35, 0.3, -0.15, 0.4][k % 4]
    p = pluck(m, vel)
    dry.add(p, et, 0.055, pan)
    wet.add(p, et, 0.05, pan)
    # dotted-eighth echo, opposite side
    dry.add(p, et + 0.5625, 0.018, -pan)

# ---------------- drums ----------------
def kick():
    n = int(0.45 * SR)
    t = t_axis(n)
    f = 45 + 80 * np.exp(-t * 28)
    ph = 2 * np.pi * np.cumsum(f) / SR
    y = np.sin(ph) * np.exp(-t * 7.5)
    y += 0.25 * rng.standard_normal(n) * np.exp(-t * 180)
    return y

def snap():
    n = int(0.35 * SR)
    t = t_axis(n)
    x = rng.standard_normal(n)
    x = bp_fft(x, 900, 5200)
    e = np.exp(-t * 26) + 0.25 * np.exp(-t * 7)
    return x * e * 0.6

def shaker():
    n = int(0.09 * SR)
    t = t_axis(n)
    x = hp_fft(rng.standard_normal(n), 6500)
    e = np.minimum(1, t / 0.012) * np.exp(-t * 60)
    return x * e

K = kick(); S = snap()
for i, bt in enumerate(np.arange(3.0, 21.0, BEAT)):
    beat_in_bar = i % 4
    if beat_in_bar in (0, 2):
        dry.add(K, bt, 0.34)
    if bt >= 6.75 and beat_in_bar in (1, 3):
        dry.add(S, bt, 0.10, 0.05)
        wet.add(S, bt, 0.10)
for j, st in enumerate(np.arange(6.75, 21.0, BEAT / 4)):
    acc = 1.0 if j % 4 == 2 else 0.45
    dry.add(shaker(), st, 0.035 * acc, 0.45)

# ---------------- sound design ----------------
# 1) Blind motor: soft whirr while the slats tilt (0.3-1.35) and while it lifts (1.5-2.3)
def motor(dur):
    n = int(dur * SR)
    t = t_axis(n)
    hum = 0.18 * np.sin(2 * np.pi * 146.83 * t) + 0.08 * np.sin(2 * np.pi * 293.66 * t)  # D3, in key
    nz = bp_fft(rng.standard_normal(n), 250, 1400) * 0.7
    e = np.minimum(1, t / 0.08) * np.minimum(1, (dur - t) / 0.12)
    return (hum + nz) * e

dry.add(motor(1.1), 0.28, 0.02, -0.1)
dry.add(motor(0.85), 1.48, 0.017, 0.1)

# 2) Slat ticks: tiny, tuned (A6 / D7), in the same stagger as the picture
def tick(m):
    n = int(0.06 * SR)
    t = t_axis(n)
    y = np.sin(2 * np.pi * mf(m) * t) * np.exp(-t * 90)
    y += hp_fft(rng.standard_normal(n), 3000) * np.exp(-t * 300) * 0.3
    return y

for i in range(20):
    ts = 0.3 + i * 0.014 + 0.55  # the moment each slat passes half-open
    dry.add(tick(93 if i % 2 else 98), ts, 0.012, (i / 19 - 0.5) * 0.6)
    wet.add(tick(93), ts, 0.01)

# 3) Light shimmer as the sun comes in: high bell glints in D major
def glint(m, dur=1.6):
    n = int(dur * SR)
    t = t_axis(n)
    f = mf(m)
    y = np.sin(2 * np.pi * f * t + 1.2 * np.sin(2 * np.pi * f * 2.0 * t) * np.exp(-t * 4)) * np.exp(-t * 3.2)
    return y * np.minimum(1, t / 0.004)

for k, (tm, m) in enumerate([(0.55, 86), (0.8, 90), (1.05, 93), (1.25, 97), (1.45, 98), (1.75, 102), (2.1, 97)]):
    pan = [-0.5, 0.4, -0.2, 0.55, -0.4, 0.2, 0.0][k]
    dry.add(glint(m), tm, 0.02, pan)
    wet.add(glint(m), tm, 0.035, pan)

# 4) Riser into the drop at 3.0 and a soft boom on it
def riser(dur):
    n = int(dur * SR)
    t = t_axis(n)
    x = rng.standard_normal(n)
    out = np.zeros(n)
    seg = 8
    for s in range(seg):
        a, b = s * n // seg, (s + 1) * n // seg
        fc = 500 + 5000 * (s / seg) ** 2
        out[a:b] = lp_fft(x, fc)[a:b]
    return out * (t / dur) ** 2.2

dry.add(riser(0.9), 2.1, 0.05)
wet.add(riser(0.9), 2.1, 0.05)

def boom():
    n = int(1.4 * SR)
    t = t_axis(n)
    f = 38 + 50 * np.exp(-t * 9)
    y = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 3.2)
    return y

dry.add(boom(), 3.0, 0.3)

# 5) Transition whooshes that end on each cut
def whoosh(dur=0.45, lo=300, hi=3500):
    n = int(dur * SR)
    t = t_axis(n)
    x = bp_fft(rng.standard_normal(n), lo, hi)
    e = np.sin(np.pi * np.clip(t / dur, 0, 1)) ** 2
    return x * e

for c in (6.75, 10.5, 15.75, 18.75):
    w = whoosh()
    wl = w; wr = np.roll(w, 240)
    dry.add_st(wl, wr, c - 0.32, 0.03)
    wet.add_st(wl, wr, c - 0.32, 0.03)

# 6) Brand tiles pop as notes of the chord (B minor: F#5, A5, D6)
for tm, m in [(4.5, 78), (4.875, 81), (5.25, 86)]:
    dry.add(pluck(m, 1.0, 1.2), tm, 0.06)
    wet.add(pluck(m, 1.0, 1.2), tm, 0.06)

# 7) Counter ticks, slowing like the number
for k in range(16):
    u = k / 15
    tm = 7.05 + 1.25 * (1 - (1 - u) ** 0.5) * 0.9
    dry.add(tick(86 + (k % 3) * 5), tm, 0.02, 0.2 * np.sin(k))

# 8) UI taps (on the beat) and the "sent" chime
def ui_click():
    n = int(0.08 * SR)
    t = t_axis(n)
    y = np.sin(2 * np.pi * mf(86) * t) * np.exp(-t * 70) * 0.8
    y += np.sin(2 * np.pi * mf(74) * t) * np.exp(-t * 45) * 0.5
    y += hp_fft(rng.standard_normal(n), 2500) * np.exp(-t * 400) * 0.25
    return y

for tm in (12.0, 13.5, 15.0):
    dry.add(ui_click(), tm, 0.09)
    wet.add(ui_click(), tm, 0.03)
for tm, m in [(15.12, 81), (15.3, 86)]:
    dry.add(glint(m, 1.2), tm, 0.05)
    wet.add(glint(m, 1.2), tm, 0.05)

# 9) Language switches
for tm in (16.75, 17.75):
    dry.add(ui_click(), tm, 0.06)
    w = whoosh(0.3, 800, 5000)
    dry.add(w, tm - 0.15, 0.02)

# 10) Outro: bell chord + soft boom on 18.75
for m, pan in [(74, -0.3), (78, 0.3), (81, 0.0), (86, -0.15)]:
    dry.add(glint(m, 3.2), 18.75, 0.035, pan)
    wet.add(glint(m, 3.2), 18.75, 0.06, pan)
dry.add(boom(), 18.75, 0.18)

# ---------------- reverb (synthetic hall, stereo) ----------------
ir_len = int(2.2 * SR)
it = t_axis(ir_len)
irl = rng.standard_normal(ir_len) * np.exp(-it * 2.6)
irr = rng.standard_normal(ir_len) * np.exp(-it * 2.6)
irl = lp_fft(irl, 6000); irr = lp_fft(irr, 6000)
irl[: int(0.012 * SR)] = 0; irr[: int(0.017 * SR)] = 0
irl /= np.sqrt(np.sum(irl ** 2)); irr /= np.sqrt(np.sum(irr ** 2))

def conv(x, h):
    L = len(x) + len(h) - 1
    nfft = 1 << (L - 1).bit_length()
    y = np.fft.irfft(np.fft.rfft(x, nfft) * np.fft.rfft(h, nfft), nfft)[: len(x)]
    return y

rl = conv(wet.l, irl) * 0.55
rr = conv(wet.r, irr) * 0.55

L = dry.l + rl
R = dry.r + rr

# kick-driven ducking so the pad breathes with the beat
duck = np.ones(N)
for i, bt in enumerate(np.arange(3.0, 21.0, BEAT)):
    if i % 4 in (0, 2):
        a = int(bt * SR); b = min(N, a + int(0.4 * SR))
        seg = np.linspace(0, 1, b - a)
        duck[a:b] = np.minimum(duck[a:b], 0.72 + 0.28 * seg ** 0.6)
# (applied to the whole mix lightly; the kick itself is short so it survives)
L *= 0.85 + 0.15 * duck
R *= 0.85 + 0.15 * duck

# fades
fade_in = np.minimum(1, tt / 0.05)
fade_out = np.clip((DUR - tt) / 0.9, 0, 1) ** 1.5
L *= fade_in * fade_out
R *= fade_in * fade_out

# gentle high-pass on the master to keep it clean
L = hp_fft(L, 28); R = hp_fft(R, 28)

# master: soft saturation + loudness target
mix = np.stack([L, R])
rms = np.sqrt(np.mean(mix ** 2))
mix *= 0.12 / max(rms, 1e-9)           # about -18 dBFS RMS before the limiter
mix = np.tanh(mix * 1.6) / np.tanh(1.6)
peak = np.max(np.abs(mix))
mix *= 0.89 / peak                      # -1 dBFS peak
print('rms dBFS', 20 * np.log10(np.sqrt(np.mean(mix ** 2))), 'peak', np.max(np.abs(mix)))

pcm = (mix.T * 32767).astype(np.int16)
with wave.open('audio.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print('wrote audio.wav', pcm.shape[0] / SR, 's')
