export interface LocalizedText {
  ru: string;
  hy: string;
  en: string;
}

export interface LocalizedList {
  ru: string[];
  hy: string[];
  en: string[];
}

export interface ProductModel {
  id: string;
  /** Proper noun / model code — kept identical across languages. */
  name: string;
  description: LocalizedText;
  specs: LocalizedList;
  image?: string;
  /** Extra photos beyond the primary `image`, shown in a small gallery. */
  gallery?: string[];
  /** Official manufacturer page for this model — full specs, more photos. */
  sourceUrl?: string;
}

export interface ProductCategory {
  slug: string;
  name: LocalizedText;
  intro: LocalizedText;
  image: string;
  models: ProductModel[];
}

export interface BrandCatalog {
  slug: 'warema' | 'hella' | 'silent-gliss';
  name: string;
  tagline: LocalizedText;
  logo: string;
  siteUrl: string;
  categories: ProductCategory[];
}
