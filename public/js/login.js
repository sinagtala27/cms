"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["login"],{

/***/ "./resources/assets/img/login_bg.png":
/*!*******************************************!*\
  !*** ./resources/assets/img/login_bg.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/login_bg.png?4497c3c9af19f9efde0e46771e0a76c0");

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/Login.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/Login.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    handleSubmit: function handleSubmit(e) {
      var _this = this;
      e.preventDefault();
      if (this.password.length > 0) {
        this.$axios.get('/sanctum/csrf-cookie').then(function (response) {
          _this.$axios.post('api/login', {
            email: _this.email,
            password: _this.password
          }).then(function (response) {
            console.log(response.data);
            if (response.data.success) {
              _this.$router.push({
                name: 'Dashboard'
              });
            } else {
              _this.error = response.data.message;
            }
          })["catch"](function (error) {
            console.error(error);
          });
        });
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!window.Laravel.isLoggedin && to.name !== 'Login') {
      console.log('Redirecting to Login');
      next({
        name: 'Login'
      }); // Redirect to the login page if not authenticated
    } else {
      console.log('Allowing access to the route');
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/Login.vue?vue&type=template&id=727657e0":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/Login.vue?vue&type=template&id=727657e0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "absolute w-full h-full"
};
var _hoisted_2 = {
  "class": "container mx-auto px-4 h-full"
};
var _hoisted_3 = {
  "class": "flex content-center items-center justify-center h-full"
};
var _hoisted_4 = {
  "class": "w-full lg:w-4/12 px-4"
};
var _hoisted_5 = {
  "class": "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-300 border-0"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "rounded-t mb-0 px-6 py-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-gray-950 text-sm font-bold"
}, " COMPLAINT PORTAL ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mt-6 border-b-1 border-blue-500"
})], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "flex-auto px-4 lg:px-10 py-10 pt-0"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-gray-800 text-center mb-3 font-bold"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "Sign in")], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "relative w-full mb-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block uppercase text-black-700 text-xs font-bold mb-2",
  "for": "email"
}, "Email", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "relative w-full mb-3"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block uppercase text-black-700 text-xs font-bold mb-2",
  "for": "password"
}, "Password", -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "inline-flex items-center cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "customCheckLogin",
  type: "checkbox",
  "class": "form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ml-2 text-sm font-semibold text-gray-700"
}, "Remember me")])], -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "text-center mt-6"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex flex-wrap mt-6\"><div class=\"w-1/2\"><a href=\"#pablo\" class=\"text-gray-300\"><small>Forgot password?</small></a></div><div class=\"w-1/2 text-right\"><a href=\"#pablo\" class=\"text-gray-300\"><small>Create new account</small></a></div></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 w-full h-full bg-gray-900",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "background-size": "100%",
      "background-repeat": "no-repeat"
    }, {
      'background-image': 'url(' + (__webpack_require__(/*! ../assets/img/login_bg.png */ "./resources/assets/img/login_bg.png")["default"]) + ')'
    }])
  }, null, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.handleSubmit && $options.handleSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    name: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.email = $event;
    }),
    "class": "border-0 px-3 py-3 placeholder-blue-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",
    placeholder: "Email",
    autocomplete: "email"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    "class": "border-0 px-3 py-3 placeholder-blue-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",
    placeholder: "Password",
    autocomplete: "current-password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]])]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full",
    type: "submit",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.handleSubmit && $options.handleSubmit.apply($options, arguments);
    })
  }, " Sign In ")])], 32 /* HYDRATE_EVENTS */)])]), _hoisted_15])])])])])]);
}

/***/ }),

/***/ "./resources/views/Login.vue":
/*!***********************************!*\
  !*** ./resources/views/Login.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_727657e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=727657e0 */ "./resources/views/Login.vue?vue&type=template&id=727657e0");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/views/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_727657e0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/views/Login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/views/Login.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/views/Login.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/views/Login.vue?vue&type=template&id=727657e0":
/*!*****************************************************************!*\
  !*** ./resources/views/Login.vue?vue&type=template&id=727657e0 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_727657e0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_727657e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=727657e0 */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/Login.vue?vue&type=template&id=727657e0");


/***/ })

}]);