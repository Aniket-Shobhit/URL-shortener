const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/urlModel');
const router = new express.Router();

router.post('/', async (req, res) => {
    const { longUrl } = req.body;
    // const longUrl = req.query.longUrl;
    if(!validUrl.isUri(longUrl)) {
        return res.status(401).send('Invalid URL');
    }
    try {
        let url = await Url.findOne({
            longUrl
        });
        if(url) {
            return res.send(url);
        }
        const shortUrl = shortid.generate();
        url = new Url({
            longUrl,
            shortUrl
        });
        await url.save();
        res.send(url);
    } catch(e) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
