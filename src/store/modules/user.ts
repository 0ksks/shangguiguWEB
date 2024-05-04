import { defineStore } from 'pinia'
import type { LoginForm,LoginResponse,LoginState } from '@/api/user/type'
import { reqLogin } from '@/api/user'
let useUserStore = defineStore('User', {
    state: ():LoginState => {
        return {
            token: localStorage.getItem('TOKEN'),
        }
    },
    actions: {
        async userLogin(data: LoginForm) {
            let res:LoginResponse = await reqLogin(data)
            if (res.code === 200) {
                this.token = res.data.token as string
                localStorage.setItem('TOKEN', res.data.token as string)
            } else {
                return Promise.reject(new Error(res.data.message))
            }
        },
    },
    getters: {},
})
export default useUserStore
