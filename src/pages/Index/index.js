import React, { Component } from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';

class Index extends Component {
    render(){
        return(
            <div className="main">
                首页
            </div>
        );
    }
}

export default withRouter(Index)
