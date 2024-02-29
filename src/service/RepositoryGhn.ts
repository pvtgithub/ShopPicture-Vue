import axios from 'axios'

const urlDomain = "https://online-gateway.ghn.vn/shiip/public-api"
const urlBase = `${urlDomain}`
const token = ""
const tokenGhn = "5c1c8d15-762e-11ed-9dc6-f64f768dbc22"
const shopId = "3540855"

export default axios.create({
    baseURL: urlBase,
    headers: {
        "Authorization": "Bearer " + `${token}`,
        "token": tokenGhn,
        "ShopId" : shopId
    }
})