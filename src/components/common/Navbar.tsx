import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronRight,
} from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { KolamMotif } from './KolamMotif';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      label: t('navHome'),
      path: '/',
    },
    {
      label: t('navAbout'),
      path: '/about',
    },
    {
      label: t('navHowItWorks'),
      path: '/how-it-works',
    },
    {
      label: t('navWhyChooseUs'),
      path: '/why-choose-us',
    },
    {
      label: t('navStories'),
      path: '/success-stories',
    },
    {
      label: t('navBlog'),
      path: '/blog',
    },
    {
      label: t('navFaq'),
      path: '/faq',
    },
    {
      label: t('navContact'),
      path: '/contact',
    },
  ];

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
  };

  /*
   * Close mobile menu when route changes.
   */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  /*
   * Prevent page scrolling while mobile menu is open.
   */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* =====================================================
          FIXED NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-[100]
          w-full
          h-16
          lg:h-[72px]
          border-b
          border-[#8B3A4A]/10
          bg-[#FCF8F5]/95
          dark:bg-[#171013]/95
          backdrop-blur-xl
        "
      >

        <div className="page-container h-full">

          {/* =================================================
              NAVBAR CONTENT
          ================================================= */}

          <div
            className="
              h-full
              flex
              items-center
              justify-between
              gap-3
              lg:gap-5
            "
          >

            {/* =================================================
                BRAND
            ================================================= */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                flex
                items-center
                gap-2.5
                min-w-0
                shrink-0
                group
              "
              aria-label={t('brandName')}
            >

              {/* Fixed Logo */}
              <div
                className="
                  w-10
                  h-10
                  lg:w-11
                  lg:h-11
                  shrink-0
                  rounded-xl
                  bg-gradient-to-br
                  from-[#8B3A4A]
                  via-[#754052]
                  to-[#4A1F2A]
                  border
                  border-[#D6B56A]/45
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover:border-[#D6B56A]/75
                "
              >

                <KolamMotif
                  size={23}
                  color="#E8D39A"
                />

              </div>


              {/* Brand */}
              <div className="min-w-0">

                <div
                  className="
                    font-serif-brand
                    text-[0.78rem]
                    lg:text-sm
                    font-bold
                    tracking-wide
                    leading-tight
                    text-[#8B3A4A]
                    dark:text-[#E8D39A]
                    truncate
                    max-w-[170px]
                    sm:max-w-[210px]
                  "
                >
                  {t('brandName')}
                </div>

                <div
                  className="
                    hidden
                    sm:block
                    mt-0.5
                    text-[9px]
                    text-[#76666A]
                    dark:text-[#C9B8B8]
                    leading-tight
                    truncate
                  "
                >
                  {t('brandTagline')}
                </div>

              </div>

            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                lg:flex
                flex-1
                items-center
                justify-center
                gap-0.5
              "
              aria-label="Main navigation"
            >

              {navigation.map((item) => {

                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative
                      px-2.5
                      xl:px-3
                      py-2
                      rounded-lg
                      text-[0.78rem]
                      xl:text-sm
                      font-semibold
                      whitespace-nowrap
                      transition-all
                      duration-200

                      ${
                        active
                          ? `
                            text-[#8B3A4A]
                            bg-[#F4E4E7]
                            dark:text-[#E8D39A]
                            dark:bg-[#D6B56A]/10
                          `
                          : `
                            text-[#5F5054]
                            hover:text-[#8B3A4A]
                            hover:bg-[#F7EFD9]
                            dark:text-[#D2C4C5]
                            dark:hover:text-[#E8D39A]
                            dark:hover:bg-white/5
                          `
                      }
                    `}
                  >

                    {item.label}

                    {active && (
                      <span
                        className="
                          absolute
                          left-1/2
                          -translate-x-1/2
                          bottom-0.5
                          w-5
                          h-0.5
                          rounded-full
                          bg-[#D6B56A]
                        "
                      />
                    )}

                  </Link>
                );
              })}

            </nav>


            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-1.5
                shrink-0
              "
            >

              {/* Language */}
              <button
                type="button"
                onClick={() =>
                  setLanguage(
                    language === 'en'
                      ? 'ta'
                      : 'en'
                  )
                }
                className="
                  hidden
                  sm:flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-[#8B3A4A]/12
                  dark:border-[#E8D39A]/15
                  bg-transparent
                  text-[11px]
                  font-bold
                  text-[#5F5054]
                  dark:text-[#E8D39A]
                  hover:bg-[#F7EFD9]
                  hover:border-[#D6B56A]/50
                  dark:hover:bg-white/5
                  transition-all
                  duration-200
                "
                aria-label={
                  language === 'en'
                    ? 'Switch to Tamil'
                    : 'Switch to English'
                }
              >
                {language === 'en' ? 'தமிழ்' : 'EN'}
              </button>


              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-[#8B3A4A]/12
                  dark:border-[#E8D39A]/15
                  bg-transparent
                  text-[#8B3A4A]
                  dark:text-[#E8D39A]
                  hover:bg-[#F7EFD9]
                  hover:border-[#D6B56A]/50
                  dark:hover:bg-white/5
                  transition-all
                  duration-200
                "
                aria-label={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >

                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}

              </button>


              {/* Mobile Menu */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="
                  lg:hidden
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-[#8B3A4A]/12
                  dark:border-[#E8D39A]/15
                  bg-transparent
                  text-[#5F5054]
                  dark:text-[#E8D39A]
                  hover:bg-[#F7EFD9]
                  hover:border-[#D6B56A]/50
                  dark:hover:bg-white/5
                  transition-all
                  duration-200
                  active:scale-95
                "
                aria-label={
                  mobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileMenuOpen}
              >

                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}

              </button>

            </div>

          </div>


          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {mobileMenuOpen && (
            <div
              className="
                absolute
                top-16
                left-0
                right-0
                lg:hidden
                border-t
                border-[#8B3A4A]/10
                bg-[#FCF8F5]
                dark:bg-[#171013]
                shadow-xl
              "
            >

              <nav
                className="
                  page-container
                  py-2.5
                  flex
                  flex-col
                  gap-1
                  max-h-[calc(100vh-64px)]
                  overflow-y-auto
                  pb-4
                "
                aria-label="Mobile navigation"
              >

                {navigation.map((item) => {

                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        min-h-12
                        px-4
                        py-2
                        rounded-xl
                        text-sm
                        font-semibold
                        transition-all
                        duration-200

                        ${
                          active
                            ? `
                              bg-[#8B3A4A]
                              text-white
                              shadow-sm
                            `
                            : `
                              text-[#5F5054]
                              dark:text-[#D2C4C5]
                              hover:bg-[#F4E4E7]
                              dark:hover:bg-white/5
                            `
                        }
                      `}
                    >

                      <span className="font-tamil leading-6">
                        {item.label}
                      </span>

                      <ChevronRight
                        className={`
                          w-4
                          h-4
                          shrink-0
                          transition-transform

                          ${
                            active
                              ? 'text-[#E8D39A]'
                              : 'text-[#A99A9D] group-hover:translate-x-0.5'
                          }
                        `}
                      />

                    </Link>
                  );
                })}


                {/* Divider */}
                <div
                  className="
                    my-1.5
                    border-t
                    border-[#8B3A4A]/10
                    dark:border-white/10
                  "
                />


                {/* Language */}
                <button
                  type="button"
                  onClick={() =>
                    setLanguage(
                      language === 'en'
                        ? 'ta'
                        : 'en'
                    )
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    min-h-12
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-semibold
                    text-[#5F5054]
                    dark:text-[#D2C4C5]
                    hover:bg-[#F4E4E7]
                    dark:hover:bg-white/5
                    transition
                  "
                >

                  <span>
                    {language === 'en'
                      ? 'தமிழ்'
                      : 'English'}
                  </span>

                  <span
                    className="
                      text-xs
                      font-bold
                      text-[#8B3A4A]
                      dark:text-[#E8D39A]
                    "
                  >
                    {language === 'en'
                      ? 'தமிழ்'
                      : 'EN'}
                  </span>

                </button>


                {/* Theme */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="
                    flex
                    items-center
                    justify-between
                    min-h-12
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-semibold
                    text-[#5F5054]
                    dark:text-[#D2C4C5]
                    hover:bg-[#F4E4E7]
                    dark:hover:bg-white/5
                    transition
                  "
                >

                  <span>
                    {theme === 'dark'
                      ? 'Light Mode'
                      : 'Dark Mode'}
                  </span>

                  <span
                    className="
                      w-8
                      h-8
                      rounded-lg
                      bg-[#F7EFD9]
                      dark:bg-[#D6B56A]/10
                      flex
                      items-center
                      justify-center
                    "
                  >

                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4 text-[#E8D39A]" />
                    ) : (
                      <Moon className="w-4 h-4 text-[#8B3A4A]" />
                    )}

                  </span>

                </button>

              </nav>

            </div>
          )}

        </div>

      </header>


      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile navigation"
          onClick={closeMobileMenu}
          className="
            lg:hidden
            fixed
            inset-0
            top-16
            z-[90]
            bg-black/10
            dark:bg-black/40
            backdrop-blur-[1px]
          "
        />
      )}

    </>
  );
};