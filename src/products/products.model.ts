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

export function getAllProducts(): any {
    return productsDB;
}

export function getProductsByPrice(min: Number, max: Number): any {
    console.log(min, max)
    return productsDB.filter((product: any) => {
        return product.price >= min && product.price <= max; 
    });
}

export function getProductById(productId: String): any {
    return productsDB.find((product: any) => {
        return product.id === productId
    });
}

export function addNewProduct(id: String, description: String, price: Number): any {
    const newProduct = {
        id,
        description,
        reviews: [],
        price
    };

    productsDB.push(newProduct);
    return newProduct;
}

export function addNewProductReview(id: String, rating: Number, comment: String): any {
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

