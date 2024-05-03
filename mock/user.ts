export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: {
            code: 201,
            data: "TOKEN"
        },
    },

    {
        url: '/api/user/info',
        method: 'get',
        response: {},
    },
];
