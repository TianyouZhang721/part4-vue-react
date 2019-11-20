import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
import MapRoute from '../../routes/MapRoute'
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <NavLink to="/home/recommend">推荐</NavLink>
                    <NavLink to="/home/toplist">排行</NavLink>
                    <NavLink to="/home/search">搜索</NavLink>
                    
                </div>
                <div className="main">
                    <MapRoute routes={this.props.a}/>
                </div>
            </div>
        )
    }
}
