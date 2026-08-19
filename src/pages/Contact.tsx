import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Heart,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        {/* Decorative Background */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-amber-300/10" />

          <div className="absolute -bottom-24 -left-20 w-52 h-52 sm:w-72 sm:h-72 rounded-full border border-amber-300/10" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-amber-400/5 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-14 text-center">

          {/* Icon */}
          <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">

            <Heart
              className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300"
              fill="currentColor"
              aria-hidden="true"
            />

          </div>

          {/* Label */}
          <span className="inline-block mt-3 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-amber-300">
            KONGU NILA MATRIMONY
          </span>

          {/* Title */}
          <h1 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
            Contact Us
          </h1>

          {/* Description */}
          <p className="mt-2.5 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            Have a question? Our team is here to help.
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-stretch">

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7A1C2E] to-[#3B0712] p-4 sm:p-5 lg:p-6 text-white">

              {/* Decorative circles */}
              <div
                className="absolute -top-16 -right-16 w-36 h-36 rounded-full border border-amber-300/10 pointer-events-none"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-20 -left-16 w-44 h-44 rounded-full border border-amber-300/10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative">

                {/* Heading */}
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">
                  GET IN TOUCH
                </span>

                <h2 className="mt-2 text-xl sm:text-2xl font-bold font-serif-brand text-amber-100 leading-tight">
                  Let's Connect
                </h2>

                <p className="mt-2.5 max-w-lg text-xs sm:text-sm text-amber-100/70 leading-5">
                  Reach out to us for general enquiries and information
                  about Kongu Nila Matrimony.
                </p>


                {/* Contact Items */}
                <div className="mt-5 sm:mt-6 space-y-2.5">

                  <ContactItem
                    icon={Phone}
                    title="Phone"
                    value="+91 98422 12345"
                    href="tel:+919842212345"
                  />

                  <ContactItem
                    icon={Mail}
                    title="Email"
                    value="support@kongunilamatrimony.com"
                    href="mailto:support@kongunilamatrimony.com"
                  />

                  <ContactItem
                    icon={MapPin}
                    title="Location"
                    value="Coimbatore, Tamil Nadu, India"
                  />

                </div>


                {/* Call CTA */}
                <div className="mt-5 pt-4 border-t border-white/10">

                  <p className="text-[11px] sm:text-xs text-amber-100/55">
                    We are happy to hear from you.
                  </p>

                  <a
                    href="tel:+919842212345"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      mt-2
                      text-xs
                      sm:text-sm
                      font-bold
                      text-amber-300
                      hover:text-amber-200
                      transition
                    "
                  >
                    Call Us

                    <ArrowRight
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    />
                  </a>

                </div>

              </div>
            </div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}
            <div className="rounded-xl sm:rounded-2xl bg-white dark:bg-[#1A0F12] border border-stone-200 dark:border-amber-500/20 p-4 sm:p-5 lg:p-6">

              {submitted ? (

                /* =================================================
                   SUCCESS STATE
                ================================================= */
                <div className="min-h-[320px] sm:min-h-[360px] flex flex-col items-center justify-center text-center px-2">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">

                    <CheckCircle2
                      className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-500"
                      aria-hidden="true"
                    />

                  </div>

                  <h2 className="mt-4 text-xl sm:text-2xl font-bold font-serif-brand">
                    Thank You!
                  </h2>

                  <p className="mt-2 max-w-sm text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-5">
                    Your enquiry has been submitted successfully.
                    Our team will get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-5
                      w-full
                      sm:w-auto
                      min-h-10
                      px-5
                      py-2.5
                      rounded-lg
                      bg-[#7A1C2E]
                      text-white
                      text-xs
                      sm:text-sm
                      font-bold
                      hover:bg-[#5C1020]
                      transition
                      active:scale-[0.98]
                    "
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                /* =================================================
                   FORM
                ================================================= */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5 sm:space-y-4"
                >

                  {/* Form Heading */}
                  <div className="mb-1">

                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
                      SEND AN ENQUIRY
                    </span>

                    <h2 className="mt-1.5 text-xl sm:text-2xl font-bold font-serif-brand">
                      How can we help?
                    </h2>

                    <p className="mt-1.5 text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-5">
                      Fill in your details and send us your enquiry.
                    </p>

                  </div>


                  {/* Name */}
                  <FormField
                    label="Name"
                    htmlFor="name"
                  >
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      type="text"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </FormField>


                  {/* Phone */}
                  <FormField
                    label="Phone"
                    htmlFor="phone"
                  >
                    <input
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      type="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </FormField>


                  {/* Email */}
                  <FormField
                    label="Email"
                    htmlFor="email"
                  >
                    <input
                      id="email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </FormField>


                  {/* Message */}
                  <FormField
                    label="Message"
                    htmlFor="message"
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="How can we help?"
                      className={`${inputClass} min-h-[105px] resize-none`}
                    />
                  </FormField>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      w-full
                      min-h-10
                      px-5
                      py-2.5
                      rounded-lg
                      bg-[#7A1C2E]
                      text-white
                      text-xs
                      sm:text-sm
                      font-bold
                      hover:bg-[#5C1020]
                      transition-all
                      duration-200
                      active:scale-[0.99]
                    "
                  >
                    Send Message
                  </button>


                  {/* Privacy Note */}
                  <p className="text-center text-[10px] sm:text-[11px] text-stone-400 dark:text-stone-500 leading-4">
                    We respect your privacy and will only use your
                    information to respond to your enquiry.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   FORM FIELD
========================================================= */

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  children,
}) => {
  return (
    <div className="w-full">

      <label
        htmlFor={htmlFor}
        className="block text-xs sm:text-sm font-bold text-[#2D2424] dark:text-[#EFE6DA]"
      >
        {label}
      </label>

      {children}

    </div>
  );
};


/* =========================================================
   INPUT STYLE
========================================================= */

const inputClass =
  'mt-1.5 w-full min-h-10 px-3.5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#120B0D] text-xs sm:text-sm text-[#2D2424] dark:text-[#EFE6DA] placeholder:text-stone-400 dark:placeholder:text-stone-500 outline-none transition focus:border-[#7A1C2E] dark:focus:border-amber-400 focus:ring-2 focus:ring-[#7A1C2E]/10 dark:focus:ring-amber-400/10';


/* =========================================================
   CONTACT ITEM
========================================================= */

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  value,
  href,
}) => {

  const content = (
    <div className="flex items-center gap-2.5 sm:gap-3">

      <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center">

        <Icon
          className="w-4 h-4 sm:w-4.5 sm:h-4.5"
          strokeWidth={1.8}
          aria-hidden="true"
        />

      </div>

      <div className="min-w-0">

        <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-amber-200/55">
          {title}
        </p>

        <p className="mt-0.5 text-xs sm:text-sm break-words text-amber-50">
          {value}
        </p>

      </div>

    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="
          block
          rounded-xl
          border
          border-amber-300/10
          bg-white/5
          p-2.5
          sm:p-3
          hover:bg-white/10
          transition
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-xl border border-amber-300/10 bg-white/5 p-2.5 sm:p-3">
      {content}
    </div>
  );
};

export default Contact;