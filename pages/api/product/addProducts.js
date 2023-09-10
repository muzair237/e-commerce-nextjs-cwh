import connectDb from "../../../middleware/config";
import Product from "../../../models/Product";

const handler = async (req, res) => {
    if (req.method === "POST") {
        for (let index = 0; index < req.body.length; index++) {
            let newProduct = new Product({
                title: req.body[index].title,
                slug: req.body[index].slug,
                desc: req.body[index].desc,
                img: req.body[index].img,
                color: req.body[index].color,
                size: req.body[index].size,
                category: req.body[index].category,
                price: req.body[index].price,
                availableQty: req.body[index].availableQty,
            }) 
            await newProduct.save();
        }
        res.status(200).json({ success: "Product Added Successfully!" })

    } else {
        res.status(400).json({ error: "Please Select Appropriate Request Method!" })

    }
}
export default connectDb(handler);