(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'agregarProducto',
  data: function data() {
    return {
      descuento: 0,
      cate: {},
      producto: {
        nombre: '',
        descuentoProducto: [0, 0, 0, 0, 0],
        dre: 0,
        precioBase: 0,
        categoria: {},
        proveedor: {
          nombre: ''
        },
        precioCosto: 0,
        iva: 0,
        flete: 0
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['agregarProducto', 'getCategoriasO', 'getProveedores', 'agregarCategoriaProveedor'])),
  created: function created() {
    this.getCategoriasO();
    this.getProveedores();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['categorias', 'proveedores', 'respuesta']), {
    setDre: function setDre() {
      var p = 0;
      var i = 0;
      this.producto.precioBase = parseFloat(this.producto.precioBase);
      this.producto.descuentoProducto.forEach(function (element) {
        if (element > 0) {
          p = 1 - element / 100;

          if (i > 0) {
            i = i * p;
          } else {
            i = p;
          }
        }
      });
      this.producto.dre = 1 - i;

      if (this.producto.dre != 1) {
        this.producto.precioCosto = this.producto.precioBase - this.producto.precioBase * this.producto.dre;

        if (this.producto.iva != 0) {
          this.producto.precioCosto = this.producto.precioCosto + this.producto.precioCosto * (this.producto.iva / 100);
        }

        if (this.producto.flete != 0) {
          this.producto.flete = parseFloat(this.producto.flete);
          this.producto.precioCosto = this.producto.precioCosto + this.producto.flete;
        }

        return [this.producto.dre, this.producto.precioCosto];
      } else {
        this.producto.precioCosto = this.producto.precioBase;

        if (this.producto.iva != 0) {
          this.producto.precioCosto = this.producto.precioCosto + this.producto.precioCosto * (this.producto.iva / 100);
        }

        if (this.producto.flete != 0) {
          this.producto.flete = parseFloat(this.producto.flete);
          this.producto.precioCosto = this.producto.precioCosto + this.producto.flete;
        }

        return [this.producto.dre, this.producto.precioCosto];
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProv.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarProv.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'agregarProv',
  data: function data() {
    return {
      proveedor: {
        nombre: '',
        cuit: '',
        telefono: ''
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['agregarProveedor'])),
  created: function created() {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProducto.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetalleProducto.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DetalleProdoucto',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getProducto'])),
  created: function created() {
    this.getProducto(this.id);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['producto', 'proveedor', 'categoria']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProv.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetalleProv.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DetalleProv',
  data: function data() {
    return {
      id: this.$route.params.id,
      categoria: '',
      descuento: 0
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getProveedor', 'getCategorias', 'agregarCategoriaProveedor'])),
  created: function created() {
    this.getProveedor(this.id);
    this.getCategorias();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['proveedor', 'categorias']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarProducto.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'editarProducto',
  data: function data() {
    return {
      id: this.$route.params.id,
      dre: 0
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getProducto', 'getCategoriasO', 'getProveedores', 'editarProducto'])),
  created: function created() {
    this.getProducto(this.id);
    this.getCategoriasO();
    this.getProveedores();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['producto', 'categorias', 'proveedores', 'respuesta', 'descuentosProducto', 'proveedor', 'categoria']), {
    setDre: function setDre() {
      var p = 0;
      var i = 0;
      this.$store.state.producto.precioBase = parseFloat(this.$store.state.producto.precioBase);
      this.$store.state.producto.descuentoProducto.forEach(function (element) {
        if (element > 0) {
          p = 1 - element / 100;

          if (i > 0) {
            i = i * p;
          } else {
            i = p;
          }
        }
      });
      this.dre = 1 - i;

      if (this.dre != 1) {
        this.$store.state.producto.precioCosto = this.$store.state.producto.precioBase - this.$store.state.producto.precioBase * this.dre;

        if (this.$store.state.producto.iva != 0) {
          this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + this.$store.state.producto.precioCosto * (this.$store.state.producto.iva / 100);
        }

        if (this.$store.state.producto.flete != 0) {
          this.$store.state.producto.flete = parseFloat(this.$store.state.producto.flete);
          this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + this.$store.state.producto.flete;
        }

        return [this.dre, this.$store.state.producto.precioCosto];
      } else {
        this.$store.state.producto.precioCosto = this.$store.state.producto.precioBase;

        if (this.$store.state.producto.iva != 0) {
          this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + this.$store.state.producto.precioCosto * (this.$store.state.producto.iva / 100);
        }

        if (this["this"].$store.state.producto.flete != 0) {
          this.$store.state.producto.flete = parseFloat(this.$store.state.producto.flete);
          this.$store.state.producto.precioCosto = this.$store.state.producto.precioCosto + this.$store.state.producto.flete;
        }

        return [this.dre, this.$store.state.producto.precioCosto];
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProveedor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarProveedor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'editarProveedor',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getProveedor', 'editarProveedor'])),
  created: function created() {
    this.getProveedor(this.id);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['proveedor']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoCategorias.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoCategorias.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ncat: {
        nombre: '',
        categoria_id: ''
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getCategoriasO', 'agregarCategoria'])),
  created: function created() {
    this.getCategoriasO();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['categorias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['filtered_categorias']), {
    search: {
      get: function get() {
        return this.$store.state.filter.query;
      },
      set: function set(val) {
        this.$store.commit('SET_QUERY', val);
      }
    }
  }),
  mutations: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['SET_QUERY']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoProveedores.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoProveedores.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ListadoProveedores',
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getProveedores'])),
  created: function created() {
    this.getProveedores();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['proveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['filtered_proveedores']), {
    search: {
      get: function get() {
        return this.$store.state.filter.query;
      },
      set: function set(val) {
        this.$store.commit('SET_QUERY', val);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuProductos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MenuProductos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuProductos',
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getProductos', 'getCategoriasO'])),
  created: function created() {
    this.getProductos();
    this.getCategoriasO();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['productos', 'categorias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['filtered_productos']), {
    search: {
      get: function get() {
        return this.$store.state.filter.query;
      },
      set: function set(val) {
        this.$store.commit('SET_QUERY', val);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerEditarCategoria.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VerEditarCategoria.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'verEditarCategoria',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getCategoria', 'getCategoriasO', 'editarCategoria'])),
  created: function created() {
    this.getCategoria(this.id);
    this.getCategoriasO();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['categoria', 'categorias']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProducto.vue?vue&type=template&id=986a54e0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarProducto.vue?vue&type=template&id=986a54e0& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.agregarProducto(_vm.producto)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "form-group mt-5" },
          [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-4" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "MenuProductos" } } },
                    [
                      _vm.respuesta != ""
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  _vm.$store.state.respuesta = ""
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Finalizar\n                        "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _vm.respuesta === ""
                    ? _c(
                        "router-link",
                        { attrs: { to: { name: "MenuProductos" } } },
                        [
                          _c("button", { staticClass: "btn btn-danger" }, [
                            _vm._v(
                              "\n                            Cancelar\n                        "
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm.respuesta != ""
              ? _c(
                  "div",
                  {
                    staticClass:
                      "alert alert-success alert-dismissible fade show mt-4"
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.respuesta) +
                        " \n                "
                    ),
                    _vm._m(1)
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Nombre Producto")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.producto.nombre,
                    expression: "producto.nombre"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.producto.nombre },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.producto, "nombre", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("componente-fcosto", { attrs: { producto: _vm.producto } }),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-10" }, [
                  _c("label", [_vm._v("Proveedor:")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.producto.proveedor,
                          expression: "producto.proveedor"
                        }
                      ],
                      staticClass: "custom-select",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.producto,
                            "proveedor",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.proveedores, function(proveedor) {
                      return _c(
                        "option",
                        { key: proveedor.id, domProps: { value: proveedor } },
                        [
                          _vm._v(
                            _vm._s(proveedor.id) +
                              " - " +
                              _vm._s(proveedor.nombre)
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _vm.producto.proveedor.nombre != ""
                  ? _c(
                      "div",
                      { staticClass: "col-2" },
                      [
                        _c("hr"),
                        _vm._v(" "),
                        _c("componente-facp", {
                          attrs: { proveedor: _vm.producto.proveedor }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group my-4" }, [
                _c("label", [_vm._v("Categoria:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.producto.categoria,
                        expression: "producto.categoria"
                      }
                    ],
                    staticClass: "custom-select",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.producto,
                          "categoria",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.producto.proveedor.categorias, function(
                    cate,
                    index
                  ) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: cate } },
                      [_vm._v(_vm._s(cate.id) + " - " + _vm._s(cate.nombre))]
                    )
                  }),
                  0
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm.respuesta === ""
          ? _c(
              "button",
              {
                staticClass: "btn btn-success btn-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Agregar")]
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [_vm._v("Ingreso de Nuevo Producto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProv.vue?vue&type=template&id=104a0719&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarProv.vue?vue&type=template&id=104a0719& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.agregarProveedor(_vm.proveedor)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group mt-5" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-4" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "listadoProveedores" } } },
                  [
                    _c("button", { staticClass: "btn btn-danger" }, [
                      _vm._v(
                        "\n                            Cancelar\n                        "
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Nombre Proveedor")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.proveedor.nombre,
                  expression: "proveedor.nombre"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.proveedor.nombre },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.proveedor, "nombre", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("CUIT")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.proveedor.cuit,
                  expression: "proveedor.cuit"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.proveedor.cuit },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.proveedor, "cuit", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Telefono")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.proveedor.telefono,
                  expression: "proveedor.telefono"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.proveedor.telefono },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.proveedor, "telefono", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [_vm._v("Agregar")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [_vm._v("Ingreso de Nuevo Proveedor")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProducto.vue?vue&type=template&id=07dbe3a8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetalleProducto.vue?vue&type=template&id=07dbe3a8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "editarProducto", params: { id: _vm.producto.id } }
              }
            },
            [
              _c("button", { staticClass: "btn btn-warning" }, [
                _vm._v("\n                    Editar\n                ")
              ])
            ]
          ),
          _vm._v(" "),
          _c("router-link", { attrs: { to: { name: "MenuProductos" } } }, [
            _c("button", { staticClass: "btn btn-danger" }, [
              _vm._v("\n                    Volver\n                ")
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "list-group mt-3" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_c("h3", [_vm._v(_vm._s(_vm.producto.nombre))])])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Codigo: ")]),
        _vm._v(" " + _vm._s(_vm.producto.id))
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Precio Costo: ")]),
        _vm._v(" "),
        _c("h5", [_vm._v("$" + _vm._s(_vm.producto.precioCosto))])
      ]),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "list-group-item" },
        [
          _c("strong", [_vm._v("Proveedor: ")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "detalleProv", params: { id: _vm.proveedor.id } }
              }
            },
            [_c("a", [_vm._v(_vm._s(_vm.proveedor.nombre))])]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "list-group-item" },
        [
          _c("strong", [_vm._v("Categoria: ")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  name: "verEditarCategoria",
                  params: { id: _vm.categoria.id }
                }
              }
            },
            [_c("a", [_vm._v(_vm._s(_vm.categoria.nombre))])]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Ultima Actualizacion: ")]),
        _vm._v(" " + _vm._s(_vm.producto.updated_at))
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h2", [_vm._v("Detalle de Producto ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProv.vue?vue&type=template&id=0ef43d9e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetalleProv.vue?vue&type=template&id=0ef43d9e& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c("router-link", { attrs: { to: { name: "editarProveedor" } } }, [
            _c("button", { staticClass: "btn btn-warning" }, [
              _vm._v("\n                    Editar\n                ")
            ])
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: { name: "listadoProveedores" } } }, [
            _c("button", { staticClass: "btn btn-danger" }, [
              _vm._v("\n                    Volver\n                ")
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "list-group mt-3" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_c("h3", [_vm._v(_vm._s(_vm.proveedor.nombre))])])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Codigo: ")]),
        _vm._v(" " + _vm._s(_vm.proveedor.id))
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("CUIT: ")]),
        _vm._v(" " + _vm._s(_vm.proveedor.cuit))
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Telefono: ")]),
        _vm._v(" " + _vm._s(_vm.proveedor.telefono))
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Categorias: ")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c(
              "ul",
              _vm._l(_vm.proveedor.categorias, function(categoria, index) {
                return _c("li", { key: index }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(categoria.nombre) +
                      "\n                        "
                  )
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [_c("componente-facp", { attrs: { proveedor: _vm.proveedor } })],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h2", [_vm._v("Detalle Proveedor: ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=template&id=b5b950cc&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarProducto.vue?vue&type=template&id=b5b950cc& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.editarProducto(_vm.producto)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "form-group mt-5" },
          [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-4" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "MenuProductos" } } },
                    [
                      _vm.respuesta != ""
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  _vm.$store.state.respuesta = ""
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Finalizar\n                        "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _vm.respuesta === ""
                    ? _c(
                        "router-link",
                        { attrs: { to: { name: "MenuProductos" } } },
                        [
                          _c("button", { staticClass: "btn btn-danger" }, [
                            _vm._v(
                              "\n                            Cancelar\n                        "
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm.respuesta != ""
              ? _c(
                  "div",
                  {
                    staticClass:
                      "alert alert-success alert-dismissible fade show mt-4"
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.respuesta) +
                        " \n                "
                    ),
                    _vm._m(1)
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Nombre Producto")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.producto.nombre,
                    expression: "producto.nombre"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.producto.nombre },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.producto, "nombre", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("componente-fcosto", { attrs: { producto: _vm.producto } }),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Proveedor:")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.producto.proveedor_id,
                      expression: "producto.proveedor_id"
                    }
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.producto,
                        "proveedor_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    {
                      attrs: { selected: "" },
                      domProps: { value: _vm.proveedor.id }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.proveedor.id) +
                          "-" +
                          _vm._s(_vm.proveedor.nombre)
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.proveedores, function(proveedor) {
                    return _c(
                      "option",
                      { key: proveedor.id, domProps: { value: proveedor.id } },
                      [
                        _vm._v(
                          _vm._s(proveedor.id) +
                            " - " +
                            _vm._s(proveedor.nombre)
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Categoria:")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.producto.categoria_id,
                      expression: "producto.categoria_id"
                    }
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.producto,
                        "categoria_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    {
                      attrs: { selected: "" },
                      domProps: { value: _vm.categoria.id }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.categoria.id) +
                          "-" +
                          _vm._s(_vm.categoria.nombre)
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.categorias, function(cate, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: cate.id } },
                      [_vm._v(_vm._s(cate.id) + " - " + _vm._s(cate.nombre))]
                    )
                  })
                ],
                2
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm.respuesta === ""
          ? _c(
              "button",
              {
                staticClass: "btn btn-warning btn-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Guardar Cambios")]
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [_vm._v("Editar Producto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProveedor.vue?vue&type=template&id=6d26cf14&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarProveedor.vue?vue&type=template&id=6d26cf14& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.editarProveedor(_vm.proveedor)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group mt-5" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-4" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "detalleProv", params: { id: _vm.id } }
                    }
                  },
                  [
                    _c("button", { staticClass: "btn btn-danger" }, [
                      _vm._v(
                        "\n                            Cancelar\n                        "
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Nombre Proveedor")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.proveedor.nombre,
                  expression: "proveedor.nombre"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.proveedor.nombre },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.proveedor, "nombre", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("CUIT")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.proveedor.cuit,
                  expression: "proveedor.cuit"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.proveedor.cuit },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.proveedor, "cuit", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Telefono")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.proveedor.telefono,
                  expression: "proveedor.telefono"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.proveedor.telefono },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.proveedor, "telefono", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-success btn-block",
            attrs: { type: "submit" }
          },
          [_vm._v("Guardar")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [_vm._v("Editar Proveedor")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoCategorias.vue?vue&type=template&id=ce65b502&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoCategorias.vue?vue&type=template&id=ce65b502& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-2" },
          [
            _c("router-link", { attrs: { to: { name: "MenuProductos" } } }, [
              _c("button", { staticClass: "btn btn-danger" }, [
                _vm._v("Volver")
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("form", { staticClass: "my-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-10" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass: "form-control mr-sm-2 form-block",
              attrs: {
                type: "search",
                placeholder: "Search",
                "aria-label": "Search"
              },
              domProps: { value: _vm.search },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success btn-block",
            attrs: {
              type: "button",
              "data-toggle": "modal",
              "data-target": "#exampleModal",
              "data-whatever": "@mdo"
            }
          },
          [_vm._v("Agregar")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "exampleModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true"
            }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.agregarCategoria(_vm.ncat)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "col-form-label" }, [
                            _vm._v("Nombre de la Nueva Categoria:")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.ncat.nombre,
                                expression: "ncat.nombre"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.ncat.nombre },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.ncat,
                                  "nombre",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-form-label",
                              attrs: { for: "recipient-name" }
                            },
                            [_vm._v("Categoria Padre:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.ncat.categoria_id,
                                  expression: "ncat.categoria_id"
                                }
                              ],
                              staticClass: "custom-select",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.ncat,
                                    "categoria_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { selected: "selected" },
                                  domProps: { value: null }
                                },
                                [_vm._v("0 - Vacio")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.categorias, function(
                                categoria,
                                index
                              ) {
                                return _c("option", { key: index }, [
                                  _vm._v(
                                    _vm._s(categoria.id) +
                                      " - " +
                                      _vm._s(categoria.nombre)
                                  )
                                ])
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(3)
                      ]
                    )
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("table", { staticClass: "table table-striped" }, [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.filtered_categorias, function(categoria) {
              return _c("tr", { key: categoria.id }, [
                _c("th", [_vm._v(_vm._s(categoria.id))]),
                _vm._v(" "),
                categoria.nro === 2
                  ? _c("td", [_vm._v(" ----" + _vm._s(categoria.nombre))])
                  : _vm._e(),
                _vm._v(" "),
                categoria.nro === 1
                  ? _c("td", [_vm._v(" --" + _vm._s(categoria.nombre))])
                  : _vm._e(),
                _vm._v(" "),
                categoria.nro === 0
                  ? _c("td", [_c("strong", [_vm._v(_vm._s(categoria.nombre))])])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "verEditarCategoria",
                            params: { id: categoria.id }
                          }
                        }
                      },
                      [
                        _c(
                          "button",
                          { staticClass: "btn btn-warning btn-sm" },
                          [_vm._v("Ver / Editar")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-10" }, [
      _c("h1", [_vm._v("Categorias")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-success my-2 my-sm-0",
          attrs: { type: "submit" }
        },
        [_vm._v("Buscar")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Agregar Categoria")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Cerrar")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-success btn-block", attrs: { type: "submit" } },
        [_vm._v("Agregar")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoProveedores.vue?vue&type=template&id=0e33df86&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoProveedores.vue?vue&type=template&id=0e33df86& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("form", { staticClass: "my-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass: "form-control mr-sm-2 form-block",
            attrs: {
              type: "search",
              placeholder: "Buscar",
              "aria-label": "Search"
            },
            domProps: { value: _vm.search },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container my-4" },
      [
        _c("router-link", { attrs: { to: { name: "agregarProv" } } }, [
          _c("button", { staticClass: "btn btn-success btn-block" }, [
            _vm._v("\n                Agregar Proveedor\n            ")
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.filtered_proveedores, function(proveedor, index) {
          return _c("tr", { key: index }, [
            _c("th", { attrs: { scope: "row" } }, [
              _vm._v(_vm._s(proveedor.id))
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(proveedor.nombre))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(proveedor.cuit))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(proveedor.telefono))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "detalleProv", params: { id: proveedor.id } }
                    }
                  },
                  [
                    _c("button", { staticClass: "btn btn-warning btn-sm" }, [
                      _vm._v("Ver Mas")
                    ])
                  ]
                )
              ],
              1
            )
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-success my-2 my-sm-0",
          attrs: { type: "submit" }
        },
        [_vm._v("Buscar")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#ID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cuit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Telefono")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Botones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuProductos.vue?vue&type=template&id=304ee3e5&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MenuProductos.vue?vue&type=template&id=304ee3e5& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-3" }, [
          _c(
            "div",
            { staticClass: "list-group" },
            _vm._l(_vm.categorias, function(categoria) {
              return _c(
                "button",
                {
                  key: categoria.id,
                  staticClass: "list-group-item list-group-item-action",
                  attrs: { type: "button" }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(categoria.nombre) +
                      "\n                    "
                  )
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-9" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-6" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control my-3",
                attrs: {
                  type: "search",
                  placeholder: "Buscar",
                  "aria-label": "Search"
                },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "agregarProducto" } } },
                  [
                    _c(
                      "button",
                      { staticClass: "btn btn-success btn-block my-3" },
                      [_vm._v(" Agregar Producto")]
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-striped" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.filtered_productos, function(producto) {
                return _c("tr", { key: producto.id }, [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(producto.id))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(producto.nombre))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(producto.precioCosto))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "detalleProducto",
                              params: { id: producto.id }
                            }
                          }
                        },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-warning btn-sm" },
                            [_vm._v("Ver")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("h1", { staticClass: "text-center mt-5" }, [_vm._v("Productos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#ID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Costo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerEditarCategoria.vue?vue&type=template&id=7a35ee74&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VerEditarCategoria.vue?vue&type=template&id=7a35ee74& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.editarCategoria(_vm.categoria)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group mt-5" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-4" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "listadoCategorias" } } },
                  [
                    _c("button", { staticClass: "btn btn-danger" }, [
                      _vm._v(
                        "\n                            Volver\n                        "
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Nombre Categoria")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.categoria.nombre,
                  expression: "categoria.nombre"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.categoria.nombre },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.categoria, "nombre", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Categoria Padre")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.categoria.categoria_id,
                      expression: "categoria.categoria_id"
                    }
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.categoria,
                        "categoria_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _vm.categoria.padre != null
                    ? _c(
                        "option",
                        {
                          attrs: { selected: "selected" },
                          domProps: { value: _vm.categoria.categoria_id }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.categoria.padre.id) +
                              " - " +
                              _vm._s(_vm.categoria.padre.nombre)
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.categoria.categoria_id === null
                    ? _c(
                        "option",
                        {
                          attrs: { selected: "selected" },
                          domProps: { value: _vm.categoria.categoria_id }
                        },
                        [_vm._v("0 - Vacio")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.categoria.padre != null
                    ? _c(
                        "option",
                        {
                          attrs: { selected: "selected" },
                          domProps: { value: null }
                        },
                        [_vm._v("0 - Vacio")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.categorias, function(cate, index) {
                    return _c("option", { key: index }, [
                      _vm._v(_vm._s(cate.id) + " - " + _vm._s(cate.nombre))
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]
    ),
    _vm._v(" "),
    _vm.categoria.cant_hijos > 0
      ? _c("h3", { staticClass: "mt-5" }, [_vm._v("SubCategorias")])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "list-group mt-3" },
      _vm._l(_vm.categoria.children, function(cat, index) {
        return _c(
          "button",
          {
            key: index,
            staticClass: "list-group-item list-group-item-action",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.getCategoria(cat.id)
              }
            }
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(cat.id) +
                "-" +
                _vm._s(cat.nombre) +
                "\n        "
            )
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [_vm._v("Editar Categoria")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-success btn-block", attrs: { type: "submit" } },
        [_vm._v("Guardar Cambios")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/AgregarProducto.vue":
/*!************************************************!*\
  !*** ./resources/js/views/AgregarProducto.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgregarProducto_vue_vue_type_template_id_986a54e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgregarProducto.vue?vue&type=template&id=986a54e0& */ "./resources/js/views/AgregarProducto.vue?vue&type=template&id=986a54e0&");
/* harmony import */ var _AgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarProducto.vue?vue&type=script&lang=js& */ "./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgregarProducto_vue_vue_type_template_id_986a54e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgregarProducto_vue_vue_type_template_id_986a54e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AgregarProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AgregarProducto.vue?vue&type=template&id=986a54e0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/AgregarProducto.vue?vue&type=template&id=986a54e0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProducto_vue_vue_type_template_id_986a54e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarProducto.vue?vue&type=template&id=986a54e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProducto.vue?vue&type=template&id=986a54e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProducto_vue_vue_type_template_id_986a54e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProducto_vue_vue_type_template_id_986a54e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/AgregarProv.vue":
/*!********************************************!*\
  !*** ./resources/js/views/AgregarProv.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgregarProv_vue_vue_type_template_id_104a0719___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgregarProv.vue?vue&type=template&id=104a0719& */ "./resources/js/views/AgregarProv.vue?vue&type=template&id=104a0719&");
/* harmony import */ var _AgregarProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarProv.vue?vue&type=script&lang=js& */ "./resources/js/views/AgregarProv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgregarProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgregarProv_vue_vue_type_template_id_104a0719___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgregarProv_vue_vue_type_template_id_104a0719___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AgregarProv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AgregarProv.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/AgregarProv.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarProv.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AgregarProv.vue?vue&type=template&id=104a0719&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/AgregarProv.vue?vue&type=template&id=104a0719& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProv_vue_vue_type_template_id_104a0719___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarProv.vue?vue&type=template&id=104a0719& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProv.vue?vue&type=template&id=104a0719&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProv_vue_vue_type_template_id_104a0719___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarProv_vue_vue_type_template_id_104a0719___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/DetalleProducto.vue":
/*!************************************************!*\
  !*** ./resources/js/views/DetalleProducto.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetalleProducto_vue_vue_type_template_id_07dbe3a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetalleProducto.vue?vue&type=template&id=07dbe3a8& */ "./resources/js/views/DetalleProducto.vue?vue&type=template&id=07dbe3a8&");
/* harmony import */ var _DetalleProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetalleProducto.vue?vue&type=script&lang=js& */ "./resources/js/views/DetalleProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetalleProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetalleProducto_vue_vue_type_template_id_07dbe3a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetalleProducto_vue_vue_type_template_id_07dbe3a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DetalleProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DetalleProducto.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/DetalleProducto.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetalleProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DetalleProducto.vue?vue&type=template&id=07dbe3a8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/DetalleProducto.vue?vue&type=template&id=07dbe3a8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProducto_vue_vue_type_template_id_07dbe3a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetalleProducto.vue?vue&type=template&id=07dbe3a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProducto.vue?vue&type=template&id=07dbe3a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProducto_vue_vue_type_template_id_07dbe3a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProducto_vue_vue_type_template_id_07dbe3a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/DetalleProv.vue":
/*!********************************************!*\
  !*** ./resources/js/views/DetalleProv.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetalleProv_vue_vue_type_template_id_0ef43d9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetalleProv.vue?vue&type=template&id=0ef43d9e& */ "./resources/js/views/DetalleProv.vue?vue&type=template&id=0ef43d9e&");
/* harmony import */ var _DetalleProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetalleProv.vue?vue&type=script&lang=js& */ "./resources/js/views/DetalleProv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetalleProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetalleProv_vue_vue_type_template_id_0ef43d9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetalleProv_vue_vue_type_template_id_0ef43d9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DetalleProv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DetalleProv.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/DetalleProv.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetalleProv.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DetalleProv.vue?vue&type=template&id=0ef43d9e&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/DetalleProv.vue?vue&type=template&id=0ef43d9e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProv_vue_vue_type_template_id_0ef43d9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetalleProv.vue?vue&type=template&id=0ef43d9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleProv.vue?vue&type=template&id=0ef43d9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProv_vue_vue_type_template_id_0ef43d9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleProv_vue_vue_type_template_id_0ef43d9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/EditarProducto.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/EditarProducto.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditarProducto_vue_vue_type_template_id_b5b950cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarProducto.vue?vue&type=template&id=b5b950cc& */ "./resources/js/views/EditarProducto.vue?vue&type=template&id=b5b950cc&");
/* harmony import */ var _EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarProducto.vue?vue&type=script&lang=js& */ "./resources/js/views/EditarProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarProducto_vue_vue_type_template_id_b5b950cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarProducto_vue_vue_type_template_id_b5b950cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EditarProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EditarProducto.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/EditarProducto.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EditarProducto.vue?vue&type=template&id=b5b950cc&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/EditarProducto.vue?vue&type=template&id=b5b950cc& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_template_id_b5b950cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=template&id=b5b950cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=template&id=b5b950cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_template_id_b5b950cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_template_id_b5b950cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/EditarProveedor.vue":
/*!************************************************!*\
  !*** ./resources/js/views/EditarProveedor.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditarProveedor_vue_vue_type_template_id_6d26cf14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarProveedor.vue?vue&type=template&id=6d26cf14& */ "./resources/js/views/EditarProveedor.vue?vue&type=template&id=6d26cf14&");
/* harmony import */ var _EditarProveedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarProveedor.vue?vue&type=script&lang=js& */ "./resources/js/views/EditarProveedor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditarProveedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarProveedor_vue_vue_type_template_id_6d26cf14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarProveedor_vue_vue_type_template_id_6d26cf14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EditarProveedor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EditarProveedor.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/EditarProveedor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProveedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProveedor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProveedor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProveedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EditarProveedor.vue?vue&type=template&id=6d26cf14&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/EditarProveedor.vue?vue&type=template&id=6d26cf14& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProveedor_vue_vue_type_template_id_6d26cf14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProveedor.vue?vue&type=template&id=6d26cf14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProveedor.vue?vue&type=template&id=6d26cf14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProveedor_vue_vue_type_template_id_6d26cf14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProveedor_vue_vue_type_template_id_6d26cf14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ListadoCategorias.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/ListadoCategorias.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoCategorias_vue_vue_type_template_id_ce65b502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoCategorias.vue?vue&type=template&id=ce65b502& */ "./resources/js/views/ListadoCategorias.vue?vue&type=template&id=ce65b502&");
/* harmony import */ var _ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoCategorias.vue?vue&type=script&lang=js& */ "./resources/js/views/ListadoCategorias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoCategorias_vue_vue_type_template_id_ce65b502___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoCategorias_vue_vue_type_template_id_ce65b502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ListadoCategorias.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ListadoCategorias.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/ListadoCategorias.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCategorias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoCategorias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ListadoCategorias.vue?vue&type=template&id=ce65b502&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/ListadoCategorias.vue?vue&type=template&id=ce65b502& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_template_id_ce65b502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCategorias.vue?vue&type=template&id=ce65b502& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoCategorias.vue?vue&type=template&id=ce65b502&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_template_id_ce65b502___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_template_id_ce65b502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ListadoProveedores.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/ListadoProveedores.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoProveedores_vue_vue_type_template_id_0e33df86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoProveedores.vue?vue&type=template&id=0e33df86& */ "./resources/js/views/ListadoProveedores.vue?vue&type=template&id=0e33df86&");
/* harmony import */ var _ListadoProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoProveedores.vue?vue&type=script&lang=js& */ "./resources/js/views/ListadoProveedores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoProveedores_vue_vue_type_template_id_0e33df86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoProveedores_vue_vue_type_template_id_0e33df86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ListadoProveedores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ListadoProveedores.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ListadoProveedores.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProveedores.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoProveedores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ListadoProveedores.vue?vue&type=template&id=0e33df86&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/ListadoProveedores.vue?vue&type=template&id=0e33df86& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProveedores_vue_vue_type_template_id_0e33df86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProveedores.vue?vue&type=template&id=0e33df86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoProveedores.vue?vue&type=template&id=0e33df86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProveedores_vue_vue_type_template_id_0e33df86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProveedores_vue_vue_type_template_id_0e33df86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/MenuProductos.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/MenuProductos.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuProductos_vue_vue_type_template_id_304ee3e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuProductos.vue?vue&type=template&id=304ee3e5& */ "./resources/js/views/MenuProductos.vue?vue&type=template&id=304ee3e5&");
/* harmony import */ var _MenuProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuProductos.vue?vue&type=script&lang=js& */ "./resources/js/views/MenuProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuProductos_vue_vue_type_template_id_304ee3e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuProductos_vue_vue_type_template_id_304ee3e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MenuProductos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MenuProductos.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/MenuProductos.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MenuProductos.vue?vue&type=template&id=304ee3e5&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/MenuProductos.vue?vue&type=template&id=304ee3e5& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuProductos_vue_vue_type_template_id_304ee3e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuProductos.vue?vue&type=template&id=304ee3e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuProductos.vue?vue&type=template&id=304ee3e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuProductos_vue_vue_type_template_id_304ee3e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuProductos_vue_vue_type_template_id_304ee3e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/VerEditarCategoria.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/VerEditarCategoria.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerEditarCategoria_vue_vue_type_template_id_7a35ee74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerEditarCategoria.vue?vue&type=template&id=7a35ee74& */ "./resources/js/views/VerEditarCategoria.vue?vue&type=template&id=7a35ee74&");
/* harmony import */ var _VerEditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerEditarCategoria.vue?vue&type=script&lang=js& */ "./resources/js/views/VerEditarCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerEditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerEditarCategoria_vue_vue_type_template_id_7a35ee74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerEditarCategoria_vue_vue_type_template_id_7a35ee74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/VerEditarCategoria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/VerEditarCategoria.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/VerEditarCategoria.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerEditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VerEditarCategoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerEditarCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerEditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/VerEditarCategoria.vue?vue&type=template&id=7a35ee74&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/VerEditarCategoria.vue?vue&type=template&id=7a35ee74& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerEditarCategoria_vue_vue_type_template_id_7a35ee74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VerEditarCategoria.vue?vue&type=template&id=7a35ee74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerEditarCategoria.vue?vue&type=template&id=7a35ee74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerEditarCategoria_vue_vue_type_template_id_7a35ee74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerEditarCategoria_vue_vue_type_template_id_7a35ee74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);