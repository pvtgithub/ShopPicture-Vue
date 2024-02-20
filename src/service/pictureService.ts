import Repository from "./Repository";

export default {
    getAll(language : number) {
        let resource = ""
        if(language == 1){
            resource = "/imagesVi"
        }else if(language == 2){
            resource = "/imagesEn"
        }else if(language == 3){
            resource = "/imagesJp"
        }
        return Repository.get(`${resource}`)
    },
    getPictureById(id : number){
        return Repository.get(`/imagesVi/${id}`)
    }
}