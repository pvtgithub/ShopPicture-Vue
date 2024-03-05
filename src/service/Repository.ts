import axios from 'axios'
import ConstVariable from '../../const'

const urlDomain = ConstVariable.BASE_API
const urlBase = `${urlDomain}`
const token = ""

export default axios.create({
    baseURL: urlBase,
    headers: {"Authorization": "Bearer " + `${token}`}
})