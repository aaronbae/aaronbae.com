(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(19),r=a.n(c),o=a(1),i=a(2),l=a(3),d=a(4),m=a(13),u=a(7),p=a(5),h=a(8),g={url:{POST_URL:"https://aaronbae.com/api/posts/",USER_URL:"https://aaronbae.com/api/users/"}};function v(e,t){return{type:"REMOVE_PARAGRAPH",post_index:e,paragraph_index:t}}function E(e,t){return{type:"UPDATE_POST",new_post:e,index:t}}function b(e){var t={};for(var a in Array.isArray(e)||(e=[e]),e)t[e[a]._id]=a;return{type:"RECEIVE_POSTS",posts:e,id2index:t,receivedAt:Date.now()}}function f(){return function(e){fetch(g.url.POST_URL).then((function(e){return e.json()})).then((function(t){return e(b(t))}))}}function N(e,t){var a={login_id:e,login_password:t};return function(e){var t=g.url.USER_URL+"login";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(t){return e(function(e){return 400===e.status?{type:"FAILED_ADMIN_PASSWORD",receivedAt:Date.now()}:{type:"SUCCEEDED_ADMIN_PASSWORD",receivedAt:Date.now()}}(t))}))}}function w(e){return{type:"CHANGE_EDIT_MODE",edit_mode:e}}function _(e){return{type:"VIEW_POST",post_id:e}}a(42);var y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={addClasses:e.addClasses+" link-button",message:e.message,route:e.route},n.handleRedirect=n.handleRedirect.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handleRedirect",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return s.a.createElement("button",{className:this.state.addClasses,onClick:this.handleRedirect.bind(this,this.state.route)},this.state.message)}}]),a}(n.Component),O=Object(u.g)(y),k=(a(44),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleLogOut=n.handleLogOut.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handleLogOut",value:function(e){e.stopPropagation();var t=this.props.dispatch;t({type:"SIGN_OUT",receivedAt:Date.now()}),t({type:"CLEAR_POSTS",posts:[],id2index:{}}),this.props.history.push("/login")}},{key:"render",value:function(){var e=this.props.logged_in,t=this.props.history.location.pathname;return s.a.createElement("div",{className:"header-container d-flex row"},s.a.createElement("div",{className:"offset-md-2 col-12 col-md-8 header-inner-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",null,s.a.createElement(O,{addClasses:"navbrand",message:"Aaron Bae",route:"/"})),s.a.createElement("div",{className:"d-none d-sm-block collapsable"},s.a.createElement("div",{className:"/"===t?"tab active":"tab"},s.a.createElement(O,{addClasses:"navlink",message:"Home",route:"/"})),s.a.createElement("div",{className:"tab line"}),s.a.createElement("div",{className:t.startsWith("/blog")||t.startsWith("/admin")?"tab active":"tab"},e&&s.a.createElement(O,{addClasses:"navlink",message:"Blog",route:"/admin"}),!e&&s.a.createElement(O,{addClasses:"navlink",message:"Blog",route:"/blog"})),s.a.createElement("div",{className:"/login"===t?"tab admin-container active":"admin-container"},e&&s.a.createElement("button",{className:"navlink adminButton",onClick:this.handleLogOut},"Sign Out"),!e&&s.a.createElement(O,{addClasses:"navlink adminButton",message:"Admin",route:"/login"}))),s.a.createElement("div",{className:"d-block d-sm-none dropdown-container"},s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{className:"btn",type:"button","data-toggle":"dropdown"},s.a.createElement("img",{className:"menu-icon",src:"assets/icons/hamburger_icon.png",alt:"menu"})),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},s.a.createElement(O,{addClasses:"dropdown-item",message:"Home",route:"/"}),s.a.createElement(O,{addClasses:"dropdown-item",message:"Blog",route:"/blog"}),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement(O,{addClasses:"dropdown-item",message:"Admin",route:"/login"})))))))}}]),a}(n.Component));var j=Object(h.b)((function(e){return{logged_in:e.AdminReducer.logged_in}}))(Object(u.g)(k)),C=(a(45),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row footer"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("a",{href:"https://github.com/aaronbae",title:"GitHub"},s.a.createElement("img",{src:"assets/icons/github.png",alt:"GitHub",className:"footer-link-icon"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/aaron-bae/",title:"LinkedIn"},s.a.createElement("img",{src:"assets/icons/linkedin.png",alt:"LinkedIn",className:"footer-link-icon"})),s.a.createElement("a",{href:"mailto:aaronbae@uw.edu",title:"email"},s.a.createElement("img",{src:"assets/icons/gmail.png",alt:"Email",className:"footer-link-icon"})))),s.a.createElement("div",{className:"row"},s.a.createElement("p",null,"Designed and Built by Aaron Bae"))))}}]),a}(n.Component)),x=(a(46),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row all-home-container"},s.a.createElement("div",{className:"side-panel center col-md-12 col-lg-3"},s.a.createElement("div",{className:"row row-spacer"}),s.a.createElement("div",{className:"row"},s.a.createElement("img",{className:"round profile-img",src:"assets/profile2.jpg",alt:"profile"})),s.a.createElement("div",{className:"row row-spacer"}),s.a.createElement("div",{className:"row"},s.a.createElement("ul",{className:"col"},s.a.createElement("li",{className:"row name-item"},s.a.createElement("span",{className:"h2 my-name"},"Aaron Beomjun Bae")),s.a.createElement("li",{className:"row bio-one-liner"},s.a.createElement("span",null,"Masters in Computer Science")),s.a.createElement("li",{className:"row bio-one-liner"},s.a.createElement("span",null,"UC Irvine Class of 2021")),s.a.createElement("li",{className:"row bio-one-liner"},s.a.createElement("span",null,"Focus on Natural Language Processing")),s.a.createElement("li",{className:"row bio-one-liner"},s.a.createElement("span",null,"Bachelor of Science in Mathematics")),s.a.createElement("li",{className:"row bio-one-liner"},s.a.createElement("span",null,"University of Washington Class of 2019")),s.a.createElement("li",{className:"row bio-one-liner"},s.a.createElement("a",{href:"assets/downloadables/resume.pdf",download:!0},"Download a copy of my resume")))),s.a.createElement("div",{className:"row row-spacer"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("a",{href:"https://github.com/aaronbae",title:"GitHub"},s.a.createElement("img",{src:"assets/icons/github.png",alt:"GitHub",className:"external-link-icon"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/aaron-bae/",title:"LinkedIn"},s.a.createElement("img",{src:"assets/icons/linkedin.png",alt:"LinkedIn",className:"external-link-icon"})),s.a.createElement("a",{href:"mailto:aaronbae@uw.edu",title:"email"},s.a.createElement("img",{src:"assets/icons/gmail.png",alt:"Email",className:"external-link-icon"})))),s.a.createElement("div",{className:"row row-spacer"})),s.a.createElement("div",{className:"main-panel col-md-12 col-lg-9"},s.a.createElement("div",{className:"row total-section"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row title-section"},s.a.createElement("p",{className:"col h3"},"Education")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row content-section"},s.a.createElement("div",{className:"col-md-12 col-lg-3 center"},s.a.createElement("img",{className:"education-img",src:"assets/uci_seal_500.png",alt:"University of California Irvine"})),s.a.createElement("div",{className:"col-md-12 col-lg-9"},s.a.createElement("span",null,s.a.createElement("span",{className:"h6"},"Masters in Computer Science"),", ",s.a.createElement("i",null,"University of California - Irvine")),s.a.createElement("ul",{className:"education-bullets"},s.a.createElement("li",null,"Started attending since September 2019."),s.a.createElement("li",null,"Focus in natural language processing using transformer based models."),s.a.createElement("li",null,"Participating in Center for Machine Learning and Intelligent Systems."),s.a.createElement("li",null,"Looking for full time software engineering or data scientist role after graduation")))),s.a.createElement("div",{className:"row content-section"},s.a.createElement("div",{className:"col-md-12 col-lg-3 center"},s.a.createElement("img",{className:"education-img",src:"assets/uw_seal_500.jpg",alt:"University of Washington"})),s.a.createElement("div",{className:"col-md-12 col-lg-9"},s.a.createElement("span",null,s.a.createElement("span",{className:"h6"},"Bachelor of Science in Mathematics"),", ",s.a.createElement("i",null,"University of Washington")),s.a.createElement("ul",{className:"education-bullets"},s.a.createElement("li",null,"Attended from September 2015 until June 2019"),s.a.createElement("li",null,"Applicable Mathematics classes such as Matrix Algebra, Differential Equations, and Mathematical Reasoning "),s.a.createElement("li",null,"Applicable Data Science classes such as Database Management, Data Structures and Algorithms, and Artificial Intelligence "),s.a.createElement("li",null,"Efficient in Python, Java, JavaScript, MySQL, AWS, D3, NodeJS, React, AJAX, Ruby, Sparks"),s.a.createElement("li",null,"Abundant research experience from Washington Experimental Mathematics Lab (WXML) and assistantship to graduate researcher at Foster School of Business."),s.a.createElement("li",null,"Member of the Sigma Nu Fraternity Gamma Chi Chapter.")))))))),s.a.createElement("div",{className:"row total-section"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row title-section"},s.a.createElement("p",{className:"col h3"},"Technical Experiences")),s.a.createElement("div",{className:"row content-section"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row individual-experience"},s.a.createElement("div",{className:"col logo-col center no-padding"},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("img",{src:"assets/icons/uci.png",alt:"university of california, irvine logo",className:"company-logo"}))),s.a.createElement("div",{className:"col experience-col"},s.a.createElement("div",{className:"row experience-title"},s.a.createElement("div",null,s.a.createElement("span",{className:"h5"},"Graduate Student Researcher")),s.a.createElement("div",{className:"support-info ml-auto"},s.a.createElement("span",null,"- University of California, Irvine"),s.a.createElement("span",{className:"float-right"},"March 2020 - Present"))),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"h6"},"Professor Padhraic Smyth Research Team"),s.a.createElement("p",null,"As a graduate researcher for Professor Padhraic Smyth, I am working on ways to analyze dialogue dataset. Datasets like Switchboard Corpus and ICSI Meeting Recording Corpus contains a turn-by-turn grouped utterances along with semantic annotations. The goal of the project is to analyze this conversational dataset to identify questions in any group conversations and possibly classify person-to-person dynamics like leadership qualities.")))),s.a.createElement("div",{className:"row individual-experience"},s.a.createElement("div",{className:"col logo-col center no-padding"},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("img",{src:"assets/icons/uw_logo.png",alt:"university of washington logo",className:"company-logo"}))),s.a.createElement("div",{className:"col experience-col"},s.a.createElement("div",{className:"row experience-title"},s.a.createElement("div",null,s.a.createElement("span",{className:"h5"},"Undergraduate Researcher")),s.a.createElement("div",{className:"support-info ml-auto"},s.a.createElement("span",null,"- University of Washington"),s.a.createElement("span",{className:"float-right"},"Jun 2018 - Jun 2019"))),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"h6"},"Washington Experimental Mathematics Lab"),s.a.createElement("p",null,"I was invited to work with Professor Christopher Hoffman to participate on his Mathematics in Gerrymandering Project. He works to analyze search the state space for the ways to draw out the districts. We used C++ and Python as the engine of the project, and built NodeJS servers to distribute, visualize, and explain the political data we mined."),s.a.createElement("p",{className:"h6"},"Assitantship to Emisa Nateigh, Ph.D:"),s.a.createElement("p",null,"As a lab assistant to Emisa Nateigh, a Ph.D student at the University of Washington Foster School of business, I helped to create a machine learning system to perform Multi-Tasking Gaussian Process learning algorithm on the collected medical data. Mainly, used Python and NumPy to carry out the statistical process. Used MatplotLib and D3.js to visualize the information.")))),s.a.createElement("div",{className:"row individual-experience"},s.a.createElement("div",{className:"col logo-col center no-padding"},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("img",{src:"assets/icons/dapper.jpg",alt:"dapper company logo",className:"company-logo"}))),s.a.createElement("div",{className:"col experience-col"},s.a.createElement("div",{className:"row experience-title"},s.a.createElement("div",null,s.a.createElement("span",{className:"h5"},"Backend Software Engineer")),s.a.createElement("div",{className:"support-info ml-auto"},s.a.createElement("span",null,"- Dapper Grooming"),s.a.createElement("span",{className:"float-right"},"Jun 2018 - August 2019"))),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"h6"},"Dapper Grooming | Backend Server Development Team"),s.a.createElement("p",null,"Continuing my intersets in backend web development, I worked with a University of Washington alumn who was starting a company called Dapper. The company needed a basic web based platform to launch their project, and I helped them by creating an AWS server to handle their client traffic.")))),s.a.createElement("div",{className:"row individual-experience"},s.a.createElement("div",{className:"col logo-col no-padding center"},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("img",{src:"assets/icons/crowdcow.jpg",alt:"crowd cow company logo",className:"company-logo"}))),s.a.createElement("div",{className:"col experience-col"},s.a.createElement("div",{className:"row experience-title"},s.a.createElement("div",null,s.a.createElement("span",{className:"h5"},"Software Engineering Intern")),s.a.createElement("div",{className:"support-info ml-auto"},s.a.createElement("span",null,"- Crowd Cow"),s.a.createElement("span",{className:"float-right"},"Jun 2017 - August 2017"))),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"h6"},"Frontend Developer:"),s.a.createElement("p",null,"As a frontend developer, I worked on improving CrowdCow's private e-commerce platform by changing the client purchase UI pipeline. Also, worked on various features like in-house data visualization dashboard that displays company statistics."),s.a.createElement("p",{className:"h6"},"Backend Developer:"),s.a.createElement("p",null,"As a backend developer, I worked on middlman the information between the database and the client servers. Main technologies that I used were MySQL, Ruby on Rails, Git, Budler, RuboCop, Stripe, and Puma."))))))))))}}]),a}(n.Component));function S(e){var t=new Date(e),a=new Date(t.getTime()-6e4*(new Date).getTimezoneOffset());return["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"][a.getDay()]+", "+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate()+", "+a.getFullYear()}a(47);var P=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={post_id:e.post_id},n.handlePostClick=n.handlePostClick.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handlePostClick",value:function(e){e.stopPropagation(),this.props.history.push("/blog/"+this.props.post_id)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.date,n=e.summarized_content,c=S(a);return s.a.createElement("div",{className:"individual-post-container col-12 col-sm-6",onClick:this.handlePostClick},s.a.createElement("div",{className:"row individual-post"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row date"},c),s.a.createElement("div",{className:"row title"},t),s.a.createElement("div",{className:"row"},n),s.a.createElement("div",{className:"row read-more"},"Read More"))))}}]),a}(n.Component);var A=Object(u.g)(Object(h.b)((function(e,t){var a=e.BlogReducer,n=a.posts[a.id2index[t.post_id]];return{title:n.title.substring(0,61)+(n.title.length>61?"...":""),date:n.createtime,summarized_content:n.content.join(" ").substring(0,100)+"..."}}))(P)),D=(a(48),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)((function(e){fetch(g.url.POST_URL+"public").then((function(e){return e.json()})).then((function(t){return e(b(t))}))}))}},{key:"render",value:function(){var e=this.props.posts;return s.a.createElement("div",{className:"row all-blog-container"},s.a.createElement("div",{className:"offset-sm-0 col-sm-12 offset-md-2 col-md-8"},s.a.createElement("div",{className:"row whats-new-container"},"What's New?"),s.a.createElement("div",{className:"row post-container"},e.map((function(e,t){return s.a.createElement(A,{key:t,post_id:e._id})})))))}}]),a}(n.Component));var R=Object(h.b)((function(e){return{posts:e.BlogReducer.posts,logged_in:e.AdminReducer.logged_in}}))(D),I=(a(49),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(function(e){return function(t){fetch(g.url.POST_URL+e).then((function(e){return e.json()})).then((function(e){return t(b(e))}))}}(this.props.match.params.id)),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props.posts,t=this.props.match.params.id,a=e.length>0;if(a)var n=e[this.props.id2index[t]];return s.a.createElement("div",{className:"row post-viewer-container "},a&&s.a.createElement("div",{className:"offset-2 col-8 post-viewer-main-col"},s.a.createElement("div",{className:"row viewer-information-row"},s.a.createElement("div",{className:"col-5 no-padding"},S(n.createtime)),s.a.createElement("div",{className:"col-7 no-padding"},s.a.createElement("div",{className:"float-right"},s.a.createElement("span",{className:"tags-label"},"Tags : "),n.tags.map((function(e,t){return s.a.createElement("span",{key:t,className:"tag "+e},e+", ")}))))),s.a.createElement("div",{className:"row viewer-title-row"},n.title),s.a.createElement("div",{className:"row viewer-content-row"},n.content.map((function(e,t){return s.a.createElement("div",{className:"content-paragraph",key:t},e)})))))}}]),a}(n.Component));var T=Object(h.b)((function(e){var t=e.BlogReducer,a=t.posts;return{id2index:t.id2index,posts:a}}))(I),M=(a(50),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSignInButton=n.handleSignInButton.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.props.logged_in&&this.props.history.push("/admin")}},{key:"handleSignInButton",value:function(e){e.stopPropagation();var t=document.getElementsByClassName("text-input");(0,this.props.dispatch)(N(t[0].value,t[1].value))}},{key:"render",value:function(){var e=this.props.failed_attempt;return s.a.createElement("div",{className:"row all-signin-container"},s.a.createElement("div",{className:"main-column col-10 col-sm-5 col-md-4"},s.a.createElement("div",{className:"form-unit"},s.a.createElement("div",{className:"row admin-title-row"},s.a.createElement("h3",null,"Admin Access")),s.a.createElement("div",{className:"row form-item-row"},s.a.createElement("input",{className:e?"incorrect text-input":"text-input",type:"text",placeholder:"Admin Id"})),s.a.createElement("div",{className:"row form-item-row"},s.a.createElement("input",{className:e?"incorrect text-input":"text-input",type:"password",placeholder:"Admin Password"})),s.a.createElement("div",{className:"row buttons-row form-item-row"},s.a.createElement("button",{className:"sign-in-button",onClick:this.handleSignInButton},"Sign In")))))}}]),a}(n.Component));var B=Object(h.b)((function(e){return{logged_in:e.AdminReducer.logged_in,failed_attempt:e.AdminReducer.failed_attempt}}))(Object(u.g)(M)),U=(a(51),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={post_id:e.post_id},n.handlePostClick=n.handlePostClick.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handlePostClick",value:function(e){e.stopPropagation();var t=this.props,a=t.dispatch;t.edit_mode||(a(_(this.state.post_id)),window.scrollTo(0,0))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.date,n=e.summarized_content,c=S(a);return s.a.createElement("div",{className:"row admin-post-container",onClick:this.handlePostClick},s.a.createElement("div",{className:"individual-post"},s.a.createElement("div",{className:"offset-1 col-10"},s.a.createElement("div",{className:"row date"},c),s.a.createElement("div",{className:"row title"},s.a.createElement("p",{className:"h5"},t)),s.a.createElement("div",{className:"row"},n))))}}]),a}(n.Component));var L=Object(u.g)(Object(h.b)((function(e,t){var a=e.AdminReducer,n=a.edit_mode,s=a.selected_post,c=e.BlogReducer.posts[t.post_id];return{edit_mode:n,selected_post:s,title:c.title.substring(0,61)+(c.title.length>61?"...":""),date:c.createtime,summarized_content:c.content.join(" ").substring(0,100)+"..."}}))(U)),H=a(15),W=a(6),G=(a(52),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var s=.8*parseInt(e.width.slice(0,-2)),c=(s/1.7).toString()+"px";return n.state={checked:e.checked,click_behavior:e.click_behavior,style_object:{width:s.toString()+"px",height:c}},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:this.props.checked})}},{key:"render",value:function(){return s.a.createElement("div",{className:"public-toggle-container"},s.a.createElement("label",{className:"switch",style:this.state.style_object},s.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.state.click_behavior}),s.a.createElement("span",{className:"slider round"})))}}]),a}(n.Component)),J=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).update_public=n.update_public.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"update_public",value:function(e){e.stopPropagation();var t=this.props,a=t.dispatch,n=t.posts,s=t.index,c=n[s];a(E(Object(W.a)({},c,{public:!c.public}),s))}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.index;return s.a.createElement(G,{checked:t[a].public,width:"50px",click_behavior:this.update_public})}}]),a}(n.Component);var F=Object(h.b)((function(e){var t=e.AdminReducer.selected_post;return{posts:e.BlogReducer.posts,index:t}}))(J),z=(a(53),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).enterEditMode=n.enterEditMode.bind(Object(p.a)(n)),n.update_title=n.update_title.bind(Object(p.a)(n)),n.update_tags=n.update_tags.bind(Object(p.a)(n)),n.save_changes=n.save_changes.bind(Object(p.a)(n)),n.cancel_changes=n.cancel_changes.bind(Object(p.a)(n)),n.handle_delete_button=n.handle_delete_button.bind(Object(p.a)(n)),n.update_content=n.update_content.bind(Object(p.a)(n)),n.key_down=n.key_down.bind(Object(p.a)(n)),n.handle_focus=n.handle_focus.bind(Object(p.a)(n)),n.state={post_update_focus_paragraph_index:0,post_update_focus_character_index:0},n}return Object(i.a)(a,[{key:"focus",value:function(e,t){var a=document.getElementsByClassName("post-editor-paragraph")[e];t=Math.min(t,a.innerHTML.length),a.focus(),a.setSelectionRange(t,t)}},{key:"componentDidUpdate",value:function(e){if(Array.from(document.getElementsByClassName("resize-required")).forEach((function(e){e.style.height="0px",e.style.height=e.scrollHeight+1+"px"})),this.props.edit_mode&&-1!==this.props.index&&e.posts.length>0){var t=this.props.index;this.props.posts[t].content.length!==e.posts[t].content.length&&this.focus(this.state.post_update_focus_paragraph_index,this.state.post_update_focus_character_index)}}},{key:"enterEditMode",value:function(e){e.stopPropagation(),(0,this.props.dispatch)(w(!0))}},{key:"update_title",value:function(e){e.stopPropagation();var t=this.props,a=t.dispatch,n=t.posts,s=t.index;a(E(Object(W.a)({},n[s],{title:e.target.value}),s))}},{key:"key_down",value:function(e){var t=this.props,a=t.posts,n=t.dispatch,s=t.index,c=parseInt(a[s].content.length),r=parseInt(e.target.getAttribute("index")),o=e.target.value,i=parseInt(e.target.selectionStart);if("Enter"===e.key){e.stopPropagation(),e.preventDefault();var l=Object(H.a)(a[s].content);l[r]=o.substring(0,i);var d=o.substring(i);n(E(Object(W.a)({},a[s],{content:l}),s)),n(function(e,t,a){return{type:"ADD_NEW_PARAGRAPH",post_index:e,paragraph_index:t,initial_content:a}}(s,r,d)),this.setState({post_update_focus_paragraph_index:r+1,post_update_focus_character_index:0})}else if("Backspace"===e.key&&0===i&&r>0){e.stopPropagation(),e.preventDefault();var m=Object(H.a)(a[s].content);m[r-1]=m[r-1]+o,n(E(Object(W.a)({},a[s],{content:m}),s)),n(v(s,r)),this.setState({post_update_focus_paragraph_index:r-1,post_update_focus_character_index:m[r-1].length-o.length})}else if("Delete"===e.key&&i===o.length&&r<c-1){e.stopPropagation(),e.preventDefault();var u=Object(H.a)(a[s].content);u[r]=o+u[r+1],n(E(Object(W.a)({},a[s],{content:u}),s)),n(v(s,r+1)),this.setState({post_update_focus_paragraph_index:r,post_update_focus_character_index:o.length})}else"ArrowUp"===e.key&&0===i&&r>0?(e.stopPropagation(),e.preventDefault(),this.focus(r-1,i)):"ArrowDown"===e.key&&i===o.length&&r<c-1?(e.stopPropagation(),e.preventDefault(),this.focus(r+1,i)):"ArrowLeft"===e.key&&0===i&&r>0?(e.stopPropagation(),e.preventDefault(),this.focus(r-1,Number.MAX_VALUE)):"ArrowRight"===e.key&&i===o.length&&r<c-1&&(e.stopPropagation(),e.preventDefault(),this.focus(r+1,0))}},{key:"handle_focus",value:function(e){e.target.value.length}},{key:"update_content",value:function(e){e.stopPropagation();var t=this.props,a=t.dispatch,n=t.posts,s=t.index,c=Object(H.a)(n[s].content);c[e.target.getAttribute("index")]=e.target.value,a(E(Object(W.a)({},n[s],{content:c}),s))}},{key:"update_tags",value:function(e){e.stopPropagation();var t=this.props,a=t.dispatch,n=t.posts,s=t.index;a(E(Object(W.a)({},n[s],{tags:e.target.value.split(",")}),s))}},{key:"save_changes",value:function(e){e.stopPropagation();var t=this.props;(0,t.dispatch)(function(e){var t=g.url.POST_URL+"update/"+e._id.toString();return function(a){fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return a(w(!1))}))}}(t.posts[t.index]))}},{key:"cancel_changes",value:function(e){e.stopPropagation();var t=this.props.dispatch;t(f()),t(w(!1))}},{key:"handle_delete_button",value:function(e){e.stopPropagation();var t=this.props;(0,t.dispatch)(function(e){var t=g.url.POST_URL+"delete/"+e.toString();return function(e){fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){return e(f())})).then((function(){return e(w(!1))}))}}(t.posts[t.index]._id))}},{key:"render",value:function(){var e=this,t=this.props,a=t.edit_mode,n=t.logged_in,c=t.index,r=t.posts,o="",i={};return-1!==c&&(o=S((i=r[c]).createtime)),s.a.createElement("div",{className:"row post-editor-container"},c>-1&&s.a.createElement("div",{className:a?"col post-editor-main-col hidden":"col post-editor-main-col"},s.a.createElement("div",{className:"row title-row"},s.a.createElement("p",{className:"p-title"},i.title)),s.a.createElement("div",{className:"row information-row"},s.a.createElement("div",{className:"col-5 no-padding"},o),s.a.createElement("div",{className:"col-7 no-padding"},s.a.createElement("div",{className:"float-right"},s.a.createElement("span",{className:"tags-label"},"Tags : "),i.tags.map((function(e,t){return s.a.createElement("span",{key:t,className:"tag "+e},e+", ")})),n&&s.a.createElement("span",{className:"edit-button",onClick:this.enterEditMode},"Edit Post")))),s.a.createElement("div",{className:"row content-row"},i.content.map((function(e,t){return s.a.createElement("div",{className:"plain-content content-paragraph",key:t},e)})))),c>-1&&s.a.createElement("div",{className:a?"col post-editor-main-col":"col post-editor-main-col hidden"},s.a.createElement("div",{className:"row title-row"},s.a.createElement("textarea",{className:"resize-required",value:i.title,onChange:this.update_title,placeholder:"Your Title..."})),s.a.createElement("div",{className:"row information-row"},s.a.createElement("div",{className:"col-sm-12 col-md-5 no-padding"},o),s.a.createElement("div",{className:"col-sm-12 col-md-7 no-padding"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"offset-md-5 col-sm-6 col-md-4"},s.a.createElement("span",{className:"tags-label "},"Tags : "),s.a.createElement("input",{className:"tags-input",type:"text",value:i.tags,onChange:this.update_tags,placeholder:"tag, tag, ..."})),s.a.createElement("div",{className:"col-sm-6 col-md-3"},s.a.createElement("span",{className:"toggle-label"},"Public: "),s.a.createElement(F,null))))),s.a.createElement("div",{className:"row content-row"},i.content.map((function(t,a){return s.a.createElement("textarea",{key:a,index:a,className:"resize-required content-paragraph post-editor-paragraph",value:t,onChange:e.update_content,onKeyDown:e.key_down,onFocus:e.handle_focus,placeholder:0===a?"What's on your Mind?":""})}))),s.a.createElement("div",{className:"row button-row"},s.a.createElement("div",null,s.a.createElement("button",{className:"save-button",type:"button",onClick:this.save_changes},"Save"),s.a.createElement("button",{className:"delete-button",type:"button",onClick:this.handle_delete_button},"Delete"),s.a.createElement("button",{className:"cancel-button",type:"button",onClick:this.cancel_changes},"Cancel")))))}}]),a}(n.Component));var V=Object(h.b)((function(e){var t=e.AdminReducer,a=t.edit_mode,n=t.selected_post,s=e.BlogReducer.posts;return{logged_in:e.AdminReducer.logged_in,edit_mode:a,posts:s,index:n}}))(z),q=(a(54),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNewPostButton=n.handleNewPostButton.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handleNewPostButton",value:function(e){e.stopPropagation(),(0,this.props.dispatch)((function(e){var t=g.url.POST_URL+"add/";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(t){e({type:"ADD_NEW_POST",new_post:t.post}),e(_(0)),e(w(!0))}))}))}},{key:"componentDidMount",value:function(){(0,this.props.dispatch)(f())}},{key:"renderRedirect",value:function(){if(!this.props.logged_in)return s.a.createElement(u.a,{to:"/login"})}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.logged_in;return s.a.createElement("div",{className:"row admin-blog-container"},this.renderRedirect(),s.a.createElement("div",{id:"blog-column",className:"col-12 col-sm-3 post-column"},s.a.createElement("div",{className:"row center post-column-title"},s.a.createElement("p",{className:"h4"},"Recent Posts"),a&&s.a.createElement("button",{className:"new-post-button h3",type:"button",onClick:this.handleNewPostButton},"+")),t.map((function(e,t){return s.a.createElement(L,{key:t,post_id:t})}))),s.a.createElement("div",{className:"col-12 col-sm-9"},s.a.createElement(V,null)))}}]),a}(n.Component));var X=Object(h.b)((function(e){return{logged_in:e.AdminReducer.logged_in,posts:e.BlogReducer.posts}}))(q),Y=(a(55),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rows:[""],index:0},n.clickHandler=n.clickHandler.bind(Object(p.a)(n)),n.keyDownHandler=n.keyDownHandler.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"clickHandler",value:function(e){this.setState({index:e.target.tabIndex})}},{key:"keyDownHandler",value:function(e){e.preventDefault();var t=this.state.rows,a=this.state.index;1===e.key.length?t[a]+=e.key:"Enter"===e.key?(t.splice(a+1,0,""),a+=1):"Backspace"===e.key&&(""===t[a]?(t.splice(a,1),a-=1):t[a]=t[a].slice(0,-1)),this.setState({rows:t,index:a})}},{key:"render",value:function(){var e=this,t=this.state.rows;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col",id:"editable-container"},t.map((function(t,a){return s.a.createElement("div",{key:a,tabIndex:a,className:"row editable",onClick:e.clickHandler,onKeyDown:e.keyDownHandler},t)}))))}}]),a}(n.Component)),K=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectedFile:null},n.onChangeHandler=n.onChangeHandler.bind(Object(p.a)(n)),n.onClickHandler=n.onClickHandler.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"onChangeHandler",value:function(e){this.setState({selectedFile:e.target.files[0],loaded:0})}},{key:"onClickHandler",value:function(){var e=new FormData;e.append("file",this.state.selectedFile),fetch("http://localhost:4000/files/upload",{method:"POST",body:e}).then((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"row sender-container"},s.a.createElement("input",{type:"file",name:"file",onChange:this.onChangeHandler,style:{border:"solid 1px black",width:"100%",marginBottom:"2px"}}),s.a.createElement("button",{type:"button",className:"btn btn-success btn-block",onClick:this.onClickHandler},"Upload"))}}]),a}(n.Component),Q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row",style:{minHeight:"80vh"}},s.a.createElement("div",{className:"col"},s.a.createElement(Y,null),s.a.createElement(K,null)))}}]),a}(n.Component),Z=(a(56),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row all-notready-container"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",{className:"display-4"},"This Page Doesn't Exist..."),s.a.createElement("p",{className:"lead"},"Looks like you are trying to reach a page that does not exist. Check your URL one more time! Meanwhile, here is a cool link below!"),s.a.createElement("a",{className:"btn btn-primary btn-lg",href:"https://www.youtube.com/watch?v=DNWWi8RYzhM",role:"button"},"Surprise Link")))}}]),a}(n.Component)),$=(a(57),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(m.a,null,s.a.createElement("div",{className:"container-fluid base_container"},s.a.createElement(j,null),s.a.createElement(u.d,null,s.a.createElement(u.b,{exact:!0,path:"/",component:x}),s.a.createElement(u.b,{exact:!0,path:"/blog",component:R}),s.a.createElement(u.b,{exact:!0,path:"/blog/:id",component:T}),s.a.createElement(u.b,{exact:!0,path:"/admin",component:X}),s.a.createElement(u.b,{exact:!0,path:"/admin",component:X}),s.a.createElement(u.b,{exact:!0,path:"/login",component:B}),s.a.createElement(u.b,{exact:!0,path:"/test",component:Q}),s.a.createElement(u.b,{component:Z})),s.a.createElement(C,null)))}}]),a}(n.Component)),ee=(a(28),a(60),a(17)),te=a(31),ae={id2index:{},posts:[]};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,a=Object(H.a)(e.posts);switch(t.type){case"REMOVE_PARAGRAPH":return a[t.post_index].content.splice(t.paragraph_index,1),Object(W.a)({},e,{posts:a});case"ADD_NEW_PARAGRAPH":return a[t.post_index].content.splice(parseInt(t.paragraph_index)+1,0,t.initial_content),Object(W.a)({},e,{posts:a});case"CLEAR_POSTS":return Object(W.a)({},e,{posts:t.posts,id2index:t.id2index});case"UPDATE_POST":return a[t.index]=t.new_post,Object(W.a)({},e,{posts:a});case"RECEIVE_POSTS":return Object(W.a)({},e,{posts:t.posts,id2index:t.id2index});case"ADD_NEW_POST":return a.unshift(t.new_post),Object(W.a)({},e,{posts:a});default:return e}},se={failed_attempt:!1,logged_in:!1,edit_mode:!1,selected_post:-1};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIEW_POST":return Object(W.a)({},e,{selected_post:t.post_id});case"SIGN_OUT":return Object(W.a)({},e,{logged_in:!1});case"FAILED_ADMIN_PASSWORD":return Object(W.a)({},e,{failed_attempt:!0});case"SUCCEEDED_ADMIN_PASSWORD":return Object(W.a)({},e,{failed_attempt:!1,logged_in:!0});case"CHANGE_EDIT_MODE":return Object(W.a)({},e,{edit_mode:t.edit_mode});default:return e}},re=Object(ee.c)({BlogReducer:ne,AdminReducer:ce}),oe=Object(ee.d)(re,Object(ee.a)(te.a));r.a.render(s.a.createElement(h.a,{store:oe},s.a.createElement($,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7547c21c.chunk.js.map