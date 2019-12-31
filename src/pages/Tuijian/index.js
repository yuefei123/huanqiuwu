import React, { Component } from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class Index extends Component {
    constructor(){
        super();
        this.state={
            data:["新房","二手房","租房"],
            xinfang:[],
            ershou:[],
            zufang:[]
        }
    }
    async componentDidMount() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className)=> {
                    return '<span class="' + className + '"><span>' + this.state.data[(index)] + '</span></span>';
                },
            },
        });
        var { data } = await this.$axios.get(this.$baseurl+'/list');
        var xinfang=[],
            ershou=[],
            zufang=[];
        data.data.map(ele=>{
            if(ele.type === "xinfang"){
                xinfang.push(ele);
            }else if(ele.type === "ershou"){
                ershou.push(ele);
            }else if(ele.type === "zufang"){
                zufang.push(ele);
            }
        })
        this.setState({
            xinfang,
            ershou,
            zufang
        })
    }
    render() {
        return (
            <div className="main">
                <div className="swiper-container">
                    <div className="swiper-pagination"></div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {this.state.xinfang.map(ele=>(
                            <div className="info" key={ele.id}>
                                <img src={ele.img} alt="daibiao"/>
                                <div className="text">
                                    <h3>{ele.title}</h3>
                                    <p><span>{ele.area}</span><b>{ele.money}</b></p>
                                    <div className="biaoqian">
                                        {ele.biaoqian.map((ele1,index1)=>
                                        (<span key={index1}>{ele1}</span>))}
                                    </div>
                                    <p>{ele.yushou}</p>
                                </div>
                            </div>))}
                        </div>
                        <div className="swiper-slide">
                            {this.state.ershou.map(ele=>(
                            <div className="info" key={ele.id}>
                                <img src={ele.img} alt="daibiao"/>
                                <div className="text">
                                    <h3>{ele.title}</h3>
                                    <p><i><span>{ele.fangjian}</span>|<span>{ele.mianji}</span>|<span>{ele.fangxiang}</span></i><b>{ele.money}</b></p>
                                    <p>{ele.area}</p>
                                </div>
                            </div>))}
                        </div>
                        <div className="swiper-slide">
                        {this.state.zufang.map(ele=>(
                            <div className="info" key={ele.id}>
                                <img src={ele.img} alt="daibiao"/>
                                <div className="text">
                                    <h3>{ele.title}</h3>
                                    <p><i>{ele.address} <span>{ele.fangjian}</span>|<span>{ele.mianji}</span>|<span>{ele.fangxiang}</span></i><b>{ele.money}</b></p>
                                    <p>{ele.area}</p>
                                    <div>{ele.fangshi}</div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Index)
