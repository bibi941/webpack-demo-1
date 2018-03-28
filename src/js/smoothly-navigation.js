!function topBar_Anchor() {
    let view = document.querySelectorAll('nav>ul>li>a')
    let controller = {
        view: null,
        init: function() {
            this.view = view
            this.topBar_Anchor()
        },
        topBar_Anchor: function() {
            for (let i = 0; i < this.view.length; i++) {
                this.view[i].onclick = function(x) {
                    x.preventDefault() //阻止默认事件
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    let top = element.offsetTop //距离页面顶部的像素
                    let currentTop = window.scrollY
                    let targetTop = top - 80
                    let s = targetTop - currentTop //移动距离
                    let time = Math.abs(s / 100 * 300) //时间
                    //tween.js库
                    function animate(time) {
                        //自动计算多少毫秒动一次
                        requestAnimationFrame(animate)
                        TWEEN.update(time)
                    }
                    requestAnimationFrame(animate)
                    //缓动类型以及参数
                    var coords = {
                        y: currentTop
                    }
                    if (time > 1000) {
                        time = 1000
                    } //最大时间0.5s
                    var tween = new TWEEN.Tween(coords)
                        .to(
                            {
                                y: targetTop
                            },
                            time
                        )
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function() {
                            window.scrollTo(0, coords.y)
                        })
                        .start()
                }
            }
        }
    } 
    controller.init(view)
}.call()
