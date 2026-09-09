import { warema } from './warema';
import { hella } from './hella';
import { silentGliss } from './silentgliss';
import type { BrandCatalog } from './types';

export const brandCatalogs: Record<string, BrandCatalog> = {
  warema,
  hella,
  'silent-gliss': silentGliss,
};

export const brandSlugs = Object.keys(brandCatalogs);

export type { BrandCatalog, ProductCategory, ProductModel, LocalizedText, LocalizedList } from './types';
