(this["webpackJsonppublicis-sapient"]=this["webpackJsonppublicis-sapient"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/loading.a7123a12.gif"},13:function(e,a,t){e.exports=t.p+"static/media/NoData.0b823006.png"},17:function(e,a,t){e.exports=t(23)},22:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),l=t.n(r),s=(t(22),t(10)),i=t(11),o=t(5),u=t(15),m=t(14),d=t(6),h=t.n(d),g=t(26),f=t(24),b=t(25),E=(t(7),t(12)),v=t.n(E);function p(){var e={imageWrapper:{position:"absolute",maxWidth:"45%",maxHeight:"45%",top:"50%",left:"50%",overflow:"visible"},imageWidth:{position:"relative",maxWidth:"100%",maxHeight:"100%",marginTop:"-50%",marginLeft:"-50%"}};return c.a.createElement("div",{style:e.imageWrapper},c.a.createElement("img",{style:e.imageWidth,src:v.a,className:"loading",alt:"Loading..."}))}var y=t(13),L=t.n(y),_=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],C={year_filter:{margin:"5px",minWidth:"70px",backgroundColor:"#c5e09b",color:"#444"}},x=function(e){var a=e.yearChange,t=e.selectedYear;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"text-center divider mb-3 border-bottom"},"Launch Year"),c.a.createElement("div",{className:"row"},_.map((function(e){return c.a.createElement("div",{class:"col-sm-6 col-md-6 col-6"},c.a.createElement("button",{class:!0,style:C.year_filter,className:"btn btn-success year-filter  ".concat(t===e?"active":""),key:e,onClick:function(){return a(e)}}," ",e," "))}))))},F={year_filter:{margin:"5px",minWidth:"70px",backgroundColor:"#c5e09b",color:"#444"}};function N(e){var a=e.onLaunchChange,t=e.launchFlag;return c.a.createElement("div",null,c.a.createElement("div",{className:"text-center divider mb-3 border-bottom mt-3"},"Successful Launch"),c.a.createElement("button",{style:F.year_filter,className:"btn btn-success year-filter ".concat(!0===t?"active":""),onClick:function(){return a(!0)}}," True "),c.a.createElement("button",{style:F.year_filter,className:"btn btn-success year-filter ".concat(!1===t?"active":""),onClick:function(){return a(!1)}}," False "))}var k={year_filter:{margin:"5px",minWidth:"70px",backgroundColor:"#c5e09b",color:"#444"}};function w(e){var a=e.onLandChange,t=e.landFlag;return c.a.createElement("div",null,c.a.createElement("div",{className:"text-center divider mb-3 border-bottom mt-3"},"Successful Landing"),c.a.createElement("button",{style:k.year_filter,className:"btn btn-success year-filter ".concat(!0===t?"active":""),onClick:function(){return a(!0)}}," True "),c.a.createElement("button",{style:k.year_filter,className:"btn btn-success year-filter ".concat(!1===t?"active":""),onClick:function(){return a(!1)}}," False "))}var W=function(e){var a=e.yearChange,t=e.onLaunchChange,n=e.onLandChange,r=e.year,l=e.launchFlag,s=e.landFlag;return c.a.createElement("div",{style:{background:" #fff",margin:"0 15px"},className:"p-2"},c.a.createElement("h1",null,"Filters "),c.a.createElement(x,{yearChange:a,selectedYear:r}),c.a.createElement(N,{onLaunchChange:t,launchFlag:l}),c.a.createElement(w,{onLandChange:n,landFlag:s}))},S={cards:{height:"500px"},img_filter:{maxWidth:"150px",margin:"10px auto"}},D=function(e){e.key;var a=e.flight;return c.a.createElement("div",{style:S.cards,className:"card mb-2"},c.a.createElement("img",{style:S.img_filter,src:a.links.mission_patch,className:"card-img-top",alt:"Mission Patch"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"}," ",a.mission_name," #",a.flight_number," "),c.a.createElement("div",{className:"card-content"},a.mission_id.length>0&&c.a.createElement("p",null,c.a.createElement("strong",null,"Mission Ids : ")," ",a.mission_id.toString()),c.a.createElement("p",null,c.a.createElement("strong",null,"Launch Year : ")," ",a.launch_year),c.a.createElement("p",null,c.a.createElement("strong",null,"Successful Launch : ")," ",a.launch_success?"True":"False"," "),c.a.createElement("p",null,c.a.createElement("strong",null,"Successful Landing : ")," ",a.rocket.first_stage.cores[0].land_success?"True":"False"," "))))},P=function(e){var a=e.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null,a.map((function(e){return c.a.createElement(b.a,{md:6,xl:3,sm:12,className:"col-xs-12"},"  ",c.a.createElement(D,{key:e.flight_number,flight:e})," ")}))))},R=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onDataReceived=function(e){n.setState({data:e,isLoaded:!0})},n.onYearChange=function(e){var a=new URL(n.state.url);null!==a.searchParams.get("launch_year")?(a.searchParams.set("launch_year",e),a=a.href):a=n.state.url+"&launch_year="+e,n.setState({isLoaded:!1,url:a,year:e}),h.a.get(a,function(e){this.onDataReceived(e)}.bind(Object(o.a)(n)))},n.onLaunchChange=function(e){var a=new URL(n.state.url);null!==a.searchParams.get("launch_success")?(a.searchParams.set("launch_success",e),a=a.href):a=n.state.url+"&launch_success="+e,n.setState({isLoaded:!1,url:a,launchFlag:e}),h.a.get(a,function(e){this.onDataReceived(e)}.bind(Object(o.a)(n)))},n.onLandChange=function(e){var a=new URL(n.state.url);null!==a.searchParams.get("land_success")?(a.searchParams.set("land_success",e),a=a.href):a=n.state.url+"&land_success="+e,n.setState({isLoaded:!1,url:a,landFlag:e}),h.a.get(a,function(e){this.onDataReceived(e)}.bind(Object(o.a)(n)))},n.state={data:[],isLoaded:!1,url:"https://api.spaceXdata.com/v3/launches?limit=100",year:2006,launchFlag:"",landFlag:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){h.a.get(this.state.url,function(e){this.onDataReceived(e)}.bind(this))}},{key:"render",value:function(){return this.state.isLoaded?n.createElement(n.Fragment,null,n.createElement(g.a,{fluid:!0},n.createElement(f.a,null,n.createElement("h1",{className:"m-4"}," SpacEx Launch Programs")),n.createElement(f.a,{className:"text-center"},n.createElement(b.a,{md:4,sm:6,className:"mb-4 col-xs-12"},n.createElement(W,{year:this.state.year,yearChange:this.onYearChange,onLaunchChange:this.onLaunchChange,onLandChange:this.onLandChange,launchFlag:this.state.launchFlag,landFlag:this.state.landFlag})," "),this.state.data.length>0&&n.createElement(b.a,{md:8,sm:6}," ",n.createElement(P,{data:this.state.data})," "),0===this.state.data.length&&n.createElement(b.a,{md:8,sm:6},"  ",n.createElement("img",{width:"100%",src:"".concat(L.a),alt:"No Data"})," ")))):n.createElement(p,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.186df787.chunk.js.map