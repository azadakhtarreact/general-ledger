
import { LOGIN_ADMIN } from '../graphql/mutations/auth';
import { cipher } from '../helpers';
import Cookies from 'js-cookie';

// export const state = () => ({
//     token: Cookies.get(`teman`) ? Cookies.get(`teman`) : ``,
//     name: Cookies.get(`name`) ? Cookies.get(`name`) : ``,
//     adminId: Cookies.get(`userid`) ? Cookies.get(`userid`) : ``,
// })

// export const getters = {
//     isAuthenticated(state) {
//         const token = cipher.de(state.token, 'teman')
//         return !!token
//     },
//     getAdminName(state) {
//         return cipher.de(state.name, 'name')
//     },
//     getAdminID(state) {
//         return cipher.de(state.adminId, 'userid')
//     },
// }

// export const mutations = {
//     SET_TOKEN(state, token) {
//         state.token = token
//     },
//     SET_NAME(state, name) {
//         state.name = name
//     },
//     SET_ID(state, id) {
//         state.adminId = id
//     },
//     REMOVE_TOKEN(state) {
//         state.token = ``
//         Cookies.remove(`teman`, { path: "/" })
//         Cookies.remove(`name`)
//         Cookies.remove(`userid`)
//     },
// }

export const actions = {
     // admin login function
    // async adminLogin({ commit }, payload) {
    //     return await this.app.apolloProvider.defaultClient.mutate({
    //         mutation: LOGIN_ADMIN, variables: { input: payload }
    //     }).then(resp => {
    //         const { data: { AdminLogin: { id, token, name } } } = resp
    //         commit(`SET_TOKEN`, cipher.en(token, 'teman'))
    //         commit(`SET_NAME`, cipher.en(name, 'name'))
    //         commit(`SET_ID`, cipher.en(String(id), 'userid'))
    //         Cookies.set('teman', cipher.en(token, 'teman'))
    //         Cookies.set('name', cipher.en(name, 'name'))
    //         Cookies.set('userid', cipher.en(String(id), 'userid'))
    //         return true
    //     }).catch((e) => {
    //         return e
    //     })
    // },

    async adminLogin({ commit }, payload) {
        return await this.app.apolloProvider.defaultClient.mutate({
            mutation: LOGIN_ADMIN, variables: { input: payload }
        }).then(resp => {
            const { data: { AdminLogin: { id, token, name } } } = resp
            // commit(`SET_TOKEN`, cipher.en(token, 'teman'))
            // commit(`SET_NAME`, cipher.en(name, 'name'))
            // commit(`SET_ID`, cipher.en(String(id), 'userid'))
            // Cookies.set('teman', cipher.en(token, 'teman'))
            // Cookies.set('name', cipher.en(name, 'name'))
            // Cookies.set('userid', cipher.en(String(id), 'userid'))
            return resp
        }).catch((e) => {
            return e
        })
    },

    adminLogout({ commit, state }) {
        if (state.token) commit(`REMOVE_TOKEN`)
    },
}