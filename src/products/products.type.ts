import { Field, ObjectType, Float, ID } from "type-graphql";

@ObjectType()
class Review {
    @Field(() => Float)
    rating: number

    @Field()
    comment?: string
}

@ObjectType()
export class Product {
    @Field(() => ID)
    id: string

    @Field()
    description: string

    @Field(() => Float)
    price: number

    @Field(() => [Review])
    reviews?: Review[]
}

