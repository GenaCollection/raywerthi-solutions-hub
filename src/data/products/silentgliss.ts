import type { BrandCatalog } from './types';
import silentglissLogo from '@/assets/brands/silentgliss-logo.svg';

import tracksImg from '@/assets/products/silentgliss/sg5600-v2.jpg';
import sg5600Gallery from '@/assets/products/silentgliss/tracks-sg5600.jpg';
import sg5100Img from '@/assets/products/silentgliss/sg5100.jpg';
import metropoleImg from '@/assets/products/silentgliss/metropole-v2.jpg';
import cubicleImg from '@/assets/products/silentgliss/cubicle-v2.jpg';
import rollerBlindImg from '@/assets/products/silentgliss/roller-blind-v2.jpg';
import dimoutNoxImg from '@/assets/products/silentgliss/dimout-nox.jpg';
import dimoutMoonImg from '@/assets/products/silentgliss/dimout-moon.jpg';
import panelGlideImg from '@/assets/products/silentgliss/panel-glide-v2.jpg';
import panelHandImg from '@/assets/products/silentgliss/panel-hand.jpg';
import romanBlindImg from '@/assets/products/silentgliss/roman-blind-v2.jpg';
import roman2355Img from '@/assets/products/silentgliss/roman-2355.jpg';
import roman2120Img from '@/assets/products/silentgliss/roman-2120.jpg';
import verticalBlindImg from '@/assets/products/silentgliss/vertical-blind-v2.jpg';
import vertical2910Img from '@/assets/products/silentgliss/vertical-2910.jpg';
import pleatedImg from '@/assets/products/silentgliss/pleated.jpg';
import venetianBlindImg from '@/assets/products/silentgliss/venetian-blind-v2.jpg';
import venetian8110Img from '@/assets/products/silentgliss/venetian-8110.jpg';
import skylightImg from '@/assets/products/silentgliss/skylight-v2-hero.webp';
import skylight2195Img from '@/assets/products/silentgliss/skylight-2195.jpg';
import skylight2190Img from '@/assets/products/silentgliss/skylight-2190.jpg';
import smarthomeImg from '@/assets/products/silentgliss/sg5600-v2.jpg';

