import { Field, ObjectType, Int, Float } from "type-graphql";
import { Product } from "../products/products.type";

@ObjectType()
class OrderItem {
    @Field(() => Product)
    product: Product

    @Field(() => Int)
    quantity: number
}

@ObjectType()
export class Order {
    @Field()
    date: Date

    @Field(() => Float)
    subtotal: number

    @Field(() => [OrderItem])
    items?: OrderItem[]
}

