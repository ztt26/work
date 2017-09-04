import React,{Component} from 'react';
import $ from 'jquery';
import '../css/style.css';
class LiModel extends Component{
	constructor(){
		super();
	}
	mouseover=(ev)=>{		
		$(ev.target).css({
			left:50,
			top:-8,
			color:'#fff'
			
		});
		$('#bigBox3lef').css({
		display:'block'
	 });
	 //let num=$(ev.target).parent().parent().index();
	 
	 this.props.changeNum(this.props.id);
	 
		$('#bigBox3lef').css({
			width:'300px',
			opacity:.5,
			transition:'1s'
		});
		
	}
	click=()=>{
	 	$('#bigBox3lef').css({
				width:'594px',
				opacity:1,
				transition:'1s',
				zIndex:2,
				display:'block'
		});
		$('#bigBox3rig').css({
			display:'block'
		})
		let img2=$('<img src="img/cicle.png" id="circle" />');
		$('#bigBox3lef').append(img2);
		$(img2).mouseover(function(){
				$(img2).css({
					width:'78px',
					height:'78px',
					top:296,
					left:246
				});
			});
			$(img2).mouseout(function(){
				$(img2).css({
					width:'70px',
					height:'70px',
					top:300,
					left:250
				})
			});
			$(img2).click(function(){
				$(this).css({
					display:'none',
					transition:'1s'
				})
				$('#bigBox3lef').css({
					width:0,
					transition:'1s'
				});
				$('#bigBox3rig').css({
					display:'none',
					transition:'1s'
				});
			})
 	}
	
	mouseout=(ev)=>{
		if($('#bigBox3lef').width()==300){
			$('#bigBox3lef').css({
				width:'0px',
				transition:'0.2s'
			});
		}
		$(ev.target).css({
			left:38,
			top:0,
			color:'#434343'
		});
	}
  render(){
    return (
      <li>
		<a href="javascript:;">
			<span>{this.props.num}</span>
			<span className="trans" 
			onMouseOver={this.mouseover}
			onMouseOut={this.mouseout}
			onClick={this.click}
			>{this.props.title}</span>
		</a>
	</li>
    )
  }
}
export default LiModel;