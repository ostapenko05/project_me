export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        }
    },
    actions: {
        async addCategory(store, title) {
            try {
                await this.$axios.post("/categories", { title: title });
                a
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        async fetchCategories({ commit }) {
            try {
                const { data } = await this.$axios.get("/categories");
                commit("SET_CATEGORIES", data);
            } catch (error) {

            }
        }
    }
};

//     actions: {
//         async addNewSkillGroup({ commit }, groupTitle) {
//             try {
//                 const response = await this.$axios.post("/categories", {
//                     title: groupTitle
//                 });
//                 return response;
//             } catch (error) {
//                 throw new Error(
//                     error.response.data.error || error.response.data.message
//                 );
//             }
//         },
//         async fetchCategories({ commit }) {
//             try {
//                 const response = await this.$axios.get("/categories");
//                 commit("SET_CATEGORIES", response.data.reverse());
//                 return response;
//             } catch (error) {
//                 throw new Error(
//                     error.response.data.error || error.response.data.message
//                 );
//             }
//         }
//     }
// };