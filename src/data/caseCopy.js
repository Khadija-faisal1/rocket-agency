const web = (c, b) => ({
  overview: [
    `We partnered with ${c}, ${b.about}, to design and build a website made to ${b.goal}. The project began with a close look at how visitors actually move through the product story, and every page was shaped around that behaviour. The result is a ${b.look} experience that is fast, accessible and built to convert.`,
    `The new site delivers ${b.win}, and gives ${c} a foundation that is easy to extend as the business grows.`,
  ],
  story: [
    [
      'Research',
      'Research & Strategy',
      [
        `Before opening a design file, we spent time with ${c}'s team, customers and competitors to understand what visitors need to see, and in what order. Interviews, analytics reviews and a competitor audit helped us map the gap between the existing experience and the goal: to ${b.goal}.`,
        `From that research we built a clear page structure and message hierarchy, so each section answers one question and leads naturally to the next.`,
        `The outcome was a focused strategy that kept every later decision tied to a measurable purpose.`,
      ],
      'Insight-led',
    ],
    [
      'Design',
      'Design System',
      [
        `We created a ${b.look} visual language for ${c}, covering typography, colour, spacing, iconography and motion. Each element was designed as a reusable component so the whole site feels cohesive from the hero to the footer.`,
        `Layouts were tested at every breakpoint, with careful attention to contrast, readability and touch targets, so the experience stays sharp on phones, tablets and large screens alike.`,
        `The finished system gives the ${c} team a library they can use to launch new pages without losing consistency.`,
      ],
      'Consistent',
    ],
    [
      'Build',
      'Build & Launch',
      [
        `The site was built with clean, component-based code, optimised images and lazy-loaded assets, giving ${c} fast load times and smooth interactions without sacrificing visual richness.`,
        `We tuned performance and accessibility throughout, from keyboard navigation to semantic markup, and ran a full round of cross-browser testing before release.`,
        `Launch day went live without surprises, leaving ${c} with a dependable site that delivers ${b.win}.`,
      ],
      'Fast',
    ],
  ],
})

const threeD = (c, b) => ({
  overview: [
    `For ${c}, ${b.about}, we created a cinematic 3D piece designed to ${b.goal}. The film combines detailed modelling, expressive lighting and carefully timed motion to build a world that feels ${b.look} and instantly recognisable.`,
    `The result is a high-end animated experience that pairs premium 3D execution with the personality of the brand, ready for ${b.win}.`,
  ],
  story: [
    [
      'Concept',
      'Concept & Script',
      [
        `We started with the story. Working closely with the ${c} team, we shaped the idea, wrote the script and built storyboards that set the pacing, camera angles and key moments before any modelling began. The aim was simple: to ${b.goal}.`,
        `Style frames and animatics helped everyone agree on tone early, which kept production focused and saved time later in the pipeline.`,
        `The approved concept gave us a clear creative direction that stayed consistent through every stage of production.`,
      ],
      'Story-first',
    ],
    [
      'Modelling',
      '3D Modelling & Texturing',
      [
        `Every asset was modelled and textured with care, from hero objects to small background details. Materials, reflections and surface finishes were tuned so each element feels tactile and true to the ${c} brand.`,
        `Lighting studies and look-development passes added depth and mood, producing a ${b.look} image that holds up in close-up shots as well as wide establishing frames.`,
        `The result is a rich, believable world that rewards a second viewing.`,
      ],
      'Detailed',
    ],
    [
      'Animation',
      'Motion & Final Render',
      [
        `Animation brought the scenes to life with deliberate timing, smooth camera moves and expressive movement that guides the viewer's eye. Each sequence was refined across several review rounds to get the rhythm exactly right.`,
        `Final rendering, compositing and colour grading polished the footage into a cohesive, cinematic film, delivered in the formats ${c} needed.`,
        `The finished piece is ready for ${b.win}.`,
      ],
      'Cinematic',
    ],
  ],
})

const brand = (c, b) => ({
  overview: [
    `We worked with ${c}, ${b.about}, to build a brand identity designed to ${b.goal}. Starting from strategy and moving through logo, colour and typography, we shaped a ${b.look} identity that feels authentic and easy to recognise.`,
    `The result is a complete brand system, built to deliver ${b.win}.`,
  ],
  story: [
    [
      'Strategy',
      'Brand Strategy',
      [
        `We began with workshops and market research to define what ${c} stands for, who it speaks to and how it should sound. That work produced a clear positioning, a distinct voice and a set of principles to guide every creative choice.`,
        `Audience insights and competitor mapping showed us where ${c} could stand apart, so the identity would feel fresh rather than familiar.`,
        `The strategy became the foundation that every later design decision was tested against.`,
      ],
      'Positioned',
    ],
    [
      'Identity',
      'Visual Identity',
      [
        `The visual identity brings the strategy to life through a custom logo, a ${b.look} colour palette, typography and supporting graphic elements. Each part was explored in several directions before we refined the strongest route.`,
        `We tested the identity across packaging, social, signage and digital screens to make sure it stays clear and flexible at every size.`,
        `The final system feels confident, memorable and unmistakably ${c}.`,
      ],
      'Distinctive',
    ],
    [
      'Guidelines',
      'Brand Book',
      [
        `To keep the brand consistent as it grows, we assembled a brand book covering logo usage, colour, typography, imagery, tone of voice and real-world applications, with clear dos and don'ts.`,
        `Ready-to-use templates and asset files make it easy for internal teams and partners to apply the identity correctly from day one.`,
        `With the guidelines in place, ${c} has everything needed to deliver ${b.win}.`,
      ],
      'Consistent',
    ],
  ],
})

const builders = { Web: web, '3D': threeD, Branding: brand }

export function buildCopy(category, client, brief) {
  const { overview, story } = builders[category](client, brief)
  return {
    overview: overview.join('\n\n'),
    story: story.map(([tag, title, body, light]) => [tag, title, body.join('\n\n'), light]),
  }
}