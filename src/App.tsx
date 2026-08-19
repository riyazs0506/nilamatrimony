import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import WhyChooseUs from './pages/WhyChooseUs';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';


/* =========================================================
   SCROLL TO TOP
========================================================= */

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
};


/* =========================================================
   APP LAYOUT
========================================================= */

const Layout: React.FC = () => {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#FAF7F2]
        dark:bg-[#120B0D]
        text-[#2D2424]
        dark:text-[#EFE6DA]
        flex
        flex-col
        font-sans
      "
    >

      {/* =====================================================
          SCROLL HANDLER
      ===================================================== */}

      <ScrollToTop />


      {/* =====================================================
          FIXED NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          PAGE CONTENT
          
          Navbar:
          Mobile  = 64px
          Desktop = 72px
      ===================================================== */}

      <main
        id="main-content"
        className="
          flex-1
          w-full
          min-w-0
          overflow-x-hidden
          pt-16
          lg:pt-[72px]
        "
      >

        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              MAIN PAGES
          ================================================= */}

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

          <Route
            path="/why-choose-us"
            element={<WhyChooseUs />}
          />

          <Route
            path="/success-stories"
            element={<SuccessStories />}
          />


          {/* =================================================
              INFORMATION
          ================================================= */}

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />


          {/* =================================================
              CONTACT
          ================================================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =================================================
              LEGAL
          ================================================= */}

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />


          {/* =================================================
              FALLBACK
          ================================================= */}

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
};


/* =========================================================
   APP
========================================================= */

const App: React.FC = () => {
  return (
    <BrowserRouter>

      <LanguageProvider>

        <ThemeProvider>

          <Layout />

        </ThemeProvider>

      </LanguageProvider>

    </BrowserRouter>
  );
};

export default App;