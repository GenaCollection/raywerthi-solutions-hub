import type { BrandCatalog } from './types';
import waremaLogo from '@/assets/brands/warema-logo.svg';

import raffstorenHero from '@/assets/products/warema/raffstoren-hero.webp';
import raffstorenBasicHero from '@/assets/products/warema/raffstoren-basic-hero.webp';
import raffstorenBasicB from '@/assets/products/warema/raffstoren-basic-b.webp';
import raffstorenAsymHero from '@/assets/products/warema/raffstoren-asym-hero.webp';
import raffstorenAsymB from '@/assets/products/warema/raffstoren-asym-b.webp';
import raffstorenSelfSupportHero from '@/assets/products/warema/raffstoren-selfsupport-hero.webp';
import raffstorenSelfSupportB from '@/assets/products/warema/raffstoren-selfsupport-b.webp';
import raffstorenTopMounted from '@/assets/products/warema/raffstoren-topmounted.jpg';
import raffstorenFrontMounted from '@/assets/products/warema/raffstoren-frontmounted.jpg';
import raffstorenWindowSystem from '@/assets/products/warema/raffstoren-windowsystem.jpg';
import raffstorenShaft from '@/assets/products/warema/raffstoren-shaft.jpg';
import raffstorenTopMountedB from '@/assets/products/warema/raffstoren-topmounted-b.webp';
import raffstorenTopMountedC from '@/assets/products/warema/raffstoren-topmounted-c.webp';
import raffstorenFrontMountedB from '@/assets/products/warema/raffstoren-frontmounted-b.webp';
import raffstorenFrontMountedC from '@/assets/products/warema/raffstoren-frontmounted-c.webp';
import raffstorenWindowSystemB from '@/assets/products/warema/raffstoren-windowsystem-b.webp';
import raffstorenWindowSystemC from '@/assets/products/warema/raffstoren-windowsystem-c.webp';
import raffstorenShaftB from '@/assets/products/warema/raffstoren-shaft-b.webp';
import rollladenHero from '@/assets/products/warema/rollladen-hero.webp';
import rollladenTopMounted from '@/assets/products/warema/rollladen-topmounted.webp';
import rollladenTopMountedB from '@/assets/products/warema/rollladen-topmounted-b.webp';
import rollladenFrontMounted from '@/assets/products/warema/rollladen-frontmounted.jpg';
import rollladenFrontMountedB from '@/assets/products/warema/rollladen-frontmounted-b.webp';
import rollladenShaft from '@/assets/products/warema/rollladen-shaft.webp';
import rollladenShaftB from '@/assets/products/warema/rollladen-shaft-b.webp';
import rollladenShaftC from '@/assets/products/warema/rollladen-shaft-c.webp';
import terreaImg from '@/assets/products/warema/terrea-markise.webp';
import terreaCassette from '@/assets/products/warema/terrea-cassette.webp';
import terreaCassetteB from '@/assets/products/warema/terrea-cassette-b.webp';
import terreaSemiCassette from '@/assets/products/warema/terrea-semicassette.webp';
import terreaBalcony from '@/assets/products/warema/terrea-balcony.webp';
import terreaBalconyB from '@/assets/products/warema/terrea-balcony-b.webp';
import pereaImg from '@/assets/products/warema/perea-gallery2.webp';
import pereaGallery2 from '@/assets/products/warema/perea-gallery4.webp';
import pereaGallery3 from '@/assets/products/warema/perea-gallery3.webp';
import pereaIllustration from '@/assets/products/warema/perea-pergola-v2.webp';
import pereaP60 from '@/assets/products/warema/perea-p60.webp';
import pereaP70 from '@/assets/products/warema/perea-p70.jpg';
import pereaP70B from '@/assets/products/warema/perea-p70-b.webp';
import fenstermarkiseImg from '@/assets/products/warema/fenstermarkise-hero.webp';
import fenstermarkiseFrontMounted from '@/assets/products/warema/fenstermarkise-frontmounted.jpg';
import fenstermarkiseFrontMountedB from '@/assets/products/warema/fenstermarkise-frontmounted-b.webp';
import fmTopMountedHero from '@/assets/products/warema/fm-topmounted-hero.webp';
import fmTopMountedB from '@/assets/products/warema/fm-topmounted-b.webp';
import fmTopMountedC from '@/assets/products/warema/fm-topmounted-c.webp';
import fmWindowSystemHero from '@/assets/products/warema/fm-windowsystem-hero.jpg';
import fmWindowSystemB from '@/assets/products/warema/fm-windowsystem-b.webp';
import fmWindowSystemC from '@/assets/products/warema/fm-windowsystem-c.webp';
import fmShaftHero from '@/assets/products/warema/fm-shaft-hero.webp';
import fmShaftB from '@/assets/products/warema/fm-shaft-b.webp';
import fmShaftC from '@/assets/products/warema/fm-shaft-c.webp';
import fmDropArmHero from '@/assets/products/warema/fm-droparm-hero.jpg';
import fmDropArmB from '@/assets/products/warema/fm-droparm-b.webp';
import fmDropArmC from '@/assets/products/warema/fm-droparm-c.webp';
import patioSideHero from '@/assets/products/warema/patioside-hero.webp';
import patioSideB from '@/assets/products/warema/patioside-b.webp';
import patioSideC from '@/assets/products/warema/patioside-c.webp';
import markisoletteImg from '@/assets/products/warema/markisolette.webp';
import markisoletteB from '@/assets/products/warema/markisolette-b.webp';
import easyzipImg from '@/assets/products/warema/easyzip.webp';
import easyzipB from '@/assets/products/warema/easyzip-b.webp';
import senkrechtmarkiseImg from '@/assets/products/warema/senkrechtmarkise.webp';
import senkrechtCableB from '@/assets/products/warema/senkrecht-cable-b.webp';
import senkrechtRail from '@/assets/products/warema/senkrecht-rail.webp';
import senkrechtRailB from '@/assets/products/warema/senkrecht-rail-b.webp';
import climaraW10 from '@/assets/products/warema/climara-v2a.jpg';
import climaraD3 from '@/assets/products/warema/climara-v2b.jpg';
import climaraD3B from '@/assets/products/warema/climara-d3-b.webp';
import climaraW20 from '@/assets/products/warema/climara-w20.webp';
import climaraW20B from '@/assets/products/warema/climara-w20-b.webp';
import climaraW10Hero from '@/assets/products/warema/climara-w10-hero.jpg';
import climaraW10B from '@/assets/products/warema/climara-w10-b.webp';
import lamaxaHero from '@/assets/products/warema/lamaxa-l70-hero.webp';
import lamaxaL70Detail from '@/assets/products/warema/lamaxa-l70-detail.webp';
import lamaxaL50 from '@/assets/products/warema/lamaxa-l50.jpg';
import lamaxaL50B from '@/assets/products/warema/lamaxa-l50-b.webp';
import lamaxaL50C from '@/assets/products/warema/lamaxa-l50-c.webp';
import lamaxaL60 from '@/assets/products/warema/lamaxa-l60.jpg';
import lamaxaL60B from '@/assets/products/warema/lamaxa-l60-b.webp';
import soneaHero from '@/assets/products/warema/sonea-hero.webp';
import soneaModel from '@/assets/products/warema/sonea-model.webp';
import soneaS70B from '@/assets/products/warema/sonea-s70-b.webp';
import soneaS50 from '@/assets/products/warema/sonea-s50.webp';
import soneaS50B from '@/assets/products/warema/sonea-s50-b.webp';
import soneaS40 from '@/assets/products/warema/sonea-s40.jpg';
import soneaS40B from '@/assets/products/warema/sonea-s40-b.webp';
import insektenHero from '@/assets/products/warema/insekten-hero.webp';
import insektenRoller from '@/assets/products/warema/insekten-roller.jpg';
import insektenRollerB from '@/assets/products/warema/insekten-roller-b.webp';
import insektenSliding from '@/assets/products/warema/insekten-sliding.webp';
import insektenSlidingB from '@/assets/products/warema/insekten-sliding-b.webp';
import grandslideImg from '@/assets/products/warema/grandslide.webp';
import grandslideDetail from '@/assets/products/warema/grandslide-detail.webp';
import insektenPleatedHero from '@/assets/products/warema/insekten-pleated-hero.jpg';
import insektenPleatedB from '@/assets/products/warema/insekten-pleated-b.webp';
import insektenFixedHero from '@/assets/products/warema/insekten-fixed-hero.jpg';
import insektenFixedB from '@/assets/products/warema/insekten-fixed-b.webp';
import insektenLightwellHero from '@/assets/products/warema/insekten-lightwell-hero.jpg';
import insektenLightwellB from '@/assets/products/warema/insekten-lightwell-b.webp';
import smarthomeHero from '@/assets/products/warema/smarthome-hero.webp';
import smarthomeDevice from '@/assets/products/warema/smarthome-device.webp';
import smarthomeHomeeHero from '@/assets/products/warema/smarthome-homee-hero.jpg';
import smarthomeHomeeB from '@/assets/products/warema/smarthome-homee-b.webp';
import smarthomeWebcontrolproB from '@/assets/products/warema/smarthome-webcontrolpro-b.webp';
import smarthomeWms from '@/assets/products/warema/smarthome-wms.jpg';
import smarthomeWmsB from '@/assets/products/warema/smarthome-wms-b.webp';
import smarthomeEwfs from '@/assets/products/warema/smarthome-ewfs.png';
import smarthomeEwfsB from '@/assets/products/warema/smarthome-ewfs-b.webp';

