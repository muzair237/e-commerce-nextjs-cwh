import connectDb from "../../../middleware/config";
import Product from "../../../models/Product";

const handler = async (req, res) => {
    if (req.method === "GET") {
        let products = await Product.find({});
        res.status(200).json(products)
    } else {
        res.status(400).json({message: "Please Select Appropriate Request Method!" })
    }
}
export default connectDb(handler);