(function(t){function e(e){for(var r,o,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},2036:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"auto"}},[a("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[a("b-col",{attrs:{md:"4"}},[a("RecommendForm")],1),a("b-col",{attrs:{md:"2"}},[a("StrategyResult")],1),a("b-col",{attrs:{md:"6"}},[a("StockChart")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"lg"}},[t.show?a("b-form",{attrs:{id:"MA-param-form"},on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-row",{staticClass:"mb-2"},[a("b-col",{attrs:{cols:"6"}},[t._v(" 訓練起始日期 ")]),a("b-col",{attrs:{cols:"6"}},[t._v(" 訓練截止日期 ")])],1),a("b-form-row",[a("b-col",{attrs:{cols:"6"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"training_start",state:t.date1State,required:""},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"training_end",state:t.date2State,required:""},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1)],1),a("b-form-row",[a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"secondary"}},[t._v("Recommend")])],1),a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1):t._e()],1)},o=[],c=a("5530"),i=a("2f62"),l={name:"RecommendForm",data:function(){return{form:{start:"",end:""},show:!0}},computed:{date1State:function(){if(""===this.form.start)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==t.getDay()&&6!==t.getDay()&&t.getTime()!==e.getTime()},date2State:function(){if(""===this.form.end)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==e.getDay()&&6!==e.getDay()&&t.getTime()!==e.getTime()}},updated:function(){var t=this;this.$nextTick((function(){if(""!==t.form.start&&""!==t.form.end){var e=new Date(t.form.start),a=new Date(t.form.end);e>a&&(t.form.start=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),t.form.end=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate())}}))},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["actionRecommendMA"])),{},{onSubmit:function(t){t.preventDefault(),this.actionRecommendMA(this.form)},onReset:function(t){var e=this;t.preventDefault(),this.form.start="",this.form.end="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},f=l,u=a("2877"),d=Object(u["a"])(f,n,o,!1,null,null,null),b=d.exports,m=a("69e1"),p=a("8ac4"),h={name:"Recommendation",components:{StrategyResult:p["a"],RecommendForm:b,StockChart:m["a"]}},v=h,j=Object(u["a"])(v,r,s,!1,null,"cd7df32a",null);e["a"]=j.exports},"3dfd":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-headful",{attrs:{title:"Lab 114 Fintech"}}),a("NavBar"),a("router-view"),a("Footer")],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("img",{attrs:{alt:"Fat cat logo",src:a("9b19")}}),t._v(" FinTech ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"/intro"}},[t._v("技術指標介紹")]),r("b-nav-item",{attrs:{href:"/recommendation"}},[t._v("智慧推薦")]),r("b-nav-item",{attrs:{href:"/custom"}},[t._v("自訂技術指標")]),r("b-nav-item",{attrs:{href:"https://fintech-114.herokuapp.com/api/test"}},[t._v("API Test")]),r("b-nav-item",{attrs:{href:"https://fintech-114.herokuapp.com/admin"}},[t._v("DB Admin")]),r("b-nav-item-dropdown",{attrs:{text:"Dropdown..."}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},o=[],c={name:"navbar"},i=c,l=a("2877"),f=Object(l["a"])(i,n,o,!1,null,null,null),u=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"fluid-container footer"},[a("p",{staticClass:"float-right",attrs:{id:"back-to-top"}},[a("a",{attrs:{href:"#"}},[t._v("Back to top")])]),a("p",[t._v("2009-2020 National Chi Nan University Lab 114 ")])])}],m={name:"myfooter"},p=m,h=(a("760c"),Object(l["a"])(p,d,b,!1,null,null,null)),v=h.exports,j={name:"App",components:{NavBar:u,Footer:v}},g=j,y=(a("034f"),Object(l["a"])(g,r,s,!1,null,null,null));e["a"]=y.exports},4360:function(t,e,a){"use strict";var r={};a.r(r),a.d(r,"getProfit",(function(){return u})),a.d(r,"getStrategy",(function(){return d})),a.d(r,"getHoldingPeriod",(function(){return b})),a.d(r,"getStockPrice",(function(){return m}));var s={};a.r(s),a.d(s,"actionCustomMA",(function(){return v})),a.d(s,"actionRecommendMA",(function(){return j}));var n=a("2b0e"),o=a("2f62"),c=a("ade3"),i="UPDATE",l={trading_strategy:{},profit:0,stock_price:[0],holding_period:[0]},f=Object(c["a"])({},i,(function(t,e){t.trading_strategy=e["strategy"],t.profit=e["profit"],t.stock_price=e["stock price"],t.holding_period=e["holding period"]})),u=function(t){return t.profit},d=function(t){return t.trading_strategy},b=function(t){return t.holding_period},m=function(t){return t.stock_price},p=a("bc3a"),h=a.n(p),v=function(t,e){var a=t.commit,r="https://fintech-114.herokuapp.com/api/ma/custom/";h()({url:r,method:"post",responseType:"json",data:JSON.stringify(e)}).then((function(t){console.log("response status = "+t),console.log("response data = "+t.data),a(i,t.data)}))},j=function(t,e){var a=t.commit,r="https://fintech-114.herokuapp.com/api/ma/recommend/";h()({url:r,method:"post",responseType:"json",data:JSON.stringify(e)}).then((function(t){console.log("response status = "+t),console.log("response data = "+t.data),a(i,t.data)}))};n["default"].use(o["a"]);e["a"]=new o["a"].Store({state:l,mutations:f,getters:r,actions:s,strict:!0})},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),r=a("3dfd"),s=a("5f5b"),n=a("b1e0"),o=a("498a"),c=a("f9bc"),i=(a("f9e3"),a("2dd8"),a("ec02")),l=a.n(i),f=a("2f62"),u=a("8c4f"),d=a("90f1"),b=a("576cc"),m=a("8b24"),p=a("2036"),h=a("4360");e["default"].config.productionTip=!1,e["default"].use(s["a"]),e["default"].use(n["a"]),e["default"].use(o["a"]),e["default"].use(c["a"]),e["default"].use(f["a"]),e["default"].use(u["a"]),e["default"].component("vue-headful",l.a);var v=new u["a"]({mode:"history",base:t,routes:[{path:"/",name:"Index",component:m["a"]},{path:"/intro",name:"Intro",component:b["a"]},{path:"/recommendation",name:"Recommendation",component:p["a"]},{path:"/custom",name:"Custom",component:d["a"]},{path:"/*",redirect:"/"}]});new e["default"]({router:v,store:h["a"],render:function(t){return t(r["a"])}}).$mount("#app")}.call(this,"/")},"576cc":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(" Moving Average")]),t._m(0),r("b-table",{attrs:{striped:"",hover:"",items:t.items}}),t._m(1),r("p",[t._v(" 而在實際運用上，我們通常會利用短線與中線或者是中線與長線的搭配來觀察股價的走勢。如下圖的例子，10MA由下往上穿越20MA。 因為近10日股價上揚，讓10MA的斜率逐漸變大，能夠由下而上的穿越20MA，我們將此現象認為是起漲的開始，因此將兩條線的交叉視為是買入訊號，而這樣的訊號又被稱為黃金交叉。 ")]),r("img",{staticClass:"card-img-top",attrs:{src:a("fa9a"),alt:"MA 黃金交叉"}}),r("p",[t._v(" 而當10MA由上往下穿越20MA時，因為近10日的股價下跌，讓10MA的斜率越來越小，最後由上而下的穿越20MA， 我們將此現象認為是下跌的開始，因此將這兩條線的交叉點視為是賣出訊號，而這樣的訊號被稱為死亡交叉。 ")]),r("img",{staticClass:"card-img-top",attrs:{src:a("9fa6"),alt:"MA 死亡交叉"}}),r("p",[t._v(" 而除了移動平均線之外，也有因為使用目的上的不同，在計算移動平均時對於時序的遠近而改變權重所演變出其他類型的移動平均線， 例如：指數移動平均(EMA)、加權移動平均(WMA)等。投資人可以因應自身的習慣或者是觀察的重點來搭配自己所需要的移動平均線。 ")]),r("hr"),r("h1",[t._v("RSI")]),r("p",[t._v("Description")])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 移動平均線(MA)是將一段時間內的股價相加平均後得到的平均值連接之後所得到的一條線。有了MA的幫助，投資者就能夠輕易地了解目前股價的趨勢。"),a("br"),t._v(" 一般來說，MA通常分為短、中、長期移動平均線三種。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 短線中的5MA、10MA分別對應到一周與雙週的開盤日數，又稱作週線及雙週線。而中線的20MA、60MA分別對應到一個月和三個月的開盤日數，又稱作月線以及季線。"),a("br"),t._v(" 在長線部分，120MA、240MA分別對應到半年和一年的開盤日數，又稱半年線和年線。 ")])}],n={name:"Intro",data:function(){return{items:[{"參數":"短線：5、10中線：20、60長線：120、240","交易訊號":"短線搭配中線中線搭配長線","買賣參數":"使用同一組參數","交易":"（5,20）,(5,60)(10,20) ,(10,60)(20,120),(20,240)(60,120),(60,240)"}]}}},o=n,c=a("2877"),i=Object(c["a"])(o,r,s,!1,null,"27c179e4",null);e["a"]=i.exports},"69e1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{attrs:{id:"myChart"}})},s=[],n=a("5530"),o=a("30ef"),c=a.n(o),i=a("2f62"),l={name:"StockChart",props:{},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])({stockPrice:"getStockPrice",holdingPeriod:"getHoldingPeriod",profit:"getProfit"})),{},{hp_update:function(){return this.holdingPeriod}}),watch:{hp_update:function(){this.chartIt()}},methods:{chartIt:function(){var t="myChart",e=new c.a(t,{type:"line",data:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],datasets:[{label:"AAPL",backgroundColor:"rgba(225,103,110,1)",borderColor:"rgba(225,103,110,1)",borderWidth:1,pointStyle:"crossRot",data:this.stockPrice,cubicInterpolationMode:"monotone",fill:"false"},{label:"Holding Period",backgroundColor:"rgba(10,225,10,0.3)",borderColor:"rgba(225,103,110,1)",borderWidth:5,pointStyle:"crossRot",data:this.holdingPeriod,cubicInterpolationMode:"monotone"}]},options:{color:["red","blue","green","black"]}});console.log("myChart object: "+e)}},data:function(){return{}},mounted:function(){this.chartIt()}},f=l,u=(a("dc69"),a("2877")),d=Object(u["a"])(f,r,s,!1,null,"465bb759",null);e["a"]=d.exports},"760c":function(t,e,a){"use strict";var r=a("c3f5"),s=a.n(r);s.a},"85ec":function(t,e,a){},"8ac4":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("交易策略")]),a("p",[t._v(" 買入： MA("+t._s(t.strategy["buy1"])+") 穿 MA("+t._s(t.strategy["buy2"])+") ")]),a("p",[t._v(" 賣出： MA("+t._s(t.strategy["sell1"])+") 穿 MA("+t._s(t.strategy["sell2"])+") ")]),a("p",[t._v(" 報酬: "+t._s(t.profit)+" ")])])},s=[],n=a("5530"),o=a("2f62"),c={name:"StrategyResult",computed:Object(n["a"])({},Object(o["c"])({profit:"getProfit",strategy:"getStrategy"}))},i=c,l=a("2877"),f=Object(l["a"])(i,r,s,!1,null,"7b90b00b",null);e["a"]=f.exports},"8b24":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Homepage")]),a("p",[t._v("This is our homepage")])])}],n={name:"Index"},o=n,c=a("2877"),i=Object(c["a"])(o,r,s,!1,null,"3e6899b2",null);e["a"]=i.exports},"90f1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"auto"}},[a("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[a("b-col",{attrs:{md:"4"}},[a("MAParamForm")],1),a("b-col",{attrs:{md:"2"}},[a("StrategyResult")],1),a("b-col",{attrs:{md:"6"}},[a("StockChart")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("b-form",{attrs:{id:"MA-param-form"},on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-row",{staticClass:"mb-2"},[a("b-col",{attrs:{cols:"12"}},[t._v(" 自訂買入訊號 ")])],1),a("b-form-row",[a("b-col",{attrs:{cols:"6"}},[a("b-form-input",{staticClass:"mb-2",attrs:{id:"input-buy1",placeholder:"買1",type:"number",min:"1",max:"256",state:t.buy1State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.buy1,callback:function(e){t.$set(t.form,"buy1",e)},expression:"form.buy1"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" MA 交易策略須介於 0 ~ 256")])],1),a("b-col",{attrs:{cols:"6"}},[a("b-form-input",{staticClass:"mb-2",attrs:{id:"input-buy2",placeholder:"買2",type:"number",min:"1",max:"256",state:t.buy2State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.buy2,callback:function(e){t.$set(t.form,"buy2",e)},expression:"form.buy2"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" MA 交易策略須介於 0 ~ 256")])],1)],1),a("b-form-row",{staticClass:"mb-2"},[a("b-col",{attrs:{cols:"12"}},[t._v(" 自訂賣出訊號 ")])],1),a("b-form-row",[a("b-col",{attrs:{cols:"6"}},[a("b-form-input",{staticClass:"mb-2",attrs:{id:"input-sell1",placeholder:"賣1",type:"number",min:"1",max:"256",state:t.sell1State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.sell1,callback:function(e){t.$set(t.form,"sell1",e)},expression:"form.sell1"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" MA 交易策略須介於 0 ~ 256")])],1),a("b-col",{attrs:{cols:"6"}},[a("b-form-input",{staticClass:"mb-2",attrs:{id:"input-sell2",placeholder:"賣2",type:"number",min:"1",max:"256",state:t.sell2State,"aria-describedby":"input-live-feedback",required:""},model:{value:t.form.sell2,callback:function(e){t.$set(t.form,"sell2",e)},expression:"form.sell2"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" MA 交易策略須介於 0 ~ 256")])],1)],1),a("b-form-row",{staticClass:"mb-2"},[a("b-col",{attrs:{cols:"6"}},[t._v(" 訓練起始日期 ")]),a("b-col",{attrs:{cols:"6"}},[t._v(" 訓練截止日期 ")])],1),a("b-form-row",[a("b-col",{attrs:{cols:"6"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"training_start",state:t.date1State,required:""},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"training_end",state:t.date2State,required:""},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1)],1),a("b-form-row",[a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1),a("b-col",{attrs:{cols:"6"}},[a("b-button",{staticClass:"mb-2",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1):t._e()},o=[],c=a("5530"),i=a("2f62"),l={name:"ParamForm",data:function(){return{form:{buy1:"",buy2:"",sell1:"",sell2:"",start:"",end:""},show:!0}},computed:{buy1State:function(){return""===this.form.buy1?null:this.form.buy1>=1&&this.form.buy1<=256},buy2State:function(){return""===this.form.buy2?null:this.form.buy2>=1&&this.form.buy2<=256},sell1State:function(){return""===this.form.sell1?null:this.form.sell1>=1&&this.form.sell1<=256},sell2State:function(){return""===this.form.sell2?null:this.form.sell2>=1&&this.form.sell2<=256},date1State:function(){if(""===this.form.start)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==t.getDay()&&6!==t.getDay()&&t.getTime()!==e.getTime()},date2State:function(){if(""===this.form.end)return null;var t=new Date(this.form.start),e=new Date(this.form.end);return 0!==e.getDay()&&6!==e.getDay()&&t.getTime()!==e.getTime()}},updated:function(){var t=this;this.$nextTick((function(){if(""!==t.form.start&&""!==t.form.end){var e=new Date(t.form.start),a=new Date(t.form.end);e>a&&(t.form.start=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),t.form.end=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate())}}))},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["actionCustomMA"])),{},{onSubmit:function(t){t.preventDefault(),this.actionCustomMA(this.form)},onReset:function(t){var e=this;t.preventDefault(),this.form.buy1="",this.form.buy2="",this.form.sell1="",this.form.sell2="",this.form.start="",this.form.end="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},f=l,u=a("2877"),d=Object(u["a"])(f,n,o,!1,null,null,null),b=d.exports,m=a("69e1"),p=a("8ac4"),h={name:"Custom",components:{MAParamForm:b,StockChart:m["a"],StrategyResult:p["a"]}},v=h,j=Object(u["a"])(v,r,s,!1,null,null,null);e["a"]=j.exports},"9b19":function(t,e,a){t.exports=a.p+"img/logo.234f6256.svg"},"9fa6":function(t,e,a){t.exports=a.p+"img/death_cross.5226fbf0.png"},a90b:function(t,e,a){},c3f5:function(t,e,a){},dc69:function(t,e,a){"use strict";var r=a("a90b"),s=a.n(r);s.a},fa9a:function(t,e,a){t.exports=a.p+"img/golden_cross.dab8e5ac.png"}});
//# sourceMappingURL=app.a18699eb.js.map