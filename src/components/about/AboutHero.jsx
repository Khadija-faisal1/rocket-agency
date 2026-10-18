import Tag from "../ui/Tag";
import Media from "../ui/Media";
import Sphere from "../ui/Sphere";
import { hero, collage as c } from "../../data/about";

function Tile({ t, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Media
        src={t.src}
        alt={t.alt}
        gradient={t.gradient}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidde px-4 pb-24 pt-32 text-center md:px-10 z-0"
      style={{
        background:
          "linear-gradient(180deg,#b7cff6 0%,#d6e4fb 38%,#f3f7ff 78%)",
      }}
    >
      <div
        aria-hidden="true"
        className="rays pointer-events-none absolute inset-0 opacity-80"
      />

      <div className="relative">
        <Tag>{hero.tag}</Tag>
        <h1 className="mt-8 font-display text-3xl font-medium uppercase leading-tight text-navy md:text-4xl">
          {hero.title}
          <br />
          <span className="text-[#ee4a8f]">{hero.accent}</span>
        </h1>

        <div className="relative mx-auto mt-12 aspect-[4/3] max-w-[860px] overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(80,110,200,.4)] md:aspect-[625/300]">
          <div className="absolute inset-0 flex flex-col">
            <img src="/images/about/hero.png" alt="" />
            <div className="grid flex-1 grid-cols-[34fr_21.5fr_22.5fr_22fr] grid-rows-7">
              <Tile t={c.car} className="col-start-1 row-start-1 row-span-4" />
              <Tile t={c.ui} className="col-start-2 row-start-1 row-span-7" />
              <Tile t={c.city} className="col-start-3 row-start-1 row-span-7" />
              <Tile
                t={c.berry}
                className="col-start-4 row-start-1 row-span-3"
              />
              <div className="col-start-1 row-start-5 row-span-3 flex">
                {c.minis.map((m, i) => (
                  <Tile key={i} t={m} className="flex-1" />
                ))}
              </div>
              <Tile
                t={c.bread}
                className="col-start-4 row-start-4 row-span-4"
              />
            </div>
          </div>

          <dl className="glass absolute inset-x-3 bottom-3 grid grid-cols-3 rounded-2xl px-4 py-3 text-center">
            {hero.stats.map(([n, l]) => (
              <div key={l}>
                <dt className="text-base font-medium text-ink md:text-lg">
                  {n}
                </dt>
                <dd className="text-[11px] text-muted md:text-xs">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
