import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Index from './pages/Index/index.js';
import Tuijian from './pages/Tuijian/index.js'
import Fabu from './pages/Fabu/index.js'
import Xiaoxi from './pages/Xiaoxi/index.js'
import Geren from './pages/Geren/index.js'





class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Route exact path="/" component={Index}></Route>
          <Route exact path="/tuijian" component={Tuijian}></Route>
          <Route exact path="/fabu" component={Fabu}></Route>
          <Route exact path="/xiaoxi" component={Xiaoxi}></Route>
          <Route exact path="/geren" component={Geren}></Route>


          <div className="footer">
            <NavLink exact to="/" >
              <img src="http://www.huanqiuwu.com/mobile/static/images/mobile_footer_index_no.png" alt="加载" />
              <span>首页</span>
            </NavLink>
            <NavLink to="/tuijian">
              <img src="http://www.huanqiuwu.com/mobile/static/images/mobile_footer_tuijian_no.png" alt="加载" />
              <span>推荐</span>
            </NavLink>
            <NavLink to="/fabu">
              <img src="http://www.huanqiuwu.com/mobile/static/images/mobile_footer_msg_no.png" alt="加载" />
              <span>发布</span>
            </NavLink>
            <NavLink to="/xiaoxi">
              <img src="http://www.huanqiuwu.com/mobile/static/images/mobile_footer_fabu_no.png" alt="加载" />
              <span>消息</span>
            </NavLink>
            <NavLink to="/geren">
              <img src="http://www.huanqiuwu.com/mobile/static/images/mobile_footer_p_no.png" alt="加载" />
              <span>个人中心</span>
            </NavLink>
          </div>
        </div>
      </BrowserRouter>

    )
  }

}

export default App;
