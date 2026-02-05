const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
         default: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
        set: (v) =>
         v === ""
        ? "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
        : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews : [
        {
            type: Schema.Types.ObjectId,
             ref: "Review",
        },
    ],
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;