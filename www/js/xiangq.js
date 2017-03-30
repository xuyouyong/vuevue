var Event=new Vue();
		
		var head={
			template:"#head"
		}
		var foot={
			template:"#foot"
		}
		var cont={
			template:"#cont"
		}
		var sxa={
			template:"#sxa",
			data:function(){
				return {
					shu:1,
					m:2999,
					nums:''
				}
			},
			methods:{
				
				tap1:function(){
					this.shu=this.shu + 1;
					
				},
				tap2:function(){
					this.shu=this.shu-1
					
				}
			}
			
			
			
		
		}
		var sxb={
			template:"#sxb"
		}
		var sxc={
			template:"#sxc"
		}
		var sxd={
			template:"#sxd"
		}
		var routers=[
		  
		  {path:"/sxa",component:sxa},
		  {path:"/sxb",component:sxb},
		  {path:"/sxc",component:sxc},
		  {path:"/sxd",component:sxd},
		  {path:"*",redirect:"/sxa"},
		]
		var router= new VueRouter({
			routes:routers
		})
		
		var vn=new Vue({
			el:"#box",
			data:{
				nums:'123'
			},
			router:router,
			components:{
				'v-head':head,
				'v-foot':foot,
				'v-cont':cont
				
			}
			
		})