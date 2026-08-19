import React from 'react';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { stories } from '../data/stories';
import { blogs } from '../data/blogs';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        <div
          className="absolute inset-0 opacity-10 bg-kolam-pattern pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-14 lg:py-18">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* HERO CONTENT */}
            <div className="text-center lg:text-left">

              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/30 text-amber-200 text-[9px] sm:text-[10px] font-bold tracking-[0.14em]">
                KONGU HERITAGE • FAMILY VALUES
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-brand leading-[1.15] text-amber-100">
                {t('heroTitle')}
              </h1>

              <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-amber-100/80 leading-6 sm:leading-7">
                {t('heroDesc')}
              </p>


              {/* HERO BUTTONS */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5">

                <Link
                  to="/contact"
                  className="
                    w-full sm:w-auto
                    min-w-[140px]
                    h-10
                    px-5
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-amber-400
                    text-[#3B0712]
                    text-sm
                    font-bold
                    shadow-sm
                    hover:bg-amber-300
                    active:scale-[0.98]
                    transition
                  "
                >
                  <span>{t('navContact')}</span>

                  <ArrowRight
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  />
                </Link>


                <Link
                  to="/about"
                  className="
                    w-full sm:w-auto
                    min-w-[120px]
                    h-10
                    px-5
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-amber-200/30
                    bg-white/5
                    text-white
                    text-sm
                    font-semibold
                    hover:bg-white/10
                    active:scale-[0.98]
                    transition
                  "
                >
                  {t('navAbout')}
                </Link>

              </div>

            </div>


            {/* HERO VISUAL */}
            <div className="flex justify-center w-full">

              <div
                className="
                  relative
                  w-full
                  max-w-[300px]
                  sm:max-w-sm
                  h-[230px]
                  sm:h-[280px]
                  rounded-2xl
                  border
                  border-amber-400/30
                  bg-gradient-to-br
                  from-amber-400/15
                  to-white/5
                  backdrop-blur-md
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-xl
                  px-4
                "
              >

                <div className="text-amber-300 text-2xl sm:text-3xl mb-2">
                  ✦
                </div>

                <span className="text-amber-200/80 tracking-[0.2em] text-[9px] sm:text-[10px]">
                  TRADITION
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif-brand font-bold text-amber-100 my-1.5">
                  Family
                </h2>

                <span className="text-amber-200/80 tracking-[0.2em] text-[9px] sm:text-[10px]">
                  TRUST
                </span>

                <div className="mt-4 w-12 h-12 rounded-full border border-amber-400/60 bg-[#7A1C2E] flex items-center justify-center">

                  <Heart
                    className="w-5 h-5 text-amber-300"
                    fill="currentColor"
                    aria-hidden="true"
                  />

                </div>

                <p className="mt-3 text-[9px] sm:text-[10px] text-amber-200/70 font-tamil text-center">
                  பாரம்பரியம் • குடும்பம் • நம்பிக்கை
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section className="py-9 sm:py-14 lg:py-16 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-10 lg:gap-12 items-center">

            <div className="w-full overflow-hidden rounded-2xl border border-amber-400/30 shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                alt="Traditional wedding"
                loading="lazy"
                className="w-full h-[220px] sm:h-[300px] lg:h-[340px] object-cover"
              />

            </div>


            <div className="text-center lg:text-left">

              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
                KONGU NILA MATRIMONY
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-serif-brand text-stone-900 dark:text-amber-100">
                {t('navAbout')}
              </h2>

              <p className="mt-4 text-sm text-stone-600 dark:text-stone-300 leading-6">
                {t('brandSubtitle')}
              </p>

              <Link
                to="/about"
                className="
                  mt-5
                  w-full sm:w-auto
                  min-w-[120px]
                  h-10
                  px-5
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#7A1C2E]/20
                  dark:border-amber-400/20
                  text-[#7A1C2E]
                  dark:text-amber-400
                  text-sm
                  font-bold
                  hover:bg-[#7A1C2E]/5
                  dark:hover:bg-amber-400/5
                  transition
                "
              >
                {t('navAbout')}

                <ArrowRight
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="py-9 sm:py-14 lg:py-16 bg-white dark:bg-[#160B0E]">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-6 sm:mb-9">

            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
              KONGU NILA
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-serif-brand">
              {t('navWhyChooseUs')}
            </h2>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            <ValueCard
              icon={ShieldCheck}
              title="Verified Profiles"
              text="Profiles can be reviewed with trust, safety and verification in mind."
            />

            <ValueCard
              icon={Users}
              title="Kongu Heritage"
              text="A matrimonial experience designed around Kongu culture, family traditions and values."
            />

            <ValueCard
              icon={Sparkles}
              title="Privacy First"
              text="Respectful privacy controls help families and individuals share information comfortably."
            />

            <ValueCard
              icon={Heart}
              title="Meaningful Matching"
              text="Focus on compatibility, mutual understanding, lifestyle and family expectations."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="py-9 sm:py-14 lg:py-16 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">

            <div className="min-w-0">

              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
                SIMPLE PROCESS
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-serif-brand">
                {t('navHowItWorks')}
              </h2>

            </div>

            <Link
              to="/how-it-works"
              className="
                self-start
                inline-flex
                items-center
                gap-1
                h-9
                px-3
                rounded-lg
                text-xs sm:text-sm
                font-bold
                text-[#7A1C2E]
                dark:text-amber-400
                border
                border-[#7A1C2E]/15
                dark:border-amber-400/15
                hover:bg-[#7A1C2E]/5
                dark:hover:bg-amber-400/5
                transition
              "
            >
              <span>View Process</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            <Step
              number="01"
              title="Understand"
              text="Understand our values and matrimonial approach."
            />

            <Step
              number="02"
              title="Explore"
              text="Explore our guides, stories and cultural information."
            />

            <Step
              number="03"
              title="Connect"
              text="Reach out to our team with your questions."
            />

            <Step
              number="04"
              title="Begin"
              text="Take the next step with confidence and understanding."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          SUCCESS STORIES
      ===================================================== */}
      <section className="py-9 sm:py-14 lg:py-16 bg-white dark:bg-[#160B0E]">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title={t('navStories')}
            link="/success-stories"
            viewAllText={t('navStories')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

            {stories.slice(0, 3).map((story) => (

              <article
                key={story.id}
                className="
                  h-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-stone-200
                  dark:border-amber-500/20
                  bg-white
                  dark:bg-[#1A0F12]
                  shadow-sm
                "
              >

                <img
                  src={story.image}
                  alt={story.coupleNames}
                  loading="lazy"
                  className="w-full h-48 sm:h-52 object-cover"
                />

                <div className="p-4 sm:p-5">

                  <p className="text-[10px] sm:text-xs text-amber-600">
                    {story.location}
                  </p>

                  <h3 className="mt-1.5 text-lg sm:text-xl font-bold font-serif-brand">
                    {story.coupleNames}
                  </h3>

                  <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-6 line-clamp-3">
                    {story.story}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          BLOG
      ===================================================== */}
      <section className="py-9 sm:py-14 lg:py-16 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title={t('navBlog')}
            link="/blog"
            viewAllText={t('navBlog')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

            {blogs.slice(0, 3).map((blog) => (

              <article
                key={blog.id}
                className="
                  h-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-stone-200
                  dark:border-amber-500/20
                  bg-white
                  dark:bg-[#1A0F12]
                "
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-44 sm:h-48 object-cover"
                />

                <div className="p-4 sm:p-5">

                  <span className="text-[10px] sm:text-xs font-bold text-amber-600">
                    {blog.category}
                  </span>

                  <h3 className="mt-1.5 text-lg sm:text-xl font-bold font-serif-brand leading-6">
                    {blog.title}
                  </h3>

                  <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-6 line-clamp-3">
                    {blog.summary}
                  </p>

                  <Link
                    to="/blog"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-1.5
                      mt-4
                      h-9
                      px-3
                      rounded-lg
                      text-xs sm:text-sm
                      font-bold
                      text-[#7A1C2E]
                      dark:text-amber-400
                      border
                      border-[#7A1C2E]/15
                      dark:border-amber-400/15
                      hover:bg-[#7A1C2E]/5
                      dark:hover:bg-amber-400/5
                      transition
                    "
                  >
                    {t('navBlog')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="py-9 sm:py-12 bg-gradient-to-br from-[#7A1C2E] to-[#3B0712] text-center text-white">

        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mx-auto w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-300/20 flex items-center justify-center">

            <Heart
              className="w-5 h-5 text-amber-300"
              fill="currentColor"
              aria-hidden="true"
            />

          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold font-serif-brand text-amber-100">
            {t('navContact')}
          </h2>

          <p className="mt-3 text-sm text-amber-100/80 leading-6 max-w-xl mx-auto">
            {t('brandSubtitle')}
          </p>


          {/* FIXED CTA BUTTON */}
          <div className="mt-5 flex justify-center">

  <Link
    to="/contact"
    className="
      inline-flex
      w-auto
      min-w-[135px]
      h-10
      px-5
      items-center
      justify-center
      gap-2
      rounded-lg
      bg-amber-400
      text-[#3B0712]
      text-sm
      font-bold
      hover:bg-amber-300
      active:scale-95
      transition-all
      duration-200
    "
  >
    <span>{t('navContact')}</span>

    <ArrowRight
      className="w-3.5 h-3.5"
      aria-hidden="true"
    />
  </Link>


          </div>

        </div>
      </section>

    </main>
  );
};


/* =========================================================
   VALUE CARD
========================================================= */

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  text,
}) => {
  return (
    <article className="
      h-full
      p-4
      sm:p-5
      rounded-xl
      sm:rounded-2xl
      border
      border-stone-200
      dark:border-amber-500/20
      bg-[#FAF7F2]
      dark:bg-[#1A0F12]
      transition
      hover:-translate-y-1
      hover:shadow-md
    ">

      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 flex items-center justify-center">

        <Icon
          className="w-4 h-4 sm:w-5 sm:h-5"
          strokeWidth={1.8}
          aria-hidden="true"
        />

      </div>

      <h3 className="mt-3 font-bold text-base">
        {title}
      </h3>

      <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-5 sm:leading-6">
        {text}
      </p>

    </article>
  );
};


/* =========================================================
   STEP
========================================================= */

interface StepProps {
  number: string;
  title: string;
  text: string;
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  text,
}) => {
  return (
    <article className="
      h-full
      p-4
      sm:p-5
      rounded-xl
      sm:rounded-2xl
      bg-white
      dark:bg-[#1A0F12]
      border
      border-stone-200
      dark:border-amber-500/20
    ">

      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#7A1C2E] text-amber-300 flex items-center justify-center font-bold text-xs">
        {number}
      </div>

      <h3 className="mt-3 font-bold text-base">
        {title}
      </h3>

      <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-5 sm:leading-6">
        {text}
      </p>

    </article>
  );
};


/* =========================================================
   SECTION HEADING
========================================================= */

interface SectionHeadingProps {
  title: string;
  link: string;
  viewAllText: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  link,
  viewAllText,
}) => {
  return (
    <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">

      <div className="min-w-0">

        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
          KONGU NILA
        </span>

        <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-serif-brand">
          {title}
        </h2>

      </div>


      <Link
        to={link}
        aria-label={`View all ${viewAllText}`}
        className="
          shrink-0
          inline-flex
          items-center
          justify-center
          gap-1
          h-8
          px-2.5
          sm:px-3
          rounded-lg
          border
          border-[#7A1C2E]/15
          dark:border-amber-400/15
          text-[11px]
          sm:text-xs
          font-bold
          text-[#7A1C2E]
          dark:text-amber-400
          hover:bg-[#7A1C2E]/5
          dark:hover:bg-amber-400/5
          transition
        "
      >

        <span className="hidden sm:inline">
          {viewAllText}
        </span>

        <span className="sm:hidden">
          View
        </span>

        <ChevronRight className="w-3.5 h-3.5" />

      </Link>

    </div>
  );
};

export default Home;