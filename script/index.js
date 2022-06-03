
	function media_query()
{
	if(window.innerWidth>650)
	{
		
		menuClick.turnOffNav();

	}else if (window.innerWidth>480) {
		
		menuClick.turnOffAside();
	}
}


var menuClick={
	obj:'',
	container:'',
	isAllOff:true,	
	isNavOff: true,
	isAsideOff:true,

	turnOffAside:function(){
		this.obj=$('#aside');
		this.container='aside';
		this.isAsideOff=true;
		this.off();

	},
	turnOffNav:function(){
			this.obj=$('#nav');
		this.container='nav';
		this.isNavOff=true;
		this.off();
		
	},
	
	start:function(){
		$('#menu_box').children().on('click', function()
		{	var obj=$(this);
			var container=obj.attr('id');
			menuClick.init(obj,container);
			
		});

	},

	init:function (obj,container){
		this.obj=obj;
		this.container=container;
		
		if(this.isAllOff){//if everthing is off

			this.on();  //on somethinghttp://localhost/Project/index.php5#

		}else if( this.container=='aside' && !this.isNavOff)  //if click on aside and on nav
			{	
				this.on();								//trun on aside 			
				this.turnOffNav();						//trun of nav 
			}else if(this.container=='nav' && !this.isAsideOff ) //if  click on nav and trun on aside
			{	
				this.on();									// turn on nav							
				this.turnOffAside();							// turn off aside
			}
				else //if nav is on and click on nav |OR| if aside is on and click on aside		
				this.off();  // trun off nav |OR| aside

		this.isAllOff= (this.isNavOff && this.isAsideOff)? true : false;					
		
	},
	on:function(){
		
		this.obj.css({backgroundImage:'url("img/menu_clicked.jpg"'  ,
						boxShadow:'1px 2px 12px red'});
		$(''+this.container+'').clone().fadeIn().appendTo('#receiver');
		(this.container=='nav')? this.isNavOff=false : this.isAsideOff= false;
		
	},
	off:function(){
		this.obj.css({backgroundImage:'url("img/menu.jpg"'  ,
						boxShadow:'1px 2px 12px white'});
		$('#receiver').children().fadeOut().parent().text('');
		(this.container=='nav')?this.isNavOff=true : this.isAsideOff= true;		
	}
}

menuClick.start();







