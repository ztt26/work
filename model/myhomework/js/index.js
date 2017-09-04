$('#bigBoxtop').height(document.documentElement.clientHeight);
var bigBoxdiv=document.getElementById('bigBoxdiv');
var bigBoxtop=document.documentElement.clientHeight-bigBoxdiv.style.top;
$('#bigBoxdiv').height(bigBoxtop);
$(window).resize(function(){
	var hei=document.documentElement.clientHeight;
	$('#bigBoxtop').height(hei);
	var bigBoxdiv=document.getElementById('bigBoxdiv');
	var bigBoxtop=document.documentElement.clientHeight-bigBoxdiv.style.top;
	$('#bigBoxdiv').height(bigBoxtop);
	let divtop1=$('#bigBoxdiv').height()-$('#pack').height();
	let divtop2=divtop1/2;
	if(divtop2<0){
		divtop2=0;
	}
	$('#pack').css('top',divtop2);
	$('#bigBoxtopbac').css('top',(hei-385)/2);
	})
let divtop1=$('#bigBoxdiv').height()-$('#pack').height();
let divtop2=divtop1/2;
$('#pack').css('top',divtop2);
$('#bigBoxtopbac').css('top',(bigBoxtop-385)/2);
function addMouseWheel(init){
		document.onmousewheel = fn
		document.addEventListener('DOMMouseScroll',fn)
		function fn(ev){
			//true:上，false:下
			var onOff = null;
			if(ev.wheelDelta){
				if(ev.wheelDelta>0){
					onOff = true;
				}else{
					onOff = false;
				}
			}else{
				//火狐
				if(ev.detail<0){
					onOff = true;
				}else{
					onOff = false;
				}
			}
			if(onOff){
				typeof init.fnUp == 'function' && init.fnUp();
			}else{
				typeof init.fnDown == 'function' && init.fnDown();
			}
			
		}
	}
	var bac=document.getElementById('bigBoxtopbac');
	var n=0;
	var m=130;
	addMouseWheel({
		ele:bac,bigBoxdiv,
		fnUp:function(){
			n+=1;
			m+=1;
			bac.style.left = n+'px';
			bigBoxdiv.style.top = m+'px';
			if(m>130){
				m=130;
			}
		},
		fnDown:function(){
			n-=1;
			m-=1;
			bac.style.left = n+'px';
			bigBoxdiv.style.top = m+'px';
			if(m<80){
				m=80;
			}
		}
	});
let arr=['img/s1.png','img/s2.png','img/s3.png','img/s4.png'];
	$('.trans').mouseover(function(){	
		$(this).css({
			left:50,
			top:-8,
			color:'#fff',
	});
	$('#bigBox3lef').css({
		display:'block'
	});
	let num=$(this).parent().parent().index();
	let img=$('<img src="'+arr[num]+'"/>');
	$('#bigBox3lef').append(img);
	$('#bigBox3lef').css({
		width:'300px',
		opacity:.5,
		transition:'1s'
	});
		$(this).click(function(){
			$('#bigBox3lef').css({
				width:'594px',
				opacity:1,
				transition:'1s',
				zIndex:2,
				display:'block'
			});
			
			let img2=$('<img src="img/cicle.png"/ id="circle">');
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
				$('#bigBox3lef').css({
					display:'none',
					transition:'1s'
				});
				$('#bigBox3rig').css({
					display:'none',
					transition:'1s'
				});
			})
		});
		
	});
	$('.trans').mouseout(function(){
		if($('#bigBox3lef').width()==300){
			$('#bigBox3lef').css({
				width:'0px',
				transition:'0.2s'
			});
		}
		$(this).css({
			left:38,
			top:0,
			color:'#434343'
		});
	})
	
//$(window).scroll(function(){
//	if ($(window).scrollTop() == 1000) {
//        alert('ok!!');
//})
$('#bigBox4bota').mouseenter((function(){
	$('#bigBox4botdiv').css({
		display:'block'		
	});
	$('#bigBox4bota').find('img').css({
			width:'600px',
			height:'700px',
			left:-20,
			top:-20
	});
}));
$('#bigBox4bota').mouseout((function(){
	$('#bigBox4botdiv').css({
		display:'none'		
	});
	$('#bigBox4bota').find('img').css({
			width:'550px',
			height:'664px',
			left:0,
			top:0
	});
}));
$('#box4rig').find('a:eq(0)').mouseenter((function(){
	$('#box4rigdiv1').css({
		display:'block'		
	});
	$('#box4rig').find('img:eq(0)').css({
			width:'600px',
			height:'350px',
			left:-20,
			top:-20
	});
}));
$('#box4rig').find('a:eq(0)').mouseout((function(){
	$('#box4rigdiv1').css({
		display:'none'		
	});
	$('#box4rig').find('img:eq(0)').css({
			width:'546px',
			height:'309px',
			left:0,
			top:0
	});
}));
$('#box4rig').find('a:eq(1)').mouseenter((function(){
	$('#box4rigdiv2').css({
		display:'block'		
	});
	$('#box4rig').find('img:eq(1)').css({
			width:'600px',
			height:'350px',
			left:-20,
			top:-20
	});
}));
$('#box4rig').find('a:eq(1)').mouseout((function(){
	$('#box4rigdiv2').css({
		display:'none',
	});
	$('#box4rig').find('img:eq(1)').css({
			width:'546px',
			height:'309px',
			left:0,
			top:0
	});
}));
//const $tans = $('.tans');
//	$(window).scroll(fn);
//	fn();
//	const $ul=$('#bigBox3').find('ul')
//	function fn(){
////		console.log($(window).scrollTop())
//			if($ul.offset().top <= $(window).innerHeight() + $(window).scrollTop()){
//				if($ul.find('li')){
//					
//					$ul.css('opacity',1);
//					
//					$ul.attr('src',$(e).find('img').attr('_src'));
//				
//					$(e).find('img').removeAttr('_src');
//				}
//			}
//	}
//$('#circle').mouseover(function(){
//	$(this).width='85px',
//	$(this).height='85px'
//})
	
	$(window).scroll(function(){
		if($('#bigBox3').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
			$('#bigBox3').find('ul').css({
				display:'block',
				opacity:1
			})
		}
	})
	$(window).scroll(function(){
		if($('#bigBox4').offset().top<=$(window).innerHeight()+ $(window).scrollTop()){
			$('#bigBox4').find('#bigBox4bot').css({
				display:'block',
				opacity:1,
				top:0
			})
		}
	});
	$(window).scroll(function(){
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
	});
	let onOff=false;
	$('.jump').eq(0).mouseover(function(){
		onOff=true;
		$('#imgShow').animate({
			left:0,
			top:0
		});
		$('#imgHide').animate({
			left:18,
			top:0
		});
	});
	$('.jump').eq(0).mouseout(function(){
		onOff=false;
		$('#imgHide').css({
			left:0,
			top:0
		});
		$('#imgShow').css({
			left:-18,
			top:0
		});
	});
	$('.jump').eq(1).mouseover(function(){
		onOff=true;
		$('#imgShow2').animate({
			left:0,
			top:0
		});
		$('#imgHide2').animate({
			left:18,
			top:0
		});
	});
	$('.jump').eq(1).mouseout(function(){
		onOff=false;
		$('#imgHide2').css({
			left:0,
			top:0
		});
		$('#imgShow2').css({
			left:-18,
			top:0
		});
	})
	$('.jump').eq(2).mouseover(function(){
		onOff=true;
		$('#imgShow3').animate({
			left:0,
			top:0
		});
		$('#imgHide3').animate({
			left:18,
			top:0
		});
	});
	$('.jump').eq(2).mouseout(function(){
		onOff=false;
		$('#imgHide3').css({
			left:0,
			top:0
		});
		$('#imgShow3').css({
			left:-18,
			top:0
		});
	});
	$('#bigBoxfooter').find('a').mouseover(function(){
		
	})
  
