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
    }
  });
};
