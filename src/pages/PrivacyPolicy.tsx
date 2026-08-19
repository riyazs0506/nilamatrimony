import React from 'react';
import {
  ShieldCheck,
  Lock,
  Database,
  AlertTriangle,
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-9 sm:py-11 lg:py-12">

          <div className="text-center">

            {/* Icon */}
            <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-300/30 flex items-center justify-center">
              <ShieldCheck
                className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300"
                aria-hidden="true"
              />
            </div>

            <span className="inline-block mt-3 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-amber-300">
              KONGU NILA MATRIMONY
            </span>

            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
              Privacy Policy
            </h1>

            <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-5">
              Your privacy and responsible information handling matter to us.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          POLICY CONTENT
      ====================================================== */}
      <section className="py-7 sm:py-9 lg:py-10 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-stone-200 dark:border-amber-500/20 bg-white dark:bg-[#1A0F12] shadow-sm">

            {/* =================================================
                POLICY HEADER
            ================================================== */}
            <div className="px-4 py-4 sm:px-5 sm:py-5 border-b border-stone-200 dark:border-amber-500/20">

              <div className="flex items-center gap-3">

                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 flex items-center justify-center">

                  <Lock
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    aria-hidden="true"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">
                    Last updated
                  </p>

                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">
                    August 2026
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                POLICY SECTIONS
            ================================================== */}
            <div className="px-4 py-5 sm:px-5 sm:py-6">

              <LegalSection
                number="1"
                title="Introduction"
                text="Kongu Nila Matrimony respects the privacy of visitors to this website. This policy explains how information submitted through the website may be handled."
              />

              <LegalSection
                number="2"
                title="Information We Collect"
                text="When you contact us, we may receive information such as your name, phone number, email address and the details you voluntarily include in your enquiry."
              />

              <LegalSection
                number="3"
                title="How We Use Information"
                text="Information submitted through the website may be used to respond to enquiries, provide requested information and improve our website experience."
              />

              <LegalSection
                number="4"
                title="Sensitive Information"
                text="Please do not submit passwords, OTPs, bank account information, payment credentials or other highly sensitive information through general contact forms."
                warning
              />

              <LegalSection
                number="5"
                title="Data Protection"
                text="We take reasonable measures to protect information submitted through the website. However, no internet transmission can be guaranteed to be completely secure."
              />

              <LegalSection
                number="6"
                title="Third-Party Services"
                text="The website may use third-party services such as hosting, analytics, maps or communication tools. Those services may have their own privacy policies."
              />

              <LegalSection
                number="7"
                title="Changes"
                text="This Privacy Policy may be updated from time to time. Updated versions will be published on this page."
              />

              <LegalSection
                number="8"
                title="Contact"
                text="If you have questions about this Privacy Policy, please contact Kongu Nila Matrimony through the Contact Us page."
                last
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRIVACY REMINDER
      ====================================================== */}
      <section className="py-7 sm:py-9 bg-white dark:bg-[#160B0E]">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

          <div className="mx-auto w-10 h-10 rounded-xl bg-[#7A1C2E]/10 dark:bg-amber-400/10 flex items-center justify-center">

            <Database
              className="w-5 h-5 text-[#7A1C2E] dark:text-amber-300"
              aria-hidden="true"
            />

          </div>

          <h2 className="mt-3 text-xl sm:text-2xl font-bold font-serif-brand">
            Your Information Matters
          </h2>

          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
            Please share only the information necessary for your enquiry
            and never share passwords, OTPs or financial credentials
            through general communication channels.
          </p>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   LEGAL SECTION
========================================================= */

interface LegalSectionProps {
  number: string;
  title: string;
  text: string;
  warning?: boolean;
  last?: boolean;
}

const LegalSection: React.FC<LegalSectionProps> = ({
  number,
  title,
  text,
  warning = false,
  last = false,
}) => {
  return (
    <section
      className={
        !last
          ? 'pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-stone-200 dark:border-stone-800'
          : ''
      }
    >

      <div className="flex items-start gap-2.5 sm:gap-3">

        {/* Number */}
        <div
          className={`
            shrink-0
            w-7
            h-7
            sm:w-8
            sm:h-8
            rounded-lg
            flex
            items-center
            justify-center
            text-[10px]
            sm:text-xs
            font-bold
            ${
              warning
                ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                : 'bg-[#7A1C2E]/10 dark:bg-amber-400/10 text-[#7A1C2E] dark:text-amber-300'
            }
          `}
        >
          {number}
        </div>


        {/* Content */}
        <div className="min-w-0 flex-1">

          <div className="flex items-center gap-1.5">

            <h2 className="text-base sm:text-lg font-bold font-serif-brand leading-tight text-[#7A1C2E] dark:text-amber-300">
              {title}
            </h2>

            {warning && (
              <AlertTriangle
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-amber-500"
                aria-label="Important information"
              />
            )}

          </div>

          <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
            {text}
          </p>

        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicy;