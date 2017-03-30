var Event=new Vue();
		
		var head={
			template:"#head"
		}
		var bant={
			template:"#bant"
		}
		var fnz={
			template:"#fnz"
		}
		var fnv={
			template:"#fnv"
		}
		var fsm={
			template:"#fsm"
		}
		var fyd={
			template:"#fyd"
		}
		var fmy={
			template:"#fmy"
		}
		var fxb={
			template:"#fxb"
		}
		
		var routers=[
		   {path:'/fnz',component:fnz},
		   {path:'/fnv',component:fnv},
		   {path:'/fsm',component:fsm},
		   {path:'/fxb',component:fxb},
		   {path:'/fyd',component:fyd},
		   {path:'/fmy',component:fmy},
		   {path:'*',redirect:'/fnz'}
		
		]
		var router= new VueRouter({
			routes:routers
		})
		var foot={
			template:"#foot"
		}
		var vn=new Vue({
			el:"#box",
			router:router,
			data:{
				
			},
			methods:{
				
			},
			components:{
				'v-head':head,
				'v-foot':foot,
				'v-bant':bant
				
			}
		})