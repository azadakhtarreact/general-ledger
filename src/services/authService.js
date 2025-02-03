
import axios from "axios"
 
// Auth-Services
import { removeUserSession } from "../utility/AuthService"

const baseUrl = process.env.REACT_APP_APP_API_ENDPOINT

// const getToken = localStorage.getItem('auth')
// const myToken = getToken?.token

export const loginService = ({ emailOrUsername, password, userType }) => axios.post(`${baseUrl}/common/login`,
    { emailOrUsername, password, userType })

export const logoutService = (navigate) => {
    removeUserSession()
    navigate('/login')
}

export const userGetProfile = ({ token }) => axios.get(`${baseUrl}/admin/auth/profile`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    })

export const userUpdateProfile = ({ token }, formData) => axios.post(`${baseUrl}/admin/auth/update-profile`, formData,

    {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    })

export const userGetCurrentPassword = ({ token }) => axios.get(`${baseUrl}/admin/auth/profile`, {},
    {

        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    }

)

export const userUpdatePassword = ({ old_password, password, password_confirmation, token }) => axios.post(`${baseUrl}/admin/auth/change-password`, {
    old_password,
    password,
    password_confirmation
}, {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
})

export const userListService = ({ countPerPage, page, token }) => axios.get(`${baseUrl}/admin/customer/list?paginate=1&page=${page}&perPage=${countPerPage}`, {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
})

export const userSearchService = ({ search, countPerPage, token }) => axios.get(`${baseUrl}/admin/customer/list?keyword=${search}&paginate=1&&perPage=${countPerPage}`, {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
})

export const userStatusUpdateService = ({ id, token }) => axios.post(
    `${baseUrl}/admin/customer/status/${id}`,
    {},
    {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    }
)

export default { loginService, userListService, userUpdateProfile, userUpdatePassword, userGetProfile, userGetCurrentPassword }