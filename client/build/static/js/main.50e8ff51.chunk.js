(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(78)},43:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),s=a.n(o),c=(a(43),a(5)),l=a(6),i=a(9),m=a(7),u=a(10),d=a(82),p=a(81),h=a(84),b=a(18),E=a.n(b),f=a(13),g=a.n(f),v=function(e){e?g.a.defaults.headers.common.Authorization=e:delete g.a.defaults.headers.common.Authorization},w=function(e){return{type:"SET_CURRENT_USER",payload:e}},y=function(){return function(e){localStorage.removeItem("jwtToken"),v(!1),e(w({}))}},N=a(8),O=a(12),j=a(35),k=a(25),x=a(70),S={isAuthenticated:!1,user:{},loading:!1},R={},C=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(k.a)({},e,{isAuthenticated:!x(t.payload),user:t.payload});case"USER_LOADING":return Object(k.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),_=[j.a],T=Object(O.e)(C,{},Object(O.d)(O.a.apply(void 0,_),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||O.d)),D=a(80),U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement(D.a,{to:"/",style:{fontFamily:"monospace"},className:"col s5 brand-logo center black-text"},r.a.createElement("i",{className:"material-icons"},"code"),"MERN"))))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Build")," a login/auth app with the"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," stack from scratch"),r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Create a (minimal) full-stack app with user authentication via passport and JWTs"),r.a.createElement("br",null),r.a.createElement("div",{className:"col s6"},r.a.createElement(D.a,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register")),r.a.createElement("div",{className:"col s6"},r.a.createElement(D.a,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In")))))}}]),t}(n.Component),L=a(15),I=a(85),M=a(16),P=a.n(M),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};console.log(a),e.props.registerUser(a,e.props.history)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Register"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(D.a,{to:"/login"},"Log in")),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit,className:"form-signin"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email address",className:P()("form-control",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email"),r.a.createElement("span",{className:"red-text"},e.email),r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",placeholder:"Password",type:"password",className:P()("form-control",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password",className:"sr-only"},"Password"),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign up")))}}]),t}(n.Component),V=Object(N.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){g.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(I.a)(F)),W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(L.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Sign In"),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(D.a,{to:"/register"},"Register")),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit,className:"form-signin"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",placeholder:"Email address",className:P()("form-control",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email address"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound),r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password",className:P()("form-control",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password",className:"sr-only"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Login")))}}]),t}(n.Component),G=Object(N.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){g.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),v(a);var n=E()(a);t(w(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(W),X=a(37),q=a(83),z=Object(N.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(X.a)(e,["component","auth"]);return r.a.createElement(p.a,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(q.a,{to:"/login"})}}))});a(72);var B=Object(N.b)(function(e){return{auth:e.auth}},{logoutUser:y})(function(){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"btn btn-primary dropdown-toggle",href:"/",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dashboard "),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"/symptoms"},"Symptoms"),r.a.createElement("a",{className:"dropdown-item",href:"/checkins"},"Check-Ins"),r.a.createElement("a",{className:"dropdown-item",href:"/logout"},"Logout")))}),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.covid19api.com/summary").then(function(t){console.log(t.data),e.setState({world:t.data})})}},{key:"render",value:function(){this.props.auth.user;return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"landing-copy col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into the Dashboard of "," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"CORONAVIRUS")," tracker \ud83d\udc4f")),r.a.createElement("div",{className:"card text-white bg-primary mb-3 dataCards"},r.a.createElement("div",{className:"card-header"}," Confirmed "),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))),r.a.createElement("div",{className:"card text-white bg-primary mb-3 dataCards"},r.a.createElement("div",{className:"card-header"}," Deaths "),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))),r.a.createElement("div",{className:"card text-white bg-primary mb-3 dataCards"},r.a.createElement("div",{className:"card-header"}," Recovered "),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."))),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"),r.a.createElement(B,null))))}}]),t}(n.Component),Y=Object(N.b)(function(e){return{auth:e.auth}},{logoutUser:y})(J);a(74);if(localStorage.jwtToken){var $=localStorage.jwtToken;v($);var H=E()($);T.dispatch(w(H));var K=Date.now()/1e3;H.exp<K&&(T.dispatch(y()),window.location.href="./login")}var Q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,{store:T},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(p.a,{exact:!0,path:"/",component:A}),r.a.createElement(p.a,{exact:!0,path:"/register",component:V}),r.a.createElement(p.a,{exact:!0,path:"/login",component:G}),r.a.createElement(h.a,null,r.a.createElement(z,{exact:!0,path:"/dashboard",component:Y})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);s.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[38,2,1]]]);
//# sourceMappingURL=main.50e8ff51.chunk.js.map