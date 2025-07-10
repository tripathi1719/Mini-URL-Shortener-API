const Url = require('../models/Url');
const validUrl = require('valid-url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
    const { url, expiryDate } = req.body; // extract expiryDate
    const base = process.env.BASE_URL;
  
    if (!validUrl.isUri(url)) {
      return res.status(400).json({ error: "Invalid URL" });
    }
  
    try {
      let code = shortid.generate();
  
      // Optional: Check for duplicate URLs if needed
      let urlData = await Url.findOne({ originalUrl: url });
      if (urlData) {
        return res.json({ shortUrl: `${base}/${urlData.shortCode}` });
      }
  
      const newUrl = new Url({
        originalUrl: url,
        shortCode: code,
        expiryDate: expiryDate ? new Date(expiryDate) : null // store expiryDate if provided
      });
  
      await newUrl.save();
  
      return res.json({ shortUrl: `${base}/${code}` });
  
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  };
  

  exports.redirectUrl = async (req, res) => {
    try {
      const code = req.params.code;
      const urlData = await Url.findOne({ shortCode: code });
  
      if (!urlData) {
        return res.status(404).json({ error: "No URL found" });
      }
  
      // Check for expiry
      if (urlData.expiryDate && urlData.expiryDate < new Date()) {
        return res.status(410).json({ error: "Link expired" }); // HTTP 410 Gone
      }
  
      // Increment click count for analytics
      urlData.clicks += 1;
      await urlData.save();
  
      return res.redirect(urlData.originalUrl);
  
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  };
  
