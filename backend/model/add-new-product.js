const mongoose = require('mongoose');

const addNewProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your product name!'],
  },
  description: {
    type: String,
    required: [true, 'Please enter your product description!'],
  },
  fullProductDetails: {
    type: String,
    required: [true, 'Please enter your Full product description!'],
  },
  category: {
    type: String,
    required: [true, 'Please enter your product category!'],
  },
  tags: [
    {
      key: {
        type: Number,
      },
      label: {
        type: String,
        // required: [true, 'Please enter product tag!'],
      },
    },
  ],
  // tags: {
  //   type: String,
  // },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, 'Please enter your product price!'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter your product stock!'],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('New Product', addNewProductSchema);
