import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import BScroll from 'better-scroll'
export default class TopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            info: {},
            time: "",
            start: 0,
            end: 20,
            el: "",
            pull: "上拉加载"
        }
        this.rrr = this.rrr.bind(this)
    }

    componentDidMount() {
        let id = this.props.match.params.id
        this.$http.get('/songlist?id=' + id).then(res => {
            console.log(res)
            this.setState({
                list: res.data.data.songList,
                info: res.data.data.topInfo,
                time: res.data.data.updateTime
            }, () => {
                this.rrr(this.state.start, this.state.end)
                let bs = new BScroll(this.refs.wrapper, {
                    probeType: 2,
                    click: true,
                    tap: true
                })
                console.log(bs)
                var _this = this
                bs.on('scroll', function() {
                    if (this.y < this.maxScrollY - 40) {
                        console.log(1)

                        _this.setState({
                            pull: "释放加载",
                            // start: _this.state.start+=20,
                            // end: _this.state.end+=20
                        })
                    }
                })
                bs.on('scrollEnd', function() {
                    if (_this.state.pull == "释放加载") {
                        _this.rrr(0, _this.state.end+20)
                    }
                })
            })
        })
    }
    play(id, sid) {
        console.log(id, sid)
        this.props.history.push(`/play/${id}/${sid}`)
    }
    rrr(start, end) {
        const el = this.state.list.slice(start, end).map((item, index) => {
            return (
                <li key={index} onClick={this.play.bind(this, item.songMid, item.songId)}>
                    <span>{index+1}</span>
                    <div>
                        <p>{item.songName}</p>
                        <p className="singer">{item.singer[0].singerName}</p>
                    </div>
                    <Icon type="cloud-download" />
                </li>
            )
        })
        console.log(start, end)
        this.setState({
            el,
            end,
            pull: "上拉加载"
        })
    }
    render() {
        console.log('render')
        console.log(this.state.el)
        // const el = this.state.list.slice(this.state.start, this.state.end).map((item, index) => {
        //     return (
        //         <li key={index}>
        //             <span>{index+1}</span>
        //             <div>
        //                 <p>{item.songName}</p>
        //                 <p className="singer">{item.singer[0].singerName}</p>
        //             </div>
        //             <Icon type="cloud-download" />
        //         </li>
        //     )
        // })
        return (
            <div className="container" ref="wrapper">
                <div className="wrapper">
                    <div className="top">
                        <p>{this.state.info.listName}</p>
                        <p>更新时间: {this.state.time}</p>
                        <Button type="primary" shape="round">
                            <Icon type="caret-right" />
                        </Button>
                    </div>
                    <div className="list">
                        <p>排行榜 共100首</p>
                        <ul>
                            {
                                this.state.el
                            }
                        </ul>
                    </div>
                    <p className="pullUp">{this.state.pull}</p>
                </div>
            </div>
        )
    }
}
