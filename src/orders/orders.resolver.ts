import {
    Resolver,
    Query,
} from "type-graphql";
import { Order } from "./orders.type";
import { getAllOrders } from "./orders.model";

@Resolver()
class OrdersResolver {
    @Query(() => [Order])
    orders(): Order[] {
        return getAllOrders();
    }
}

export default OrdersResolver;