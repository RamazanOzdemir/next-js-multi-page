webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./context/Context.js":
/*!****************************!*\
  !*** ./context/Context.js ***!
  \****************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var ContextProvider = function ContextProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['en', 'English']),
      lang = _useState[0],
      setLang = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['dl', "$"]),
      money = _useState2[0],
      setMoney = _useState2[1];

  var openLangDrop = function openLangDrop(isOpen, clss, lang) {
    var content = document.getElementById(clss);
    content.style.display = isOpen ? 'block' : 'none';

    if (!isOpen && clss === 'lang__drop') {
      setLang(lang);
    } else if (!isOpen && clss === 'money__drop') {
      setMoney(lang);
    }
  };

  var setTitle = function setTitle(curent) {
    var curentTitle = navbarText.menu[lang[0]][curent];
    return "tremglobal | ".concat(curentTitle);
  };

  var navbarText = {
    menu: {
      en: {
        home: 'Home',
        about: 'About Us',
        properties: 'Properties',
        services: 'Services',
        articles: 'Articles',
        contact: 'Contact'
      },
      ar: {
        home: 'الصفحة الرئيسية',
        about: 'من نحن',
        properties: 'الممتلكات',
        services: 'خدماتنا',
        articles: 'مقالات تهمّك',
        contact: 'أتصل بنا'
      },
      fa: {
        home: 'Home',
        about: 'About Us',
        properties: 'Properties',
        services: 'Services',
        articles: 'Articles',
        contact: 'Contact'
      },
      fr: {
        home: 'Home',
        about: 'About Us',
        properties: 'Properties',
        services: 'Services',
        articles: 'Articles',
        contact: 'Contact'
      },
      de: {
        home: 'Zuhause',
        about: 'Über Uns',
        properties: 'Eigenschaften',
        services: 'Dienstleistungen',
        articles: 'Artikel',
        contact: 'Kontakt'
      }
    },
    properties: {
      en: {
        all: 'All Properties',
        istanbul: 'Istanbul Properties',
        bursa: 'Istanbul Properties',
        sakarya: 'Sakarya Properties',
        bodrum: 'Bodrum Properties',
        usa: 'USA Properties'
      },
      ar: {
        all: 'مشاريعنا',
        istanbul: 'Istanbul الممتلكات',
        bursa: 'Bursa الممتلكات',
        sakarya: 'Sakarya الممتلكات',
        bodrum: 'Bodrum الممتلكات',
        usa: 'USA الممتلكات'
      },
      fa: {
        all: 'All Properties',
        istanbul: 'Istanbul Properties',
        bursa: 'Istanbul Properties',
        sakarya: 'Sakarya Properties',
        bodrum: 'Bodrum Properties',
        usa: 'USA Properties'
      },
      fr: {
        all: 'All Properties',
        istanbul: 'Istanbul Properties',
        bursa: 'Istanbul Properties',
        sakarya: 'Sakarya Properties',
        bodrum: 'Bodrum Properties',
        usa: 'USA Properties'
      },
      de: {
        all: 'Alle Eigenschaften',
        istanbul: 'Istanbul Eigenschaften',
        bursa: 'Istanbul Eigenschaften',
        sakarya: 'Sakarya Eigenschaften',
        bodrum: 'Bodrum Eigenschaften',
        usa: 'USA Eigenschaften'
      }
    }
  };
  var moneySlide = {
    slide1: {
      dl: '50000',
      tl: '324000',
      eu: '43000'
    },
    slide2: {
      dl: '43000',
      tl: '318000',
      eu: '39547'
    },
    slide3: {
      dl: '83000',
      tl: '641000',
      eu: '73548'
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var language = (window.navigator.userLanguage || window.navigator.language) + '';
    console.log(language);
    var brwLang = ['en', 'English'];
    if (language.indexOf('ar') !== -1) brwLang = ['ar', 'العربية'];else if (language.indexOf('fa') !== -1) brwLang = ['fa', 'فارسی'];else if (language.indexOf('fr') !== -1) brwLang = ['fr', 'français'];else if (language.indexOf('de') !== -1) brwLang = ['de', 'Deutsch'];
    console.log(language.indexOf('de'));
    setLang(brwLang);
  }, [setLang]);
  return __jsx(Context.Provider, {
    value: {
      lang: lang,
      setLang: setLang,
      openLangDrop: openLangDrop,
      money: money,
      navbarText: navbarText,
      setTitle: setTitle,
      moneySlide: moneySlide
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);

/***/ })

})
//# sourceMappingURL=index.js.e35df2d1b01654eb846b.hot-update.js.map