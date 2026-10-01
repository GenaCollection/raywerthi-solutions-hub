import { describe, expect, it } from 'vitest';
import { brandCatalogs, unifiedCategories } from '@/data/products';

describe('catalog integrity', () => {
  it('has unique routes and valid category and featured-model references', () => {
    expect(new Set(unifiedCategories.map((category) => category.slug)).size).toBe(unifiedCategories.length);
    for (const category of unifiedCategories) {
      expect(category.sources.length).toBeGreaterThan(0);
      for (const source of category.sources) {
        const match = brandCatalogs[source.brand]?.categories.find((item) => item.slug === source.categorySlug);
        expect(match, category.slug + ': ' + source.categorySlug).toBeDefined();
      }
      for (const featured of category.featured ?? []) {
        const models = brandCatalogs[featured.brand]?.categories.find((item) => item.slug === featured.categorySlug)?.models;
        expect(models?.some((model) => model.id === featured.modelId), featured.modelId).toBe(true);
        expect(category.sources).toContainEqual({ brand: featured.brand, categorySlug: featured.categorySlug });
      }
    }
  });

  it('provides model descriptions and specs in all supported languages', () => {
    for (const brand of Object.values(brandCatalogs)) {
      expect(new Set(brand.categories.map((category) => category.slug)).size).toBe(brand.categories.length);
      for (const category of brand.categories) {
        expect(new Set(category.models.map((model) => model.id)).size).toBe(category.models.length);
        for (const model of category.models) {
          for (const entry of [model, ...(model.sizeVariants ?? [])]) {
            for (const lang of ['ru', 'hy', 'en'] as const) {
              expect(entry.description[lang].trim(), model.id + ': ' + lang).not.toBe('');
              expect(entry.specs[lang].length, model.id + ': ' + lang).toBeGreaterThan(0);
            }
          }
        }
      }
    }
  });
});