import {
    Resolver,
    Query,
    Mutation,
    Arg,
} from "type-graphql";
import { Product } from "./products.type";
import { getAllProducts, getProductsByPrice, getProductById, addNewProduct, addNewProductReview } from "./products.model";

@Resolver(Product)
class ProductsResolver {

    @Query(() => [Product])
    products() {
        return getAllProducts();
    }

    @Query(() => [Product])
    prouctsByPrice(
        @Arg("min") min: Number,
        @Arg("max") max: Number,
    ) {
        return getProductsByPrice(min, max);
    }

    @Query(() => Product)
    productsById(@Arg("id") id: String) {
        return getProductById(id);
    }

    @Mutation(() => Product)
    addNewProduct(
        @Arg("id") id: String, 
        @Arg("description") description: String, 
        @Arg("price") price: Number
    ) {
        return addNewProduct(id, description, price);
    }

    @Mutation(() => Product)
    addNewProductReview( 
        @Arg("id") id: String, 
        @Arg("rating") rating: Number, 
        @Arg("comment") comment: String
    ) {
        return addNewProductReview(id, rating, comment);
    }
}

export default ProductsResolver;