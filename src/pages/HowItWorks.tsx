import React from 'react';
import {
  MessageCircle,
  Search,
  Users,
  Heart,
  ArrowDown,
  type LucideIcon,
} from 'lucide-react';

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: '01',
      icon: Search,
      title: 'Understand',
      text: 'Learn about our values, approach and the Kongu heritage that guides us.',
    },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Explore',
      text: 'Explore our stories, articles, guides and information.',
    },
    {
      number: '03',
      icon: Users,
      title: 'Connect',
      text: 'Reach out to our team with your questions or requirements.',
    },
    {
      number: '04',
      icon: Heart,
      title: 'Discuss',
      text: 'Take time to understand expectations and family values.',
    },
    {
      number: '05',
      icon: Heart,
      title: 'Begin',
      text: 'Move forward when you and your family feel comfortable.',
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        <div className="absolute inset-0 opacity-10 bg-kolam-pattern pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-9 sm:py-11 lg:py-12">

          <div className="text-center">

            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/30 text-amber-200 text-[9px] sm:text-[10px] font-bold tracking-[0.16em]">
              SIMPLE PROCESS
            </span>

            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
              How It Works
            </h1>

            <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-5">
              A simple and respectful journey built around understanding,
              family values and communication.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="py-7 sm:py-9 lg:py-11 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <div className="text-center mb-6 sm:mb-8">

            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
              OUR JOURNEY
            </span>

            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold font-serif-brand text-stone-900 dark:text-amber-100">
              From Understanding to Beginning
            </h2>

            <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
              Every step gives individuals and families time to understand,
              communicate and make thoughtful decisions.
            </p>

          </div>


          {/* Timeline */}
          <div className="relative">

            {/* Timeline line */}
            <div className="hidden sm:block absolute left-[24px] top-7 bottom-7 w-px bg-amber-400/35" />

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <React.Fragment key={step.number}>

                  {/* Step */}
                  <div className="relative flex items-start gap-3 sm:gap-5">

                    {/* Number */}
                    <div className="relative z-10 shrink-0">

                      <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#7A1C2E] text-amber-300 flex items-center justify-center font-bold text-xs shadow-sm border-2 border-[#FAF7F2] dark:border-[#10080A]">
                        {step.number}
                      </div>

                    </div>


                    {/* Card */}
                    <div className="min-w-0 flex-1 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-[#1A0F12] border border-stone-200 dark:border-amber-500/20 shadow-sm hover:shadow-md transition-all duration-200">

                      {/* Icon */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 flex items-center justify-center">

                        <Icon
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                      </div>


                      {/* Title */}
                      <h2 className="mt-3 text-lg sm:text-xl font-bold font-serif-brand text-stone-900 dark:text-amber-100">
                        {step.title}
                      </h2>


                      {/* Description */}
                      <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
                        {step.text}
                      </p>

                    </div>

                  </div>


                  {/* Connector */}
                  {index !== steps.length - 1 && (
                    <div className="flex justify-center sm:justify-start sm:pl-[18px] py-2">

                      <ArrowDown
                        className="w-4 h-4 text-amber-500"
                        aria-hidden="true"
                      />

                    </div>
                  )}

                </React.Fragment>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-8 sm:py-10 bg-gradient-to-br from-[#7A1C2E] to-[#3B0712] text-white">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

          <div className="mx-auto w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-300/20 flex items-center justify-center">

            <Heart
              className="w-5 h-5 text-amber-300"
              fill="currentColor"
              aria-hidden="true"
            />

          </div>

          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold font-serif-brand text-amber-100">
            Take Your Time
          </h2>

          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            A meaningful relationship begins with understanding, respectful
            communication and confidence in your decision.
          </p>

        </div>

      </section>

    </main>
  );
};

export default HowItWorks;