export const silentGliss: BrandCatalog = {
  slug: 'silent-gliss',
  name: 'Silent Gliss',
  logo: silentglissLogo,
  siteUrl: 'https://www.silentgliss.com',
  tagline: {
    ru: 'Швейцарский производитель премиальных карнизов, штор и интерьерных систем затенения — свыше 60 лет опыта в бесшумной моторизации.',
    hy: 'Շվեյցարական արտադրող՝ պրեմիում կարնիզների, վարագույրների և ինտերիերի ստվերապատման համակարգերի ոլորտում. 60-ից ավել տարվա փորձ անաղմուկ մոտորացման մեջ։',
    en: 'A Swiss manufacturer of premium curtain systems, blinds and interior shading — over 60 years of experience in silent motorisation.',
  },
  categories: [
    {
      slug: 'curtain-tracks',
      image: tracksImg,
      name: { ru: 'Карнизы-рельсы для штор', hy: 'Վարագույրների ռելսային կարնիզներ', en: 'Curtain Track Systems' },
      intro: {
        ru: 'Ручные, шнуровые и электрические карнизные системы — от простых бюджетных решений до флагманского электропривода SG 5600, известного бесшумным и точным ходом.',
        hy: 'Ձեռքի, պարանով և էլեկտրական կարնիզային համակարգեր՝ պարզ մատչելի լուծումներից մինչև ֆլագման SG 5600 էլեկտրաշարժիչը՝ հայտնի իր անաղմուկ և ճշգրիտ ընթացքով։',
        en: 'Hand-drawn, corded and electric track systems — from simple, affordable options to the flagship SG 5600 electric drive, renowned for its silent, precise motion.',
      },
      models: [
        {
          id: 'sg5600',
          name: 'SG 5600',
          description: {
            ru: 'Флагманский электрокарниз с более чем 50-летней историей развития — выбор отелей, офисов и премиальных резиденций.',
            hy: 'Ֆլագման էլեկտրական կարնիզը՝ ավելի քան 50-ամյա զարգացման պատմությամբ. հյուրանոցների, գրասենյակների և պրեմիում ռեզիդենցիաների ընտրություն։',
            en: 'The flagship electric track with over 50 years of development behind it — the choice of hotels, offices and premium residences.',
          },
          specs: {
            ru: ['Длина до 25 м, вес полотна до 65 кг', 'Управление: пульт, приложение Move, BMS', 'Бесшумный и плавный ход'],
            hy: ['Երկարությունը՝ մինչև 25 մ, գործվածքի քաշը՝ մինչև 65 կգ', 'Կառավարում՝ կառավարիչ, Move հավելված, BMS', 'Անաղմուկ և հարթ ընթացք'],
            en: ['Length up to 25 m, fabric weight up to 65 kg', 'Control: remote, Move app, or BMS', 'Silent, smooth operation'],
          },
          gallery: [sg5600Gallery],
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/curtain-systems/curtain-track-systems/electric/5600/',
        },
        {
          id: 'sg5100',
          name: 'SG 5100',
          description: {
            ru: 'Компактный электрокарниз для труднодоступных, больших или тяжёлых штор в конференц-залах и жилых интерьерах.',
            hy: 'Կոմպակտ էլեկտրական կարնիզ դժվարամատչելի, մեծ կամ ծանր վարագույրների համար՝ կոնֆերանս-սրահներում և բնակելի ինտերիերում։',
            en: 'A compact electric track for hard-to-reach, large or heavy curtains in conference rooms and residential interiors.',
          },
          specs: {
            ru: ['Длина до 9 м, вес полотна до 30 кг', 'Управление: пульт, приложение Move, BMS', 'Компактный профиль'],
            hy: ['Երկարությունը՝ մինչև 9 մ, գործվածքի քաշը՝ մինչև 30 կգ', 'Կառավարում՝ կառավարիչ, Move հավելված, BMS', 'Կոմպակտ պրոֆիլ'],
            en: ['Length up to 9 m, fabric weight up to 30 kg', 'Control: remote, Move app, or BMS', 'Compact profile'],
          },
          image: sg5100Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/curtain-systems/curtain-track-systems/electric/5100/',
        },
        {
          id: 'sg3970',
          name: 'SG 3970 Cord',
          description: {
            ru: 'Шнуровое управление держит руки в стороне от ткани — гигиеничнее и продлевает срок службы штор, подходит для тяжёлых портьер.',
            hy: 'Պարանով կառավարումը ձեռքերը հեռու է պահում գործվածքից՝ ավելի հիգիենիկ է և երկարացնում է վարագույրների ծառայության ժամկետը, հարմար է ծանր վարագույրների համար։',
            en: 'Cord operation keeps hands off the fabric — more hygienic and extends curtain life, suitable for heavy lined curtains.',
          },
          specs: {
            ru: ['Длина до 15 м, вес полотна до 38 кг', 'Гнётся для эркеров и криволинейных проёмов', 'Подходит для тяжёлых портьер'],
            hy: ['Երկարությունը՝ մինչև 15 մ, գործվածքի քաշը՝ մինչև 38 կգ', 'Ծալվում է էրկերների և կոր բացվածքների համար', 'Հարմար է ծանր վարագույրների համար'],
            en: ['Length up to 15 m, fabric weight up to 38 kg', 'Bendable for bay windows and curved openings', 'Suitable for heavy lined curtains'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/curtain-systems/curtain-track-systems/cord/',
        },
      ],
    },
    {
      slug: 'metropole',
      image: metropoleImg,
      name: { ru: 'Карниз-штанга Metropole', hy: 'Metropole կարնիզ-ձող', en: 'Metropole Curtain Pole' },
      intro: {
        ru: 'Декоративная штанга классической формы со скрытым внутри бесшумным ходовым каналом — шторы держатся на фирменных двухкомпонентных бегунках без колец.',
        hy: 'Դասական տեսքով դեկորատիվ ձող՝ ներսում թաքնված անաղմուկ ընթացքի ալիքով. վարագույրները ամրացվում են ֆիրմային երկբաղադրիչ սահող տարրերին՝ առանց օղակների։',
        en: 'A decorative pole with a classic look and a hidden internal glide channel — curtains hang from proprietary two-component gliders, no rings needed.',
      },
      models: [
        {
          id: 'metropole-electric',
          name: 'Metropole Electric',
          description: {
            ru: 'Моторизованная версия штанги — премиальная эстетика гостиничного номера с удобством электропривода.',
            hy: 'Ձողի մոտորացված տարբերակը՝ հյուրանոցային համարի պրեմիում էսթետիկան էլեկտրաշարժիչի հարմարավետությամբ։',
            en: 'A motorised version of the pole — hotel-suite aesthetics combined with the convenience of an electric drive.',
          },
          specs: {
            ru: ['Четыре формы и сечения штанги', 'Отделка: Charcoal, Antique Bronze, Silver, Black и другие', 'Декоративные наконечники на выбор'],
            hy: ['Ձողի չորս ձև և հատված', 'Ծածկույթ՝ Charcoal, Antique Bronze, Silver, Black և այլն', 'Ընտրովի դեկորատիվ ծայրադիրներ'],
            en: ['Four pole shapes and profiles', 'Finishes: Charcoal, Antique Bronze, Silver, Black and more', 'Choice of decorative finials'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/curtain-systems/metropole/hand/7610/',
        },
        {
          id: 'metropole-hand',
          name: 'Metropole Hand / Cord',
          description: {
            ru: 'Ручная или шнуровая версия — тот же премиальный дизайн штанги без электропривода.',
            hy: 'Ձեռքի կամ պարանով տարբերակը՝ ձողի նույն պրեմիում դիզայնով, առանց էլեկտրաշարժիչի։',
            en: 'The hand-drawn or corded version — the same premium pole design without a motor.',
          },
          specs: {
            ru: ['Изготовление по индивидуальным размерам, гнётся', 'Совместима со всеми отделками и наконечниками', 'Экономичнее моторизованной версии'],
            hy: ['Արտադրություն անհատական չափերով, ծալվում է', 'Համատեղելի է բոլոր ծածկույթների և ծայրադիրների հետ', 'Ավելի տնտեսողական է, քան մոտորացված տարբերակը'],
            en: ['Made to measure, bendable', 'Compatible with all finishes and finials', 'More economical than the motorised version'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/curtain-systems/metropole/',
        },
      ],
    },
    {
      slug: 'cubicle',
      image: cubicleImg,
      name: { ru: 'Медицинские и офисные карнизы-разделители', hy: 'Բժշկական և գրասենյակային բաժանիչ կարնիզներ', en: 'Cubicle & Room Divider Track' },
      intro: {
        ru: 'Самая распространённая в мире больничная карнизная система — более 40 лет применяется в клиниках, спа и раздевалках, гнётся под любую планировку помещения.',
        hy: 'Աշխարհում ամենատարածված հիվանդանոցային կարնիզային համակարգը. ավելի քան 40 տարի կիրառվում է կլինիկաներում, սպա-կենտրոններում և հանդերձարաններում, ծալվում է ցանկացած տարածքի պլանավորման համար։',
        en: 'The world\'s most widely used hospital cubicle track — in use for over 40 years in clinics, spas and changing rooms, and bendable to any room layout.',
      },
      models: [
        {
          id: 'sg6100',
          name: 'SG 6100',
          description: {
            ru: 'Больничный карниз с антимикробной полосой-накладкой, снижающей риск перекрёстного заражения.',
            hy: 'Հիվանդանոցային կարնիզ՝ հակամանրէային ծածկույթով շերտով, որը նվազեցնում է խաչաձև վարակման ռիսկը։',
            en: 'A hospital track with an antimicrobial dust-cover strip that reduces the risk of cross-infection.',
          },
          specs: {
            ru: ['Гнётся под любую планировку помещения', 'Пылезащитная антимикробная полоса', 'Ручное управление, изготовление по размерам'],
            hy: ['Ծալվում է ցանկացած տարածքի պլանավորման համար', 'Փոշուց և մանրէներից պաշտպանիչ շերտ', 'Ձեռքի կառավարում, արտադրություն ըստ չափերի'],
            en: ['Bendable to any room layout', 'Dust-cover strip with antimicrobial properties', 'Hand-operated, made to measure'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/curtain-systems/cubicle-room-divider/hand/6100/',
        },
      ],
    },
    {
      slug: 'roller-blinds',
      image: rollerBlindImg,
      name: { ru: 'Рулонные шторы', hy: 'Ռուլոնային վարագույրներ', en: 'Roller Blind Systems' },
      intro: {
        ru: 'Электрический, батарейный, цепной или пружинный привод, включая линейку Dim-out для полного затемнения — медицинские кабинеты, конференц-залы и спальни.',
        hy: 'Էլեկտրական, մարտկոցային, շղթայական կամ զսպանակային մեկնարկ, այդ թվում՝ Dim-out գիծը ամբողջական խավարեցման համար՝ բժշկական կաբինետների, կոնֆերանս-սրահների և ննջասենյակների համար։',
        en: 'Electric, battery, chain or spring operation, including the Dim-out range for total room darkening — for medical offices, conference rooms and bedrooms.',
      },
      models: [
        {
          id: 'sg4960',
          name: 'SG 4960',
          description: {
            ru: 'Универсальная рулонная штора с круглой или квадратной фасцией — совместима с широкой линейкой тканей.',
            hy: 'Ունիվերսալ ռուլոնային վարագույր՝ կլոր կամ քառակուսի ֆասադով, համատեղելի է գործվածքների լայն ընտրանու հետ։',
            en: 'A versatile roller blind with a round or square fascia option — compatible with a wide range of fabrics.',
          },
          specs: {
            ru: ['Привод: электрический, батарейный, цепной, пружинный', 'Фасция: круглая или квадратная', 'Ткани: Colorama, Versascreen, Multiscreen'],
            hy: ['Մեկնարկ՝ էլեկտրական, մարտկոցային, շղթայական, զսպանակային', 'Ֆասադ՝ կլոր կամ քառակուսի', 'Գործվածքներ՝ Colorama, Versascreen, Multiscreen'],
            en: ['Drive: electric, battery, chain or spring', 'Fascia: round or square', 'Fabrics: Colorama, Versascreen, Multiscreen'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/roller-blind-systems/roller-blind-systems/electric/4960/',
        },
        {
          id: 'dimout-nox',
          name: 'Dim-out «Nox»',
          description: {
            ru: 'Линейка полного затемнения для спален и жилых интерьеров — монтаж в нишу или накладным способом.',
            hy: 'Ամբողջական խավարեցման գիծ ննջասենյակների և բնակելի ինտերիերի համար՝ խորշային կամ վրադիր տեղադրում։',
            en: 'A total room-darkening range for bedrooms and residential interiors — recess or surface mounting.',
          },
          specs: {
            ru: ['Полное затемнение помещения', 'Монтаж в нишу или накладной', 'Для спален и жилых интерьеров'],
            hy: ['Սենյակի ամբողջական խավարեցում', 'Խորշային կամ վրադիր տեղադրում', 'Ննջասենյակների և բնակելի ինտերիերի համար'],
            en: ['Total room darkening', 'Recess or surface mounting', 'For bedrooms and residential interiors'],
          },
          image: dimoutNoxImg,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/roller-blind-systems/dim-out-blind-systems/',
        },
        {
          id: 'dimout-moon',
          name: 'Dim-out «Moon»',
          description: {
            ru: 'Специализированная версия для медицинских кабинетов и процедурных — точный контроль света без единого просвета.',
            hy: 'Մասնագիտացված տարբերակ բժշկական կաբինետների և պրոցեդուրային սենյակների համար՝ լույսի ճշգրիտ վերահսկում առանց ճեղքի։',
            en: 'A specialised version for medical offices and treatment rooms — precise light control with no gaps.',
          },
          specs: {
            ru: ['Разработана для медицинских кабинетов', 'Точное затемнение без просветов по краям', 'Совместима со стандартными приводами'],
            hy: ['Նախագծված է բժշկական կաբինետների համար', 'Ճշգրիտ խավարեցում առանց եզրային ճեղքերի', 'Համատեղելի է ստանդարտ մեկնարկների հետ'],
            en: ['Designed for medical offices', 'Precise darkening with no edge gaps', 'Compatible with standard drive options'],
          },
          image: dimoutMoonImg,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/roller-blind-systems/dim-out-blind-systems/',
        },
      ],
    },
    {
      slug: 'panel-glide',
      image: panelGlideImg,
      name: { ru: 'Панельные шторы', hy: 'Պանելային վարագույրներ', en: 'Panel Glide Systems' },
      intro: {
        ru: 'Японские панельные шторы для больших окон и как перегородка пространства — прямые или изогнутые треки, ручное или электрическое управление.',
        hy: 'Ճապոնական պանելային վարագույրներ մեծ պատուհանների համար և որպես տարածքի բաժանիչ. ուղիղ կամ կոր ռելսեր, ձեռքի կամ էլեկտրական կառավարում։',
        en: 'Japanese-inspired panel blinds for large windows and use as a room divider — straight or curved tracks, manual or electric control.',
      },
      models: [
        {
          id: 'sg2750',
          name: 'SG 2750 Electric',
          description: {
            ru: 'Моторизованная панельная система для больших проёмов — управление приложением Move или пультом.',
            hy: 'Մոտորացված պանելային համակարգ մեծ բացվածքների համար՝ կառավարում Move հավելվածով կամ կառավարիչով։',
            en: 'A motorised panel system for large openings — controlled via the Move app or a remote.',
          },
          specs: {
            ru: ['Ширина до 6 м, высота до 4 м', 'Управление: пульт, приложение Move', 'Прямые или изогнутые треки'],
            hy: ['Լայնությունը՝ մինչև 6 մ, բարձրությունը՝ մինչև 4 մ', 'Կառավարում՝ կառավարիչ, Move հավելված', 'Ուղիղ կամ կոր ռելսեր'],
            en: ['Width up to 6 m, height up to 4 m', 'Control: remote, Move app', 'Straight or curved tracks'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/panel-glide-systems/panel/electric/2750/',
        },
        {
          id: 'panel-hand',
          name: 'Panel Hand / Draw-Rod',
          description: {
            ru: 'Ручное управление стержнем — экономичная версия панельной системы для жилых интерьеров.',
            hy: 'Ձեռքով ձողի կառավարում՝ պանելային համակարգի տնտեսողական տարբերակ բնակելի ինտերիերի համար։',
            en: 'Manual draw-rod operation — an economical version of the panel system for residential interiors.',
          },
          specs: {
            ru: ['Ручное управление стержнем', 'Прямые или изогнутые треки', 'Как оконное решение или перегородка'],
            hy: ['Ձեռքով ձողի կառավարում', 'Ուղիղ կամ կոր ռելսեր', 'Որպես պատուհանի լուծում կամ բաժանիչ'],
            en: ['Manual draw-rod control', 'Straight or curved tracks', 'As a window treatment or room divider'],
          },
          image: panelHandImg,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/panel-glide-systems/panel/hand-draw-rod/',
        },
      ],
    },
    {
      slug: 'roman-blinds',
      image: romanBlindImg,
      name: { ru: 'Римские шторы', hy: 'Հռոմեական վարագույրներ', en: 'Roman Blind Systems' },
      intro: {
        ru: 'Мягкая альтернатива классическим карнизам — самостоятельно или в паре со шторами, готовый механизм или полностью готовое изделие на заказ.',
        hy: 'Դասական կարնիզների փափուկ այլընտրանք՝ ինքնուրույն կամ վարագույրների հետ զույգում, պատրաստի մեխանիզմ կամ ամբողջովին պատրաստի արտադրանք՝ պատվերով։',
        en: 'A softer alternative to standard tracks — used alone or paired with curtains, available as hardware only or a complete made-to-measure blind.',
      },
      models: [
        {
          id: 'sg2360',
          name: 'SG 2360 Electric',
          description: {
            ru: 'Самая востребованная моторизованная римская штора линейки — плавный электропривод для крупных полотен.',
            hy: 'Գծի ամենապահանջված մոտորացված հռոմեական վարագույրը՝ հարթ էլեկտրաշարժիչ մեծ գործվածքների համար։',
            en: 'The range\'s most popular motorised Roman blind — smooth electric operation for large fabric panels.',
          },
          specs: {
            ru: ['Моторизованный привод', 'Ткань Colorama и другие коллекции', 'Управление приложением Move'],
            hy: ['Մոտորացված մեկնարկ', 'Colorama գործվածք և այլ կոլեկցիաներ', 'Կառավարում Move հավելվածով'],
            en: ['Motorised drive', 'Colorama fabric and other collections', 'Move app control'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/roman-blind-systems/electric/2360/',
        },
        {
          id: 'sg2355',
          name: 'SG 2355 Battery',
          description: {
            ru: 'Батарейный привод — моторизация без прокладки кабеля, удобна для реновации.',
            hy: 'Մարտկոցային մեկնարկ՝ մոտորացում առանց մալուխի անցկացման, հարմար է վերանորոգման համար։',
            en: 'Battery-powered drive — motorisation without cabling, convenient for renovation projects.',
          },
          specs: {
            ru: ['Батарейный привод без проводки', 'Многоцветные ткани Colorama 2', 'Простая установка при ремонте'],
            hy: ['Մարտկոցային մեկնարկ առանց մալուխի', 'Colorama 2 բազմագույն գործվածքներ', 'Պարզ տեղադրում վերանորոգման ժամանակ'],
            en: ['Battery drive, no wiring', 'Multicolour Colorama 2 fabrics', 'Simple installation during renovation'],
          },
          image: roman2355Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/roman-blind-systems/battery/2355/',
        },
        {
          id: 'sg2120',
          name: 'SG 2120 Chain',
          description: {
            ru: 'Классический вариант с цепным управлением — надёжное и доступное решение.',
            hy: 'Դասական տարբերակ շղթայական կառավարմամբ՝ հուսալի և մատչելի լուծում։',
            en: 'A classic chain-operated version — a reliable and accessible option.',
          },
          specs: {
            ru: ['Цепное управление', 'Ткань Polyflax и другие', 'Готовый механизм или полное изделие'],
            hy: ['Շղթայական կառավարում', 'Polyflax գործվածք և այլն', 'Պատրաստի մեխանիզմ կամ ամբողջական արտադրանք'],
            en: ['Chain operation', 'Polyflax fabric and others', 'Hardware-only or a complete blind'],
          },
          image: roman2120Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/roman-blind-systems/chain/2120/',
        },
      ],
    },
    {
      slug: 'vertical-blinds',
      image: verticalBlindImg,
      name: { ru: 'Вертикальные жалюзи', hy: 'Ուղղահայաց ժալյուզիներ', en: 'Vertical Blind Systems' },
      intro: {
        ru: 'Для окон от пола до потолка и как перегородка — включая фирменную дизайнерскую линию Vertical Wave с лазерной резкой ламелей.',
        hy: 'Հատակից մինչև առաստաղ պատուհանների համար և որպես բաժանիչ, այդ թվում՝ ֆիրմային Vertical Wave դիզայներական գիծը՝ լազերային կտրվածքով լամելներով։',
        en: 'For floor-to-ceiling windows and as a room divider — including the signature Vertical Wave design line with laser-cut louvres.',
      },
      models: [
        {
          id: 'sg2960',
          name: 'SG 2960',
          description: {
            ru: 'Прямые ламели или дизайн Vertical Wave / 3D Vertical Wave с лазерной резкой — скульптурный визуальный эффект.',
            hy: 'Ուղիղ լամելներ կամ Vertical Wave / 3D Vertical Wave դիզայն՝ լազերային կտրվածքով. քանդակագործական վիզուալ էֆեկտ։',
            en: 'Straight louvres or the Vertical Wave / 3D Vertical Wave design with laser-cut shaping — a sculptural visual effect.',
          },
          specs: {
            ru: ['Электрическое или цепное управление', 'Дизайн Vertical Wave и 3D Vertical Wave', 'Ткани Colorama 2, Multi Visio'],
            hy: ['Էլեկտրական կամ շղթայական կառավարում', 'Vertical Wave և 3D Vertical Wave դիզայն', 'Colorama 2, Multi Visio գործվածքներ'],
            en: ['Electric or chain control', 'Vertical Wave and 3D Vertical Wave design', 'Colorama 2, Multi Visio fabrics'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/vertical-blind-systems/electric/2960/',
        },
        {
          id: 'sg2910',
          name: 'SG 2910',
          description: {
            ru: 'Версия с поддержкой той же коллекции дизайнерских ламелей — гибкий выбор ткани и фактуры.',
            hy: 'Տարբերակ՝ դիզայներական լամելների նույն կոլեկցիայի աջակցությամբ. գործվածքի և ֆակտուրայի ճկուն ընտրություն։',
            en: 'A version supporting the same designer louvre collection — flexible choice of fabric and texture.',
          },
          specs: {
            ru: ['Электрическое или цепное управление', 'Ткани Palisade Revive, Multi Visio', 'Подходит для больших витражных проёмов'],
            hy: ['Էլեկտրական կամ շղթայական կառավարում', 'Palisade Revive, Multi Visio գործվածքներ', 'Հարմար է մեծ ապակեպատ բացվածքների համար'],
            en: ['Electric or chain control', 'Palisade Revive, Multi Visio fabrics', 'Suited to large glazed openings'],
          },
          image: vertical2910Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/vertical-blind-systems/electric/2910/',
        },
      ],
    },
    {
      slug: 'pleated-blinds',
      image: pleatedImg,
      name: { ru: 'Плиссе', hy: 'Պլիսե', en: 'Pleated Blind Systems' },
      intro: {
        ru: 'Лёгкие шторы с минимальной высотой стека для максимума света и вида — свободно висящие, с боковыми направляющими, для наклонных и мансардных окон.',
        hy: 'Թեթև վարագույրներ նվազագույն կուտակման բարձրությամբ՝ առավելագույն լույսի և տեսադաշտի համար. ազատ կախված, կողային ուղղորդիչներով, թեք և թեքածածկ պատուհանների համար։',
        en: 'Lightweight blinds with minimal stack height for maximum light and view — free-hanging, with side guides, and for inclined or skylight windows.',
      },
      models: [
        {
          id: 'type-a',
          name: 'Type A — Free Hanging',
          description: {
            ru: 'Свободно висящее полотно с управлением шнуром или цепочкой — простое и лёгкое решение.',
            hy: 'Ազատ կախված գործվածք՝ պարանով կամ շղթայով կառավարմամբ. պարզ ու թեթև լուծում։',
            en: 'A free-hanging panel with pull-cord or chain control — a simple, lightweight solution.',
          },
          specs: {
            ru: ['Управление: шнур или цепочка', 'Минимальная высота стека при открытии', 'Для стандартных оконных проёмов'],
            hy: ['Կառավարում՝ պարան կամ շղթա', 'Բացման ժամանակ նվազագույն կուտակման բարձրություն', 'Ստանդարտ պատուհանային բացվածքների համար'],
            en: ['Control: pull cord or chain', 'Minimal stack height when open', 'For standard window openings'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/pleated-blind-systems/',
        },
        {
          id: 'type-d',
          name: 'Type D — Inclined Windows',
          description: {
            ru: 'Ручное управление специально для наклонных окон и скатных проёмов.',
            hy: 'Ձեռքի կառավարում հատուկ թեք պատուհանների և թեքածածկ բացվածքների համար։',
            en: 'Hand-operated, purpose-built for inclined windows and sloped openings.',
          },
          specs: {
            ru: ['Ручное управление', 'Для наклонных и скатных окон', 'Плотное прилегание для теплоизоляции'],
            hy: ['Ձեռքի կառավարում', 'Թեք և թեքածածկ պատուհանների համար', 'Խիտ հարմարվում ջերմամեկուսացման համար'],
            en: ['Hand-operated', 'For inclined and sloped windows', 'Close fit for heat control'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/pleated-blind-systems/',
        },
        {
          id: 'type-p',
          name: 'Type P — Ceiling Windows',
          description: {
            ru: 'Ручное или крановое управление для мансардных и потолочных окон.',
            hy: 'Ձեռքի կամ պտուտակահանման կառավարում թեքածածկ և առաստաղային պատուհանների համար։',
            en: 'Hand or crank operation for skylight and ceiling windows.',
          },
          specs: {
            ru: ['Управление: рукоятка или кран', 'Для потолочных и мансардных окон', 'Компактный низкопрофильный монтаж'],
            hy: ['Կառավարում՝ բռնակ կամ պտուտակահանման', 'Առաստաղային և թեքածածկ պատուհանների համար', 'Կոմպակտ, ցածր պրոֆիլով տեղադրում'],
            en: ['Control: handle or crank', 'For ceiling and skylight windows', 'Compact, low-profile installation'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/pleated-blind-systems/',
        },
      ],
    },
    {
      slug: 'venetian-blinds',
      image: venetianBlindImg,
      name: { ru: 'Горизонтальные (венецианские) жалюзи', hy: 'Հորիզոնական (վենետիկյան) ժալյուզիներ', en: 'Venetian Blind Systems' },
      intro: {
        ru: 'Ламели из алюминия, дерева или кожи шириной 50 мм — широкий выбор цвета ламели и тесьмы, электрическое, цепное, шнуровое или ручное управление.',
        hy: 'Ալյումինից, փայտից կամ կաշվից 50 մմ լայնությամբ լամելներ՝ լամելի և ժապավենի գույների լայն ընտրանի, էլեկտրական, շղթայական, պարանով կամ ձեռքի կառավարում։',
        en: '50 mm slats in aluminium, wood or leather — a wide choice of slat and tape colours, with electric, chain, cord or wand control.',
      },
      models: [
        {
          id: 'sg8960',
          name: 'SG 8960',
          description: {
            ru: 'Крупноформатная модель с ламелями из алюминия, кожи или дерева — максимальные габариты в линейке.',
            hy: 'Խոշոր ձևաչափի մոդել՝ ալյումինե, կաշվե կամ փայտե լամելներով. գծի առավելագույն չափսերը։',
            en: 'A large-format model with aluminium, leather or wood slats — the largest dimensions in the range.',
          },
          specs: {
            ru: ['Максимум 3600×3600 мм', 'Ламели: алюминий, кожа или дерево 50 мм', 'Электрическое или цепное управление'],
            hy: ['Առավելագույնը 3600×3600 մմ', 'Լամելներ՝ ալյումին, կաշի կամ փայտ 50 մմ', 'Էլեկտրական կամ շղթայական կառավարում'],
            en: ['Max 3600×3600 mm', 'Slats: aluminium, leather or 50 mm wood', 'Electric or chain control'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/venetian-blind-systems/electric/8960/',
        },
        {
          id: 'sg8250',
          name: 'SG 8250 Electric',
          description: {
            ru: 'Электрическая модель среднего размера с управлением от настенного выключателя или пульта.',
            hy: 'Միջին չափի էլեկտրական մոդել՝ պատի անջատիչից կամ կառավարիչից կառավարմամբ։',
            en: 'A mid-size electric model, controlled from a wall switch or remote.',
          },
          specs: {
            ru: ['Максимум 3400×3000 мм', 'Управление настенным выключателем или пультом', 'Лента 38 мм на выбор'],
            hy: ['Առավելագույնը 3400×3000 մմ', 'Կառավարում պատի անջատիչով կամ կառավարիչով', 'Ընտրովի 38 մմ ժապավեն'],
            en: ['Max 3400×3000 mm', 'Wall switch or remote control', 'Optional 38 mm ladder tape'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/venetian-blind-systems/electric/8250/',
        },
        {
          id: 'sg8110',
          name: 'SG 8110',
          description: {
            ru: 'Настраиваемая модель с гибким выбором ламелей — популярна в частных резиденциях премиум-класса.',
            hy: 'Կարգավորելի մոդել՝ լամելների ճկուն ընտրությամբ. հայտնի է պրեմիում կարգի մասնավոր ռեզիդենցիաներում։',
            en: 'A customisable model with flexible slat choices — popular in premium private residences.',
          },
          specs: {
            ru: ['Настраиваемые ламели', 'Ручное, цепное или шнуровое управление', 'Широкая палитра цвета и текстуры'],
            hy: ['Կարգավորելի լամելներ', 'Ձեռքի, շղթայական կամ պարանով կառավարում', 'Գույների և տեքստուրայի լայն ընտրանի'],
            en: ['Customisable slats', 'Hand, chain or cord control', 'Wide colour and texture palette'],
          },
          image: venetian8110Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/venetian-blind-systems/electric/8110/',
        },
      ],
    },
    {
      slug: 'skylight',
      image: skylightImg,
      name: { ru: 'Шторы для мансардных окон и зимних садов', hy: 'Վարագույրներ թեքածածկ պատուհանների և ձմեռային այգիների համար', en: 'Skylight Shading Systems' },
      intro: {
        ru: 'Боковые направляющие профили и мягко складывающееся полотно накрывают до 50 м² остеклённой крыши — горизонтальные, наклонные, изогнутые и арочные геометрии, один мотор на несколько секций.',
        hy: 'Կողային ուղղորդիչ պրոֆիլներ և փափուկ ծալվող գործվածք ծածկում են մինչև 50 մ² ապակեպատ տանիք. հորիզոնական, թեք, կոր և կամարաձև երկրաչափություններ, մեկ շարժիչ մի քանի հատվածների համար։',
        en: 'Side-guide profiles and softly folding fabric cover up to 50 m² of glazed roof — horizontal, sloping, bent and arched geometries, one motor driving multiple sections.',
      },
      models: [
        {
          id: 'sg8600',
          name: 'SG 8600',
          description: {
            ru: 'Натяжная рулонная конструкция для монтажа под любым углом — до 6,5 м в длину.',
            hy: 'Ձգված ռուլոնային կոնստրուկցիա՝ ցանկացած անկյան տակ տեղադրելու համար. մինչև 6,5 մ երկարությամբ։',
            en: 'A tensioned, roller-blind-style construction for mounting at any angle — up to 6.5 m in length.',
          },
          specs: {
            ru: ['Максимум 4000×6500 мм', 'Монтаж под любым углом наклона', 'Управление: пульт или приложение Move'],
            hy: ['Առավելագույնը 4000×6500 մմ', 'Տեղադրում ցանկացած թեքության անկյան տակ', 'Կառավարում՝ կառավարիչ կամ Move հավելված'],
            en: ['Max 4000×6500 mm', 'Mounting at any tilt angle', 'Control: remote or Move app'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/skylight-shading-systems/electric/8600/',
        },
        {
          id: 'sg2195',
          name: 'SG 2195',
          description: {
            ru: 'Модель для средних площадей остекления — используется, включая крупные корпоративные интерьеры.',
            hy: 'Միջին մակերեսի ապակեպատման մոդել՝ օգտագործվում է, այդ թվում՝ խոշոր կորպորատիվ ինտերիերում։',
            en: 'A model for mid-size glazed areas — used in projects including large corporate interiors.',
          },
          specs: {
            ru: ['Максимум 3000×6000 мм, вес до 25 кг', 'Управление: пульт, приложение Move', 'Для атриумов и зимних садов'],
            hy: ['Առավելագույնը 3000×6000 մմ, քաշը՝ մինչև 25 կգ', 'Կառավարում՝ կառավարիչ, Move հավելված', 'Ատրիումների և ձմեռային այգիների համար'],
            en: ['Max 3000×6000 mm, weight up to 25 kg', 'Control: remote, Move app', 'For atriums and conservatories'],
          },
          image: skylight2195Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/skylight-shading-systems/electric/2195/',
        },
        {
          id: 'sg2190',
          name: 'SG 2190 Crank',
          description: {
            ru: 'Съёмная металлическая рукоятка для управления шторами в труднодоступных мансардных проёмах.',
            hy: 'Հանվող մետաղական բռնակ՝ դժվարամատչելի թեքածածկ բացվածքներում վարագույրները կառավարելու համար։',
            en: 'A detachable metal crank for operating blinds in otherwise-inaccessible skylight openings.',
          },
          specs: {
            ru: ['Съёмная крановая рукоятка', 'Для труднодоступных мансардных окон', 'Не требует электропитания'],
            hy: ['Հանվող պտուտակահանման բռնակ', 'Դժվարամատչելի թեքածածկ պատուհանների համար', 'Չի պահանջում էլեկտրասնուցում'],
            en: ['Detachable crank handle', 'For hard-to-reach skylight windows', 'No power supply required'],
          },
          image: skylight2190Img,
          sourceUrl: 'https://www.silentglissglobal.com/englb/products/view/skylight-shading-systems/crank/2190/',
        },
      ],
    },
    {
      slug: 'smart-motorisation',
      image: smarthomeImg,
      name: { ru: 'Умная моторизация Move', hy: 'Move խելացի մոտորացում', en: 'Smart Motorisation — Move' },
      intro: {
        ru: 'Единое приложение Move управляет всеми моторизованными системами Silent Gliss — карнизами, шторами и жалюзи, с астрономическим таймером и сценариями по времени суток.',
        hy: 'Move միասնական հավելվածը կառավարում է Silent Gliss-ի բոլոր մոտորացված համակարգերը՝ կարնիզները, վարագույրները և ժալյուզիները՝ աստղագիտական ժամացույցով և օրվա ժամանակի սցենարներով։',
        en: 'The unified Move app controls all of Silent Gliss\'s motorised systems — tracks, blinds and shades — with an astro function and time-of-day scenes.',
      },
      models: [
        {
          id: 'move-app',
          name: 'Move by Silent Gliss',
          description: {
            ru: 'Приложение и хаб умного дома — расписание, астрономическая функция (по восходу/закату) и группировка сценариев.',
            hy: 'Խելացի տան հավելված և հանգույց՝ ժամանակացույց, աստղագիտական ֆունկցիա (ելք/մայրամուտ) և սցենարների խմբավորում։',
            en: 'A smart home app and hub — scheduling, an Astro function (sunrise/sunset-based), and scene grouping.',
          },
          specs: {
            ru: ['iOS, Android и десктоп', 'Астрономическая функция по восходу/закату', 'Групповое управление сценами'],
            hy: ['iOS, Android և դեսքթոփ', 'Աստղագիտական ֆունկցիա ելքի/մայրամուտի ըստ', 'Սցենաների խմբային կառավարում'],
            en: ['iOS, Android and desktop', 'Astro function based on sunrise/sunset', 'Group scene control'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/smart-motorisation/',
        },
        {
          id: 'move-server',
          name: 'Move Server SG 11900',
          description: {
            ru: 'Центральный хаб для интеграции всей моторизованной линейки в единую сеть здания.',
            hy: 'Կենտրոնական հանգույց՝ ամբողջ մոտորացված գիծը շենքի միասնական ցանցում ինտեգրելու համար։',
            en: 'A central hub that integrates the entire motorised range into a single building-wide network.',
          },
          specs: {
            ru: ['Центральный сервер управления', 'Объединяет все моторизованные продукты', 'Основа для интеграции с системами здания'],
            hy: ['Կենտրոնական կառավարման սերվեր', 'Միավորում է բոլոր մոտորացված արտադրանքները', 'Հիմք՝ շենքի համակարգերի հետ ինտեգրման համար'],
            en: ['Central control server', 'Unifies all motorised products', 'Foundation for building-system integration'],
          },
          sourceUrl: 'https://www.silentglissglobal.com/englb/smart-motorisation/',
        },
      ],
    },
  ],
};
