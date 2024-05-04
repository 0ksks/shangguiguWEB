import { defineStore } from 'pinia'
let useUserStore = defineStore('User', {
    state: () => {
        return {}
    },
    actions: {
        user_login() {
            console.log('login')
        },
    },
    getters: {},
})
export default useUserStore