export const warema: BrandCatalog = {
  slug: 'warema',
  name: 'WAREMA',
  logo: waremaLogo,
  siteUrl: 'https://www.warema.com',
  tagline: {
    ru: 'Немецкий производитель полного цикла: наружные жалюзи, рольставни, маркизы, перголы и системы управления для дома и коммерческих объектов.',
    hy: 'Գերմանական արտադրող՝ ամբողջական ցիկլով. արտաքին ժալյուզիներ, ռոլետներ, մարկիզաներ, պերգոլաներ և կառավարման համակարգեր տան և կոմերցիոն օբյեկտների համար։',
    en: 'A full-cycle German manufacturer: external venetian blinds, roller shutters, awnings, pergolas and control systems for homes and commercial buildings.',
  },
  categories: [
    {
      slug: 'raffstoren',
      image: raffstorenHero,
      name: {
        ru: 'Наружные алюминиевые жалюзи (Раффшторы)',
        hy: 'Արտաքին ալյումինե ժալյուզիներ (Raffstoren)',
        en: 'External Aluminium Venetian Blinds (Raffstoren)',
      },
      intro: {
        ru: 'Гибкая регулировка света, тепла и приватности за счёт поворотных ламелей. WAREMA предлагает семь систем крепления — от заводской интеграции в окно до монтажа в существующую нишу — и три профиля ламелей на выбор.',
        hy: 'Լույսի, ջերմության և գաղտնիության ճկուն կարգավորում պտտվող լամելների միջոցով։ WAREMA-ն առաջարկում է յոթ ամրացման համակարգ՝ պատուհանի մեջ գործարանային ինտեգրումից մինչև առկա խորշում տեղադրում, և երեք տեսակի լամելային պրոֆիլ։',
        en: 'Flexible control of light, heat and privacy via rotating slats. WAREMA offers seven mounting systems — from factory integration into the window to installation in an existing niche — plus three slat profile shapes.',
      },
      models: [
        {
          id: 'top-mounted',
          name: 'Aufsetz-Außenjalousie',
          description: {
            ru: 'Монтируется прямо на оконный блок ещё на заводе — единая конструкция для нового строительства и замены окон.',
            hy: 'Տեղադրվում է անմիջապես պատուհանի բլոկի վրա դեռևս գործարանում՝ միասնական կոնստրուկցիա նոր շինարարության և պատուհանների փոխարինման համար։',
            en: 'Factory-mounted directly onto the window unit as a single assembly — ideal for new builds and window replacement.',
          },
          specs: {
            ru: ['Ширина до 4500 мм, высота до 5000 мм', 'Площадь до 16 м²', 'Направляющие: рельсовые или тросовые'],
            hy: ['Լայնությունը՝ մինչև 4500 մմ, բարձրությունը՝ մինչև 5000 մմ', 'Մակերեսը՝ մինչև 16 մ²', 'Ուղղորդում՝ ռելսային կամ ճոպանային'],
            en: ['Width up to 4500 mm, height up to 5000 mm', 'Area up to 16 m²', 'Rail or cable guidance'],
          },
          image: raffstorenTopMounted,
          gallery: [raffstorenTopMountedB, raffstorenTopMountedC],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/top-mounted-external-venetian-blinds.html',
        },
        {
          id: 'front-mounted',
          name: 'Vorbau-Außenjalousie',
          description: {
            ru: 'Отдельный короб перед окном — универсальное решение для нового строительства и ремонта, доступен вариант с солнечным приводом.',
            hy: 'Առանձին տուփ պատուհանի առջև՝ ունիվերսալ լուծում նոր շինարարության և վերանորոգման համար, հասանելի է արևային շարժիչով տարբերակ։',
            en: 'A separate box mounted in front of the window — a versatile choice for both new construction and renovation, with an optional solar drive.',
          },
          specs: {
            ru: ['Профили ламелей: с бортиком, плоский, Zetra (затемняющий)', 'Солнечный привод — без прокладки кабеля', 'Широкая палитра цветов короба'],
            hy: ['Լամելների պրոֆիլներ՝ եզրագծված, հարթ, Zetra (խավարեցնող)', 'Արևային շարժիչ՝ առանց մալուխի անցկացման', 'Տուփի գույների լայն ընտրանի'],
            en: ['Slat profiles: beaded, flat, or Zetra dim-out', 'Solar drive option — no cabling needed', 'Wide box colour palette'],
          },
          image: raffstorenFrontMounted,
          gallery: [raffstorenFrontMountedB, raffstorenFrontMountedC],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/front-mounted-external-venetian-blinds.html',
        },
        {
          id: 'window-system',
          name: 'Fenster-System-Außenjalousie',
          description: {
            ru: 'Разработана для интеграции в фасады с утеплением (ETICS) и штукатурные системы — жалюзи становятся частью фасада, а не надстройкой.',
            hy: 'Նախագծված է ջերմամեկուսացված (ETICS) և ծեփածո ճակատների մեջ ինտեգրելու համար՝ ժալյուզին դառնում է ճակատի մաս, ոչ թե վերնաշենք։',
            en: 'Designed for integration into insulated (ETICS) and rendered façades — the blind becomes part of the façade rather than an add-on.',
          },
          specs: {
            ru: ['Направляющие: рельсовые или тросовые', 'Подходит для новых фасадов и реновации', 'Скрытый монтаж в теплоизоляционный слой'],
            hy: ['Ուղղորդում՝ ռելսային կամ ճոպանային', 'Հարմար է նոր ճակատների և վերանորոգման համար', 'Թաքնված տեղադրում ջերմամեկուսիչ շերտում'],
            en: ['Rail or cable guidance', 'Suitable for new façades and renovation', 'Concealed installation within the insulation layer'],
          },
          image: raffstorenWindowSystem,
          gallery: [raffstorenWindowSystemB, raffstorenWindowSystemC],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/external-venetian-blind-window-systems.html',
        },
        {
          id: 'shaft',
          name: 'Schacht-Außenjalousie',
          description: {
            ru: 'Использует существующую нишу (шахту) над окном — аккуратное решение для реновации без изменения фасада.',
            hy: 'Օգտագործում է պատուհանի վերևում առկա խորշը (շախտը)՝ կոկիկ լուծում վերանորոգման համար՝ առանց ճակատը փոխելու։',
            en: 'Uses the existing niche (shaft) above the window — a discreet renovation solution that leaves the façade untouched.',
          },
          specs: {
            ru: ['Для существующих проёмов с нишей', 'Не требует изменения фасада', 'Мотор со встроенными концевыми выключателями'],
            hy: ['Խորշով առկա բացվածքների համար', 'Ճակատի փոփոխություն չի պահանջում', 'Շարժիչը՝ ներկառուցված վերջնային անջատիչներով'],
            en: ['For existing openings with a niche', 'No façade modification required', 'Motor with integrated limit switches'],
          },
          image: raffstorenShaft,
          gallery: [raffstorenShaftB],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/shaft-external-venetian-blinds.html',
        },
        {
          id: 'basic',
          name: 'Basis-Außenjalousie',
          description: {
            ru: 'Универсальная система с тросовой или рельсовой направляющей — подходит для оконных откосов, вентилируемых фасадов, витражных конструкций и зимних садов.',
            hy: 'Ունիվերսալ համակարգ ճոպանային կամ ռելսային ուղղորդմամբ՝ հարմար է լուսամուտների խորշերի, օդափոխվող ճակատների, վիտրաժային կոնստրուկցիաների և ձմեռային այգիների համար։',
            en: 'A versatile system with cable or rail guidance — suited to window reveals, rear-ventilated façades, transom-and-mullion structures and conservatories.',
          },
          specs: {
            ru: ['Максимум 5000×5000 мм (25 м²)', 'Тросовая (изящная) или рельсовая (ветростойкая) направляющая', 'Опциональная защитная накрывающая планка'],
            hy: ['Առավելագույնը 5000×5000 մմ (25 մ²)', 'Ճոպանային (նրբագեղ) կամ ռելսային (քամակայուն) ուղղորդում', 'Հավելյալ պաշտպանիչ ծածկող պլանկա'],
            en: ['Max 5000×5000 mm (25 m²)', 'Cable (slender) or rail (wind-stable) guidance', 'Optional protective cover panel'],
          },
          image: raffstorenBasicHero,
          gallery: [raffstorenBasicB],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/basic-external-venetian-blinds.html',
        },
        {
          id: 'asymmetrical',
          name: 'Sonderform-Außenjalousie',
          description: {
            ru: 'Изготавливается по индивидуальным размерам для скатных, треугольных окон и проёмов с наклонным подоконником — угол наклона ламелей регулируется независимо от формы проёма.',
            hy: 'Արտադրվում է անհատական չափերով՝ թեք, եռանկյունաձև պատուհանների և թեք լուսամուտամարգի բացվածքների համար՝ լամելների թեքության անկյունը կարգավորվում է անկախ բացվածքի ձևից։',
            en: 'Made to measure for sloping gable, triangular windows and openings with a sloping sill — the slat angle adjusts independently of the opening\'s shape.',
          },
          specs: {
            ru: ['Наклон от 5° до 52°', 'Максимум 4960×4000 мм (20 м²)', 'Сочетается с обычными жалюзи на одном фасаде'],
            hy: ['Թեքությունը՝ 5°-ից 52°', 'Առավելագույնը 4960×4000 մմ (20 մ²)', 'Համադրվում է սովորական ժալյուզիների հետ նույն ճակատին'],
            en: ['Inclination 5° to 52°', 'Max 4960×4000 mm (20 m²)', 'Combinable with standard blinds on the same façade'],
          },
          image: raffstorenAsymHero,
          gallery: [raffstorenAsymB],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/asymmetrical-external-venetian-blinds.html',
        },
        {
          id: 'self-supporting',
          name: 'Selbsttragende Außenjalousie',
          description: {
            ru: 'Накрывающая планка держится на самих направляющих — крепление идёт только через кронштейны направляющих, без отдельной фиксации короба к зданию.',
            hy: 'Ծածկող պլանկան պահվում է հենց ուղղորդիչների վրա՝ ամրացումն իրականացվում է միայն ուղղորդիչների կրիչներով, առանց տուփի առանձին ամրացման շենքին։',
            en: 'The cover panel is carried on the guide rails themselves — fixing goes only through the guide-rail brackets, without a separate cover-panel fixing to the building.',
          },
          specs: {
            ru: ['Максимум 4500×5000 мм (13 м²)', 'Не требует отдельного крепления короба к фасаду', 'Для витражных фасадов и зимних садов'],
            hy: ['Առավելագույնը 4500×5000 մմ (13 մ²)', 'Չի պահանջում տուփի առանձին ամրացում ճակատին', 'Վիտրաժային ճակատների և ձմեռային այգիների համար'],
            en: ['Max 4500×5000 mm (13 m²)', 'No separate cover-panel fixing to the façade required', 'For transom-and-mullion façades and conservatories'],
          },
          image: raffstorenSelfSupportHero,
          gallery: [raffstorenSelfSupportB],
          sourceUrl: 'https://www.warema.com/en/external-venetian-blinds/self-supporting-external-venetian-blind.html',
        },
      ],
    },
    {
      slug: 'rollladen',
      image: rollladenHero,
      name: { ru: 'Рольставни', hy: 'Ռոլետներ (Rollladen)', en: 'Roller Shutters' },
      intro: {
        ru: 'Защита от солнца, шума, холода и незваных гостей в одной системе. Ламели поднимаются в компактный короб над окном и полностью скрываются из виду.',
        hy: 'Արևից, աղմուկից, ցրտից և անցանկալի հյուրերից պաշտպանություն մեկ համակարգում։ Լամելները բարձրանում են պատուհանի վերևում գտնվող կոմպակտ տուփի մեջ և ամբողջությամբ թաքնվում։',
        en: 'Protection from sun, noise, cold and intruders in a single system. The slats retract into a compact box above the window, disappearing completely from view.',
      },
      models: [
        {
          id: 'top-mounted',
          name: 'Aufsatzrollladen',
          description: {
            ru: 'Монтируется вместе с окном как единый узел — оптимально для нового строительства и полной замены окон.',
            hy: 'Տեղադրվում է պատուհանի հետ միասին որպես մեկ միասնական հանգույց՝ օպտիմալ է նոր շինարարության և պատուհանների ամբողջական փոխարինման համար։',
            en: 'Installed together with the window as one unit — the optimal choice for new construction and full window replacement.',
          },
          specs: {
            ru: ['Единый узел с оконным блоком', 'Компактный короб над проёмом', 'Мотор, ручной или солнечный привод'],
            hy: ['Միասնական հանգույց՝ պատուհանի բլոկի հետ', 'Կոմպակտ տուփ բացվածքի վերևում', 'Շարժիչային, ձեռքի կամ արևային շարժիչ'],
            en: ['Single unit with the window frame', 'Compact box above the opening', 'Motorised, manual or solar drive'],
          },
          image: rollladenTopMounted,
          gallery: [rollladenTopMountedB],
          sourceUrl: 'https://www.warema.com/en/roller-shutters/top-mounted-roller-shutter.html',
        },
        {
          id: 'front-mounted',
          name: 'Vorbaurollladen',
          description: {
            ru: 'Отдельный короб на фасаде — три конструкции короба, включая версии со встроенной москитной сеткой.',
            hy: 'Առանձին տուփ ճակատին՝ երեք տուփի կոնստրուկցիա, այդ թվում՝ ներկառուցված մոծակների ցանցով տարբերակներ։',
            en: 'A separate box on the façade — three box constructions available, including versions with an integrated insect screen.',
          },
          specs: {
            ru: ['Формы короба: прямоугольный, полукруглый, квадратный', 'Максимум 3500×3500 мм (до 10 м²)', 'Опция: интегрированная москитная сетка'],
            hy: ['Տուփի ձևեր՝ ուղղանկյուն, կիսակլոր, քառակուսի', 'Առավելագույնը 3500×3500 մմ (մինչև 10 մ²)', 'Հավելյալ՝ ներկառուցված մոծակների ցանց'],
            en: ['Box shapes: rectangular, half-round, square', 'Max 3500×3500 mm (up to 10 m²)', 'Option: integrated insect screen'],
          },
          image: rollladenFrontMounted,
          gallery: [rollladenFrontMountedB],
          sourceUrl: 'https://www.warema.com/en/roller-shutters/front-mounted-roller-shutter.html',
        },
        {
          id: 'shaft',
          name: 'Schachtrollladen',
          description: {
            ru: 'Использует готовую монтажную нишу — независим от типа окна, подходит для реновации.',
            hy: 'Օգտագործում է պատրաստի տեղադրման խորշը՝ անկախ պատուհանի տեսակից, հարմար է վերանորոգման համար։',
            en: 'Uses an existing installation shaft — independent of the window type, ideal for renovation projects.',
          },
          specs: {
            ru: ['Не зависит от типа и производителя окна', 'Быстрая установка без демонтажа окна', 'Совместим с системой WMS'],
            hy: ['Կախված չէ պատուհանի տեսակից և արտադրողից', 'Արագ տեղադրում առանց պատուհանը ապամոնտաժելու', 'Համատեղելի է WMS համակարգի հետ'],
            en: ['Independent of window type or manufacturer', 'Fast installation without removing the window', 'Compatible with the WMS control system'],
          },
          image: rollladenShaft,
          gallery: [rollladenShaftB, rollladenShaftC],
          sourceUrl: 'https://www.warema.com/en/roller-shutters/shaft-roller-shutters.html',
        },
        {
          id: 'solar',
          name: 'Solar-Rollladen',
          description: {
            ru: 'Мотор питается от солнечной панели со встроенным аккумулятором — монтаж без прокладки силового кабеля.',
            hy: 'Շարժիչը սնվում է արևային վահանակից՝ ներկառուցված մարտկոցով՝ տեղադրում առանց էլեկտրական մալուխի անցկացման։',
            en: 'The motor is powered by a solar panel with an integrated battery — installation without running mains cabling.',
          },
          specs: {
            ru: ['Автономное питание от солнца', 'Не требует силовой проводки', 'Управление радиопультом или приложением'],
            hy: ['Ինքնավար սնուցում արևից', 'Չի պահանջում էլեկտրական մալուխային անցկացում', 'Կառավարում ռադիոկառավարիչով կամ հավելվածով'],
            en: ['Self-sufficient solar power', 'No mains wiring required', 'Controlled via radio remote or app'],
          },
          image: rollladenFrontMounted,
          sourceUrl: 'https://www.warema.com/en/roller-shutters/index-2.html',
        },
      ],
    },
    {
      slug: 'terrassenmarkisen',
      image: terreaImg,
      name: { ru: 'Маркизы для террасы Terrea', hy: 'Terrea պատշգամբի մարկիզաներ', en: 'Terrea Patio Awnings' },
      intro: {
        ru: 'Флагманская линейка кассетных, полукассетных и открытых маркиз WAREMA — свыше 200 вариантов ткани и 200 цветов каркаса, автоматическое втягивание при ветре и дожде.',
        hy: 'WAREMA-ի հիմնական՝ կասետային, կիսակասետային և բաց մարկիզաների գիծը՝ 200-ից ավել գործվածքի և 200 գույնի կարկասի ընտրանի, ինքնաշխատ ետ քաշում քամու և անձրևի ժամանակ։',
        en: 'WAREMA\'s flagship range of cassette, semi-cassette and open-arm awnings — 200+ fabric designs and 200+ frame colours, with automatic retraction in wind or rain.',
      },
      models: [
        {
          id: 'cassette',
          name: 'Terrea Cassette',
          description: {
            ru: 'Полностью закрытая кассета защищает ткань и механизм от непогоды в сложенном виде — премиальный внешний вид для террас и балконов.',
            hy: 'Ամբողջովին փակ կասետը պաշտպանում է գործվածքն ու մեխանիզմը եղանակային ազդեցություններից ծալված վիճակում՝ պրեմիում տեսք պատշգամբների և բալկոնների համար։',
            en: 'A fully enclosed cassette shields the fabric and mechanism from the elements when retracted — a premium look for patios and balconies.',
          },
          specs: {
            ru: ['Ширина до 7000 мм, вынос до 4000 мм', 'Площадь до 28 м²', 'Мотор с радиоуправлением и датчиком ветра'],
            hy: ['Լայնությունը՝ մինչև 7000 մմ, դուրսբերումը՝ մինչև 4000 մմ', 'Մակերեսը՝ մինչև 28 մ²', 'Ռադիոկառավարվող շարժիչ և քամու սենսոր'],
            en: ['Width up to 7000 mm, projection up to 4000 mm', 'Area up to 28 m²', 'Radio-controlled motor with wind sensor'],
          },
          image: terreaCassette,
          gallery: [terreaCassetteB],
          sourceUrl: 'https://www.warema.com/en/awnings/terrea-patio-awnings.html',
        },
        {
          id: 'semi-cassette',
          name: 'Terrea Semi-Cassette',
          description: {
            ru: 'Компактный профиль при частичном укрытии ткани — баланс цены и защиты для частных домов.',
            hy: 'Կոմպակտ պրոֆիլ գործվածքի մասնակի ծածկույթով՝ գնի և պաշտպանության հավասարակշռություն մասնավոր տների համար։',
            en: 'A compact profile with partial fabric coverage — a balance of price and protection for private homes.',
          },
          specs: {
            ru: ['Крепление на стену или под потолком', 'Ручной или моторизованный привод', 'Более 200 вариантов ткани'],
            hy: ['Ամրացում պատին կամ առաստաղին', 'Ձեռքի կամ շարժիչային մեկնարկ', '200-ից ավել գործվածքի տարբերակ'],
            en: ['Wall or ceiling mounting', 'Manual or motorised drive', '200+ fabric options'],
          },
          image: terreaSemiCassette,
          sourceUrl: 'https://www.warema.com/en/awnings/terrea-patio-awnings.html',
        },
        {
          id: 'balcony',
          name: 'Balcony Awning',
          description: {
            ru: 'Маркиза, специально спроектированная под ограниченное пространство балкона — компактный монтаж без потери функциональности.',
            hy: 'Բալկոնի սահմանափակ տարածքի համար հատուկ նախագծված մարկիզա՝ կոմպակտ տեղադրում առանց ֆունկցիոնալությունը կորցնելու։',
            en: 'An awning purpose-built for the limited space of a balcony — compact installation without sacrificing function.',
          },
          specs: {
            ru: ['Изготовление по индивидуальным размерам', 'Минимальная глубина монтажа', 'Совместима с боковыми ветрозащитными экранами'],
            hy: ['Արտադրություն անհատական չափերով', 'Նվազագույն տեղադրման խորություն', 'Համատեղելի է կողային քամուց պաշտպանիչ էկրանների հետ'],
            en: ['Made to individual measurements', 'Minimal mounting depth', 'Compatible with side wind-protection screens'],
          },
          image: terreaBalcony,
          gallery: [terreaBalconyB],
          sourceUrl: 'https://www.warema.com/en/awnings/balcony-awnings.html',
        },
      ],
    },
    {
      slug: 'pergola-markisen',
      image: pereaImg,
      name: { ru: 'Маркиза-пергола Perea', hy: 'Perea պերգոլա-մարկիզա', en: 'Perea Pergola Awning' },
      intro: {
        ru: 'Тканевая крыша на собственных опорах — свободностоящая конструкция для больших террас, обладатель Plus X Award. Пять модификаций под разные площади и уровень автоматизации.',
        hy: 'Գործվածքային տանիք սեփական հենարանների վրա՝ ազատ կանգնած կոնստրուկցիա մեծ պատշգամբների համար, Plus X Award մրցանակի դափնեկիր։ Հինգ մոդիֆիկացիա՝ ըստ մակերեսի և ավտոմատացման մակարդակի։',
        en: 'A fabric roof on its own free-standing supports — designed for large terraces and a Plus X Award winner. Five variants covering different sizes and levels of automation.',
      },
      models: [
        {
          id: 'p40',
          name: 'Perea P40',
          description: {
            ru: 'Базовая моторизованная версия перголы — надёжный привод и точное натяжение ткани.',
            hy: 'Պերգոլայի հիմնական մոտորացված տարբերակը՝ հուսալի շարժիչ և գործվածքի ճշգրիտ լարվածություն։',
            en: 'The base motorised pergola version — a reliable drive and precise fabric tensioning.',
          },
          specs: {
            ru: ['Ширина до 6000 мм, глубина до 5000 мм', 'Площадь до 30 м²', 'Моторизованный привод'],
            hy: ['Լայնությունը՝ մինչև 6000 մմ, խորությունը՝ մինչև 5000 մմ', 'Մակերեսը՝ մինչև 30 մ²', 'Մոտորացված մեկնարկ'],
            en: ['Width up to 6000 mm, depth up to 5000 mm', 'Area up to 30 m²', 'Motorised drive'],
          },
          gallery: [pereaGallery2, pereaGallery3, pereaIllustration],
          sourceUrl: 'https://www.warema.com/en/awnings/pergola-awning.html',
        },
        {
          id: 'p60',
          name: 'Perea P60',
          description: {
            ru: 'Старшая модель с водоотводом и влагостойкой тканью Sunworker Top — работает даже под дождём.',
            hy: 'Ավագ մոդելը՝ ջրահեռացումով և խոնավակայուն Sunworker Top գործվածքով՝ աշխատում է անգամ անձրևի ժամանակ։',
            en: 'The top-tier model with integrated water drainage and rain-resistant Sunworker Top fabric — usable even in the rain.',
          },
          specs: {
            ru: ['Ширина до 6500 мм, глубина до 7000 мм', 'Площадь до 35 м²', 'Технология натяжения secudrive®'],
            hy: ['Լայնությունը՝ մինչև 6500 մմ, խորությունը՝ մինչև 7000 մմ', 'Մակերեսը՝ մինչև 35 մ²', 'secudrive® լարման տեխնոլոգիա'],
            en: ['Width up to 6500 mm, depth up to 7000 mm', 'Area up to 35 m²', 'secudrive® tensioning technology'],
          },
          image: pereaP60,
          sourceUrl: 'https://www.warema.com/en/awnings/pergola-awning.html',
        },
        {
          id: 'p70',
          name: 'Perea P70',
          description: {
            ru: 'Складная система с оригинальной кинематикой — эстетичный вид в сложенном состоянии.',
            hy: 'Ծալովի համակարգ ինքնատիպ կինեմատիկայով՝ էսթետիկ տեսք ծալված վիճակում։',
            en: 'A folding system with distinctive kinematics — an elegant appearance even when retracted.',
          },
          specs: {
            ru: ['Ширина до 6000 мм, глубина до 5000 мм', 'Технология secudrive®', 'Более 200 вариантов ткани'],
            hy: ['Լայնությունը՝ մինչև 6000 մմ, խորությունը՝ մինչև 5000 մմ', 'secudrive® տեխնոլոգիա', '200-ից ավել գործվածքի տարբերակ'],
            en: ['Width up to 6000 mm, depth up to 5000 mm', 'secudrive® technology', '200+ fabric options'],
          },
          image: pereaP70,
          gallery: [pereaP70B],
          sourceUrl: 'https://www.warema.com/en/awnings/pergola-awning.html',
        },
      ],
    },
    {
      slug: 'fenstermarkisen',
      image: fenstermarkiseImg,
      name: { ru: 'Маркизы для окон и ZIP-экраны', hy: 'Պատուհանի մարկիզաներ և ZIP-էկրաններ', en: 'Window Awnings & ZIP Screens' },
      intro: {
        ru: 'Затенение отдельных окон — семь конструкций монтажа: от заводской интеграции в новое окно до классических маркиз с отвесом и системы easyZIP, где ткань идёт в боковых направляющих без единого просвета и выдерживает порывы ветра до 150 км/ч.',
        hy: 'Առանձին պատուհանների ստվերապատում. յոթ տեղադրման կոնստրուկցիա՝ նոր պատուհանի մեջ գործարանային ինտեգրումից մինչև դասական մարկիզաներ և easyZIP համակարգ, որտեղ գործվածքը շարժվում է կողային ուղղորդիչներում առանց ճեղքի՝ դիմանալով մինչև 150 կմ/ժ քամու հորձանուտին։',
        en: 'Shading for individual windows — seven mounting constructions: from factory integration into a new window to classic drop-arm awnings and the easyZIP system, where the fabric runs in side guide rails with no gaps, rated for gusts up to 150 km/h.',
      },
      models: [
        {
          id: 'front-mounted',
          name: 'Vorbau-Fenstermarkise',
          description: {
            ru: 'Открытый или закрытый алюминиевый короб перед окном — базовое решение для затенения одного проёма.',
            hy: 'Բաց կամ փակ ալյումինե տուփ պատուհանի առջև՝ մեկ բացվածքի ստվերապատման հիմնական լուծում։',
            en: 'An open or enclosed aluminium box in front of the window — the standard solution for shading a single opening.',
          },
          specs: {
            ru: ['Направляющие: тросовая, рельсовая, easyZIP', 'easyZIP: до 6000×6000 мм (18 м²)', 'Открытый или скрытый в штукатурке короб'],
            hy: ['Ուղղորդում՝ ճոպանային, ռելսային, easyZIP', 'easyZIP՝ մինչև 6000×6000 մմ (18 մ²)', 'Բաց կամ ծեփի մեջ թաքնված տուփ'],
            en: ['Guidance: cable, rail, or easyZIP', 'easyZIP: up to 6000×6000 mm (18 m²)', 'Exposed or plaster-concealed box'],
          },
          image: fenstermarkiseFrontMounted,
          gallery: [fenstermarkiseFrontMountedB],
          sourceUrl: 'https://www.warema.com/en/awnings/front-mounted-awning.html',
        },
        {
          id: 'top-mounted',
          name: 'Aufsatz-Fenstermarkise (NA-MA)',
          description: {
            ru: 'Крепится прямо к окну ещё на заводе и монтируется вместе с ним единым узлом — решение для нового строительства, где короб и направляющие можно полностью скрыть в штукатурке.',
            hy: 'Ամրացվում է անմիջապես պատուհանին դեռևս գործարանում և տեղադրվում է դրա հետ մեկ միասնական հանգույցով՝ լուծում նոր շինարարության համար, որտեղ տուփն ու ուղղորդիչները կարելի է ամբողջությամբ թաքցնել ծեփի մեջ։',
            en: 'Fixed directly to the window at the factory and installed together with it as one unit — a solution for new construction where the box and guide rails can be fully concealed in the render.',
          },
          specs: {
            ru: ['Максимум 3000×3100 мм (9 м²)', 'Ветростойкая направляющая easyZIP', 'Короб под кладку, ревизия снаружи'],
            hy: ['Առավելագույնը 3000×3100 մմ (9 մ²)', 'Քամակայուն easyZIP ուղղորդում', 'Տուփ որմնադրության համար, վերանայում դրսից'],
            en: ['Max 3000×3100 mm (9 m²)', 'Wind-stable easyZIP guidance', 'Box for masonry, inspection access outside'],
          },
          image: fmTopMountedHero,
          gallery: [fmTopMountedB, fmTopMountedC],
          sourceUrl: 'https://www.warema.com/en/awnings/top-mounted-awnings-for-new-buildings.html',
        },
        {
          id: 'window-system',
          name: 'Fenster-System-Fenstermarkise (FSM)',
          description: {
            ru: 'Согласованная интеграция в фасад — короб, направляющие, отвесная планка и привод подобраны под конкретную конструкцию: утеплённый фасад, готовую нишу или видимый монтаж в откосе.',
            hy: 'Ֆասադի հետ համաձայնեցված ինտեգրում. տուփը, ուղղորդիչները, ծայրագլանը և շարժիչը ընտրված են կոնկրետ կոնստրուկցիայի համար՝ ջերմամեկուսացված ֆասադ, պատրաստի խորշ կամ երևացող տեղադրում լուսամուտի մեջ։',
            en: 'Coordinated integration into the façade — the box, guide rails, end rail and drive are matched to the specific construction: insulated façade, existing niche, or visible mounting in the window reveal.',
          },
          specs: {
            ru: ['Максимум 4500×4500 мм (18 м²)', 'Тросовая, рельсовая или easyZIP направляющая', 'Варианты: под ETICS-фасад, нишу или откос'],
            hy: ['Առավելագույնը 4500×4500 մմ (18 մ²)', 'Ճոպանային, ռելսային կամ easyZIP ուղղորդում', 'Տարբերակներ՝ ETICS ֆասադի, խորշի կամ լուսամուտի համար'],
            en: ['Max 4500×4500 mm (18 m²)', 'Cable, rail or easyZIP guidance', 'Variants for ETICS façades, niches or reveals'],
          },
          image: fmWindowSystemHero,
          gallery: [fmWindowSystemB, fmWindowSystemC],
          sourceUrl: 'https://www.warema.com/en/awnings/awning-window-systems.html',
        },
        {
          id: 'shaft',
          name: 'Schacht-Fenstermarkise',
          description: {
            ru: 'Использует готовую нишу или перемычку над окном вместо отдельного короба — в собранном виде ткань и механизм практически не заметны на фасаде.',
            hy: 'Օգտագործում է պատուհանի վերևում առկա խորշը կամ վերնաշեմը՝ առանձին տուփի փոխարեն. հավաքված վիճակում գործվածքն ու մեխանիզմը գրեթե աննկատ են ճակատին։',
            en: 'Uses an existing niche or lintel above the window instead of a separate box — when retracted, the fabric and drive are barely visible on the façade.',
          },
          specs: {
            ru: ['Максимум 4000×4500 мм (18 м²)', 'Без отдельного короба', 'Тросовая, рельсовая, отвесная или easyZIP направляющая'],
            hy: ['Առավելագույնը 4000×4500 մմ (18 մ²)', 'Առանց առանձին տուփի', 'Ճոպանային, ռելսային, ծայրագլանային կամ easyZIP ուղղորդում'],
            en: ['Max 4000×4500 mm (18 m²)', 'No separate box', 'Cable, rail, drop-arm or easyZIP guidance'],
          },
          image: fmShaftHero,
          gallery: [fmShaftB, fmShaftC],
          sourceUrl: 'https://www.warema.com/en/awnings/shaft-awnings.html',
        },
        {
          id: 'markisolette',
          name: 'Markisolette',
          description: {
            ru: 'Гибридная конструкция: верхняя часть идёт по вертикальным направляющим, нижняя выдвигается на кронштейнах — козырёк от солнца и дождя.',
            hy: 'Հիբրիդային կոնստրուկցիա. վերին մասը շարժվում է ուղղահայաց ուղղորդիչներով, ստորինը դուրս է գալիս թևերի վրա՝ արևից և անձրևից պաշտպանող տանիք։',
            en: 'A hybrid design: the upper section runs on vertical guides while the lower edge projects on arms — a canopy against both sun and rain.',
          },
          specs: {
            ru: ['Максимум 2500×2900 мм (7,3 м²)', 'Совмещает вертикальную и выносную защиту', 'Ручной или моторизованный привод'],
            hy: ['Առավելագույնը 2500×2900 մմ (7,3 մ²)', 'Համատեղում է ուղղահայաց և դուրս եկող պաշտպանությունը', 'Ձեռքի կամ մոտորացված մեկնարկ'],
            en: ['Max 2500×2900 mm (7.3 m²)', 'Combines vertical and projecting protection', 'Manual or motorised drive'],
          },
          image: markisoletteImg,
          gallery: [markisoletteB],
          sourceUrl: 'https://www.warema.com/en/awnings/markisolettes.html',
        },
        {
          id: 'drop-arm',
          name: 'Ausstellarm-Fenstermarkise',
          description: {
            ru: 'Ткань опускается вертикально и одновременно выносится вперёд на боковых рычагах — наклонное полотно даёт тень, сохраняя вид наружу. Доступна как открытая, кассетная или встроенная в нишу.',
            hy: 'Գործվածքն իջնում է ուղղահայաց և միաժամանակ առաջ է դուրս գալիս կողային թևերի վրա՝ թեք գործվածքը ստվեր է ստեղծում՝ պահպանելով դրսի տեսադաշտը։ Հասանելի է բաց, կասետային կամ խորշում ինտեգրված տարբերակով։',
            en: 'The fabric lowers vertically while lateral arms simultaneously project it forwards — the sloping panel creates shade while retaining the view outside. Available as open, cassette or shaft-integrated designs.',
          },
          specs: {
            ru: ['Максимум 4000×1600 мм (6,4 м²)', 'Открытый, кассетный или безкоробный монтаж', 'Ручной или моторизованный привод'],
            hy: ['Առավելագույնը 4000×1600 մմ (6,4 մ²)', 'Բաց, կասետային կամ առանց տուփի տեղադրում', 'Ձեռքի կամ մոտորացված մեկնարկ'],
            en: ['Max 4000×1600 mm (6.4 m²)', 'Open, cassette or box-free installation', 'Manual or motorised drive'],
          },
          image: fmDropArmHero,
          gallery: [fmDropArmB, fmDropArmC],
          sourceUrl: 'https://www.warema.com/en/awnings/front-mounted-awnings-with-drop-arm.html',
        },
        {
          id: 'easyzip',
          name: 'easyZIP',
          description: {
            ru: 'Фирменная технология направляющих: кромка ткани удерживается замком по всей длине рельса — идеально ровное полотно без люфта даже при сильном ветре.',
            hy: 'Ֆիրմային ուղղորդիչների տեխնոլոգիա. գործվածքի եզրը ամրացվում է կողպեքով ողջ ռելսի երկայնքով՝ կատարյալ հարթ գործվածք առանց խաղքի նույնիսկ ուժեղ քամու ժամանակ։',
            en: 'A proprietary guide-rail technology: the fabric edge is locked along the full length of the rail for a perfectly taut, gap-free panel even in strong wind.',
          },
          specs: {
            ru: ['Тестированная ветроустойчивость до 150 км/ч', 'Кассетный, безкассетный или встраиваемый короб', 'Максимум 6000×6000 мм'],
            hy: ['Փորձարկված քամակայունություն մինչև 150 կմ/ժ', 'Կասետային, առանց կասետի կամ ներկառուցվող տուփ', 'Առավելագույնը 6000×6000 մմ'],
            en: ['Tested wind resistance up to 150 km/h', 'Cassette, cassette-free or built-in box', 'Max 6000×6000 mm'],
          },
          image: easyzipImg,
          gallery: [easyzipB],
          sourceUrl: 'https://www.warema.com/en/awnings/easyzip.html',
        },
      ],
    },
    {
      slug: 'senkrechtmarkisen',
      image: senkrechtmarkiseImg,
      name: { ru: 'Вертикальные маркизы и фасадные экраны', hy: 'Ուղղահայաց մարկիզաներ և ճակատային էկրաններ', en: 'Vertical Awnings & Façade Screens' },
      intro: {
        ru: 'Защита больших остеклённых фасадов и лоджий от солнца и посторонних взглядов текстильным полотном на тросовых или рельсовых направляющих.',
        hy: 'Մեծ ապակեպատ ճակատների և լոջիաների պաշտպանություն արևից և կողմնակի հայացքից՝ տեքստիլ գործվածքով ճոպանային կամ ռելսային ուղղորդիչների վրա։',
        en: 'Protection for large glazed façades and loggias from sun and unwanted views, using a fabric panel on cable or rail guides.',
      },
      models: [
        {
          id: 'cable',
          name: 'Seilgeführt',
          description: {
            ru: 'Тонкие тросовые направляющие почти не заметны на фасаде — визуально лёгкая конструкция.',
            hy: 'Բարակ ճոպանային ուղղորդիչները գրեթե աննկատ են ճակատին՝ վիզուալապես թեթև կոնստրուկցիա։',
            en: 'Slim cable guides are almost invisible on the façade — a visually light construction.',
          },
          specs: {
            ru: ['Максимум 3000×3000 мм (9 м²)', 'Минималистичный вид', 'Ручное или моторизованное управление'],
            hy: ['Առավելագույնը 3000×3000 մմ (9 մ²)', 'Մինիմալիստական տեսք', 'Ձեռքի կամ մոտորացված կառավարում'],
            en: ['Max 3000×3000 mm (9 m²)', 'Minimalist appearance', 'Manual or motorised control'],
          },
          image: senkrechtmarkiseImg,
          gallery: [senkrechtCableB],
          sourceUrl: 'https://www.warema.com/en/awnings/vertical-awnings.html',
        },
        {
          id: 'rail',
          name: 'Schienengeführt',
          description: {
            ru: 'Классические боковые рельсы дают максимальную устойчивость полотна на ветру.',
            hy: 'Դասական կողային ռելսերն ապահովում են գործվածքի առավելագույն կայունությունը քամուն։',
            en: 'Classic side rails give the fabric panel maximum stability in wind.',
          },
          specs: {
            ru: ['Максимум 3000×3000 мм (9 м²)', 'Формы короба: прямоугольная, полукруглая, круглая', 'Высота короба 75–110 мм'],
            hy: ['Առավելագույնը 3000×3000 մմ (9 մ²)', 'Տուփի ձևեր՝ ուղղանկյուն, կիսակլոր, կլոր', 'Տուփի բարձրությունը՝ 75–110 մմ'],
            en: ['Max 3000×3000 mm (9 m²)', 'Box shapes: rectangular, half-round, round', 'Box height 75–110 mm'],
          },
          image: senkrechtRail,
          gallery: [senkrechtRailB],
          sourceUrl: 'https://www.warema.com/en/awnings/vertical-awnings.html',
        },
      ],
    },
    {
      slug: 'patio-side-screen',
      image: patioSideHero,
      name: {
        ru: 'Боковые экраны для террасы',
        hy: 'Պատշգամբի կողային էկրաններ',
        en: 'Retractable Patio Side Screens',
      },
      intro: {
        ru: 'Раздвижная тканевая перегородка защищает террасу и балкон от низкого солнца, ветра и посторонних взглядов, а после использования полностью убирается в компактную кассету.',
        hy: 'Սահող գործվածքային միջնորմը պաշտպանում է պատշգամբն ու բալկոնը ցածր արևից, քամուց և կողմնակի հայացքից, իսկ օգտագործումից հետո ամբողջությամբ հեռացվում է կոմպակտ կասետայի մեջ։',
        en: 'A retractable fabric partition protects the patio or balcony from low sun, wind and unwanted views, then retracts fully into a compact cassette when not in use.',
      },
      models: [
        {
          id: 'patio-side-screen',
          name: 'Seitenmarkise',
          description: {
            ru: 'Полотно выдвигается горизонтально из бокового короба и фиксируется в держателе на противоположном конце — прямая или наклонная кромка ткани позволяет согласовать экран с террасной крышей или маркизой.',
            hy: 'Գործվածքը հորիզոնական դուրս է բերվում կողային տուփից և ամրացվում է հակառակ ծայրի կրիչում. գործվածքի ուղիղ կամ թեք եզրը թույլ է տալիս էկրանը համաձայնեցնել պատշգամբի տանիքի կամ մարկիզայի հետ։',
            en: 'The fabric extends horizontally from a side-mounted cassette and locks into a holder at the opposite end — a straight or sloped fabric edge lets the screen be matched to a patio roof or awning.',
          },
          specs: {
            ru: ['Высота до 2500 мм, вылет до 5000 мм', 'Площадь до 10 м²', 'Прямая или наклонная кромка ткани'],
            hy: ['Բարձրությունը՝ մինչև 2500 մմ, երկարությունը՝ մինչև 5000 մմ', 'Մակերեսը՝ մինչև 10 մ²', 'Գործվածքի ուղիղ կամ թեք եզր'],
            en: ['Height up to 2500 mm, extension up to 5000 mm', 'Area up to 10 m²', 'Straight or sloped fabric edge'],
          },
          image: patioSideHero,
          gallery: [patioSideB, patioSideC],
          sourceUrl: 'https://www.warema.com/en/awnings/patio-side-screen.html',
        },
      ],
    },
    {
      slug: 'climara',
      image: climaraW10,
      name: { ru: 'Маркизы для зимнего сада Climara', hy: 'Climara ձմեռային այգու մարկիզաներ', en: 'Climara Conservatory Awnings' },
      intro: {
        ru: 'Затенение остеклённых крыш и зимних садов — пять моделей под скатные, вальмовые и нестандартные формы крыши, площадь полотна до 30 м².',
        hy: 'Ապակեպատ տանիքների և ձմեռային այգիների ստվերապատում. հինգ մոդել՝ թեք, բարդ և ոչ ստանդարտ տանիքի ձևերի համար, գործվածքի մակերես մինչև 30 մ²։',
        en: 'Shading for glass roofs and conservatories — five models for pitched, hipped and irregular roof shapes, with fabric areas up to 30 m².',
      },
      models: [
        {
          id: 'w10',
          name: 'Climara W10',
          description: {
            ru: 'Технология secudrive® для больших площадей, опциональная светодиодная подсветка в направляющих.',
            hy: 'secudrive® տեխնոլոգիա մեծ մակերեսների համար, հավելյալ՝ LED լուսավորություն ուղղորդիչներում։',
            en: 'secudrive® technology for large areas, with optional integrated LED lighting in the guide rails.',
          },
          specs: {
            ru: ['Ширина до 6500 мм, длина до 6000 мм', 'Площадь до 30 м²', 'Круглая или прямоугольная накрывающая планка'],
            hy: ['Լայնությունը՝ մինչև 6500 մմ, երկարությունը՝ մինչև 6000 մմ', 'Մակերեսը՝ մինչև 30 մ²', 'Կլոր կամ ուղղանկյուն ծածկող պլանկա'],
            en: ['Width up to 6500 mm, length up to 6000 mm', 'Area up to 30 m²', 'Round or rectangular cover profile'],
          },
          image: climaraW10Hero,
          gallery: [climaraW10B],
          sourceUrl: 'https://www.warema.com/en/awnings/conservatory-awning.html',
        },
        {
          id: 'w20',
          name: 'Climara W20',
          description: {
            ru: 'Оснащена сенсорной системой WMS — автоматически реагирует на солнце, ветер и осадки.',
            hy: 'Հագեցած է WMS սենսորային համակարգով՝ ինքնաշխատ արձագանքում է արևին, քամուն և տեղումներին։',
            en: 'Equipped with the WMS sensor system — automatically responds to sun, wind and precipitation.',
          },
          specs: {
            ru: ['Ширина до 6500 мм, длина до 6000 мм', 'Датчики солнца, ветра, дождя (WMS)', 'Угловая накрывающая планка (опция)'],
            hy: ['Լայնությունը՝ մինչև 6500 մմ, երկարությունը՝ մինչև 6000 մմ', 'Արև, քամի, անձրև սենսորներ (WMS)', 'Անկյունային ծածկող պլանկա (հավելյալ)'],
            en: ['Width up to 6500 mm, length up to 6000 mm', 'Sun, wind and rain sensors (WMS)', 'Angular cover profile (optional)'],
          },
          image: climaraW20,
          gallery: [climaraW20B],
          sourceUrl: 'https://www.warema.com/en/awnings/conservatory-awning.html',
        },
        {
          id: 'd3',
          name: 'Climara D3',
          description: {
            ru: 'Модель для нестандартных форм крыши — треугольных и трапециевидных проёмов зимнего сада.',
            hy: 'Մոդել ոչ ստանդարտ տանիքի ձևերի համար՝ ձմեռային այգու եռանկյունաձև և սեղանաձև բացվածքների։',
            en: 'A model built for irregular roof shapes — triangular and trapezoidal conservatory openings.',
          },
          specs: {
            ru: ['Максимум 4000×5000 мм (10 м²)', 'Для треугольных и трапециевидных скатов', 'Компактная кассета'],
            hy: ['Առավելագույնը 4000×5000 մմ (10 մ²)', 'Եռանկյունաձև և սեղանաձև թեքությունների համար', 'Կոմպակտ կասետա'],
            en: ['Max 4000×5000 mm (10 m²)', 'For triangular and trapezoidal slopes', 'Compact cassette'],
          },
          image: climaraD3,
          gallery: [climaraD3B],
          sourceUrl: 'https://www.warema.com/en/awnings/conservatory-awning.html',
        },
      ],
    },
    {
      slug: 'terrassendach',
      image: lamaxaHero,
      name: { ru: 'Терраса-крыша Lamaxa', hy: 'Lamaxa պատշգամբի տանիք', en: 'Lamaxa Patio Roof' },
      intro: {
        ru: 'Модульная алюминиевая крыша с поворотными ламелями — закрытая защищает от дождя, приоткрытая создаёт вентиляцию и тень. Совмещается с LED-подсветкой, обогревателями и стеклянными раздвижными стенами.',
        hy: 'Մոդուլային ալյումինե տանիք պտտվող լամելներով՝ փակ վիճակում պաշտպանում է անձրևից, մասնակի բացվածքով ապահովում է օդափոխություն և ստվեր։ Համատեղվում է LED լուսավորության, ջեռուցիչների և ապակե սահող պատերի հետ։',
        en: 'A modular aluminium roof with rotating slats — closed it keeps out rain, tilted it provides ventilation and shade. Combinable with LED lighting, heaters and glass sliding walls.',
      },
      models: [
        {
          id: 'l70',
          name: 'Lamaxa L70',
          description: {
            ru: 'Флагман линейки: ламели полностью открываются или закрываются поэтапно, радио- или смарт-управление, до 10 лет расширенной гарантии.',
            hy: 'Գծի ֆլագմանը. լամելները ամբողջությամբ բացվում կամ փուլային կերպով փակվում են, ռադիո կամ խելացի կառավարում, մինչև 10 տարվա երկարացված երաշխիք։',
            en: 'The flagship of the range: slats open fully or close in stages, radio or smart control, and up to 10 years of extended warranty.',
          },
          specs: {
            ru: ['Максимум 4750×6330 мм', 'Поворотные ламели с несколькими положениями', 'LED-подсветка и радиообогреватели опционально'],
            hy: ['Առավելագույնը 4750×6330 մմ', 'Պտտվող լամելներ մի քանի դիրքով', 'LED լուսավորություն և ջեռուցիչներ՝ հավելյալ'],
            en: ['Max 4750×6330 mm', 'Rotating slats with multiple positions', 'Optional LED lighting and radiant heaters'],
          },
          gallery: [lamaxaL70Detail],
          sourceUrl: 'https://www.warema.com/en/patio-covers/l70-slat-roof.html',
        },
        {
          id: 'l50',
          name: 'Lamaxa L50',
          description: {
            ru: 'Базовая модель серии — доступна в версиях со стеклянной крышей (View) или тканевым тентом (Tex).',
            hy: 'Շարքի հիմնական մոդելը՝ հասանելի է ապակե տանիքով (View) կամ գործվածքային տանիքով (Tex) տարբերակներով։',
            en: 'The entry model in the range — available with a glass roof (View) or a retractable fabric roof (Tex).',
          },
          specs: {
            ru: ['Максимум 4500×6020 мм (расширенные конфигурации до 7000×4500 мм)', 'Варианты: стандарт, View (стекло), Tex (ткань)', 'Настенное или отдельно стоящее крепление'],
            hy: ['Առավելագույնը 4500×6020 մմ (ընդլայնված կոնֆիգուրացիաներ մինչև 7000×4500 մմ)', 'Տարբերակներ՝ ստանդարտ, View (ապակի), Tex (գործվածք)', 'Պատին ամրացվող կամ ազատ կանգնած'],
            en: ['Max 4500×6020 mm (extended configurations up to 7000×4500 mm)', 'Variants: standard, View (glass), Tex (fabric)', 'Wall-mounted or free-standing'],
          },
          image: lamaxaL50,
          gallery: [lamaxaL50B, lamaxaL50C],
          sourceUrl: 'https://www.warema.com/en/patio-covers/l50-roof-system.html',
        },
        {
          id: 'l60',
          name: 'Lamaxa L60',
          description: {
            ru: 'Свободностоящая конструкция с интегрированными водостоками в опорах — стабильная защита от дождя в закрытом положении.',
            hy: 'Ազատ կանգնած կոնստրուկցիա՝ հենարաններում ինտեգրված ջրահեռացումով՝ կայուն պաշտպանություն անձրևից փակ դիրքում։',
            en: 'A free-standing structure with drainage integrated into the posts — reliable rain protection when closed.',
          },
          specs: {
            ru: ['Встроенные водостоки в стойках', 'Полностью закрывается для защиты от дождя', 'Радиоуправление совместимо с WMS'],
            hy: ['Ներկառուցված ջրահեռացում հենասյուներում', 'Ամբողջովին փակվում է անձրևից պաշտպանվելու համար', 'Ռադիոկառավարումը համատեղելի է WMS-ի հետ'],
            en: ['Drainage integrated into the posts', 'Fully closes for rain protection', 'Radio control compatible with WMS'],
          },
          image: lamaxaL60,
          gallery: [lamaxaL60B],
          sourceUrl: 'https://www.warema.com/en/patio-covers/l60-slat-roof.html',
        },
      ],
    },
    {
      slug: 'sonnensegel',
      image: soneaHero,
      name: { ru: 'Солнечные паруса Sonea', hy: 'Sonea արևային առագաստներ', en: 'Sonea Sun Sails' },
      intro: {
        ru: 'Тканевый парус вместо жёсткой конструкции — лёгкое и выразительное решение для террас, детских площадок и коммерческих пространств. Три модели: от ручного до полностью автоматического.',
        hy: 'Գործվածքային առագաստ կոշտ կոնստրուկցիայի փոխարեն՝ թեթև և արտահայտիչ լուծում պատշգամբների, մանկական հրապարակների և կոմերցիոն տարածքների համար։ Երեք մոդել՝ ձեռքից մինչև լիովին ավտոմատ։',
        en: 'A fabric sail instead of a rigid structure — a light, expressive solution for terraces, playgrounds and commercial spaces. Three models, from manual to fully automatic.',
      },
      models: [
        {
          id: 's70',
          name: 'Sonea S70',
          description: {
            ru: 'Полностью автоматический парус с приводом, скрытым в валу ткани — первая система такого типа с дугообразной формой крыши.',
            hy: 'Լիովին ավտոմատ առագաստ՝ գործվածքի լիսեռում թաքնված շարժիչով. այս տեսակի առաջին համակարգը՝ աղեղնաձև տանիքի ձևով։',
            en: 'A fully automatic sail with the drive concealed inside the fabric roller — the first system of its kind with an arched roof shape.',
          },
          specs: {
            ru: ['Ширина до 9000 мм, вынос до 6500 мм', 'Треугольная симметричная и асимметричная форма', 'Регулировка высоты подъёма'],
            hy: ['Լայնությունը՝ մինչև 9000 մմ, դուրսբերումը՝ մինչև 6500 մմ', 'Եռանկյունաձև սիմետրիկ և ասիմետրիկ ձև', 'Բարձրության կարգավորում'],
            en: ['Width up to 9000 mm, projection up to 6500 mm', 'Symmetrical and asymmetrical triangular shape', 'Adjustable mounting height'],
          },
          image: soneaModel,
          gallery: [soneaS70B],
          sourceUrl: 'https://www.warema.com/en/sun-sails/electric-sun-sail.html',
        },
        {
          id: 's50',
          name: 'Sonea S50',
          description: {
            ru: 'Ручной привод с регулируемыми точками крепления и радиальным раскроем ткани.',
            hy: 'Ձեռքի մեկնարկ՝ կարգավորվող ամրացման կետերով և ճառագայթաձև գործվածքի ձևով։',
            en: 'A manual crank drive with adjustable attachment points and a radial fabric cut.',
          },
          specs: {
            ru: ['Ширина до 9000 мм, вынос до 6500 мм', 'Ручной крановый механизм', 'Треугольная форма'],
            hy: ['Լայնությունը՝ մինչև 9000 մմ, դուրսբերումը՝ մինչև 6500 մմ', 'Ձեռքով պտուտակահանման մեխանիզմ', 'Եռանկյունաձև ձև'],
            en: ['Width up to 9000 mm, projection up to 6500 mm', 'Manual crank mechanism', 'Triangular shape'],
          },
          image: soneaS50,
          gallery: [soneaS50B],
          sourceUrl: 'https://www.warema.com/en/sun-sails/roll-up-sun-sail.html',
        },
        {
          id: 's40',
          name: 'Sonea S40',
          description: {
            ru: 'Прямоугольная форма для регулярных геометрий — ручной привод с регулировкой высоты.',
            hy: 'Ուղղանկյուն ձև՝ կանոնավոր երկրաչափությունների համար. ձեռքի մեկնարկ բարձրության կարգավորմամբ։',
            en: 'A rectangular shape for regular geometries — manual drive with adjustable height.',
          },
          specs: {
            ru: ['Ширина до 9000 мм, вынос до 4255 мм', 'Квадратная/прямоугольная форма', 'Настенное или отдельно стоящее крепление'],
            hy: ['Լայնությունը՝ մինչև 9000 մմ, դուրսբերումը՝ մինչև 4255 մմ', 'Քառակուսի/ուղղանկյուն ձև', 'Պատին ամրացվող կամ ազատ կանգնած'],
            en: ['Width up to 9000 mm, projection up to 4255 mm', 'Square/rectangular shape', 'Wall-mounted or free-standing'],
          },
          image: soneaS40,
          gallery: [soneaS40B],
          sourceUrl: 'https://www.warema.com/en/sun-sails/rectangular-sun-sail.html',
        },
      ],
    },
    {
      slug: 'insektenschutz',
      image: insektenHero,
      name: { ru: 'Москитные сетки', hy: 'Մոծակների ցանցեր', en: 'Insect Screens' },
      intro: {
        ru: 'Шесть конструкций защиты от насекомых для окон, дверей, приямков и мансардных проёмов, включая систему Grandslide для больших раздвижных дверей.',
        hy: 'Միջատներից պաշտպանության վեց կոնստրուկցիա պատուհանների, դռների, վերնախորշերի և թեքածածկ բացվածքների համար, այդ թվում՝ Grandslide համակարգը մեծ սահող դռների համար։',
        en: 'Six insect-protection constructions for windows, doors, light wells and roof openings, including the Grandslide system for large lift-and-slide doors.',
      },
      models: [
        {
          id: 'roller',
          name: 'Insektenschutzrollo',
          description: {
            ru: 'Компактная рулонная сетка с щёточными уплотнителями — раскрывается только когда нужна, не занимает место в проёме.',
            hy: 'Կոմպակտ ռուլոնային ցանց խոզանակավոր կնիքներով՝ բացվում է միայն անհրաժեշտության դեպքում, բացվածքում տեղ չի զբաղեցնում։',
            en: 'A compact roller mesh with brush seals — extends only when needed, taking up no space in the opening.',
          },
          specs: {
            ru: ['Максимум 2200×2800 мм (4 м²)', 'Плавное закрытие с тормозом', 'Щёточные уплотнители в кассете и направляющих'],
            hy: ['Առավելագույնը 2200×2800 մմ (4 մ²)', 'Հարթ փակում արգելակով', 'Խոզանակավոր կնիքներ կասետայում և ուղղորդիչներում'],
            en: ['Max 2200×2800 mm (4 m²)', 'Slow-close braking mechanism', 'Brush seals in cassette and side tracks'],
          },
          image: insektenRoller,
          gallery: [insektenRollerB],
          sourceUrl: 'https://www.warema.com/en/insect-screen/insect-screen-roller-blind.html',
        },
        {
          id: 'sliding',
          name: 'Schiebetür-Insektenschutz',
          description: {
            ru: 'Раздвижная сетчатая дверь для больших проёмов и террасных дверей — 1 или 2 полотна.',
            hy: 'Սահող ցանցավոր դուռ մեծ բացվածքների և պատշգամբի դռների համար՝ 1 կամ 2 կտոր։',
            en: 'A sliding screen door for large openings and patio doors — available in 1- or 2-panel configurations.',
          },
          specs: {
            ru: ['Для больших остеклённых проёмов', 'Один или два раздвижных полотна', 'Плавный ход по нижней направляющей'],
            hy: ['Մեծ ապակեպատ բացվածքների համար', 'Մեկ կամ երկու սահող կտոր', 'Հարթ ընթացք ստորին ուղղորդիչով'],
            en: ['For large glazed openings', 'One or two sliding panels', 'Smooth motion along the bottom track'],
          },
          image: insektenSliding,
          gallery: [insektenSlidingB],
          sourceUrl: 'https://www.warema.com/en/insect-screen/insect-screen-sash-frame.html',
        },
        {
          id: 'grandslide',
          name: 'Grandslide',
          description: {
            ru: 'Специальная система для больших подъёмно-раздвижных дверей — сетка убирается в боковую кассету.',
            hy: 'Հատուկ համակարգ մեծ բարձրացվող-սահող դռների համար՝ ցանցը հեռացվում է կողային կասետայի մեջ։',
            en: 'A dedicated system for large lift-and-slide doors — the mesh retracts into a side cassette.',
          },
          specs: {
            ru: ['Для проёмов увеличенной ширины', 'Ретрактация в боковую кассету', 'Плавный ход без перекосов'],
            hy: ['Ընդլայնված լայնության բացվածքների համար', 'Հեռացում կողային կասետայի մեջ', 'Հարթ ընթացք առանց շեղման'],
            en: ['For extra-wide openings', 'Retracts into a side cassette', 'Smooth, straight-running motion'],
          },
          image: grandslideImg,
          gallery: [grandslideDetail],
          sourceUrl: 'https://www.warema.com/en/insect-screen/grandslide.html',
        },
        {
          id: 'pleated',
          name: 'Insektenschutz-Faltrahmen',
          description: {
            ru: 'Складчатая сетка сдвигается вбок и компактно складывается в раму — решение для узких террасных и балконных дверей, где нет места для распашной или откатной конструкции.',
            hy: 'Ծալքավոր ցանցը կողքի է սահում և կոմպակտ ծալվում շրջանակի մեջ՝ լուծում նեղ պատշգամբի և բալկոնի դռների համար, որտեղ տեղ չկա բացվող կամ սահող կոնստրուկցիայի համար։',
            en: 'The pleated mesh slides sideways and folds compactly into the frame — a solution for narrow patio and balcony doors with no room for a hinged or sliding construction.',
          },
          specs: {
            ru: ['Максимум 2230×2630 мм (5,7 м²)', 'Управление изнутри или снаружи за поручень', 'Не требует пространства для распашного хода'],
            hy: ['Առավելագույնը 2230×2630 մմ (5,7 մ²)', 'Կառավարում ներսից կամ դրսից՝ բռնակով', 'Չի պահանջում տարածք բացվող ընթացքի համար'],
            en: ['Max 2230×2630 mm (5.7 m²)', 'Operated from inside or outside via a handle rail', 'No swing clearance required'],
          },
          image: insektenPleatedHero,
          gallery: [insektenPleatedB],
          sourceUrl: 'https://www.warema.com/en/insect-screen/insect-screen-pleated-blind.html',
        },
        {
          id: 'fixed-frame',
          name: 'Insektenschutz-Spannrahmen',
          description: {
            ru: 'Несъёмная рама для окон, которым не нужна раздвижная или рулонная сетка — круглогодичное решение, доступно и для нестандартных и скруглённых форм проёма.',
            hy: 'Ֆիքսված շրջանակ պատուհանների համար, որոնց չի պետք սահող կամ ռուլոնային ցանց՝ ամբողջ տարվա լուծում, հասանելի է նաև ոչ ստանդարտ և կլորացված բացվածքների համար։',
            en: 'A fixed frame for windows that don\'t need a retractable or roller mesh — a year-round solution, also available for irregular and rounded opening shapes.',
          },
          specs: {
            ru: ['Максимум 3000×3000 мм (4,5 м²)', 'Крепление на защёлках, шурупах или без сверления', 'Опциональный щёточный уплотнитель'],
            hy: ['Առավելագույնը 3000×3000 մմ (4,5 մ²)', 'Ամրացում կողպեքներով, պտուտակներով կամ առանց հորատման', 'Հավելյալ խոզանակավոր կնիք'],
            en: ['Max 3000×3000 mm (4.5 m²)', 'Fixing by hooks, screws, or without drilling', 'Optional brush seal'],
          },
          image: insektenFixedHero,
          gallery: [insektenFixedB],
          sourceUrl: 'https://www.warema.com/en/insect-screen/fixed-frame-insect-screen.html',
        },
        {
          id: 'lightwell-cover',
          name: 'Lichtschachtabdeckung',
          description: {
            ru: 'Плоская алюминиевая рама с сеткой из нержавеющей стали устанавливается поверх существующей решётки приямка — защищает подвал от насекомых, листвы и мусора, пропуская свет и воздух.',
            hy: 'Հարթ ալյումինե շրջանակը չժանգոտվող պողպատե ցանցով տեղադրվում է առկա վերնախորշի ցանցի վրայից՝ պաշտպանում է նկուղը միջատներից, տերևներից և աղբից՝ թողնելով լույս և օդ։',
            en: 'A flat aluminium frame with stainless-steel mesh fits over an existing light-well grille — keeps insects, leaves and debris out of the basement while still letting light and air through.',
          },
          specs: {
            ru: ['Максимум 1800×1000 мм', 'Сетка из нержавеющей стали', 'Плоская конструкция для решёток заподлицо с полом'],
            hy: ['Առավելագույնը 1800×1000 մմ', 'Չժանգոտվող պողպատե ցանց', 'Հարթ կոնստրուկցիա հատակի հետ հավասար ցանցերի համար'],
            en: ['Max 1800×1000 mm', 'Stainless-steel mesh', 'Flat design for flush-floor grates'],
          },
          image: insektenLightwellHero,
          gallery: [insektenLightwellB],
          sourceUrl: 'https://www.warema.com/en/insect-screen/light-well-cover.html',
        },
      ],
    },
    {
      slug: 'smart-home',
      image: smarthomeHero,
      name: { ru: 'Умное управление', hy: 'Խելացի կառավարում', en: 'Smart Controls' },
      intro: {
        ru: 'Радиоуправление, датчики и приложение объединяют все моторизованные системы WAREMA в единую сеть — от простого пульта до полноценной автоматизации с учётом солнца, ветра и времени суток.',
        hy: 'Ռադիոկառավարումը, սենսորները և հավելվածը WAREMA-ի բոլոր մոտորացված համակարգերը միավորում են մեկ ցանցում՝ պարզ կառավարիչից մինչև լիարժեք ավտոմատացում՝ հաշվի առնելով արևը, քամին և օրվա ժամանակը։',
        en: 'Radio control, sensors and a smartphone app unite all of WAREMA\'s motorised systems into one network — from a simple remote to full automation driven by sun, wind and time of day.',
      },
      models: [
        {
          id: 'wms-webcontrol-pro',
          name: 'WMS WebControl Pro',
          description: {
            ru: 'Управление через приложение и голосом (Alexa) для маркиз, рольставен, жалюзи и терасс-крыш — автоматика по солнцу, температуре и времени, защитное втягивание при непогоде.',
            hy: 'Հավելվածով և ձայնային (Alexa) կառավարում մարկիզաների, ռոլետների, ժալյուզիների և պատշգամբի տանիքների համար՝ ավտոմատացում ըստ արևի, ջերմաստիճանի և ժամանակի, պաշտպանիչ ետ քաշում վատ եղանակի դեպքում։',
            en: 'App-based and voice (Alexa) control for awnings, roller shutters, blinds and patio roofs — sun-, temperature- and time-based automation with protective retraction in bad weather.',
          },
          specs: {
            ru: ['Приложение iOS/Android + голосовое управление', 'Автоматика по солнцу/ветру/дождю/льду', 'Группировка устройств по комнатам'],
            hy: ['iOS/Android հավելված + ձայնային կառավարում', 'Ավտոմատացում ըստ արև/քամի/անձրև/սառույց', 'Սարքերի խմբավորում ըստ սենյակների'],
            en: ['iOS/Android app + voice control', 'Sun/wind/rain/ice-based automation', 'Room-based device grouping'],
          },
          image: smarthomeDevice,
          gallery: [smarthomeWebcontrolproB],
          sourceUrl: 'https://www.warema.com/en/smart-home/wms-webcontrol-pro.html',
        },
        {
          id: 'wms',
          name: 'WMS',
          description: {
            ru: 'Базовая двусторонняя радиоплатформа WAREMA — фундамент для подключения датчиков, пультов и сценариев.',
            hy: 'WAREMA-ի հիմնական երկկողմանի ռադիոպլատֆորմը՝ սենսորների, կառավարիչների և սցենարների միացման հիմքը։',
            en: 'WAREMA\'s core bidirectional radio platform — the foundation for connecting sensors, remotes and automation scenes.',
          },
          specs: {
            ru: ['Двусторонняя радиосвязь', 'Подходит для нового строительства и ретрофита', 'Расширяемая система датчиков'],
            hy: ['Երկկողմանի ռադիոկապ', 'Հարմար է նոր շինարարության և ռետրոֆիտի համար', 'Ընդլայնվող սենսորային համակարգ'],
            en: ['Bidirectional radio communication', 'Suitable for new builds and retrofits', 'Expandable sensor ecosystem'],
          },
          image: smarthomeWms,
          gallery: [smarthomeWmsB],
          sourceUrl: 'https://www.warema.com/en/smart-home/wms.html',
        },
        {
          id: 'ewfs',
          name: 'EWFS',
          description: {
            ru: 'Простая входная система радиоуправления — минимум настроек, ручные и настенные передатчики.',
            hy: 'Ռադիոկառավարման պարզ մուտքային համակարգ՝ նվազագույն կարգավորումներով, ձեռքի և պատի հաղորդիչներով։',
            en: 'A simple entry-level radio system — minimal setup with handheld and wall-mounted transmitters.',
          },
          specs: {
            ru: ['Быстрая установка без специальных навыков', 'Ручные и настенные передатчики', 'Датчики солнца и ветра'],
            hy: ['Արագ տեղադրում առանց հատուկ հմտությունների', 'Ձեռքի և պատի հաղորդիչներ', 'Արև և քամու սենսորներ'],
            en: ['Quick installation, no special skills needed', 'Handheld and wall transmitters', 'Sun and wind sensors'],
          },
          image: smarthomeEwfs,
          gallery: [smarthomeEwfsB],
          sourceUrl: 'https://www.warema.com/en/smart-home/ewfs.html',
        },
        {
          id: 'homee',
          name: 'homee Smart Home Hub',
          description: {
            ru: 'Независимый от производителей модульный центр умного дома — объединяет WMS-управление WAREMA с освещением, отоплением и другой техникой в едином приложении с логикой «если — то».',
            hy: 'Արտադրողից անկախ մոդուլային խելացի տան կենտրոն՝ WAREMA-ի WMS կառավարումը միավորում է լուսավորության, ջեռուցման և այլ տեխնիկայի հետ մեկ հավելվածում՝ «եթե-ապա» տրամաբանությամբ։',
            en: 'A manufacturer-independent, modular smart-home hub — unites WAREMA WMS control with lighting, heating and other devices in one app using "if-then" automation rules.',
          },
          specs: {
            ru: ['Белый Brain Cube + красный WMS Cube для WAREMA', 'Расширяется модулями Z-Wave, EnOcean и др.', 'Бесплатное приложение для iOS и Android'],
            hy: ['Սպիտակ Brain Cube + կարմիր WMS Cube WAREMA-ի համար', 'Ընդլայնվում է Z-Wave, EnOcean և այլ մոդուլներով', 'Անվճար հավելված iOS և Android համար'],
            en: ['White Brain Cube + red WMS Cube for WAREMA', 'Expandable with Z-Wave, EnOcean and other modules', 'Free iOS and Android app'],
          },
          image: smarthomeHomeeHero,
          gallery: [smarthomeHomeeB],
          sourceUrl: 'https://www.warema.com/en/smart-home/homee.html',
        },
      ],
    },
  ],
};
