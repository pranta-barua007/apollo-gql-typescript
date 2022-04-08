const productsDB : Array<object> = [
    {
        id: 'redshoe',
        description: 'Red shoe',
        price: 42.12,
        reviews: [],
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.23,
        reviews: [],
    }
];

function getAllProducts() {
    return productsDB;
}

function getProductsByPrice(min: Number, max: Number) {
    console.log(min, max)
    return productsDB.filter((product: any) => {
        return product.price >= min && product.price <= max; 
    });
}

function getProductById(productId: String) {
    return productsDB.find((product: any) => {
        return product.id === productId
    });
}

function addNewProduct(id: String, description: String, price: Number) {
    const newProduct = {
        id,
        description,
        reviews: [],
        price
    };

    productsDB.push(newProduct);
    return newProduct;
}

function addNewProductReview(id: String, rating: Number, comment: String) {
    const targetProduct: any = getProductById(id);
    if(targetProduct) {
        const newReview = { 
            rating, 
            comment
        };
        targetProduct.reviews.push(newReview);
    }
    return targetProduct;
}

export = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}