import type { LocalizedText } from './products/types';

import terrea700sPool from '@/assets/products/warema/terrea-700s-pool.jpg';
import pereaP70Lakeside from '@/assets/products/warema/perea-p70-lakeside.jpg';
import hellaInnenrolloLoft from '@/assets/products/hella/hella-innenrollo-loft.jpg';
import terreaK60Night from '@/assets/products/warema/terrea-k60-led-night.jpg';

import terrea530Lifestyle from '@/assets/products/warema/terrea-530-lifestyle.jpg';
import climaraW10Conference from '@/assets/products/warema/climara-w10a-conference.jpg';

import hellaVentur from '@/assets/products/hella/terrassendach-ventur.png';
import climaraW9Patio from '@/assets/products/warema/climara-w9-patio.jpg';
import sg6840Lifestyle from '@/assets/products/silentgliss/sg6840-lifestyle.jpg';

import terreaK55RedHouse from '@/assets/products/warema/terrea-k55-red-house.jpg';
import lamaxaL70Pool from '@/assets/products/warema/lamaxa-l70-aerial-pool.jpg';
import sg5600Pair from '@/assets/products/silentgliss/sg5600-streamlined-pair.jpg';
import pereaP60Autumn from '@/assets/products/warema/perea-p60-autumn.jpg';
import climaraW19 from '@/assets/products/warema/climara-w19-architectural.jpg';

import hellaJalousienLight from '@/assets/products/hella/hella-innenjalousien-light.jpg';
import hellaJalousienOffice from '@/assets/products/hella/hella-innenjalousien-office.jpg';

import terrea700sDeck from '@/assets/products/warema/terrea-700s-deck.jpg';
import hellaPlisseeSkylight from '@/assets/products/hella/hella-plissee-skylight.jpg';
import terreaK60Lifestyle from '@/assets/products/warema/terrea-k60-lifestyle.jpg';
import climaraW7Exterior from '@/assets/products/warema/climara-w7-exterior.jpg';
import hellaInnenrolloOffice from '@/assets/products/hella/hella-innenrollo-office.jpg';
import pereaGallery from '@/assets/products/warema/perea-gallery2.webp';

import lamaxaL70StoneHouse from '@/assets/products/warema/lamaxa-l70-stone-house.jpg';
import raffstorenHero from '@/assets/products/warema/raffstoren-hero.webp';
import raffstorenTopmounted from '@/assets/products/warema/raffstoren-topmounted.jpg';
import rollladenFrontmounted from '@/assets/products/warema/rollladen-frontmounted.jpg';
import easyzip from '@/assets/products/warema/easyzip.webp';
import sg5600Bedroom from '@/assets/products/silentgliss/sg5600-prs3.jpg';

export interface HeroSlide {
  src: string;
  caption: string;
  alt: LocalizedText;
}

export const heroSlides: HeroSlide[] = [
  {
    src: terrea700sPool,
    caption: 'WAREMA Terrea 700S',
    alt: {
      ru: 'Современный дом у бассейна с маркизой WAREMA Terrea над террасой',
      hy: 'Ժամանակակից տուն լողավազանի մոտ՝ WAREMA Terrea մարկիզայով տեռասի վրա',
      en: 'Modern house by a pool with a WAREMA Terrea awning over the terrace',
    },
  },
  {
    src: pereaP70Lakeside,
    caption: 'WAREMA Perea P70',
    alt: {
      ru: 'Пергола-маркиза WAREMA Perea на террасе у озера',
      hy: 'WAREMA Perea պերգոլա-մարկիզա լճի ափին գտնվող տեռասում',
      en: 'WAREMA Perea pergola awning on a lakeside terrace',
    },
  },
  {
    src: hellaInnenrolloLoft,
    caption: 'HELLA Innenrollo',
    alt: {
      ru: 'Светлая гостиная с рулонными шторами HELLA',
      hy: 'Լուսավոր հյուրասենյակ HELLA ռուլոնային վարագույրներով',
      en: 'Bright living room with HELLA roller blinds',
    },
  },
  {
    src: terreaK60Night,
    caption: 'WAREMA Terrea K60 LED',
    alt: {
      ru: 'Вечерняя терраса с LED-подсветкой маркизы WAREMA Terrea K60',
      hy: 'Երեկոյան տեռաս WAREMA Terrea K60 մարկիզայի LED լուսավորությամբ',
      en: 'Evening terrace lit by the LED lighting of a WAREMA Terrea K60 awning',
    },
  },
];

