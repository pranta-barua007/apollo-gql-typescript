import {
    Resolver,
    Query,
    Mutation,
    Arg
} from "type-graphql";
import productsModel from "./products.model";

@Resolver()
class ProductsResolvers {
    @Query(() => Array)
    products() {
        return productsModel.getAllProducts();
    }

    @Query(() => Array)
    prouctsByPrice(
        @Arg("min") min: Number,
        @Arg("max") max: Number,
    ) {
        return productsModel.getProductsByPrice(min, max);
    }

    @Query(() => Object)
    productsById(@Arg("id") id: String) {
        return productsModel.getProductById(id);
    }

    @Mutation(() => Object)
    addNewProduct(
        @Arg("id") id: String, 
        @Arg("description") description: String, 
        @Arg("price") price: Number
    ) {
        return productsModel.addNewProduct(id, description, price);
    }

    @Mutation(() => Object)
    addNewProductReview( 
        @Arg("id") id: String, 
        @Arg("rating") rating: Number, 
        @Arg("comment") comment: String
    ) {
        return productsModel.addNewProductReview(id, rating, comment);
    }
}

export default ProductsResolvers;