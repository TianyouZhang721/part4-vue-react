import Login from '../pages/Login'
import App from '../pages/App'
import Recommend from '../pages/App/Recommend';
import Toplist from '../pages/App/Toplist';
import Searchlist from '../pages/App/Searchlist';
import TopList from '../pages/TopList';
import Play from '../pages/Play';
//声明路由表
const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/toplist/:id",
        component: TopList
    },
    {
        path: "/play/:id/:sid",
        component: Play
    },
    {
        path: "/",
        component: App,
        children: [
            {
                path: "/home/recommend",
                component: Recommend
            },
            {
                path: "/home/toplist",
                component: Toplist
            },
            {
                path: "/home/search",
                component: Searchlist,
            },
            {
                from: "/",
                to: "/home/recommend"
            }
        ]
    },
    {
        to: "/",
        from: "/"
    }
]
export default routes