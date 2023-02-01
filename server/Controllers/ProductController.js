import Productmodel from "../model/productSchema.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Productmodel.find({})
        return res.status(200).json({ products })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}



export const getProductDetailByID = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Productmodel.findOne({ 'id': id })
        // console.log(product.title)
        res.status(200).json({ product })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}