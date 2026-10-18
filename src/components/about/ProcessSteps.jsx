import Tag from "../ui/Tag";
import { processGroups } from "../../data/process";

const IMG = "/images/about";

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24 text-white md:px-10">
      <img
        src={`${IMG}/pink-ball.png`}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute -left-6 top-[34%] h-14 w-14 select-none object-contain"
      />
      <img
        src={`${IMG}/blue-ball.png`}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute -right-8 top-[52%] h-24 w-24 select-none object-contain"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <Tag dark className="!text-pink">
            Our process
          </Tag>
          <h2 className="mt-5 font-display text-3xl">
            <span className="font-light">12 Steps To</span>{" "}
            <span className="font-semibold">Success</span>
          </h2>
        </div>

        {processGroups.map((g) => (
          <div key={g.id} id={`process-${g.id}`} className="scroll-mt-28 pt-16">
            <div className={`flex ${g.side === "right" ? "justify-end" : ""}`}>
              <img
                src={`${IMG}/${g.id}-photoroom.png`}
                alt={g.label}
                loading="lazy"
                draggable="false"
                className="h-24 w-auto select-none object-contain drop-shadow-[0_10px_24px_rgba(238,74,143,.35)] sm:h-32 md:h-44 lg:h-52"
              />
            </div>

            <ol className="mt-2 grid gap-x-20 gap-y-16 md:grid-cols-2">
              {g.steps.map(([title, body], i) => (
                <li
                  key={title}
                  className="flex flex-col items-center text-center"
                >
                  {/* each group has 4 shapes: web-shape-1..4, 3d-shape-1..4, marketing-shape-1..4 */}
                  <img
                    src={`${IMG}/${g.id}-shape-${i + 1}.png`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                    className="h-32 w-32 select-none object-contain drop-shadow-[0_12px_30px_rgba(80,110,255,.35)] transition duration-500 hover:rotate-6 hover:scale-110 md:h-44 md:w-44"
                  />
                  <h3 className="mt-6 font-display text-2xl text-coral">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}