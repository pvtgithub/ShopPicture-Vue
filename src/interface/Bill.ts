interface Customer {
    name: string,
    address: string,
    phone: string,
    email: string,
    note: string
}
interface Product {
    product_id: number,
    quanlity: number
}

export interface Bill {
    id: number,
    customer: Customer,
    details: {
        products: Product[],
        sum_price: number,
        delivery_price: number,
        total_price : number,
        cash : boolean,
        status: number
    }

}