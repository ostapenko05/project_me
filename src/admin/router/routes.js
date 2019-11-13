export default [

    {
        path: "/",
        component: () =>
            import ('../components/pages/about'),
        meta: {
            title: "Обо мне"

        }
    },
    {
        path: "/works",
        component: () =>
            import ('../components/pages/works.vue'),
        meta: {
            title: "Работы"

        }
    },
    {
        path: "/reviews",
        component: () =>
            import ('../components/pages/reviews.vue'),
        meta: {
            title: "Отзывы"
        }
    },
    {
        path: "/login",
        component: () =>
            import ('../components/pages/login.vue'),
        meta: {
            public: true
        }
    }
];