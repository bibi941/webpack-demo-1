window.Model = function(options) {
    let resourceName = options.resourceName
    return {
        init: function() {
            var APP_ID = '0SWnlB3MG4l9qlwGbDyIK0u0-gzGzoHsz'
            var APP_KEY = 'DYXIwmP1bydIyc24FE8VCb4V'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        get: function() {
            var query = new AV.Query(resourceName)
            return query.find() //promise
        },
        save: function(name, content) {
            var Data = AV.Object.extend(resourceName)
            var data = new Data()
            return data.save(object)
        }
    }
}
