import { Image } from "../modules/imagesModule.js";

const displayImages = async (req , res) => {
    try {
        const images = await Image.find({});
        const mappedImages = images.map(image => ({
            title: image.title,
            imageUrl: image.imageUrl,
            link: image.link,
            author: image.author,
            published: image.published
        }));
        res.json(mappedImages);
    } catch (error) {
        console.error("Error seeding the database", error);
    }
};

export { displayImages };
