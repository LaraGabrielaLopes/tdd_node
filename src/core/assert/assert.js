function assert(value, description) {
    console.log(description)
    if(!value) {
        //throw new Error('Invalid Value')
        console.log('Invalid Value')
        return false
    } else {
        console.log('Success!')
        return true
    }
}

module.exports = assert