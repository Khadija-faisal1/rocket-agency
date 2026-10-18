import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getOtherCases } from "../../data/cases";
import Media from "../ui/Media";
import Tag from "../ui/Tag";

export default function OtherProjects({
  currentSlug,
  items,
  tag = "Explore more",
  heading = "Other",
  accent = "Projects",
}) {
  const track = useRef(null);
  // Same category first, then the rest (see getOtherCases in data/cases.js)
  const list =
    items ||
    getOtherCases(currentSlug, 6).map((c) => ({
      key: c.slug,
      title: c.client,
      eyebrow: c.category,
      tags: c.services,
      src: c.images.cover,
      to: `/case/${c.slug}`,
      gradient: c.gradient,
    }));
  const scroll = (d) =>
    track.current?.scrollBy({ left: d * 320, behavior: "smooth" });

  return (
    <section
      aria-labelledby="other-title"
      className="px-6 pt-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <Tag dark className="!text-pink">
              {tag}
            </Tag>
            <h2
              id="other-title"
              className="mt-4 font-display text-3xl tracking-wide"
            >
              <span className="font-light">{heading}</span>{" "}
              <span className="font-light">{accent}</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="btn-primary grid h-9 w-9 place-items-center rounded-lg"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="btn-primary grid h-9 w-9 place-items-center rounded-lg"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="mt-8 flex snap-x gap-5 overflow-x-auto pb-6 [scrollbar-width:none]"
        >
          {list.map((p) => (
            <li
              key={p.key || p.title}
              className="w-[min(76vw,280px)] shrink-0 snap-start"
            >
              <Link
                to={p.to}
                className="glass-card group relative block aspect-[4/4.5] rounded-[22px] transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <div className="absolute inset-1.5 overflow-hidden rounded-2xl">
                  <Media
                    src={p.src}
                    alt={p.title}
                    gradient={p.gradient || "from-slate-600 to-slate-900"}
                    className="h-full w-full transition duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,.2)] backdrop-blur-xl">
                    <div className="min-w-0">
                      {p.eyebrow && (
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/65">
                          {p.eyebrow}
                        </p>
                      )}
                      <p className="truncate font-display text-[15px] font-medium">
                        {p.title}
                      </p>
                      <ul className="mt-1.5 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] text-white/75"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="ml-3 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 transition group-hover:bg-white/25">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}