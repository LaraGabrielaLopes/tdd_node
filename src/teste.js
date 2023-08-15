function assert(value) {
    if(!value) {
        throw new Error('Invalid Value')
    } else {
        console.log('Success!')
    }
}

assert(9 === 9)