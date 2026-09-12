/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import { getActiveTheme, applyTheme, THEME_IDS } from './lib/theme';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const About = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SystemPage = lazy(() => import('./pages/SystemPage'));
const ThemePreview = lazy(() => import('./pages/ThemePreview'));

function ThemeController() {
  const location = useLocation();

  useEffect(() => {
    const requestedTheme = new URLSearchParams(location.search).get('theme');
    if (requestedTheme && THEME_IDS.has(requestedTheme)) {
      applyTheme(requestedTheme);
    } else {
      const active = getActiveTheme();
      applyTheme(active);
    }
  }, [location.search]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [pathname, hash]);
  return null;
}

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-light text-stone" role="status" aria-live="polite">
      <span className="text-xs uppercase tracking-[0.14em] text-gold-text">Loading</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <ThemeController />
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/system" element={<SystemPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/themes" element={<ThemePreview />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
