import RepositoryGhn from "./RepositoryGhn";
import { SendServiceGhn } from "@/interface/ghn/SendServiceGhn";

export default {
    getAllProvince() {
        return RepositoryGhn.get('/master-data/province');
    },
    getDistrictFromProvince(id: number) {
        return RepositoryGhn.get('/master-data/district' + '?province_id=' + id)
    },
    getWardFromDistrict(id: number) {
        return RepositoryGhn.get('/master-data/ward' + '?district_id=' + id)
    },
    getDeliveryPrice(data: SendServiceGhn) {
        return RepositoryGhn.post('/v2/shipping-order/fee', data)
    }
}