import axios from "axios"

const URL = "https://quanlycudan.azurewebsites.net/api/Users"

const checkUserService = (payload) => axios.post(`${URL}/authenticate`, payload)

export {
    checkUserService,
}