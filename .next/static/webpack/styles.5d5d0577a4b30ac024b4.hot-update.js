webpackHotUpdate("styles",{

/***/ "./Sass/navbarStyle.scss":
/*!*******************************!*\
  !*** ./Sass/navbarStyle.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"navbar":"navbar___27OOt","logo":"logo___2Mwgt","menu":"menu___1rjuA","menu__top":"menu__top___1Gv5e","menu__bottom":"menu__bottom___34390","dropdown":"dropdown___2vSN_","lang__content":"lang__content___4Vh4z","money__content":"money__content___2GlXH","properties__content":"properties__content___3lpRG","dropdown__lang":"dropdown__lang___2D4--","dropdown__money":"dropdown__money___3c92V","dropdown__properties":"dropdown__properties___3scGF","flag":"flag___1EWgA","money":"money___1Zemd","properties":"properties___Mw8zg","follow__menu":"follow__menu___3zkbQ","menu__button":"menu__button___3QXI0"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1570633763765");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5d5d0577a4b30ac024b4.hot-update.js.map