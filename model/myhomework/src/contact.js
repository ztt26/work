import React, { Component } from 'react';
import './css/contact.css';
import Header from './component/header';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class Contact extends Component{
	constructor(){
		super();
		this.state={
			p:'say hello!',
			title:['USA','France'],
			content:[
			'3077 N Park Way #107',
			'131 Avenue d’Italie',
			'San Diego CA, 92104',
			'75013 Paris'
			],
			m:0,
			n:1100,
			r:-93
		}
	}
	
	componentDidMount(){
		window.addEventListener('scroll', this.scroll);
		$('#contact1').find('img').animate({
			opacity:1
		})
		  window.scrollTo(0,0);
	}
	componentWillmount(){
		 window.removeEventListener('scroll', this.scroll);
	}
	remove=()=>{
		window.removeEventListener('scroll', this.scroll);
	}
	 wheel=(ev)=>{
  	if(ev.deltaY<0){
		this.setState({
			m:this.state.m-1,
			n:this.state.n-1,
			r:this.state.r-1
		})
	}else{
		this.setState({
			m:this.state.m+1,
			n:this.state.n+1,
			r:this.state.r+1
		})
	}
	
  }
	render(){
//		let data={
//			p:this.state.p,
//			changeText:this.changeText
//		}
		return(
			<div>
				<Header remove={this.remove}/>
				<div id="contact1">
				<img src="img/picbig1.png"/>
				<img src="img/picbig2.png"/>
				<img src="img/picbig3.png"/>
				</div>
				<div id="contact2"  onWheel={this.wheel}>
					<div id="contact2lef1">
						<h1>New Business</h1>
						<p>
							+1 619 988 5722<br />
							biz@ouiwill.com
						</p>
					</div>
					<div id="contact2lef2">
						<h1>General Inquiries</h1>
						<p>
							contact@ouiwill.com
						</p>
					</div>
					<div id="contact2rig"  style={{right:this.state.m}}>
						oui
					</div>
				</div>
				<div id="contact3" onWheel={this.wheel} style={{top:this.state.n}}>
					<img src="img/屏幕快照 2017-08-01 下午7.59.09.png" />
				</div>
				<div id="contact4" onWheel={this.wheel}>
					<img src="img/contact-3077.jpg" style={{top:this.state.r}}/>
					<div id="contact4rig" >will</div>
					<div id="contact4lef">
						<h1>Locations</h1>
						<div className="contact4bot">
							<h4>{this.state.title[0]}</h4>
							<p>
								<em>{this.state.content[0]}</em>
								<em>{this.state.content[1]}</em>
								<em>{this.state.title[0]}</em>
							</p>
							<p>Closed</p>
						</div>
						<div className="contact4bot">
							<h4>{this.state.title[1]}</h4>
							<p>
								<em>{this.state.content[2]}</em>
								<em>{this.state.content[3]}</em>
								<em>{this.state.title[1]}</em>
							</p>
							<p>Closed</p>
						</div>
					</div>
				</div>
				<div id="contactfooter">
					<p> 
						Don’t be shy,
						<a href="#">
							say hi!
						</a>
					</p>
				</div>
			</div>
		)
	}
}
export default Contact;