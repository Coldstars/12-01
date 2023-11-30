import data from '../assets/data'
const { userList } = data

const local_key = 'users'
function fetch() {
    const result = localStorage.getItem(local_key)
    if (result) {
        return JSON.parse(result)
    }
    return [...userList]
}
function save(users) {
    localStorage.setItem(local_key, JSON.stringify(users))
}
export { fetch, save }