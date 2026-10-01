import React, { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';

import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';

function Controls() {
  const { lang, setLang, t, tRaw } = useLanguage();
  return <><output>{lang}</output><span>{t('nav.home')}</span>
    <span>{t('missing.key')}</span><span>{t('nav')}</span>
    <span>{Array.isArray(tRaw('advantages.items')) ? 'items available' : 'missing items'}</span>
    <button onClick={() => setLang('en')}>English</button>
    <button onClick={() => setLang('hy')}>Armenian</button></>;
}

beforeEach(() => { localStorage.clear(); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe('language preferences', () => {
  it.each(['en', 'hy'] as const)('keeps %s across remounts and updates document language', (lang) => {
    const first = render(<LanguageProvider><Controls /></LanguageProvider>);
    fireEvent.click(screen.getByText(lang === 'en' ? 'English' : 'Armenian'));
    expect(localStorage.getItem('raywerthi.language')).toBe(lang);
    first.unmount();
    render(<LanguageProvider><Controls /></LanguageProvider>);
    expect(screen.getByRole('status')).toHaveTextContent(lang);
    expect(document.documentElement.lang).toBe(lang);
  });

  it('ignores invalid preferences and safely resolves missing/non-string translations', () => {
    localStorage.setItem('raywerthi.language', 'invalid');
    render(<LanguageProvider><Controls /></LanguageProvider>);
    expect(screen.getByRole('status')).toHaveTextContent('ru');
    expect(screen.getByText('missing.key')).toBeInTheDocument();
    expect(screen.getByText('nav')).toBeInTheDocument();
    expect(screen.getByText('items available')).toBeInTheDocument();
  });

  it('continues switching languages when storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
    render(<LanguageProvider><Controls /></LanguageProvider>);
    fireEvent.click(screen.getByText('English'));
    expect(screen.getByRole('status')).toHaveTextContent('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('hydrates prerendered HTML before restoring the saved preference', async () => {
    localStorage.setItem('raywerthi.language', 'hy');
    const app = <LanguageProvider><Controls /></LanguageProvider>;
    const container = document.createElement('div');
    container.innerHTML = renderToString(app);
    expect(container.querySelector('output')).toHaveTextContent('ru');
    document.body.appendChild(container);
    const onRecoverableError = vi.fn();
    let root: ReturnType<typeof hydrateRoot>;
    await act(async () => { root = hydrateRoot(container, app, { onRecoverableError }); });
    expect(container.querySelector('output')).toHaveTextContent('hy');
    expect(onRecoverableError).not.toHaveBeenCalled();
    await act(async () => { root.unmount(); });
    container.remove();
  });
});