const Subscriber = require('../../models/subscriber/Subscriber');

module.exports = (req, res) => {
  req.body.type = 'cosmosphere';

  Subscriber.createSubscriber(req.body, (err, subscriber) => {
    if (err) return res.json({ success: false, error: err });

    return res.json({ success: true, subscriber });
  });
};