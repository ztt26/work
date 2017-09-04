import React, { Component } from 'react';
import './css/begin.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class Begin extends Component{
	constructor(){
		super();
		this.state={
			n:0,
			arr:[{id:'img1',pic:'img/b2.jpg'},
				{id:'img2',pic:'img/b1.jpg'},
				{id:'img3',pic:'img/b3.jpg'},
				{id:'img4',pic:'img/b4.jpg'},
				{id:'img5',pic:'img/b5.jpg'},
				{id:'img6',pic:'img/b6.jpg'},
				{id:'img7',pic:'img/b7.jpg'},
				{id:'img8',pic:'img/b8.jpg'},
				{id:'img9',pic:'img/b9.jpg'},
				
				]
		}
	}
	componentDidMount(){
		let {arr}=this.state;
			 this.timer = setInterval(() => { 
			 	if(arr.length>=8){
			 		arr.shift();
			     	this.setState({
			     		arr:arr
			     	})}
			 	if(arr.length<8){
			 		this.timer&&clearInterval(this.timer);
			 		this.timer = setInterval(
				      () => { 
				      	arr.shift();
				     	this.setState({
				     		arr:arr
				     	})
				      },
				     600
				    );
			 	}
			 	if(arr.length==1){
			 		clearInterval(this.timer);
			     	$('#first').css({
			     		display:'none'
			     	})
			     	$('#last').css({
			     		display:'block'
			     	})
			     	$('#last').find('img').eq(0).css({
						left:'-1%'
					})
			     	$('#last').find('img').eq(2).css({
						left:'67%'
					})
			     	$('#last').find('img').eq(0).animate({
						left:'-70%',
						transition:'0.8s',
					})
			     	$('#last').find('img').eq(1).animate({
						left:'-60%',
						transition:'1s',
					})
			     	$('#last').find('img').eq(2).animate({
						left:'-60%',
						transition:'0.8s',
					})
			     	 this.timer = setTimeout(() => {
			     	 	window.location.href="http://localhost:3000/app"
			     	 },1200)
			     	
			 	}
		      },
		     1400
		    );
		    
		
		 this.timer = setInterval(() => {
		 	$('#begin div').css({
		 		height:'100%'
		 	})
		 })
	}
//	history.push('/app')
	   
	
	   
	  
	render(){
//		let list2=this.state.arr.map((e,i)=>{
//			return <img src={e.pic} key={i} id={e.id}/>
//		})
		
		return(
			<div id="begin">
				<div id="first">
					<img src={this.state.arr[0].pic} id={this.state.arr[0].id}/>
				</div>
				<div id="last">
					<img src="img/b11.jpg" />
					<img src="img/b12.jpg" />
					<img src="img/b13.jpg" />
				</div>
			</div>
		)
	}
}
export default Begin;