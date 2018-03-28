!function () {
    let target_anchor = document.querySelectorAll('[target-anchor]')
    for (let i = 0; i < target_anchor.length; i++) {
        target_anchor[i].classList.add('offset')
    }

    getCurrtentWindow()
    window.addEventListener('scroll', function() {
        getCurrtentWindow()
    })

    setTopbar_animation()

    function getCurrtentWindow() {
        let target_anchor = document.querySelectorAll('[target-anchor]')
        let minIndex = 0
        for (let i = 1; i < target_anchor.length; i++) {
            if (
                Math.abs(target_anchor[i].offsetTop - window.scrollY) <
                Math.abs(target_anchor[minIndex].offsetTop - window.scrollY)
            )
                //先假设第0个最小,开始遍历的offsetTOP，再比较 {
                minIndex = i
        }
        target_anchor[minIndex].classList.remove('offset')
        let id = target_anchor[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children //所有li包括自己

        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }

    function setTopbar_animation() {
        let liTags = document.getElementsByClassName('menuTigger')
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function(x) {
                x.currentTarget.classList.add('active')
            }
            liTags[i].onmouseleave = function(x) {
                x.currentTarget.classList.remove('active')
            }
        }
    }
}.call()
