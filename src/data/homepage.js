// Single source of truth for all homepage content.
// Used by: Hero, WhatIDo, and Stats components.

export const hero = {
  headline: 'I build websites and',
  headlineAccent: 'lead digital projects.',
  subtitle:
    '10 years building and delivering web projects. From writing code, to leading dev teams and co-ordinating teams across development, design and digital marketing. All while keeping clients happy and projects running smoothly.',
  intro: [
    'Currently I lead web development and digital delivery across a portfolio of accounts at Drew+Rose. My clients have included Cond\u00e9 Nast, M&G Investments, Mayor of London and Lambeth Council.',
    'That technical foundation means I scope realistically, make informed decisions in meetings, and bridge the gap between what clients need and what gets built.',
  ],
  ctas: [
    { label: 'View my work', href: '/case-studies', style: 'primary' },
    { label: 'Get in touch', href: '/contact', style: 'secondary' },
  ],
};

export const whatIDo = {
  label: 'What I Do',
  heading: 'How I deliver digital projects',
  pillars: [
    {
      icon: '\u{2699}',
      title: 'Web Development & Technical Delivery',
      description:
        'I build websites in WordPress, Shopify, and Next.js. I lead dev teams, own technical scoping and architecture, and stay hands-on with the code throughout the build.',
    },
    {
      icon: '\u{1F91D}',
      title: 'Client & Account Management',
      description:
        'I run client relationships from onboarding to ongoing delivery. Strategic planning, stakeholder communications, monthly reporting, and making sure every project aligns with what the client actually needs.',
    },
    {
      icon: '\u{1F4C8}',
      title: 'Digital Marketing',
      description:
        'I co-ordinate between paid media teams, design and the client to deliver campaigns across Meta and Google Ads. Lead generation funnels, subscription marketing, and ongoing optimisation.',
    },
  ],
};

export const aboutIntro = {
  heading: 'About Me',
  image: '/images/alex-headshot.jpg',
  paragraphs: [
    'I started my career as a front-end developer, spending seven years building websites in WordPress, Shopify, and Next.js. Along the way I took on more responsibility. First leading development teams, then managing client relationships, and eventually owning entire accounts end-to-end.',
    'That progression is what sets me apart. I\u2019ve done the work, so I know what\u2019s realistic, what\u2019s going to cause problems, and how to keep a project on track.',
  ],
};

export const stats = [
  { number: '104%', label: 'Over annual lead generation target for\nProperty Hub two months early.' },
  { number: '48%', label: 'CPA reduction for leads\non Property Hub (Meta)' },
  { number: '44%', label: 'YoY traffic increase\nfor Active Lambeth' },
  { number: '7 yrs', label: 'Longest client retention (M&G)' },
];
