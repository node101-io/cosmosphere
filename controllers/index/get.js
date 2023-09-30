const speakers = [
  {
    name: 'Marko Baricevic',
    title: 'Cosmos SDK Product Owner',
    title_secondary: 'Binary Builders',
    image: '/img/speakers/marko.png',
    company_image: '/img/partners/companies/binary-builders.svg',
    company_image_width: '10%',
    linkedin: 'https://www.linkedin.com/in/marko-baricevic-ab0b49214/',
    x: 'https://twitter.com/mark0baricevic',
  },
  {
    name: 'Zaki Manian',
    title: 'Co-Founder Sommelier',
    image: '/img/speakers/zaki.png',
    company_image: '/img/partners/companies/sommelier.png',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/zmanian/',
    x: 'https://twitter.com/zmanian',
  },
  {
    name: 'Ethan Buchman',
    title: 'CEO Informal Systems',
    title_secondary: 'Co-Founder of',
    image: '/img/speakers/ethan.png',
    company_image: '/img/partners/companies/cosmos.png',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/ethan-buchman-10b34944/',
    x: 'https://twitter.com/buchmanster',
  },
  {
    name: 'Jack Zampolin',
    title: 'Founder and CEO',
    title_secondary: 'Strangelove',
    image: '/img/speakers/jack.png',
    company_image: '/img/partners/companies/strangelove.png',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/jackzampolin/',
    x: 'https://twitter.com/jackzampolin',
  },
  {
    name: 'Mary McGilvray',
    title: 'Product Marketing Lead',
    title_secondary: 'IBC',
    image: '/img/speakers/mary.png',
    company_image: '/img/partners/companies/interchain-foundation.png',
    company_image_width: '30%',
    linkedin: 'https://www.linkedin.com/in/mary-mcgilvray/',
    x: 'https://twitter.com/interchain_io',
  },
  {
    name: 'Bilyana Christova',
    title: 'BD Lead, Nolus Protocol',
    image: '/img/speakers/bilyana.png',
    company_image: '/img/partners/companies/nolus.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/bilyanastancheva/',
    x: 'https://twitter.com/BilyanaChristov',
  },
  {
    name: 'Misang Ryu',
    title: 'VP of Sales & Marketing',
    image: '/img/speakers/misang.png',
    company_image: '/img/partners/companies/confio.svg',
    company_image_width: '36%',
    linkedin: 'https://www.linkedin.com/in/misang-ryu-a19b0b45/',
    x: 'https://twitter.com/misangmadrid',
  },
  {
    name: 'Charles d\'Haussy',
    title: 'CEO dYdX Foundation',
    image: '/img/speakers/charles.png',
    company_image: '/img/partners/companies/dydx.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/charlesdhaussy/',
    x: 'https://twitter.com/charlesdhaussy',
  },
  {
    name: 'Dean Tribble',
    title: 'Chief Executive',
    title_secondary: 'Officer (CEO)',
    image: '/img/speakers/dean.png',
    company_image: '/img/partners/companies/agoric.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/deantribble/',
    x: 'https://twitter.com/DeanTribble',
  },
  {
    name: 'Sunny Aggarwal',
    title: 'Q&A Session',
    title_secondary: 'Co-Founder, Osmosis Labs',
    image: '/img/speakers/sunny.png',
    company_image: '/img/partners/companies/osmosis.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/in/sunnya97/',
    x: 'https://twitter.com/sunnya97',
  },
  {
    name: '0xBrainjar',
    title: 'Founder of Composable Finance',
    image: '/img/speakers/0xbrainjar.png',
    company_image: '/img/partners/companies/composable.png',
    company_image_width: '28%',
    linkedin: 'https://www.linkedin.com/company/composable-finance/',
    x: 'https://twitter.com/0xbrainjar',
  },
  {
    name: 'Rebel Defi',
    title: 'Head of Comms',
    image: '/img/speakers/rebel.png',
    company_image: '/img/partners/companies/tfm.png',
    company_image_width: '28%',
    linkedin: 'https://t.co/7USCuPA3l2',
    x: 'https://twitter.com/rebel_defi',
  }
];

