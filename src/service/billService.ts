import Repository from "./Repository";

export default {
    getAllBill() {
        return Repository.get('/bills')
    },
    postBill(data: any) {
        return Repository.post('/bills', data)
    },
    
}