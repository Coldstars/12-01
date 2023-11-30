function getId() {
    return Number(Math.random().toString().substr(2, 6) + Date.now().toString())
}
export { getId }