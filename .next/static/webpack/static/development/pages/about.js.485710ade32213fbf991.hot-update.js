webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sass/navbarStyle.scss */ "./Sass/navbarStyle.scss");
/* harmony import */ var _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sass_triaAngleStyle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sass/triaAngleStyle.scss */ "./Sass/triaAngleStyle.scss");
/* harmony import */ var _Sass_triaAngleStyle_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sass_triaAngleStyle_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LanguageFlag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguageFlag */ "./components/LanguageFlag.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ "./context/Context.js");
var _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var langArray = [['en', 'English'], ['ar', 'العربية'], ['fa', 'فارسی'], ['fr', 'français'], ['de', 'Deutsch']];

var Navbar = function Navbar() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      lang = _useContext.lang,
      openLangDrop = _useContext.openLangDrop,
      money = _useContext.money,
      navbarText = _useContext.navbarText;

  return __jsx("nav", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbar
  }, __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: '/'
  }, __jsx("img", {
    src: "/static/image/trem-global-logo.png",
    alt: "tremGlobal"
  }))), __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu
  }, __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__top
  }, __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown
  }, __jsx("div", null, __jsx("button", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown__lang
  }, __jsx(_LanguageFlag__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: lang,
    isOpen: true
  })), __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.lang__content,
    id: "lang__drop"
  }, langArray.map(function (element) {
    return __jsx(_LanguageFlag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: 'languageFlag' + element[1],
      language: element,
      isOpen: false
    });
  }))), __jsx("div", null, __jsx("button", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown__money
  }, __jsx("p", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.money,
    onClick: openLangDrop.bind(_this, true, 'money__drop', money)
  }, money[1])), __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.money__content,
    id: "money__drop"
  }, __jsx("p", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.money,
    onClick: openLangDrop.bind(_this, false, 'money__drop', ['dl', "$"])
  }, "$"), __jsx("p", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.money,
    onClick: openLangDrop.bind(_this, false, 'money__drop', ['tl', "\u20BA"])
  }, "\u20BA"), __jsx("p", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.money,
    onClick: openLangDrop.bind(_this, false, 'money__drop', ['eu', "\u20AC"])
  }, "\u20AC")))), __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.follow__menu
  }, __jsx("a", {
    href: "https://www.facebook.com/tremglobal",
    className: "icon-fb"
  }, __jsx("i", {
    className: "fa fa-facebook"
  })), __jsx("a", {
    href: "https://www.instagram.com/tremglobal",
    className: "icon-ig"
  }, __jsx("i", {
    className: "fa fa-instagram"
  })), __jsx("a", {
    href: "https://www.youtube.com/channel/UCyvJGtFMxJDzDAN7sgmJPdw",
    className: "icon-yt"
  }, __jsx("i", {
    className: "fa fa-youtube-play"
  })), __jsx("a", {
    href: "https://www.linkedin.com/company/tremglobal",
    className: "icon-in"
  }, __jsx("i", {
    className: "fa fa-linkedin"
  })), __jsx("a", {
    href: "https://www.twitter.com/tremglobal",
    className: "icon-tw"
  }, __jsx("i", {
    className: "fa fa-twitter"
  })), __jsx("a", {
    href: "https://www.reddit.com/user/tremglobal",
    className: "icon-reddit"
  }, __jsx("i", {
    className: "fa fa-reddit-alien"
  })), __jsx("a", {
    href: "https://in.pinterest.com/tremglobal/",
    className: "icon-pinterest"
  }, __jsx("i", {
    className: "fa fa-pinterest"
  })))), __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__bottom
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__button
  }, navbarText.menu["".concat(lang[0])].home)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__button
  }, navbarText.menu["".concat(lang[0])].about)), __jsx("div", null, __jsx("a", {
    href: "/#",
    onClick: openLangDrop.bind(_this, true, 'properties__drop'),
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__button
  }, navbarText.menu["".concat(lang[0])].properties, __jsx("div", {
    className: _Sass_triaAngleStyle_scss__WEBPACK_IMPORTED_MODULE_2___default.a.downTriAngle
  })), __jsx("div", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties__content,
    id: "properties__drop"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties,
    onClick: openLangDrop.bind(_this, false, 'properties__drop')
  }, navbarText.properties["".concat(lang[0])].all)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties,
    onClick: openLangDrop.bind(_this, false, 'properties__drop')
  }, navbarText.properties["".concat(lang[0])].istanbul)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties,
    onClick: openLangDrop.bind(_this, false, 'properties__drop')
  }, navbarText.properties["".concat(lang[0])].bursa)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties,
    onClick: openLangDrop.bind(_this, false, 'properties__drop')
  }, navbarText.properties["".concat(lang[0])].sakarya)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties,
    onClick: openLangDrop.bind(_this, false, 'properties__drop')
  }, navbarText.properties["".concat(lang[0])].bodrum)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.properties,
    onClick: openLangDrop.bind(_this, false, 'properties__drop')
  }, navbarText.properties["".concat(lang[0])].usa)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__button
  }, navbarText.menu["".concat(lang[0])].services)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__button
  }, navbarText.menu["".concat(lang[0])].articles)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx("a", {
    className: _Sass_navbarStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu__button
  }, navbarText.menu["".concat(lang[0])].contact)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=about.js.485710ade32213fbf991.hot-update.js.map