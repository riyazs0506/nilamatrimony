import React from 'react';
import {
  Heart,
  MapPin,
  CalendarDays,
} from 'lucide-react';

import { stories } from '../data/stories';

const SuccessStories: React.FC = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C2E] via-[#5C1020] to-[#30050D] text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-9 sm:py-11 lg:py-12">

          <div className="text-center">

            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/30 text-amber-200 text-[9px] sm:text-[10px] font-bold tracking-[0.16em]">
              CELEBRATING TOGETHER
            </span>

            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
              Success Stories
            </h1>

            <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-5">
              Beautiful beginnings built on mutual understanding,
              respect and family values.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORIES
      ====================================================== */}
      <section className="py-7 sm:py-9 lg:py-10 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Heading */}
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">

            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A1C2E] dark:text-amber-400">
              REAL JOURNEYS
            </span>

            <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold font-serif-brand text-stone-900 dark:text-amber-100">
              Stories of New Beginnings
            </h2>

            <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
              Every relationship has its own journey. These stories celebrate
              understanding, family support and meaningful beginnings.
            </p>

          </div>


          {/* =================================================
              STORY GRID
          ================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 sm:gap-5">

            {stories.map((story) => (

              <article
                key={story.id}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-xl
                  sm:rounded-2xl
                  bg-white
                  dark:bg-[#1A0F12]
                  border
                  border-stone-200
                  dark:border-amber-500/20
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}
                <div className="relative w-full shrink-0 overflow-hidden">

                  <img
                    src={story.image}
                    alt={story.coupleNames}
                    loading="lazy"
                    className="
                      block
                      w-full
                      h-48
                      sm:h-52
                      lg:h-48
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Couple Name */}
                  <div className="absolute left-3 right-3 bottom-3">

                    <h2 className="text-lg sm:text-xl font-bold font-serif-brand text-white leading-tight drop-shadow-md">
                      {story.coupleNames}
                    </h2>

                  </div>

                </div>


                {/* =================================================
                    CARD CONTENT
                ================================================== */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">

                  {/* META */}
                  <div className="space-y-1.5">

                    {/* Wedding Date */}
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-amber-600 dark:text-amber-400">

                      <CalendarDays
                        className="w-3.5 h-3.5 shrink-0"
                        aria-hidden="true"
                      />

                      <span className="truncate">
                        {story.weddingDate}
                      </span>

                    </div>


                    {/* Location */}
                    <div className="flex items-start gap-2 text-[11px] sm:text-xs text-stone-500 dark:text-stone-400">

                      <MapPin
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />

                      <span className="leading-5">
                        {story.location}
                      </span>

                    </div>

                  </div>


                  {/* STORY */}
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-6">
                    {story.story}
                  </p>


                  {/* =================================================
                      QUOTE
                      Pushes naturally toward bottom on equal cards
                  ================================================== */}
                  <blockquote className="mt-4">

                    <div className="p-3 rounded-lg sm:rounded-xl bg-[#FAF7F2] dark:bg-[#10080A] border-l-2 border-amber-400">

                      <div className="flex items-start gap-2">

                        <Heart
                          className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#7A1C2E] dark:text-amber-300"
                          fill="currentColor"
                          aria-hidden="true"
                        />

                        <p className="text-xs italic leading-5 text-[#7A1C2E] dark:text-amber-300">
                          “{story.quote}”
                        </p>

                      </div>

                    </div>

                  </blockquote>

                </div>

              </article>

            ))}

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

          <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold font-serif-brand text-amber-100 leading-tight">
            Every Journey Begins Somewhere
          </h2>

          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            Meaningful relationships begin with understanding, trust and
            respectful communication.
          </p>

        </div>

      </section>

    </main>
  );
};

export default SuccessStories;