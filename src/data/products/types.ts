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

/** One size tier of a model that otherwise shares the same design/photos — e.g. a compact and a max-size cassette. */
export interface ModelSizeVariant {
  /** Short label shown on the switcher pill, e.g. "550" or "K50". */
  label: string;
  description: LocalizedText;
  specs: LocalizedList;
  sourceUrl?: string;
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
  /** Shows a "bestseller" badge on the card. */
  bestseller?: boolean;
  /** Official manufacturer page for this model — full specs, more photos. */
  sourceUrl?: string;
  /**
   * Size tiers of the same physical design (shared image gallery). When set, the card
   * shows a switcher and displays each tier's own description/specs/sourceUrl instead
   * of the model's own `description`/`specs`/`sourceUrl`.
   */
  sizeVariants?: ModelSizeVariant[];
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
