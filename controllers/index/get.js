const speakers = [
  {
    name: 'Marko Baricevic',
    title: 'Cosmos SDK Product Owner',
    title_secondary: 'Binary Builders',
    image: '/img/speakers/marko.png',
    company_image: '/img/partners/binary-builders.svg',
    company_image_width: '10%',
    linkedin: 'https://www.linkedin.com/in/marko-baricevic-1b1b1b1b/',
    x: 'https://x.com/mbaricevic',
  },
  {
    name: 'Zaki Manian',
    title: 'Co-Founder Sommelier',
    image: '/img/speakers/zaki.png',
    company_image: '/img/partners/sommelier.png',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/zakimanian/',
    x: 'https://x.com/zmanian',
  },
  {
    name: 'Ethan Buchman',
    title: 'CEO Informal Systems',
    title_secondary: 'Co-Founder of',
    image: '/img/speakers/ethan.png',
    company_image: '/img/partners/cosmos.png',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/ethan-buchman-6a7b7a1/',
    x: 'https://x.com/ebuchman',
  },
  {
    name: 'Jack Zampolin',
    title: 'Founder and CEO',
    title_secondary: 'Strangelove',
    image: '/img/speakers/jack.png',
    company_image: '/img/partners/strangelove.png',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/jack-zampolin-3b6a8b4/',
    x: 'https://x.com/jack_zampolin',
  },
  {
    name: 'Mary McGilvray',
    title: 'Product Marketing Lead',
    title_secondary: 'IBC',
    image: '/img/speakers/mary.png',
    company_image: '/img/partners/interchain-foundation.png',
    company_image_width: '30%',
    linkedin: 'https://www.linkedin.com/in/mary-mcgilvray/',
    x: 'https://x.com/marymackbee',
  },
  {
    name: 'Bilyana Christova',
    title: 'BD Lead, Nolus Protocol',
    image: '/img/speakers/bilyana.png',
    company_image: '/img/partners/nolus.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/bilyanachristova/',
    x: 'https://x.com/bilyanachristov',
  },
  {
    name: 'Misang Ryu',
    title: 'VP of Sales & Marketing',
    image: '/img/speakers/misang.png',
    company_image: '/img/partners/confio.svg',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/misang-ryu-6a1b8b1b/',
    x: 'https://x.com/misangryu',
  },
  {
    name: 'Charles d\'Haussy',
    title: 'CEO dYdX Foundation',
    image: '/img/speakers/charles.png',
    company_image: '/img/partners/dydx.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/charlesdhaussy/',
    x: 'https://x.com/charlesdhaussy',
  },
  {
    name: 'Dean Tribble',
    title: 'Chief Executive',
    title_secondary: 'Officer (CEO)',
    image: '/img/speakers/dean.png',
    company_image: '/img/partners/agoric.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/dean-tribble-0b1b1b1b/',
    x: 'https://x.com/deantribble',
  },
];

const schedule = [
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Registration & Coffee',
    description: 'Register your personal data in customer service and take coffee before entering the room.',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Todd Norton, Manta Network',
    description: '“SNARKs, ZKPs, and Other Things The NSA Doesn’t Want You to Know About”',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Luke Pearson, Polychain Capital',
    description: '”Tips and Tricks: Finding Your Way Around a ZK Universe”',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Coffee Break',
    description: '',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Research For The Right Thing',
    description: 'Research encompasses a cariety of investigative methods used to add context and insight to the design process.',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Luke Pearson, Polychain Capital',
    description: '”Tips and Tricks: Finding Your Way Around a ZK Universe”',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Coffee Break',
    description: '',
  },
  {
    time: '8:00 AM - 9:00 AM',
    title: 'Research For The Right Thing',
    description: 'Research encompasses a cariety of investigative methods used to add context and insight to the design process.',
  },
];

module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Expanding the Cosmoverse',
    includes: {
      external: {
        css: ['general', 'header', 'page'],
        js: ['ancestorWithClassName', 'page', 'serverRequest']
      },
      meta: {
        title: 'Expanding the Cosmoverse',
        description: 'The main purpose of Cosmosphere is to bring new faces to the Cosmos Ecosystem and turn them into Cosmonauts. Cosmosphere is only for the people who don\'t know the Cosmos Ecosystem but would like to discover it. Cosmosphere is an event designed to take your Cosmos knowledge from scratch to one. Get your tickets now and ake a step to the Cosmos Ecosystem!',
        image: '/img/meta/header.png',
        twitter: true
      }
    },
    speakers,
    schedule,
  });
};
