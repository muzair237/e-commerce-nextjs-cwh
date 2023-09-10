import connectDb from "../../../middleware/config";
import Product from "../../../models/Product";

const handler = async (req, res) => {
    if (req.method === "POST") {
        for (let index = 0; index < req.body.length; index++) {
            let newProduct = await Product.findByIdAndUpdate(req.body[index]._id, req.body[index])
        }
        res.status(200).json({ success: "Product Added Successfully!" })

    } else {
        res.status(400).json({ error: "Please Select Appropriate Request Method!" })

    }
}
export default connectDb(handler);