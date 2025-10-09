import{a as Q}from"./chunk-JEEAMRJS.js";import{c as V,d as E,i as k,l as B,n as F,p as N,q as R,r as W}from"./chunk-F6LN4TFS.js";import{Ha as p,Hb as o,Ib as A,Jb as w,Ta as g,Xb as H,Ya as y,d as $,f as j,ia as x,ja as b,ka as D,kb as v,lb as a,mb as i,nb as c,ob as s,pb as l,qb as u,ra as M,tb as _,vb as f,xb as h}from"./chunk-ZDO3HX7R.js";var Y=$((exports,module)=>{"use strict";(function(d,e){typeof exports=="object"&&typeof module=="object"?module.exports=e():typeof define=="function"&&define.amd?define("kursor",[],e):typeof exports=="object"?exports.kursor=e():d.kursor=e()})(typeof self<"u"?self:exports,function(){return(function(n){var d={};function e(t){if(d[t])return d[t].exports;var r=d[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=d,e.d=function(t,r,m){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:m})},e.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(r&1&&(t=e(t)),r&8||r&4&&typeof t=="object"&&t&&t.__esModule)return t;var m=Object.create(null);if(e.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:t}),r&2&&typeof t!="string")for(var P in t)e.d(m,P,(function(K){return t[K]}).bind(null,P));return m},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/dist/",e(e.s="./src/index.js")})({"./src/index.js":(function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./styles/index.styl */ "./src/styles/index.styl");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var key = 1;

var kursor =
/*#__PURE__*/
function () {
  function kursor() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, kursor);

    var _props = {
      type: 1,
      ...props
    };
    this.props = _props;
    this.key = key === 1 ? '' : key;
    key++;
    this.render();
    this.hovers();
    this.mousemove();
    this.down();
  }

  _createClass(kursor, [{
    key: "color",
    value: function color(colorx) {
      (0, _utils.setColor)('color', colorx, this.kursor);
      (0, _utils.setColor)('color', colorx, this.kursorChild);
    }
  }, {
    key: "hidden",
    value: function hidden() {
      var isHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isHidden) {
        this.addClass('kursor--hidden');
        this.addClass('kursorChild--hidden', true);
      } else {
        this.removeClass('kursor--hidden');
        this.removeClass('kursorChild--hidden', true);
      }
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      var wrapper = document.createElement('div');
      wrapper.setAttribute('id', 'kursorWrapper');
      document.querySelector(this.props.el).insertBefore(wrapper, document.querySelector(this.props.el).firstChild);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.mobileAndTabletcheck()) {
        return;
      }

      this.createCursor('kursorChild');
      this.createCursor('kursor');

      if (this.props.hasOwnProperty('removeDefaultCursor')) {
        if (this.props.removeDefaultCursor) {
          document.body.classList.add('notCursor');
        }
      }

      if (this.props.hasOwnProperty('type')) {
        this.addClass("kursor--".concat(this.props.type));
      }
    }
  }, {
    key: "down",
    value: function down() {
      var _this = this;

      document.addEventListener('mousedown', function (e) {
        _this.addClass('kursor--down');
      });
      document.addEventListener('mouseup', function (e) {
        _this.removeClass('kursor--down');
      });
    }
  }, {
    key: "mobileAndTabletcheck",
    value: function mobileAndTabletcheck() {
      var check = false;

      (function (a) {
        if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    }
  }, {
    key: "mousemove",
    value: function mousemove() {
      var _this2 = this;

      var hasEl = this.props.hasOwnProperty('el');
      var el = window;

      if (hasEl) {
        el = document.querySelector(this.props.el);
      }

      el.addEventListener('mousemove', function (e) {
        var cursor = document.querySelector('.kursor' + _this2.key);
        var cursorChild = document.querySelector('.kursorChild' + _this2.key);

        if (hasEl) {
          var notEl = e.target !== document.querySelector(_this2.props.el);
          var parentEl = e.target.closest(_this2.props.el);

          if (notEl) {
            cursor = parentEl.querySelector('.kursor' + _this2.key);
            cursorChild = parentEl.querySelector('.kursorChild' + _this2.key);
          } else {
            cursor = e.target.querySelector('.kursor' + _this2.key);
            cursorChild = e.target.querySelector('.kursorChild' + _this2.key);
          }

          cursor.style.left = "".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, "px");
          cursor.style.top = "".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, "px");
          cursorChild.style.left = "".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, "px");
          cursorChild.style.top = "".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, "px");
        } else {
          cursor.style.left = "".concat(e.x, "px");
          cursor.style.top = "".concat(e.y, "px");
          cursorChild.style.left = "".concat(e.x, "px");
          cursorChild.style.top = "".concat(e.y, "px");
        }
      });
      var doc = document;

      if (hasEl) {
        doc = document.querySelector(this.props.el);
      }

      doc.addEventListener('mouseenter', function (e) {
        _this2.removeClass('kursor--hidden');

        _this2.removeClass('kursorChild--hidden', true);
      });
      doc.addEventListener('mouseleave', function (e) {
        _this2.addClass('kursor--hidden');

        _this2.addClass('kursorChild--hidden', true);
      });
    }
  }, {
    key: "hovers",
    value: function hovers() {
      var _this3 = this;

      var hovers = document.querySelectorAll('.k-hover' + this.key);
      console.log(hovers);
      hovers.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          _this3.addClass('--hover');
        });
        item.addEventListener('mouseleave', function () {
          _this3.removeClass('--hover');
        });
      });
    }
  }, {
    key: "createCursor",
    value: function createCursor(name) {
      this[name] = document.createElement('div');
      this[name].setAttribute('class', name);
      this[name].classList.add(name + this.key);
      this[name].setAttribute('style', '--k-color: 0,0,0');

      if (this.props.hasOwnProperty('el')) {
        this[name].classList.add("".concat(name, "--hidden"));
        this[name].classList.add('kursor--absolute');
        document.querySelector(this.props.el).insertBefore(this[name], document.querySelector(this.props.el).firstChild);
      } else {
        document.body.insertBefore(this[name], document.body.firstChild);
      }

      if (this.props.hasOwnProperty('color')) {
        (0, _utils.setColor)('color', this.props.color, this[name]);
      }
    }
  }, {
    key: "addClass",
    value: function addClass(classx) {
      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.add(classx);
    }
  }, {
    key: "removeClass",
    value: function removeClass(classx) {
      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.remove(classx);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return kursor;
}();

exports.default = kursor;
module.exports = exports["default"];

//# sourceURL=webpack://kursor/./src/index.js?`)}),"./src/styles/index.styl":(function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack://kursor/./src/styles/index.styl?`)}),"./src/utils/index.js":(function(module,exports,__webpack_require__){"use strict";eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setColor = void 0;

var setVar = function setVar(propertyName, value, el) {
  if (!el) {
    document.documentElement.style.setProperty("--k-".concat(propertyName), value);
  } else {
    el.style.setProperty("--k-".concat(propertyName), value);
  }
};

var setColor = function setColor(colorName, color, el) {
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var isRGB = /^(rgb|rgba)/.test(color);
  var isHEX = /^(#)/.test(color);
  var newColor;

  if (isRGB) {
    var arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = "".concat(arrayColor[0], ",").concat(arrayColor[1], ",").concat(arrayColor[2]);
    setVar(colorName, newColor, el);
  } else if (isHEX) {
    var rgb = hexToRgb(color);
    newColor = "".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b);
    setVar(colorName, newColor, el);
  }
};

exports.setColor = setColor;

//# sourceURL=webpack://kursor/./src/utils/index.js?`)})})})});var z=[{path:"",loadComponent:()=>import("./chunk-YE7X73WS.js").then(n=>n.Home)},{path:"inbound",children:[{path:"",loadComponent:()=>import("./chunk-4545CFJH.js").then(n=>n.Inbound)},{path:":state",loadComponent:()=>import("./chunk-4OUWETTQ.js").then(n=>n.InboundPackage)}]},{path:"outbound",loadComponent:()=>import("./chunk-WANDQFW2.js").then(n=>n.Outbound)},{path:"contact",loadComponent:()=>import("./chunk-ZIKIL64T.js").then(n=>n.Contact)}];var U={providers:[M(),H({eventCoalescing:!0}),R(z)]};function Z(n,d){if(n&1){let e=_();a(0,"nav",25)(1,"a",26),f("click",function(){x(e);let r=h();return b(r.isMenuOpen=!1)}),o(2,"Home"),i(),a(3,"a",27),f("click",function(){x(e);let r=h();return b(r.isMenuOpen=!1)}),o(4,"Inbound"),i(),a(5,"a",28),f("click",function(){x(e);let r=h();return b(r.isMenuOpen=!1)}),o(6,"Outbound"),i(),a(7,"a",29),f("click",function(){x(e);let r=h();return b(r.isMenuOpen=!1)}),o(8,"Contact"),i(),a(9,"div",30)(10,"a",31),c(11,"i",32),i(),a(12,"a",33),c(13,"i",34),i(),a(14,"a",35),c(15,"i",36),i()()()}}var C=class n{isMenuOpen=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-header"]],decls:31,vars:1,consts:[[1,"sticky","top-0","z-50","bg-white/80","backdrop-blur-md","border-b","border-gray-200","shadow-sm"],[1,"max-w-7xl","mx-auto","px-5","py-3","flex","items-center","justify-between"],["routerLink","/",1,"flex","items-center","gap-3","group"],[1,"relative"],["src","assets/images/logo.png","alt","IDT Logo",1,"w-10","h-10","object-contain","transition-transform","duration-300","group-hover:scale-110"],[1,"flex","flex-col","leading-tight"],[1,"text-2xl","md:text-3xl","font-bold","bg-gradient-to-r","from-red-600","to-red-500","bg-clip-text","text-transparent","tracking-wide"],[1,"text-xs","md:text-sm","text-gray-700","italic"],[1,"hidden","md:flex","items-center","gap-8"],[1,"flex","items-center","gap-8","text-[15px]","font-medium"],["routerLink","/",1,"hover:text-red-600","transition-colors"],["routerLink","/inbound",1,"hover:text-red-600","transition-colors"],["routerLink","/outbound",1,"hover:text-red-600","transition-colors"],["routerLink","/contact",1,"hover:text-red-600","transition-colors"],[1,"flex","items-center","gap-3","pl-5","border-l","border-gray-200"],["href","https://facebook.com","target","_blank",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","text-white","bg-red-500","hover:bg-red-100","hover:text-gray-600","transition"],[1,"pi","pi-facebook","text-sm"],["href","https://instagram.com","target","_blank",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","text-white","bg-red-500","hover:bg-red-100","hover:text-gray-600","transition"],[1,"pi","pi-instagram","text-sm"],["href","https://linkedin.com","target","_blank",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","text-white","bg-red-500","hover:bg-red-100","hover:text-gray-600","transition"],[1,"pi","pi-linkedin","text-sm"],[1,"md:hidden","p-2","rounded-lg","border","border-gray-300","hover:bg-gray-100","transition",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16M4 18h16"],["class","md:hidden bg-white border-t border-gray-200 px-5 py-3 space-y-2 text-sm shadow-inner",4,"ngIf"],[1,"md:hidden","bg-white","border-t","border-gray-200","px-5","py-3","space-y-2","text-sm","shadow-inner"],["routerLink","/",1,"block","py-2","hover:text-red-600","transition",3,"click"],["routerLink","/inbound",1,"block","py-2","hover:text-red-600","transition",3,"click"],["routerLink","/outbound",1,"block","py-2","hover:text-red-600","transition",3,"click"],["routerLink","/contact",1,"block","py-2","hover:text-red-600","transition",3,"click"],[1,"flex","justify-center","gap-4","mt-3","pt-3","border-t","border-gray-100"],["href","https://facebook.com","target","_blank",1,"text-gray-600","hover:text-red-600","transition"],[1,"pi","pi-facebook"],["href","https://instagram.com","target","_blank",1,"text-gray-600","hover:text-red-600","transition"],[1,"pi","pi-instagram"],["href","https://linkedin.com","target","_blank",1,"text-gray-600","hover:text-red-600","transition"],[1,"pi","pi-linkedin"]],template:function(e,t){e&1&&(a(0,"header",0)(1,"div",1)(2,"a",2)(3,"div",3),c(4,"img",4),i(),a(5,"div",5)(6,"span",6),o(7," IDT WORLD "),i(),a(8,"span",7),o(9," From the House of India Destination Tours "),i()()(),a(10,"div",8)(11,"nav",9)(12,"a",10),o(13,"Home"),i(),a(14,"a",11),o(15,"Inbound"),i(),a(16,"a",12),o(17,"Outbound"),i(),a(18,"a",13),o(19,"Contact"),i()(),a(20,"div",14)(21,"a",15),c(22,"i",16),i(),a(23,"a",17),c(24,"i",18),i(),a(25,"a",19),c(26,"i",20),i()()(),a(27,"button",21),f("click",function(){return t.isMenuOpen=!t.isMenuOpen}),D(),a(28,"svg",22),c(29,"path",23),i()()(),y(30,Z,16,0,"nav",24),i()),e&2&&(p(30),v("ngIf",t.isMenuOpen))},dependencies:[k,E,W,N],encapsulation:2})};var S=class n{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-footer"]],decls:80,vars:1,consts:[[1,"bg-gray-50","border-t","border-gray-200"],[1,"max-w-7xl","mx-auto","px-4","py-10","grid","md:grid-cols-3","gap-8","text-sm"],[1,"flex","items-center","gap-2","mb-3"],["src","assets/images/logo.png","alt","IDT Logo",1,"w-10","h-10","object-contain","transition-transform","duration-300","group-hover:scale-110"],[1,"text-2xl","md:text-3xl","font-bold","bg-gradient-to-r","from-red-600","to-red-500","bg-clip-text","text-transparent","tracking-wide"],[1,"text-gray-600"],[1,"flex","gap-3","mt-4"],["href","#",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","bg-red-500","hover:bg-[color:var(--brand)]","text-white","transition"],[1,"pi","pi-facebook"],[1,"pi","pi-instagram"],[1,"pi","pi-linkedin"],[1,"pi","pi-youtube"],[1,"hidden","md:block"],[1,"font-semibold","mb-2"],[1,"space-y-1"],["routerLink","/inbound",1,"hover:text-[color:var(--brand)]"],["routerLink","/outbound",1,"hover:text-[color:var(--brand)]"],["routerLink","/services",1,"hover:text-[color:var(--brand)]"],["routerLink","/contact",1,"hover:text-[color:var(--brand)]"],[1,"pi","pi-envelope","mr-2"],[1,"pi","pi-phone","mr-2"],[1,"flex","gap-3","mt-3","text-gray-500"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-x-twitter"],[1,"flex","md:flex-col","flex-row","md:flex-col","justify-between","gap-8","md:hidden"],[1,"text-center","text-xs","text-gray-500","py-4","border-t"],["href","www.bytrixhub.com"]],template:function(e,t){e&1&&(s(0,"footer",0)(1,"div",1)(2,"div")(3,"div",2),u(4,"img",3),s(5,"span",4),o(6," IDT WORLD "),l()(),s(7,"p",5),o(8,"Explore India and beyond with curated packages and seamless experiences From the House of India Destination Tours."),l(),s(9,"div",6)(10,"a",7),u(11,"i",8),l(),s(12,"a",7),u(13,"i",9),l(),s(14,"a",7),u(15,"i",10),l(),s(16,"a",7),u(17,"i",11),l()()(),s(18,"div",12)(19,"h4",13),o(20,"Quick Links"),l(),s(21,"ul",14)(22,"li")(23,"a",15),o(24,"Inbound"),l()(),s(25,"li")(26,"a",16),o(27,"Outbound"),l()(),s(28,"li")(29,"a",17),o(30,"Services"),l()(),s(31,"li")(32,"a",18),o(33,"Contact"),l()()()(),s(34,"div",12)(35,"h4",13),o(36,"Contact"),l(),s(37,"p",5),u(38,"i",19),o(39," hello@idt.example"),l(),s(40,"p",5),u(41,"i",20),o(42," +91 98472 40456"),l(),s(43,"div",21),u(44,"i",22)(45,"i",23)(46,"i",24),l()(),s(47,"div",25)(48,"div")(49,"h4",13),o(50,"Quick Links"),l(),s(51,"ul",14)(52,"li")(53,"a",15),o(54,"Inbound"),l()(),s(55,"li")(56,"a",16),o(57,"Outbound"),l()(),s(58,"li")(59,"a",17),o(60,"Services"),l()(),s(61,"li")(62,"a",18),o(63,"Contact"),l()()()(),s(64,"div")(65,"h4",13),o(66,"Contact"),l(),s(67,"p",5),u(68,"i",19),o(69," hello@idt.example"),l(),s(70,"p",5),u(71,"i",20),o(72," +91 98472 404560"),l(),s(73,"div",21),u(74,"i",22)(75,"i",23)(76,"i",24),l()()()(),s(77,"div",26)(78,"a",27),o(79),l()()()),e&2&&(p(79),w(" \xA9 ",t.currentYear," Bytrix Hub. All rights reserved. "))},dependencies:[k],encapsulation:2})};var O=[{id:"welcome",question:"\u{1F44B} Hi there!  What would you like help with today?",options:[{text:"\u{1F3DE}\uFE0F Inbound Packages",next:"inbound"},{text:"\u2708\uFE0F Outbound Packages",next:"outbound"},{text:"\u{1F4BC} Our Services",next:"services"},{text:"\u{1F4DE} Contact Support",next:"contact"}]},{id:"inbound",question:"\u{1F1EE}\u{1F1F3} Wonderful! Which region in India interests you the most?",options:[{text:"\u{1F334} South India",next:"inbound_south"},{text:"\u{1F3D4}\uFE0F North India",next:"inbound_north"},{text:"\u{1F3DC}\uFE0F West India",next:"inbound_west"},{text:"\u2B05\uFE0F Back",next:"welcome"}]},{id:"inbound_south",question:"\u{1F305} Great choice! Kerala, Tamil Nadu, and Karnataka are top favourites. Would you like us to share sample itineraries?",options:[{text:"Yes, show me Kerala tours",next:"end"},{text:"Show all South India tours",next:"end"},{text:"Back",next:"inbound"}]},{id:"inbound_north",question:"\u{1F3D4}\uFE0F North India is full of heritage and adventure! Which interests you more?",options:[{text:"Golden Triangle (Delhi-Agra-Jaipur)",next:"end"},{text:"Himalayan Tours",next:"end"},{text:"Back",next:"inbound"}]},{id:"inbound_west",question:"\u{1F305} Rajasthan and Gujarat offer vibrant culture and royal stays. Want us to share the best deals?",options:[{text:"Yes, please!",next:"end"},{text:"Back",next:"inbound"}]},{id:"outbound",question:"\u{1F30D} Amazing! Where would you like to explore?",options:[{text:"\u{1F54C} Asia (Singapore, Dubai, Thailand...)",next:"outbound_asia"},{text:"\u{1F3F0} Europe (Switzerland, Italy, France...)",next:"outbound_europe"},{text:"\u{1F5FD} Americas",next:"outbound_america"},{text:"\u2B05\uFE0F Back",next:"welcome"}]},{id:"outbound_asia",question:"\u{1F30F} Asia is full of wonder! Do you have a specific destination in mind?",options:[{text:"Dubai / UAE",next:"end"},{text:"Singapore",next:"end"},{text:"Thailand",next:"end"},{text:"Back",next:"outbound"}]},{id:"outbound_europe",question:"\u{1F1EA}\u{1F1FA} Europe awaits! Which type of tour are you interested in?",options:[{text:"Honeymoon Packages",next:"end"},{text:"Group / Family Trips",next:"end"},{text:"Luxury Vacations",next:"end"},{text:"Back",next:"outbound"}]},{id:"outbound_america",question:"\u{1F1FA}\u{1F1F8} Dreaming of the Americas? We offer curated tours to the US, Canada & South America.",options:[{text:"Show me options",next:"end"},{text:"Back",next:"outbound"}]},{id:"services",question:"\u{1F4BC} We offer a range of travel services. What would you like to know about?",options:[{text:"\u{1F3E8} Hotel & Resort Booking",next:"end"},{text:"\u{1F697} Transport & Chauffeur Service",next:"end"},{text:"\u{1F9ED} Custom Tour Planning",next:"end"},{text:"\u{1F6EB} Visa & Flight Assistance",next:"end"},{text:"Back",next:"welcome"}]},{id:"contact",question:"\u{1F4DE} Sure! How would you prefer to reach us?",options:[{text:"\u{1F4E7} Email: hello@idt.example",next:"end"},{text:"\u{1F4F1} Call: +91 98472 40456",next:"end"},{text:"\u{1F4AC} WhatsApp Chat",next:"end"},{text:"\u2B05\uFE0F Back",next:"welcome"}]},{id:"end",question:"\u{1F389} Thank you! Our travel expert will reach out soon with personalized details. \u2728",options:[{text:"\u{1F501} Start Over",next:"welcome"}]}];function ee(n,d){if(n&1){let e=_();a(0,"div")(1,"button",11),f("click",function(){let r=x(e).$implicit,m=h(2);return b(m.selectOption(r.next))}),o(2),i()()}if(n&2){let e=d.$implicit;p(2),w(" ",e.text," ")}}function te(n,d){n&1&&(a(0,"div",12),o(1," Thank you for chatting with us! \u{1F44B} "),i())}function ne(n,d){if(n&1){let e=_();a(0,"div",3)(1,"div",4)(2,"span"),o(3,"IDT Virtual Assistant"),i(),a(4,"button",5),f("click",function(){x(e);let r=h();return b(r.openChat())}),c(5,"i",6),i()(),a(6,"div",7)(7,"p",8),o(8),i(),y(9,ee,3,1,"div",9)(10,te,2,0,"div",10),i()()}if(n&2){let e=h();p(8),A(e.currentStep.question),p(),v("ngForOf",e.currentStep.options),p(),v("ngIf",e.currentStep.options.length===0)}}var T=class n{isOpen=!1;currentStep=O[0];openChat(){this.isOpen=!this.isOpen,this.currentStep=O[0]}selectOption(d){let e=O.find(t=>t.id===d);e&&(this.currentStep=e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-chatbot"]],decls:3,vars:1,consts:[[1,"fixed","bottom-6","right-6","bg-red-600","text-white","rounded-full","p-4","shadow-xl","hover:bg-red-700",3,"click"],[1,"pi","pi-comments","text-2xl"],["class","fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate__animated animate__fadeInUp",4,"ngIf"],[1,"fixed","bottom-20","right-6","w-80","bg-white","rounded-2xl","shadow-2xl","border","border-gray-200","overflow-hidden","animate__animated","animate__fadeInUp"],[1,"bg-red-600","text-white","p-4","font-semibold","flex","justify-between","items-center"],[1,"text-white","hover:text-gray-200","transition",3,"click"],[1,"pi","pi-times","text-xl"],[1,"p-4","space-y-4","max-h-80","overflow-y-auto"],[1,"text-gray-800","font-medium"],[4,"ngFor","ngForOf"],["class","text-sm text-gray-500",4,"ngIf"],[1,"w-full","text-left","px-4","py-2","my-1","bg-gray-100","rounded-lg","hover:bg-red-50","hover:text-red-600","transition",3,"click"],[1,"text-sm","text-gray-500"]],template:function(e,t){e&1&&(a(0,"button",0),f("click",function(){return t.openChat()}),c(1,"i",1),i(),y(2,ne,11,3,"div",2)),e&2&&(p(2),v("ngIf",t.isOpen))},dependencies:[k,V,E],styles:[".fixed[_ngcontent-%COMP%]{z-index:1000}button[_ngcontent-%COMP%]{outline:none}"]})};var G=j(Y());var q=class n{ngOnInit(){new G.default({type:1,removeDefaultCursor:!0,color:"#000"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-root"]],decls:6,vars:0,consts:[["id","cursor",1,"custom-cursor"],[1,"min-h-[70vh]"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"app-header"),a(2,"main",1),c(3,"router-outlet"),i(),c(4,"app-footer")(5,"app-chatbot"))},dependencies:[F,C,S,T],styles:[".kursor[_ngcontent-%COMP%]{background-color:#f05!important;border:2px solid #fff!important}.kursor--active[_ngcontent-%COMP%]{transform:scale(1.5);background-color:#fff!important}"]})};var X=j(Q());B(q,U).catch(n=>console.error(n));X.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1});
