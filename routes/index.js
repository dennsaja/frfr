const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://infinityteknik.net/</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://infinityteknik.net/paket</loc>
      <priority>0.5</priority>
    </url>
  </urlset>`;

  res.send(xml);
});


module.exports = router;



