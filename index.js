module.exports = serial

function serial(list, iterator, callback) {
    list = list.slice()

    ;(function loop(err) {
        if (err) {
            return callback && callback(err)
        }

        var item = list.shift()

        if (!item) {
            return callback(null)
        }

        iterator(item, loop)
    }())
}
