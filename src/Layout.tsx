import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/i18n/LanguageContext';
import ScrollManager from '@/components/ScrollManager';
import MobileActionBar from '@/components/MobileActionBar';

const queryClient = new QueryClient();

const Layout: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <ScrollManager />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <MobileActionBar />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default Layout;
