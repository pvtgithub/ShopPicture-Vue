import axios from 'axios'

const urlDomain = "https://test-payment.momo.vn/v2/gateway"
const urlBase = `${urlDomain}`

export default axios.create({
    baseURL: urlBase,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})  