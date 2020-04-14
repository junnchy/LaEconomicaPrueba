(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AjusteManualStock.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AjusteManualStock.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      nLDS: {
        cantidad: 0,
        ficha_id: 0,
        usuario: this.$userName,
        tipo: 'Manual',
        idProducto: 0
      },
      cEC: 'alert alert-info text-center',
      estado: false,
      aux: 0
    };
  },
  props: {
    nFicha: {
      type: Number,
      required: true
    },
    cantAct: {
      type: Number,
      required: true
    },
    producto_id: {
      type: Number,
      required: true
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('stock', ['agregarLinea', 'resetResp', 'ajustarStock']), {
    LNB: function LNB() {
      $('#MenuLateral').collapse('show');
    },
    procesar: function procesar() {
      this.nLDS.idProducto = this.producto_id, this.agregarLinea(this.nLDS), this.ajustarStock(this.nLDS), this.estado = false;
    }
  }),
  created: function created() {
    this.nLDS.ficha_id = this.nFicha;
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('stock', ['respuesta']), {
    cantFinal: function cantFinal() {
      if (!this.estado) {
        this.aux = this.cantAct + parseInt(this.nLDS.cantidad);
        return this.aux;
      } else {
        this.nLDS.cantidad = 0;
        return this.aux;
      }
    },
    etiquetaCantidad: function etiquetaCantidad() {
      if (this.cantFinal === 0) {
        this.cEC = 'alert alert-warning text-center';
      }

      if (this.cantFinal > 0) {
        this.cEC = 'alert alert-success text-center';
      }

      if (this.cantFinal < 0) {
        this.cEC = 'alert alert-danger text-center';
      }

      return this.cEC;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ComponenteDatosFDP.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ComponenteDatosFDP.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  props: {
    nfdp: {
      type: Object,
      required: true
    }
  },
  computed: {
    calcularCoeficiente: function calcularCoeficiente() {
      if (this.nfdp.recargo > 0) {
        this.nfdp.coeficiente = this.nfdp.recargo / 100 + 1;
      } else {
        this.nfdp.coeficiente = 1;
      }

      return this.nfdp.coeficiente;
    },
    numeroEstado: function numeroEstado() {
      if (this.nfdp.estado === true) {
        this.nfdp.estado = 1;
      }

      if (this.nfdp.estado === false) {
        this.nfdp.estado = 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    npresupuesto: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      show: null
    };
  },
  created: function created() {},
  methods: {
    precio: function precio(linea) {
      var precio = linea.producto.precioVenta;

      if (this.npresupuesto.cliente.condicion_iva_id != 1) {
        return linea.producto.precioVenta;
      } else {
        return linea.producto.precioVentaSinIva;
      }
    },
    subtotal: function subtotal(linea) {
      if (this.npresupuesto.cliente.condicion_iva_id != 1) {
        linea.subtotal = parseInt(linea.cantidad) * linea.producto.precioVenta;
        return linea.subtotal.toFixed(2);
      } else {
        linea.subtotal = parseInt(linea.cantidad) * linea.producto.precioVentaSinIva;
        return linea.subtotal.toFixed(2);
      }
    },
    deleteLinea: function deleteLinea(index) {
      this.npresupuesto.lineas.splice(index, 1);
      Vue.$toast.open({
        message: 'Producto Borrado',
        type: 'error'
      });
    }
  },
  computed: {
    total: function total() {
      var aux = 0;

      if (this.npresupuesto.cliente.condicion_iva_id === 1) {
        this.npresupuesto.lineas.forEach(function (linea) {
          aux += parseInt(linea.cantidad) * linea.producto.precioVentaSinIva;
        });
        this.npresupuesto.total = aux;
        this.npresupuesto.total += this.npresupuesto.iva;
        aux += this.npresupuesto.iva;
      } else {
        this.npresupuesto.lineas.forEach(function (linea) {
          aux += parseInt(linea.cantidad) * linea.producto.precioVenta;
        });
        this.npresupuesto.total = aux;
      }

      return aux.toFixed(2);
    },
    subTotal: function subTotal() {
      var aux = 0;
      this.npresupuesto.lineas.forEach(function (linea) {
        aux += parseInt(linea.cantidad) * linea.producto.precioVentaSinIva;
      });
      this.npresupuesto.subtotal = aux;
      return aux.toFixed(2);
    },
    iva: function iva() {
      var aux = 0;
      this.npresupuesto.lineas.forEach(function (linea) {
        aux += parseInt(linea.cantidad) * (linea.producto.precioVenta - linea.producto.precioVenta / (1 + linea.producto.iva / 100));
      });
      aux = aux * this.npresupuesto.formaDePago.coeficiente;
      this.npresupuesto.iva = aux;
      return aux.toFixed(2);
    },
    mostrar: function mostrar() {
      if (this.npresupuesto.id != null) {
        this.show = true;
      } else {
        this.show = false;
      }

      return this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Encabezado.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-Encabezado.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Comprobante_Vendedor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobante-Vendedor */ "./resources/js/components/Comprobante-Vendedor.vue");
/* harmony import */ var _components_ModalAgregarCliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ModalAgregarCliente */ "./resources/js/components/ModalAgregarCliente.vue");
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
//
//
//
//
//
//
//
//
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
  components: {
    datosvendedor: _Comprobante_Vendedor__WEBPACK_IMPORTED_MODULE_1__["default"],
    modaladdcliente: _components_ModalAgregarCliente__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      place: 'Cliente',
      cliente: null,
      ingresoCliente: false
    };
  },
  props: {
    npresupuesto: {
      type: Object,
      required: true
    }
  },
  created: function created() {
    this.getClientes();
    this.getDatos();
    this.getFormasDePago();
    this.filter.estado = 1;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('datos', ['getDatos']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clientes', ['getClientes']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('formasDePago', ['getFormasDePago']), {
    setCliente: function setCliente(val) {
      this.ingresoCliente = true;
      this.npresupuesto.cliente = val;
    },
    setFDP: function setFDP(val) {
      this.npresupuesto.formaDePago = val;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('datos', ['datos']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('clientes', ['clientes']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('formasDePago', ['formasDePago', 'filter']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('formasDePago', ['filtered_fdp']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    npresupuesto: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      show: null
    };
  },
  created: function created() {},
  methods: {
    precio: function precio(linea) {
      var precio = linea.producto.precioVenta;

      if (this.npresupuesto.cliente.condicion_iva_id != 1) {
        return linea.producto.precioVenta;
      } else {
        return linea.producto.precioVentaSinIva;
      }
    },
    subtotal: function subtotal(linea) {
      if (this.npresupuesto.cliente.condicion_iva_id != 1) {
        linea.subtotal = parseInt(linea.cantidad) * linea.producto.precioVenta;
        return linea.subtotal.toFixed(2);
      } else {
        linea.subtotal = parseInt(linea.cantidad) * linea.producto.precioVentaSinIva;
        return linea.subtotal.toFixed(2);
      }
    },
    deleteLinea: function deleteLinea(index) {
      this.npresupuesto.lineas.splice(index, 1);
      Vue.$toast.open({
        message: 'Producto Borrado',
        type: 'error'
      });
    }
  },
  computed: {
    total: function total() {
      var aux = 0;

      if (this.npresupuesto.cliente.condicion_iva_id === 1) {
        this.npresupuesto.lineas.forEach(function (linea) {
          aux += parseInt(linea.cantidad) * linea.producto.precioVentaSinIva;
        });
        this.npresupuesto.total = aux;
        this.npresupuesto.total += this.npresupuesto.iva;
        aux += this.npresupuesto.iva;
      } else {
        this.npresupuesto.lineas.forEach(function (linea) {
          aux += parseInt(linea.cantidad) * linea.producto.precioVenta;
        });
        this.npresupuesto.total = aux;
      }

      return aux.toFixed(2);
    },
    subTotal: function subTotal() {
      var aux = 0;
      this.npresupuesto.lineas.forEach(function (linea) {
        aux += parseInt(linea.cantidad) * linea.producto.precioVentaSinIva;
      });
      this.npresupuesto.subtotal = aux;
      return aux.toFixed(2);
    },
    iva: function iva() {
      var aux = 0;
      this.npresupuesto.lineas.forEach(function (linea) {
        aux += parseInt(linea.cantidad) * (linea.producto.precioVenta - linea.producto.precioVenta / (1 + linea.producto.iva / 100));
      });
      aux = aux * this.npresupuesto.formaDePago.coeficiente;
      this.npresupuesto.iva = aux;
      return aux.toFixed(2);
    },
    mostrar: function mostrar() {
      if (this.npresupuesto.id != null) {
        this.show = true;
      } else {
        this.show = false;
      }

      return this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Vendedor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-Vendedor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    npresupuesto: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      datepick: null
    };
  },
  created: function created() {
    if (this.npresupuesto.id != null) {
      this.datepick = true;
    } else {
      this.datepick = false;
    }
  },
  methods: {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usuarios', ['vendedorActual']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobrante-Productos.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobrante-Productos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Comprobante_LineaDeProducto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobante-LineaDeProducto */ "./resources/js/components/Comprobante-LineaDeProducto.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      producto: ''
    };
  },
  components: {
    listalineas: _Comprobante_LineaDeProducto__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    npresupuesto: {
      type: Object,
      required: true
    }
  },
  created: function created() {
    this.getProductos();
    this.filter.estado = 1;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('productos', ['getProductos']), {
    setProducto: function setProducto(val) {
      Vue.$toast.open('Producto Agregado');
      var li = {
        producto: val,
        cantidad: 1
      };
      this.npresupuesto.lineas.push(li);
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('productos', ['productos', 'filter']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('productos', ['filtered_productos']), {
    epro: {
      get: function get() {
        return this.$store.state.productos.filter.estado;
      },
      set: function set(val) {
        this.$store.commit('productos/SET_ESTADO', val);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Estadistica-Linea.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Estadistica-Linea.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
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
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [['Day', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'], [1, 37.8, 80.8, 41.8], [2, 30.9, 80.5, 32.4], [3, 25.4, 87, 25.7], [4, 11.7, 88.8, 10.5], [5, 11.9, 97.6, 10.4], [6, 8.8, 93.6, 7.7], [7, 7.6, 72.3, 9.6], [8, 12.3, 89.2, 10.6], [9, 16.9, 92.9, 14.8], [10, 12.8, 70.9, 11.6], [11, 5.3, 45.9, 4.7], [12, 6.6, 38.4, 5.2], [13, 4.8, 76.3, 3.6], [14, 4.2, 36.2, 3.4]],
      chartOptions: {
        chart: {
          title: 'Productos La Economica',
          subtitle: 'Tipo, Cantidad'
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      enEspera: 2,
      chartData: this.$store.state.usuarios.datos,
      chartOptions: {
        chart: {
          title: 'Presupuestos La Economica',
          subtitle: 'Tipo, Cantidad'
        },
        pieHole: 0.4,
        slices: {
          0: {
            color: '#3366CC'
          },
          1: {
            color: '#109618'
          },
          2: {
            color: '#DC3912'
          },
          3: {
            color: '#FF9900'
          }
        }
      }
    };
  },
  created: function created() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usuarios', ['contadoresPresupuestos']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaVentas.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EstadisticaVentas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
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
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [['Año', 'Ventas', 'Gastos'], ['2017', 1000, 400], ['2018', 1170, 460], ['2019', 660, 1120], ['2020', 1030, 700]],
      chartOptions: {
        chart: {
          title: 'Performance La Economica',
          subtitle: 'Ventas, Gastos: 2017-2020'
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDatosEmpresa.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormularioDatosEmpresa.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      provincia: '',
      imageName: 'Seleccionar Imagen'
    };
  },
  props: {
    datos: {
      type: Object,
      required: true
    }
  },
  created: function created() {
    this.getProvincias();
    this.getLocalidades();
    this.getCondicionesIva();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('condicionIva', ['getCondicionesIva']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('localidades', ['getLocalidades', 'getLocalidad', 'getProvincias']), {
    imageChanged: function imageChanged(e) {
      var _this = this;

      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      this.imageName = e.target.files[0].name;

      fileReader.onload = function (e) {
        _this.datos.logo = e.target.result;
      };

      console.log(this.datos);
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('localidades', ['localidades', 'localidad', 'provincias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('condicionIva', ['condicionIva']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDescripcionProducto.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormularioDescripcionProducto.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorConfig: {},
      imageName: 'Seleccionar Imagen'
    };
  },
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  methods: {
    imageChanged: function imageChanged(e) {
      var _this = this;

      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      this.imageName = e.target.files[0].name;

      fileReader.onload = function (e) {
        _this.producto.imagen = e.target.result;
      };

      console.log(this.producto);
    },
    borrarImagen: function borrarImagen() {
      this.producto.imagen = "http://127.0.0.1:8000/assets/4fxp8923.bmp";
      this.imageName = 'Seleccionar Imagen';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaFormasDePago.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaFormasDePago.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalEditarFDP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditarFDP */ "./resources/js/components/ModalEditarFDP.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    modalEditarFDP: _ModalEditarFDP__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.getFormasDePago();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('formasDePago', ['formasDePago'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('formasDePago', ['getFormasDePago']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaProveedores.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaProveedores.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Paginacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Paginacion */ "./resources/js/components/Paginacion.vue");
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
  data: function data() {
    return {};
  },
  components: {
    Paginacion: _components_Paginacion__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado'])),
  created: function created() {
    this.getProveedores(), this.cambiarEstado(0), this.$store.commit('setArregloPaginado', this.filtered_proveedores);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['arregloPaginado']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('proveedores', ['filtered_proveedores'])),
  mutations: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['setArregloPaginado']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListadoProductos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Paginacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Paginacion */ "./resources/js/components/Paginacion.vue");
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
  data: function data() {
    return {};
  },
  components: {
    Paginacion: _components_Paginacion__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoriasO']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('productos', ['getProductos']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado', 'setArregloPaginado'])),
  created: function created() {
    this.getProductos();
    this.$store.commit('setArregloPaginado', this.filtered_productos);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('productos', ['productos']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['arregloPaginado']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('productos', ['filtered_productos']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ComponenteDatosFDP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponenteDatosFDP */ "./resources/js/components/ComponenteDatosFDP.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      nfdp: {
        id: null,
        descripcion: '',
        recargo: 0,
        coeficiente: 0,
        estado: 1
      }
    };
  },
  components: {
    componenteDatosFDP: _ComponenteDatosFDP__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('formasDePago', ['agregarFormaDePago', 'resetResp']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado']), {
    LNB: function LNB() {
      $('#MenuLateral').collapse('show');
    }
  }),
  destroyed: function destroyed() {
    this.resetResp(null);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('formasDePago', ['respuestaS']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditarFDP.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalEditarFDP.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ComponenteDatosFDP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponenteDatosFDP */ "./resources/js/components/ComponenteDatosFDP.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    fdpid: {
      type: Number,
      required: true
    }
  },
  components: {
    componenteDatosFDP: _ComponenteDatosFDP__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('formasDePago', ['editarFormaDePago', 'resetResp', 'getFormaDePago']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado']), {
    LNB: function LNB() {
      $('#MenuLateral').collapse('show');
      this.getFormaDePago(this.fdpid);
    }
  }),
  destroyed: function destroyed() {
    this.resetResp(null);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('formasDePago', ['respuestaS', 'formaDePago']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarCliente.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AgregarCliente',
  data: function data() {
    return {
      ncliente: {
        id: null,
        nombre: '',
        cuit: '',
        telefono: '',
        celular: '',
        email: '',
        direccion: '',
        localidad_id: 0,
        cat_clientes_id: 0,
        condicion_iva_id: 0,
        localidad: {
          nombre: '',
          cod_postal: ''
        },
        categoria: {
          denominacion: ''
        },
        condicion_iva: {
          denominacion: ''
        }
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clientes', ['resetResp', 'agregarCliente', 'resetError', 'editarCliente']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado']), {
    cancelar: function cancelar() {
      this.resetError();
      this.resetResp(null);
    }
  }),
  created: function created() {
    this.cambiarEstado(3);
  },
  destroyed: function destroyed() {
    this.resetError();
    this.resetResp(null);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('clientes', ['respuestaS', 'errors', 'cliente']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarProducto.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FormularioDescripcionProducto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormularioDescripcionProducto */ "./resources/js/components/FormularioDescripcionProducto.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'agregarProducto',
  data: function data() {
    return {
      descuento: 0,
      cate: {},
      progress: "width: 30%",
      producto: {
        id: null,
        codigoProveedor: '',
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
        flete: 0,
        precioVenta: 0,
        rentabilidad: 0,
        descripcion: '',
        imagen: 'http://127.0.0.1:8000/assets/4fxp8923.bmp',
        estado: true
      },
      tab: 0,
      ctab0: 'nav-link active',
      ctab1: 'nav-link',
      ctab2: 'nav-link',
      barStyle: "progress-bar progress-bar-striped"
    };
  },
  components: {
    descripcionProducto: _components_FormularioDescripcionProducto__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoriasO']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedores', 'agregarCategoriaProveedor']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('productos', ['agregarProducto', 'resetResp', 'resetError']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado']), {
    setTab: function setTab(nro) {
      this.tab = nro;

      if (this.tab === 0) {
        this.ctab0 = 'nav-link active';
        this.ctab1 = 'nav-link';
        this.ctab2 = 'nav-link';
        this.barStyle = "progress-bar progress-bar-striped";
        this.progress = "width: 30%";
      }

      if (this.tab === 1) {
        this.ctab0 = 'nav-link';
        this.ctab1 = 'nav-link active';
        this.ctab2 = 'nav-link';
        this.barStyle = "progress-bar progress-bar-striped";
        this.progress = "width: 60%";
      }

      if (this.tab === 2) {
        this.ctab0 = 'nav-link';
        this.ctab1 = 'nav-link';
        this.ctab2 = 'nav-link active';
        this.barStyle = "progress-bar progress-bar-striped";
        this.progress = "width: 90%";
      }
    },
    completarBarra: function completarBarra() {
      this.barStyle = "progress-bar progress-bar-striped bg-success", this.progress = "width: 100%";
    }
  }),
  created: function created() {
    this.getCategoriasO();
    this.getProveedores();
    this.cambiarEstado(1);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categorias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('productos', ['respuesta']))
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'agregarProv',
  data: function data() {
    return {
      proveedor: {
        nombre: '',
        cuit: '',
        telefono: '',
        direccion: '',
        email: '',
        localidad_id: 0,
        condicion_iva_id: 0,
        localidad: {
          nombre: '',
          cod_postal: ''
        },
        condicion_iva: {
          denominacion: ''
        }
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['agregarProveedor']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado'])),
  created: function created() {
    this.cambiarEstado(3);
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DatosEmpresa.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FormularioDatosEmpresa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormularioDatosEmpresa */ "./resources/js/components/FormularioDatosEmpresa.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  components: {
    formilarioEmpresa: _components_FormularioDatosEmpresa__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.getDatos();
  },
  destroyed: function destroyed() {
    this.resetResp();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('datos', ['getDatos', 'editarDatos', 'resetResp'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('datos', ['datos', 'respuesta']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleCliente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetalleCliente.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DetalleCliente',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clientes', ['getCliente'])),
  created: function created() {
    this.getCliente(this.id);
  },
  mounted: function mounted() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('clientes', ['cliente']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetallePresupuesto.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Comprobante_Encabezado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Comprobante-Encabezado */ "./resources/js/components/Comprobante-Encabezado.vue");
/* harmony import */ var _components_Comprobante_DetalleLineasProducto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Comprobante-DetalleLineasProducto */ "./resources/js/components/Comprobante-DetalleLineasProducto.vue");
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
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  created: function created() {
    this.getPresupuesto(this.id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('presupuestos', ['getPresupuesto', 'imprimirPrespuesto', 'cambiarEstadoPresupuesto']), {
    confirmar: function confirmar() {
      this.presupuesto.estadoPresupuesto_id = 3;
      this.cambiarEstadoPresupuesto(this.presupuesto);
    },
    rechazar: function rechazar() {
      this.presupuesto.estadoPresupuesto_id = 4;
      this.cambiarEstadoPresupuesto(this.presupuesto);
    },
    seguir: function seguir() {
      this.presupuesto.estadoPresupuesto_id = 2;
      this.cambiarEstadoPresupuesto(this.presupuesto);
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('presupuestos', ['presupuesto'])),
  components: {
    encabezado: _components_Comprobante_Encabezado__WEBPACK_IMPORTED_MODULE_1__["default"],
    productos: _components_Comprobante_DetalleLineasProducto__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: this.$route.params.id,
      cEC: 'alert alert-info text-center'
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('productos', ['getProducto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('stock', ['getFichaStock'])),
  created: function created() {
    this.getProducto(this.id);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('productos', ['producto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedor']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categoria']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('stock', ['fichaDeStock']), {
    etiquetaCantidad: function etiquetaCantidad() {
      if (this.producto.ficha_stock.cantidadActual === 0) {
        this.cEC = 'alert alert-warning text-center';
      }

      if (this.producto.ficha_stock.cantidadActual > 0) {
        this.cEC = 'alert alert-success text-center';
      }

      if (this.producto.ficha_stock.cantidadActual < 0) {
        this.cEC = 'alert alert-danger text-center';
      }

      return this.cEC;
    }
  })
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DetalleProv',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedor']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoriasO', 'agregarCategoriaProveedor'])),
  created: function created() {
    this.getProveedor(this.id);
    this.getCategoriasO();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedor']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categorias']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarCliente.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditarCliente',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clientes', ['resetResp', 'getCliente', 'editarCliente', 'resetError']), {
    cancelar: function cancelar() {
      this.resetError();
      this.resetResp(null);
    }
  }),
  created: function created() {
    this.getCliente(this.id);
  },
  destroyed: function destroyed() {
    this.resetError();
    this.resetResp(null);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('clientes', ['respuestaS', 'cliente']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarPresupuesto.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Comprobante_Encabezado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Comprobante-Encabezado */ "./resources/js/components/Comprobante-Encabezado.vue");
/* harmony import */ var _components_Comprobrante_Productos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Comprobrante-Productos */ "./resources/js/components/Comprobrante-Productos.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('presupuestos', ['agregarPresupuesto', 'resetStatus', 'resetResp', 'imprimirPrespuesto', 'getPresupuesto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('usuarios', ['getVendedorActual']), {
    getSetFechaActual: function getSetFechaActual() {
      var today = new Date();
      var dd = String(today.getDate());
      var mm = String(today.getMonth()); //January is 0!

      var yyyy = today.getFullYear();
      var aux = new Date(yyyy, mm, dd);
      console.log(aux);
      this.presupuesto.fecha_emision = aux;
    }
  }),
  created: function created() {
    this.getPresupuesto(this.id);
    this.getVendedorActual(this.$userId);
    this.cambiarEstado(5);
    this.presupuesto.vendedor_id = this.$userId;
  },
  destroyed: function destroyed() {
    this.resetStatus();
    this.resetResp(null);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usuarios', ['vendedorActual']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('presupuestos', ['presupuesto']), {
    vendedorC: function vendedorC() {
      this.presupuesto.vendedor = this.vendedorActual;
    },
    preC: function preC() {
      if (this.presupuesto.id != null) {
        this.getSetFechaActual();
        this.presupuesto.id = null;
      }
    }
  }),
  components: {
    encabezado: _components_Comprobante_Encabezado__WEBPACK_IMPORTED_MODULE_1__["default"],
    productos: _components_Comprobrante_Productos__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
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
/* harmony import */ var _components_FormularioDescripcionProducto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormularioDescripcionProducto */ "./resources/js/components/FormularioDescripcionProducto.vue");
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
      dre: 0,
      tab: 0,
      ctab0: 'nav-link active',
      ctab1: 'nav-link',
      ctab2: 'nav-link'
    };
  },
  components: {
    descripcionProducto: _components_FormularioDescripcionProducto__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('productos', ['getProducto', 'editarProducto', 'resetError']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoriasO']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedores']), {
    setTab: function setTab(nro) {
      this.tab = nro;

      if (this.tab === 0) {
        this.ctab0 = 'nav-link active';
        this.ctab1 = 'nav-link';
        this.ctab2 = 'nav-link';
      }

      if (this.tab === 1) {
        this.ctab0 = 'nav-link';
        this.ctab1 = 'nav-link active';
        this.ctab2 = 'nav-link';
      }

      if (this.tab === 2) {
        this.ctab0 = 'nav-link';
        this.ctab1 = 'nav-link';
        this.ctab2 = 'nav-link active';
      }
    }
  }),
  created: function created() {
    this.getProducto(this.id);
    this.getCategoriasO();
    this.getProveedores();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('productos', ['producto', 'respuesta', 'descuentosProducto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categorias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedores']))
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'editarProveedor',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedor', 'editarProveedor', 'resetError'])),
  created: function created() {
    this.getProveedor(this.id);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedor']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FichaDeStock.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FichaDeStock.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_AjusteManualStock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AjusteManualStock */ "./resources/js/components/AjusteManualStock.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ajustemanualstock: _components_AjusteManualStock__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      cEC: 'alert alert-info text-center'
    };
  },
  created: function created() {
    this.getFichaStock(this.id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('stock', ['getFichaStock']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('productos', ['getProducto'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('stock', ['fichaDeStock']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('productos', ['producto']), {
    etiquetaCantidad: function etiquetaCantidad() {
      if (this.fichaDeStock.cantidadActual === 0) {
        this.cEC = 'alert alert-warning text-center';
      }

      if (this.fichaDeStock.cantidadActual > 0) {
        this.cEC = 'alert alert-success text-center';
      }

      if (this.fichaDeStock.cantidadActual < 0) {
        this.cEC = 'alert alert-danger text-center';
      }

      return this.cEC;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FormasDePago.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FormasDePago.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListaFormasDePago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ListaFormasDePago */ "./resources/js/components/ListaFormasDePago.vue");
/* harmony import */ var _components_ModalAgregarFormaDePago__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ModalAgregarFormaDePago */ "./resources/js/components/ModalAgregarFormaDePago.vue");
//
//
//
//
//
//
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
  components: {
    ListaFDP: _components_ListaFormasDePago__WEBPACK_IMPORTED_MODULE_0__["default"],
    modalAgregarFdp: _components_ModalAgregarFormaDePago__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
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
/* harmony import */ var _components_Paginacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Paginacion */ "./resources/js/components/Paginacion.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ncat: {
        nombre: '',
        categoria_id: ''
      },
      searched: ''
    };
  },
  components: {
    Paginacion: _components_Paginacion__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoriasO', 'agregarCategoria']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado'])),
  created: function created() {
    this.getCategoriasO(), this.cambiarEstado(1), this.$store.commit('setArregloPaginado', this.filtered_categorias);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['arregloPaginado']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categorias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categorias', ['filtered_categorias']), {
    search: {
      get: function get() {
        return this.$store.state.categorias.filter.query;
      },
      set: function set(val) {
        this.$store.commit('categorias/SET_QUERY', val);
      }
    }
  }),
  mutations: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('categorias', ['SET_QUERY']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['setArregloPaginado']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoPresupuestos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_datepicker_locale_Es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker/locale/Es */ "./node_modules/vue2-datepicker/locale/Es.js");
/* harmony import */ var vue2_datepicker_locale_Es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_locale_Es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Paginacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Paginacion */ "./resources/js/components/Paginacion.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginacion: _components_Paginacion__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      estado: ''
    };
  },
  created: function created() {
    this.getPresupuestos(null);
    this.getEstadosPresupuesto();
    this.$store.commit('setArregloPaginado', this.filtered_presupuestos);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('presupuestos', ['getPresupuestos', 'imprimirPrespuesto', 'getEstadosPresupuesto'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('presupuestos', ['presupuestos', 'estadosPresupuesto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presupuestos', ['filtered_presupuestos']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['arregloPaginado']), {
    search: {
      get: function get() {
        return this.$store.state.presupuestos.filter.dates;
      },
      set: function set(val) {
        this.$store.commit('presupuestos/SET_DATE', val);
      }
    },
    searchEstado: {
      get: function get() {
        return this.$store.state.presupuestos.filter.estado;
      },
      set: function set(val) {
        this.$store.commit('presupuestos/SET_ESTADO', val);
      }
    },
    getPre: function getPre() {
      if (this.$store.state.presupuestos.filter.dates[0] != null) {
        /* let mm = (("0" + ((this.$store.state.presupuestos.filter.dates[0]).getMonth()) + 1).slice(-2))
        let dd = (("0" + (this.$store.state.presupuestos.filter.dates[0]).getDate()).slice(-2)) */
        var mm = this.$store.state.presupuestos.filter.dates[0].getMonth() + 1;

        if (parseInt(mm) < 10) {
          mm = '0' + mm;
        }

        var dd = this.$store.state.presupuestos.filter.dates[0].getDate();

        if (parseInt(dd) < 10) {
          dd = '0' + dd;
        }

        var yyyy = this.$store.state.presupuestos.filter.dates[0].getFullYear();
        var date = yyyy + ',' + mm + ',' + dd;
        console.log(date);
        this.getPresupuestos(date);
      }
    }
  }),
  mutations: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['setArregloPaginado']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: this.$route.params.id
    };
  },
  created: function created() {
    this.getCliente(this.id);
    this.getEstadosPresupuesto();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clientes', ['getCliente']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('presupuestos', ['getPresupuestos', 'imprimirPrespuesto', 'getEstadosPresupuesto'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('presupuestos', ['estadosPresupuesto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('clientes', ['cliente']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('clientes', ['filtered_presupuestos']), {
    searchEstado: {
      get: function get() {
        return this.$store.state.clientes.filterPresupuestos.estado;
      },
      set: function set(val) {
        this.$store.commit('clientes/SET_ESTADOPRES', val);
      }
    }
  })
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
/* harmony import */ var _components_ListaProveedores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListaProveedores */ "./resources/js/components/ListaProveedores.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ListaProveedores: _components_ListaProveedores__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    search: {
      get: function get() {
        return this.$store.state.proveedores.filter.query;
      },
      set: function set(val) {
        this.$store.commit('proveedores/SET_QUERY', val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuClientes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MenuClientes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuClientes',
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('clientes', ['getClientes']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado'])),
  created: function created() {
    this.getClientes();
    this.cambiarEstado(4);
  },
  mounted: function mounted() {
    console.log(this.$userName);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('clientes', ['clientes']), {
    search: {
      get: function get() {
        return this.$store.state.clientes.filter.query;
      },
      set: function set(val) {
        this.$store.commit('clientes/SET_QUERY', val);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuComercial.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MenuComercial.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EstadisticaVentas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/EstadisticaVentas */ "./resources/js/components/EstadisticaVentas.vue");
/* harmony import */ var _components_EstadisticaTipoDeProductos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/EstadisticaTipoDeProductos */ "./resources/js/components/EstadisticaTipoDeProductos.vue");
/* harmony import */ var _components_Estadistica_Linea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Estadistica-Linea */ "./resources/js/components/Estadistica-Linea.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    estadisticaventas: _components_EstadisticaVentas__WEBPACK_IMPORTED_MODULE_0__["default"],
    estadisticaproducto: _components_EstadisticaTipoDeProductos__WEBPACK_IMPORTED_MODULE_1__["default"],
    estadisticalinea: _components_Estadistica_Linea__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    console.log(this.$userId);
    this.getUsuarioActual(this.$userId);
    this.recuentoPresupuestos(this.$userId);
    this.cambiarEstado(6);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(['cambiarEstado']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('usuarios', ['getUsuarioActual', 'recuentoPresupuestos']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('presupuestos', ['imprimirPrespuesto'])),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])('usuarios', ['usuarioActual', 'contadoresPresupuestos']))
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
/* harmony import */ var _components_ListadoProductos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListadoProductos */ "./resources/js/components/ListadoProductos.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuProductos',
  data: function data() {
    return {};
  },
  components: {
    listadoProductos: _components_ListadoProductos__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoriasO']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('proveedores', ['getProveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado', 'setArregloPaginado'])),
  created: function created() {
    this.getProveedores();
    this.getCategoriasO();
    this.cambiarEstado(2);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categorias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('proveedores', ['proveedores']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('productos', ['filtered_productos']), {
    search: {
      get: function get() {
        return this.$store.state.productos.filter.query;
      },
      set: function set(val) {
        this.$store.commit('productos/SET_QUERY', val);
      }
    },
    fcat: {
      get: function get() {
        return this.$store.state.productos.filter.categoria;
      },
      set: function set(val) {
        this.$store.commit('productos/SET_CATEGORIA', val);
      }
    },
    fpro: {
      get: function get() {
        return this.$store.state.productos.filter.proveedor;
      },
      set: function set(val) {
        this.$store.commit('productos/SET_PROVEEDOR', val);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NuevoPresupuesto.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Comprobante_Encabezado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Comprobante-Encabezado */ "./resources/js/components/Comprobante-Encabezado.vue");
/* harmony import */ var _components_Comprobrante_Productos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Comprobrante-Productos */ "./resources/js/components/Comprobrante-Productos.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      npre: {
        cliente: {
          id: null,
          nombre: 'Cliente',
          direccion: '',
          localidad: '',
          condicion_iva: {
            denominacion: ''
          }
        },
        vendedor: {},
        formaDePago: {
          id: null
        },
        fecha_emision: '',
        detalles: '',
        total: 0,
        vendedor_id: null,
        lineas: [],
        id: null,
        subtotal: 0,
        iva: 0
      }
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['cambiarEstado']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('presupuestos', ['agregarPresupuesto', 'resetStatus', 'resetResp', 'imprimirPrespuesto']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('usuarios', ['getVendedorActual']), {
    getSetFechaActual: function getSetFechaActual() {
      var today = new Date();
      var dd = String(today.getDate());
      var mm = String(today.getMonth()); //January is 0!

      var yyyy = today.getFullYear();
      var aux = new Date(yyyy, mm, dd);
      console.log(aux);
      this.npre.fecha_emision = aux;
    }
  }),
  created: function created() {
    this.getVendedorActual(this.$userId);
    this.getSetFechaActual();
    this.cambiarEstado(0);
    this.npre.vendedor_id = this.$userId;
  },
  destroyed: function destroyed() {
    this.resetStatus();
    this.resetResp(null);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('usuarios', ['vendedorActual']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('presupuestos', ['presupuesto']), {
    vendedorC: function vendedorC() {
      this.npre.vendedor = this.vendedorActual;
    },
    fdp: function fdp() {
      var _this = this;

      if (this.npre.cliente.condicion_iva_id === 3) {
        /* Clientes Finales */
        this.npre.lineas.forEach(function (linea) {
          linea.producto.precioVenta = linea.producto.precioVentaSinIva * (linea.producto.iva / 100 + 1);

          if (_this.npre.formaDePago.id != 1 || _this.npre.formaDePago.id != null) {
            linea.producto.precioVenta = (linea.producto.precioVenta * _this.npre.formaDePago.coeficiente).toFixed(2);
          }
        });
      } else {
        /* Responsables Incriptos */
        this.npre.lineas.forEach(function (linea) {
          linea.producto.precioVentaSinIva = linea.producto.precioVenta / (linea.producto.iva / 100 + 1);

          if (_this.npre.formaDePago.id != 1 || _this.npre.formaDePago.id != null) {
            linea.producto.precioVentaSinIva = (linea.producto.precioVentaSinIva * _this.npre.formaDePago.coeficiente).toFixed(2);
          }
        });
      }
    }
  }),
  components: {
    encabezado: _components_Comprobante_Encabezado__WEBPACK_IMPORTED_MODULE_1__["default"],
    productos: _components_Comprobrante_Productos__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TablasDatosClientes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TablasDatosClientes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tab: 0,
      ctab0: 'nav-link active',
      ctab1: 'nav-link',
      ctab2: 'nav-link',
      containers: 'container mt-4'
    };
  },
  created: function created() {
    this.getProvincias();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('localidades', ['getProvincias']), {
    setTab: function setTab(nro) {
      this.tab = nro;

      if (this.tab === 0) {
        this.ctab0 = 'nav-link active';
        this.ctab1 = 'nav-link', this.ctab2 = 'nav-link';
      }

      if (this.tab === 1) {
        this.ctab0 = 'nav-link';
        this.ctab1 = 'nav-link active';
        this.ctab2 = 'nav-link';
      }

      if (this.tab === 2) {
        this.ctab0 = 'nav-link';
        this.ctab1 = 'nav-link';
        this.ctab2 = 'nav-link active';
      }
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('localidades', ['provincias']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('localidades', ['filtered_localidades']), {
    fprov: {
      get: function get() {
        return this.$store.state.localidades.filter.provinciaID;
      },
      set: function set(val) {
        this.$store.commit('localidades/SET_PROVINCIA', val);
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
//
//
//
//
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
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categorias', ['getCategoria', 'getCategoriasO', 'editarCategoria', 'resetResp'])),
  created: function created() {
    this.getCategoria(this.id);
    this.getCategoriasO();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categorias', ['categoria', 'categorias', 'respuesta']))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.w-10 {\nwidth: 10% !important;\n}  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.w-10 {\nwidth: 10% !important;\n}  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sticky-button {\nposition: sticky;\nposition: -webkit-sticky;\nposition: -moz-sticky;\nposition: -ms-sticky;\nposition: -o-sticky;\nbottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-ecogray{\r\n  background-color: #E9ECEF !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-ecogray{\nbackground-color: #E9ECEF !important;\n}\n.sticky-button {\nposition: sticky;\nposition: -webkit-sticky;\nposition: -moz-sticky;\nposition: -ms-sticky;\nposition: -o-sticky;\nbottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sticky-button {\nposition: sticky;\nposition: -webkit-sticky;\nposition: -moz-sticky;\nposition: -ms-sticky;\nposition: -o-sticky;\nbottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-ecogray{\nbackground-color: #E9ECEF !important;\n}\n.sticky-button {\nposition: sticky;\nposition: -webkit-sticky;\nposition: -moz-sticky;\nposition: -ms-sticky;\nposition: -o-sticky;\nbottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sticky-button {\nposition: sticky;\nposition: -webkit-sticky;\nposition: -moz-sticky;\nposition: -ms-sticky;\nposition: -o-sticky;\nbottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-ecogray{\nbackground-color: #E9ECEF !important;\n}\n.sticky-button {\nposition: sticky;\nposition: -webkit-sticky;\nposition: -moz-sticky;\nposition: -ms-sticky;\nposition: -o-sticky;\nbottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarCliente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DatosEmpresa.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetallePresupuesto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCliente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarPresupuesto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoPresupuesto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AjusteManualStock.vue?vue&type=template&id=4399c3bd&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AjusteManualStock.vue?vue&type=template&id=4399c3bd& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-primary btn-block",
        attrs: {
          type: "button",
          "data-toggle": "modal",
          "data-target": "#AjustarStockManual",
          "data-whatever": "@mdo"
        },
        on: {
          click: function($event) {
            return _vm.LNB()
          }
        }
      },
      [
        _vm._v("\n         Ajuste Manual de Stock "),
        _c("i", { staticClass: "fas fa-wrench" })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "AjustarStockManual",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "AjustarStockManualLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        return _vm.resetResp(null)
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.procesar()
                      }
                    }
                  },
                  [
                    _vm.respuesta != null
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "alert alert-success alert-dismissible fade show mt-4"
                          },
                          [
                            _vm._v(
                              "\n                             " +
                                _vm._s(_vm.respuesta) +
                                " \n                             "
                            ),
                            _vm._m(1)
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "container" }, [
                      _c(
                        "div",
                        {
                          class: _vm.etiquetaCantidad,
                          attrs: { role: "alert" }
                        },
                        [
                          _c("h4", [_vm._v("Cantidad Final")]),
                          _vm._v(" "),
                          _c("h3", [_vm._v(_vm._s(_vm.cantFinal))])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "col-form-label" }, [
                        _vm._v("Cantidad a Ajustar:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.nLDS.cantidad,
                            expression: "nLDS.cantidad"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.nLDS.cantidad },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.nLDS, "cantidad", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                          on: {
                            click: function($event) {
                              return _vm.resetResp(null)
                            }
                          }
                        },
                        [_vm._v("Cerrar")]
                      ),
                      _vm._v(" "),
                      _vm._m(2)
                    ])
                  ]
                )
              ])
            ])
          ]
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
    return _c(
      "h5",
      { staticClass: "modal-title", attrs: { id: "AjustarStockManualLabel" } },
      [
        _vm._v("\n                         Ajustar Stock "),
        _c("i", { staticClass: "fas fa-wrench" })
      ]
    )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success btn-block", attrs: { type: "submit" } },
      [
        _vm._v("\n                                 Ajustar "),
        _c("i", { staticClass: "fas fa-check-circle" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Descripcion")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nfdp.descripcion,
                expression: "nfdp.descripcion"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "descripcion",
              placeholder: "descripcion"
            },
            domProps: { value: _vm.nfdp.descripcion },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.nfdp, "descripcion", $event.target.value)
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Recargo")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nfdp.recargo,
                expression: "nfdp.recargo"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "recargo", placeholder: "Recargo" },
            domProps: { value: _vm.nfdp.recargo },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.nfdp, "recargo", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Coeficiente")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.calcularCoeficiente,
                expression: "calcularCoeficiente"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "coeficiente",
              placeholder: "coeficiente",
              disabled: "true"
            },
            domProps: { value: _vm.calcularCoeficiente },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.calcularCoeficiente = $event.target.value
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-check content-center mt-4" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nfdp.estado,
                expression: "nfdp.estado"
              }
            ],
            staticClass: "form-check-input",
            attrs: { type: "checkbox", id: "estadoFDP" },
            domProps: {
              checked: Array.isArray(_vm.nfdp.estado)
                ? _vm._i(_vm.nfdp.estado, null) > -1
                : _vm.nfdp.estado
            },
            on: {
              change: function($event) {
                var $$a = _vm.nfdp.estado,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.nfdp, "estado", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.nfdp,
                        "estado",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.nfdp, "estado", $$c)
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-check-label", attrs: { for: "estadoFDP" } },
            [_vm._v("Estado de Forma de Pago:")]
          ),
          _vm._v(" "),
          _vm.nfdp.estado === true || _vm.nfdp.estado === 1
            ? _c("p", { staticClass: "text-success" }, [
                _vm._v("\n                    Activa "),
                _c("i", { staticClass: "fas fa-check-circle" })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.nfdp.estado === false || _vm.nfdp.estado === 0
            ? _c("p", { staticClass: "text-danger" }, [
                _vm._v("\n                    Inactiva "),
                _c("i", { staticClass: "fas fa-exclamation-circle" })
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v("\n    " + _vm._s(_vm.numeroEstado) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-12 text-center" }, [
    _c("table", { staticClass: "table table-striped" }, [
      _c("thead", [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Descripcion")]),
          _vm._v(" "),
          _vm.npresupuesto.id === null
            ? _c("th", { attrs: { scope: "col" } }, [_vm._v("Disponibles")])
            : _vm._e(),
          _vm._v(" "),
          _c("th", { staticClass: "w-10", attrs: { scope: "col" } }, [
            _vm._v("Cantidad")
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Precio unidad")]),
          _vm._v(" "),
          _vm.npresupuesto.cliente.condicion_iva_id === 1
            ? _c("th", { attrs: { scope: "col" } }, [_vm._v("Iva")])
            : _vm._e(),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Subtotal")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.npresupuesto.lineas, function(linea, index) {
          return _c("tr", { key: index }, [
            _c("th", { attrs: { scope: "row" } }, [
              _vm._v(_vm._s(linea.producto.id))
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(linea.producto.nombre))]),
            _vm._v(" "),
            _c("td", { staticClass: "w-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: linea.cantidad,
                    expression: "linea.cantidad"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "numer", disabled: _vm.mostrar },
                domProps: { value: linea.cantidad },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(linea, "cantidad", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("$" + _vm._s(linea.precio))]),
            _vm._v(" "),
            _vm.npresupuesto.cliente.condicion_iva_id === 1
              ? _c("td", [_vm._v(_vm._s(linea.producto.iva) + "%")])
              : _vm._e(),
            _vm._v(" "),
            _c("td", [_vm._v("$" + _vm._s(linea.total_linea))]),
            _vm._v(" "),
            _c("td", [
              _vm.npresupuesto.id === null
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger border-0",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteLinea(index)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-trash" })]
                  )
                : _vm._e()
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-2" }, [
      _c("div", { staticClass: "col-9" }, [
        _c("div", { staticClass: "form-group text-left" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.npresupuesto.detalles,
                expression: "npresupuesto.detalles"
              }
            ],
            staticClass: "form-control",
            attrs: {
              placeholder: "Detalles del Presupuesto",
              id: "detalle_presupuesto",
              rows: "3"
            },
            domProps: { value: _vm.npresupuesto.detalles },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.npresupuesto, "detalles", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm.npresupuesto.cliente.condicion_iva_id === 1
        ? _c("div", { staticClass: "col-3" }, [
            _c("div", { staticClass: "alert alert-primary" }, [
              _c("p", [
                _vm._v("Subtotal $" + _vm._s(_vm.npresupuesto.subtotal))
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Iva $" + _vm._s(_vm.npresupuesto.iva))]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", [_vm._v("Total")]),
              _vm._v(" "),
              _c("h3", [
                _vm._v(
                  "\n                    $" +
                    _vm._s(_vm.npresupuesto.total) +
                    "\n                "
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.npresupuesto.cliente.condicion_iva_id != 1
        ? _c("div", { staticClass: "col-3" }, [
            _c("div", { staticClass: "alert alert-primary" }, [
              _c("p", [_vm._v("Total")]),
              _vm._v(" "),
              _c("h3", [
                _vm._v(
                  "\n                    $" +
                    _vm._s(_vm.npresupuesto.total) +
                    "\n                "
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Encabezado.vue?vue&type=template&id=6b927a80&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-Encabezado.vue?vue&type=template&id=6b927a80& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      "div",
      { staticClass: "container mt-2" },
      [
        _c("datosvendedor", { attrs: { npresupuesto: _vm.npresupuesto } }),
        _vm._v(" "),
        _c("div", { staticClass: "row my-3" }, [
          _c(
            "div",
            { staticClass: "col-5" },
            [
              _c("v-select", {
                attrs: {
                  label: "nombre",
                  options: _vm.clientes,
                  value: _vm.npresupuesto.cliente,
                  maxHeight: "200px",
                  placeholder: "Cliente",
                  disabled: _vm.ingresoCliente
                },
                on: { input: _vm.setCliente }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-1 mt-1" }, [_c("modaladdcliente")], 1),
          _vm._v(" "),
          _c("div", { staticClass: "col-5" }, [
            _c("div", { staticClass: "input-group mb-3" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.npresupuesto.cliente.direccion,
                    expression: "npresupuesto.cliente.direccion"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  disabled: "",
                  placeholder: "direccion",
                  "aria-label": "direccion",
                  "aria-describedby": "direccion"
                },
                domProps: { value: _vm.npresupuesto.cliente.direccion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.npresupuesto.cliente,
                      "direccion",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-1 mt-1" }, [
            _vm.npresupuesto.id === null
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary btn-sm",
                    attrs: {
                      type: "button",
                      "data-toggle": "collapse",
                      "data-target": "#mapa",
                      "aria-expanded": "false",
                      "aria-controls": "mapa"
                    }
                  },
                  [_vm._m(1)]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-3" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              { staticClass: "collapse", attrs: { id: "mapa" } },
              [
                _c("componente-gmap", {
                  attrs: { cliente: _vm.npresupuesto.cliente }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-4" }, [
            _c("div", { staticClass: "input-group mb-3" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.npresupuesto.cliente.telefono,
                    expression: "npresupuesto.cliente.telefono"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "telefono",
                  "aria-label": "telefono",
                  "aria-describedby": "telefono"
                },
                domProps: { value: _vm.npresupuesto.cliente.telefono },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.npresupuesto.cliente,
                      "telefono",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c("div", { staticClass: "input-group mb-3" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.npresupuesto.cliente.celular,
                    expression: "npresupuesto.cliente.celular"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "celular",
                  "aria-label": "celular",
                  "aria-describedby": "celular"
                },
                domProps: { value: _vm.npresupuesto.cliente.celular },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.npresupuesto.cliente,
                      "celular",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c("div", { staticClass: "input-group mb-3" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.npresupuesto.cliente.condicion_iva.denominacion,
                    expression:
                      "npresupuesto.cliente.condicion_iva.denominacion"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  disabled: "",
                  placeholder: "condicion_iva",
                  "aria-label": "condicion_iva",
                  "aria-describedby": "condicion_iva"
                },
                domProps: {
                  value: _vm.npresupuesto.cliente.condicion_iva.denominacion
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.npresupuesto.cliente.condicion_iva,
                      "denominacion",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm._m(5),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-8 mt-2" },
            [
              _c("v-select", {
                attrs: {
                  label: "descripcion",
                  options: _vm.filtered_fdp,
                  value: _vm.npresupuesto.formaDePago,
                  maxHeight: "200px",
                  placeholder: "Forma De Pago"
                },
                on: { input: _vm.setFDP }
              })
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "direccion" } },
        [_vm._v("Direccion")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        attrs: {
          "data-toggle": "tooltip",
          "data-placement": "top",
          title: "Ver Mapa"
        }
      },
      [_c("i", { staticClass: "fas fa-map-marked-alt" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "telefono" } },
        [_vm._v("Telefono")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "celular" } },
        [_vm._v("Celular")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "condicion_iva" } },
        [_vm._v("Condicion Iva")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-3 ml-3 alert alert-secondary text-center" },
      [
        _c("h5", [
          _c("i", { staticClass: "fas fa-money-bill-wave-alt" }),
          _vm._v(" Forma de Pago:  \n                ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-12 text-center" }, [
    _c("table", { staticClass: "table table-striped" }, [
      _c("thead", [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Descripcion")]),
          _vm._v(" "),
          _vm.npresupuesto.id === null
            ? _c("th", { attrs: { scope: "col" } }, [_vm._v("Disponibles")])
            : _vm._e(),
          _vm._v(" "),
          _c("th", { staticClass: "w-10", attrs: { scope: "col" } }, [
            _vm._v("Cantidad")
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Precio unidad")]),
          _vm._v(" "),
          _vm.npresupuesto.cliente.condicion_iva_id === 1
            ? _c("th", { attrs: { scope: "col" } }, [_vm._v("Iva")])
            : _vm._e(),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Subtotal")])
        ])
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.npresupuesto.lineas, function(linea, index) {
          return _c("tr", { key: index }, [
            _c("th", { attrs: { scope: "row" } }, [
              _vm._v(_vm._s(linea.producto.id))
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(linea.producto.nombre))]),
            _vm._v(" "),
            _vm.npresupuesto.id === null
              ? _c("td", [
                  _vm._v(_vm._s(linea.producto.ficha_stock.cantidadActual))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("td", { staticClass: "w-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: linea.cantidad,
                    expression: "linea.cantidad"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "numer", disabled: _vm.mostrar },
                domProps: { value: linea.cantidad },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(linea, "cantidad", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("$" + _vm._s(_vm.precio(linea)))]),
            _vm._v(" "),
            _vm.npresupuesto.cliente.condicion_iva_id === 1
              ? _c("td", [_vm._v(_vm._s(linea.producto.iva) + "%")])
              : _vm._e(),
            _vm._v(" "),
            _c("td", [_vm._v("$" + _vm._s(_vm.subtotal(linea)))]),
            _vm._v(" "),
            _c("td", [
              _vm.npresupuesto.id === null
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger border-0",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.deleteLinea(index)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-trash" })]
                  )
                : _vm._e()
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-2" }, [
      _c("div", { staticClass: "col-9" }, [
        _c("div", { staticClass: "form-group text-left" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.npresupuesto.detalles,
                expression: "npresupuesto.detalles"
              }
            ],
            staticClass: "form-control",
            attrs: {
              placeholder: "Detalles del Presupuesto",
              id: "detalle_presupuesto",
              rows: "3"
            },
            domProps: { value: _vm.npresupuesto.detalles },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.npresupuesto, "detalles", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm.npresupuesto.cliente.condicion_iva_id === 1
        ? _c("div", { staticClass: "col-3" }, [
            _c("div", { staticClass: "alert alert-primary" }, [
              _c("p", [_vm._v("Subtotal $" + _vm._s(_vm.subTotal))]),
              _vm._v(" "),
              _c("p", [_vm._v("Iva $" + _vm._s(_vm.iva))]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", [_vm._v("Total")]),
              _vm._v(" "),
              _c("h3", [
                _vm._v(
                  "\n                    $" +
                    _vm._s(_vm.total) +
                    "\n                "
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.npresupuesto.cliente.condicion_iva_id != 1
        ? _c("div", { staticClass: "col-3" }, [
            _c("div", { staticClass: "alert alert-primary" }, [
              _c("p", [_vm._v("Total")]),
              _vm._v(" "),
              _c("h3", [
                _vm._v(
                  "\n                    $" +
                    _vm._s(_vm.total) +
                    "\n                "
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row my-3" }, [
    _c("div", { staticClass: "col-3" }, [
      _c("div", { staticClass: "input-group mb-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.npresupuesto.vendedor.puesto,
              expression: "npresupuesto.vendedor.puesto"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            disabled: "",
            "aria-label": "puesto",
            "aria-describedby": "puesto"
          },
          domProps: { value: _vm.npresupuesto.vendedor.puesto },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.npresupuesto.vendedor, "puesto", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-5" }, [
      _c("div", { staticClass: "input-group mb-3" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.npresupuesto.vendedor.nombre,
              expression: "npresupuesto.vendedor.nombre"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            disabled: "",
            "aria-label": "name",
            "aria-describedby": "name"
          },
          domProps: { value: _vm.npresupuesto.vendedor.nombre },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.npresupuesto.vendedor, "nombre", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-4" }, [
      _c(
        "div",
        { staticClass: "input-group mb-3" },
        [
          _vm._m(2),
          _vm._v(" "),
          _c("date-picker", {
            attrs: {
              format: "DD-MM-YYYY",
              type: "date",
              disabled: _vm.datepick
            },
            model: {
              value: _vm.npresupuesto.fecha_emision,
              callback: function($$v) {
                _vm.$set(_vm.npresupuesto, "fecha_emision", $$v)
              },
              expression: "npresupuesto.fecha_emision"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "puesto" } }, [
        _vm._v("N Puesto")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "name" } }, [
        _vm._v("Vendedor")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "inicioAct" } },
        [_vm._v("Fecha")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mt-2" }, [
    _vm.npresupuesto.id === null
      ? _c("div", { staticClass: "row my-3" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-7 mt-2" },
            [
              _c("v-select", {
                attrs: {
                  label: "nombre",
                  options: _vm.filtered_productos,
                  value: _vm.producto,
                  maxHeight: "200px",
                  placeholder: "Producto"
                },
                on: { input: _vm.setProducto }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 mt-3" }, [
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.epro,
                    expression: "epro"
                  }
                ],
                staticClass: "form-check-input",
                attrs: { type: "checkbox", id: "estadoProducto" },
                domProps: {
                  checked: Array.isArray(_vm.epro)
                    ? _vm._i(_vm.epro, null) > -1
                    : _vm.epro
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.epro,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.epro = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.epro = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.epro = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _vm.filter.estado === 1
                ? _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "estadoProducto" }
                    },
                    [_vm._m(1)]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.filter.estado === 0
                ? _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "estadoProducto" }
                    },
                    [_vm._m(2)]
                  )
                : _vm._e()
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row my-3" },
      [_c("listalineas", { attrs: { npresupuesto: _vm.npresupuesto } })],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-2 ml-3 alert alert-primary text-center" },
      [
        _c("h5", [
          _vm._v("\n                Ingresar Producto "),
          _c("i", { staticClass: "fas fa-hand-point-right" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-success" }, [
      _c("i", { staticClass: "fas fa-box" }),
      _vm._v(" Activos")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-danger" }, [
      _c("i", { staticClass: "fas fa-box" }),
      _vm._v(" Inactivos")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Estadistica-Linea.vue?vue&type=template&id=ee83a8ea&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Estadistica-Linea.vue?vue&type=template&id=ee83a8ea& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("GChart", {
        attrs: {
          type: "LineChart",
          data: _vm.chartData,
          options: _vm.chartOptions
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("GChart", {
        attrs: {
          type: "PieChart",
          data: _vm.chartData,
          options: _vm.chartOptions
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaVentas.vue?vue&type=template&id=6225a912&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EstadisticaVentas.vue?vue&type=template&id=6225a912& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("GChart", {
        attrs: {
          type: "ColumnChart",
          data: _vm.chartData,
          options: _vm.chartOptions
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row my-3" }, [
        _c("div", { staticClass: "col-9" }, [
          _c("div", { staticClass: "input-group mb-4" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.nombre,
                  expression: "datos.nombre"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "nombre",
                "aria-label": "nombre",
                "aria-describedby": "nombre"
              },
              domProps: { value: _vm.datos.nombre },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "nombre", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.razon_social,
                  expression: "datos.razon_social"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                disabled: "",
                placeholder: "Razon Social",
                "aria-label": "Razon Social",
                "aria-describedby": "RazonSocial"
              },
              domProps: { value: _vm.datos.razon_social },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "razon_social", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("img", {
            staticClass: "img-thumbnail",
            attrs: { src: _vm.datos.logo, width: "200px" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-row mt-3" }, [
            _c("div", { staticClass: "custom-file" }, [
              _c("input", {
                staticClass: "custom-file-input form-control-sm",
                attrs: { type: "file", id: "imagenProducto" },
                on: { change: _vm.imageChanged }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-file-label col-form-label-sm",
                  attrs: { for: "imagenProducto" }
                },
                [_vm._v(_vm._s(_vm.imageName))]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row my-3" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.cuit,
                  expression: "datos.cuit"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                disabled: "",
                placeholder: "Cuit",
                "aria-label": "Cuit",
                "aria-describedby": "cuit"
              },
              domProps: { value: _vm.datos.cuit },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "cuit", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.nroIgBrutos,
                  expression: "datos.nroIgBrutos"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "Ig_Bru",
                "aria-label": "Ig_Bru",
                "aria-describedby": "IG_Brutos"
              },
              domProps: { value: _vm.datos.nroIgBrutos },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "nroIgBrutos", $event.target.value)
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row my-3" }, [
        _c("div", { staticClass: "col-6" }, [
          _c(
            "div",
            { staticClass: "input-group mb-3" },
            [
              _vm._m(4),
              _vm._v(" "),
              _c("date-picker", {
                attrs: { disabled: "", format: "DD-MM-YYYY", type: "date" },
                model: {
                  value: _vm.datos.inicio_actividades,
                  callback: function($$v) {
                    _vm.$set(_vm.datos, "inicio_actividades", $$v)
                  },
                  expression: "datos.inicio_actividades"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(5),
            _vm._v(" "),
            _vm.datos.condicion_iva
              ? _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.datos.condicion_iva_id,
                        expression: "datos.condicion_iva_id"
                      }
                    ],
                    staticClass: "custom-select",
                    attrs: { id: "condicionIva" },
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
                          _vm.datos,
                          "condicion_iva_id",
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
                        domProps: { value: _vm.datos.condicion_iva_id }
                      },
                      [_vm._v(_vm._s(_vm.datos.condicion_iva.denominacion))]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.condicionIva, function(condicion, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: condicion.id } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(condicion.denominacion) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row my-3" }, [
        _c("div", { staticClass: "col-8" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.email,
                  expression: "datos.email"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "email",
                placeholder: "email",
                "aria-label": "email",
                "aria-describedby": "email"
              },
              domProps: { value: _vm.datos.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "email", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(7),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.telefono,
                  expression: "datos.telefono"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "number",
                placeholder: "Telefono",
                "aria-label": "Telefono",
                "aria-describedby": "Telefono"
              },
              domProps: { value: _vm.datos.telefono },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "telefono", $event.target.value)
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-5" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(8),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.datos.direccion,
                  expression: "datos.direccion"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "direccion",
                "aria-label": "direccion",
                "aria-describedby": "direccion"
              },
              domProps: { value: _vm.datos.direccion },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.datos, "direccion", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(9),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.provincia,
                    expression: "provincia"
                  }
                ],
                staticClass: "custom-select",
                attrs: { id: "provincia" },
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
                    _vm.provincia = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c(
                  "option",
                  {
                    attrs: { selected: "" },
                    domProps: { value: _vm.provincia }
                  },
                  [_vm._v(_vm._s(_vm.datos.localidad.provincia.iso_nombre))]
                ),
                _vm._v(" "),
                _vm._l(_vm.provincias, function(provincia, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: provincia } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(provincia.nombre) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(10),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.datos.localidad_id,
                    expression: "datos.localidad_id"
                  }
                ],
                staticClass: "custom-select",
                attrs: { id: "localidad" },
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
                      _vm.datos,
                      "localidad_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c(
                  "option",
                  {
                    attrs: { selected: "" },
                    domProps: { value: _vm.datos.localidad_id }
                  },
                  [_vm._v(_vm._s(_vm.datos.localidad.nombre))]
                ),
                _vm._v(" "),
                _vm._l(_vm.provincia.localidades, function(localidad, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: localidad.id } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(localidad.nombre) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "nombre" } }, [
        _vm._v("Nombre")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "RazonSocial" } },
        [_vm._v("Razon Social")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "cuit" } }, [
        _vm._v("CUIT")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "IG_Brutos" } },
        [_vm._v("N Ig. Brutos")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "inicioAct" } },
        [_vm._v("Inicio Actividades")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "label",
        { staticClass: "input-group-text", attrs: { for: "condicionIva" } },
        [_vm._v("Cond. IVA")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "email" } }, [
        _vm._v("Email")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "Telefono" } },
        [_vm._v("Telefono")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "direccion" } },
        [_vm._v("Direccion")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "label",
        { staticClass: "input-group-text", attrs: { for: "provincia" } },
        [_vm._v("Provincia")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "label",
        { staticClass: "input-group-text", attrs: { for: "localidad" } },
        [_vm._v("Localidad")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDescripcionProducto.vue?vue&type=template&id=774ca700&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormularioDescripcionProducto.vue?vue&type=template&id=774ca700& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _vm._m(0),
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
              _c("strong", [_vm._v("Precio de Venta: ")]),
              _vm._v(" "),
              _c("h5", [_vm._v("$" + _vm._s(_vm.producto.precioVenta))])
            ]),
            _vm._v(" "),
            _vm.producto.proveedor
              ? _c(
                  "li",
                  { staticClass: "list-group-item" },
                  [
                    _c("strong", [_vm._v("Proveedor: ")]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "detalleProv",
                            params: { id: _vm.producto.proveedor_id }
                          }
                        }
                      },
                      [_c("a", [_vm._v(_vm._s(_vm.producto.proveedor.nombre))])]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.producto.categoria
              ? _c(
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
                            params: { id: _vm.producto.categoria_id }
                          }
                        }
                      },
                      [_c("a", [_vm._v(_vm._s(_vm.producto.categoria.nombre))])]
                    )
                  ],
                  1
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("img", {
            staticClass: "img-thumbnail",
            attrs: { src: _vm.producto.imagen, width: "300px" }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-row mt-3" }, [
            _c("div", { staticClass: "mr-2 p-2" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-danger btn-sm ",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.borrarImagen()
                    }
                  }
                },
                [
                  _vm._v("\n                                Borrar "),
                  _c("i", { staticClass: "fas fa-trash-alt" })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ml-2 p-2" }, [
              _c("div", { staticClass: "custom-file" }, [
                _c("input", {
                  staticClass: "custom-file-input form-control-sm",
                  attrs: { type: "file", id: "imagenProducto" },
                  on: { change: _vm.imageChanged }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-file-label col-form-label-sm",
                    attrs: { for: "imagenProducto" }
                  },
                  [_vm._v(_vm._s(_vm.imageName))]
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "form-group my-4" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 mt-3" },
          [
            _c("ckeditor", {
              attrs: { editor: _vm.editor, config: _vm.editorConfig },
              model: {
                value: _vm.producto.descripcion,
                callback: function($$v) {
                  _vm.$set(_vm.producto, "descripcion", $$v)
                },
                expression: "producto.descripcion"
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _vm._v("Datos Cargados "),
      _c("i", { staticClass: "fas fa-check" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("i", { staticClass: "fas fa-image" }),
      _vm._v(" Imagen de Producto")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h4", [
        _c("i", { staticClass: "fas fa-info-circle" }),
        _vm._v("Detalles: ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaFormasDePago.vue?vue&type=template&id=6931b518&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaFormasDePago.vue?vue&type=template&id=6931b518& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("table", { staticClass: "table table-striped" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.formasDePago, function(fdp, index) {
          return _c("tr", { key: index }, [
            _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(fdp.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(fdp.descripcion))]),
            _vm._v(" "),
            fdp.estado === 1 ? _c("td", [_vm._m(1, true)]) : _vm._e(),
            _vm._v(" "),
            fdp.estado === 0 ? _c("td", [_vm._m(2, true)]) : _vm._e(),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(fdp.coeficiente))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(fdp.recargo))]),
            _vm._v(" "),
            _c("td", [_c("modalEditarFDP", { attrs: { fdpid: fdp.id } })], 1)
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
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Codigo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Descripcion")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Coeficiente")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Recargo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-success" }, [
      _c("i", { staticClass: "fas fa-check-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-danger" }, [
      _c("i", { staticClass: "fas fa-exclamation-circle" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaProveedores.vue?vue&type=template&id=c60e7b18&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListaProveedores.vue?vue&type=template&id=c60e7b18& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", [
        _c("table", { staticClass: "table table-striped" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.arregloPaginado, function(proveedor, index) {
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
                          to: {
                            name: "detalleProv",
                            params: { id: proveedor.id }
                          }
                        }
                      },
                      [
                        _c(
                          "button",
                          { staticClass: "btn btn-warning btn-sm" },
                          [
                            _vm._v(
                              "\n                                Ver Mas "
                            ),
                            _c("i", { staticClass: "fas fa-eye" })
                          ]
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
      ]),
      _vm._v(" "),
      _c("Paginacion", {
        attrs: { filtered: _vm.filtered_proveedores, nro_filas: 7 }
      })
    ],
    1
  )
}
var staticRenderFns = [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListadoProductos.vue?vue&type=template&id=4d5f0f50&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListadoProductos.vue?vue&type=template&id=4d5f0f50& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("table", { staticClass: "table table-striped" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.arregloPaginado, function(producto) {
            return _c("tr", { key: producto.id }, [
              _c("th", { attrs: { scope: "row" } }, [
                _vm._v(_vm._s(producto.id))
              ]),
              _vm._v(" "),
              _c("th", [
                _c("img", {
                  staticClass: "border border-secondary",
                  attrs: { src: producto.imagen, width: "50px" }
                })
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(producto.nombre))]),
              _vm._v(" "),
              producto.estado === 1 ? _c("td", [_vm._m(1, true)]) : _vm._e(),
              _vm._v(" "),
              producto.estado === 0 ? _c("td", [_vm._m(2, true)]) : _vm._e(),
              _vm._v(" "),
              _c("td", [_vm._v("$" + _vm._s(producto.precioVenta))]),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-6" },
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
                            [
                              _vm._v(
                                "\n                                    Ver "
                              ),
                              _c("i", { staticClass: "fas fa-eye" })
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "dropdown" }, [
                      _vm._m(3, true),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu",
                          attrs: { "aria-labelledby": "subMenuProducto" }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "fichaStock",
                                      params: { id: producto.ficha_stock.id }
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "#" }
                                    },
                                    [_vm._v(" Ficha de Stock ")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("Paginacion", {
        attrs: { filtered: _vm.filtered_productos, nro_filas: 7 }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Codigo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Imagen")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Precio")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-success" }, [
      _c("i", { staticClass: "fas fa-check-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-danger" }, [
      _c("i", { staticClass: "fas fa-exclamation-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-outline-dark border-0 ",
        attrs: {
          type: "button",
          id: "subMenuProducto",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fas fa-ellipsis-v" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-success btn-block",
        attrs: {
          type: "button",
          "data-toggle": "modal",
          "data-target": "#AgregarFDP",
          "data-whatever": "@mdo"
        },
        on: {
          click: function($event) {
            return _vm.LNB()
          }
        }
      },
      [
        _vm._v("\n         Agregar Forma de Pago"),
        _c("i", { staticClass: "fas fa-plus-circle" })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "AgregarFDP",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "AgregarFDPLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        return _vm.resetResp(null)
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.respuestaS != null
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "alert alert-success alert-dismissible fade show"
                      },
                      [
                        _vm._v(
                          "\n                         " +
                            _vm._s(_vm.respuestaS) +
                            " \n                         "
                        ),
                        _vm._m(1)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "container" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.agregarFormaDePago(_vm.nfdp)
                        }
                      }
                    },
                    [
                      _c("componenteDatosFDP", { attrs: { nfdp: _vm.nfdp } }),
                      _vm._v(" "),
                      _vm.respuestaS === null
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-success btn-block sticky-button",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                                 Agregar Forma de Pago "
                              ),
                              _c("i", { staticClass: "fas fa-check-circle" })
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
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
    return _c(
      "h5",
      { staticClass: "modal-title", attrs: { id: "AgregarFDPLabel" } },
      [
        _c("i", { staticClass: "fas fa-plus-circle" }),
        _vm._v(" Agregar Forma de Pago\n                     ")
      ]
    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditarFDP.vue?vue&type=template&id=9ac20096&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalEditarFDP.vue?vue&type=template&id=9ac20096& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-primary btn-sm",
        attrs: {
          type: "button",
          "data-toggle": "modal",
          "data-target": "#editarFDP",
          "data-whatever": "@mdo"
        },
        on: {
          click: function($event) {
            return _vm.LNB()
          }
        }
      },
      [
        _vm._v("\n         Editar "),
        _c("i", { staticClass: "fas fa-pencil-alt" })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "editarFDP",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "editarFDPLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        return _vm.resetResp(null)
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.respuestaS != null
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "alert alert-success alert-dismissible fade show"
                      },
                      [
                        _vm._v(
                          "\n                         " +
                            _vm._s(_vm.respuestaS) +
                            " \n                         "
                        ),
                        _vm._m(1)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "container" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.editarFormaDePago(_vm.formaDePago)
                        }
                      }
                    },
                    [
                      _c("componenteDatosFDP", {
                        attrs: { nfdp: _vm.formaDePago }
                      }),
                      _vm._v(" "),
                      _vm.respuestaS === null
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-success btn-block sticky-button",
                              attrs: { type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                                 Guardar Cambios "
                              ),
                              _c("i", { staticClass: "fas fa-check-circle" })
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
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
    return _c(
      "h5",
      { staticClass: "modal-title", attrs: { id: "editarFDPLabel" } },
      [
        _c("i", { staticClass: "fas fa-plus-circle" }),
        _vm._v(" Editar Forma de Pago\n                     ")
      ]
    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=template&id=22f816fa&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AgregarCliente.vue?vue&type=template&id=22f816fa& ***!
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
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c("router-link", { attrs: { to: { name: "menuClientes" } } }, [
            _vm.respuestaS != null
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.cancelar()
                      }
                    }
                  },
                  [_vm._v("\n                    Finalizar\n                ")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.respuestaS === null
            ? _c("router-link", { attrs: { to: { name: "menuClientes" } } }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.resetError()
                      }
                    }
                  },
                  [_vm._v("\n                    Cancelar\n                ")]
                )
              ])
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm.respuestaS != null
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible fade show mt-4"
          },
          [
            _vm._v("\n        " + _vm._s(_vm.respuestaS) + " \n        "),
            _vm._m(1)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.errors.length > 0
      ? _c(
          "div",
          {
            staticClass: "alert alert-danger alert-dismissible fade show mt-4"
          },
          [_vm._v("\n        " + _vm._s(_vm.errors) + "\n        "), _vm._m(2)]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-5" }, [
      _vm.respuestaS === null
        ? _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.agregarCliente(_vm.ncliente)
                }
              }
            },
            [
              _c("componente-fdatoscliente", {
                attrs: { cliente: _vm.ncliente }
              }),
              _vm._v(" "),
              _vm.respuestaS === null
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-block sticky-button",
                      attrs: { type: "submit" }
                    },
                    [
                      _vm._v("\n                Agregar Cliente "),
                      _c("i", { staticClass: "fas fa-check-circle" })
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.respuestaS != null
        ? _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editarCliente(_vm.cliente)
                }
              }
            },
            [
              _c("componente-fdatoscliente", {
                attrs: { cliente: _vm.cliente }
              }),
              _vm._v(" "),
              _vm._m(3)
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [
        _c("i", { staticClass: "fas fa-address-card" }),
        _vm._v(" Ingreso de Nuevo Cliente")
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-warning btn-block sticky-button",
        attrs: { type: "submit" }
      },
      [
        _vm._v("\n                Guardar Cambios "),
        _c("i", { staticClass: "fas fa-save" })
      ]
    )
  }
]
render._withStripped = true



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
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c("router-link", { attrs: { to: { name: "MenuProductos" } } }, [
            _vm.respuesta != null
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.resetResp(null)
                      }
                    }
                  },
                  [_vm._v("\n                    Finalizar\n                ")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.respuesta === null
            ? _c("router-link", { attrs: { to: { name: "MenuProductos" } } }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.resetError()
                      }
                    }
                  },
                  [_vm._v("\n                    Cancelar\n                ")]
                )
              ])
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm.respuesta != null
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible fade show mt-4"
          },
          [
            _vm._v("\n        " + _vm._s(_vm.respuesta) + " \n        "),
            _vm._m(1)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "progress mt-3" }, [
      _c("div", {
        class: _vm.barStyle,
        style: _vm.progress,
        attrs: {
          role: "progressbar",
          "aria-valuenow": "70",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "nav nav-tabs mt-4" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab0,
            on: {
              click: function($event) {
                return _vm.setTab(0)
              }
            }
          },
          [_vm._v("Datos Generales")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab1,
            on: {
              click: function($event) {
                return _vm.setTab(1)
              }
            }
          },
          [_vm._v("Precios")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab2,
            on: {
              click: function($event) {
                return _vm.setTab(2)
              }
            }
          },
          [_vm._v("Descripcion")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { enctype: "multipart/form-data" },
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
          { staticClass: "form-group my-4" },
          [
            _vm.tab === 0
              ? _c("componente-fdatosprod", {
                  attrs: { producto: _vm.producto }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.tab === 1
              ? _c("componente-fcosto", { attrs: { producto: _vm.producto } })
              : _vm._e(),
            _vm._v(" "),
            _vm.tab === 1
              ? _c("componente-frentabilidad", {
                  attrs: { producto: _vm.producto }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.tab === 2
              ? _c("descripcionProducto", { attrs: { producto: _vm.producto } })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _vm.respuesta === null && _vm.tab === 2
          ? _c(
              "button",
              {
                staticClass: "btn btn-success btn-block",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    return _vm.completarBarra()
                  }
                }
              },
              [
                _vm._v("\n            Agregar "),
                _c("i", { staticClass: "fas fa-check-circle" })
              ]
            )
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm.tab === 0
      ? _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block",
            on: {
              click: function($event) {
                return _vm.setTab(1)
              }
            }
          },
          [
            _vm._v("\n        Continuar "),
            _c("i", { staticClass: "fas fa-chevron-circle-right" })
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.tab === 1
      ? _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block",
            on: {
              click: function($event) {
                return _vm.setTab(2)
              }
            }
          },
          [
            _vm._v("\n        Continuar "),
            _c("i", { staticClass: "fas fa-chevron-circle-right" })
          ]
        )
      : _vm._e()
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
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c("router-link", { attrs: { to: { name: "listadoProveedores" } } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    return _vm.resetError()
                  }
                }
              },
              [_vm._v("\n                    Cancelar\n                ")]
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
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
        _c("componente-fdatosprov", { attrs: { proveedor: _vm.proveedor } }),
        _vm._v(" "),
        _vm._m(1)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [
        _c("i", { staticClass: "fas fa-user-plus" }),
        _vm._v(" Ingreso de Nuevo Proveedor")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success btn-block", attrs: { type: "submit" } },
      [
        _vm._v("\n            Agregar "),
        _c("i", { staticClass: "fas fa-check-circle" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=template&id=5a61c9ed&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DatosEmpresa.vue?vue&type=template&id=5a61c9ed& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-3 border border-secondary rounded" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.respuesta != null
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible fade show mt-4"
          },
          [
            _vm._v("\n        " + _vm._s(_vm.respuesta) + " \n        "),
            _vm._m(1)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-5" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.editarDatos(_vm.datos)
            }
          }
        },
        [
          _c("formilarioEmpresa", { attrs: { datos: _vm.datos } }),
          _vm._v(" "),
          _vm._m(2)
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded"
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", [
            _vm._v("Datos de La Empresa "),
            _c("i", { staticClass: "fas fa-building" })
          ])
        ])
      ]
    )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-warning btn-block mt-4",
        attrs: { type: "submit" }
      },
      [
        _vm._v("\n                Guardar Cambios "),
        _c("i", { staticClass: "fas fa-save" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleCliente.vue?vue&type=template&id=7000e5e2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetalleCliente.vue?vue&type=template&id=7000e5e2& ***!
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
                to: { name: "editarCliente", params: { id: _vm.cliente.id } }
              }
            },
            [
              _c("button", { staticClass: "btn btn-warning" }, [
                _vm._v("\n                    Editar "),
                _c("i", { staticClass: "fas fa-pen" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-danger",
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [
              _vm._v("\n                Volver "),
              _c("i", { staticClass: "fas fa-arrow-alt-circle-left" })
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "list-group mt-3" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_c("h3", [_vm._v(_vm._s(_vm.cliente.nombre))])])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Codigo de Cliente: ")]),
        _vm._v(" " + _vm._s(_vm.cliente.id))
      ]),
      _vm._v(" "),
      _vm.cliente.localidad
        ? _c("li", { staticClass: "list-group-item" }, [
            _c("strong", [_vm._v("Direccion: ")]),
            _vm._v(
              " " +
                _vm._s(_vm.cliente.direccion) +
                " - " +
                _vm._s(_vm.cliente.localidad.nombre) +
                ", " +
                _vm._s(_vm.cliente.localidad.provincia.iso_nombre)
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Telefono: ")]),
        _vm._v(_vm._s(_vm.cliente.telefono) + " ")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Celular: ")]),
        _vm._v(" " + _vm._s(_vm.cliente.celular))
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Email: ")]),
        _vm._v(" " + _vm._s(_vm.cliente.email))
      ]),
      _vm._v(" "),
      _vm.cliente.condicion_iva
        ? _c("li", { staticClass: "list-group-item" }, [
            _c("strong", [_vm._v("Condicon de Iva: ")]),
            _vm._v(" " + _vm._s(_vm.cliente.condicion_iva.denominacion))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.cliente.categoria
        ? _c("li", { staticClass: "list-group-item" }, [
            _c("strong", [_vm._v("Tipo de Cliente: ")]),
            _vm._v(" " + _vm._s(_vm.cliente.categoria.denominacion))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Ultima Actualizacion: ")]),
        _vm._v(" " + _vm._s(_vm.cliente.updated_at))
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("div", { staticClass: "d-flex flex-row" }, [
          _c(
            "div",
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "listadoPresupuestosCliente",
                      params: { id: _vm.cliente.id }
                    }
                  }
                },
                [
                  _c(
                    "button",
                    { staticClass: "btn btn-outline-primary btn-sm" },
                    [
                      _vm._v("\n                            Presupuestos "),
                      _c("i", { staticClass: "fas fa-file-alt" })
                    ]
                  )
                ]
              )
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container mt-5" },
      [
        _vm._m(1),
        _vm._v(" "),
        _c("componente-gmap", { attrs: { cliente: _vm.cliente } })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h2", [
        _c("i", { staticClass: "fas fa-id-card" }),
        _vm._v(" Detalle de Cliente ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fas fa-map-marker-alt" }),
      _vm._v(" Ubicacion en Mapa: ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=template&id=491009ca&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DetallePresupuesto.vue?vue&type=template&id=491009ca& ***!
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
  return _c(
    "div",
    { staticClass: "py-3 border border-secondary rounded" },
    [
      _c(
        "div",
        {
          staticClass:
            "row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-1" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-danger btn-sm",
                on: {
                  click: function($event) {
                    return _vm.$router.go(-1)
                  }
                }
              },
              [
                _vm._v("\n                Volver "),
                _c("i", { staticClass: "fas fa-arrow-alt-circle-left" })
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("encabezado", { attrs: { npresupuesto: _vm.presupuesto } }),
      _vm._v(" "),
      _c("productos", { attrs: { npresupuesto: _vm.presupuesto } }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-row-reverse p-2 my-2" }, [
        _c(
          "div",
          { staticClass: "mx-1" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "editarPresupuesto",
                    params: { id: _vm.presupuesto.id }
                  }
                }
              },
              [
                _c("button", { staticClass: "btn btn-outline-info btn-sm" }, [
                  _vm._v("\n                    Editar "),
                  _c("i", { staticClass: "fas fa-pen" })
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mx-1" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-danger btn-sm",
              on: {
                click: function($event) {
                  return _vm.rechazar()
                }
              }
            },
            [
              _vm._v("\n                Rechazar "),
              _c("i", { staticClass: "fas fa-ban" })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-1" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-success btn-sm",
              on: {
                click: function($event) {
                  return _vm.confirmar()
                }
              }
            },
            [
              _vm._v("\n                Confirmar "),
              _c("i", { staticClass: "fas fa-check-circle" })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-1" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-warning btn-sm mr-1",
              on: {
                click: function($event) {
                  return _vm.seguir()
                }
              }
            },
            [
              _vm._v("\n                Seguimiento "),
              _c("i", { staticClass: "fas fa-running" })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mx-1" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary btn-sm",
              on: {
                click: function($event) {
                  return _vm.imprimirPrespuesto(_vm.presupuesto.id)
                }
              }
            },
            [
              _vm._v("\n                Imprimir "),
              _c("i", { staticClass: "fas fa-print" })
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-11" }, [
      _c("h1", [
        _vm._v("Presupuesto "),
        _c("i", { staticClass: "fas fa-file-alt" })
      ])
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
        { staticClass: "col-3" },
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
                _vm._v("\n                    Editar "),
                _c("i", { staticClass: "fas fa-pen" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-danger",
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [
              _vm._v("\n                Volver "),
              _c("i", { staticClass: "fas fa-arrow-alt-circle-left" })
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8" }, [
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
            _c("strong", [_vm._v("Precio de Venta: ")]),
            _vm._v(" "),
            _c("h5", [_vm._v("$" + _vm._s(_vm.producto.precioVenta))])
          ]),
          _vm._v(" "),
          _vm.producto.proveedor
            ? _c(
                "li",
                { staticClass: "list-group-item" },
                [
                  _c("strong", [_vm._v("Proveedor: ")]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "detalleProv",
                          params: { id: _vm.producto.proveedor_id }
                        }
                      }
                    },
                    [_c("a", [_vm._v(_vm._s(_vm.producto.proveedor.nombre))])]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.producto.categoria
            ? _c(
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
                          params: { id: _vm.producto.categoria_id }
                        }
                      }
                    },
                    [_c("a", [_vm._v(_vm._s(_vm.producto.categoria.nombre))])]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _c("strong", [_vm._v("Estado:")]),
            _vm._v(" "),
            _vm.producto.estado === 1
              ? _c("p", { staticClass: "text-success" }, [
                  _vm._v("Activo "),
                  _c("i", { staticClass: "fas fa-check-circle" })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.producto.estado === 0
              ? _c("p", { staticClass: "text-danger" }, [
                  _vm._v("Inactivo "),
                  _c("i", { staticClass: "fas fa-exclamation-circle" })
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _c("i", { staticClass: "fas fa-clock" }),
            _vm._v(" "),
            _c("strong", [_vm._v("Ultima Actualizacion: ")]),
            _vm._v(" " + _vm._s(_vm.producto.updated_at) + "\n                ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 mt-3" }, [
        _c("img", {
          staticClass: "img-thumbnail",
          attrs: { src: _vm.producto.imagen, alt: "Example", width: "330px" }
        })
      ])
    ]),
    _vm._v(" "),
    _vm.producto.ficha_stock
      ? _c("div", { staticClass: "row mt-5" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "container" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c(
                    "div",
                    { class: _vm.etiquetaCantidad, attrs: { role: "alert" } },
                    [
                      _c("h4", [_vm._v("Cantidad Actual")]),
                      _vm._v(" "),
                      _c("h3", [
                        _vm._v(_vm._s(_vm.producto.ficha_stock.cantidadActual))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "alert alert-secondary",
                        attrs: { role: "alert" }
                      },
                      [
                        _c("i", { staticClass: "fas fa-clock" }),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Ultimo movimiento: ")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.producto.ultStock) +
                            "\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "fichaStock",
                            params: { id: _vm.producto.ficha_stock.id }
                          }
                        }
                      },
                      [
                        _c(
                          "button",
                          { staticClass: "btn btn-outline-primary btn-block" },
                          [
                            _vm._v(
                              "\n                                Ver ficha "
                            ),
                            _c("i", { staticClass: "fas fa-book-open" })
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", {
            staticClass: "shadow-sm p-3 mb-5 bg-white rounded",
            domProps: { innerHTML: _vm._s(_vm.producto.descripcion) }
          })
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
    return _c("div", { staticClass: "col-9" }, [
      _c("h2", [
        _c("i", { staticClass: "fas fa-box" }),
        _vm._v(" Detalle de Producto ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fas fa-box-open" }),
      _vm._v(" Stock")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fas fa-info-circle" }),
      _vm._v(" Descripcion")
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
              _vm._v("\n                    Editar "),
              _c("i", { staticClass: "fas fa-pen" })
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-danger",
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [
              _vm._v("\n                Volver "),
              _c("i", { staticClass: "fas fa-arrow-alt-circle-left" })
            ]
          )
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
        _c("strong", [_vm._v("Email: ")]),
        _vm._v(" " + _vm._s(_vm.proveedor.email))
      ]),
      _vm._v(" "),
      _vm.proveedor.localidad
        ? _c("li", { staticClass: "list-group-item" }, [
            _c("strong", [_vm._v("Localidad: ")]),
            _vm._v(
              " " +
                _vm._s(_vm.proveedor.direccion) +
                " - " +
                _vm._s(_vm.proveedor.localidad.nombre) +
                ", " +
                _vm._s(_vm.proveedor.localidad.provincia.iso_nombre)
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.proveedor.condicion_iva
        ? _c("li", { staticClass: "list-group-item" }, [
            _c("strong", [_vm._v("Condicion de IVA: ")]),
            _vm._v(" " + _vm._s(_vm.proveedor.condicion_iva.denominacion))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("strong", [_vm._v("Categorias: ")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c(
              "ul",
              _vm._l(_vm.proveedor.categorias, function(categoria, index) {
                return _c(
                  "li",
                  { key: index },
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
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v(_vm._s(categoria.nombre))
                        ]),
                        _vm._v(" ---\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c("i", { staticClass: "fas fa-times" })
                  ],
                  1
                )
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
      _c("h2", [
        _c("i", { staticClass: "fas fa-id-card" }),
        _vm._v(" Detalle Proveedor: ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=template&id=a23ba8a0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarCliente.vue?vue&type=template&id=a23ba8a0& ***!
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
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c("router-link", { attrs: { to: { name: "menuClientes" } } }, [
            _vm.respuestaS != null
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.cancelar()
                      }
                    }
                  },
                  [_vm._v("\n                    Finalizar\n                ")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.respuestaS === null
            ? _c("router-link", { attrs: { to: { name: "menuClientes" } } }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.resetError()
                      }
                    }
                  },
                  [_vm._v("\n                    Cancelar\n                ")]
                )
              ])
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm.respuestaS != null
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible fade show mt-4"
          },
          [
            _vm._v("\n        " + _vm._s(_vm.respuestaS) + " \n        "),
            _vm._m(1)
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-5" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.editarCliente(_vm.cliente)
            }
          }
        },
        [
          _c("componente-fdatoscliente", { attrs: { cliente: _vm.cliente } }),
          _vm._v(" "),
          _vm._m(2)
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [
        _c("i", { staticClass: "fas fa-user-edit" }),
        _vm._v(" Editar Cliente")
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-warning btn-block sticky-button",
        attrs: { type: "submit" }
      },
      [
        _vm._v("\n                Guardar Cambios "),
        _c("i", { staticClass: "fas fa-save" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e& ***!
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
  return _c("div", { staticClass: "py-3 border border-secondary rounded" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.agregarPresupuesto(_vm.presupuesto)
          }
        }
      },
      [
        _c("encabezado", { attrs: { npresupuesto: _vm.presupuesto } }),
        _vm._v(" "),
        _c("productos", { attrs: { npresupuesto: _vm.presupuesto } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex justify-content-center sticky-button" },
          [
            _vm.$store.state.presupuestos.status != 200
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-warning btn-block w-75",
                    attrs: { type: "submit" }
                  },
                  [
                    _vm._v("\n                Grabar Prespuesto "),
                    _c("i", { staticClass: "fas fa-save" })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$store.state.presupuestos.status === 200
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info btn-block w-75",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.imprimirPrespuesto(_vm.presupuesto.id)
                      }
                    }
                  },
                  [
                    _vm._v("\n                Imprimir Prespuesto "),
                    _c("i", { staticClass: "fas fa-print" })
                  ]
                )
              : _vm._e()
          ]
        )
      ],
      1
    ),
    _vm._v("\n    " + _vm._s(_vm.vendedorC) + _vm._s(_vm.preC) + "\n")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded"
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("h1", [
            _vm._v("Editar Presupuesto "),
            _c("i", { staticClass: "fas fa-file-alt" })
          ])
        ])
      ]
    )
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-4" },
          [
            _c("router-link", { attrs: { to: { name: "MenuProductos" } } }, [
              _vm.respuesta != null
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: {
                        click: function($event) {
                          _vm.$store.state.productos.respuesta = null
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Finalizar\n                    "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "detalleProducto",
                    params: { id: _vm.producto.id }
                  }
                }
              },
              [
                _vm.respuesta === null
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.resetError()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Cancelar\n                    "
                        )
                      ]
                    )
                  : _vm._e()
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.respuesta != null
        ? _c(
            "div",
            {
              staticClass:
                "alert alert-success alert-dismissible fade show mt-4"
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.respuesta) + " \n            "
              ),
              _vm._m(1)
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "nav nav-tabs mt-4" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab0,
            on: {
              click: function($event) {
                return _vm.setTab(0)
              }
            }
          },
          [_vm._v("Datos Generales")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab1,
            on: {
              click: function($event) {
                return _vm.setTab(1)
              }
            }
          },
          [_vm._v("Precios")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab2,
            on: {
              click: function($event) {
                return _vm.setTab(2)
              }
            }
          },
          [_vm._v("Descripcion")]
        )
      ])
    ]),
    _vm._v(" "),
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
        _vm.tab === 0
          ? _c("componente-fdatosprod", { attrs: { producto: _vm.producto } })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group my-4" },
          [
            _vm.tab === 1
              ? _c("componente-fcosto", { attrs: { producto: _vm.producto } })
              : _vm._e(),
            _vm._v(" "),
            _vm.tab === 1
              ? _c("componente-frentabilidad", {
                  attrs: { producto: _vm.producto }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _vm.tab === 2
          ? _c("descripcionProducto", { attrs: { producto: _vm.producto } })
          : _vm._e(),
        _vm._v(" "),
        _vm.respuesta === null
          ? _c(
              "button",
              {
                staticClass: "btn btn-warning btn-block sticky-button",
                attrs: { type: "submit" }
              },
              [
                _vm._v("\n            Guardar Cambios "),
                _c("i", { staticClass: "fas fa-save" })
              ]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [
        _c("i", { staticClass: "fas fa-edit" }),
        _vm._v(" Editar Producto")
      ])
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
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-4" },
        [
          _c("router-link", { attrs: { to: { name: "listadoProveedores" } } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    return _vm.resetError()
                  }
                }
              },
              [_vm._v("\n                    Cancelar\n                ")]
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
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
        _c("componente-fdatosprov", { attrs: { proveedor: _vm.proveedor } }),
        _vm._v(" "),
        _vm._m(1)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [
        _c("i", { staticClass: "fas fa-user-edit" }),
        _vm._v(" Editar Proveedor")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-warning btn-block", attrs: { type: "submit" } },
      [_vm._v("Guardar Cambios "), _c("i", { staticClass: "fas fa-save" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FichaDeStock.vue?vue&type=template&id=c0ba3b0a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FichaDeStock.vue?vue&type=template&id=c0ba3b0a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      "div",
      { staticClass: "row shadow-sm p-3 text-white bg-secondary rounded" },
      [
        _c(
          "div",
          { staticClass: "col-10" },
          [
            _vm.fichaDeStock.producto.nombre
              ? _c("H1", [
                  _c("i", { staticClass: "fas fa-box-open" }),
                  _vm._v(
                    " Ficha de Stock: " +
                      _vm._s(_vm.fichaDeStock.producto.nombre)
                  )
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-2" }, [
          _c("img", {
            staticClass: "rounded",
            attrs: { src: _vm.fichaDeStock.producto.imagen, width: "100px" }
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("div", { class: _vm.etiquetaCantidad, attrs: { role: "alert" } }, [
          _c("h4", [_vm._v("Actual")]),
          _vm._v(" "),
          _c("h3", [_vm._v(_vm._s(_vm.fichaDeStock.cantidadActual))])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c(
          "div",
          { staticClass: "alert alert-secondary", attrs: { role: "alert" } },
          [
            _c("i", { staticClass: "fas fa-clock" }),
            _vm._v(" "),
            _c("strong", [_vm._v("Ultimo movimiento: ")]),
            _vm._v(" " + _vm._s(_vm.fichaDeStock.ultStock) + "\n            ")
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-9" },
            [
              _vm.fichaDeStock
                ? _c("ajustemanualstock", {
                    attrs: {
                      nFicha: _vm.id,
                      cantAct: _vm.fichaDeStock.cantidadActual,
                      producto_id: _vm.fichaDeStock.producto_id
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-danger",
                on: {
                  click: function($event) {
                    return _vm.$router.go(-1)
                  }
                }
              },
              [
                _vm._v("\n                        Volver "),
                _c("i", { staticClass: "fas fa-arrow-alt-circle-left" })
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-striped m-4" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.fichaDeStock.lineas, function(item, index) {
          return _c("tr", { key: index }, [
            _c("th", { attrs: { scope: "row" } }, [
              _vm._v(_vm._s(item.created_at))
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(item.tipo))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(item.cantidad))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(item.usuario))]),
            _vm._v(" "),
            _vm._m(1, true)
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
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Usuario")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-outline-dark btn-sm" }, [
        _vm._v("\n                    ver\n                ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FormasDePago.vue?vue&type=template&id=6b748eef&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FormasDePago.vue?vue&type=template&id=6b748eef& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-8" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [_c("modalAgregarFdp")], 1)
      ]),
      _vm._v(" "),
      _c("ListaFDP", { staticClass: "mt-3" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _c("i", { staticClass: "fas fa-money-bill-wave-alt" }),
      _vm._v(" Formas de Pago")
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
        _c("div", { staticClass: "col-2" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-danger",
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [
              _vm._v("\n                    Volver "),
              _c("i", { staticClass: "fas fa-arrow-alt-circle-left" })
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("form", { staticClass: "my-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-8" }, [
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
          _c(
            "div",
            { staticClass: "col-4" },
            [_c("componente-fagregarcategoria")],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("table", { staticClass: "table table-striped mt-4" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.arregloPaginado, function(categoria) {
                return _c("tr", { key: categoria.id }, [
                  _c("th", [_vm._v(_vm._s(categoria.id))]),
                  _vm._v(" "),
                  categoria.nro === 2
                    ? _c("td", [_vm._v(" ------" + _vm._s(categoria.nombre))])
                    : _vm._e(),
                  _vm._v(" "),
                  categoria.nro === 1
                    ? _c("td", [_vm._v(" ---" + _vm._s(categoria.nombre))])
                    : _vm._e(),
                  _vm._v(" "),
                  categoria.nro === 0
                    ? _c("td", [
                        _c("strong", [_vm._v(_vm._s(categoria.nombre))])
                      ])
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
                            [
                              _c("i", { staticClass: "fas fa-eye" }),
                              _vm._v(" / "),
                              _c("i", { staticClass: "fas fa-edit" })
                            ]
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
          ]),
          _vm._v(" "),
          _c("Paginacion", {
            attrs: { filtered: _vm.filtered_categorias, nro_filas: 7 }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-10" }, [
      _c("h1", { staticClass: "text-center" }, [
        _c("i", { staticClass: "fas fa-sitemap" }),
        _vm._v(" Categorias\n                ")
      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestos.vue?vue&type=template&id=5302193f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoPresupuestos.vue?vue&type=template&id=5302193f& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container mt-3 border border-rounded p-3" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _c("date-picker", {
              attrs: {
                type: "date",
                range: "",
                placeholder: "Filtrar por Fecha"
              },
              model: {
                value: _vm.search,
                callback: function($$v) {
                  _vm.search = $$v
                },
                expression: "search"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchEstado,
                    expression: "searchEstado"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
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
                    _vm.searchEstado = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c(
                  "option",
                  { attrs: { selected: "" }, domProps: { value: null } },
                  [_vm._v("Todos")]
                ),
                _vm._v(" "),
                _vm._l(_vm.estadosPresupuesto, function(estado, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: estado.id } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(estado.nombre) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-3" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _c("table", { staticClass: "table table-striped" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.arregloPaginado, function(presupuesto, index) {
                  return _c("tr", { key: index }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(presupuesto.fecha_emision))
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(presupuesto.cliente.nombre))]),
                    _vm._v(" "),
                    _c("td", [_vm._v("$" + _vm._s(presupuesto.total))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                                " +
                          _vm._s(presupuesto.vendedor.puesto) +
                          " - " +
                          _vm._s(presupuesto.vendedor.nombre) +
                          "\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("span", { class: presupuesto.estado.clase }, [
                        _vm._v(_vm._s(presupuesto.estado.nombre))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "d-flex flex-row" }, [
                        _c(
                          "div",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "detallePresupuesto",
                                    params: { id: presupuesto.id }
                                  }
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning btn-sm mr-1"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                Ver Mas "
                                    ),
                                    _c("i", { staticClass: "fas fa-eye" })
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.imprimirPrespuesto(presupuesto.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-print" })]
                          )
                        ])
                      ])
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("Paginacion", {
              attrs: { filtered: _vm.filtered_presupuestos, nro_filas: 10 }
            }),
            _vm._v("\n                " + _vm._s(_vm.getPre) + "\n            ")
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _c("i", { staticClass: "fas fa-list-ul" }),
      _vm._v(" Listado de Presupuestos")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("label", { staticClass: "input-group-text" }, [_vm._v("Estado:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Cliente")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Vendedor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container mt-5" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchEstado,
                    expression: "searchEstado"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
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
                    _vm.searchEstado = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c(
                  "option",
                  { attrs: { selected: "" }, domProps: { value: null } },
                  [_vm._v("Todos")]
                ),
                _vm._v(" "),
                _vm._l(_vm.estadosPresupuesto, function(estado, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: estado.id } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(estado.nombre) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.cliente.presupuestos
        ? _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-12" }, [
              _vm.cliente.presupuestos.length === 0
                ? _c(
                    "div",
                    { staticClass: "alert alert-warning alert-block mt-3" },
                    [_vm._m(2)]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.cliente.presupuestos.length > 0
                ? _c("table", { staticClass: "table table-striped" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.filtered_presupuestos, function(
                        presupuesto,
                        index
                      ) {
                        return _c("tr", { key: index }, [
                          _c("th", { attrs: { scope: "row" } }, [
                            _vm._v(_vm._s(presupuesto.fecha_emision))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(presupuesto.total))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(presupuesto.vendedor.puesto) +
                                " - " +
                                _vm._s(presupuesto.vendedor.nombre) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { class: presupuesto.estado.clase }, [
                              _vm._v(_vm._s(presupuesto.estado.nombre))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("div", { staticClass: "d-flex flex-row" }, [
                              _c(
                                "div",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "detallePresupuesto",
                                          params: { id: presupuesto.id }
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-warning btn-sm mr-1"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                Ver Mas "
                                          ),
                                          _c("i", { staticClass: "fas fa-eye" })
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-primary btn-sm",
                                    on: {
                                      click: function($event) {
                                        return _vm.imprimirPrespuesto(
                                          presupuesto.id
                                        )
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-print" })]
                                )
                              ])
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h2", [
        _c("i", { staticClass: "fas fa-list-ul" }),
        _vm._v(" Listado de Presupuestos Cliente")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("label", { staticClass: "input-group-text" }, [_vm._v("Estado:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _vm._v("Sin Presupuestos "),
      _c("i", { staticClass: "fas fa-exclamation-triangle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Monto")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Vendedor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")])
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
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("form", { staticClass: "my-4" }, [
        _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col-8" }, [
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
          _c(
            "div",
            { staticClass: "col-4" },
            [
              _c("router-link", { attrs: { to: { name: "agregarProv" } } }, [
                _c(
                  "button",
                  { staticClass: "btn btn-outline-success btn-block" },
                  [
                    _vm._v("\n                        Agregar Proveedor "),
                    _c("i", { staticClass: "fas fa-user-plus" })
                  ]
                )
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("ListaProveedores")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _c("i", { staticClass: "fas fa-users" }),
      _vm._v(" Proveedores")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuClientes.vue?vue&type=template&id=6c53f0d7&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MenuClientes.vue?vue&type=template&id=6c53f0d7& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-9" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass: "form-control mt-3",
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
          { staticClass: "col-3" },
          [
            _c("router-link", { attrs: { to: { name: "agregarCliente" } } }, [
              _c(
                "button",
                { staticClass: "btn btn-outline-success btn-block my-3" },
                [
                  _vm._v(" \n                    Agregar Cliente "),
                  _c("i", { staticClass: "fas fa-user-plus" })
                ]
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("componente-listadoClientes")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", [
          _c("i", { staticClass: "fas fa-users" }),
          _vm._v(" Clientes")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuComercial.vue?vue&type=template&id=a7cb565e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MenuComercial.vue?vue&type=template&id=a7cb565e& ***!
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
    _c(
      "div",
      { staticClass: "container shadow-sm mt-3 p-3 bg-white rounded" },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "nuevoPrespuesto" } } },
                [
                  _c("button", { staticClass: "btn btn-outline-success" }, [
                    _vm._v("\n                            Nuevo Presupuesto "),
                    _c("i", { staticClass: "fas fa-plus-circle" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                { attrs: { to: { name: "listadoPresupuestos" } } },
                [
                  _c("button", { staticClass: "btn btn-outline-primary" }, [
                    _vm._v(
                      "\n                            Listado Presupuestos "
                    ),
                    _c("i", { staticClass: "fas fa-list-alt" })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("i", { staticClass: "fas fa-grip-lines-vertical" }),
              _vm._v(" "),
              _c("router-link", { attrs: { to: { name: "formasDePago" } } }, [
                _c("button", { staticClass: "btn btn-outline-dark" }, [
                  _vm._v("\n                            Formas de Pago "),
                  _c("i", { staticClass: "fas fa-money-bill-wave-alt" })
                ])
              ])
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "container shadow-sm mt-3 p-3 text-white bg-secondary rounded"
      },
      [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-2" }, [
          _c(
            "div",
            { staticClass: "col-12 text-center" },
            [_vm._m(2), _vm._v(" "), _c("estadisticaventas")],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-2" }, [
          _c(
            "div",
            { staticClass: "col-6" },
            [
              _vm._m(3),
              _vm._v(" "),
              _c("estadisticaproducto"),
              _vm._v(" "),
              _c("p", [_vm._v("*Un mes para atras")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6" },
            [_vm._m(4), _vm._v(" "), _c("estadisticalinea")],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _c("i", { staticClass: "fas fa-handshake" }),
      _vm._v(" Seccion Comercial\n    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _c("i", { staticClass: "fas fa-chart-bar" }),
      _vm._v(" Estadisticas\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "my-2" }, [
      _c("i", { staticClass: "fas fa-chart-line" }),
      _vm._v(" Presupuestos\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "my-2" }, [
      _c("i", { staticClass: "fas fa-chart-pie" }),
      _vm._v(" Presupuestos\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "my-2" }, [
      _c("i", { staticClass: "fas fa-chart-line" }),
      _vm._v(" Tipo de Producto\n                    ")
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
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-9" }, [
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
                placeholder: "Buscar ",
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
            { staticClass: "col-3" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "agregarProducto" } } },
                [
                  _c(
                    "button",
                    { staticClass: "btn btn-outline-success btn-block my-3" },
                    [
                      _vm._v(" \n                        Agregar Producto "),
                      _c("i", { staticClass: "fas fa-plus-circle" })
                    ]
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("listadoProductos")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("h1", [_c("i", { staticClass: "fas fa-boxes" }), _vm._v(" Productos")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=template&id=6d0b839b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NuevoPresupuesto.vue?vue&type=template&id=6d0b839b& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-3 border border-secondary rounded" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.agregarPresupuesto(_vm.npre)
          }
        }
      },
      [
        _c("encabezado", { attrs: { npresupuesto: _vm.npre } }),
        _vm._v(" "),
        _c("productos", { attrs: { npresupuesto: _vm.npre } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex justify-content-center sticky-button" },
          [
            _vm.$store.state.presupuestos.status != 200
              ? _c("div", { staticClass: "p-2  w-75" }, [_vm._m(1)])
              : _vm._e(),
            _vm._v(" "),
            _vm.$store.state.presupuestos.status === 200
              ? _c("div", { staticClass: "p-2 w-75" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-secondary btn-block w-75",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.imprimirPrespuesto(_vm.presupuesto.id)
                        }
                      }
                    },
                    [
                      _vm._v("\n                    Imprimir Prespuesto "),
                      _c("i", { staticClass: "fas fa-print" })
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$store.state.presupuestos.status === 200
              ? _c(
                  "div",
                  { staticClass: "p-2" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "listadoPresupuestos" } } },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary",
                            attrs: { type: "button" }
                          },
                          [
                            _vm._v("\n                        Finalizar "),
                            _c("i", { staticClass: "fas fa-check-circle" })
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        )
      ],
      1
    ),
    _vm._v("\n    " + _vm._s(_vm.vendedorC) + "\n    " + _vm._s(_vm.fdp) + "\n")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "row shadow-sm p-3 text-center bg-ecogray border border-secondary rounded"
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("h1", [
            _vm._v("Nuevo Presupuesto "),
            _c("i", { staticClass: "fas fa-file-alt" })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-warning btn-block", attrs: { type: "submit" } },
      [
        _vm._v("\n                    Grabar Prespuesto "),
        _c("i", { staticClass: "fas fa-save" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TablasDatosClientes.vue?vue&type=template&id=7611b85c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TablasDatosClientes.vue?vue&type=template&id=7611b85c& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("h1", { staticClass: "text-center" }, [
      _vm._v("Tablas de Datos de Clientes")
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "nav nav-tabs mt-4" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab0,
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.setTab(0)
              }
            }
          },
          [_vm._v("Localidades")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab1,
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.setTab(1)
              }
            }
          },
          [_vm._v("Categorias")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            class: _vm.ctab2,
            attrs: { href: "#" },
            on: {
              click: function($event) {
                return _vm.setTab(2)
              }
            }
          },
          [_vm._v("Condicones de Iva")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.tab === 0
      ? _c("div", { class: _vm.containers }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-4" }, [
              _c("label", { attrs: { for: "filtro_provincias" } }, [
                _vm._v("Provincia")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fprov,
                      expression: "fprov"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "filtro_provincias" },
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
                      _vm.fprov = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "" }, domProps: { value: null } },
                    [_vm._v("Todas")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.provincias, function(provincia, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: provincia.id } },
                      [_vm._v(_vm._s(provincia.iso_nombre))]
                    )
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container mt-4" },
            [_c("componente-lidadolocalidades")],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.tab === 1
      ? _c("div", { class: _vm.containers }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-4" },
              [_c("componente-fagregarcatecli")],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container mt-4" },
            [_c("componente-lidadocategoriascli")],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.tab === 2
      ? _c("div", { class: _vm.containers }, [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("Condiciones de Iva")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container mt-4" },
            [_c("componente-lidadocondicionesiva")],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 text-center border-right" }, [
      _c("h3", { staticClass: "mt-3" }, [_vm._v("Localidades")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", [_vm._v("Categorias Cliente")])
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
    _c("div", { staticClass: "container" }, [
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
                _vm.respuesta != null
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        on: {
                          click: function($event) {
                            return _vm.resetResp(null)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Finalizar\n                    "
                        )
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _vm.respuesta === null
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.$router.go(-1)
                      }
                    }
                  },
                  [_vm._v("\n                    Cancelar\n                ")]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.respuesta != null
        ? _c(
            "div",
            {
              staticClass:
                "alert alert-success alert-dismissible fade show mt-4"
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.respuesta) + " \n            "
              ),
              _vm._m(1)
            ]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
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
        _c("div", { staticClass: "mt-5" }, [
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
        _vm._m(2)
      ]
    ),
    _vm._v(" "),
    _vm.categoria.cant_hijos > 0
      ? _c("h3", { staticClass: "mt-5" }, [
          _c("i", { staticClass: "fas fa-sitemap" }),
          _vm._v(" SubCategorias\n    ")
        ])
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
      _c("h3", [
        _c("i", { staticClass: "fas fa-edit" }),
        _vm._v(" Editar Categoria")
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-warning btn-block", attrs: { type: "submit" } },
        [_vm._v("Guardar Cambios "), _c("i", { staticClass: "fas fa-save" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AjusteManualStock.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/AjusteManualStock.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjusteManualStock_vue_vue_type_template_id_4399c3bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjusteManualStock.vue?vue&type=template&id=4399c3bd& */ "./resources/js/components/AjusteManualStock.vue?vue&type=template&id=4399c3bd&");
/* harmony import */ var _AjusteManualStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjusteManualStock.vue?vue&type=script&lang=js& */ "./resources/js/components/AjusteManualStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AjusteManualStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AjusteManualStock_vue_vue_type_template_id_4399c3bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AjusteManualStock_vue_vue_type_template_id_4399c3bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AjusteManualStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AjusteManualStock.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AjusteManualStock.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjusteManualStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AjusteManualStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AjusteManualStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjusteManualStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AjusteManualStock.vue?vue&type=template&id=4399c3bd&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/AjusteManualStock.vue?vue&type=template&id=4399c3bd& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjusteManualStock_vue_vue_type_template_id_4399c3bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AjusteManualStock.vue?vue&type=template&id=4399c3bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AjusteManualStock.vue?vue&type=template&id=4399c3bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjusteManualStock_vue_vue_type_template_id_4399c3bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjusteManualStock_vue_vue_type_template_id_4399c3bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ComponenteDatosFDP.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ComponenteDatosFDP.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponenteDatosFDP_vue_vue_type_template_id_bd4929ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec& */ "./resources/js/components/ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec&");
/* harmony import */ var _ComponenteDatosFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponenteDatosFDP.vue?vue&type=script&lang=js& */ "./resources/js/components/ComponenteDatosFDP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponenteDatosFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponenteDatosFDP_vue_vue_type_template_id_bd4929ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponenteDatosFDP_vue_vue_type_template_id_bd4929ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ComponenteDatosFDP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ComponenteDatosFDP.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ComponenteDatosFDP.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponenteDatosFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComponenteDatosFDP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ComponenteDatosFDP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponenteDatosFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponenteDatosFDP_vue_vue_type_template_id_bd4929ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ComponenteDatosFDP.vue?vue&type=template&id=bd4929ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponenteDatosFDP_vue_vue_type_template_id_bd4929ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponenteDatosFDP_vue_vue_type_template_id_bd4929ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Comprobante-DetalleLineasProducto.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Comprobante-DetalleLineasProducto.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comprobante_DetalleLineasProducto_vue_vue_type_template_id_77b560a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9& */ "./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9&");
/* harmony import */ var _Comprobante_DetalleLineasProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js& */ "./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Comprobante_DetalleLineasProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comprobante_DetalleLineasProducto_vue_vue_type_template_id_77b560a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comprobante_DetalleLineasProducto_vue_vue_type_template_id_77b560a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comprobante-DetalleLineasProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_template_id_77b560a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-DetalleLineasProducto.vue?vue&type=template&id=77b560a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_template_id_77b560a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_DetalleLineasProducto_vue_vue_type_template_id_77b560a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Comprobante-Encabezado.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Comprobante-Encabezado.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comprobante_Encabezado_vue_vue_type_template_id_6b927a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comprobante-Encabezado.vue?vue&type=template&id=6b927a80& */ "./resources/js/components/Comprobante-Encabezado.vue?vue&type=template&id=6b927a80&");
/* harmony import */ var _Comprobante_Encabezado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobante-Encabezado.vue?vue&type=script&lang=js& */ "./resources/js/components/Comprobante-Encabezado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comprobante_Encabezado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comprobante_Encabezado_vue_vue_type_template_id_6b927a80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comprobante_Encabezado_vue_vue_type_template_id_6b927a80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comprobante-Encabezado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comprobante-Encabezado.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-Encabezado.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Encabezado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-Encabezado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Encabezado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Encabezado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comprobante-Encabezado.vue?vue&type=template&id=6b927a80&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-Encabezado.vue?vue&type=template&id=6b927a80& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Encabezado_vue_vue_type_template_id_6b927a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-Encabezado.vue?vue&type=template&id=6b927a80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Encabezado.vue?vue&type=template&id=6b927a80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Encabezado_vue_vue_type_template_id_6b927a80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Encabezado_vue_vue_type_template_id_6b927a80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Comprobante-LineaDeProducto.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Comprobante-LineaDeProducto.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comprobante_LineaDeProducto_vue_vue_type_template_id_2165bafa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa& */ "./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa&");
/* harmony import */ var _Comprobante_LineaDeProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobante-LineaDeProducto.vue?vue&type=script&lang=js& */ "./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Comprobante_LineaDeProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comprobante_LineaDeProducto_vue_vue_type_template_id_2165bafa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comprobante_LineaDeProducto_vue_vue_type_template_id_2165bafa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comprobante-LineaDeProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-LineaDeProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_template_id_2165bafa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-LineaDeProducto.vue?vue&type=template&id=2165bafa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_template_id_2165bafa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_LineaDeProducto_vue_vue_type_template_id_2165bafa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Comprobante-Vendedor.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Comprobante-Vendedor.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comprobante_Vendedor_vue_vue_type_template_id_533bfeeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb& */ "./resources/js/components/Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb&");
/* harmony import */ var _Comprobante_Vendedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobante-Vendedor.vue?vue&type=script&lang=js& */ "./resources/js/components/Comprobante-Vendedor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comprobante_Vendedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comprobante_Vendedor_vue_vue_type_template_id_533bfeeb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comprobante_Vendedor_vue_vue_type_template_id_533bfeeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comprobante-Vendedor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comprobante-Vendedor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Comprobante-Vendedor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Vendedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-Vendedor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Vendedor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Vendedor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Vendedor_vue_vue_type_template_id_533bfeeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobante-Vendedor.vue?vue&type=template&id=533bfeeb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Vendedor_vue_vue_type_template_id_533bfeeb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobante_Vendedor_vue_vue_type_template_id_533bfeeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Comprobrante-Productos.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Comprobrante-Productos.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comprobrante_Productos_vue_vue_type_template_id_7bb30d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a& */ "./resources/js/components/Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a&");
/* harmony import */ var _Comprobrante_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comprobrante-Productos.vue?vue&type=script&lang=js& */ "./resources/js/components/Comprobrante-Productos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comprobrante_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comprobrante_Productos_vue_vue_type_template_id_7bb30d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comprobrante_Productos_vue_vue_type_template_id_7bb30d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comprobrante-Productos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comprobrante-Productos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Comprobrante-Productos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobrante_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobrante-Productos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobrante-Productos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobrante_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobrante_Productos_vue_vue_type_template_id_7bb30d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comprobrante-Productos.vue?vue&type=template&id=7bb30d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobrante_Productos_vue_vue_type_template_id_7bb30d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comprobrante_Productos_vue_vue_type_template_id_7bb30d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Estadistica-Linea.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Estadistica-Linea.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Estadistica_Linea_vue_vue_type_template_id_ee83a8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Estadistica-Linea.vue?vue&type=template&id=ee83a8ea& */ "./resources/js/components/Estadistica-Linea.vue?vue&type=template&id=ee83a8ea&");
/* harmony import */ var _Estadistica_Linea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Estadistica-Linea.vue?vue&type=script&lang=js& */ "./resources/js/components/Estadistica-Linea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Estadistica_Linea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Estadistica_Linea_vue_vue_type_template_id_ee83a8ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Estadistica_Linea_vue_vue_type_template_id_ee83a8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Estadistica-Linea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Estadistica-Linea.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Estadistica-Linea.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Estadistica_Linea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Estadistica-Linea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Estadistica-Linea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Estadistica_Linea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Estadistica-Linea.vue?vue&type=template&id=ee83a8ea&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Estadistica-Linea.vue?vue&type=template&id=ee83a8ea& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Estadistica_Linea_vue_vue_type_template_id_ee83a8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Estadistica-Linea.vue?vue&type=template&id=ee83a8ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Estadistica-Linea.vue?vue&type=template&id=ee83a8ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Estadistica_Linea_vue_vue_type_template_id_ee83a8ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Estadistica_Linea_vue_vue_type_template_id_ee83a8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EstadisticaTipoDeProductos.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/EstadisticaTipoDeProductos.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstadisticaTipoDeProductos_vue_vue_type_template_id_5d7d6b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a& */ "./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a&");
/* harmony import */ var _EstadisticaTipoDeProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstadisticaTipoDeProductos.vue?vue&type=script&lang=js& */ "./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstadisticaTipoDeProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstadisticaTipoDeProductos_vue_vue_type_template_id_5d7d6b3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstadisticaTipoDeProductos_vue_vue_type_template_id_5d7d6b3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EstadisticaTipoDeProductos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaTipoDeProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EstadisticaTipoDeProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaTipoDeProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaTipoDeProductos_vue_vue_type_template_id_5d7d6b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaTipoDeProductos.vue?vue&type=template&id=5d7d6b3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaTipoDeProductos_vue_vue_type_template_id_5d7d6b3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaTipoDeProductos_vue_vue_type_template_id_5d7d6b3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EstadisticaVentas.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/EstadisticaVentas.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstadisticaVentas_vue_vue_type_template_id_6225a912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstadisticaVentas.vue?vue&type=template&id=6225a912& */ "./resources/js/components/EstadisticaVentas.vue?vue&type=template&id=6225a912&");
/* harmony import */ var _EstadisticaVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstadisticaVentas.vue?vue&type=script&lang=js& */ "./resources/js/components/EstadisticaVentas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EstadisticaVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstadisticaVentas_vue_vue_type_template_id_6225a912___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstadisticaVentas_vue_vue_type_template_id_6225a912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EstadisticaVentas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EstadisticaVentas.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EstadisticaVentas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EstadisticaVentas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaVentas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaVentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EstadisticaVentas.vue?vue&type=template&id=6225a912&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/EstadisticaVentas.vue?vue&type=template&id=6225a912& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaVentas_vue_vue_type_template_id_6225a912___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EstadisticaVentas.vue?vue&type=template&id=6225a912& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EstadisticaVentas.vue?vue&type=template&id=6225a912&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaVentas_vue_vue_type_template_id_6225a912___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadisticaVentas_vue_vue_type_template_id_6225a912___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FormularioDatosEmpresa.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FormularioDatosEmpresa.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormularioDatosEmpresa_vue_vue_type_template_id_1bdd60ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea& */ "./resources/js/components/FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea&");
/* harmony import */ var _FormularioDatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormularioDatosEmpresa.vue?vue&type=script&lang=js& */ "./resources/js/components/FormularioDatosEmpresa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormularioDatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormularioDatosEmpresa_vue_vue_type_template_id_1bdd60ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormularioDatosEmpresa_vue_vue_type_template_id_1bdd60ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormularioDatosEmpresa.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormularioDatosEmpresa.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FormularioDatosEmpresa.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormularioDatosEmpresa.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDatosEmpresa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDatosEmpresa_vue_vue_type_template_id_1bdd60ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDatosEmpresa.vue?vue&type=template&id=1bdd60ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDatosEmpresa_vue_vue_type_template_id_1bdd60ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDatosEmpresa_vue_vue_type_template_id_1bdd60ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FormularioDescripcionProducto.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/FormularioDescripcionProducto.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormularioDescripcionProducto_vue_vue_type_template_id_774ca700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormularioDescripcionProducto.vue?vue&type=template&id=774ca700& */ "./resources/js/components/FormularioDescripcionProducto.vue?vue&type=template&id=774ca700&");
/* harmony import */ var _FormularioDescripcionProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormularioDescripcionProducto.vue?vue&type=script&lang=js& */ "./resources/js/components/FormularioDescripcionProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormularioDescripcionProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormularioDescripcionProducto_vue_vue_type_template_id_774ca700___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormularioDescripcionProducto_vue_vue_type_template_id_774ca700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormularioDescripcionProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormularioDescripcionProducto.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/FormularioDescripcionProducto.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDescripcionProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormularioDescripcionProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDescripcionProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDescripcionProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FormularioDescripcionProducto.vue?vue&type=template&id=774ca700&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/FormularioDescripcionProducto.vue?vue&type=template&id=774ca700& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDescripcionProducto_vue_vue_type_template_id_774ca700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormularioDescripcionProducto.vue?vue&type=template&id=774ca700& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormularioDescripcionProducto.vue?vue&type=template&id=774ca700&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDescripcionProducto_vue_vue_type_template_id_774ca700___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormularioDescripcionProducto_vue_vue_type_template_id_774ca700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListaFormasDePago.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ListaFormasDePago.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaFormasDePago_vue_vue_type_template_id_6931b518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaFormasDePago.vue?vue&type=template&id=6931b518& */ "./resources/js/components/ListaFormasDePago.vue?vue&type=template&id=6931b518&");
/* harmony import */ var _ListaFormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaFormasDePago.vue?vue&type=script&lang=js& */ "./resources/js/components/ListaFormasDePago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListaFormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaFormasDePago_vue_vue_type_template_id_6931b518___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaFormasDePago_vue_vue_type_template_id_6931b518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListaFormasDePago.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListaFormasDePago.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ListaFormasDePago.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaFormasDePago.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaFormasDePago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListaFormasDePago.vue?vue&type=template&id=6931b518&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ListaFormasDePago.vue?vue&type=template&id=6931b518& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFormasDePago_vue_vue_type_template_id_6931b518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaFormasDePago.vue?vue&type=template&id=6931b518& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaFormasDePago.vue?vue&type=template&id=6931b518&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFormasDePago_vue_vue_type_template_id_6931b518___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaFormasDePago_vue_vue_type_template_id_6931b518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListaProveedores.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ListaProveedores.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListaProveedores_vue_vue_type_template_id_c60e7b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaProveedores.vue?vue&type=template&id=c60e7b18& */ "./resources/js/components/ListaProveedores.vue?vue&type=template&id=c60e7b18&");
/* harmony import */ var _ListaProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaProveedores.vue?vue&type=script&lang=js& */ "./resources/js/components/ListaProveedores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListaProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListaProveedores_vue_vue_type_template_id_c60e7b18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListaProveedores_vue_vue_type_template_id_c60e7b18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListaProveedores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListaProveedores.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ListaProveedores.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaProveedores.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaProveedores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaProveedores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListaProveedores.vue?vue&type=template&id=c60e7b18&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ListaProveedores.vue?vue&type=template&id=c60e7b18& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaProveedores_vue_vue_type_template_id_c60e7b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListaProveedores.vue?vue&type=template&id=c60e7b18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListaProveedores.vue?vue&type=template&id=c60e7b18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaProveedores_vue_vue_type_template_id_c60e7b18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaProveedores_vue_vue_type_template_id_c60e7b18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListadoProductos.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ListadoProductos.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoProductos_vue_vue_type_template_id_4d5f0f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=template&id=4d5f0f50& */ "./resources/js/components/ListadoProductos.vue?vue&type=template&id=4d5f0f50&");
/* harmony import */ var _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=script&lang=js& */ "./resources/js/components/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoProductos_vue_vue_type_template_id_4d5f0f50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoProductos_vue_vue_type_template_id_4d5f0f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListadoProductos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListadoProductos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListadoProductos.vue?vue&type=template&id=4d5f0f50&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ListadoProductos.vue?vue&type=template&id=4d5f0f50& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_4d5f0f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=template&id=4d5f0f50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListadoProductos.vue?vue&type=template&id=4d5f0f50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_4d5f0f50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_4d5f0f50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalAgregarFormaDePago.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/ModalAgregarFormaDePago.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalAgregarFormaDePago_vue_vue_type_template_id_21b73eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca& */ "./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca&");
/* harmony import */ var _ModalAgregarFormaDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalAgregarFormaDePago.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalAgregarFormaDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalAgregarFormaDePago_vue_vue_type_template_id_21b73eca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalAgregarFormaDePago_vue_vue_type_template_id_21b73eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalAgregarFormaDePago.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarFormaDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalAgregarFormaDePago.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarFormaDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarFormaDePago_vue_vue_type_template_id_21b73eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalAgregarFormaDePago.vue?vue&type=template&id=21b73eca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarFormaDePago_vue_vue_type_template_id_21b73eca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalAgregarFormaDePago_vue_vue_type_template_id_21b73eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalEditarFDP.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ModalEditarFDP.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalEditarFDP_vue_vue_type_template_id_9ac20096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalEditarFDP.vue?vue&type=template&id=9ac20096& */ "./resources/js/components/ModalEditarFDP.vue?vue&type=template&id=9ac20096&");
/* harmony import */ var _ModalEditarFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalEditarFDP.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalEditarFDP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalEditarFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalEditarFDP_vue_vue_type_template_id_9ac20096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalEditarFDP_vue_vue_type_template_id_9ac20096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalEditarFDP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalEditarFDP.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ModalEditarFDP.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalEditarFDP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditarFDP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarFDP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalEditarFDP.vue?vue&type=template&id=9ac20096&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ModalEditarFDP.vue?vue&type=template&id=9ac20096& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarFDP_vue_vue_type_template_id_9ac20096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalEditarFDP.vue?vue&type=template&id=9ac20096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalEditarFDP.vue?vue&type=template&id=9ac20096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarFDP_vue_vue_type_template_id_9ac20096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalEditarFDP_vue_vue_type_template_id_9ac20096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/AgregarCliente.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/AgregarCliente.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgregarCliente_vue_vue_type_template_id_22f816fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgregarCliente.vue?vue&type=template&id=22f816fa& */ "./resources/js/views/AgregarCliente.vue?vue&type=template&id=22f816fa&");
/* harmony import */ var _AgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgregarCliente.vue?vue&type=script&lang=js& */ "./resources/js/views/AgregarCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AgregarCliente.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgregarCliente_vue_vue_type_template_id_22f816fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgregarCliente_vue_vue_type_template_id_22f816fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AgregarCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AgregarCliente.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/AgregarCliente.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarCliente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/AgregarCliente.vue?vue&type=template&id=22f816fa&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/AgregarCliente.vue?vue&type=template&id=22f816fa& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_template_id_22f816fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AgregarCliente.vue?vue&type=template&id=22f816fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AgregarCliente.vue?vue&type=template&id=22f816fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_template_id_22f816fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgregarCliente_vue_vue_type_template_id_22f816fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/DatosEmpresa.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/DatosEmpresa.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatosEmpresa_vue_vue_type_template_id_5a61c9ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatosEmpresa.vue?vue&type=template&id=5a61c9ed& */ "./resources/js/views/DatosEmpresa.vue?vue&type=template&id=5a61c9ed&");
/* harmony import */ var _DatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatosEmpresa.vue?vue&type=script&lang=js& */ "./resources/js/views/DatosEmpresa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatosEmpresa.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatosEmpresa_vue_vue_type_template_id_5a61c9ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatosEmpresa_vue_vue_type_template_id_5a61c9ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DatosEmpresa.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DatosEmpresa.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/DatosEmpresa.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DatosEmpresa.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DatosEmpresa.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/DatosEmpresa.vue?vue&type=template&id=5a61c9ed&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/DatosEmpresa.vue?vue&type=template&id=5a61c9ed& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_template_id_5a61c9ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DatosEmpresa.vue?vue&type=template&id=5a61c9ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DatosEmpresa.vue?vue&type=template&id=5a61c9ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_template_id_5a61c9ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatosEmpresa_vue_vue_type_template_id_5a61c9ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/DetalleCliente.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/DetalleCliente.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetalleCliente_vue_vue_type_template_id_7000e5e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetalleCliente.vue?vue&type=template&id=7000e5e2& */ "./resources/js/views/DetalleCliente.vue?vue&type=template&id=7000e5e2&");
/* harmony import */ var _DetalleCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetalleCliente.vue?vue&type=script&lang=js& */ "./resources/js/views/DetalleCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetalleCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetalleCliente_vue_vue_type_template_id_7000e5e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetalleCliente_vue_vue_type_template_id_7000e5e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DetalleCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DetalleCliente.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/DetalleCliente.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetalleCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DetalleCliente.vue?vue&type=template&id=7000e5e2&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/DetalleCliente.vue?vue&type=template&id=7000e5e2& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleCliente_vue_vue_type_template_id_7000e5e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetalleCliente.vue?vue&type=template&id=7000e5e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetalleCliente.vue?vue&type=template&id=7000e5e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleCliente_vue_vue_type_template_id_7000e5e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetalleCliente_vue_vue_type_template_id_7000e5e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/DetallePresupuesto.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/DetallePresupuesto.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetallePresupuesto_vue_vue_type_template_id_491009ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetallePresupuesto.vue?vue&type=template&id=491009ca& */ "./resources/js/views/DetallePresupuesto.vue?vue&type=template&id=491009ca&");
/* harmony import */ var _DetallePresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetallePresupuesto.vue?vue&type=script&lang=js& */ "./resources/js/views/DetallePresupuesto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetallePresupuesto.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetallePresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetallePresupuesto_vue_vue_type_template_id_491009ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetallePresupuesto_vue_vue_type_template_id_491009ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DetallePresupuesto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DetallePresupuesto.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/DetallePresupuesto.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetallePresupuesto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DetallePresupuesto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/DetallePresupuesto.vue?vue&type=template&id=491009ca&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/DetallePresupuesto.vue?vue&type=template&id=491009ca& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_template_id_491009ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetallePresupuesto.vue?vue&type=template&id=491009ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DetallePresupuesto.vue?vue&type=template&id=491009ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_template_id_491009ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallePresupuesto_vue_vue_type_template_id_491009ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/EditarCliente.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/EditarCliente.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditarCliente_vue_vue_type_template_id_a23ba8a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarCliente.vue?vue&type=template&id=a23ba8a0& */ "./resources/js/views/EditarCliente.vue?vue&type=template&id=a23ba8a0&");
/* harmony import */ var _EditarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarCliente.vue?vue&type=script&lang=js& */ "./resources/js/views/EditarCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditarCliente.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarCliente_vue_vue_type_template_id_a23ba8a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarCliente_vue_vue_type_template_id_a23ba8a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EditarCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EditarCliente.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/EditarCliente.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCliente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/EditarCliente.vue?vue&type=template&id=a23ba8a0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/EditarCliente.vue?vue&type=template&id=a23ba8a0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_template_id_a23ba8a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCliente.vue?vue&type=template&id=a23ba8a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarCliente.vue?vue&type=template&id=a23ba8a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_template_id_a23ba8a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCliente_vue_vue_type_template_id_a23ba8a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/EditarPresupuesto.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/EditarPresupuesto.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditarPresupuesto_vue_vue_type_template_id_ccf4ac2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e& */ "./resources/js/views/EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e&");
/* harmony import */ var _EditarPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarPresupuesto.vue?vue&type=script&lang=js& */ "./resources/js/views/EditarPresupuesto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditarPresupuesto.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditarPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarPresupuesto_vue_vue_type_template_id_ccf4ac2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarPresupuesto_vue_vue_type_template_id_ccf4ac2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/EditarPresupuesto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/EditarPresupuesto.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/EditarPresupuesto.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarPresupuesto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarPresupuesto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_template_id_ccf4ac2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarPresupuesto.vue?vue&type=template&id=ccf4ac2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_template_id_ccf4ac2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarPresupuesto_vue_vue_type_template_id_ccf4ac2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* empty/unused harmony star reexport *//* harmony import */ var _EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditarProducto.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/EditarProducto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/js/views/FichaDeStock.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/FichaDeStock.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FichaDeStock_vue_vue_type_template_id_c0ba3b0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FichaDeStock.vue?vue&type=template&id=c0ba3b0a& */ "./resources/js/views/FichaDeStock.vue?vue&type=template&id=c0ba3b0a&");
/* harmony import */ var _FichaDeStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FichaDeStock.vue?vue&type=script&lang=js& */ "./resources/js/views/FichaDeStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FichaDeStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FichaDeStock_vue_vue_type_template_id_c0ba3b0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FichaDeStock_vue_vue_type_template_id_c0ba3b0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FichaDeStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FichaDeStock.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/FichaDeStock.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FichaDeStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FichaDeStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FichaDeStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FichaDeStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FichaDeStock.vue?vue&type=template&id=c0ba3b0a&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/FichaDeStock.vue?vue&type=template&id=c0ba3b0a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FichaDeStock_vue_vue_type_template_id_c0ba3b0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FichaDeStock.vue?vue&type=template&id=c0ba3b0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FichaDeStock.vue?vue&type=template&id=c0ba3b0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FichaDeStock_vue_vue_type_template_id_c0ba3b0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FichaDeStock_vue_vue_type_template_id_c0ba3b0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/FormasDePago.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/FormasDePago.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormasDePago_vue_vue_type_template_id_6b748eef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormasDePago.vue?vue&type=template&id=6b748eef& */ "./resources/js/views/FormasDePago.vue?vue&type=template&id=6b748eef&");
/* harmony import */ var _FormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormasDePago.vue?vue&type=script&lang=js& */ "./resources/js/views/FormasDePago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormasDePago_vue_vue_type_template_id_6b748eef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormasDePago_vue_vue_type_template_id_6b748eef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FormasDePago.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FormasDePago.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/FormasDePago.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormasDePago.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FormasDePago.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormasDePago_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FormasDePago.vue?vue&type=template&id=6b748eef&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/FormasDePago.vue?vue&type=template&id=6b748eef& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormasDePago_vue_vue_type_template_id_6b748eef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormasDePago.vue?vue&type=template&id=6b748eef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FormasDePago.vue?vue&type=template&id=6b748eef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormasDePago_vue_vue_type_template_id_6b748eef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormasDePago_vue_vue_type_template_id_6b748eef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/ListadoPresupuestos.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/ListadoPresupuestos.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoPresupuestos_vue_vue_type_template_id_5302193f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoPresupuestos.vue?vue&type=template&id=5302193f& */ "./resources/js/views/ListadoPresupuestos.vue?vue&type=template&id=5302193f&");
/* harmony import */ var _ListadoPresupuestos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoPresupuestos.vue?vue&type=script&lang=js& */ "./resources/js/views/ListadoPresupuestos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoPresupuestos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoPresupuestos_vue_vue_type_template_id_5302193f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoPresupuestos_vue_vue_type_template_id_5302193f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ListadoPresupuestos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ListadoPresupuestos.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ListadoPresupuestos.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPresupuestos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ListadoPresupuestos.vue?vue&type=template&id=5302193f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ListadoPresupuestos.vue?vue&type=template&id=5302193f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestos_vue_vue_type_template_id_5302193f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPresupuestos.vue?vue&type=template&id=5302193f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestos.vue?vue&type=template&id=5302193f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestos_vue_vue_type_template_id_5302193f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestos_vue_vue_type_template_id_5302193f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ListadoPresupuestosCliente.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/ListadoPresupuestosCliente.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoPresupuestosCliente_vue_vue_type_template_id_73be72eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb& */ "./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb&");
/* harmony import */ var _ListadoPresupuestosCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoPresupuestosCliente.vue?vue&type=script&lang=js& */ "./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoPresupuestosCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoPresupuestosCliente_vue_vue_type_template_id_73be72eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoPresupuestosCliente_vue_vue_type_template_id_73be72eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ListadoPresupuestosCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestosCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPresupuestosCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestosCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestosCliente_vue_vue_type_template_id_73be72eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ListadoPresupuestosCliente.vue?vue&type=template&id=73be72eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestosCliente_vue_vue_type_template_id_73be72eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPresupuestosCliente_vue_vue_type_template_id_73be72eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/MenuClientes.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/MenuClientes.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuClientes_vue_vue_type_template_id_6c53f0d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuClientes.vue?vue&type=template&id=6c53f0d7& */ "./resources/js/views/MenuClientes.vue?vue&type=template&id=6c53f0d7&");
/* harmony import */ var _MenuClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuClientes.vue?vue&type=script&lang=js& */ "./resources/js/views/MenuClientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuClientes_vue_vue_type_template_id_6c53f0d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuClientes_vue_vue_type_template_id_6c53f0d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MenuClientes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MenuClientes.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/MenuClientes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuClientes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuClientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MenuClientes.vue?vue&type=template&id=6c53f0d7&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/MenuClientes.vue?vue&type=template&id=6c53f0d7& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuClientes_vue_vue_type_template_id_6c53f0d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuClientes.vue?vue&type=template&id=6c53f0d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuClientes.vue?vue&type=template&id=6c53f0d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuClientes_vue_vue_type_template_id_6c53f0d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuClientes_vue_vue_type_template_id_6c53f0d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/MenuComercial.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/MenuComercial.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuComercial_vue_vue_type_template_id_a7cb565e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuComercial.vue?vue&type=template&id=a7cb565e& */ "./resources/js/views/MenuComercial.vue?vue&type=template&id=a7cb565e&");
/* harmony import */ var _MenuComercial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuComercial.vue?vue&type=script&lang=js& */ "./resources/js/views/MenuComercial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuComercial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuComercial_vue_vue_type_template_id_a7cb565e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuComercial_vue_vue_type_template_id_a7cb565e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MenuComercial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MenuComercial.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/MenuComercial.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComercial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComercial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuComercial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComercial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MenuComercial.vue?vue&type=template&id=a7cb565e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/MenuComercial.vue?vue&type=template&id=a7cb565e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComercial_vue_vue_type_template_id_a7cb565e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComercial.vue?vue&type=template&id=a7cb565e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MenuComercial.vue?vue&type=template&id=a7cb565e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComercial_vue_vue_type_template_id_a7cb565e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComercial_vue_vue_type_template_id_a7cb565e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/NuevoPresupuesto.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/NuevoPresupuesto.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NuevoPresupuesto_vue_vue_type_template_id_6d0b839b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NuevoPresupuesto.vue?vue&type=template&id=6d0b839b& */ "./resources/js/views/NuevoPresupuesto.vue?vue&type=template&id=6d0b839b&");
/* harmony import */ var _NuevoPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NuevoPresupuesto.vue?vue&type=script&lang=js& */ "./resources/js/views/NuevoPresupuesto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NuevoPresupuesto.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NuevoPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NuevoPresupuesto_vue_vue_type_template_id_6d0b839b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NuevoPresupuesto_vue_vue_type_template_id_6d0b839b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NuevoPresupuesto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/NuevoPresupuesto.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/NuevoPresupuesto.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoPresupuesto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoPresupuesto.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/NuevoPresupuesto.vue?vue&type=template&id=6d0b839b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/NuevoPresupuesto.vue?vue&type=template&id=6d0b839b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_template_id_6d0b839b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoPresupuesto.vue?vue&type=template&id=6d0b839b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NuevoPresupuesto.vue?vue&type=template&id=6d0b839b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_template_id_6d0b839b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoPresupuesto_vue_vue_type_template_id_6d0b839b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/TablasDatosClientes.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/TablasDatosClientes.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablasDatosClientes_vue_vue_type_template_id_7611b85c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablasDatosClientes.vue?vue&type=template&id=7611b85c& */ "./resources/js/views/TablasDatosClientes.vue?vue&type=template&id=7611b85c&");
/* harmony import */ var _TablasDatosClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablasDatosClientes.vue?vue&type=script&lang=js& */ "./resources/js/views/TablasDatosClientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TablasDatosClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablasDatosClientes_vue_vue_type_template_id_7611b85c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablasDatosClientes_vue_vue_type_template_id_7611b85c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TablasDatosClientes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TablasDatosClientes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/TablasDatosClientes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablasDatosClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TablasDatosClientes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TablasDatosClientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TablasDatosClientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TablasDatosClientes.vue?vue&type=template&id=7611b85c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/TablasDatosClientes.vue?vue&type=template&id=7611b85c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablasDatosClientes_vue_vue_type_template_id_7611b85c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TablasDatosClientes.vue?vue&type=template&id=7611b85c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TablasDatosClientes.vue?vue&type=template&id=7611b85c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablasDatosClientes_vue_vue_type_template_id_7611b85c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablasDatosClientes_vue_vue_type_template_id_7611b85c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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