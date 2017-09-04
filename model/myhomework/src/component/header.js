import React, { Component } from 'react';
import '../css/style.css';
import '../css/about.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class Header extends Component{
	constructor(){
		super();
		this.state={
			p:' oui will',
		}
	}
	remove=()=>{
		if(this.props.remove){
			this.props.remove();
		}
	}
//	changeText=()=>{
//		this.setState({
//			p:'say hello!'
//		})
//	}
	wheel=()=>{
		if(this.props.wheel){
			this.props.wheel();
		}
	}
	
	render(){
		let str=window.location.href;
		let name=str.split('/');
		let arr=name[name.length-1];
		let hehe = null;
		if(arr=='work'){
			hehe = null;
		}else{
			hehe = <p id="bigBoxtopbac" onWheel={this.wheel} 
			style={{left:this.props.n,color:this.props.name=='app'?'#000':'#1a1a1a'}}
			
			>
					 {this.state.p}
			</p>
		}
//		console.log(window.location.href+'')
    return (
    		<div>
  			<header>
				<a href="#" className="diff">oui will</a>
				<ul>
					<li onClick={this.remove}><Link to="/work">work</Link></li>
					<li onClick={this.remove}><Link to="/about">about</Link></li>
					<li onClick={this.remove}><Link to="/contact">contact</Link></li>
				</ul>
			</header>
			{hehe}
			 
		</div>
	    )
	  }
	}
export default Header;





				