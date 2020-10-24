(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[15,13],{

/***/ "48d21be1c864e4cc9930":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadThumb", function() { return loadThumb; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c772359e08e81b5b3ba");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _load_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e73bc40d80e6bb44969b");


function loadThumb(assetPrimaryKey, size) {
    if (size === void 0) { size = null; }
    var key = assetPrimaryKey.toLowerCase();
    var ext = key.match(_load_image__WEBPACK_IMPORTED_MODULE_1__["regexGifContent"]) ? 'gif' : 'png';
    return _load_image__WEBPACK_IMPORTED_MODULE_1__["contentAssetUrl"] + "/previews/" + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["compact"])([key, size]).join('_') + "." + ext;
}


/***/ }),

/***/ "e73bc40d80e6bb44969b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentAssetUrl", function() { return contentAssetUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexGifContent", function() { return regexGifContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/*  This is a generated file, please edit load_image.ts.erb */
var contentAssetVersion = 4; // update ASSET_VERSION in shapes.rb
var contentAssetUrl = "https://" + ( true ? 'cdn' : undefined) + ".fastly.picmonkey.com/content" + contentAssetVersion;
var regexGifContent = /_gif_/;
function loadImage(assetPrimaryKey) {
    var key = assetPrimaryKey.toLowerCase();
    var ext = key.match(regexGifContent) ? 'gif' : 'png';
    var image = contentAssetUrl + "/" + key + "." + ext;
    return image;
}


/***/ })

}]);
//# sourceMappingURL=editor-assets-thumbs.3dcc27bf2f32630afc7e.bundle.js.map