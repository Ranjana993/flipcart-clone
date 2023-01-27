import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    url: String,
    detailUrl: String,
    title: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})


const Productmodel = new mongoose.model("flipkart-products", ProductSchema);
export default Productmodel;