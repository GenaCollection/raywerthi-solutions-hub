import type { LocalizedText } from './types';

import blindsImg from '@/assets/products/hella/raffstoren-arb80.png';
import rollShuttersImg from '@/assets/products/warema/rollladen-topmounted.webp';
import patioAwningsImg from '@/assets/products/hella/markisen-pan7040.png';
import pergolasImg from '@/assets/products/hella/terrassendach-ventur.png';
import windowAwningsImg from '@/assets/products/warema/easyzip.webp';
import conservatoryImg from '@/assets/products/hella/soleya-aufglas.png';
import sunSailsImg from '@/assets/products/hella/jumbrella.png';
import insectScreensImg from '@/assets/products/hella/insekten-ispl18.png';
import curtainTracksImg from '@/assets/products/silentgliss/sg5600-v2.jpg';
import rollerRomanPanelImg from '@/assets/products/silentgliss/roman-blind-v2.jpg';
import interiorBlindsImg from '@/assets/products/silentgliss/venetian-blind-v2.jpg';
import smartHomeImg from '@/assets/products/hella/onyx-center.png';

export interface CategorySource {
  brand: 'warema' | 'hella' | 'silent-gliss';
  categorySlug: string;
}

export interface UnifiedCategory {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  sources: CategorySource[];
}

