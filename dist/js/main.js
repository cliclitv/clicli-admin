(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},106:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a,i,o,r,l=n(0),u=n.n(l),s=n(41),c=n.n(s),d=n(140),h=n(3),p=n.n(h),m=n(4),f=n.n(m),v=n(5),g=n.n(v),E=n(6),k=n.n(E),b=n(7),y=n.n(b),C=n(142),S=n(132),w=n(14),x=n(16),O=n(21),q=n(15),M=(n(73),Object(O.map)({state:["redirectTo"],mutations:["logout"]})(a=Object(C.a)(a=Object(x.a)(a=function(e){function t(){return p()(this,t),g()(this,k()(t).apply(this,arguments))}return y()(t,e),f()(t,[{key:"onLogout",value:function(){var e=this;this.props.logout(),Object(q.e)().then(function(t){200===t.data.code&&e.props.history.push("/login")})}},{key:"render",value:function(){return u.a.createElement("header",null,u.a.createElement("ul",null,u.a.createElement(S.a,{to:"/"},u.a.createElement("li",null,"控制台")),this.props.state.level>=2?u.a.createElement(S.a,{to:"/write-article"},u.a.createElement("li",null,"撰写")):null,this.props.state.level>=3?u.a.createElement("li",null,"管理",u.a.createElement("ul",null,u.a.createElement(S.a,{to:"/posts/wait"},u.a.createElement("li",null,"审核稿件")),u.a.createElement(S.a,{to:"/posts/public"},u.a.createElement("li",null,"管理稿件")),u.a.createElement(S.a,{to:"/users/user"},u.a.createElement("li",null,"管理用户")))):null,this.props.state.level>=2?u.a.createElement("li",null," 网盘",u.a.createElement("ul",null,u.a.createElement(S.a,{to:"/pan/cookie"},u.a.createElement("li",null,"设置Cookie")),u.a.createElement(S.a,{to:"/pan/bit"},u.a.createElement("li",null,"比特球")),u.a.createElement(S.a,{to:"/pan/hcy"},u.a.createElement("li",null,"和彩云")))):null,u.a.createElement("li",{onClick:this.onLogout.bind(this),className:"logout"},"退出"),u.a.createElement("a",{href:w.b,target:"_blank"},u.a.createElement("li",{className:"logout"},"网站首页"))))}}]),t}(u.a.Component))||a)||a)||a),j=(n(78),function(e){function t(){return p()(this,t),g()(this,k()(t).apply(this,arguments))}return y()(t,e),f()(t,[{key:"render",value:function(){return u.a.createElement("footer",null,u.a.createElement("p",null,"· Powered by Loki-admin·"))}}]),t}(u.a.Component)),N=n(2),V=n.n(N),z=(n(80),function(e){function t(e){var n;return p()(this,t),(n=g()(this,k()(t).call(this,e))).state={isShow:!0},n}return y()(t,e),f()(t,[{key:"componentWillMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return V.a.interceptors.request.use(function(t){return e._isMounted&&e.setState({isShow:!0}),t}),V.a.interceptors.response.use(function(t){return e._isMounted&&e.setState({isShow:!1}),t}),!0===this.state.isShow?u.a.createElement("div",{className:"loading"},u.a.createElement("div",{className:"img"}),u.a.createElement("div",{className:"text"},"努力加载中……")):null}}]),t}(u.a.Component)),T=n(19),D=n.n(T),I=n(20),A=(n(37),Object(x.a)(i=function(e){function t(e){var n;return p()(this,t),(n=g()(this,k()(t).call(this,e))).state={qq:n.props.match.params.qq,msg:"",name:"",desc:"",level:""},n}return y()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"loadUser",value:function(){var e=this;Object(q.c)("",0,this.state.qq).then(function(t){200===t.data.code&&e.setState(t.data.user)})}},{key:"handleChange",value:function(e,t){this.setState(D()({},e,t))}},{key:"handleClick",value:function(){var e=this;Object(q.h)(this.state).then(function(t){e.setState({msg:t.data.msg}),setTimeout(function(){e.setState({msg:""})},5e3)})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.state.msg?u.a.createElement(I.a,{text:this.state.msg,bg:"#b4d896"}):null,u.a.createElement("div",{className:"editor-user"},u.a.createElement("h1",null,"编辑用户"),u.a.createElement("ul",null,u.a.createElement("li",null,"用户名：",u.a.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleChange("name",t.target.value)}})),u.a.createElement("li",null,"密码：",u.a.createElement("input",{type:"text",placeholder:"留空则不修改",onChange:function(t){return e.handleChange("pwd",t.target.value)}})),u.a.createElement("li",null,"QQ：",u.a.createElement("input",{type:"text",value:this.state.qq,onChange:function(t){return e.handleChange("qq",t.target.value)}})),this.props.state.level>3?u.a.createElement("li",null,"权限：",u.a.createElement("select",{value:this.state.level,onChange:function(t){return e.handleChange("level",t.target.value)}},u.a.createElement("option",{value:"1"},"用户"),u.a.createElement("option",{value:"2"},"作者"),u.a.createElement("option",{value:"3"},"审核"),u.a.createElement("option",{value:"4"},"管理"))):null,u.a.createElement("li",null,"签名：",u.a.createElement("textarea",{value:this.state.desc,onChange:function(t){return e.handleChange("desc",t.target.value)}})),u.a.createElement("li",{className:"center"},u.a.createElement("button",{onClick:this.handleClick.bind(this)},"保存")))))}}]),t}(u.a.Component))||i),L=n(23),U=n(17),_=n(8),B=n.n(_),P=n(45),R=n.n(P),W=(n(100),function(e){function t(){return p()(this,t),g()(this,k()(t).apply(this,arguments))}return y()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.loadEditor()}},{key:"componentWillReceiveProps",value:function(e){this.props.defaultValue!==e.defaultValue&&this.mde.value(e.defaultValue)}},{key:"loadEditor",value:function(){this.mde=new R.a({element:this.marked,autoDownloadFontAwesome:!0,status:!1,spellChecker:!1,forceSync:!0}),this.bindMde()}},{key:"bindMde",value:function(){var e=this;this.mde.codemirror.on("change",function(){e.props.handleMde(e.mde.value())})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"simpleMDE"},u.a.createElement("textarea",{ref:function(t){return e.marked=t},disabled:!0}))}}]),t}(u.a.Component)),J=(n(102),Object(x.a)(o=function(e){function t(e){var n;return p()(this,t),(n=g()(this,k()(t).call(this,e))).state={title:"",content:"",sort:"原创",status:"待审核",msg:"",uid:parseInt(B.a.get("uid")),id:n.props.match.params.editor,text:"撰写",bg:"",tag:"",time:"",videos:[]},n}return y()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.loadArticle(),this.loadVideo(),"/write-article"===this.props.location.pathname?this.setState({text:"添加"}):this.setState({text:"更新"})}},{key:"handleChange",value:function(e,t){this.setState(D()({},e,t))}},{key:"changeMde",value:function(e){this.setState({content:e})}},{key:"loadArticle",value:function(){var e=this;this.state.id&&Object(L.c)(this.state.id).then(function(t){var n=t.data.result,a=n.title,i=n.content,o=n.sort,r=n.tag,l=n.status,u=n.time;e.setState({title:a,content:i,sort:o,tag:r,status:l,time:u.slice(0,-3),defaultValue:i})})}},{key:"loadVideo",value:function(){var e=this;this.state.id&&Object(U.f)(this.state.id,1,100).then(function(t){e.setState({videos:t.data.videos})})}},{key:"handleClick",value:function(){var e=this;if(!(this.state.title&&this.state.content&&this.state.status&&this.state.sort&&this.state.tag))return this.setState({msg:"都要填写都要填(〃＞皿＜)！",bg:"#ef736e"}),void setTimeout(function(){e.setState({msg:""})},5e3);"/write-article"!==this.props.location.pathname?Object(L.e)(this.state).then(function(t){200===t.data.code&&e.setState({msg:"更新成功啦！",text:"更新",bg:"#b4d896"}),setTimeout(function(){e.props.history.push("/article/".concat(e.state.uid)),e.setState({msg:""})},5e3)}):Object(L.a)(this.state).then(function(t){200===t.data.code&&e.setState({msg:"添加成功啦",bg:"#b4d896"}),setTimeout(function(){e.props.history.push("/article/".concat(e.state.uid)),e.setState({msg:""})},5e3)})}},{key:"selectTag",value:function(e){this.state.tag.indexOf(e)>-1?this.setState({tag:this.state.tag.replace(" ".concat(e),"")}):this.setState({tag:this.state.tag+" "+e})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.state.msg?u.a.createElement(I.a,{text:this.state.msg,bg:this.state.bg}):null,u.a.createElement("div",{className:"write-article"},u.a.createElement("h1",null,this.state.text,"稿件"),u.a.createElement("li",null,u.a.createElement("input",{type:"text",placeholder:"请输入标题",value:this.state.title,onChange:function(t){return e.handleChange("title",t.target.value)}})),u.a.createElement(W,{handleMde:function(t){return e.changeMde(t)},value:this.state.content,defaultValue:this.state.defaultValue}),u.a.createElement("span",null,u.a.createElement("select",{onChange:function(t){return e.handleChange("sort",t.target.value)},value:this.state.sort},u.a.createElement("option",{value:"原创"},"原创"),u.a.createElement("option",{value:"新番"},"新番"),u.a.createElement("option",{value:"完结"},"完结"),u.a.createElement("option",{value:"剧场版"},"剧场版"))),u.a.createElement("span",null,u.a.createElement("select",{onChange:function(t){return e.handleChange("status",t.target.value)},value:this.state.status},u.a.createElement("option",{value:"wait"},"待审核"),u.a.createElement("option",{value:"under"},"已下架"),this.props.state.level>2?u.a.createElement("option",{value:"public"},"发布"):null)),u.a.createElement("span",null,"/write-article"===this.props.location.pathname?null:u.a.createElement("input",{type:"text",value:this.state.time,onChange:function(t){return e.handleChange("time",t.target.value)}})),u.a.createElement("div",{className:"tags"},u.a.createElement("ul",null,["推荐","转载","漫画改","小说改","耽美","乙女","百合","后宫","热血","战斗","运动","奇幻","神魔","搞笑","冒险","日常","古风","恋爱","r15","泡面番","治愈","鬼畜","AMV/MAD","音乐·PV","游戏·GMV","VOCALOID","影视","其它"].map(function(t,n){return u.a.createElement("li",{onClick:function(){return e.selectTag(t)},key:n,className:e.state.tag.indexOf(t)>-1?"active":""},t)}))),u.a.createElement("div",{className:"video-list"},this.state.videos?this.state.videos.map(function(e){return u.a.createElement(S.a,{to:"/editor-video/"+e.id,key:e.id},u.a.createElement("li",null,u.a.createElement("div",{className:"title"},e.oid)))}):null,"/write-article"===this.props.location.pathname?null:u.a.createElement(S.a,{to:"/add-video/".concat(this.state.id)},u.a.createElement("li",{className:"add"},u.a.createElement("div",null,"＋")))),u.a.createElement("div",null,u.a.createElement("button",{onClick:this.handleClick.bind(this)},this.state.text,"稿件"))))}}]),t}(u.a.Component))||o),Q=n(28),F=n.n(Q),G=n(46),$=n.n(G),H=Object(x.a)(r=Object(C.a)(r=function(e){function t(e){var n;return p()(this,t),(n=g()(this,k()(t).call(this,e))).state={id:n.props.match.params.id,oid:"",title:"",content:"",pid:n.props.match.params.pid,text:"修改",uid:parseInt(B.a.get("uid")),zhilian:!0,per:0},n}var n;return y()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.props.location.pathname.indexOf("add-video")>-1?this.setState({text:"添加"}):(this.loadVideo(),this.setState({text:"修改"}))}},{key:"loadVideo",value:function(){var e=this;Object(U.e)(this.state.id).then(function(t){200===t.data.code&&e.setState(t.data.result)})}},{key:"handleChange",value:function(e,t){this.setState(D()({},e,t))}},{key:"deleteVideo",value:function(){var e=this;Object(U.b)(this.state.id).then(function(t){200===t.data.code&&(e.setState({msg:"删除成功啦"}),setTimeout(function(){e.props.history.goBack(),e.setState({msg:""})},2e3))})}},{key:"handleClick",value:function(){var e=this;this.props.location.pathname.indexOf("editor-video")>-1?Object(U.g)(this.state).then(function(t){200===t.data.code&&e.setState({msg:"更新成功啦"}),setTimeout(function(){e.props.history.goBack(),e.setState({msg:""})},2e3)}):this.addVideos()}},{key:"addVideos",value:function(){var e=this;Object(U.a)(this.state).then(function(t){200===t.data.code&&e.setState({msg:"添加成功啦"}),setTimeout(function(){e.props.history.goBack(),e.setState({msg:""})},2e3)})}},{key:"onUpload",value:(n=$()(F.a.mark(function e(){var t,n,a,i;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,n=this.refs.uploader.files[0],a=this.state.pid+" | "+this.state.oid,e.next=5,Object(U.d)(n.name,a).then(function(e){return e.data.uploadToken});case 5:i=e.sent,console.log(i),new DogeUploader({file:n,token:i,next:function(e){t.setState({per:"".concat(Math.floor(e.percent))})},error:function(e){alert("上传出错( "+e.code+" )："+e.message)},complete:function(e){console.log("上传完成，视频 vid："+e.vid),t.setState({content:"".concat(e.vid,"@dogecloud"),per:0})}}).upload();case 9:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"zhilian",value:function(){this.setState({zhilian:!this.state.zhilian})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.state.msg?u.a.createElement(I.a,{text:this.state.msg,bg:"#b4d896"}):null,this.state.per?u.a.createElement("div",{className:"per"},this.state.per+"%"):null,u.a.createElement("div",{className:"editor-user"},u.a.createElement("h1",null,this.state.text,"视频"),u.a.createElement("ul",null,u.a.createElement("li",null,"序号：",u.a.createElement("input",{type:"text",value:this.state.oid,placeholder:"数字",onChange:function(t){return e.handleChange("oid",t.target.value)}})),u.a.createElement("li",null,"备注：",u.a.createElement("input",{type:"text",value:this.state.title,placeholder:"可不填",onChange:function(t){return e.handleChange("title",t.target.value)}})),u.a.createElement("li",null,u.a.createElement("span",{onClick:this.zhilian.bind(this)},this.state.zhilian?"直链":"上传"),"：",this.state.zhilian?u.a.createElement("input",{type:"text",value:this.state.content,placeholder:"支持mp4、m3u8等直链",onChange:function(t){return e.handleChange("content",t.target.value)}}):u.a.createElement("div",null,u.a.createElement("div",{id:"uploader"},u.a.createElement("span",null,"上传"),u.a.createElement("input",{type:"file",ref:"uploader",accept:"video/*",onChange:this.onUpload.bind(this)})),u.a.createElement("div",{style:{height:"55px"}}))," "),u.a.createElement("li",{className:"center"},u.a.createElement("button",{onClick:this.handleClick.bind(this)},"提交"),u.a.createElement("button",{onClick:this.deleteVideo.bind(this)},"删除")))))}}]),t}(u.a.Component))||r)||r,K=n(18),X=n.n(K),Y=n(143),Z=n(133),ee=X()({loader:function(){return n.e(1).then(n.bind(null,139))},loading:z}),te=X()({loader:function(){return n.e(2).then(n.bind(null,134))},loading:z}),ne=X()({loader:function(){return n.e(3).then(n.bind(null,141))},loading:z}),ae=X()({loader:function(){return n.e(4).then(n.bind(null,135))},loading:z}),ie=X()({loader:function(){return n.e(5).then(n.bind(null,136))},loading:z}),oe=X()({loader:function(){return n.e(6).then(n.bind(null,137))},loading:z}),re=X()({loader:function(){return n.e(7).then(n.bind(null,138))},loading:z}),le=function(e){function t(){return p()(this,t),g()(this,k()(t).apply(this,arguments))}return y()(t,e),f()(t,[{key:"render",value:function(){return u.a.createElement(Y.a,null,u.a.createElement(Z.a,{path:"/login",component:ie}),u.a.createElement(Z.a,{path:"/register",component:oe}),u.a.createElement(Z.a,{path:"/",render:function(e){return u.a.createElement("div",null,u.a.createElement(M,null),u.a.createElement(Y.a,null,u.a.createElement(Z.a,{path:"/editor-article/:editor",component:J,key:"editor"}),u.a.createElement(Z.a,{path:"/write-article",component:J,key:"write"}),u.a.createElement(Z.a,{path:"/editor-video/:id",component:H,key:"editor-video"}),u.a.createElement(Z.a,{path:"/add-video/:pid",component:H,key:"add-video"}),u.a.createElement(Z.a,{exact:!0,path:"/editor-user/:qq",component:A}),u.a.createElement(Z.a,{path:"/article/:author",component:ee,key:"author"}),u.a.createElement(Z.a,{path:"/posts/:status",component:ee,key:location.pathname}),u.a.createElement(Z.a,{path:"/users/:role",component:ae,key:location.pathname}),u.a.createElement(Z.a,{path:"/pan/cookie",component:te}),u.a.createElement(Z.a,{path:"/pan/hcy",component:ne,key:location.pathname}),u.a.createElement(Z.a,{path:"/pan/hcy-list/:fid",component:ne,key:location.pathname}),u.a.createElement(Z.a,{path:"/",component:re})),u.a.createElement(j,null))}}))}}]),t}(u.a.Component),ue=(n(106),n(108),n(110),{onLogin:function(e,t){var n=e.commit;return t.name&&t.pwd||(n("errMsg","都要填都要填！"),setTimeout(function(){n("errMsg","")},4500)),Object(q.d)(t).then(function(e){n("errMsg",""),200===e.status?n("login",e.data):(n("errMsg",e.data.msg),setTimeout(function(){n("errMsg","")},4500))})},onLogout:function(e){var t=e.commit;return Object(q.e)().then(function(e){200===e.data.code&&(t("logout",e.data),setTimeout(function(){t("errMsg","")},4500))})}}),se=new O.Store({state:{isAuth:!1,redirectTo:"",bg:"",msg:"",user:{}},mutations:{login:function(e,t){e.msg=t.msg,e.isAuth=!0,e.bg="#b4d896"},errMsg:function(e,t){e.msg=t,e.bg="#ef736e"},logout:function(e){e.isAuth=!1,e.msg="退出成功啦",e.bg="#b4d896"}},actions:ue});c.a.render(u.a.createElement(O.Provider,{store:se},u.a.createElement(d.a,null,u.a.createElement(le,null))),document.getElementById("app"))},14:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return c});var a=n(42),i=n.n(a),o=n(8),r=n.n(o);function l(e){if(/^[0-9]+$/.test(e))return"http://q1.qlogo.cn/g?b=qq&nk=".concat(e,"&s=5");var t=i()(e);return"https://cdn.v2ex.com/gravatar/".concat(t)}function u(e){return e.indexOf("ksyun.php")>-1&&(e=e.replace("/static/danmu/ksyun.php?","")+"@ksyun"),e.indexOf("zhilian2.php")>-1&&(e=e.replace("http://119.23.209.33/static/danmu/zhilian2.php?http://47.94.243.190:8081/play/","")+"@c_360"),e.indexOf("san.php")>-1&&(e=e.replace("http://www.zzzfun.com/static/danmu/san.php?v360?v=","")+"@s_360"),e.indexOf("quqi.com")>-1&&(e=e+"/"+r.a.get("uid")),e}var s="https://www.clicli.us",c="https://api.clicli.us"},15:function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return h}),n.d(t,"e",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return f}),n.d(t,"g",function(){return v}),n.d(t,"a",function(){return g});var a=n(2),i=n.n(a),o=n(14),r=n(8),l=n.n(r),u=i.a.create({baseURL:o.a});function s(e){return i.a.post("/user/login",{name:e.name,pwd:e.pwd})}function c(e){return i.a.post("/user/register",{name:e.name,pwd:e.pwd,qq:e.qq,level:1,desc:"人懒，竟然没有签名~"})}function d(e){return i.a.post("/user/update/".concat(e.id),{name:e.name,pwd:e.pwd,qq:e.qq,level:parseInt(e.level),desc:e.desc},{headers:{token:l.a.get("token")}})}function h(e){return u.get("/users",{params:{level:e,page:1,pageSize:100}})}function p(){return i.a.post("/user/logout")}function m(e){return u.get("/cookie/".concat(e))}function f(e,t,n){return u.get("/user",{params:{uname:e,uid:t,uqq:n}})}function v(e){return i.a.post("/cookie/replace",{uid:parseInt(e.uid),hcy:e.hcy,bit:e.bit})}function g(){return i.a.get("/auth")}},16:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(29),i=n.n(a),o=n(3),r=n.n(o),l=n(4),u=n.n(l),s=n(5),c=n.n(s),d=n(6),h=n.n(d),p=n(7),m=n.n(p),f=n(0),v=n.n(f),g=(n(14),n(15)),E=n(8),k=n.n(E);function b(e){return function(t){function n(e){var t;return r()(this,n),(t=c()(this,h()(n).call(this,e))).state={level:1},t}return m()(n,t),u()(n,[{key:"componentDidMount",value:function(){var e=this;Object(g.a)().then(function(t){401===t.data.code?e.props.history.push("/login"):e.setState({level:k.a.get("level")})})}},{key:"render",value:function(){return v.a.createElement(e,i()({state:this.state},this.props))}}]),n}(v.a.Component)}},17:function(e,t,n){"use strict";n.d(t,"f",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"g",function(){return h}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return f});var a=n(2),i=n.n(a),o=n(14),r=n(8),l=n.n(r),u=i.a.create({baseURL:o.a});function s(e,t,n){return u.get("/videos",{params:{pid:e,page:t,pageSize:n}})}function c(e){return u.get("/video/".concat(e))}function d(e){var t=e.oid,n=e.title,a=e.content,r=e.pid,u=e.uid;return a=Object(o.d)(a),i.a.post("/video/add",{oid:parseInt(t),title:n,content:a,pid:parseInt(r),uid:u},{headers:{token:l.a.get("token")}})}function h(e){var t=e.id,n=e.oid,a=e.title,r=e.content,u=e.pid,s=e.uid;return r=Object(o.d)(r),i.a.post("/video/update/".concat(t),{oid:parseInt(n),title:a,content:r,pid:parseInt(u),uid:s},{headers:{token:l.a.get("token")}})}function p(e){return i.a.post("/video/delete?id=".concat(e),{},{headers:{token:l.a.get("token")}})}function m(e){return i.a.post("/video/delete?pid=".concat(e),{},{headers:{token:l.a.get("token")}})}function f(e,t){return i.a.get("https://jx.clicli.us/upload/auth",{params:{fname:e,rname:t}})}},20:function(e,t,n){"use strict";var a=n(3),i=n.n(a),o=n(4),r=n.n(o),l=n(5),u=n.n(l),s=n(6),c=n.n(s),d=n(7),h=n.n(d),p=n(0),m=n.n(p),f=(n(82),function(e){function t(){return i()(this,t),u()(this,c()(t).apply(this,arguments))}return h()(t,e),r()(t,[{key:"render",value:function(){var e=this.props.text;return m.a.createElement("div",{className:"toptip",style:{background:this.props.bg}},e)}}]),t}(m.a.Component));t.a=f},23:function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"b",function(){return p});var a=n(2),i=n.n(a),o=n(14),r=n(8),l=n.n(r),u=i.a.create({baseURL:o.a});function s(e,t,n,a,i,o){return u.get("/posts",{params:{status:e,sort:t,tag:n,uid:a,page:i,pageSize:o}})}function c(e){return u.get("/post/".concat(e))}function d(e){var t=e.title,n=e.content,a=e.status,o=e.sort,r=e.tag,u=e.uid;return i.a.post("/post/add",{title:t,content:n,status:a,sort:o,tag:r,uid:u},{headers:{token:l.a.get("token")}})}function h(e){var t=e.id,n=e.title,a=e.content,o=e.status,r=e.sort,u=e.tag,s=e.uid,c=e.time;return i.a.post("/post/update/".concat(t),{title:n,content:a,status:o,sort:r,tag:u,uid:s,time:c},{headers:{token:l.a.get("token")}})}function p(e){return i.a.post("/post/delete/".concat(e),{},{headers:{token:l.a.get("token")}})}},37:function(e,t,n){},73:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},98:function(e,t){}},[[112,9,8]]]);