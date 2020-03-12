function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{LRtc:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i=n("ofXK"),o=n("tyNb"),l=n("fXoL"),u=((c=function(){function e(){var t=this;_classCallCheck(this,e),this.getSpeedClass=function(){return t.currentSpeed<t.getThreshold()?"good":"warning"},this.getThreshold=function(){return.8*t.topSpeed}}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=l.Eb({type:c,selectors:[["ab-display-presenter"]],inputs:{model:"model",currentSpeed:"currentSpeed",topSpeed:"topSpeed",units:"units"},decls:10,vars:13,consts:[[3,"ngClass"],[3,"value","max"]],template:function(e,t){1&e&&(l.Nb(0,"h3"),l.mc(1),l.Mb(),l.Nb(2,"h4"),l.mc(3),l.Yb(4,"number"),l.Mb(),l.Nb(5,"div"),l.Nb(6,"div",0),l.mc(7),l.Yb(8,"number"),l.Mb(),l.Lb(9,"progress",1),l.Mb()),2&e&&(l.zb(1),l.oc(" ",t.model," "),l.zb(2),l.oc(" Top speed: ",l.ac(4,7,t.topSpeed,"1.0-0"),""),l.zb(3),l.bc("ngClass",t.getSpeedClass()),l.zb(1),l.pc(" ",l.ac(8,10,t.currentSpeed,"1.2-2")," ",t.units," "),l.zb(2),l.bc("value",t.currentSpeed)("max",t.topSpeed))},directives:[i.j],pipes:[i.d],styles:[".good[_ngcontent-%COMP%]{color:green}.warning[_ngcontent-%COMP%]{color:red}"]}),c),b=((r=function(){function e(){_classCallCheck(this,e),this.brake=new l.n,this.throttle=new l.n}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l.Eb({type:r,selectors:[["ab-pedals-presenter"]],inputs:{brakeDisabled:"brakeDisabled",throttleDisabled:"throttleDisabled"},outputs:{brake:"brake",throttle:"throttle"},decls:5,vars:2,consts:[["value","brake \ud83d\udc0c","type","button",1,"secondary",3,"disabled","click"],["value","throttle \ud83d\udc30","type","button",1,"tertiary",3,"disabled","click"]],template:function(e,t){1&e&&(l.Nb(0,"h4"),l.mc(1," Pedals:\n"),l.Mb(),l.Nb(2,"form"),l.Nb(3,"input",0),l.Vb("click",(function(){return t.brake.emit(1)})),l.Mb(),l.Nb(4,"input",1),l.Vb("click",(function(){return t.throttle.emit(1)})),l.Mb(),l.Mb()),2&e&&(l.zb(3),l.bc("disabled",t.brakeDisabled),l.zb(1),l.bc("disabled",t.throttleDisabled))},styles:[""]}),r),d=[{path:"",component:(a=function(){function e(){var t=this;_classCallCheck(this,e),this.getDelta=function(e){return e+(t.car.maxSpeed-t.car.currentSpeed)/10}}return _createClass(e,[{key:"ngOnInit",value:function(){this.car={name:"Roadster",maxSpeed:120,currentSpeed:0},this.checkLimits()}},{key:"onBrake",value:function(e){this.car.currentSpeed-=this.getDelta(e),this.checkLimits()}},{key:"onThrottle",value:function(e){this.car.currentSpeed+=this.getDelta(e),this.checkLimits()}},{key:"checkLimits",value:function(){this.disableBrake=!1,this.disableThrottle=!1,this.car.currentSpeed<=0?(this.car.currentSpeed=0,this.disableBrake=!0):this.car.currentSpeed>=this.car.maxSpeed&&(this.car.currentSpeed=this.car.maxSpeed,this.disableThrottle=!0)}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=l.Eb({type:a,selectors:[["ab-car"]],decls:2,vars:6,consts:[[3,"model","currentSpeed","topSpeed","units"],[3,"brakeDisabled","throttleDisabled","brake","throttle"]],template:function(e,t){1&e&&(l.Lb(0,"ab-display-presenter",0),l.Nb(1,"ab-pedals-presenter",1),l.Vb("brake",(function(e){return t.onBrake(e)}))("throttle",(function(e){return t.onThrottle(e)})),l.Mb()),2&e&&(l.bc("model",t.car.name)("currentSpeed",t.car.currentSpeed)("topSpeed",t.car.maxSpeed)("units","Km/h"),l.zb(1),l.bc("brakeDisabled",t.disableBrake)("throttleDisabled",t.disableThrottle))},directives:[u,b],styles:[""]}),a)}],p=((s=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ib({type:s}),s.\u0275inj=l.Hb({factory:function(e){return new(e||s)},imports:[[o.c.forChild(d)],o.c]}),s);n.d(t,"CarModule",(function(){return f}));var h,f=((h=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ib({type:h}),h.\u0275inj=l.Hb({factory:function(e){return new(e||h)},imports:[[i.b,p]]}),h)}}]);