import React, { Component } from 'react';
import '../css/whiteblack.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class Whiteblack extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		window.addEventListener('scroll', this.scroll);
	}
	componentWillMount(){
		window.removeEventListener('scroll', this.scroll);
	}
	scroll=()=>{
		if($('#bigBox7')[0]){
			if($('#bigBox7').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
				let div2=`<span>oui</span>
							<div>
								<h4>Paris</h4>
								<p>
									131 Avenue d’Italie<br />
									75013 PARIS<br />
									FRANCE
								</p>
							</div>`
				$('#bigBox7lef').append(div2);
				$('#bigBox7lef').css({
					width:'50%'
				});
				$('#bigBox7rig').css({
					width:'50%'
				})
			}
		}
		
	}
	render(){
    return (
	    		<div id="bigBox7">
	    			<div id="bigBox7lef">
				</div>
				<div id="bigBox7rig">
					<span>will</span>
					<div>
						<h4>San Diego</h4>
						<p>
							3077 N Park Way #107<br />
							San Diego CA, 92104<br />
						     USA
						</p>
					</div>
				</div>
	    		</div>
	    )
	  }
	}
export default Whiteblack;