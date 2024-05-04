export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }) => {
            const { username, password } = body
            if (username === 'admin' && password === '111111') {
                let token = 'TOKEN'
                return {
                    code: 200,
                    data: { token },
                }
            }
            return {
                code: 201,
                data: { message: 'wrong username or password' },
            }
        },
    },

    {
        url: '/api/user/info',
        method: 'get',
        response: {},
    },
]
