import React from 'react';
import {
  ShieldCheck,
  Heart,
  Users,
  Sparkles,
  HandHeart,
  Leaf,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Reason {
  icon: LucideIcon;
  title: string;
  text: string;
}

const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: ShieldCheck,
      title: 'Trust & Transparency',
      text: 'We believe relationships should begin with honest and clear communication.',
    },
    {
      icon: Heart,
      title: 'Family Values',
      text: 'Families remain an important part of the matrimonial journey.',
    },
    {
      icon: Leaf,
      title: 'Kongu Heritage',
      text: 'Our approach respects the culture and traditions of Kongu Nadu.',
    },
    {
      icon: Users,
      title: 'Family Friendly',
      text: 'Our website and information are designed to be simple and comfortable for families.',
    },
    {
      icon: HandHeart,
      title: 'Respect',
      text: 'Every individual and family deserves dignity and respectful communication.',
    },
    {
      icon: Sparkles,
      title: 'Simple Experience',
      text: 'We keep the experience focused on what really matters.',
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">

          <div className="text-center">

            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/30 text-[9px] font-bold tracking-[0.16em] text-amber-200">
              KONGU NILA MATRIMONY
            </span>

            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
              Why Choose Us
            </h1>

            <p className="mt-2 max-w-lg mx-auto text-xs sm:text-sm text-amber-100/75 leading-5">
              A thoughtful approach shaped by culture, family values,
              trust and respect.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-white dark:bg-[#160B0E]">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

          <div className="text-center">

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#7A1C2E] dark:text-amber-400">
              WHY KONGU NILA
            </span>

            <h2 className="mt-1.5 text-lg sm:text-xl lg:text-2xl font-bold font-serif-brand text-stone-900 dark:text-amber-100">
              Built Around What Matters
            </h2>

            <p className="mt-2 max-w-lg mx-auto text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-5">
              We believe a matrimonial journey should be comfortable,
              respectful and meaningful for individuals and families.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          REASONS
      ===================================================== */}
      <section className="py-6 sm:py-8 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {reasons.map((reason, index) => {

              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="
                    group
                    relative
                    p-3.5
                    sm:p-4
                    rounded-xl
                    bg-white
                    dark:bg-[#1A0F12]
                    border
                    border-stone-200
                    dark:border-amber-500/20
                    shadow-sm
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >

                  {/* Number */}
                  <span className="absolute top-3 right-3 text-[8px] font-bold text-stone-300 dark:text-stone-700">
                    0{index + 1}
                  </span>


                  {/* Icon */}
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 flex items-center justify-center">

                    <Icon
                      className="w-4.5 h-4.5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </div>


                  {/* Title */}
                  <h2 className="mt-3 pr-6 text-sm sm:text-base font-bold font-serif-brand text-stone-900 dark:text-amber-100 leading-snug">
                    {reason.title}
                  </h2>


                  {/* Description */}
                  <p className="mt-1.5 text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 leading-5">
                    {reason.text}
                  </p>


                  {/* Indicator */}
                  <div className="mt-2.5 flex items-center gap-1 text-[9px] font-semibold text-[#7A1C2E] dark:text-amber-400">

                    <CheckCircle2
                      className="w-3 h-3"
                      aria-hidden="true"
                    />

                    <span>Family-focused</span>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="bg-white dark:bg-[#160B0E] py-5 sm:py-6">

        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">

            <ValueItem
              icon={Heart}
              title="Understanding"
            />

            <ValueItem
              icon={ShieldCheck}
              title="Trust"
            />

            <ValueItem
              icon={Users}
              title="Family"
            />

            <ValueItem
              icon={HandHeart}
              title="Respect"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#3B0712] text-white">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-7 sm:py-9">

          <div className="text-center">

            <Heart
              className="mx-auto w-6 h-6 text-amber-300"
              fill="currentColor"
              aria-hidden="true"
            />

            <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold font-serif-brand text-amber-100">
              Meaningful Over Complicated
            </h2>

            <p className="mt-2 max-w-lg mx-auto text-xs sm:text-sm text-amber-100/75 leading-5">
              We focus on understanding, respect, communication and
              family comfort.
            </p>


            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1.5
                  w-full
                  sm:w-auto
                  min-h-9
                  px-4
                  py-2
                  rounded-lg
                  bg-[#7A1C2E]
                  text-white
                  border
                  border-[#9B3A4D]
                  font-bold
                  text-xs
                  shadow-sm
                  hover:bg-[#5C1020]
                  hover:border-[#7A1C2E]
                  transition
                "
              >
                Contact Us

                <ArrowRight
                  className="w-3 h-3"
                  aria-hidden="true"
                />
              </Link>


              <Link
                to="/how-it-works"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  sm:w-auto
                  min-h-9
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-amber-300/40
                  text-white
                  font-bold
                  text-xs
                  hover:bg-white/10
                  transition
                "
              >
                How It Works
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   VALUE ITEM
========================================================= */

interface ValueItemProps {
  icon: LucideIcon;
  title: string;
}

const ValueItem: React.FC<ValueItemProps> = ({
  icon: Icon,
  title,
}) => {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-1.5
        p-2
        sm:p-2.5
        rounded-lg
        border
        border-stone-200
        dark:border-amber-500/20
        bg-[#FAF7F2]
        dark:bg-[#1A0F12]
      "
    >

      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">

        <Icon
          className="w-3.5 h-3.5"
          strokeWidth={1.8}
          aria-hidden="true"
        />

      </div>

      <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 dark:text-amber-100">
        {title}
      </span>

    </div>
  );
};

export default WhyChooseUs;