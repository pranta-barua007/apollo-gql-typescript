const ordersDB: Array<object> = [
    {
        date: '2005-05-05',
        subtotal: '90.32',
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old red shoe',
                    price: 45.11
                },
                quantity: 2
            }
        ]
    }
];

function getAllOrders() {
    return ordersDB;
}

export = {
    getAllOrders
}
