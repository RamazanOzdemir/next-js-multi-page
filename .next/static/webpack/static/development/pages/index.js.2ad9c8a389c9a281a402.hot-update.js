webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SlideShow.js":
/*!*********************************!*\
  !*** ./components/SlideShow.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sass/sileShowStyle.scss */ "./Sass/sileShowStyle.scss");
/* harmony import */ var _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBox */ "./components/TextBox.js");
var _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var slideImages = [['/static/image/cer-istanbul-slider-bg.jpg', {
  head: 'Lakeside Heaven',
  loc: 'Istanbul/Kuçukçekmece'
}], ['/static/image/deniz-istanbul-slider-bg.jpg', {
  head: 'Lakeside Heaven',
  loc: 'Istanbul/Kuçukçekmece'
}], ['/static/image/yesilyaka-koru-slider-bg.jpg', {
  head: 'Lakeside Heaven',
  loc: 'Istanbul/Kuçukçekmece'
}]];

var SlideShow = function SlideShow() {
  var slideIndex = 1;

  var showSlide = function showSlide(n) {
    var i; //const slides = document.getElementsByClassName('mySlides___2oXCc');

    var sildes = slideImages.map(function (img, index) {
      return document.getElementById("mySlide".concat(index));
    });
    var dots = document.getElementsByClassName("dot___316xS");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active___2g1BY", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active___2g1BY";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    showSlide(1);
  }, [showSlide]);

  var plusSlides = function plusSlides(count) {
    showSlide(slideIndex += count);
  };

  var curentSlide = function curentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
  };

  return __jsx("div", {
    className: _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slideshow__container + ' ' + _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active
  }, slideImages.map(function (image, index) {
    return __jsx("div", {
      className: _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mySlides + ' ' + _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fade,
      id: "mySlide".concat(index),
      key: "mySlide".concat(index)
    }, __jsx("img", {
      src: image[0],
      alt: ""
    }), __jsx(_TextBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: image,
      index: index
    }));
  }), __jsx("a", {
    className: _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.prev,
    onClick: plusSlides.bind(_this, -1)
  }, "\u276E"), __jsx("a", {
    className: _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.next,
    onClick: plusSlides.bind(_this, 1)
  }, "\u276F"), __jsx("div", {
    className: _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.show__curentSlide
  }, slideImages.map(function (image, index) {
    return __jsx("span", {
      className: _Sass_sileShowStyle_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dot,
      onClick: curentSlide.bind(_this, index + 1),
      id: "dot".concat(index),
      key: image + 'curent' + index
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SlideShow);

/***/ })

})
//# sourceMappingURL=index.js.2ad9c8a389c9a281a402.hot-update.js.map