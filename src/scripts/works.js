import Vue from "vue";

const thumbs = {
    template: "#slider-thumbs",
    props: ["works"],
}

const btns = {
    template: "#slider-btns",
}

const display = {
    template: "#slider-display",
    components: { thumbs, btns },
    props: ["works"],
}

const tags = {
    template: "#slider-tags",
}

const info = {
    template: "#slider-info",
    components: { tags }
}

new Vue({
    el: "#slider-components",
    template: "#slider-container",
    components: { display, info },
    data: () => ({
        works: []
    }),
    created() {
        this.works = require('../data/work.json');
    }
});