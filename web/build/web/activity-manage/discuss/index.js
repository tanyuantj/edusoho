webpackJsonp(["web/activity-manage/discuss/index"],[function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),a=t("83ab9a96b98660e066dc"),o=function(){function n(e){i(this,n),this._init()}return r(n,[{key:"_init",value:function(){(0,a.initEditor)($('[name="content"]')),this._inItStep2form()}},{key:"_inItStep2form",value:function(){var n=$("#step2-form"),e=n.data("validator");e=n.validate({onkeyup:!1,rules:{title:"required",content:"required"}})}}]),n}();new o}]);