const schedule = [
  {
    time: '13:10 - 13:30',
    title: 'Ethan Buchman, Informal Systems',
    description: 'What is Cosmos and the AppChain Thesis?'
  },
  {
    time: '13:30 - 13:50',
    title: 'Marko Baricevic, Binary Builders',
    description: 'Cosmos SDK: Past, Present and Future!'
  },
  {
    time: '13:50 - 14:10',
    title: 'Mary McGilvray, Interchain Foundation',
    description: 'What is IBC?'
  },
  {
    time: '14:10 - 14:30',
    title: 'Misang Ryu, Confio',
    description: 'Discovering CosmWasm: Your Entry to Smart Contracts in Cosmos'
  },
  {
    time: '14:30 - 14:50',
    title: 'Dean Tribble, Agoric',
    description: 'General Purpose of JavaScript dApps'
  },
  {
    time: '14:50 - 15:10',
    title: 'Jack Zampolin, Strangelove',
    description: 'UX Problems? How can we make Blockchain more user friendly with IBC?'
  },
  {
    time: '15:10 - 15:30',
    title: 'Charles d\'Haussy, dYdX Foundation',
    description: 'Astropolis: A Vision for Decentralized Financial Systems'
  },
  {
    time: '15:30 - 15:50',
    title: '0xBrainjar, Composable Finance',
    description: 'Composable: User Intentions in the Digital World'
  },
  {
    time: '15:50 - 16:10',
    title: 'Zaki Manian, Sommelier',
    description: 'Liquid Staking in Cosmos'
  },
  {
    time: '16:10 - 16:30',
    title: 'Billyana Christova, Nolus Protocol',
    description: 'Nolus: From TradFi DeFi Utilizing the Cosmos Stack'
  },
  {
    time: '16:30 - 16:50',
    title: 'Sunny Aggarwal, Osmosis',
    description: 'Q&A with Sunny'
  },
  {
    time: '16:50 - 17:10',
    title: 'Rebel Defi, TFM',
    description: 'The Interchain Swiss Army Knife'
  }
];

