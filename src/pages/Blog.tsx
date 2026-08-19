import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

import { blogs } from '../data/blogs';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] =
    useState<BlogPost | null>(null);

  /* =====================================================
     ARTICLE DETAIL VIEW
  ===================================================== */

  if (selectedArticle) {
    return (
      <main className="min-h-screen w-full overflow-x-hidden">

        {/* =================================================
            ARTICLE HERO
        ================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#7A1C2E] to-[#3B0712] text-white">

          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            aria-hidden="true"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full border border-amber-300/30" />

            <div className="absolute -bottom-24 -left-20 w-56 h-56 rounded-full border border-amber-300/20" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-9 sm:py-11 lg:py-14">

            {/* Back Button */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="
                inline-flex
                min-h-9
                items-center
                gap-1.5
                rounded-lg
                border
                border-amber-300/30
                bg-white/5
                px-3.5
                py-2
                text-xs
                sm:text-sm
                font-semibold
                text-amber-100
                transition
                hover:bg-white/10
                active:scale-[0.98]
              "
            >
              <ArrowLeft
                className="w-3.5 h-3.5"
                aria-hidden="true"
              />

              Back to Blog
            </button>


            {/* Article Heading */}
            <div className="mt-5 sm:mt-6">

              <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-300">
                {selectedArticle.category}
              </span>

              <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
                {selectedArticle.title}
              </h1>

              {selectedArticle.titleTa && (
                <p className="mt-2 text-sm sm:text-base text-amber-100/70 font-tamil leading-6">
                  {selectedArticle.titleTa}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] sm:text-xs text-amber-100/70">

                <span className="inline-flex items-center gap-1.5">
                  <Calendar
                    className="w-3.5 h-3.5 text-amber-300"
                    aria-hidden="true"
                  />

                  {selectedArticle.publishedDate}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Clock
                    className="w-3.5 h-3.5 text-amber-300"
                    aria-hidden="true"
                  />

                  {selectedArticle.readTime}
                </span>

              </div>

            </div>

          </div>
        </section>


        {/* =================================================
            ARTICLE CONTENT
        ================================================= */}
        <article className="bg-[#FAF7F2] dark:bg-[#10080A]">

          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-7 sm:py-9 lg:py-11">

            {/* Cover Image */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-stone-200 dark:border-amber-500/20 shadow-sm">

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                loading="lazy"
                className="
                  w-full
                  h-[200px]
                  sm:h-[300px]
                  lg:h-[400px]
                  object-cover
                "
              />

            </div>


            {/* Summary */}
            <div className="mt-5 sm:mt-6 rounded-xl border-l-3 border-[#D4AF37] bg-white dark:bg-[#1A0F12] p-4 sm:p-5 shadow-sm">

              <p className="text-sm sm:text-base font-serif-brand text-[#2D2424] dark:text-[#EFE6DA] leading-6 sm:leading-7">
                {selectedArticle.summary}
              </p>

            </div>


            {/* Tags */}
            {selectedArticle.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">

                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      bg-amber-100
                      dark:bg-amber-950/40
                      px-2.5
                      py-1
                      text-[10px]
                      font-semibold
                      text-amber-800
                      dark:text-amber-300
                    "
                  >
                    #{tag}
                  </span>
                ))}

              </div>
            )}


            {/* Content */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">

              {selectedArticle.content
                .trim()
                .split('\n')
                .filter((paragraph) => paragraph.trim())
                .map((paragraph, index) => {

                  const content = paragraph.trim();

                  if (content.startsWith('###')) {
                    return (
                      <h2
                        key={`${selectedArticle.id}-heading-${index}`}
                        className="
                          pt-3
                          text-xl
                          sm:text-2xl
                          font-bold
                          font-serif-brand
                          text-[#2D2424]
                          dark:text-[#EFE6DA]
                          leading-tight
                        "
                      >
                        {content.replace(/^###\s*/, '')}
                      </h2>
                    );
                  }

                  return (
                    <p
                      key={`${selectedArticle.id}-paragraph-${index}`}
                      className="
                        text-sm
                        sm:text-base
                        text-stone-600
                        dark:text-stone-300
                        leading-6
                        sm:leading-7
                      "
                    >
                      {content}
                    </p>
                  );
                })}

            </div>


            {/* Bottom Back Button */}
            <div className="mt-7 sm:mt-9 pt-6 border-t border-stone-200 dark:border-amber-500/20">

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="
                  inline-flex
                  min-h-9
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  bg-[#7A1C2E]
                  px-4
                  py-2
                  text-xs
                  sm:text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-[#5C1020]
                  active:scale-[0.98]
                "
              >
                <ArrowLeft
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                />

                Back to Articles
              </button>

            </div>

          </div>

        </article>

      </main>
    );
  }


  /* =====================================================
     BLOG LIST VIEW
  ===================================================== */

  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* =================================================
          HERO
      ================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#7A1C2E] to-[#3B0712] text-white">

        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          aria-hidden="true"
        >
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full border border-amber-300/30" />

          <div className="absolute -bottom-20 -right-16 w-56 h-56 rounded-full border border-amber-300/20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-9 sm:py-11 lg:py-13 text-center">

          <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-amber-300">

            <BookOpen
              className="w-3.5 h-3.5"
              aria-hidden="true"
            />

            KONGU NILA GUIDES

          </span>

          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-brand leading-tight text-amber-100">
            Blog & Articles
          </h1>

          <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-amber-100/75 leading-6">
            Thoughts on marriage, family values, relationships
            and Kongu traditions.
          </p>

        </div>

      </section>


      {/* =================================================
          BLOG GRID
      ================================================= */}
      <section className="py-7 sm:py-9 lg:py-11 bg-[#FAF7F2] dark:bg-[#10080A]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {blogs.length === 0 ? (

            <div className="py-12 text-center">

              <BookOpen className="mx-auto w-10 h-10 text-stone-400" />

              <h2 className="mt-3 text-lg font-bold">
                No articles available
              </h2>

              <p className="mt-1.5 text-xs sm:text-sm text-stone-500">
                Please check back later for new articles.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

              {blogs.map((blog) => (

                <article
                  key={blog.id}
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
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >

                  {/* Image */}
                  <div className="relative overflow-hidden">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="
                        w-full
                        h-44
                        sm:h-48
                        lg:h-44
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

                    <span className="
                      absolute
                      left-3
                      top-3
                      rounded-full
                      bg-white/95
                      dark:bg-[#1A0F12]/95
                      px-2.5
                      py-1
                      text-[9px]
                      sm:text-[10px]
                      font-bold
                      text-[#7A1C2E]
                      dark:text-amber-300
                      shadow-sm
                    ">
                      {blog.category}
                    </span>

                  </div>


                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400">

                      <span className="inline-flex items-center gap-1">

                        <Calendar
                          className="w-3 h-3"
                          aria-hidden="true"
                        />

                        {blog.publishedDate}

                      </span>

                      <span
                        aria-hidden="true"
                        className="text-stone-300 dark:text-stone-600"
                      >
                        •
                      </span>

                      <span className="inline-flex items-center gap-1">

                        <Clock
                          className="w-3 h-3"
                          aria-hidden="true"
                        />

                        {blog.readTime}

                      </span>

                    </div>


                    {/* Title */}
                    <h2 className="
                      mt-3
                      text-lg
                      sm:text-xl
                      font-bold
                      font-serif-brand
                      leading-tight
                      text-[#2D2424]
                      dark:text-[#EFE6DA]
                    ">
                      {blog.title}
                    </h2>


                    {/* Tamil title */}
                    {blog.titleTa && (
                      <p className="mt-1.5 text-xs sm:text-sm font-tamil text-[#7A1C2E] dark:text-amber-300 leading-5">
                        {blog.titleTa}
                      </p>
                    )}


                    {/* Summary */}
                    <p className="
                      mt-2.5
                      text-xs
                      sm:text-sm
                      text-stone-600
                      dark:text-stone-400
                      leading-5
                      sm:leading-6
                    ">
                      {blog.summary}
                    </p>


                    {/* Read More */}
                    <div className="mt-auto pt-4">

                      <button
                        type="button"
                        onClick={() => setSelectedArticle(blog)}
                        className="
                          inline-flex
                          min-h-9
                          w-full
                          sm:w-auto
                          items-center
                          justify-center
                          gap-1.5
                          rounded-lg
                          bg-[#7A1C2E]/5
                          dark:bg-amber-400/10
                          px-4
                          py-2
                          text-xs
                          sm:text-sm
                          font-bold
                          text-[#7A1C2E]
                          dark:text-amber-400
                          transition
                          hover:bg-[#7A1C2E]
                          hover:text-white
                          dark:hover:bg-amber-400
                          dark:hover:text-[#3B0712]
                        "
                      >
                        Read More

                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />

                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
};

export default Blog;