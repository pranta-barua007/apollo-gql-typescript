import {
    Resolver,
    Query,
} from "type-graphql";
import ordersModel from "./orders.model";

@Resolver()
class OrdersResolvers {
    @Query(() => Array)
    orders() {
        return ordersModel.getAllOrders();
    }
}

export default OrdersResolvers;