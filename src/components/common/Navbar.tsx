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


/* =========================================================
   NAVBAR
========================================================= */

export const Navbar: React.FC = () => {

  const {
    t,
    language,
    setLanguage,
  } = useLanguage();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);


  /* =========================================================
     NAVIGATION
  ========================================================= */

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


  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const isActive = (path: string): boolean => {

    if (path === '/') {
      return location.pathname === '/';
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
  };


  /* =========================================================
     LANGUAGE SWITCH
  ========================================================= */

  const handleLanguageChange = (
    nextLanguage: 'en' | 'ta'
  ) => {

    if (language === nextLanguage) {
      return;
    }

    setLanguage(nextLanguage);

    /*
      Close mobile menu after language change.
      This prevents the old-language menu from
      remaining visible.
    */
    setMobileMenuOpen(false);
  };


  /* =========================================================
     CLOSE MENU WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);


  /* =========================================================
     LOCK BODY SCROLL
  ========================================================= */

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


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-[100]

          w-full
          h-[68px]
          xl:h-[72px]

          border-b
          border-[#8B3A4A]/10
          dark:border-[#D6B56A]/10

          bg-[#FCF8F5]/95
          dark:bg-[#171013]/95

          backdrop-blur-xl
        "
      >

        {/* ===================================================
            NAVBAR INNER
        ==================================================== */}

        <div
          className="
            h-full
            w-full

            max-w-[1600px]

            mx-auto

            px-3
            sm:px-4
            xl:px-5
            2xl:px-6
          "
        >

          <div
            className="
              h-full

              flex
              items-center

              gap-2
              xl:gap-3
            "
          >

            {/* =================================================
                BRAND
            ================================================= */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              aria-label={t('brandName')}
              className="
                group

                flex
                items-center
                gap-2

                shrink-0
                min-w-0

                w-[210px]
                xl:w-[235px]
                2xl:w-[250px]
              "
            >

              {/* Logo */}

              <div
                className="
                  shrink-0

                  w-10
                  h-10

                  xl:w-11
                  xl:h-11

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


              {/* Brand Text */}

              <div className="min-w-0 flex-1">

                <div
                  className="
                    font-serif-brand

                    text-[13px]
                    xl:text-[14px]
                    2xl:text-[15px]

                    font-bold
                    tracking-wide

                    leading-tight

                    text-[#8B3A4A]
                    dark:text-[#E8D39A]

                    whitespace-nowrap
                    overflow-hidden
                    text-ellipsis
                  "
                >
                  {t('brandName')}
                </div>


                <div
                  className="
                    hidden
                    sm:block

                    mt-0.5

                    text-[8px]
                    xl:text-[9px]

                    text-[#76666A]
                    dark:text-[#C9B8B8]

                    leading-tight

                    whitespace-nowrap
                    overflow-hidden
                    text-ellipsis
                  "
                >
                  {t('brandTagline')}
                </div>

              </div>

            </Link>


            {/* =================================================
                DESKTOP NAVIGATION

                XL ONLY

                This prevents the navbar from becoming crowded
                on tablets and smaller laptops.
            ================================================= */}

            <nav
              className="
                hidden
                xl:flex

                flex-1
                min-w-0

                h-full

                items-center
                justify-end

                gap-0.5
                2xl:gap-1

                overflow-visible
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

                      shrink-0

                      flex
                      items-center
                      justify-center

                      h-10

                      px-2
                      2xl:px-2.5

                      rounded-lg

                      text-[11px]
                      2xl:text-[12px]

                      font-semibold

                      whitespace-nowrap

                      transition-all
                      duration-200

                      ${
                        active
                          ? `
                            bg-[#F4E4E7]
                            text-[#8B3A4A]

                            dark:bg-[#D6B56A]/10
                            dark:text-[#E8D39A]
                          `
                          : `
                            text-[#5F5054]

                            hover:bg-[#F7EFD9]
                            hover:text-[#8B3A4A]

                            dark:text-[#D2C4C5]

                            dark:hover:bg-white/5
                            dark:hover:text-[#E8D39A]
                          `
                      }
                    `}
                  >

                    <span
                      className="
                        font-tamil

                        leading-5

                        whitespace-nowrap
                      "
                    >
                      {item.label}
                    </span>


                    {/* Active underline */}

                    {active && (
                      <span
                        className="
                          absolute

                          left-1/2
                          -translate-x-1/2

                          bottom-0.5

                          w-5
                          h-[2px]

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
                ACTIONS
            ================================================= */}

            <div
              className="
                flex
                items-center

                gap-1.5

                shrink-0
              "
            >

              {/* =================================================
                  LANGUAGE BUTTON
              ================================================= */}

              <button
                type="button"

                onClick={() =>
                  handleLanguageChange(
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
                  border-[#8B3A4A]/20
                  dark:border-[#D6B56A]/25

                  bg-transparent

                  text-[#8B3A4A]
                  dark:text-[#E8D39A]

                  text-[11px]

                  font-bold

                  hover:bg-[#F7EFD9]
                  hover:border-[#D6B56A]/60

                  dark:hover:bg-[#D6B56A]/10

                  transition-all
                  duration-200

                  active:scale-95
                "
                aria-label={
                  language === 'en'
                    ? 'Switch to Tamil'
                    : 'Switch to English'
                }
              >

                {language === 'en'
                  ? 'தமிழ்'
                  : 'EN'}

              </button>


              {/* =================================================
                  THEME BUTTON
              ================================================= */}

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
                  border-[#8B3A4A]/20
                  dark:border-[#D6B56A]/25

                  bg-transparent

                  text-[#8B3A4A]
                  dark:text-[#E8D39A]

                  hover:bg-[#F7EFD9]
                  hover:border-[#D6B56A]/60

                  dark:hover:bg-[#D6B56A]/10

                  transition-all
                  duration-200

                  active:scale-95
                "
                aria-label={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >

                {theme === 'dark' ? (
                  <Sun
                    className="w-[17px] h-[17px]"
                    aria-hidden="true"
                  />
                ) : (
                  <Moon
                    className="w-[17px] h-[17px]"
                    aria-hidden="true"
                  />
                )}

              </button>


              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              <button
                type="button"

                onClick={toggleMobileMenu}

                className="
                  flex
                  xl:hidden

                  items-center
                  justify-center

                  w-10
                  h-10

                  rounded-xl

                  border
                  border-[#8B3A4A]/20
                  dark:border-[#D6B56A]/25

                  bg-transparent

                  text-[#8B3A4A]
                  dark:text-[#E8D39A]

                  hover:bg-[#F7EFD9]

                  dark:hover:bg-[#D6B56A]/10

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
                  <X
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                ) : (
                  <Menu
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                )}

              </button>

            </div>

          </div>


          {/* ===================================================
              MOBILE MENU
          ==================================================== */}

          {mobileMenuOpen && (

            <div
              className="
                absolute

                top-[68px]
                left-0
                right-0

                xl:hidden

                border-t
                border-[#8B3A4A]/10
                dark:border-[#D6B56A]/10

                bg-[#FCF8F5]
                dark:bg-[#171013]

                shadow-2xl
              "
            >

              <nav
                className="
                  w-full

                  max-h-[calc(100vh-68px)]

                  overflow-y-auto

                  px-4
                  py-3

                  flex
                  flex-col

                  gap-1
                "
                aria-label="Mobile navigation"
              >

                {/* =================================================
                    MOBILE LINKS
                ================================================= */}

                {navigation.map((item) => {

                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}

                      to={item.path}

                      onClick={closeMobileMenu}

                      className={`
                        flex
                        items-center
                        justify-between

                        min-h-11

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

                      <span
                        className="
                          font-tamil
                          leading-6
                        "
                      >
                        {item.label}
                      </span>


                      <ChevronRight
                        className={`
                          w-4
                          h-4

                          shrink-0

                          ${
                            active
                              ? 'text-[#E8D39A]'
                              : 'text-[#A99A9D]'
                          }
                        `}
                        aria-hidden="true"
                      />

                    </Link>
                  );

                })}


                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div
                  className="
                    my-1

                    border-t

                    border-[#8B3A4A]/10
                    dark:border-white/10
                  "
                />


                {/* =================================================
                    MOBILE LANGUAGE
                ================================================= */}

                <button
                  type="button"

                  onClick={() =>
                    handleLanguageChange(
                      language === 'en'
                        ? 'ta'
                        : 'en'
                    )
                  }

                  className="
                    flex
                    items-center
                    justify-between

                    min-h-11

                    px-4
                    py-2

                    rounded-xl

                    text-sm
                    font-semibold

                    text-[#5F5054]
                    dark:text-[#D2C4C5]

                    hover:bg-[#F4E4E7]
                    dark:hover:bg-white/5

                    transition-all
                  "
                >

                  <span className="font-tamil">

                    {language === 'en'
                      ? 'தமிழுக்கு மாற்று'
                      : 'ஆங்கிலத்திற்கு மாற்று'}

                  </span>


                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      min-w-9
                      h-8

                      px-2

                      rounded-lg

                      bg-[#F7EFD9]
                      dark:bg-[#D6B56A]/10

                      text-[#8B3A4A]
                      dark:text-[#E8D39A]

                      text-xs
                      font-bold
                    "
                  >

                    {language === 'en'
                      ? 'தமிழ்'
                      : 'EN'}

                  </span>

                </button>


                {/* =================================================
                    MOBILE THEME
                ================================================= */}

                <button
                  type="button"
                  onClick={toggleTheme}

                  className="
                    flex
                    items-center
                    justify-between

                    min-h-11

                    px-4
                    py-2

                    rounded-xl

                    text-sm
                    font-semibold

                    text-[#5F5054]
                    dark:text-[#D2C4C5]

                    hover:bg-[#F4E4E7]
                    dark:hover:bg-white/5

                    transition-all
                  "
                >

                  <span>

                    {theme === 'dark'
                      ? 'Light Mode'
                      : 'Dark Mode'}

                  </span>


                  <span
                    className="
                      w-9
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
                      <Sun
                        className="
                          w-4
                          h-4
                          text-[#E8D39A]
                        "
                        aria-hidden="true"
                      />
                    ) : (
                      <Moon
                        className="
                          w-4
                          h-4
                          text-[#8B3A4A]
                        "
                        aria-hidden="true"
                      />
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
      ====================================================== */}

      {mobileMenuOpen && (

        <button
          type="button"

          aria-label="Close mobile navigation"

          onClick={closeMobileMenu}

          className="
            xl:hidden

            fixed
            inset-0

            top-[68px]

            z-[90]

            bg-black/10
            dark:bg-black/40

            backdrop-blur-[1px]
          "
        />

      )}


      {/* =====================================================
          NAVBAR SPACER
      ====================================================== */}

      <div
        className="
          h-[68px]
          xl:h-[72px]
        "
        aria-hidden="true"
      />

    </>
  );
};

export default Navbar;