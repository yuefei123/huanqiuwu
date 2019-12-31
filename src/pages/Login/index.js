import React, { Component } from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import {NavBar,Icon} from 'antd-mobile'

class Index extends Component {
    constructor(){
        super();
        this.state={
            str:""
        }
    }
    async componentDidMount(){
        this.cap_refs();
    }
    async cap_refs(){
        var {data} = await this.$axios.get(this.$baseurl+'/svgcaptcha?'+new Date().getTime());
        this.refs.span1.innerHTML = data.data;
        this.refs.yzm1.value = data.text;
        localStorage.setItem("cap_token",data.captcha)
    }
    click(e){
        e.preventDefault();
        var reg=/^(1|\+861)[3-8]{1}\d{9}$/
        if(!this.refs.phone.value){
            this.$eventbus.emit("showToast","请输入你的手机号");
        }else{
            if(!reg.test(this.refs.phone.value)){
                this.$eventbus.emit("showToast","手机格式不正确");
            }else{
                var str="";
                for(var i=0;i<6;i++){
                    str+=parseInt(Math.random()*10);
                }
                console.log(str);
                this.setState({
                    str
                })
                var time = 60;
                this.timer=setInterval(()=>{
                    this.refs.yzm.innerHTML="重新发送("+time+"秒)";
                    time--;
                    if(time<0){
                        this.refs.yzm.innerHTML="重新发送";
                        this.setState({
                            str:""
                        })
                        clearInterval(this.timer);
                    }
                },1000)
            }
        }
    }
    submit(e){
        e.preventDefault();
        var reg=/^(1|\+861)[3-8]{1}\d{9}$/;
        if(!this.refs.phone.value){
            this.$eventbus.emit("showToast","请输入你的手机号");
        }else if(!reg.test(this.refs.phone.value)){
            this.$eventbus.emit("showToast","手机格式不正确");
        }else if(!this.refs.yzm2.value){
            this.$eventbus.emit("showToast","请输入短信验证码");
        }else if(this.refs.yzm2.value !== this.state.str){
            this.$eventbus.emit("showToast","短信验证码不正确");
        }else{
            this.$eventbus.emit("showToast","登录成功");
            clearInterval(this.timer);
            localStorage.setItem("user",this.refs.phone.value)
            this.props.history.push('/geren');
        }
    }
    render(){
        return(
            <div className="main">
                <NavBar
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.go(-1)}
                ></NavBar>
                <div className="logo">
                    <img src="http://hainan.huanqiuwu.com/mobile/image/huanqiuwu_logo.png" alt="logo"/>
                </div>
                <form onSubmit={e=>this.submit(e)}>
                    <input ref="phone" placeholder="请输入手机号"/>
                    <input ref="yzm1" placeholder="验证码"/>
                    <span ref="span1" onClick={()=>this.cap_refs()}></span>
                    <input ref="yzm2" placeholder="请输入验证码"/>
                    <button ref="yzm" onClick={e=>this.click(e)}>获取验证码</button>
                    <input className="login" type='submit' value='登录'/>
                </form>
            </div>
        );
    }
}

export default withRouter(Index)
