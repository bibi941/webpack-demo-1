!function() {
    var view = View('#mySlides')
    var controller = {
        view: null,
        initSwiper: null,
        swiperOptions: {
            grabCursor: true,
            loop: true,
            autoplay: true,
            effect: 'flip',
            hideOnClick: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        init: function(view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function() {
            new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        }
    }
    controller.init(view)
}.call()
