import React from 'react';

const Terms: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">

          <div className="text-center">

            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/30 text-amber-200 text-[9px] sm:text-[10px] font-bold tracking-[0.16em]">
              LEGAL INFORMATION
            </span>

            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
              Terms &amp; Conditions
            </h1>

            <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-5">
              Basic terms for using the Kongu Nila Matrimony website.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TERMS CONTENT
      ====================================================== */}
      <section className="py-6 sm:py-8 lg:py-10 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="bg-white dark:bg-[#1A0F12] rounded-xl sm:rounded-2xl border border-stone-200 dark:border-amber-500/20 shadow-sm p-4 sm:p-6 lg:p-7">

            {/* Updated date */}
            <div className="pb-3 border-b border-stone-200 dark:border-stone-800">

              <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-500">
                Last updated: August 2026
              </p>

            </div>


            {/* Sections */}
            <div className="divide-y divide-stone-100 dark:divide-stone-800">

              <LegalSection
                title="1. Website Usage"
                text="By using this website, you agree to use it only for lawful and respectful purposes."
              />

              <LegalSection
                title="2. Information Accuracy"
                text="When submitting information through the contact form, you should provide information that is accurate to the best of your knowledge."
              />

              <LegalSection
                title="3. Respectful Communication"
                text="Users should not use the website to send abusive, misleading, fraudulent or inappropriate messages."
              />

              <LegalSection
                title="4. Intellectual Property"
                text="The website design, branding, text, graphics and original content belong to Kongu Nila Matrimony or their respective owners and should not be reproduced without permission."
              />

              <LegalSection
                title="5. External Services"
                text="The website may contain links or integrations with third-party services. Kongu Nila Matrimony is not responsible for the policies or availability of external services."
              />

              <LegalSection
                title="6. Website Availability"
                text="We aim to keep the website available and accurate, but continuous or uninterrupted availability cannot be guaranteed."
              />

              <LegalSection
                title="7. Changes to These Terms"
                text="These Terms & Conditions may be updated when necessary. Continued use of the website after an update indicates acceptance of the revised terms."
              />

              <LegalSection
                title="8. Contact"
                text="For questions regarding these Terms & Conditions, please contact us through the Contact Us page."
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   LEGAL SECTION
========================================================= */

interface LegalSectionProps {
  title: string;
  text: string;
}

const LegalSection: React.FC<LegalSectionProps> = ({
  title,
  text,
}) => {
  return (
    <section className="py-4 sm:py-5 first:pt-0 last:pb-0">

      <h2 className="text-base sm:text-lg font-bold font-serif-brand leading-snug text-[#7A1C2E] dark:text-amber-300">
        {title}
      </h2>

      <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
        {text}
      </p>

    </section>
  );
};

export default Terms;