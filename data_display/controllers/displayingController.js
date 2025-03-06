import { Image } from "../modules/imagesModule.js";

const displayImages = async (req , res) => {
    try {
        const images = await Image.find({});
        res.json(images);
    } catch (error) {
        console.error("Error seeding the database", error);
    }
};

export { displayImages };
