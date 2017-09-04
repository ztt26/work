import React,{Component} from 'react';
import $ from 'jquery';
import '../css/about.css';
class AboutLi extends Component{
	constructor(){
		super();
	}
//	componentDidMount(){
//		window.addEventListener('scroll', this.scroll);
//	}
//	scroll=()=>{
////		$('.pic').hide(1);
//		if($('.pic').offset().top+100<=$(window).innerHeight()+ $(window).scrollTop()){
//			$('.pic').slideDown(10000);
//			
//		};
//	}
	render(){
		return(
			<li className="pic"><img src={this.props.e}/></li>
		)
	}
}
export default AboutLi;