export const taskImages = {
  private: terrea530Lifestyle,
  projects: climaraW10Conference,
};

export const brandVisuals: Record<'hella' | 'warema' | 'silent-gliss', { image: string; caption: string }> = {
  hella: { image: hellaVentur, caption: 'HELLA VENTUR' },
  warema: { image: climaraW9Patio, caption: 'WAREMA Climara' },
  'silent-gliss': { image: sg6840Lifestyle, caption: 'Silent Gliss 6840' },
};

export interface Flagship {
  name: string;
  brand: string;
  image: string;
  categorySlug: string;
  tagline: LocalizedText;
}

export const flagships: Flagship[] = [
  {
    name: 'Terrea K55',
    brand: 'WAREMA',
    image: terreaK55RedHouse,
    categorySlug: 'patio-awnings',
    tagline: {
      ru: 'Кассетная маркиза для террас и балконов',
      hy: 'Կասետային մարկիզա տեռասների և պատշգամբների համար',
      en: 'Cassette awning for terraces and balconies',
    },
  },
  {
    name: 'Lamaxa L70',
    brand: 'WAREMA',
    image: lamaxaL70Pool,
    categorySlug: 'pergolas',
    tagline: {
      ru: 'Биоклиматическая крыша с поворотными ламелями',
      hy: 'Բիոկլիմայական տանիք պտտվող լամելներով',
      en: 'Bioclimatic roof with rotating louvres',
    },
  },
  {
    name: 'SG 5600',
    brand: 'Silent Gliss',
    image: sg5600Pair,
    categorySlug: 'curtain-tracks',
    tagline: {
      ru: 'Бесшумный электрокарниз',
      hy: 'Անաղմուկ էլեկտրական կարնիզ',
      en: 'Whisper-quiet electric curtain track',
    },
  },
  {
    name: 'Perea P60',
    brand: 'WAREMA',
    image: pereaP60Autumn,
    categorySlug: 'pergolas',
    tagline: {
      ru: 'Пергола-маркиза с тканевой крышей',
      hy: 'Պերգոլա-մարկիզա գործվածքային տանիքով',
      en: 'Pergola awning with a fabric roof',
    },
  },
  {
    name: 'Climara W19',
    brand: 'WAREMA',
    image: climaraW19,
    categorySlug: 'conservatory',
    tagline: {
      ru: 'Защита зимнего сада от перегрева',
      hy: 'Ձմեռային այգու պաշտպանություն գերտաքացումից',
      en: 'Overheating protection for conservatories',
    },
  },
];

export const advantagesImage = hellaJalousienLight;
export const contactImage = hellaJalousienOffice;

export interface InspirationItem {
  src: string;
  caption: string;
}

export const inspiration: InspirationItem[] = [
  { src: terrea700sDeck, caption: 'WAREMA Terrea 700S' },
  { src: hellaPlisseeSkylight, caption: 'HELLA Plissee' },
  { src: terreaK60Lifestyle, caption: 'WAREMA Terrea K60' },
  { src: hellaInnenrolloOffice, caption: 'HELLA Innenrollo' },
  { src: climaraW7Exterior, caption: 'WAREMA Climara W7' },
  { src: pereaGallery, caption: 'WAREMA Perea' },
];

export const pageHeroes = {
  solutions: pereaGallery,
  services: climaraW7Exterior,
  about: lamaxaL70StoneHouse,
  portfolio: terrea700sDeck,
  contacts: hellaPlisseeSkylight,
};

// Stand-ins until real project photos arrive; order matches `portfolio.projects` in translations.
export const portfolioIllustrations = [
  raffstorenHero,
  terrea700sDeck,
  raffstorenTopmounted,
  rollladenFrontmounted,
  sg6840Lifestyle,
  easyzip,
  pereaP70Lakeside,
  sg5600Bedroom,
];
