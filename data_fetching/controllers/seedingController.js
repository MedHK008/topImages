import e from "cors";
import { connectToDB } from "../config/db.js";
import { Image } from "../modules/imagesModule.js";
import fetch from "node-fetch";

const insertImages = async () => {
    try {
        await connectToDB();
        const FLICKR_FEED_URL = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";
        const response = await fetch(FLICKR_FEED_URL);
        const data = await response.json();

        const images = data.items.map(item => ({
            title: item.title,
            imageUrl: item.media.m,
            link: item.link,
            author: item.author,
            published: item.published
        }));

        const existingImages = await Image.find({}, "imageUrl");
        const existingUrls = new Set(existingImages.map(img => img.imageUrl));

        const newImages = images.filter(img => !existingUrls.has(img.imageUrl));

        if (newImages.length > 0) {
            await Image.insertMany(newImages);
            console.log(`${newImages.length} new images inserted at`, new Date().toLocaleTimeString());
        } else {
            console.log("No new images to insert.");
        }
    } catch (error) {
        console.error("Error seeding the database", error);
    }
};

export default insertImages;
