import data from "@/assets/data.js"
import { getId } from "@/utils/GetId"
import { fetch, save } from "./UserStorage"

function addUser(val) {
    const result = fetch()
    const user = { ...val }
    user.id = getId()
    user.createAt = new Date()
    user.updateAt = new Date()
    result.push(user)
    save(result)
}
function editUser(val) {
    const result = fetch()
    for (let i = 0; i < result.length; i++) {
        if (result[i].id === val.id) {
            result[i] = val
            break
        }
    }
    save(result)
}
function sizeChange() {

}
export { addUser, editUser }