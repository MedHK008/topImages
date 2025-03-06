import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    link: String,
    author: String,
    published: String
});

export const Image = mongoose.model("Image", imagesSchema);