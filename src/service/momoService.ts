import RepositoryPayment from "./RepositoryPayment";

export default {

    payment(data: any) {
        const data_js = JSON.stringify(data);

        return RepositoryPayment.post('/api/create', data_js)
    }
}