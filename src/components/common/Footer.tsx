import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  ChevronRight,
} from 'lucide-react';

import { KolamMotif } from './KolamMotif';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="
        relative
        bg-gradient-to-b
        from-[#4A0A17]
        via-[#350610]
        to-[#22040A]
        text-amber-100/90
        border-t
        border-amber-500/30
      "
    >

      {/* =====================================================
          SOFT TOP LINE
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-amber-400/50
          to-transparent
        "
      />

      <div className="page-container">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="py-8 sm:py-9 lg:py-10">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-7
              lg:gap-8
            "
          >

            {/* =================================================
                BRAND
            ================================================= */}

            <div className="lg:col-span-2">

              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  group
                "
              >

                {/* Logo */}
                <div
                  className="
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    rounded-xl
                    bg-[#7A1C2E]
                    border
                    border-amber-400/40
                    flex
                    items-center
                    justify-center
                    shrink-0
                    shadow-sm
                    group-hover:border-amber-300/70
                    transition
                  "
                >
                  <KolamMotif
                    size={23}
                    color="#F3E5AB"
                  />
                </div>


                {/* Brand Name */}
                <span
                  className="
                    text-base
                    sm:text-lg
                    font-bold
                    font-serif-brand
                    text-amber-200
                    leading-tight
                  "
                >
                  {t('brandName')}
                </span>

              </Link>


              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-lg
                  text-xs
                  sm:text-sm
                  leading-6
                  text-amber-100/70
                  font-tamil
                "
              >
                {t('brandSubtitle')}
              </p>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div className="mt-5 space-y-2">

                {/* Phone */}
                <a
                  href="tel:+919842212345"
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    min-h-9
                    text-xs
                    sm:text-sm
                    text-amber-100/70
                    hover:text-amber-300
                    transition
                  "
                >

                  <span
                    className="
                      w-8
                      h-8
                      rounded-lg
                      bg-amber-400/10
                      border
                      border-amber-400/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:bg-amber-400/15
                      transition
                    "
                  >
                    <Phone
                      className="w-3.5 h-3.5 text-amber-400"
                    />
                  </span>

                  <span className="break-all">
                    +91 98422 12345
                  </span>

                </a>


                {/* Email */}
                <a
                  href="mailto:support@kongunilamatrimony.com"
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    min-h-9
                    text-xs
                    sm:text-sm
                    text-amber-100/70
                    hover:text-amber-300
                    transition
                  "
                >

                  <span
                    className="
                      w-8
                      h-8
                      rounded-lg
                      bg-amber-400/10
                      border
                      border-amber-400/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:bg-amber-400/15
                      transition
                    "
                  >
                    <Mail
                      className="w-3.5 h-3.5 text-amber-400"
                    />
                  </span>

                  <span className="break-all">
                    support@kongunilamatrimony.com
                  </span>

                </a>


                {/* Location */}
                <div
                  className="
                    flex
                    items-start
                    gap-2.5
                    min-h-9
                    text-xs
                    sm:text-sm
                    text-amber-100/70
                  "
                >

                  <span
                    className="
                      w-8
                      h-8
                      rounded-lg
                      bg-amber-400/10
                      border
                      border-amber-400/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <MapPin
                      className="w-3.5 h-3.5 text-amber-400"
                    />
                  </span>

                  <span className="pt-1.5">
                    Coimbatore, Tamil Nadu, India
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                QUICK LINKS
            ================================================= */}

            <div>

              <h3
                className="
                  mb-3
                  text-sm
                  font-bold
                  text-amber-300
                "
              >
                Quick Links
              </h3>

              <nav className="grid grid-cols-1 gap-0.5">

                <FooterLink
                  to="/"
                  label={t('navHome')}
                />

                <FooterLink
                  to="/about"
                  label={t('navAbout')}
                />

                <FooterLink
                  to="/how-it-works"
                  label={t('navHowItWorks')}
                />

                <FooterLink
                  to="/why-choose-us"
                  label={t('navWhyChooseUs')}
                />

                <FooterLink
                  to="/success-stories"
                  label={t('navStories')}
                />

              </nav>

            </div>


            {/* =================================================
                INFORMATION
            ================================================= */}

            <div>

              <h3
                className="
                  mb-3
                  text-sm
                  font-bold
                  text-amber-300
                "
              >
                Information
              </h3>

              <nav className="grid grid-cols-1 gap-0.5">

                <FooterLink
                  to="/blog"
                  label={t('navBlog')}
                />

                <FooterLink
                  to="/faq"
                  label={t('navFaq')}
                />

                <FooterLink
                  to="/contact"
                  label={t('navContact')}
                />

                <FooterLink
                  to="/privacy-policy"
                  label={t('navPrivacy')}
                />

                <FooterLink
                  to="/terms"
                  label={t('navTerms')}
                />

              </nav>

            </div>

          </div>

        </div>


        {/* =====================================================
            MOBILE CONTACT STRIP
        ===================================================== */}

        <div
          className="
            lg:hidden
            border-t
            border-b
            border-amber-500/15
            py-4
          "
        >

          <div className="grid grid-cols-2 gap-2.5">

            <a
              href="tel:+919842212345"
              className="
                flex
                items-center
                justify-center
                gap-1.5
                min-h-10
                rounded-lg
                bg-amber-400/10
                border
                border-amber-400/15
                text-xs
                font-semibold
                text-amber-200
                active:scale-[0.98]
                transition
              "
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Call Us
            </a>


            <a
              href="mailto:support@kongunilamatrimony.com"
              className="
                flex
                items-center
                justify-center
                gap-1.5
                min-h-10
                rounded-lg
                bg-amber-400/10
                border
                border-amber-400/15
                text-xs
                font-semibold
                text-amber-200
                active:scale-[0.98]
                transition
              "
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              Email Us
            </a>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            border-t
            border-amber-500/20
            py-4
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-2
              text-center
              sm:text-left
            "
          >

            {/* Copyright */}
            <p
              className="
                text-[10px]
                sm:text-xs
                leading-5
                text-amber-100/50
              "
            >
              © {new Date().getFullYear()} Kongu Nila Matrimony.

              <span className="hidden sm:inline">
                {' '}
              </span>

              <span className="block sm:inline">
                All rights reserved.
              </span>
            </p>


            {/* Made With */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-1.5
                text-[10px]
                sm:text-xs
                text-amber-100/50
              "
            >

              <span>
                Made with
              </span>

              <Heart
                className="
                  w-3
                  h-3
                  fill-current
                  text-rose-400
                  shrink-0
                "
              />

              <span>
                for Kongu families
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};


/* =========================================================
   FOOTER LINK
========================================================= */

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  to,
  label,
}) => {
  return (
    <Link
      to={to}
      className="
        group
        flex
        items-center
        gap-1.5
        min-h-9
        py-0.5
        text-xs
        sm:text-sm
        text-amber-100/65
        hover:text-amber-300
        transition
      "
    >

      <ChevronRight
        className="
          w-3
          h-3
          text-amber-500/50
          group-hover:text-amber-300
          group-hover:translate-x-0.5
          transition
          shrink-0
        "
        aria-hidden="true"
      />

      <span className="font-tamil leading-5">
        {label}
      </span>

    </Link>
  );
};