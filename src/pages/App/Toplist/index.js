import React, { Component } from 'react'
import { Icon } from 'antd';
export default class Toplist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topList: []
        }
    }
    goList(id) {
        this.props.history.push('/toplist/' + id)
    }
    componentDidMount() {
        this.$http.get('/toplist').then(res => {
            console.log(res)
            this.setState({
                topList: res.data.data
            })
        })
    }
    render() {
        const el = this.state.topList.map((item, index) => {
            return (
                <li key={index} onClick={this.goList.bind(this, item.id)}>
                    <img src={item.picUrl} alt="" />
                    <div className="title">
                        <p className="top-title">{item.title}</p>
                        {
                            item.songList.map((son, i) => {
                                return <p key={son.number}>
                                    <span>{son.number}</span>
                                    <span className="song-title">{son.songName}</span>
                                    <span>-</span>
                                    <span>{son.singerName}</span>
                                </p>
                            })
                        }

                    </div>
                    <Icon type="right" />
                </li>
            )
        })
        return (
            <div className="toplist">
                <ul>
                    {el}
                </ul>
            </div>
        )
    }
}
