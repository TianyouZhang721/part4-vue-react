import React, { Component } from 'react'
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom'

export default class MapRoute extends Component {
    // [
    //     {
    //         path: "/home/homepage",
    //         component: Homepage
    //     },
    //     {
    //         path: "/home/cart",
    //         component: Cart
    //     },
    //     {
    //         path: "/home/my",
    //         component: My
    //     }
    // ]
    render() {
        return (
            <Switch>
                {
                    this.props.routes.map(Item => {
                        return Item.path ? (
                            <Route
                                key={Item.path}
                                path={Item.path}
                                // component={Item.component}
                                render={(props) => {
                                    return Item.auth ? (
                                        localStorage.getItem("id") ? (
                                            <Item.component {...props} a={Item.children} />
                                        ) : (
                                                <Redirect to="/login" />
                                            )
                                    ) : (
                                            <Item.component {...props} a={Item.children} />
                                        )
                                }}
                            />
                        ) : (
                                <Redirect key={Item.from} to={Item.to} />
                            )
                    })
                }

            </Switch>
        )
    }
}
