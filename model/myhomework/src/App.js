import React, { Component } from 'react';
import './css/style.css';
import $ from 'jquery';
import LiModel from './component/LiModel';
import Header from './component/header';
import Whiteblack from './component/whiteblack';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';


//$(window).scroll(function(){
//		if($('#bigBox3').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
//			$('#bigBox3').find('ul').css({
//				display:'block',
//				opacity:1
//			})
//		}
//	})
//	$(window).scroll(function(){
//		if($('#bigBox4').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
//			$('#bigBox4').find('#bigBox4bot').css({
//				display:'block',
//				opacity:1,
//				top:0
//			})
//		}
//	});
//	$(window).scroll(function(){
//		if($('#bigBox7').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
//			let div2=`<span>oui</span>
//						<div>
//							<h4>Paris</h4>
//							<p>
//								131 Avenue d’Italie<br />
//								75013 PARIS<br />
//								FRANCE
//							</p>
//						</div>`
//			$('#bigBox7lef').append(div2);
//			$('#bigBox7lef').css({
//				width:'50%'
//			});
//			$('#bigBox7rig').css({
//				width:'50%'
//			})
//		}
//	});


class App extends Component {
	constructor(){
		super();
		this.state={
			name:'app',
			n:0,
			m:130,
			t:0,
			b:383,
			//bigBoxtop:0,
			arr:[
				{	
					num:'01',
					id:1,
					pic:'img/s1.png',
					title:'Brand Strategy',
					middle:'Brand Strategy . Messaging . Identity Systems . Brand Collateral . Campaigns',
					word:'To truly innovate, you have to do more than increase conversion and wow your audience. Innovation simultaneously requires a global view of your digital product and the parsing of every user interaction. It means understanding what the user needs before they think they need it, and surprising them in the attention to detail. It means solving internal pain-points, automating processes, and turning complicated into simple.',
				},
				{
					num:'02',
					id:2,
					pic:'img/s2.png',
					middle:'UI & UX . eCommerce . Web Design . Web Apps',
					title:'Digital Innovation',
					word:'No matter how differentiated your brand, in a world crowded with options,it can be difficult to stand out. At Oui Will,we help emerging and established companies understand who they are,why they’re different,and how to communicate by creating integrated systems of expression that inspire the right people in the right places.'
				},
				{	num:'03',
					id:3,
					pic:'img/s3.png',
					title:'Content Creation',
					middle:'Story Telling . Video . Product Photography . Lifestyle Photography',
					word:'The content of your site, of your campaign, of your social channels all play a role in creating a consistent brand narrative. From product photography to branded film, all the assets we create work together to create a seamless and engaging experience from one platform to the next.'
				},
				{	num:'04',
					id:4,
					pic:'img/s4.png',
					title:'Integrated Marketing',
					middle:'Campaigns . Social Strategy . Reporting',
					word:'You have a compelling brand story, but how do you get it in front of the people that matter the most? From collaborations to  fully integrated campaigns, we create marketing strategies and execute initiatives that meaningfully deepen the customer relationship, increasing traffic, conversion, and ROI.'
				}],
			len:1
			
		}
	}
	componentDidMount(){
		$('#bigBoxtop').fadeIn('slow');
		let big = this.refs.bigBoxdiv;
		//console.log(document.documentElement.clientHeight-big.offsetTop)
		$('#bigBoxtop').height(document.documentElement.clientHeight);
		var bigBoxdiv=document.getElementById('bigBoxdiv');
		var bigBoxtop=document.documentElement.clientHeight-bigBoxdiv.offsetTop;
		$('#bigBoxdiv').height(bigBoxtop);
		//var bigBoxtop=document.getElementById('bigBoxtop');
		window.addEventListener('scroll', this.scroll);
		  window.scrollTo(0,0);
//		if(window.onResize){
//			bigBoxtop.addEventListener('resize', this.resize.bind(this));
//		}
	}
	
	
	
