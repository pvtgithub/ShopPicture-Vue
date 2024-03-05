import Repository from "./Repository";

export default {
    getPictureHighlight(language: number) {
        let resource = ""
        if (language == 1) {
            resource = "/imagesVi"
        } else if (language == 2) {
            resource = "/imagesEn"
        } else if (language == 3) {
            resource = "/imagesJp"
        }
        return Repository.get(`${resource}?highlight=1`)
    },
    getPictureById(id: number) {
        return Repository.get(`/imagesVi/${id}`)
    },
    searchPicture(dataSearch: any) {
        if (dataSearch.category == '0') {
            return Repository.get(`/imagesVi?name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}`)
        } else {
            return Repository.get(`/imagesVi?category_id=${dataSearch.category}&name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}`)
        }
    },
    filterAndSearchPicture(order: number, dataSearch: any) {

        if (dataSearch.category == '0') {
            switch (order) {
                case 1:
                    return Repository.get(`/imagesVi?name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=view&_order=desc`)
                case 2:
                    return Repository.get(`/imagesVi?name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=star&_order=desc`)
                case 3:
                    return Repository.get(`/imagesVi?name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=price&_order=asc`)
                case 4:
                    return Repository.get(`/imagesVi?name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=price&_order=desc`)
                default:
                    return Repository.get(`/imagesVi?name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=price&_order=desc`)
            }
        } else {
            switch (order) {
                case 1:
                    return Repository.get(`/imagesVi?category_id=${dataSearch.category}&name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=view&_order=desc`)
                case 2:
                    return Repository.get(`/imagesVi?category_id=${dataSearch.category}&name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=star&_order=desc`)
                case 3:
                    return Repository.get(`/imagesVi?category_id=${dataSearch.category}&name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=price&_order=asc`)
                case 4:
                    return Repository.get(`/imagesVi?category_id=${dataSearch.category}&name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=price&_order=desc`)
                default:
                    return Repository.get(`/imagesVi?category_id=${dataSearch.category}&name_like=${dataSearch.name}&_page=${dataSearch.page}&_limit=${dataSearch.limit}&_sort=price&_order=desc`)
            }
        }

    }
}