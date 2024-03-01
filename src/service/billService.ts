import Repository from "./Repository";

export default {
    getAllBill() {
        return Repository.get('/bills')
    },
    getBillByPhoneNumber(phoneNumber: any) {
        return Repository.get(`/bills?customer.phone=${phoneNumber}`)
    },
    postBill(data: any) {
        return Repository.post('/bills', data)
    },
    postPayment(data: any) {
        return Repository.post('/payment', data)
    },
    getPaymentByOrderId(orderId: number) {
        return Repository.get(`/payment?orderId=${orderId}`)
    }
}