  wheel=(ev)=>{
  	if(ev.deltaY<0){
		this.setState({
			n:this.state.n-5,
			m:this.state.m-5
			
		})
		if(this.state.m<60||this.state.n<-45){
			this.setState({
				n:-45,
				m:60
			})
		}
	}else{
		this.setState({
			n:this.state.n+5,	
			m:this.state.m+5
		})
		if(this.state.m>180||this.state.n>125){
			this.setState({
				n:125,
				m:180
			})
		}
	}
  }
  wheel2=(ev)=>{
  	if(ev.deltaY<0){
		this.setState({
			t:this.state.t-3,
			b:this.state.b-3,
		})
		if(this.state.t<-50||this.state.b<240){
			this.setState({
				t:-50,
				b:240
			})
		}
	}else{
		this.setState({
			t:this.state.t+3,
			b:this.state.b+3,
		})
		if(this.state.t>50||this.state.b>330){
			this.setState({
				t:50,
				b:330
			})
		}
	}
  }
  mouseover=()=>{
	$('#bigBox4botdiv').css({
		display:'block'		
	});
	$('#bigBox4bota').find('img').css({
			width:'600px',
			height:'700px',
			left:-20,
			top:-20
	});
}
  mouseout=()=>{
	$('#bigBox4botdiv').css({
		display:'none'		
	});
	$('#bigBox4bota').find('img').css({
			width:'550px',
			height:'664px',
			left:0,
			top:0
	});
}
  mouseenter=()=>{
  	$('#box4rigdiv1').css({
		display:'block'		
	});
	$('#box4riga').find('img').css({
			width:'600px',
			height:'350px',
			left:-20,
			top:-20
	});
  }
  mouseleave=()=>{
  	$('#box4rigdiv1').css({
		display:'none',
		transform:'1s'
	});
	$('#box4riga').find('img').css({
		width:'546px',
		height:'309px',
		left:0,
		top:0
	});
  }
  over=()=>{
  	$('#box4rigdiv2').css({
		display:'block'		
	});
	$('#box4riga2').find('img').css({
			width:'600px',
			height:'350px',
			left:-20,
			top:-20
	});
  }
  out=()=>{
  	$('#box4rigdiv2').css({
		display:'none',
	});
	$('#box4riga2').find('img').css({
			width:'546px',
			height:'309px',
			left:0,
			top:0
	});
  }
  amouseover=()=>{
		$('#imgShow').animate({
			left:0,
			top:0
		});
		$('#imgHide').animate({
			left:18,
			top:0
		});
  }
  amouseout=()=>{
  	$('#imgHide').css({
		left:0,
		top:0
	});
	$('#imgShow').css({
		left:-18,
		top:0
	});
  }
  amouseover2=()=>{
		$('#imgShow2').animate({
			left:0,
			top:0
		});
		$('#imgHide2').animate({
			left:18,
			top:0
		});
  }
  amouseout2=()=>{
  	$('#imgHide2').css({
		left:0,
		top:0
	});
	$('#imgShow2').css({
		left:-18,
		top:0
	});
  }
  amouseover3=()=>{
		$('#imgShow3').animate({
			left:0,
			top:0
		});
		$('#imgHide3').animate({
			left:18,
			top:0
		});
  }
  amouseout3=()=>{
  	$('#imgHide3').css({
		left:0,
		top:0
	});
	$('#imgShow3').css({
		left:-18,
		top:0
	});
  }
changeNum = (num) => {
    this.setState({
    		len:num
    })
}
	scroll=()=>{
		if($('#bigBox3').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
			$('#bigBox3').find('ul').css({
				display:'block',
				opacity:1
			})
		};
		if($('#bigBox4').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
			$('#bigBox4').find('#bigBox4bot').css({
				display:'block',
				opacity:1,
				top:0
			})
		};
		if($('#bigBox4bot').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
			console.log(111)
			$('#bigBox4bot').fadeIn(2000)
		};
	}


//resize=()=>{
////	var hei=document.documentElement.clientHeight ;
////	$('#bigBoxtop').height(hei);
////	var bigBoxdiv=document.getElementById('bigBoxdiv');
////	//var bigBoxtop = 0;
////	//bigBoxtop=document.documentElement.clientHeight-bigBoxdiv.offsetTop;
//////	console.log(bigBoxtop)
////	$('#bigBoxdiv').height(bigBoxtop);
////	
////	let divtop1=$('#bigBoxdiv').height()-$('#pack').height();
////	let divtop2=divtop1/2;
////	if(divtop2<0){
////		divtop2=0;
////	}
////	$('#pack').css('top',divtop2);
////	$('#bigBoxtopbac').css('top',(hei-385)/2);
////	});
//	var hei=document.documentElement.clientHeight;
//	$('#bigBoxtop').height(hei);
//	var bigBoxdiv=document.getElementById('bigBoxdiv');
//	var bigBoxtop=document.documentElement.clientHeight-bigBoxdiv.style.top;
//	$('#bigBoxdiv').height(bigBoxtop);
//	let divtop1=$('#bigBoxdiv').height()-$('#pack').height();
//	let divtop2=divtop1/2;
//	if(divtop2<0){
//		divtop2=0;
//	}
//	$('#pack').css('top',divtop2);
//	$('#bigBoxtopbac').css('top',(hei-385)/2);
//	}
//componentWillUnmount() {
//  window.removeEventListener('scroll', this.scroll.bind(this));
//  //window.removeEventListener('resize', this.resize.bind(this));
//}
remove=()=>{
	window.removeEventListener('scroll', this.scroll);
}
  render() {
  	
  	let {arr,len}=this.state;
  	len=len-1;
	let list = arr.map((e,i)=>{
	     let data = {
	        key:i,
	        title:e.title,
	        word:e.word,
	        pic:e.pic,
	        num:e.num,
	        id:e.id,
	        changeNum:this.changeNum
	      }
	      return <LiModel {...data} />
	});
	   
    return (
     <div id="bigBox">
			<div id="bigBoxtop">
				<Header remove={this.remove}/>
				<p id="bigBoxtopbac" onWheel={this.wheel} style={{left:this.state.n}}>
					 oui will
				</p>
				<div id="bigBoxdiv" style={{top:this.state.m}}>
					<div id="pack">
						<p>Precisely what you</p>
						<p>imagined your brand</p>
						<p>could be, only more so.</p>
						<p className="diff2">BRAND STRATEGY & DIGITAL INNOVATION</p>
					</div>
				</div>
			</div>
			<div id="bigBoxmid">
				<img src="img/img1.jpg"/>
				<div id="bigBoxmidrig">
					<p>We create award-winning brands and strategically designed experiences for a digitally driven world.</p>
					<p>oui will</p>
				</div>
			</div>
			<div id="bigBox3">
				<div id="bigBox3lef">
					<img src={this.state.arr[len].pic} />
				</div>
				<ul>
					{list}
				</ul>
				<div id="bigBox3rig">
					<div>
						<span>{this.state.len}</span>
						<h2>{this.state.arr[len].title}</h2>	
						<p>
							{this.state.arr[len].middle}
						</p>
					</div>
					<p className="bot">
						{this.state.arr[len].word}
					</p>
				</div>
				
			</div>
			<div id="bigBox4">
				<div id="bigBox4top">
					<span>PROJECTS</span>
					<h3>A selection of our recent work</h3>	
				</div>
				<div id="bigBox4bot">
					<a href="javascript:" id="bigBox4bota" 
					onMouseOver={this.mouseover}
					onMouseOut={this.mouseout}
					>
						<img src="img/img2.jpg"/>
						<div id="bigBox4botdiv">
							<h1>Union Jane</h1>
							<p>Branding / Digital / Strategy</p>
						</div>
					</a>
					<div id="box4rig">
						<a href="javascript:" 
						onMouseOver={this.mouseenter}
						onMouseOut={this.mouseleave}
						id="box4riga"
						>
							<img src="img/img3.jpg"/>
							<div id="box4rigdiv1">
								<h1>Union Jane</h1>
								<p>Branding / Digital / Strategy</p>
							</div>
						</a>
						<a href="javascript:"
						onMouseOver={this.over}
						onMouseOut={this.out}
						id="box4riga2"
						>
							<img src="img/img4.jpg"/>
							<div id="box4rigdiv2">
								<h1>Union Jane</h1>
								<p>Branding / Digital / Strategy</p>
							</div>
						</a>
					</div>
					<div id="box4bot">
						<a href="javascript:" className="jump" 
							onMouseOver={this.amouseover}
							onMouseOut={this.amouseout}
						>
							<span>View more</span>
							<div>
								<div className="pack">
									<img src="img/img5.svg" id="imgShow" />
									<img src="img/img5.svg" id="imgHide"/>
								</div>   
							</div>
						</a>
					</div>
				</div>
			</div>
			<div id="bigBox5">
				<p>Multicultural perspective. American can-do spirit</p>
				<p>
					We work in an agile way, with teams in Paris & San Diego.<br />
					We are the agency that never sleeps - meeting tighter deadlines without compromising on quality.
				</p>
				<a href="javascript:" className="jump" 
							onMouseOver={this.amouseover2}
							onMouseOut={this.amouseout2}>
					<span>Contact us</span>
					<div>
						<div className="pack">
							<img src="img/img6.svg" id="imgShow2" />
							<img src="img/img6.svg" id="imgHide2"/>
						</div>   
					</div>
				</a>
			</div>
			<div id="bigBox6">
				<div id="bigBox6top" style={{top:this.state.t}} onWheel={this.wheel2}>
					<img src="img/img7.jpg"/>
				</div>
				<div id="bigBox6bot" style={{top:this.state.b}}>
					<span>Careers</span>
					<p>
						Become part of the global<br />
						team at Oui Will.
					</p>
					<a href="javascript:" className="jump"
							onMouseOver={this.amouseover3}
							onMouseOut={this.amouseout3}>
						<span>Contact us</span>
							<div>
								<div className="pack">
									<img src="img/img6.svg" id="imgShow3" />
									<img src="img/img6.svg" id="imgHide3"/>
							</div>   
						</div>
					</a>
				</div>	
			</div>
		
			<Whiteblack />
			
			<div id="bigBoxfooter">
				<p> 
					Don’t be shy,
					<a href="javascript:">
						say hi!
					</a>
				</p>
			</div>
		</div>
    );
  }
}

export default App;
