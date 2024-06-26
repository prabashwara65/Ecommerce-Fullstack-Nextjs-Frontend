// Import necessary modules from mongoose
import mongoose from 'mongoose';

// Destructure Schema and model from mongoose
const { Schema, model } = mongoose;

// Define the schema for the Product
const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
   
}, {
    timestamps: true,
});

// Define Products model using mongoose.models or mongoose.model
let Products;

try {
    // Try to retrieve an existing model named 'Products'
    Products = mongoose.model('Products');
} catch (error) {
    // If the model doesn't exist, define it
    Products = mongoose.model('Products', ProductSchema);
}

// Export the Products model
export default Products;


