import React from 'react';
import {
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Compass,
  Leaf,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#7A1C2E] to-[#3B0712] text-white">

        {/* Decorative Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          aria-hidden="true"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-amber-300/30" />

          <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full border border-amber-300/20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-9 sm:py-11 lg:py-13 text-center">

          <span className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-amber-300">
            KONGU NILA MATRIMONY
          </span>

          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
            {t('aboutTitle')}
          </h1>

          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            {t('aboutDesc')}
          </p>

        </div>
      </section>


      {/* =====================================================
          STORY
      ===================================================== */}
      <section className="py-7 sm:py-9 lg:py-11 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9 lg:gap-12 items-center">

            {/* Content */}
            <div className="order-2 lg:order-1">

              <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
                OUR STORY
              </span>

              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl leading-tight font-bold font-serif-brand text-[#2D2424] dark:text-[#EFE6DA]">
                Tradition with a meaningful modern approach
              </h2>

              <div className="mt-3 sm:mt-4 space-y-2.5">

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-6">
                  Kongu Nila Matrimony is built around a simple belief:
                  meaningful relationships begin with understanding,
                  respect and shared family values.
                </p>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-6">
                  We celebrate the heritage of Kongu Nadu while embracing
                  the needs and aspirations of today's families.
                </p>

              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="
                  mt-5
                  inline-flex
                  w-full
                  sm:w-auto
                  min-h-10
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#7A1C2E]
                  px-5
                  py-2.5
                  text-xs
                  sm:text-sm
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-[#5C1020]
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                Contact Us

                <ArrowRight
                  className="w-3.5 h-3.5 shrink-0"
                  aria-hidden="true"
                />
              </Link>

            </div>


            {/* Image */}
            <div className="order-1 lg:order-2">

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-amber-400/40 bg-stone-100 dark:bg-[#1A0F12] shadow-md">

                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                  alt="Traditional wedding celebration"
                  loading="lazy"
                  className="
                    w-full
                    h-[210px]
                    sm:h-[280px]
                    lg:h-[340px]
                    object-cover
                  "
                />

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="py-7 sm:py-9 lg:py-11 bg-white dark:bg-[#160B0E]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

            <InfoCard
              icon={Heart}
              title="Our Mission"
              text="To create a respectful and family-friendly space where meaningful relationships can begin with trust and understanding."
            />

            <InfoCard
              icon={Compass}
              title="Our Vision"
              text="To preserve cultural values while offering a simple, thoughtful and welcoming modern experience."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="py-7 sm:py-9 lg:py-11 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <div className="max-w-xl mx-auto text-center mb-6 sm:mb-8">

            <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
              WHAT WE BELIEVE IN
            </span>

            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold font-serif-brand text-[#2D2424] dark:text-[#EFE6DA]">
              Our Values
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
              The principles that guide how we help individuals and families
              begin their matrimonial journey.
            </p>

          </div>


          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            <InfoCard
              icon={Leaf}
              title="Kongu Heritage"
              text="Inspired by the culture and heritage of Kongu Nadu."
            />

            <InfoCard
              icon={Users}
              title="Family"
              text="We understand the importance of family values."
            />

            <InfoCard
              icon={ShieldCheck}
              title="Trust"
              text="We believe in honest and respectful communication."
            />

            <InfoCard
              icon={Sparkles}
              title="Respect"
              text="Every relationship should begin with dignity and understanding."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-8 sm:py-10 bg-gradient-to-r from-[#7A1C2E] to-[#3B0712] text-white">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-xl sm:text-2xl lg:text-3xl leading-tight font-bold font-serif-brand text-amber-100">
            Begin Your Journey With Us
          </h2>

          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            Discover meaningful connections built around trust,
            compatibility, culture and family values.
          </p>


          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">

            <Link
              to="/"
              className="
                inline-flex
                w-full
                sm:w-auto
                min-h-10
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-amber-400
                px-5
                py-2.5
                text-xs
                sm:text-sm
                font-bold
                text-[#3B0712]
                shadow-sm
                transition
                hover:bg-amber-300
                active:scale-[0.98]
              "
            >
              Find Your Match

              <ArrowRight
                className="w-3.5 h-3.5 shrink-0"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                w-full
                sm:w-auto
                min-h-10
                items-center
                justify-center
                rounded-lg
                border
                border-amber-300/50
                px-5
                py-2.5
                text-xs
                sm:text-sm
                font-bold
                text-white
                transition
                hover:bg-white/10
                active:scale-[0.98]
              "
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};


/* =========================================================
   INFO CARD
========================================================= */

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  text,
}) => {
  return (
    <article
      className="
        group
        h-full
        rounded-xl
        sm:rounded-2xl
        border
        border-stone-200
        dark:border-amber-500/20
        bg-white
        dark:bg-[#1A0F12]
        p-4
        sm:p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      <div className="flex items-start gap-3">

        {/* Icon */}
        <div
          className="
            shrink-0
            w-10
            h-10
            sm:w-11
            sm:h-11
            rounded-xl
            bg-amber-100
            dark:bg-amber-950/40
            text-amber-700
            dark:text-amber-300
            flex
            items-center
            justify-center
          "
        >
          <Icon
            className="w-5 h-5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>


        {/* Content */}
        <div className="min-w-0">

          <h3 className="text-base sm:text-lg font-bold font-serif-brand text-[#2D2424] dark:text-[#EFE6DA] leading-tight">
            {title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-5 sm:leading-6">
            {text}
          </p>

        </div>

      </div>

    </article>
  );
};

export default About;