export const unifiedCategories: UnifiedCategory[] = [
  {
    slug: 'blinds',
    image: blindsImg,
    name: { ru: 'Наружные жалюзи', hy: 'Արտաքին ժալյուզիներ', en: 'External Venetian Blinds' },
    description: {
      ru: 'Алюминиевые ламели на фасаде — гибкая регулировка света и тепла для частных домов и коммерческих зданий.',
      hy: 'Ալյումինե լամելներ ճակատին՝ լույսի և ջերմության ճկուն կարգավորում մասնավոր տների և կոմերցիոն շենքերի համար։',
      en: 'Aluminium slats on the façade — flexible control of light and heat for private homes and commercial buildings.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'raffstoren' },
      { brand: 'hella', categorySlug: 'raffstoren' },
    ],
  },
  {
    slug: 'roller-shutters',
    image: rollShuttersImg,
    name: { ru: 'Рольставни', hy: 'Ռոլետներ', en: 'Roller Shutters' },
    description: {
      ru: 'Защита от солнца, шума, холода и незваных гостей — ламели поднимаются в компактный короб и полностью скрываются из виду.',
      hy: 'Արևից, աղմուկից, ցրտից և անցանկալի հյուրերից պաշտպանություն. լամելները բարձրանում են կոմպակտ տուփի մեջ և ամբողջությամբ թաքնվում։',
      en: 'Protection from sun, noise, cold and intruders — the slats retract into a compact box, disappearing completely from view.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'rollladen' },
      { brand: 'hella', categorySlug: 'rollladen' },
    ],
  },
  {
    slug: 'patio-awnings',
    image: patioAwningsImg,
    name: { ru: 'Маркизы для террасы', hy: 'Պատշգամբի մարկիզաներ', en: 'Patio Awnings' },
    description: {
      ru: 'Кассетные, полукассетные и открытые маркизы — тень и комфорт на террасах и балконах, сотни вариантов ткани и цвета каркаса.',
      hy: 'Կասետային, կիսակասետային և բաց մարկիզաներ՝ ստվեր և հարմարավետություն պատշգամբների ու բալկոնների համար, հարյուրավոր գործվածքի և կարկասի գույների տարբերակներ։',
      en: 'Cassette, semi-cassette and open-arm awnings — shade and comfort on terraces and balconies, with hundreds of fabric and frame colour options.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'terrassenmarkisen' },
      { brand: 'hella', categorySlug: 'markisen' },
    ],
  },
  {
    slug: 'pergolas',
    image: pergolasImg,
    name: { ru: 'Перголы и крыши для террас', hy: 'Պերգոլաներ և պատշգամբի տանիքներ', en: 'Pergolas & Patio Roofs' },
    description: {
      ru: 'Свободностоящие тканевые перголы и биоклиматические крыши с поворотными ламелями — круглогодичное использование террасы, интегрированные свет и обогрев.',
      hy: 'Ազատ կանգնած գործվածքային պերգոլաներ և բիոկլիմայական տանիքներ պտտվող լամելներով՝ պատշգամբի ամբողջ տարվա օգտագործում, ինտեգրված լուսավորություն և ջեռուցում։',
      en: 'Free-standing fabric pergolas and bioclimatic roofs with rotating slats — year-round terrace use, with integrated lighting and heating.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'pergola-markisen' },
      { brand: 'warema', categorySlug: 'terrassendach' },
      { brand: 'hella', categorySlug: 'pergolamarkise' },
      { brand: 'hella', categorySlug: 'terrassendach' },
    ],
  },
  {
    slug: 'window-awnings',
    image: windowAwningsImg,
    name: { ru: 'Маркизы для окон и фасадные экраны', hy: 'Պատուհանի մարկիզաներ և ճակատային էկրաններ', en: 'Window Awnings & Façade Screens' },
    description: {
      ru: 'Затенение отдельных окон и больших остеклённых фасадов текстильным полотном — вертикальные маркизы, ZIP-экраны и ветрозащитные системы.',
      hy: 'Առանձին պատուհանների և մեծ ապակեպատ ճակատների ստվերապատում տեքստիլ գործվածքով՝ ուղղահայաց մարկիզաներ, ZIP-էկրաններ և քամուց պաշտպանիչ համակարգեր։',
      en: 'Shading for individual windows and large glazed façades with fabric panels — vertical awnings, ZIP screens and wind-protection systems.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'fenstermarkisen' },
      { brand: 'warema', categorySlug: 'senkrechtmarkisen' },
      { brand: 'warema', categorySlug: 'patio-side-screen' },
      { brand: 'hella', categorySlug: 'senkrechtmarkisen' },
      { brand: 'hella', categorySlug: 'wind-sichtschutz' },
    ],
  },
  {
    slug: 'conservatory',
    image: conservatoryImg,
    name: { ru: 'Зимние сады и мансардные окна', hy: 'Ձմեռային այգիներ և թեքածածկ պատուհաններ', en: 'Conservatories & Skylights' },
    description: {
      ru: 'Защита остеклённых крыш, зимних садов и мансардных окон от перегрева — надстекольные, подстекольные и натяжные системы.',
      hy: 'Ապակեպատ տանիքների, ձմեռային այգիների և թեքածածկ պատուհանների պաշտպանություն գերտաքացումից՝ վերապակե, ենթապակե և ձգված համակարգեր։',
      en: 'Overheating protection for glazed roofs, conservatories and skylight windows — overglass, underglass and tensioned systems.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'climara' },
      { brand: 'hella', categorySlug: 'wintergartenmarkisen' },
      { brand: 'silent-gliss', categorySlug: 'skylight' },
    ],
  },
  {
    slug: 'sun-sails',
    image: sunSailsImg,
    name: { ru: 'Зонты и солнечные паруса', hy: 'Հովանոցներ և արևային առագաստներ', en: 'Umbrellas & Sun Sails' },
    description: {
      ru: 'От компактных зонтов для террасы до крупноформатных коммерческих моделей и автоматических тканевых парусов.',
      hy: 'Պատշգամբի կոմպակտ հովանոցներից մինչև խոշոր կոմերցիոն մոդելներ և ավտոմատ գործվածքային առագաստներ։',
      en: 'From compact terrace umbrellas to large-format commercial models and automatic fabric sails.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'sonnensegel' },
      { brand: 'hella', categorySlug: 'schirme-segel' },
    ],
  },
  {
    slug: 'insect-screens',
    image: insectScreensImg,
    name: { ru: 'Москитные сетки', hy: 'Մոծակների ցանցեր', en: 'Insect Screens' },
    description: {
      ru: 'Защита от насекомых для окон, дверей и мансардных проёмов — фиксированные рамы, раздвижные и плиссированные двери.',
      hy: 'Միջատներից պաշտպանություն պատուհանների, դռների և թեքածածկ բացվածքների համար՝ ֆիքսված շրջանակներ, սահող և ծալքավոր դռներ։',
      en: 'Insect protection for windows, doors and roof openings — fixed frames, sliding and pleated doors.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'insektenschutz' },
      { brand: 'hella', categorySlug: 'insektenschutz' },
    ],
  },
  {
    slug: 'curtain-tracks',
    image: curtainTracksImg,
    name: { ru: 'Карнизы и шторные системы', hy: 'Կարնիզներ և վարագույրային համակարգեր', en: 'Curtain Tracks & Systems' },
    description: {
      ru: 'Премиальные карнизы-рельсы Silent Gliss — ручные, шнуровые и электрические, включая решения для отелей и медицинских учреждений.',
      hy: 'Silent Gliss պրեմիում ռելսային կարնիզներ՝ ձեռքի, պարանով և էլեկտրական, այդ թվում՝ լուծումներ հյուրանոցների և բժշկական հաստատությունների համար։',
      en: 'Premium Silent Gliss curtain tracks — hand, corded and electric, including solutions for hotels and healthcare facilities.',
    },
    sources: [
      { brand: 'silent-gliss', categorySlug: 'curtain-tracks' },
      { brand: 'silent-gliss', categorySlug: 'metropole' },
      { brand: 'silent-gliss', categorySlug: 'cubicle' },
    ],
  },
  {
    slug: 'roller-roman-panel',
    image: rollerRomanPanelImg,
    name: { ru: 'Рулонные, римские и панельные шторы', hy: 'Ռուլոնային, հռոմեական և պանելային վարագույրներ', en: 'Roller, Roman & Panel Blinds' },
    description: {
      ru: 'Мягкие текстильные системы для окон — от полного затемнения до лёгких панельных штор для больших проёмов.',
      hy: 'Փափուկ տեքստիլ համակարգեր պատուհանների համար՝ ամբողջական խավարեցումից մինչև թեթև պանելային վարագույրներ մեծ բացվածքների համար։',
      en: 'Soft textile systems for windows — from total room darkening to lightweight panel blinds for large openings.',
    },
    sources: [
      { brand: 'silent-gliss', categorySlug: 'roller-blinds' },
      { brand: 'silent-gliss', categorySlug: 'roman-blinds' },
      { brand: 'silent-gliss', categorySlug: 'panel-glide' },
      { brand: 'hella', categorySlug: 'innenrollos' },
    ],
  },
  {
    slug: 'interior-blinds',
    image: interiorBlindsImg,
    name: { ru: 'Интерьерные жалюзи и плиссе', hy: 'Ինտերիերի ժալյուզիներ և պլիսե', en: 'Interior Blinds & Pleated Shades' },
    description: {
      ru: 'Горизонтальные, вертикальные жалюзи и плиссе для интерьера — точный контроль света в любом помещении.',
      hy: 'Հորիզոնական, ուղղահայաց ժալյուզիներ և պլիսե ինտերիերի համար՝ լույսի ճշգրիտ վերահսկում ցանկացած սենյակում։',
      en: 'Horizontal, vertical blinds and pleated shades for interiors — precise light control in any room.',
    },
    sources: [
      { brand: 'silent-gliss', categorySlug: 'venetian-blinds' },
      { brand: 'silent-gliss', categorySlug: 'vertical-blinds' },
      { brand: 'silent-gliss', categorySlug: 'pleated-blinds' },
      { brand: 'hella', categorySlug: 'innenjalousien' },
    ],
  },
  {
    slug: 'smart-home',
    image: smartHomeImg,
    name: { ru: 'Умный дом и управление', hy: 'Խելացի տուն և կառավարում', en: 'Smart Home & Control Systems' },
    description: {
      ru: 'Радиоуправление, датчики и мобильные приложения — единая экосистема для всех моторизованных систем солнцезащиты.',
      hy: 'Ռադիոկառավարում, սենսորներ և բջջային հավելվածներ՝ միասնական էկոհամակարգ արևապաշտպան բոլոր մոտորացված համակարգերի համար։',
      en: 'Radio control, sensors and mobile apps — a unified ecosystem for all motorised sun-shading systems.',
    },
    sources: [
      { brand: 'warema', categorySlug: 'smart-home' },
      { brand: 'hella', categorySlug: 'onyx' },
      { brand: 'silent-gliss', categorySlug: 'smart-motorisation' },
    ],
  },
];
