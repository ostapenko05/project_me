import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import aboutadmin from '../components/pages/about';
import loginadmin from '../components/pages/login';
import worksadmin from '../components/pages/works';
import reviewsadmin from '../components/pages/reviews';

const routes = [{
        path: "/",
        component: aboutadmin

    },
    {
        path: "/works",
        component: worksadmin
    },
    {
        path: "/reviews",
        component: reviewsadmin
    },
    {
        path: "/login",
        component: loginadmin
    }
];

export default new VueRouter({ routes });





// export default router;
// import roytes from 'routes'






// import Vue from "vue";
// import VueRouter from "vue-router";
// import axios from "axios";
// import store from "@/store"

// Vue.use(VueRouter);

// const baseURL = "http://localhost:8000";
// const guard = axios.create({ baseURL });

// const router = new VueRouter({ routes });

// router.beforeEach(async(to, from, next) => {
//     const isPublicRoute = to.matched.some(record => record.meta.public);
//     const isUserLogged = store.getters["user/userIsLogged"];

//     if (isPublicRoute === false && isUserLogged === false) {
//         const token = localStorage.getItem('token');
//         guard.defaults.headers['Authorization'] = `Bearer ${token}`;

//         try {
//             const response = await guard.get('/user');
//             store.commit('user/SET_USER', response.data.user);
//             next();
//         } catch (error) {
//             router.replace('/login');
//             localStorage.removeItem('token');
//         }

//     } else {
//         next();
//     }
// });