import {
    Resolver,
    Query,
} from "type-graphql";
import { Order } from "./orders.type";
import { getAllOrders } from "./orders.model";

@Resolver(Order)
class OrdersResolver {
    
    @Query(() => [Order])
    orders() {
        return getAllOrders();
    }
}

export default OrdersResolver;