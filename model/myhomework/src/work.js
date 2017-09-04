import React, { Component } from 'react';
import './css/work.css';
import Header from './component/header';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class Work extends Component{
	constructor(){
		super();
		
		this.state={
			n:0,
			data:[
					{	id:'pic1',
						id2:'photo1',
						lef:'Amour',
						rig:'will',
						bac:'#fad4ea',
						num:['img/img15.png','img/img14.png','img/img18.png','img/img19.png']
					},
					{
						id:'pic2',
						id2:'photo2',
						lef:'Wiivv',
						rig:'UN',
						bac:'#e5e5e5',
						num:['img/work5.png']
					},
					{
						id:'pic3',
						id2:'photo3',
						lef:'Union',
						rig:'Bu',
						bac:'#a3b5b7',
						num:['img/work1.png']
					},
					{	id:'pic1',
						id2:'photo4',
						lef:'Burton',
						rig:'W',
						bac:'#e3e3e3',
						num:['img/work12.png','img/work2.png','img/work3.png','img/work4.png']
					},
					{
						id:'pic3',
						id2:'photo5',
						lef:'ivv',
						rig:'Nic',
						bac:'#e3e3e3',
						num:['img/work7.png']
					},
					{	id:'pic1',
						id2:'photo6',
						lef:'ivv',
						rig:'Nice',
						bac:'#eef2f5',
						num:['img/work11.png','img/work8.png','img/work10.png','img/work9.png']
					}
			]
		}
	}
//	mousem=(ev)=>{
//		let onOff=false;
//		if(ev.clientY<document.documentElement.clientHeight/5){
//				onOff=true;
//				console.log(1)
//				$('.pict').css({
//					top:$('.pict').position().top-5
//				})
//			}
//			mousemove='';
//		}
//	mouseenter=(ev)=>{
//		if(ev.clientY<document.documentElement.clientHeight/6){
//			$('.pict').css({
//				top:$('.pict').position().top-5
//			})
//		}
//		if(ev.clientY<document.documentElement.clientHeight/3){
//			$('.pict').css({
//				top:$('.pict').position().top-5
//			})
//		}
//		if(ev.clientY<document.documentElement.clientHeight/2){
//			$('.pict').css({
//				top:$('.pict').position().top-5
//			})
//		}
//		
//	}
//	mouseenter=(ev)=>{
//		var l = ev.clientX-box.offsetWidth/2;
//		var t = ev.clientY-box.offsetHeight/2;
//		
//		$('.pict').css({
//			top:t,
//			left:l
//		})
//		
//	}
//	mousemove=(ev)=>{
//		let t=ev.clientY/document.documentElement.clientHeight;
//		let l=ev.clientX/document.documentElement.clientWidth;
//		$('.pict').css({
//			top:t*20,
//			left:l*20
//		})
//	}
	componentDidMount(){
		  window.scrollTo(0,0);
	}
	 wheel=(ev)=>{
	 	let {n}=this.state;
	 	let num=0;
	 	$('.pict').css({
			top:0,
			left:0
		})
// 	    if(this.pic.style.left.substring(0,2)=='0%'){ num=this.pic.style.left.substring(0,1)}
//			else{ num=-this.pic.style.left.substring(0,2)}
	  	if(ev.deltaY<0){
	  		if(n<=-400){
				n=-400
			}
//	  		console.log($('.pict').position().left)
//	  		console.log($('.pict').position().left-80)
	  		//console.log(document.documentElement.clientHeight)
	  	 $('.pict').find('img').css({
	  	 	opacity:0.3,
	  	 	transition:'1s'
	  	 })
	  	 $('.pict').css({
	  	 	left:$('.pict').position().left-300
	  	 })
	  	 $('.amour').css({
	  	 	left:$('.amour').position().left-80,
	  	 	transition:'0.5s',
	  	 	opacity:0.3
		 })
	  	 $('.will').css({
	  	 	left:$('.will').position().right+80,
	  	 	transition:'0.5s',
	  	 	opacity:0.3
		 })
	  	 setTimeout(()=>{
	  	 	  $('.pict').css({
		  	 	left:$('.pict').position().left+300
		  	 })
	  	 	 $('.pict').find('img').css({
		  	 	opacity:1
		  	 })
	  	 	 $('.amour').css({
		  	 	left:$('.amour').position().left+80,
		  	 	transition:'0.5s',
		  	 	opacity:1
			 })
	  	 	  $('.will').css({
		  	 	left:$('.will').position().right-80,
		  	 	transition:'0.5s',
		  	 	opacity:1
			 })
	  	 },500)
	  	 
	// 	 console.log(this.pic.style.left.substring(0,2)=='0%')
  			setTimeout(()=>{
				this.setState({
					n:n-100
				})
			},400)
		
	  		
		}
		else{
			if(n>=-100){
				n=-100
			}
			 $('.pict').find('img').css({
		  	 	opacity:0.3,
		  	 	transition:'1s'
		  	 })
			  	 $('.pict').css({
			  	 	left:$('.pict').position().left+300
			  	 })
			  	 $('.amour').css({
			  	 	left:$('.amour').position().left+80,
			  	 	transition:'0.5s',
			  	 	opacity:0.3
				 })
			  	 $('.will').css({
			  	 	left:$('.will').position().right-80,
			  	 	transition:'0.5s',
			  	 	opacity:0.3
				 })
			  	 setTimeout(()=>{
			  	 	  $('.pict').css({
				  	 	left:$('.pict').position().left-300
				  	 })
			  	 	 $('.pict').find('img').css({
				  	 	opacity:1
				  	 })
			  	 	  $('.amour').css({
				  	 	left:$('.amour').position().left-80,
				  	 	transition:'0.5s',
				  	 	opacity:1
					 })
			  	 	  $('.will').css({
				  	 	left:$('.will').position().right+80,
				  	 	transition:'0.5s',
				  	 	opacity:1
					 })
			  	 },600)
			setTimeout(()=>{
				this.setState({
					n:n+100
				})
			},400)
		}
  }
	render(){
		let big=this.state.data.map((e,i)=>{
			
			let small=e.num.map((a,i)=>{
									return <img src={a} key={i} />
								})
				return(<div key={i} className="photo" onMouseMove={this.mousemove} onWheel={this.wheel} style={{background:e.bac}}>
							<Header />
							<p id="amour" className="amour">{e.lef}</p>
							<p id="will"className="will">{e.rig}</p>
							<div id={e.id} className="pict">
								{small}
							</div>
						</div>)
				})
		return(
			<div id="work1">
				<div id="total" style={{left:this.state.n+'%'}} ref = {(elem)=>{this.pic= elem}}>{big}</div>
			</div>
		)
	}
}
export default Work;