import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What is Kongu Nila Matrimony?',
      answer:
        'Kongu Nila Matrimony is a family-focused matrimonial platform inspired by Kongu heritage, culture and family values.',
    },
    {
      question: 'How does the process work?',
      answer:
        'You can explore our website, understand our approach, read our guides and stories, and contact our team to know more.',
    },
    {
      question: 'Who can contact Kongu Nila Matrimony?',
      answer:
        'Individuals and families looking to understand our matrimonial approach can contact our team.',
    },
    {
      question: 'Is my information private?',
      answer:
        'We respect privacy and recommend that sensitive information such as passwords, OTPs and financial details should never be shared.',
    },
    {
      question: 'How can I contact your team?',
      answer:
        'You can use our Contact Us page and submit your name, phone number, email and enquiry.',
    },
    {
      question: 'Where is Kongu Nila Matrimony based?',
      answer:
        'The platform is inspired by the Kongu Nadu region of Tamil Nadu.',
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#7A1C2E] to-[#3B0712] text-white">

        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute -top-16 -right-16 w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-amber-300/30" />
          <div className="absolute -bottom-20 -left-16 w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-amber-300/20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-14 text-center">

          <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-300/20 flex items-center justify-center">

            <HelpCircle
              className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300"
              aria-hidden="true"
            />

          </div>

          <span className="block mt-3 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-amber-300">
            HELP & INFORMATION
          </span>

          <h1 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
            Frequently Asked Questions
          </h1>

          <p className="mt-2.5 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            Simple answers to common questions.
          </p>

        </div>
      </section>


      {/* =====================================================
          FAQ LIST
      ===================================================== */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Section heading */}
          <div className="text-center mb-6 sm:mb-7">

            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
              COMMON QUESTIONS
            </span>

            <h2 className="mt-2 text-xl sm:text-2xl font-bold font-serif-brand text-stone-900 dark:text-amber-100">
              How can we help?
            </h2>

            <p className="mt-2 max-w-lg mx-auto text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-5">
              Find quick answers about our matrimonial service,
              privacy and how to contact our team.
            </p>

          </div>


          {/* FAQ Items */}
          <div className="space-y-2.5 sm:space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    overflow-hidden
                    rounded-xl
                    sm:rounded-2xl
                    bg-white
                    dark:bg-[#1A0F12]
                    border
                    transition-all
                    duration-200
                    ${
                      isOpen
                        ? 'border-[#7A1C2E]/40 dark:border-amber-500/40 shadow-sm'
                        : 'border-stone-200 dark:border-amber-500/20'
                    }
                  `}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      w-full
                      min-h-[54px]
                      sm:min-h-[58px]
                      flex
                      items-center
                      justify-between
                      gap-3
                      px-3.5
                      sm:px-5
                      py-3
                      text-left
                      active:bg-stone-50
                      dark:active:bg-white/5
                    "
                  >

                    <span className="flex-1 min-w-0 text-xs sm:text-sm font-bold leading-5 text-[#2D2424] dark:text-[#EFE6DA]">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        w-8
                        h-8
                        sm:w-9
                        sm:h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-200
                        ${
                          isOpen
                            ? 'bg-[#7A1C2E] text-white'
                            : 'bg-amber-50 dark:bg-amber-950/30 text-[#7A1C2E] dark:text-amber-300'
                        }
                      `}
                    >

                      <ChevronDown
                        className={`
                          w-4
                          h-4
                          transition-transform
                          duration-200
                          ${isOpen ? 'rotate-180' : ''}
                        `}
                        aria-hidden="true"
                      />

                    </span>

                  </button>


                  {/* Answer */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-3.5 sm:px-5 pb-4 sm:pb-5"
                    >

                      <div className="h-px bg-stone-100 dark:bg-amber-500/10 mb-3" />

                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>


          {/* =================================================
              CONTACT CTA
          ================================================= */}
          <div className="
            mt-7
            sm:mt-8
            rounded-xl
            sm:rounded-2xl
            bg-gradient-to-br
            from-[#7A1C2E]
            to-[#3B0712]
            px-4
            py-5
            sm:px-6
            sm:py-6
            text-center
            text-white
          ">

            <div className="mx-auto w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-400/10 border border-amber-300/20 flex items-center justify-center">

              <MessageCircle
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300"
                aria-hidden="true"
              />

            </div>

            <h2 className="mt-3 text-lg sm:text-xl font-bold font-serif-brand text-amber-100">
              Still have a question?
            </h2>

            <p className="mt-2 max-w-md mx-auto text-xs sm:text-sm text-amber-100/70 leading-5">
              Our team is happy to help you with any additional
              questions about Kongu Nila Matrimony.
            </p>

            {/* Contact Button */}
            <div className="mt-4 flex justify-center">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  min-w-[125px]
                  h-9
                  px-4
                  rounded-lg
                  bg-amber-400
                  text-[#3B0712]
                  text-xs
                  sm:text-sm
                  font-bold
                  border
                  border-amber-300/40
                  hover:bg-amber-300
                  active:scale-95
                  transition-all
                  duration-200
                "
              >
                <span>Contact Us</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default FAQ;