const express = require('express');
const Url = require('../models/urlModel');
const router = new express.Router();

router.get('/:code', async (req,res) => {
    try {
        const url = await Url.findOne({ shortUrl: req.params.code });
        if(!url) {
            return res.status(404).send('Url not found');
        }
        return res.redirect(url.longUrl);
    } catch(e) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;