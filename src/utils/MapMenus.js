
//根据路径匹配菜单
function mapPathToMenus(path, menus) {
    for (const menu of menus) {
        for (const submenu of menu.children) {
            if (submenu.url === path) {
                return submenu
            }
        }
    }
}

//根据路径匹配菜单层级
function mapPathToBreadcrumbs(path, menus) {
    const breadcrumbs = []
    for (const menu of menus) {
        for (const submenu of menu.children) {
            if (submenu.url === path) {
                breadcrumbs.push({ name: menu.name, path: menu.url })
                breadcrumbs.push({ name: submenu.name, path: submenu.url })
            }
        }
    }
    return breadcrumbs
}
export { mapPathToMenus, mapPathToBreadcrumbs }