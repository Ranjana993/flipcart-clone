import { products } from "./Constants/data.js";
import Productmodel from "./model/productSchema.js";

const DefaultData = async () => {
    try {
        // await Productmodel.deleteMany({});
        await Productmodel.insertMany(products);
        console.log("Product Saved (imported) successfully")
    } catch (error) {
        console.log(error.message);
    }
}

export default DefaultData;