function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"sU/i":function(e,n,r){"use strict";r.r(n);var t,c,o=r("ofXK"),s=r("PCNd"),a=r("tyNb"),i=r("AytR"),u=r("fXoL"),l=r("MrJ0"),b=[{path:":slug",component:(t=function(){function e(n){var r=this;_classCallCheck(this,e),n.params.subscribe((function(e){var n=e.slug;r.course=i.a.courses.find((function(e){return e.slug===n}))}))}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),t.\u0275fac=function(e){return new(e||t)(u.Kb(a.a))},t.\u0275cmp=u.Eb({type:t,selectors:[["ab-courses"]],decls:9,vars:4,consts:[["target","_blank",3,"href"]],template:function(e,n){1&e&&(u.Nb(0,"h3"),u.mc(1),u.Mb(),u.Nb(2,"p"),u.mc(3),u.Mb(),u.Nb(4,"p"),u.Nb(5,"a",0),u.mc(6),u.Mb(),u.Mb(),u.Nb(7,"p"),u.Lb(8,"ab-go-home"),u.Mb()),2&e&&(u.zb(1),u.oc("\ud83d\udc68\u200d\ud83c\udf93 ",n.course.title,""),u.zb(2),u.nc(n.course.description),u.zb(2),u.cc("href",n.course.url,u.hc),u.zb(1),u.nc(n.course.url))},directives:[l.a],styles:[""]}),t)}],f=((c=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:c}),c.\u0275inj=u.Hb({factory:function(e){return new(e||c)},imports:[[a.c.forChild(b)],a.c]}),c);r.d(n,"CoursesModule",(function(){return h}));var p,h=((p=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:p}),p.\u0275inj=u.Hb({factory:function(e){return new(e||p)},imports:[[o.b,f,s.a]]}),p)}}]);