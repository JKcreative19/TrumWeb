const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/news', async (req, res) => {
    try {
        const { data } = await axios.get('https://www.reuters.com/world/us/');
        const $ = cheerio.load(data);
        const articles = [];

        $('.story-content a').each((i, el) => {
            const title = $(el).text().trim();
            const link = 'https://www.reuters.com' + $(el).attr('href');
            if (title) articles.push({ title, link });
        });

        res.json(articles.slice(0, 10));
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));