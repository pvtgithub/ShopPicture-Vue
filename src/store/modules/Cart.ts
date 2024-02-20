import pictureService from "@/service/pictureService";
export interface CartState{
    products : []
}
export default {
    state: () : CartState => ({
        products : []
    })
}