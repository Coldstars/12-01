const data = {
    menus: [
        {
            "id": 1,
            "icon": "el-icon-Connection",
            "name": "系统总览",
            "url": '/home/System/SystemList',
            "children": [
                {
                    "id": 11,
                    "name": "核心技术",
                    "url": '/home/System/SystemList',
                },
                {
                    "id": 12,
                    "name": "往期作品",
                    "url": '/home/System/MyWorks',

                },

            ]
        },
        {
            "id": 2,
            "name": "系统管理",
            "icon": "el-icon-Crop",
            "url": '/home/User/UserList',
            "children": [
                {
                    "id": 21,
                    "name": "用户管理",
                    "url": '/home/User/UserList',
                },
                {
                    "id": 22,
                    "name": "部门管理",
                    "url": '/home/User/UserApartment',
                },
                {
                    "id": 23,
                    "name": "菜单管理",
                    "url": '/home/User/UserMenus',
                },
                {
                    "id": 24,
                    "name": "角色管理",
                    "url": '/home/User/UserRoles',
                }
            ]
        },
        {
            "id": 3,
            "name": "商品中心",
            "icon": "el-icon-User",
            "url": '/home/Store/StoreList',
            "children": [
                {
                    "id": 31,
                    "name": "商品类型",
                    "url": '/home/Store/StoreList',
                },
                {
                    "id": 32,
                    "name": "商品信息",
                    "url": '/home/Store/StoreInfo',

                }
            ]
        },
        {
            "id": 4,
            "name": "随便聊聊",
            "icon": "el-icon-ChatDotRound",
            "url": '/home/More/MoreList',
            "children": [
                {
                    "id": 41,
                    "name": "故事列表",
                    "url": '/home/More/MoreList',
                },
                {
                    "id": 42,
                    "name": "你的故事",
                    "url": '/home/More/MoreInfo',

                }
            ]
        }],
    userList: [
        {
            "id": 0,
            "userName": "商品列表",
            "realname": "商品",
            "cellphone": 14266336344,
            "enable": 0,
            "createAt": "2022-01-01T00:00:00.0002",
            "updateAt": "2022-01-01T00:00:00.0003"
        },
        {
            "id": 1,
            "userName": "商品列表",
            "realname": "商品",
            "cellphone": 14266336344,
            "enable": 1,
            "createAt": "2022-01-01T00:00:00.0002",
            "updateAt": "2022-01-01T00:00:00.0003"
        },
    ]
}
export default data