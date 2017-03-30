//var Event=new Vue();
		
		var head={
			template:"#head"
		}
		var banners={
			template:"#banners"
		}
		var nav={
			template:"#nav"
		}
		var foot={
			template:"#foot"
		}
		//nav 段组件
		var shouye={
			template:"#shouye",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/lbx.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var tehui={
			template:"#tehui",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/lnv.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var nanzhuang={
			template:"#nanzhuang",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/lbx.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var nvzhuang={
			template:"#nvzhuang",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/lnv.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var shuma={
			template:"#shuma",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/shuma.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var yundong={
			template:"#yundong",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/yd.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var xiebao={
			template:"#xiebao",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/xiebao.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		var muying={
			template:"#muying",
			data:function(){
				return {
					list:[]
				}
			},
			beforeMount(){
				var _that=this;   /*注意this的作用域*/
			           axios.get('./js/muying.json')
			           .then(function (response) {
		           console.log(response.data);
			
			               _that.list=response.data;
			               console.log(list[1].className)
			           })
			           .catch(function (error) {
			               console.log(error);
			           });
			}
		}
		//内容
		var ner={
			template:"#ner"
		}
		var routers=[
		 {path:'/shouye',component:shouye},
		 {path:'/tehui',component:tehui},
		 {path:'/nanzhuang',component:nanzhuang},
		 {path:'/nvzhuang',component:nvzhuang},
		 {path:'/shuma',component:shuma},
		 {path:'/xiebao',component:xiebao},
		 {path:'/yundong',component:yundong},
		 {path:'/muying',component:muying},
		 {path:'*',redirect:'/shouye'}
		]
        
        var router=new VueRouter({
			routes:routers
		})
		var vn=new Vue({
			el:"#box",
			router:router,
			methods:{
				
			},
			components:{
				'v-head':head,
				'v-banners':banners,
				'v-nav':nav,
				'v-ner':ner,
				'v-foot':foot
				
			},
			
		})