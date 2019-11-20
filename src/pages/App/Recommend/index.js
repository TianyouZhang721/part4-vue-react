import React, { Component } from 'react'
import { Carousel } from 'antd';
export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: [],
            diantaiList: []
        }
    }


    componentDidMount() {
        this.$http.get('/recommend').then(res => {
            console.log(res)
            this.setState({
                bannerList: res.data.data.slider,
                diantaiList: res.data.data.radioList
            })
        })
    }
    
    render() {
        const el = this.state.bannerList.map((item, index) => {
            return <div key={index}>
                <img src={item} alt=""/>
            </div>
        })
        const el2 = this.state.diantaiList.map((item, index) => {
            return <div className="single" key={index}>
                <img src={item.picUrl} alt=""/>
                <p>{item.title}</p>
            </div>
        })
        return (
            <div className="recommend">
                <div className="banner">
                    <Carousel autoplay>
                        {el}
                    </Carousel>
                </div>
                <h3>电台</h3>
                <div className="diantai">
                    {el2}
                </div>
            </div>
        )
    }
}
