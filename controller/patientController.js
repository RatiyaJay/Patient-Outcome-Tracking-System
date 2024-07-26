const Product = require("../model/Patient");

exports.AddProduct = async (req, res) => {
  const { name, category, description, price } = req.body;
  try {
    const productExists = await Product.findOne({ name });
    if (productExists) {
      return res.status(200).json({ message: "Product already exists" });
    }
    const product = await Product.create({
      name,
      category,
      description,
      price,
    });
    res.status(200).json({ message: "Product added successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.UpdateProductById = async (req, res) => {
  const { id } = req.params.id;
  try {
    const product= await Product.findByID()
    
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }

}