const sponsors = {
  developer_community_partners: {
    name: 'Developer Community Partners',
    logos: [
      {
        name: 'Rise in',
        image: '/img/partners/developer/rise-in.png',
        linkedin: 'https://www.linkedin.com/company/risein/',
        x: 'https://twitter.com/risein_com',
      },
    ]
  },
  community_partners: {
    name: 'Community Partners',
    logos: [
      {
        name: 'Testnetrun',
        image: '/img/partners/community/testnetrun.png',
        linkedin: 'https://www.linkedin.com/in/testnetrun/',
        x: 'https://twitter.com/testnetrun',
      },
      {
        name: 'Hoodies',
        image: '/img/partners/community/hoodies.png',
        linkedin: 'https://www.linkedin.com/company/hoodiescommunity/',
        x: 'https://twitter.com/HoodiesCT',
      },
      {
        name: 'Altcointurk',
        image: '/img/partners/community/altcointurk.png',
        linkedin: 'https://www.linkedin.com/company/altcointurk/',
        x: 'https://twitter.com/altcointurk',
      },
      {
        name: '0xWilds',
        image: '/img/partners/community/wilds.png',
        linkedin: 'https://www.linkedin.com/company/0xwilds/',
        x: 'https://twitter.com/0xWilds',
      },
      {
        name: 'Huginn',
        image: '/img/partners/community/huginn.png',
        linkedin: 'https://huginn.tech/',
        x: 'https://twitter.com/HuginnStake',
      },
      {
        name: 'Unive Chain',
        image: '/img/partners/community/univechain.png',
        linkedin: 'https://www.linkedin.com/company/univechain/',
        x: 'https://twitter.com/univechain',
      },
      {
        name: 'Imperator',
        image: '/img/partners/community/imperator.png',
        linkedin: 'https://www.linkedin.com/company/imperator-co/',
        x: 'https://twitter.com/imperator_co',
      },
      {
        name: 'Cosmic Turks',
        image: '/img/partners/community/cosmic-turks.png',
        linkedin: 'https://t.co/x0U5xSL4uD',
        x: 'https://twitter.com/CosmicTurks',
      },
      {
        name: 'KimlikDAO',
        image: '/img/partners/community/kimlik-dao.png',
        linkedin: 'https://www.linkedin.com/company/kimlikdao/',
        x: 'https://twitter.com/KimlikDAO',
      }
    ]
  },
  talent_partners: {
    name: 'Talent Partners',
    logos: [
      {
        name: 'ITU Blockchain',
        image: '/img/partners/talent/itu-blockchain.png',
        linkedin: 'https://www.linkedin.com/company/itublockchain/',
        x: 'https://twitter.com/ITUblockchain',
      },
      {
        name: 'YTU Blockchain',
        image: '/img/partners/talent/ytu-blockchain.png',
        linkedin: 'https://www.linkedin.com/in/ytu-blockchain-community-429a99250/',
        x: 'https://twitter.com/BlockchainYtu',
      },
      {
        name: 'ODTU Blockchain',
        image: '/img/partners/talent/odtu-blockchain.png',
        linkedin: 'https://www.linkedin.com/company/odtublockchain/',
        x: 'https://twitter.com/odtublockchain',
      },
      {
        name: 'İÜ Blockchain',
        image: '/img/partners/talent/iu-blockchain.png',
        linkedin: 'https://www.linkedin.com/company/istanbulchain/',
        x: 'https://twitter.com/istanbulchain',
      },
      {
        name: 'Çukurova Blockchain',
        image: '/img/partners/talent/cukurova-blockchain.png',
        linkedin: 'https://www.linkedin.com/company/cukurovablock/',
        x: 'https://twitter.com/cukurovablock',
      },
      {
        name: 'Subchain',
        image: '/img/partners/talent/subchain.png',
        linkedin: 'https://www.linkedin.com/company/subchain/',
        x: 'https://twitter.com/subchain_',
      },
      {
        name: 'Bilgi Blockchain',
        image: '/img/partners/talent/bilg.png',
        linkedin: 'https://www.linkedin.com/company/bilgi-blockchain/',
        x: 'https://twitter.com/bilgiblockchain',
      },
    ]
  },
  media_partners: {
    name: 'Media Partners',
    logos: [
      {
        name: 'CDS',
        image: '/img/partners/media/cds.png',
        linkedin: 'https://t.co/8px3Yg2TIQ',
        x: 'https://twitter.com/cryptodataspace',
      },
      {
        name: 'Cointelegraph',
        image: '/img/partners/media/cointelegraph.png',
        linkedin: 'https://www.linkedin.com/company/cointelegraph-t%C3%BCrkiye/',
        x: 'https://twitter.com/CointelegraphTR',
      },
      {
        name: 'Coinkolik',
        image: '/img/partners/media/coinkolik.png',
        linkedin: 'https://www.linkedin.com/company/coinkolik/',
        x: 'https://twitter.com/Coinkolik',
      },
      {
        name: 'Btc Haber',
        image: '/img/partners/media/btc-haber.png',
        linkedin: 'https://www.linkedin.com/company/btchabercom/',
        x: 'https://twitter.com/BTCHabercom',
      },
    ]
  },
  broadcasting_partners: {
    name: 'Broadcasting Partners',
    logos: [
      {
        name: 'Omniflix',
        image: '/img/partners/broadcasting/omniflix.png',
        linkedin: 'https://www.linkedin.com/company/omniflixnetwork/',
        x: 'https://twitter.com/OmniFlixNetwork',
      }
    ]
  }
};

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
    sponsors,
  });
};
