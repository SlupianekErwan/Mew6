/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/repeater-avis/edit.js":
/*!***********************************!*\
  !*** ./src/repeater-avis/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/repeater-avis/editor.scss");





const ALLOWED_MEDIA_TYPES = ['image'];
function Edit(_ref) {
  let {
    attributes: {
      content = []
    },
    setAttributes,
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    className: "block-editor-repeater-avis-title",
    placeholder: 'title',
    value: attributes === null || attributes === void 0 ? void 0 : attributes.title,
    onChange: title => {
      setAttributes({
        title
      });
    }
  }), content.map((value, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
      className: "block-editor-repeater-avis-quest",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('quest'),
      value: value.quest,
      onChange: quest => {
        const newContent = [...content];
        newContent[index].quest = quest;
        setAttributes({
          content: newContent
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => {
        const newContent = [...content.slice(0, index), ...content.slice(index + 1)];
        setAttributes({
          content: newContent
        });
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Supprimer')));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      const newContent = [...content, {}];
      setAttributes({
        content: newContent
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ajouter')));
}

/***/ }),

/***/ "./src/repeater-avis/index.js":
/*!************************************!*\
  !*** ./src/repeater-avis/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/repeater-avis/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/repeater-avis/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/repeater-avis/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/repeater-avis', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/repeater-avis/save.js":
/*!***********************************!*\
  !*** ./src/repeater-avis/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function save(_ref) {
  var _attributes$content;

  let {
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(), {
    className: "sec6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", null, attributes === null || attributes === void 0 ? void 0 : attributes.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "question__text"
  }, attributes === null || attributes === void 0 ? void 0 : (_attributes$content = attributes.content) === null || _attributes$content === void 0 ? void 0 : _attributes$content.map((obj, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    class: "question flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("b", null, obj === null || obj === void 0 ? void 0 : obj.quest)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "31",
    height: "30",
    viewBox: "0 0 31 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
    x: "0.803833",
    width: "29.2269",
    height: "30",
    fill: "url(#pattern0)"
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("defs", null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1"
  }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("use", {
    xlinkHref: "#image0_214_300",
    transform: "translate(-0.0132253) scale(0.00200479)"
  }), " "), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("image", {
    id: "image0_214_300",
    width: "512",
    height: "512",
    xlinkHref: "data:image/png;base64,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AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDA3AT+MrcOTdyfJ1HeX2P/99j/O/a/x/4/sdsIECBAoE+BVTTrP340LY/Z//zxvS8E7hT4NZ7xPvbLPfvXePxl7DYCBAgQ6EPgcTQjj9t5fN49dn+Jx97E/jB2G4G9Ar/Fb26aQLsTKn/+GPujvSX5BQECBAi0FngQFbyK/aZj9O5jf8TznrZukPLHFDh0El2dVN+iq+sxu6vVBAgQGFrgIlr/Ofarx+RDvt8M3WuNn1wgl48OmTj7nrOevEUKJECAAIF9Ahn8D12tvem4/WRfwR5flkAuIR2TRe5Oqs2y2PSWAAECZxE4NfjnsTvfF5DHftvCBV5E/3eD+bE/SwIWPpl0nwCBpgJTBP/t8T0v+9oWLvA2+r+dEFN8lQQsfELpPgECTQTyDXz5vqspjtNZxscmrVToUAJTLP/vTsjXQwloLAECBPoWmDr45zE7kwmXAfoe96atexil7wbvqX7OlQUbAQIECJwm0CL4b4/zeUnBtlCBzP6mXFLaTqrtV0nAQieWbhMgMInA8yil5TE67wCzLVjgU/R9G7BbfJUELHhy6ToBAkcLrOOVLY7J2zJdAjh6aObzwrxev50Qrb6+izpca5rPnNETAgTaCqyj+FbH4225efJnW7jAs+j/dkK0/Po+6pEELHyy6T4BAncKrOMZLY/F27Lz5M9G4Jc8Q99OipZfJQEmGwECBPYLbOJXLY/B27Lz/wL8ur8ZfrMkgZwIOSG2k6Pl10wC8u4DGwECBAj8v8Amvm157L1adq782gj8FKi6FJCTMK89SQJ+0vuGAIGFC1QGf2/MXvhk29f9dfziapbY8ntJwL5R8DgBAksSyGvxLY+1V8t2GXZJM+uIvra+7/TqZJQEHDFAXkKAwGwE8mz86jGx5ffvoi5vxJ7N1GnXkadR9LfYW07Gbdmfo55Vu64omQABAl0KVAZ/y/5dToF+G1WZBHwJBklAv3NBywgQmFZA8J/WU2kNBCQBDVAVSYDAYgVyCT6vw29XQFt/dea/2Kk2TccvopivRRPWSsA0Y6YUAgT6E6gO/q/6I9CiEQUqk4BMNrI+GwECBOYiUB38N3OB048+BCQBfYyDVhAgMJbAw2juh9hbL/dvyxf8x5ofw7Q2k4Bcpt9OtJZfrQQMMy00lACBPQIZ/D/F3vJYebXsl3va4WECkwisopTKJODJJK1WCAECBGoFqoP/urZ7aluqQGUSkJ9HkHcj2AgQIDCKgOA/ykhp51ECkoCj2LyIAIGZC1QeGy/Dcj1zT93rVKAyy7US0Okk0CwCBH4KVAb/PCY++1mzbwicQaAyCZDtnmGAVUmAwEEC1cHfpdGDhsWTWgtIAloLK58AgZ4FLqJxVW+Othra80xYaNsyCai819V1r4VONN0m0JlABv+qT0vNepz5dzYBNOdfAtWfdvUCPAECBM4oUB38sz4bgW4FqpOATbcSGkaAwJwFBP85j66+HS0gCTiazgsJEBhA4Gm0Ma/F5xuTW+8+FXWACaGJfxZ4W/DHsf3jsxLwZ3+PECAwvUBl8M83Fj6avgtKJFAjUJkEvKnpkloIEFioQHXwXy3UWbdnJFCZBGRdNgIECEwt8DwKrFr2zzN/wX/qEVTe2QReR83b5frWXyUBZxtmFROYpcA6etX6uLUt/3PUtZqlok4tWmATvd9O8tZfMwl4sGhtnSdAYAqBdRTS+ni1Lf9T1PVwikYrg0CPApto1Hayt/76PuqSBPQ4C7SJwBgC62hm6+PUtnzBf4w5oZUnCmwK/6gkAScOlpcTWKhA5XFK8F/oJFtqt19Ex7eZb+uvkoClzjL9JnCcQGXwz+OTZf/jxsmrBhZYR9tbB/9t+R+iLn9kA08WTSdQJFAd/F2mLBpY1fQnUJkEWGbrb/y1iEBPAq+jMduThtZfrUz2NPLacjaBTAK+xd76Dy7LlwScbZhVTKBrgbxzqOIYlHW8i92Zf9fTQeMqBZ5GZZKASnF1ESCwFagM/lmXjQCBHYHKJOBL1L3aqd+PBAgsT0DwX96Y63GnApKATgdGswjMTCCX4PM6fNWyvzP/mU0g3Wkj8DiK/Rp7xR+mlYA2Y6hUAj0LVAf/Vz1jaBuB3gQuokGVSUDWZyNAYP4C1cF/M39SPSQwvUBlEpDJhiRg+jFUIoGeBB5GYz7EXrG6mHUI/j2NvrYMJ5BB+Y/YK/5gJQHDTQ8NJnCwQAb/T7FXHEsE/4OHxRMJ3C6wil/ntfqKP1xJwO1j4bcERhSoDv7rEZG0mUCvAtVJQN6NYCNAYHwBwX/8MdQDAt/v269aCcgPJZIEmHQExhaoPHHIFUpn/mPPF63vXODXaF/VdTxJQOeTQfMI3CJQGfzzWPH8lrb4FQECEwlULunlH/azidqtGAIEagSqg7/VwppxVQuB7wKVSYClPZOOwDgCF9FUlwrHGS8tJXCUQCYBH2PPAF2xr49qpRcRIFAlkME/7+SpOB64RFg1quohsEeg+lO9JAF7BsLDBM4sUBn83S585sFWPYGtQHUS8HJbsa8ECHQhIPh3MQwaQeA8AtVJwOY83VQrAQI7AvkGvFyOr1j2d+a/g+9HAr0IZBLwNvaKA0HWIQnoZeS1Y6kClcE/31iYKw02AgQ6FpAEdDw4mkZgIoHq4L+aqN2KIUCgsUBlEpB12QgQqBPID92pWvbPM3/Bv25s1URgEoE3UUou1VfskoBJhkwhBO4UWMczKv6msw7B/87h8AQC/QpsomlVBwtJQL/zQMvmIbAu/HvOjxx/OA82vSCwXIHKJOD3YM43I9oIEJhWQPCf1lNpBBYjUJkEvA9VScBippaOFghU/v068y8YUFUQqBZ4ERVeFu2SgOrRVd9cBSqD/4dAtOw/15mkX4sXWIeAJGDx0wDAIAKVwV/SPsik0EwCpwhUJgGWE08ZKa9dssDr6LxkfckzQN8JNBLIJOBb7BUHGElAo0FU7GwF8o6air/NrMOZ/2ynkY4R2C9Q+UlikoD94+A3BK4KVAZ/t+5elfc9gYUJVCcBq4X56i6B+wgI/vfR8lwCBE4WqEwCvkRrJQEnD5kCZibwIPqTS/FVy/7O/Gc2gXSHwCkCT+LFX2OvOABJAk4ZKa+dm0B18M83F9oIECBwTSD/1ack4BqJHwg0FagO/pumvVE4AQJDC1QmAX+EVNZnI7BEgfzAnQ+xV6y6ZR2C/xJnmT4TuKdAZRKQKw6SgHsOkKcPL5DB/1Psgv/wQ6kDBOYnsIou5bX6igOUJGB+80eP9gtUB//1/qb4DQECBG4WqE4CHt/cDI8SmI2A4D+bodQRAvMXqEwC8pMJ85ZEG4E5ClT+LV0G4HqOiPpEgECtQB64qq5XSgJqx1ZtNQKVwT//hgT/mnFVC4FFCFQuXUoCFjGlFtPJ6uBvFW0xU0tHCdQJVCcBzmLqxlZNbQQuotiqN9NKnNuMoVIJEPghUJkEXEadkgBTb1SBDP55h0vO49a74D/qLNFuAoMJVH96mSRgsAmiud8/26Iq+Gc97qAx6QgQKBOQBJRRq2gwgcoz/wz+WZ+NAAECpQLVScCmtHcqI3B/gXwDXi7Ht17yz/IF//uPj1cQIDChQCYBv8deccDLOjYTtl1RBKYUqAz+/o/GlCOnLAIEThJ4G6+WBJxE6MUDC1QG/7yrYDWwlaYTIDBDgcok4PUM/XRpTIHn0eyqZX/Bf8w5otUEFiFQmQRkXTYC5xRYR+VVK1+C/zlHWt0ECBwksIlnVR0UJQEHDYknNRCoDP6fov2/NuiDIgkQIDC5gCRgclIFdiRQHfzzA7hsBAgQGEagMgl4Hyp5R4KNQGuBynmdZ/6Cf+sRVT4BAk0EfotSL4t2SUCTIVToFYHK4P8x6hX8r+D7lgCB8QTW0WRJwHjjpsXXBSqDv2T2ur2fCBAYWKA6CXDmNPBk6bDpedupJLbDgdEkAgTGEKhMAlw7HWNOjNDKyltbnfmPMCO0kQCBowQqPzFNEnDUEHnRFYHK4J91eSPrFXzfEiAwPwFJwPzGdI49qg7+czTUJwIECPxJoDIJ+By1r/7UAg8QuFkgz8JzKb7qmn8mGjYCBAgsSuBJ9PZr7BUH2i9RjyRgUdPrqM5WB/83R7XSiwgQIDADgYvogyRgBgM5gy5UB//NDMx0gQABAicJVCcBj05qrRfPUSBvG/0Qe8VqVNYh+M9xFukTAQJHCVQmAbnikPXZCKRABv+8Y0TwTw0bAQIEziCQZ+Z5rb7iQCwJOMMAd1hldfB/0aGBJhEgQKALgVW0QhLQxVDMvhHVwX89e1EdJECAwIkC1UnAkxPb6+XjCVTOscvgWY9HpMUECBA4j0AeoPP+/Tx4tt6/RR1PY7ctQyDnVtUqU86t9TJY9ZIAAQLTCVQu0UoCphu3nkuqDv4Sy55ng7YRINC1gCSg6+EZqnEX0drKM3/Bf6jpobEECPQoUJkE5OUGS7Y9zoLT2pTBv+oDp6wmnTZWXk2AAIFrApkEvI89A3TFLgm4xj/0D5XBP5OMx0NraTwBAgQ6FHgQbZIEdDgwHTepOvhnfTYCBAgQaCBQnQT81qAPiqwRyGvwuRxfsWLkg6VqxlQtBAgsXCCTgHexVxzYs47Nwr1H7L7gP+KoaTMBAgQOFHgbz5MEHIi1oKdVBv+8q2C1IFtdJUCAQDcCkoBuhqKLhjyPVlQt+wv+XQy5RhAgsGSByiTgzZKhO+/7OtpXtSIk+Hc+GTSPAIHlCLyKrlYd/DPhsPUlUBn8P0XXV311X2sIECCwbIFNdF8SsLw5UB38Hy6PWI8JECDQv0B1EpB3JNjOJ1A53nnmL/ifb6zVTIAAgTsFXsYzqlYC8oOJJAF3DkmTJwj+TVgVSoAAgbEF1tF8ScDYY3hb6yuDvyTvtpHwOwIECHQoIAnocFAmaNLrKENyNwGkIggQIDBngcok4GNAukbcdjZV3vLpzL/tWCqdAAECzQWeRQ3fYq84a/RGsXbDWRn8f49ueG9Hu7FUMgECBMoEKj8eVhIw/bBWBn+f8zD9+CmRAAECZxWQBJyV/6jK8yw8l+IrVm+yDsH/qGHyIgIECPQvkEnA19grAsqXqGfVP0m3LRT8ux0aDSNAgMCYAhfRbElA32NXHfw3fXNoHQECBAhMJSAJmEpy+nLyTooPsVes0mQdgv/0Y6hEAgQIdC1QnQRkfbbbBTL455soBf/bnfyWAAECBE4UeBSvz2v1FQEnLztIAvYPWHXw/21/U/yGAAECBJYgsIpOSgLOO9LVwX993u6qnQABAgR6EZAEnG8kKu0vo5uC//nGWs0ECBDoUiAD0efYM0i03vOTCfOWxKVvaV61+pJjul46uP4TIECAwM0ClUvRS08CKoP/0q1vnu0eJUCAAIFrApKAaxxNfriIUqvO/AX/JkOoUAIECMxToDoJeD5Pxht7lcG/6oOYBP8bh8CDBAgQIHCbQCYBH2LPa8cV+xKuT1cG/0wynsRuI0CAAAEC9xao/kjaOScB1cE/67MRIECAAIGjBSQBR9P9fGHe8ZDL8RUrKT5w6Se7bwgQIEDgVIHqJODlqQ3u6PWCf0eDoSkECBAgcJzA23hZxVls1rE5roldvaoy+OddBauueq8xBAgQIDArAUnAYcOZdzZULfsL/oeNiWcRIECAwIkClUnAqxPbeo6Xr6PSXMWo2AX/c4ywOgkQILBggdfR94oAl3VkwjHKto6GVrl8jrpWo8BoJwECBAjMR2ATXakKdiMkAetCj09RV35Wg40AAQIECJxFQBLwL/ZKB8H/LFNdpQQIECCwK1AZ/N5F5XlbYk9bZf8F/55GXlsIECBA4Pu/mr0Mh4r9fdTTSxJQGfyz35b9/bERIECAQHcC62hRRQKQdfSQBLxeWH+7m3AaRIAAAQL9CCwlCai8FbKHZKefGaYlBAgQINCtQOWH4Jzjmnhl8O/xPQ/dTjwNI0CAAIHzC1R+DG5lElAZ/Ee49fH8M00LCBAgQKA7gTklAfmmw1yKr3qPg+Df3XTWIAIECBC4j0B1ErC6T+MOfK7gfyCUpxEgQIAAgasCF/HD19grzp6/RD1TJgHVwX/E/31wdax9T4AAAQIErgmMmATkPfcfYq9IXLKOzTUxPxAgQIAAgZkIjJQEZPDPNxcK/jOZfLpBgAABAucVyCQgl+krAmtedsj67rtVB/+X922g5xMgQIAAgREFVtHoXpOA6uC/HnEAtZkAAQIECBwr0GMSUNmmy4AT/I+dPV5HgAABAkMLVAbcvBzw+BatyrYI/rcMhF8RIECAwDIEKpfcvwVpfi7B7lYZ/LMNz3Yb4GcCBAgQILBEgXMmARcBXvV+hH0JyBLHXJ8JECBAgMB3gXMkARn8qz6gSPA30QkQIECAwB6BTAKqPngnA3JV8M96brr0sIfBwwQIECBAYHkC1R+9m2/Ia7ln8M+VBhsBAgQIECBwh8BckgDB/46B9msCBAgQILArMHoSIPjvjqifCRAgQIDAgQKZBLyNveUSfYuy866CRwf20dMIECBAgACBPQIjJQEZ/Fd7+uFhAgQIECBA4J4CIyQBgv89B9XTCRAgQIDAIQJv4kktluynKPNztM2Z/yGj6DkECBAgQOAIgU28ZoqAPWUZn6JN+RkGNgIECBAgQKChQE9JgODfcKAVTYAAAQIEdgV6SAIE/91R8TMBAgQIECgQeBF1TLmUf5+y3kfdlv0LBlkVBAgQIEDgJoF1PHifwD3FczP452cU2AgQIECAAIEzClQmAYL/GQda1QQIECBAYFcgk4BvsU9xhr+vDMF/V93PBAgQIECgA4Gn0YZWSUB+EJGNAAECBAgQ6FSgRRIg+Hc62JpFgAABAgSuCkyZBAj+V2V9T4AAAQIEOhd4HO3Lf8m773r+IY+/7ryPmkeAAAECBAjcIHARjx2bBGxuKM9DBAgQIECAwCACj6Kd+Yl9h5zx53PyTYTr2G0ECBAgQIDA4AIPov2vYr9rNeBjPCcTBhsBAjMX+MvM+6d7BAhcF8hE4D9jfx77v/341f/G17/F/l+x/+PHY74QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGEzg/wDppGgstkoMSgAAAABJRU5ErkJggg=="
  }), " "), " ")))));
}

/***/ }),

/***/ "./src/repeater-avis/editor.scss":
/*!***************************************!*\
  !*** ./src/repeater-avis/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/repeater-avis/style.scss":
/*!**************************************!*\
  !*** ./src/repeater-avis/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"repeater-avis/index": 0,
/******/ 			"repeater-avis/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutenpride"] = self["webpackChunkgutenpride"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["repeater-avis/style-index"], function() { return __webpack_require__("./src/repeater-avis/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map