// Single source of truth for all homepage content.
// Used by: Hero, WhatIDo, and Stats components.

export const hero = {
  headline: 'I bridge the gap between',
  headlineAccent: 'clients and delivery.',
  subtitle:
    'Senior Client & Development Lead with 10 years experience in digital marketing. From web builds and performance marketing to account strategy and team coordination.',
  intro: [
    'I manage client accounts end-to-end at Drew+Rose, a full-service marketing agency. My clients have included Conde Nast, M&G Investments, Mayor of London, GLA and Lambeth Council.',
    'My background in full-stack web development means I can scope realistically, make informed decisions in meetings, and optimise both the build and the campaigns driving traffic to it.',
  ],
  ctas: [
    { label: 'View my work', href: '/case-studies', style: 'primary' },
    { label: 'Get in touch', href: '/contact', style: 'secondary' },
  ],
};

export const whatIDo = {
  label: 'What I Do',
  heading: 'Three pillars of digital delivery',
  pillars: [
    {
      icon: '\u{1F91D}',
      title: 'Client & Account Management',
      description:
        'I own client relationships from onboarding to ongoing delivery. Strategic planning, stakeholder communications, monthly reporting, and making sure every project aligns with what the client actually needs.',
    },
    {
      icon: '\u{2699}',
      title: 'Project & Technical Delivery',
      description:
        'With a decade of hands-on development behind me, I lead projects from scoping and specification through to launch. I coordinate teams, manage timelines, and stay close enough to the code to know when something is off track.',
    },
    {
      icon: '\u{1F4C8}',
      title: 'Performance Marketing',
      description:
        'I plan and manage paid media campaigns across Meta and Google Ads \u2014 lead generation funnels, subscription marketing, and ongoing optimisation. Strategy, setup, reporting, and everything in between.',
    },
  ],
};

export const aboutIntro = {
  heading: 'About Me',
  image: '/images/alex-headshot.jpg',
  paragraphs: [
    'I started my career as a front-end developer, spending seven years building websites in WordPress, Shopify, and Next.js. Along the way I took on more responsibility. First leading development teams, then managing client relationships, and eventually owning entire accounts end-to-end.',
    'That progression is what makes me different from a traditional account manager or project manager. I\u2019ve written the code, managed the servers, and debugged the build. So when I\u2019m in a client meeting, I can give a confident, informed answer about what\u2019s possible, what\u2019s realistic, and what\u2019s going to cause problems \u2014 without needing to go back to the dev team.',
  ],
};

export const stats = [
  { number: '104%', label: 'Over annual lead generation target for\nProperty Hub two months early.' },
  { number: '48%', label: 'CPA reduction for leads\non Property Hub (Meta)' },
  { number: '44%', label: 'YoY traffic increase\nfor Active Lambeth' },
  { number: '7 yrs', label: 'Longest client retention (M&G)' },
];
