import React, { Component } from 'react';
import './index.scss'
import { withRouter,NavLink } from 'react-router-dom';

class Index extends Component {
    componentDidMount(){
        if(!localStorage.getItem("user")){
            this.props.history.push('/login');
        }
    }
    click(){
        localStorage.removeItem("user");
        this.props.history.push('/login')
    }
    render(){
        var user = localStorage.getItem("user");
        return(
            <div className="main">
                <div className="header">
                    <div className="top">
                        <img src="http://www.huanqiuwu.com/mobile/static/images/mod/tel.png" alt="kefu"/>
                        <img onClick={()=>this.click()} src="http://www.huanqiuwu.com/mobile/static/images/mod/exit.png" alt="signOut"/>
                    </div>
                    <div className="info">
                        <div className="touxiang">
                            <img src="http://www.huanqiuwu.com/api/avatar/show.php?username=z18879798438&size=large&time=1" alt="touxiang"/>
                        </div>
                        <div className="text">
                            <p>z{user}</p>
                            <p>微信用户</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="nav">
                        <li>
                            <NavLink to="/login">
                                <img src="/images/editprofile.png" alt="资料管理"/><br/>
                                资料管理
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <img src="/images/myfavor.png" alt="我的收藏"/><br/>
                                我的收藏
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <img src="/images/mypoint.png" alt="我的积分"/><br/>
                                我的积分
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <img src="/images/myshop.png" alt="我的店铺"/><br/>
                                我的店铺
                            </NavLink>
                        </li>
                    </div>
                    <div className="nav1">
                        <li>
                            <NavLink to="/login">
                            <img src="/images/ershou.png" alt="资料管理"/><br/>
                            二手管理
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                            <img src="/images/chuzu.png" alt="我的收藏"/><br/>
                            出租管理
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <img src="/images/message.png" alt="我的积分"/><br/>
                                站内信息
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <img src="/images/advice.png" alt="我的店铺"/><br/>
                                意见反馈
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <img src="/images/renzheng.png" alt="我的店铺"/><br/>
                                认证中心
                            </NavLink>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Index)
