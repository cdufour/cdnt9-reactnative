function generateRandomId(start, end) {
    return Math.floor((Math.random() * end) + start)
}

export { generateRandomId }