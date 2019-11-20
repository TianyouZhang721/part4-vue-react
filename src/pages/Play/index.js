import React, { Component } from 'react'
import { Button, Icon } from 'antd'
export default class Play extends Component {
    componentDidMount() {
        var id = this.props.match.params.id;
        var sid = this.props.match.params.sid;
        this.$http.get('/lyric', {
            params: {
                songid: sid
            }
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="container play">
                <div className="lyric"></div>
                <div className="btns">
                    <button>MV</button>
                    <button>
                        <Icon type="caret-right" />
                    </button>
                    <button>
                        <Icon type="like" />
                    </button>
                </div>
                <div className="play-btn">
                    <Button type="primary" shape="round">
                        下载歌曲
                    </Button></div>
            </div>
        )
    }
}
