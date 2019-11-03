import Vue from "vue";
import { swiper, swiperSlide } from 'vue-awesome-swiper';

new Vue({
    el: "#reviews-component",
    template: "#reviews",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            reviews: [],
            swiperOptions: {
                navigation: {
                    nextEl: '.reviews__butn_next',
                    prevEl: '.reviews__butn_prev',
                },
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50,
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    }
                }
            },
        };
    },
    methods: {

        arrWithreRequiredImage(array) {
            return array.map(item => {
                const requiredPic = require(`../images/content/${item["author-pic"]}`);
                item["author-pic"] = requiredPic;

                return item;
            });
        },
    },
    created() {
        const reviews = require("../data/reviews.json");
        this.reviews = this.arrWithreRequiredImage(reviews);
    },
});