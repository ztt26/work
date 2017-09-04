import React, { Component } from 'react';
import './css/about.css';
import Header from './component/header';
import $ from 'jquery';
import AboutLi from './component/AboutLi';
import Whiteblack from './component/whiteblack';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class About extends Component{
	constructor(){
		super();
		this.state={
			m:130,
			n:0,
			name:'about',
			data:{
				title1:'A full service digital',
				title2:'branding agency in',
				title3:'San Diego & Paris.'
			},
			li:[		'img/a1.png',
					'img/a2.png',
					'img/a3.png',
					'img/a4.png',
					'img/a5.png',
					'img/a6.png',
					'img/a7.png',
					'img/a8.png',
					'img/a9.png'
			],
			p:'The name Oui Will was inspired by a European aesthetic and American can-do spirit. We hail from California, Colorado, Paris, Los Angeles, Oslo, and Berlin, united by the same intention: to create remarkably beautiful things that make an impact, shape culture and connect people.',
			p3:'We understand that the exchange and interaction between brand and consumer is constantly evolving. We strive to be an integral part of this evolution, while continuing to diligently serve the long-term vision of the brands with whom we partner.',
			p3r:'These partnerships transcend conversations, meetings and production schedules. Oui Will becomes an extension of your team, achieving a balance between our methodology and yours.',
			p4:'From local to international, new to established,our clients all have one thing in common –they think differently.',
			h:['Our philosophy','aligns with the','way we think','about design.'],
			p6:'We believe that our job as designers comes with a greater responsibility than just defining client goals and creating a strategy to fulfill.We embrace our commitment to helping our clients set higher goals by innovating technology. We look past the problem and solution to explore the unchartered potential of every client and the vast possibilities with modern technology.  We believe your brand should be precisely what you imagined - and even more so.',
			h4:['Guillaume Hamon','Chelsea Flaming'],
			sp:['Creative Director - Digital','Creative Director - Brand Strategy']
		}
	}
	componentDidMount(){
		window.addEventListener('scroll', this.scroll);
		window.addEventListener('wheel', this.wheel5);
		window.scrollTo(0,0);
		
	}
	componentWillmount(){
		 window.removeEventListener('scroll', this.scroll);
		 window.addEventListener('wheel5', this.wheel);
	}
	scroll=()=>{
		
		if($('#about2')[0]){
			console.log(111)
			if($('#about2').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
			$('#about2').animate({
				top:-20
			},1000,'swing');
			$('#about2').find('img').css({
				opacity:1
			})	
		}
			if($('#about4').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
				$('#about4').find('ul').slideDown(6000);
			};
		}
		
	}
	wheel5=(ev)=>{
		if($('#about5')[0]){
			if($('#about5').offset().top<=$(window).innerHeight()+ $(window).scrollTop()||$('#about6img').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
				if(ev.deltaY<0){
					this.setState({
						n:this.state.n+1
					})
					if(this.state.n>=100){
						this.state.n=100
					}
				}else{
					this.setState({
						n:this.state.n-1
					})
					if(this.state.n<=-0){
						this.state.n=0
					}
				}
			}
		}
	}
	wheel=(ev)=>{
  	if(ev.deltaY<0){
		this.setState({
			m:this.state.m+1
		})
	}else{
		this.setState({
			m:this.state.m-1
		})
	}	
  }
	mouseover=()=>{
		$('#about7lef').find('div').css({
			display:'block',
		});
		$('#about7lef').find('img').css({
			width:'563px',
			height:'769px',
			top:-25,
			left:-25,
			opacity:0.95
		})
	}
	mouseout=()=>{
		$('#about7lef').find('div').css({
			display:'none',
		});
		$('#about7lef').find('img').css({
			width:'513px',
			height:'719px',
			top:0,
			left:0,
			opacity:1
		})
	}
	mouseover1=()=>{
		$('#about7rig').find('div').css({
			display:'block',
		});
		$('#about7rig').find('img').css({
			width:'563px',
			height:'769px',
			top:-25,
			left:-25,
			opacity:0.95
		})
	}
	mouseout1=()=>{
		$('#about7rig').find('div').css({
			display:'none',
		});
		$('#about7rig').find('img').css({
			width:'513px',
			height:'719px',
			top:0,
			left:0,
			opacity:1
		});
	}
	render(){ 
		let {li}=this.state;
		let list1= li.map((e,i)=>{
		     let data = {
		        key:i,
		       	e:e
		      }
		      return <AboutLi {...data} />
	});
    return (
      <div id="about" onScroll={this.scroll}>
      	<div id="about1">
      		<Header remove={this.remove}/>
			<div id="about1int">
				<p>
					<span>{this.state.data.title1}</span>
					<span>{this.state.data.title2}</span>
					<span>{this.state.data.title3}</span>
				</p>
			</div>
		</div>
		<div id="aboutlef">
			<p>
				{this.state.p}
			</p>
		</div>
		<div id="aboutrig"><img src="img/about-1.jpg"/></div>
		<div id="about2"><img src="img/about-2.jpg"/></div>
		<div id="about3" onWheel={this.wheel} >
			<div id="about3lef" style={{top:this.state.m}}><img src="img/about-3.jpg"/></div>
			<div id="about3rig">
				<h1>Methodology</h1>
				<p>
					{this.state.p3}
				</p>
				<p>
					{this.state.p3r}
				</p>
			</div>
		</div>	
		<div id="about4">
			<p>OUR CLIENTS</p>
			<p>
				{this.state.p4}
			</p>
			<ul>
				{list1}
			</ul>
		</div>
		<div id="about5" onWheel={this.wheel5} style={{top:this.state.n}}>
			<img src="img/about-office.jpg"/>
		</div>
		<div id="about6">
			<div id="about6word">
				<h4>
					<p>{this.state.h[0]}</p> 
					<p>{this.state.h[1]}</p>
					<p>{this.state.h[2]}</p>
					<p>{this.state.h[3]}</p>
				</h4>
			</div>
			<div id="about6img" onWheel={this.wheel5} style={{top:this.state.n}}>
				<img src="img/img27.jpg"/>
			</div>
			<div id="about6bot">
				<div id="about6botlef"><img src="img/img28.jpg"/></div>
				<div id="about6botrig">
					<p>
						{this.state.p6}
					</p>
				</div>
			</div>
		</div>
		<div id="about7">
			<div id="about7int">
				<h1>Meet the founders</h1>
				<div id="about7lef" onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
					<img src="img/about-guillaume.jpg"/>
					<div>
						<h4>this.state.h4[0]</h4>
						<span>this.state.sp[0]</span>
					</div>
				</div>
				<div id="about7rig" onMouseOver={this.mouseover1} onMouseOut={this.mouseout1}>
					<img src="img/about-chelsea.jpg"/>
					<div>
						<h4>this.state.h4[1]</h4>
						<span>this.state.sp[1]</span>
					</div>
				</div>
			</div>
		</div>
		<div id="about8">
			<p>Multicultural perspective. American can-do spirit</p>
			<p>
				Become part of the global<br />
				team at Oui Will.
			</p>
			<a href="#">
				<span>Drop us a line</span>
				<div>
					<img src="img/img6.svg" id="imgShow" />
					<div id="imgHide">
						<img src="img/img6.svg"/>
					</div>   
				</div>
			</a>
		</div>
		<div id="about9">
			<Whiteblack />
		</div>
			<div id="aboutfooter">
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
export default About;