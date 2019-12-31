import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            arr : []
        }
    }
    showToast(text){
        this.setState({
            arr : [...this.state.arr, {text, dt:new Date().getTime()}]
        }, ()=>{
            setTimeout(()=>{
                this.setState(state=>{
                    state.arr.splice(0, 1);
                    return state;
                })
            }, 3000);    
        });
    }
    componentDidMount(){
        this.$eventbus.on('showToast', this.showToast.bind(this));
    }
    render(){
        return (
            <div className="toast">
                <TransitionGroup>
                    {this.state.arr.map((item, ind)=>( 
                        <CSSTransition
                            key={item.dt}
                            timeout={500}
                            classNames={{
                                enterActive:'animated fadeIn',
                                exitActive:'animated fadeOut'
                            }}
                        >
                            <li> {item.text} </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }
}

export default Index;