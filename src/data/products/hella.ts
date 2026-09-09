import type { BrandCatalog } from './types';
import hellaLogo from '@/assets/brands/hella-logo.svg';

import raffstorenImg from '@/assets/products/hella/raffstoren-arb80.png';
import raffstorenArb80Hires from '@/assets/products/hella/raffstoren-arb80-hires.png';
import raffstorenAr92Img from '@/assets/products/hella/raffstoren-ar92.png';
import ar92SImg from '@/assets/products/hella/ar92-s.png';
import ar63ZImg from '@/assets/products/hella/ar63-z.png';
import ar63SImg from '@/assets/products/hella/ar63-s.png';
import af60Img from '@/assets/products/hella/af60.png';
import af80BaseImg from '@/assets/products/hella/af80-base.png';
import af80Img from '@/assets/products/hella/af80.png';
import vorbausystemImg from '@/assets/products/hella/vorbausystem.png';
import fassadensystemImg from '@/assets/products/hella/fassadensystem.png';
import rollladenImg from '@/assets/products/hella/rollladen-vorbau.png';
import novaVorbauImg from '@/assets/products/hella/nova-vorbau.png';
import novaVorbauB from '@/assets/products/hella/nova-vorbau-b.png';
import solarrollladenImg from '@/assets/products/hella/solarrollladen.png';
import solarrollladenB from '@/assets/products/hella/solarrollladen-b.png';
import sicherheitsrollladenImg from '@/assets/products/hella/sicherheitsrollladen.png';
import sicherheitsrollladenB from '@/assets/products/hella/sicherheitsrollladen-b.png';
import sicherheitsrollladenC from '@/assets/products/hella/sicherheitsrollladen-c.png';
import vorbauProtectImg from '@/assets/products/hella/vorbau-protect.png';
import vorbauProtectB from '@/assets/products/hella/vorbau-protect-b.png';
import schachtmarkiseImg from '@/assets/products/hella/senkrecht-schachtmarkise.png';
import schachtProtectB from '@/assets/products/hella/schacht-protect-b.png';
import sm101Img from '@/assets/products/hella/senkrecht-sm101.png';
import putzmarkiseImg from '@/assets/products/hella/senkrecht-putzmarkise.png';
import putzProtectB from '@/assets/products/hella/putz-protect-b.png';
import pan7040Img from '@/assets/products/hella/markisen-pan7040.png';
import pan7040Hero from '@/assets/products/hella/pan7040.png';
import pan7040B from '@/assets/products/hella/pan7040-b.png';
import viva7040Img from '@/assets/products/hella/viva7040.png';
import viva7040B from '@/assets/products/hella/viva7040-b.png';
import areia7040Img from '@/assets/products/hella/areia7040.png';
import areia7040B from '@/assets/products/hella/areia7040-b.png';
import eleganzaImg from '@/assets/products/hella/eleganza.png';
import eleganzaB from '@/assets/products/hella/eleganza-b.png';
import eleganzaProtectImg from '@/assets/products/hella/eleganza-protect.png';
import venturImg from '@/assets/products/hella/terrassendach-ventur.png';
import venturOneSideImg from '@/assets/products/hella/ventur-one-side.png';
import venturSunImg from '@/assets/products/hella/ventur-sun.png';
import venturSunB from '@/assets/products/hella/ventur-sun-b.png';
import soleyaAufglasImg from '@/assets/products/hella/soleya-aufglas.png';
import solanyaProtectImg from '@/assets/products/hella/solanya-protect.png';
import solanyaProtectB from '@/assets/products/hella/solanya-protect-b.png';
import windschutzImg from '@/assets/products/hella/windsichtschutz.png';
import windschutzHero from '@/assets/products/hella/windschutz-hero.png';
import windschutzB from '@/assets/products/hella/windschutz-b.png';
import jumbrellaImg from '@/assets/products/hella/jumbrella.png';
import magnumImg from '@/assets/products/hella/magnum.png';
import square4sunImg from '@/assets/products/hella/square4sun-cross.png';
import square4sunB from '@/assets/products/hella/square4sun-b.png';
import ispl18Img from '@/assets/products/hella/insekten-ispl18.png';
import ispl18Hero from '@/assets/products/hella/ispl18-hero.png';
import isrImg from '@/assets/products/hella/insekten-isr.png';
import istImg from '@/assets/products/hella/ist.png';
import innenjalousienImg from '@/assets/products/hella/innenjalousien.png';
import plisseesImg from '@/assets/products/hella/plissees.png';
import plisseesHero from '@/assets/products/hella/plissees-hero.png';
import plisseesB from '@/assets/products/hella/plissees-b.png';
import innenrollosImg from '@/assets/products/hella/innenrollos.png';
import vertikaljalousienImg from '@/assets/products/hella/vertikaljalousien.png';
import onyxCenterImg from '@/assets/products/hella/onyx-center.png';
import onyxCenterHero from '@/assets/products/hella/onyx-center-hero.png';
import onyxConnectorImg from '@/assets/products/hella/onyx-connector.png';
import onyxTagSunImg from '@/assets/products/hella/onyx-tag-sun.png';
import onyxWeatherImg from '@/assets/products/hella/onyx-weather.png';
import onyxAppImg from '@/assets/products/hella/onyx-app.jpg';
import onyxAppB from '@/assets/products/hella/onyx-app-b.png';

