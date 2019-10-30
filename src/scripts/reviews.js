import Vue from "vue";

const buttons = {
    template: "#slider-buttons",
};

const content = {
    template: "#slider-content",
};

new Vue({
    el: "#reviews-components",
    template: "#slider-reviews",
    components: { buttons, content },
    data: () => ({
        reviews: [1],
    }),

    created() {
        const data = require('../data/reviews.json');

    }
});