import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;
const FLICKR_FEED_URL = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

app.use(cors());

app.get("/top-images", async (req, res) => {
    try {
        console.log("Fetching images from Flickr...");
        const response = await fetch(FLICKR_FEED_URL);
        console.log("Flickr response status:", response.status);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const images = data.items.map(item => ({
            title: item.title,
            imageUrl: item.media.m,
            link: item.link,
            author: item.author,
            published: item.published
        }));
        res.json({ images });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch images" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/top-images`);
});