export const hella: BrandCatalog = {
  slug: 'hella',
  name: 'HELLA',
  logo: hellaLogo,
  siteUrl: 'https://www.hella.info',
  tagline: {
    ru: 'Немецкий производитель солнце- и погодозащитных систем — от наружных жалюзи и рольставен до биоклиматических пергол VENTUR и умного дома ONYX.',
    hy: 'Գերմանական արտադրող՝ արևից և եղանակից պաշտպանության համակարգերի ոլորտում. արտաքին ժալյուզիներից ու ռոլետներից մինչև VENTUR բիոկլիմայական պերգոլաներ և ONYX խելացի տուն։',
    en: 'A German manufacturer of sun and weather protection systems — from external blinds and roller shutters to VENTUR bioclimatic pergolas and the ONYX smart home ecosystem.',
  },
  categories: [
    {
      slug: 'raffstoren',
      image: raffstorenImg,
      name: { ru: 'Наружные жалюзи', hy: 'Արտաքին ժալյուզիներ', en: 'External Venetian Blinds' },
      intro: {
        ru: 'Десять линеек с ламелями шириной от 60 до 92 мм и площадью полотна до 20 м², а также накладные и самонесущие короба для их монтажа. Фирменная система Omega-перфорации ARB 80 обходится без лестничных лент, сохраняя чистую геометрию фасада.',
        hy: 'Տասը գիծ՝ 60-ից 92 մմ լամելային լայնությամբ և գործվածքի մակերեսով մինչև 20 մ², ինչպես նաև վրադիր և ինքնակրող տուփեր դրանց տեղադրման համար։ ARB 80-ի ֆիրմային Omega-պերֆորացիայի համակարգն անց է կացնում առանց աստիճանաձև ժապավենների՝ պահպանելով ճակատի մաքուր երկրաչափությունը։',
        en: 'Ten product lines with slat widths from 60 to 92 mm and panel areas up to 20 m², plus surface-mount and self-supporting boxes for installing them. The signature Omega-perforation system on the ARB 80 eliminates ladder tapes, keeping the façade geometry clean.',
      },
      models: [
        {
          id: 'arb80',
          name: 'ARB 80',
          description: {
            ru: 'Флагманская модель с C-профильными ламелями 80 мм — фирменное соединение без лестничных лент для идеально ровного фасада.',
            hy: 'Ֆլագման մոդելը C-պրոֆիլ 80 մմ լամելներով՝ ֆիրմային միացում առանց աստիճանաձև ժապավենների՝ կատարյալ հարթ ճակատի համար։',
            en: 'The flagship model with 80 mm C-profile slats — a proprietary tape-free linkage system for a perfectly flat façade.',
          },
          specs: {
            ru: ['Максимум 5000×5200 мм (20 м²)', 'Около 28 вариантов цвета (RAL)', 'Мотор, ручной или солнечный привод'],
            hy: ['Առավելագույնը 5000×5200 մմ (20 մ²)', 'Շուրջ 28 գունային տարբերակ (RAL)', 'Շարժիչային, ձեռքի կամ արևային մեկնարկ'],
            en: ['Max 5000×5200 mm (20 m²)', 'Around 28 colour options (RAL)', 'Motorised, manual or solar drive'],
          },
          gallery: [raffstorenArb80Hires],
          sourceUrl: 'https://www.hella.info/de/produkte/arb-80',
        },
        {
          id: 'ar92',
          name: 'AR 92',
          description: {
            ru: 'Широкая ламель 92 мм в Z- или S-профиле с системой быстрого соединения ECN.',
            hy: '92 մմ լայն լամել Z- կամ S-պրոֆիլով՝ ECN արագ միացման համակարգով։',
            en: 'A wide 92 mm slat in Z- or S-profile with the ECN quick-connect system.',
          },
          specs: {
            ru: ['Максимум 5000×5200 мм (18 м²)', 'Профили: Z-образный или S-образный', 'Система соединения ECN'],
            hy: ['Առավելագույնը 5000×5200 մմ (18 մ²)', 'Պրոֆիլներ՝ Z-աձև կամ S-աձև', 'ECN միացման համակարգ'],
            en: ['Max 5000×5200 mm (18 m²)', 'Z- or S-profile slats', 'ECN connector system'],
          },
          image: raffstorenAr92Img,
          sourceUrl: 'https://www.hella.info/de/produkte/ar-92-z-ecn',
        },
        {
          id: 'af80-plus',
          name: 'AF 80 Plus',
          description: {
            ru: 'Изогнутая плоская ламель 80 мм для высоких проёмов — увеличенная максимальная высота полотна.',
            hy: 'Կոր հարթ 80 մմ լամել բարձր բացվածքների համար՝ գործվածքի ավելացված առավելագույն բարձրություն։',
            en: 'A curved flat 80 mm slat for tall openings — an extended maximum panel height.',
          },
          specs: {
            ru: ['Максимум 5000×6200 мм (20 м²)', 'Изогнутый плоский профиль ламели', 'Совместим со Smart Home ONYX'],
            hy: ['Առավելագույնը 5000×6200 մմ (20 մ²)', 'Կոր հարթ լամելային պրոֆիլ', 'Համատեղելի է ONYX խելացի տան հետ'],
            en: ['Max 5000×6200 mm (20 m²)', 'Curved flat slat profile', 'Compatible with ONYX Smart Home'],
          },
          image: af80Img,
          sourceUrl: 'https://www.hella.info/de/produkte/af-80-plus',
        },
        {
          id: 'af80-base',
          name: 'AF 80',
          description: {
            ru: 'Базовая версия с плоскими ламелями 80 мм и фирменной Omega-перфорацией — надёжная тихая ветрозащита и долгий срок службы.',
            hy: 'Հիմնական տարբերակը՝ 80 մմ հարթ լամելներով և ֆիրմային Omega-պերֆորացիայով՝ հուսալի, անաղմուկ քամուց պաշտպանություն և երկար ծառայության ժամկետ։',
            en: 'The entry-level version with 80 mm flat slats and the signature Omega perforation — reliable, low-noise wind protection and a long service life.',
          },
          specs: {
            ru: ['Максимум 5000×4000 мм (20 м²)', 'Тросовая или рельсовая направляющая', 'Мотор со встроенными концевыми выключателями'],
            hy: ['Առավելագույնը 5000×4000 մմ (20 մ²)', 'Ճոպանային կամ ռելսային ուղղորդում', 'Շարժիչը՝ ներկառուցված վերջնային անջատիչներով'],
            en: ['Max 5000×4000 mm (20 m²)', 'Cable or rail guidance', 'Motor with integrated limit switches'],
          },
          image: af80BaseImg,
          sourceUrl: 'https://www.hella.info/de/produkte/af-80',
        },
        {
          id: 'af60',
          name: 'AF 60',
          description: {
            ru: 'Компактная 60-мм плоская ламель с той же Omega-перфорацией — облегчённый вариант для небольших окон.',
            hy: 'Կոմպակտ 60 մմ հարթ լամել՝ նույն Omega-պերֆորացիայով՝ թեթևացված տարբերակ փոքր պատուհանների համար։',
            en: 'A compact 60 mm flat slat with the same Omega perforation — a lighter-weight option for smaller windows.',
          },
          specs: {
            ru: ['Максимум 5000×4000 мм (20 м²)', 'Тросовая или рельсовая направляющая', 'Тихая ветрозащита'],
            hy: ['Առավելագույնը 5000×4000 մմ (20 մ²)', 'Ճոպանային կամ ռելսային ուղղորդում', 'Անաղմուկ քամուց պաշտպանություն'],
            en: ['Max 5000×4000 mm (20 m²)', 'Cable or rail guidance', 'Low-noise wind protection'],
          },
          image: af60Img,
          sourceUrl: 'https://www.hella.info/de/produkte/af-60',
        },
        {
          id: 'ar92-s',
          name: 'AR 92 S ECN',
          description: {
            ru: 'Широкая 92-мм ламель S-профиля с системой ECN — запатентованная лента из нержавеющей стали обеспечивает точную укладку пакета и минимальную высоту в поднятом состоянии.',
            hy: '92 մմ լայն S-պրոֆիլ լամել ECN համակարգով՝ չժանգոտվող պողպատե արտոնագրված ժապավենն ապահովում է փաթեթի ճշգրիտ դասավորություն և նվազագույն բարձրություն բարձրացված վիճակում։',
            en: 'A wide 92 mm S-profile slat with the ECN system — a patented stainless-steel band gives precise stacking and a minimal package height when raised.',
          },
          specs: {
            ru: ['Максимум 5000×5200 мм (18 м²)', 'Тросовая или рельсовая направляющая', 'Мотор или ручной привод'],
            hy: ['Առավելագույնը 5000×5200 մմ (18 մ²)', 'Ճոպանային կամ ռելսային ուղղորդում', 'Շարժիչային կամ ձեռքի մեկնարկ'],
            en: ['Max 5000×5200 mm (18 m²)', 'Cable or rail guidance', 'Motor or manual drive'],
          },
          image: ar92SImg,
          sourceUrl: 'https://www.hella.info/de/produkte/ar-92-s-ecn',
        },
        {
          id: 'ar63-z',
          name: 'AR 63 Z ECN',
          description: {
            ru: 'Изящная узкая ламель 63 мм в Z-профиле с системой ECN — универсальное решение для небольших и средних окон.',
            hy: 'Նրբագեղ, նեղ 63 մմ լամել Z-պրոֆիլով ECN համակարգով՝ ունիվերսալ լուծում փոքր և միջին պատուհանների համար։',
            en: 'A slim, narrow 63 mm Z-profile slat with the ECN system — a versatile choice for small and medium windows.',
          },
          specs: {
            ru: ['Максимум 5000×4200 мм (18 м²)', 'Тросовая или рельсовая направляющая', 'Мотор или ручной привод'],
            hy: ['Առավելագույնը 5000×4200 մմ (18 մ²)', 'Ճոպանային կամ ռելսային ուղղորդում', 'Շարժիչային կամ ձեռքի մեկնարկ'],
            en: ['Max 5000×4200 mm (18 m²)', 'Cable or rail guidance', 'Motor or manual drive'],
          },
          image: ar63ZImg,
          sourceUrl: 'https://www.hella.info/de/produkte/ar-63-z-ecn',
        },
        {
          id: 'ar63-s',
          name: 'AR 63 S ECN',
          description: {
            ru: 'S-профиль той же узкой 63-мм ламели — оптимален для тонких конструкций стены и последующего монтажа.',
            hy: 'Նույն նեղ 63 մմ լամելի S-պրոֆիլ տարբերակը՝ օպտիմալ է բարակ պատի կոնստրուկցիաների և հետագա տեղադրման համար։',
            en: 'The S-profile of the same narrow 63 mm slat — ideal for slim wall constructions and retrofit installation.',
          },
          specs: {
            ru: ['Максимум 5000×4200 мм (18 м²)', 'Тросовая или рельсовая направляющая', 'Оптимален для узких стеновых конструкций'],
            hy: ['Առավելագույնը 5000×4200 մմ (18 մ²)', 'Ճոպանային կամ ռելսային ուղղորդում', 'Օպտիմալ է բարակ պատերի համար'],
            en: ['Max 5000×4200 mm (18 m²)', 'Cable or rail guidance', 'Ideal for slim wall constructions'],
          },
          image: ar63SImg,
          sourceUrl: 'https://www.hella.info/de/produkte/ar-63-s-ecn',
        },
        {
          id: 'vorbausystem',
          name: 'Vorbausystem stranggepresst',
          description: {
            ru: 'Экструдированный накладной короб круглой, угловой или квадратной формы — той же кассеты, что и у рольставен HELLA. Жалюзи или раффшторы монтируются на заводе, москитная сетка встраивается прямо в короб.',
            hy: 'Էքստրուդացված վրադիր տուփ՝ կլոր, անկյունային կամ քառակուսի ձևով, նույն կասետայով ինչ HELLA-ի ռոլետները. ժալյուզին կամ ռաֆշտորը հավաքվում է գործարանում, մոծակների ցանցը ինտեգրվում է անմիջապես տուփի մեջ։',
            en: 'An extruded surface-mount box in round, angular or square form — the same cassette as HELLA\'s roller shutters. The blind or venetian slat is factory-fitted, and an insect screen can be built directly into the box.',
          },
          specs: {
            ru: ['Максимум 4000 мм ширина (20 м²)', 'Совместим с AF 60/80, ARB 80', 'Возможна интеграция защиты от падения'],
            hy: ['Առավելագույնը 4000 մմ լայնություն (20 մ²)', 'Համատեղելի է AF 60/80, ARB 80-ի հետ', 'Հնարավոր է անկումից պաշտպանության ինտեգրում'],
            en: ['Max 4000 mm width (20 m²)', 'Compatible with AF 60/80, ARB 80', 'Fall-protection integration available'],
          },
          image: vorbausystemImg,
          sourceUrl: 'https://www.hella.info/de/produkte/vorbausystem-stranggepresst',
        },
        {
          id: 'fassadensystem',
          name: 'Fassadensystem freitragend',
          description: {
            ru: 'Гнутый алюминиевый короб, надеваемый прямо на направляющие — самонесущий монтаж всего в нескольких точках крепления, без отдельного каркаса.',
            hy: 'Ծալված ալյումինե տուփ, որը հագցվում է անմիջապես ուղղորդիչների վրա՝ ինքնակրող տեղադրում ընդամենը մի քանի ամրացման կետով, առանց առանձին կարկասի։',
            en: 'A folded aluminium box that slides directly onto the guide rails — self-supporting installation with only a few fixing points and no separate frame.',
          },
          specs: {
            ru: ['Максимум 4000 мм ширина (20 м²)', 'Совместим с AF 60/80, ARB 80, AR 63/92', 'Быстрый монтаж без отдельного каркаса'],
            hy: ['Առավելագույնը 4000 մմ լայնություն (20 մ²)', 'Համատեղելի է AF 60/80, ARB 80, AR 63/92-ի հետ', 'Արագ տեղադրում առանց առանձին կարկասի'],
            en: ['Max 4000 mm width (20 m²)', 'Compatible with AF 60/80, ARB 80, AR 63/92', 'Fast installation with no separate frame'],
          },
          image: fassadensystemImg,
          sourceUrl: 'https://www.hella.info/de/produkte/fassadensystem-freitragend',
        },
      ],
    },
    {
      slug: 'rollladen',
      image: rollladenImg,
      name: { ru: 'Рольставни', hy: 'Ռոլետներ', en: 'Roller Shutters' },
      intro: {
        ru: 'Экструдированные алюминиевые рольставни серии nova — теплоизоляция, защита от взлома и вариант с автономным солнечным приводом.',
        hy: 'Nova շարքի էքստրուդացված ալյումինե ռոլետներ՝ ջերմամեկուսացում, պաշտպանություն ներխուժումից և ինքնավար արևային մեկնարկով տարբերակ։',
        en: 'Extruded aluminium roller shutters from the nova range — thermal insulation, break-in protection and an optional self-sufficient solar drive.',
      },
      models: [
        {
          id: 'nova-vorbau',
          name: 'nova Vorbaurollladen',
          description: {
            ru: 'Экструдированный накладной короб с терморазрывом — заявленное снижение теплопотерь до 30%.',
            hy: 'Էքստրուդացված վրադիր տուփ ջերմային ընդմիջումով՝ հայտարարված ջերմային կորուստների նվազեցում մինչև 30%։',
            en: 'An extruded surface-mount box with a thermal break — a claimed reduction in heat loss of up to 30%.',
          },
          specs: {
            ru: ['Ширина до 3500–4000 мм', 'Терморазрыв в профиле', 'Свободнонесущий монтаж на фасад'],
            hy: ['Լայնությունը՝ մինչև 3500–4000 մմ', 'Ջերմային ընդմիջում պրոֆիլում', 'Ազատ կրող տեղադրում ճակատին'],
            en: ['Width up to 3500–4000 mm', 'Thermal break in the profile', 'Cantilevered façade mounting'],
          },
          image: novaVorbauImg,
          gallery: [novaVorbauB],
          sourceUrl: 'https://www.hella.info/de/produkte/vorbaurollladen-stranggepresst',
        },
        {
          id: 'solarrollladen',
          name: 'Solarrollladen',
          description: {
            ru: 'Автономный солнечный привод — без прокладки силового кабеля, идеален для реновации.',
            hy: 'Ինքնավար արևային մեկնարկ՝ առանց էլեկտրական մալուխի անցկացման, իդեալական է վերանորոգման համար։',
            en: 'A self-sufficient solar drive — no mains cabling required, ideal for renovation projects.',
          },
          specs: {
            ru: ['Ширина до 3500–4000 мм', 'Солнечная панель с аккумулятором', 'Монтаж без штробления стен'],
            hy: ['Լայնությունը՝ մինչև 3500–4000 մմ', 'Արևային վահանակ մարտկոցով', 'Տեղադրում առանց պատերի կտրման'],
            en: ['Width up to 3500–4000 mm', 'Solar panel with battery', 'Installation without wall chasing'],
          },
          image: solarrollladenImg,
          gallery: [solarrollladenB],
          sourceUrl: 'https://www.hella.info/de/produkte/solarrollladen',
        },
        {
          id: 'sicherheitsrollladen',
          name: 'Sicherheitsrollladen Top-Safe',
          description: {
            ru: 'Усиленная конструкция для защиты от взлома — рекомендуется для первых этажей и уличных проёмов.',
            hy: 'Ամրապնդված կոնստրուկցիա ներխուժումից պաշտպանության համար՝ խորհուրդ է տրվում առաջին հարկերի և փողոցային բացվածքների համար։',
            en: 'A reinforced construction for break-in protection — recommended for ground floors and street-facing openings.',
          },
          specs: {
            ru: ['Ширина до 2500–3000 мм', 'Усиленный профиль ламелей', 'Повышенная защита от взлома'],
            hy: ['Լայնությունը՝ մինչև 2500–3000 մմ', 'Ամրապնդված լամելային պրոֆիլ', 'Բարձրացված պաշտպանություն ներխուժումից'],
            en: ['Width up to 2500–3000 mm', 'Reinforced slat profile', 'Enhanced burglary resistance'],
          },
          image: sicherheitsrollladenImg,
          gallery: [sicherheitsrollladenB, sicherheitsrollladenC],
          sourceUrl: 'https://www.hella.info/de/produkte/sicherheitsrollladen-stranggepresst',
        },
      ],
    },
    {
      slug: 'senkrechtmarkisen',
      image: schachtmarkiseImg,
      name: { ru: 'Вертикальные маркизы', hy: 'Ուղղահայաց մարկիզաներ', en: 'Vertical Awnings' },
      intro: {
        ru: 'Три семейства монтажа — накладное, шахтное и штукатурное — с боковой (тросовой или рельсовой) направляющей ткани для устойчивости на ветру.',
        hy: 'Երեք տեղադրման ընտանիք՝ վրադիր, շախտային և ծեփի մեջ ինտեգրված, գործվածքի կողային (ճոպանային կամ ռելսային) ուղղորդմամբ՝ քամուն դիմակայունության համար։',
        en: 'Three mounting families — surface-mounted, shaft and plaster-integrated — with side-guided (cable or rail) fabric for wind stability.',
      },
      models: [
        {
          id: 'vorbau-protect',
          name: 'Vorbau-Markise protect',
          description: {
            ru: 'Накладная версия с боковой направляющей ткани — доступна в пяти формах короба, включая круглую.',
            hy: 'Վրադիր տարբերակ գործվածքի կողային ուղղորդմամբ՝ հասանելի է հինգ տուփի ձևով, այդ թվում՝ կլոր։',
            en: 'A surface-mounted version with side-guided fabric — available in five box shapes, including round.',
          },
          specs: {
            ru: ['Максимум 6000×6000 мм (18 м²)', 'Пять форм короба: Q85–Q150, E100–E130, R130', 'Совместим с elero и Somfy'],
            hy: ['Առավելագույնը 6000×6000 մմ (18 մ²)', 'Հինգ տուփի ձև՝ Q85–Q150, E100–E130, R130', 'Համատեղելի է elero և Somfy-ի հետ'],
            en: ['Max 6000×6000 mm (18 m²)', 'Five box shapes: Q85–Q150, E100–E130, R130', 'Compatible with elero and Somfy'],
          },
          image: vorbauProtectImg,
          gallery: [vorbauProtectB],
          sourceUrl: 'https://www.hella.info/de/vorbau-markise-protect-q85/q100/q115/q130/q150',
        },
        {
          id: 'schacht-protect',
          name: 'Schacht-Markise PROTECT',
          description: {
            ru: 'Использует существующую шахту — полукассета H110–H130 для реновации без вмешательства в фасад.',
            hy: 'Օգտագործում է առկա շախտը՝ H110–H130 կիսակասետա վերանորոգման համար՝ առանց ճակատին միջամտելու։',
            en: 'Uses an existing shaft — an H110–H130 half-cassette for renovation without touching the façade.',
          },
          specs: {
            ru: ['Максимум 3500×4500 мм (12 м²)', 'Полукассетный короб H110/H115/H130', 'Для существующих ниш'],
            hy: ['Առավելագույնը 3500×4500 մմ (12 մ²)', 'Կիսակասետային տուփ H110/H115/H130', 'Առկա խորշերի համար'],
            en: ['Max 3500×4500 mm (12 m²)', 'H110/H115/H130 half-cassette box', 'For existing niches'],
          },
          image: schachtmarkiseImg,
          gallery: [schachtProtectB],
          sourceUrl: 'https://www.hella.info/de/schacht-markise-protect',
        },
        {
          id: 'sm101',
          name: 'SM 101',
          description: {
            ru: 'Рельсовая направляющая без короба — встраивается в подготовленную нишу или фасад заказчика, минималистичный вид.',
            hy: 'Ռելսային ուղղորդում առանց տուփի՝ ինտեգրվում է հաճախորդի պատրաստած խորշի կամ ճակատի մեջ, մինիմալիստական տեսք։',
            en: 'Rail-guided with no cassette — integrates into a customer-prepared recess or façade for a minimalist look.',
          },
          specs: {
            ru: ['Ширина 580–3500 мм, высота до 4500 мм', 'Площадь до 9 м²', 'Без декоративного короба'],
            hy: ['Լայնությունը՝ 580–3500 մմ, բարձրությունը՝ մինչև 4500 մմ', 'Մակերեսը՝ մինչև 9 մ²', 'Առանց դեկորատիվ տուփի'],
            en: ['Width 580–3500 mm, height up to 4500 mm', 'Area up to 9 m²', 'No decorative box'],
          },
          image: sm101Img,
          sourceUrl: 'https://www.hella.info/de/products/sm-101',
        },
        {
          id: 'putz-protect',
          name: 'Putz-Markise protect',
          description: {
            ru: 'Штукатурная версия — направляющие полностью скрываются под слоем штукатурки фасада.',
            hy: 'Ծեփածո տարբերակ՝ ուղղորդիչներն ամբողջությամբ թաքնված են ճակատի ծեփի շերտի տակ։',
            en: 'A plaster-integrated version — the guide rails are fully concealed under the façade\'s render layer.',
          },
          specs: {
            ru: ['Максимум 4000×4000 мм (12 м²)', 'Полностью оштукатуриваемые направляющие', 'Опциональная теплоизоляция EPS 20/40 мм'],
            hy: ['Առավելագույնը 4000×4000 մմ (12 մ²)', 'Ամբողջովին ծեփվող ուղղորդիչներ', 'Հավելյալ EPS 20/40 մմ ջերմամեկուսացում'],
            en: ['Max 4000×4000 mm (12 m²)', 'Fully renderable guide rails', 'Optional 20/40 mm EPS insulation'],
          },
          image: putzmarkiseImg,
          gallery: [putzProtectB],
          sourceUrl: 'https://www.hella.info/en/putz-markise-protect-e100-/-e115-/-e130',
        },
      ],
    },
    {
      slug: 'markisen',
      image: pan7040Img,
      name: { ru: 'Маркизы для террасы', hy: 'Պատշգամբի մարկիզաներ', en: 'Patio Awnings' },
      intro: {
        ru: 'Кассетные, полукассетные и открытые маркизы шириной до 7 м. В кассетной PAN 7040 светодиодная подсветка встроена прямо в шарнирные рычаги.',
        hy: 'Կասետային, կիսակասետային և բաց մարկիզաներ՝ մինչև 7 մ լայնությամբ։ PAN 7040 կասետային մոդելում LED լուսավորությունը ներկառուցված է հենց հոդակապային թևերում։',
        en: 'Cassette, semi-cassette and open-arm awnings up to 7 m wide. On the PAN 7040 cassette model, LED lighting is built directly into the articulated arms.',
      },
      models: [
        {
          id: 'pan7040',
          name: 'PAN 7040',
          description: {
            ru: 'Полностью закрытая кассета с модульной лёгкой конструкцией и LED-подсветкой в рычагах, опциональными датчиками ветра, солнца и дождя.',
            hy: 'Ամբողջովին փակ կասետա մոդուլային թեթև կոնստրուկցիայով և LED լուսավորությամբ թևերում, հավելյալ քամու, արևի և անձրևի սենսորներով։',
            en: 'A fully enclosed cassette with a modular lightweight build and LED lighting in the arms, with optional wind, sun and rain sensors.',
          },
          specs: {
            ru: ['Максимум 7000×4000 мм (мин. ширина 2170 мм)', 'LED-подсветка в шарнирных рычагах', 'Совместима с настенными ИК-обогревателями'],
            hy: ['Առավելագույնը 7000×4000 մմ (նվազագույն լայնությունը՝ 2170 մմ)', 'LED լուսավորություն հոդակապային թևերում', 'Համատեղելի է պատի ինֆրակարմիր ջեռուցիչների հետ'],
            en: ['Max 7000×4000 mm (min. width 2170 mm)', 'LED lighting in the articulated arms', 'Compatible with wall-mounted infrared heaters'],
          },
          image: pan7040Hero,
          gallery: [pan7040B],
          sourceUrl: 'https://www.hella.info/de/produkte/pan-7040',
        },
        {
          id: 'viva7040',
          name: 'VIVA 7040',
          description: {
            ru: 'Полуоткрытая маркиза с защитной крышей — сочетает вид открытой конструкции с дополнительной защитой механизма.',
            hy: 'Կիսաբաց մարկիզա պաշտպանիչ տանիքով՝ համատեղում է բաց կոնստրուկցիայի տեսքը մեխանիզմի հավելյալ պաշտպանության հետ։',
            en: 'A semi-open awning with a protective roof cover — combines the look of an open design with extra mechanism protection.',
          },
          specs: {
            ru: ['Максимум 7000×4000 мм', 'Защитная крыша над механизмом', 'Более 200 расцветок ткани'],
            hy: ['Առավելագույնը 7000×4000 մմ', 'Պաշտպանիչ տանիք մեխանիզմի վրա', '200-ից ավել գործվածքի գույն'],
            en: ['Max 7000×4000 mm', 'Protective roof over the mechanism', '200+ fabric colours'],
          },
          image: viva7040Img,
          gallery: [viva7040B],
          sourceUrl: 'https://www.hella.info/de/produkte/viva-7040-1',
        },
        {
          id: 'areia',
          name: 'AREIA 7040',
          description: {
            ru: 'Открытая маркиза начального уровня — оптимальна под монтаж под уже существующим козырьком или балконом.',
            hy: 'Բաց մարկիզա՝ սկսնակ մակարդակի, օպտիմալ է արդեն առկա տանիքի կամ բալկոնի տակ տեղադրելու համար։',
            en: 'An entry-level open-arm awning — ideal for mounting under an existing overhang or balcony.',
          },
          specs: {
            ru: ['Максимум 7000×4000 мм', 'Открытая рычажная конструкция', 'Экономичное решение для монтажа под козырьком'],
            hy: ['Առավելագույնը 7000×4000 մմ', 'Բաց թևային կոնստրուկցիա', 'Տնտեսողական լուծում տանիքի տակ տեղադրելու համար'],
            en: ['Max 7000×4000 mm', 'Open-arm construction', 'Economical choice for under-eave mounting'],
          },
          image: areia7040Img,
          gallery: [areia7040B],
          sourceUrl: 'https://www.hella.info/de/produkte/areia-7040',
        },
      ],
    },
    {
      slug: 'pergolamarkise',
      image: eleganzaImg,
      name: { ru: 'Пергола-маркиза ELEGANZA', hy: 'ELEGANZA պերգոլա-մարկիզա', en: 'ELEGANZA Pergola Awning' },
      intro: {
        ru: 'Тканевая крыша на двух свободностоящих колоннах с регулируемым углом наклона — интегрированная светодиодная подсветка в рычагах и кассете, отвод дождевой воды через люверсы в полотне.',
        hy: 'Գործվածքային տանիք երկու ազատ կանգնած սյուների վրա՝ կարգավորվող թեքության անկյունով, ինտեգրված LED լուսավորությամբ թևերում և կասետայում, անձրևաջրի հեռացում գործվածքի ականջակալներով։',
        en: 'A fabric roof on two free-standing columns with an adjustable tilt angle — integrated LED lighting in both the arms and cassette, with rainwater drained through eyelets in the fabric.',
      },
      models: [
        {
          id: 'eleganza',
          name: 'ELEGANZA',
          description: {
            ru: 'Базовая версия перголы-маркизы — регулируемый угол полотна и компактная кассета 253×156 мм.',
            hy: 'Պերգոլա-մարկիզայի հիմնական տարբերակը՝ գործվածքի կարգավորվող անկյուն և կոմպակտ 253×156 մմ կասետա։',
            en: 'The base pergola-awning version — an adjustable fabric angle and a compact 253×156 mm cassette.',
          },
          specs: {
            ru: ['Максимум 6000×5500 мм (до 30 м²)', 'Кассета 253×156 мм', 'Регулируемый угол наклона полотна'],
            hy: ['Առավելագույնը 6000×5500 մմ (մինչև 30 մ²)', 'Կասետա՝ 253×156 մմ', 'Գործվածքի կարգավորվող թեքության անկյուն'],
            en: ['Max 6000×5500 mm (up to 30 m²)', 'Cassette 253×156 mm', 'Adjustable fabric tilt angle'],
          },
          image: eleganzaImg,
          gallery: [eleganzaB],
          sourceUrl: 'https://www.hella.info/de/produkte/eleganza',
        },
        {
          id: 'eleganza-protect',
          name: 'ELEGANZA protect',
          description: {
            ru: 'Версия с боковой направляющей ткани для повышенной устойчивости к ветру, опциональный вертикальный экран Varioplus.',
            hy: 'Տարբերակ գործվածքի կողային ուղղորդմամբ՝ քամուն ավելացված դիմադրության համար, հավելյալ ուղղահայաց Varioplus էկրան։',
            en: 'A version with side-guided fabric for enhanced wind resistance, with an optional Varioplus vertical closure screen.',
          },
          specs: {
            ru: ['Максимум 6000×5500 мм (до 26 м²)', 'Боковая направляющая ткани', 'Опциональный вертикальный экран Varioplus'],
            hy: ['Առավելագույնը 6000×5500 մմ (մինչև 26 մ²)', 'Գործվածքի կողային ուղղորդում', 'Հավելյալ Varioplus ուղղահայաց էկրան'],
            en: ['Max 6000×5500 mm (up to 26 m²)', 'Side-guided fabric', 'Optional Varioplus vertical closure screen'],
          },
          image: eleganzaProtectImg,
          gallery: [eleganzaB],
          sourceUrl: 'https://www.hella.info/de/produkt/eleganza-protect',
        },
      ],
    },
    {
      slug: 'terrassendach',
      image: venturImg,
      name: { ru: 'Терраса-крыша VENTUR', hy: 'VENTUR պատշգամբի տանիք', en: 'VENTUR Patio Roof' },
      intro: {
        ru: 'Биоклиматическая пергола с дизайном Studio F. A. Porsche — поворотные ламели наклоняются до 135°, закрытое положение полностью защищает от дождя. Модульная конструкция для больших многосекционных террас.',
        hy: 'Բիոկլիմայական պերգոլա՝ Studio F. A. Porsche դիզայնով. պտտվող լամելները թեքվում են մինչև 135°, փակ դիրքում ամբողջովին պաշտպանում է անձրևից։ Մոդուլային կոնստրուկցիա մեծ, բազմահատված պատշգամբների համար։',
        en: 'A bioclimatic pergola designed by Studio F. A. Porsche — rotating slats tilt up to 135°, and the closed position provides full rain protection. A modular design for large multi-bay terraces.',
      },
      models: [
        {
          id: 'ventur-one',
          name: 'VENTUR ONE',
          description: {
            ru: 'Базовая серийная модель — уже доступна к заказу, четыре цвета корпуса.',
            hy: 'Հիմնական սերիական մոդելը՝ արդեն հասանելի է պատվիրելու համար, կորպուսի չորս գույն։',
            en: 'The standard production model — available to order now, with four body colour options.',
          },
          specs: {
            ru: ['Максимум 4500×3000×6200 мм (Ш×В×Д)', 'Ламели с наклоном до 135°', 'Модульная сборка из нескольких секций'],
            hy: ['Առավելագույնը 4500×3000×6200 մմ (Լ×Բ×Ե)', 'Լամելների թեքում մինչև 135°', 'Մոդուլային հավաքածու մի քանի հատվածներից'],
            en: ['Max 4500×3000×6200 mm (W×H×D)', 'Slats tilt up to 135°', 'Modular assembly from multiple bays'],
          },
          gallery: [venturOneSideImg],
          sourceUrl: 'https://www.hella.info/de/produkte/ventur-neu',
        },
        {
          id: 'ventur-sun',
          name: 'VENTUR SUN',
          description: {
            ru: 'Версия с солнечными панелями, интегрированными прямо в ламели — предзаказ, поставки ожидаются в 2026 году.',
            hy: 'Տարբերակ՝ լամելների մեջ ինտեգրված արևային վահանակներով. նախնական պատվեր, մատակարարումները սպասվում են 2026 թվականին։',
            en: 'A version with photovoltaic panels integrated directly into the slats — pre-order, deliveries expected in 2026.',
          },
          specs: {
            ru: ['Максимум 4500×3000×6000 мм', 'PV-панели встроены в ламели', 'Ожидается в продаже — уточняйте сроки'],
            hy: ['Առավելագույնը 4500×3000×6000 մմ', 'PV վահանակներ ներկառուցված լամելների մեջ', 'Սպասվող մոդել — ճշտեք ժամկետները'],
            en: ['Max 4500×3000×6000 mm', 'PV panels integrated into the slats', 'Upcoming — confirm availability with our team'],
          },
          image: venturSunImg,
          gallery: [venturSunB],
          sourceUrl: 'https://www.hella.info/de/produkte/ventur-neu',
        },
      ],
    },
    {
      slug: 'wintergartenmarkisen',
      image: soleyaAufglasImg,
      name: { ru: 'Маркизы для зимнего сада', hy: 'Ձմեռային այգու մարկիզաներ', en: 'Conservatory Awnings' },
      intro: {
        ru: 'Надстекольные и подстекольные маркизы SOLEYA и SOLANYA — защита от перегрева остеклённых крыш и зимних садов площадью до 30 м².',
        hy: 'SOLEYA և SOLANYA վերապակե և ենթապակե մարկիզաներ՝ ապակեպատ տանիքների և ձմեռային այգիների գերտաքացումից պաշտպանություն մինչև 30 մ² մակերեսով։',
        en: 'SOLEYA and SOLANYA overglass and underglass awnings — protecting glazed roofs and conservatories from overheating, on areas up to 30 m².',
      },
      models: [
        {
          id: 'soleya-aufglas',
          name: 'SOLEYA Aufglasmarkise',
          description: {
            ru: 'Устанавливается поверх остекления — крупноформатная защита для больших зимних садов.',
            hy: 'Տեղադրվում է ապակեպատման վրայից՝ խոշոր ձևաչափի պաշտպանություն մեծ ձմեռային այգիների համար։',
            en: 'Mounted on top of the glazing — large-format protection for spacious conservatories.',
          },
          specs: {
            ru: ['Максимум 6000×6500 мм (30 м²)', 'Монтаж поверх стекла', 'Ручной или моторизованный привод'],
            hy: ['Առավելագույնը 6000×6500 մմ (30 մ²)', 'Տեղադրում ապակու վրայից', 'Ձեռքի կամ մոտորացված մեկնարկ'],
            en: ['Max 6000×6500 mm (30 m²)', 'Mounted above the glazing', 'Manual or motorised drive'],
          },
          image: soleyaAufglasImg,
          sourceUrl: 'https://www.hella.info/de/produkte/soleya-aufglasmarkise',
        },
        {
          id: 'solanya-protect',
          name: 'SOLANYA protect',
          description: {
            ru: 'Подстекольная версия с очень компактной кассетой 151×131 мм — почти незаметна изнутри.',
            hy: 'Ենթապակե տարբերակ շատ կոմպակտ 151×131 մմ կասետայով՝ ներսից գրեթե աննկատ։',
            en: 'An underglass version with a very compact 151×131 mm cassette — nearly invisible from inside.',
          },
          specs: {
            ru: ['Максимум 5000×4500 мм (22,5 м²)', 'Класс ветростойкости 3', 'Компактная кассета 151×131 мм'],
            hy: ['Առավելագույնը 5000×4500 մմ (22,5 մ²)', 'Քամակայունության դաս 3', 'Կոմպակտ 151×131 մմ կասետա'],
            en: ['Max 5000×4500 mm (22.5 m²)', 'Wind resistance class 3', 'Compact 151×131 mm cassette'],
          },
          image: solanyaProtectImg,
          gallery: [solanyaProtectB],
          sourceUrl: 'https://www.hella.info/de/produkte/solanya-protect',
        },
      ],
    },
    {
      slug: 'wind-sichtschutz',
      image: windschutzImg,
      name: { ru: 'Ветро- и солнцезащитные экраны', hy: 'Քամուց և արևից պաշտպանիչ էկրաններ', en: 'Wind & Sight Screens' },
      intro: {
        ru: 'Вертикальный экран из акриловой или полиэстеровой ткани — защита от ветра и посторонних взглядов на террасе с декоративным эффектом.',
        hy: 'Ուղղահայաց էկրան ակրիլե կամ պոլիեսթեր գործվածքից՝ պատշգամբի քամուց և կողմնակի հայացքից պաշտպանություն դեկորատիվ էֆեկտով։',
        en: 'A vertical screen made from acrylic or polyester awning fabric — protects the terrace from wind and prying eyes with a decorative effect.',
      },
      models: [
        {
          id: 'windschutz',
          name: 'Wind- und Sichtschutz',
          description: {
            ru: 'Единая система с гибким выбором высоты — устанавливается вдоль края террасы или как декоративный акцент фасада.',
            hy: 'Միասնական համակարգ՝ բարձրության ճկուն ընտրությամբ, տեղադրվում է պատշգամբի եզրին կամ որպես ճակատի դեկորատիվ շեշտադրում։',
            en: 'A single system with flexible height options — installed along the edge of a terrace or as a decorative façade accent.',
          },
          specs: {
            ru: ['Высота 1300 или 1900 мм, ширина до 4000 мм', 'Каркас: белый или серебристый', 'Ткань — акрил или полиэстер, маркизная'],
            hy: ['Բարձրությունը՝ 1300 կամ 1900 մմ, լայնությունը՝ մինչև 4000 մմ', 'Կարկաս՝ սպիտակ կամ արծաթագույն', 'Գործվածք՝ ակրիլ կամ պոլիեսթեր, մարկիզային'],
            en: ['Height 1300 or 1900 mm, width up to 4000 mm', 'Frame: white or silver', 'Fabric: acrylic or polyester awning textile'],
          },
          image: windschutzHero,
          gallery: [windschutzB],
          sourceUrl: 'https://www.hella.info/de/produkte/wind-und-sichtschutz',
        },
      ],
    },
    {
      slug: 'schirme-segel',
      image: jumbrellaImg,
      name: { ru: 'Зонты и солнечные паруса', hy: 'Հովանոցներ և արևային առագաստներ', en: 'Umbrellas & Sun Sails' },
      intro: {
        ru: 'От компактных зонтов для террасы до крупноформатных коммерческих Magnum и Largo (140 м²), а также автоматических парусов square4sun с площадью укрытия до 53 м².',
        hy: 'Պատշգամբի կոմպակտ հովանոցներից մինչև խոշոր կոմերցիոն Magnum և Largo (140 մ²), ինչպես նաև square4sun ավտոմատ առագաստներ՝ մինչև 53 մ² ծածկույթով։',
        en: 'From compact terrace umbrellas to large-format commercial Magnum and Largo models (140 m²), plus automatic square4sun sails with coverage up to 53 m².',
      },
      models: [
        {
          id: 'jumbrella',
          name: 'Jumbrella',
          description: {
            ru: 'Крупный зонт для террас ресторанов и кафе — ветроустойчивость до 102 км/ч.',
            hy: 'Խոշոր հովանոց ռեստորանների և սրճարանների պատշգամբների համար՝ քամակայունությունը՝ մինչև 102 կմ/ժ։',
            en: 'A large umbrella for restaurant and café terraces — rated wind resistance up to 102 km/h.',
          },
          specs: {
            ru: ['Площадь укрытия 36 м²', 'Вес 30–99 кг', 'Ветроустойчивость до 102 км/ч'],
            hy: ['Ծածկույթի մակերես՝ 36 մ²', 'Քաշը՝ 30–99 կգ', 'Քամակայունությունը՝ մինչև 102 կմ/ժ'],
            en: ['Coverage area 36 m²', 'Weight 30–99 kg', 'Wind resistance up to 102 km/h'],
          },
          image: jumbrellaImg,
          sourceUrl: 'https://www.hella.info/de/produkte/jumbrella',
        },
        {
          id: 'magnum',
          name: 'Magnum',
          description: {
            ru: 'Крупноформатный зонт для коммерческих пространств — площадь укрытия 140 м².',
            hy: 'Խոշոր ձևաչափի հովանոց կոմերցիոն տարածքների համար՝ 140 մ² ծածկույթի մակերես։',
            en: 'A large-format umbrella for commercial spaces — 140 m² of coverage.',
          },
          specs: {
            ru: ['Площадь укрытия 140 м²', 'Вес 800–1550 кг', 'Ветроустойчивость до 130 км/ч'],
            hy: ['Ծածկույթի մակերես՝ 140 մ²', 'Քաշը՝ 800–1550 կգ', 'Քամակայունությունը՝ մինչև 130 կմ/ժ'],
            en: ['Coverage area 140 m²', 'Weight 800–1550 kg', 'Wind resistance up to 130 km/h'],
          },
          image: magnumImg,
          sourceUrl: 'https://www.hella.info/de/produkte/magnum',
        },
        {
          id: 'square4sun',
          name: 'square4sun | CROSS',
          description: {
            ru: 'Автоматический парус с моторизованным раскрытием — крупноформатное затенение без единой опорной стойки в центре.',
            hy: 'Ավտոմատ առագաստ մոտորացված բացմամբ՝ խոշոր ձևաչափի ստվերապատում առանց կենտրոնական հենասյան։',
            en: 'An automatic sail with motorised deployment — large-format shading with no central support post.',
          },
          specs: {
            ru: ['Максимум 6800×7800 мм (47 м²)', 'Полностью моторизованное раскрытие', 'Управление приложением/пультом'],
            hy: ['Առավելագույնը 6800×7800 մմ (47 մ²)', 'Ամբողջովին մոտորացված բացում', 'Կառավարում հավելվածով/կառավարիչով'],
            en: ['Max 6800×7800 mm (47 m²)', 'Fully motorised deployment', 'App/remote control'],
          },
          image: square4sunImg,
          gallery: [square4sunB],
          sourceUrl: 'https://www.hella.info/de/produkte/square4sun-cross',
        },
      ],
    },
    {
      slug: 'insektenschutz',
      image: ispl18Img,
      name: { ru: 'Москитные сетки', hy: 'Մոծակների ցանցեր', en: 'Insect Screens' },
      intro: {
        ru: 'Семь конструкций защиты от насекомых — от фиксированной рамы до плиссированной раздвижной двери, включая специальную сетку с фильтрацией пыльцы (93%).',
        hy: 'Միջատներից պաշտպանության յոթ կոնստրուկցիա՝ ֆիքսված շրջանակից մինչև ծալքավոր սահող դուռ, այդ թվում՝ ծաղկափոշու զտմամբ (93%) հատուկ ցանց։',
        en: 'Seven insect-protection constructions — from a fixed frame to a pleated sliding door, including a specialised pollen-filtering mesh (93%).',
      },
      models: [
        {
          id: 'ispl18',
          name: 'Insektenschutzplissee IS PL 18',
          description: {
            ru: 'Плиссированная сетка на боковых направляющих с низким порогом — не требует сезонного демонтажа.',
            hy: 'Ծալքավոր ցանց կողային ուղղորդիչներով և ցածր շեմով՝ չի պահանջում սեզոնային ապամոնտաժում։',
            en: 'A pleated screen on side tracks with a low sill bar — no seasonal removal required.',
          },
          specs: {
            ru: ['Максимум 2200×2850 мм', 'Компактное складывание в сторону', 'Круглогодичная установка'],
            hy: ['Առավելագույնը 2200×2850 մմ', 'Կոմպակտ ծալում կողքին', 'Ամբողջ տարվա տեղադրում'],
            en: ['Max 2200×2850 mm', 'Compact side-folding stack', 'Year-round installation'],
          },
          image: ispl18Hero,
          sourceUrl: 'https://www.hella.info/de/produkte/insektenschutzplissee-ispl18',
        },
        {
          id: 'isr',
          name: 'ISR — Spannrahmen',
          description: {
            ru: 'Фиксированная рама на распорках — вариант без сверления, доступна сетка с фильтрацией пыльцы.',
            hy: 'Ֆիքսված շրջանակ ճնշման միջոցով՝ առանց հորատման տարբերակ, հասանելի է ծաղկափոշու զտիչ ցանց։',
            en: 'A fixed tension frame — a screw-free mounting option, with a pollen-filtering mesh available.',
          },
          specs: {
            ru: ['Максимум 2300×2300 мм (4 м²)', 'Вариант без сверления рамы', 'Сетка Pollenschutz — фильтрация пыльцы 93%'],
            hy: ['Առավելագույնը 2300×2300 մմ (4 մ²)', 'Առանց հորատման տարբերակ', 'Pollenschutz ցանց՝ ծաղկափոշու զտում 93%'],
            en: ['Max 2300×2300 mm (4 m²)', 'Screw-free frame option', 'Pollenschutz mesh — 93% pollen filtration'],
          },
          image: isrImg,
          sourceUrl: 'https://www.hella.info/de/produkte/isr',
        },
        {
          id: 'ist',
          name: 'IST — Schieberahmen',
          description: {
            ru: 'Раздвижная рама для широких проёмов — плавный боковой ход без порога.',
            hy: 'Սահող շրջանակ լայն բացվածքների համար՝ հարթ կողային ընթացք առանց շեմի։',
            en: 'A sliding frame for wide openings — smooth side-to-side motion with no threshold.',
          },
          specs: {
            ru: ['Максимум 4000×2500 мм', 'Плавный ход по верхней и нижней направляющей', 'Для террасных и балконных дверей'],
            hy: ['Առավելագույնը 4000×2500 մմ', 'Հարթ ընթացք վերին և ստորին ուղղորդիչներով', 'Պատշգամբի և բալկոնի դռների համար'],
            en: ['Max 4000×2500 mm', 'Smooth motion on top and bottom tracks', 'For patio and balcony doors'],
          },
          image: istImg,
          sourceUrl: 'https://www.hella.info/de/produkte/ist',
        },
      ],
    },
    {
      slug: 'innenrollos',
      image: innenrollosImg,
      name: { ru: 'Внутренние рулонные шторы', hy: 'Ինտերիերի ռուլոնային վարագույրներ', en: 'Interior Roller Blinds' },
      intro: {
        ru: 'Рулонные шторы с боковыми направляющими для точного контроля света — включая эко-коллекцию из переработанного океанического пластика и версии для мансардных окон.',
        hy: 'Ռուլոնային վարագույրներ կողային ուղղորդիչներով՝ լույսի ճշգրիտ վերահսկման համար, այդ թվում՝ վերամշակված օվկիանոսային պլաստիկից էկո-կոլեկցիա և թեքածածկ պատուհանների տարբերակներ։',
        en: 'Roller shades with side guide rails for precise light control — including an eco-collection made from recycled ocean plastic and versions for skylight windows.',
      },
      models: [
        {
          id: 'innenrollos',
          name: 'Innenrollos',
          description: {
            ru: 'Рулонные шторы с боковыми направляющими, включая эко-коллекцию из переработанного океанического пластика и версии для мансардных окон.',
            hy: 'Ռուլոնային վարագույրներ կողային ուղղորդիչներով, այդ թվում՝ վերամշակված օվկիանոսային պլաստիկից էկո-կոլեկցիա և թեքածածկ պատուհանների տարբերակներ։',
            en: 'Roller shades with side guide rails, including an eco-collection made from recycled ocean plastic and versions for skylight windows.',
          },
          specs: {
            ru: ['Несколько уровней светопропускания', 'Эко-коллекция из океанического пластика', 'Моторизация с программируемым пультом'],
            hy: ['Լույսի թափանցելիության մի քանի մակարդակ', 'Էկո-կոլեկցիա օվկիանոսային պլաստիկից', 'Մոտորացում ծրագրավորվող կառավարիչով'],
            en: ['Multiple light-transmission levels', 'Eco-collection from ocean plastic', 'Motorised with a programmable remote'],
          },
          image: innenrollosImg,
          sourceUrl: 'https://www.hella.info/de/produkte/innenrollos',
        },
      ],
    },
    {
      slug: 'innenjalousien',
      image: innenjalousienImg,
      name: { ru: 'Интерьерные жалюзи и плиссе', hy: 'Ինտերիերի ժալյուզիներ և պլիսե', en: 'Interior Blinds & Pleated Shades' },
      intro: {
        ru: 'Горизонтальные и вертикальные жалюзи, а также плиссе Duette для внутреннего затенения — точный контроль света и ступенчатая защита от посторонних взглядов в любом помещении.',
        hy: 'Հորիզոնական և ուղղահայաց ժալյուզիներ, ինչպես նաև Duette պլիսե ինտերիերի ստվերապատման համար՝ լույսի ճշգրիտ վերահսկում և աստիճանական պաշտպանություն կողմնակի հայացքից ցանկացած սենյակում։',
        en: 'Horizontal and vertical louvre blinds, plus Duette pleated shades for interior shading — precise light control and stepless privacy protection in any room.',
      },
      models: [
        {
          id: 'innenjalousien',
          name: 'Innenjalousien',
          description: {
            ru: 'Горизонтальные алюминиевые ламели для внутреннего монтажа — практичная модернизация существующих окон без штробления стен.',
            hy: 'Հորիզոնական ալյումինե լամելներ ինտերիերի տեղադրման համար՝ գործնական արդիականացում առկա պատուհանների համար՝ առանց պատերի կտրման։',
            en: 'Horizontal aluminium louvres for interior mounting — a practical retrofit for existing windows with no wall chasing required.',
          },
          specs: {
            ru: ['Плавная регулировка угла ламелей', 'Широкая палитра цветов и текстур', 'Цепное, шнуровое или моторизованное управление'],
            hy: ['Լամելների անկյան հարթ կարգավորում', 'Գույների և հյուսվածքների լայն ընտրանի', 'Շղթայական, պարանային կամ մոտորացված կառավարում'],
            en: ['Stepless slat-angle adjustment', 'Wide range of colours and textures', 'Chain, cord or motorised control'],
          },
          image: innenjalousienImg,
          sourceUrl: 'https://www.hella.info/de/produkte/innenjalousien-1',
        },
        {
          id: 'plissees',
          name: 'Plissees / Duette',
          description: {
            ru: 'Плиссе для нестандартных проёмов, включая сотовую (Duette) конструкцию с воздушными камерами для теплоизоляции.',
            hy: 'Պլիսե ոչ ստանդարտ բացվածքների համար, այդ թվում՝ Duette փեթակաձև կոնստրուկցիա օդային խցիկներով՝ ջերմամեկուսացման համար։',
            en: 'Pleated blinds for irregular openings, including the Duette honeycomb construction with air chambers for insulation.',
          },
          specs: {
            ru: ['Несколько степеней затемнения', 'Огнестойкие и моющиеся ткани', 'Duette — сотовая конструкция с воздушной прослойкой'],
            hy: ['Խավարեցման մի քանի աստիճան', 'Կրակակայուն և լվացվող գործվածքներ', 'Duette՝ փեթակաձև կոնստրուկցիա օդային շերտով'],
            en: ['Multiple black-out levels', 'Fire-resistant, washable fabrics', 'Duette — honeycomb construction with air layer'],
          },
          image: plisseesHero,
          gallery: [plisseesB],
          sourceUrl: 'https://www.hella.info/de/produkte/plissees-1',
        },
        {
          id: 'vertikaljalousien',
          name: 'Vertikaljalousien',
          description: {
            ru: 'Вертикальные ламели трёх ширин — удобны как разделитель пространства для больших витражных окон.',
            hy: 'Ուղղահայաց լամելներ երեք լայնությամբ՝ հարմար են որպես տարածքի բաժանիչ մեծ ապակեպատ պատուհանների համար։',
            en: 'Vertical louvres in three widths — practical as a space divider for large glazed windows.',
          },
          specs: {
            ru: ['Ширина ламели 63, 89 или 127 мм', 'Подходит для больших витражных окон', 'Цепное или моторизованное управление'],
            hy: ['Լամելի լայնությունը՝ 63, 89 կամ 127 մմ', 'Հարմար է մեծ ապակեպատ պատուհանների համար', 'Շղթայական կամ մոտորացված կառավարում'],
            en: ['Slat width 63, 89 or 127 mm', 'Suited to large glazed windows', 'Chain or motorised control'],
          },
          image: vertikaljalousienImg,
          sourceUrl: 'https://www.hella.info/de/produkte/vertikaljalousien',
        },
      ],
    },
    {
      slug: 'onyx',
      image: onyxCenterImg,
      name: { ru: 'Умный дом ONYX', hy: 'ONYX խելացի տուն', en: 'ONYX Smart Home' },
      intro: {
        ru: 'Единая экосистема управления всеми моторизованными системами HELLA: центр управления размером с ладонь, датчики погоды и мобильное приложение с поддержкой Alexa и Google Home.',
        hy: 'HELLA-ի բոլոր մոտորացված համակարգերի կառավարման միասնական էկոհամակարգ. ափի չափի կառավարման կենտրոն, եղանակի սենսորներ և բջջային հավելված՝ Alexa և Google Home աջակցությամբ։',
        en: 'A unified control ecosystem for all of HELLA\'s motorised systems: a palm-sized control centre, weather sensors, and a mobile app with Alexa and Google Home support.',
      },
      models: [
        {
          id: 'onyx-center',
          name: 'ONYX.CENTER',
          description: {
            ru: 'Компактный центральный хаб размером 8×1,3 см — связывает приложение и радиоустройства по всему дому.',
            hy: '8×1,3 սմ չափի կոմպակտ կենտրոնական հանգույց՝ կապում է հավելվածն ու ռադիոսարքերը ողջ տան տարածքում։',
            en: 'A compact 8×1.3 cm central hub — bridges the app and radio devices throughout the home.',
          },
          specs: {
            ru: ['Один из самых компактных хабов на рынке', 'Связывает приложение и радиоустройства', 'Работает со всеми моторизованными системами HELLA'],
            hy: ['Շուկայում ամենակոմպակտ հանգույցներից մեկը', 'Կապում է հավելվածն ու ռադիոսարքերը', 'Աշխատում է HELLA-ի բոլոր մոտորացված համակարգերի հետ'],
            en: ['One of the smallest hubs on the market', 'Bridges the app and radio devices', 'Works with all HELLA motorised systems'],
          },
          image: onyxCenterHero,
          sourceUrl: 'https://www.hella.info/de/produkte/onyx-center',
        },
        {
          id: 'onyx-weather',
          name: 'ONYX.WEATHER',
          description: {
            ru: 'Комбинированный датчик ветра, солнца и температуры — автоматически убирает маркизы и жалюзи при непогоде.',
            hy: 'Համակցված քամու, արևի և ջերմաստիճանի սենսոր՝ ինքնաշխատ ետ է քաշում մարկիզաներն ու ժալյուզիները վատ եղանակի ժամանակ։',
            en: 'A combined wind, sun and temperature sensor — automatically retracts awnings and blinds in bad weather.',
          },
          specs: {
            ru: ['3D-датчик ветра', 'Диапазон освещённости 0–100 000 люкс', 'Температура от −20 до +60 °C'],
            hy: ['3D քամու սենսոր', 'Լուսավորության միջակայք՝ 0–100 000 լյուքս', 'Ջերմաստիճան՝ −20-ից մինչև +60 °C'],
            en: ['3D wind sensor', 'Brightness range 0–100,000 lux', 'Temperature range −20 to +60 °C'],
          },
          image: onyxWeatherImg,
          sourceUrl: 'https://www.hella.info/de/produkte/onyx-weather',
        },
        {
          id: 'onyx-connector',
          name: 'ONYX.CONNECTOR',
          description: {
            ru: 'Модуль для подключения уже установленных моторов к сети ONYX без замены проводки.',
            hy: 'Մոդուլ արդեն տեղադրված շարժիչները ONYX ցանցին միացնելու համար՝ առանց մալուխները փոխարինելու։',
            en: 'A module for bringing already-installed motors onto the ONYX network without rewiring.',
          },
          specs: {
            ru: ['Ретрофит без замены проводки', 'Подходит для существующих моторов', 'Быстрая установка «Plug & Play»'],
            hy: ['Ռետրոֆիտ առանց մալուխները փոխարինելու', 'Հարմար է առկա շարժիչների համար', 'Արագ «Plug & Play» տեղադրում'],
            en: ['Retrofit without rewiring', 'Works with existing motors', 'Quick "Plug & Play" installation'],
          },
          image: onyxConnectorImg,
          sourceUrl: 'https://www.hella.info/de/produkte/onyx-connector',
        },
        {
          id: 'onyx-app',
          name: 'ONYX App',
          description: {
            ru: 'Мобильное приложение для сценариев, расписаний и голосового управления — совместимо с Amazon Alexa и Google Home.',
            hy: 'Բջջային հավելված սցենարների, ժամանակացույցերի և ձայնային կառավարման համար՝ համատեղելի Amazon Alexa և Google Home հետ։',
            en: 'A mobile app for scenes, schedules and voice control — compatible with Amazon Alexa and Google Home.',
          },
          specs: {
            ru: ['iOS и Android', 'Голосовое управление Alexa/Google Home', 'Группировка устройств и сценарии'],
            hy: ['iOS և Android', 'Ձայնային կառավարում Alexa/Google Home', 'Սարքերի խմբավորում և սցենարներ'],
            en: ['iOS and Android', 'Alexa/Google Home voice control', 'Device grouping and scenes'],
          },
          image: onyxAppImg,
          gallery: [onyxAppB],
          sourceUrl: 'https://www.hella.info/de/smart-home/onyx/bedienung/app-bedienung',
        },
        {
          id: 'onyx-tag-sun',
          name: 'ONYX.TAG sun / wind',
          description: {
            ru: 'Беспроводные датчики на батарейках с магнитным креплением — устанавливаются без электромонтажа.',
            hy: 'Անլար, մարտկոցով սենսորներ մագնիսական ամրացմամբ՝ տեղադրվում են առանց էլեկտրամոնտաժի։',
            en: 'Wireless, battery-powered sensors with magnetic mounting — installed without any electrical work.',
          },
          specs: {
            ru: ['Питание от батареи', 'Магнитное крепление без сверления', 'Автоматическая защита при сильном ветре'],
            hy: ['Մարտկոցով սնուցում', 'Մագնիսական ամրացում առանց հորատման', 'Ինքնաշխատ պաշտպանություն ուժեղ քամու ժամանակ'],
            en: ['Battery-powered', 'Magnetic mounting, no drilling', 'Automatic protection in strong wind'],
          },
          image: onyxTagSunImg,
          sourceUrl: 'https://www.hella.info/de/produkte/onyx-tag-sun',
        },
      ],
    },
  ],
};
