import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import Layout from './Layout';
import { brandSlugs, unifiedCategories } from '@/data/products';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: React.lazy(() => import('./pages/Index')) },
      { path: 'solutions', Component: React.lazy(() => import('./pages/Solutions')) },
      {
        path: 'solutions/category/:categorySlug',
        Component: React.lazy(() => import('./pages/CategoryDetail')),
        getStaticPaths: () => unifiedCategories.map((c) => `solutions/category/${c.slug}`),
      },
      {
        path: 'solutions/:brandSlug',
        Component: React.lazy(() => import('./pages/BrandDetail')),
        getStaticPaths: () => brandSlugs.map((slug) => `solutions/${slug}`),
      },
      { path: 'services', Component: React.lazy(() => import('./pages/Services')) },
      { path: 'about', Component: React.lazy(() => import('./pages/About')) },
      { path: 'portfolio', Component: React.lazy(() => import('./pages/Portfolio')) },
      { path: 'contacts', Component: React.lazy(() => import('./pages/Contacts')) },
      { path: '*', Component: React.lazy(() => import('./pages/NotFound')) },
    ],
  },
];
