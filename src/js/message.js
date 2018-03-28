! function () {
    let view = View('section.message')
    let model = Model({resourceName:'Message'})
    
    let controller = {
        view: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.messageList = document.querySelector('#messageList')
            this.form = document.querySelector('#postMessageForm')
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.get().then(function (message) {
                    let array = message.map(item => item.attributes) //所有数据都在aiitributes里面
                    array.forEach(item => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`
                        this.messageList.appendChild(li)
                    })
                    return AV.Object.saveAll(message)
                })
                .then(
                    function (message) {
                        // 更新成功
                    },
                    function (error) {
                        // 异常处理
                        alert('玄学问题，改天再来好吧')
                        console.log(error)
                    }
                )
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.undatePage()
            })
        },
        undatePage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save({name:name,content:content}).then(
                function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}:${
                        object.attributes.content
                    }`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                },
                function (error) {
                    console.log(error)
                }
            )
        }
    }
    controller.init(view, model)
}.call()

