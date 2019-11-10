export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {},
    actions: {
        async addCategory(store, title) {
            try {
                await this.$axios.post("./categories.js", { title });
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        // fetchCategories(store, ) {
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