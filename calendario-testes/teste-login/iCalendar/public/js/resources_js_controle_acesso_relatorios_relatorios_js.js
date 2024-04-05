"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_controle_acesso_relatorios_relatorios_js"],{

/***/ "./resources/js/controle_acesso/relatorios/dataTable.js":
/*!**************************************************************!*\
  !*** ./resources/js/controle_acesso/relatorios/dataTable.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datatableAcessos: () => (/* binding */ datatableAcessos),
/* harmony export */   datatableVNT: () => (/* binding */ datatableVNT),
/* harmony export */   tableAcessos: () => (/* binding */ tableAcessos)
/* harmony export */ });
var tableAcessos;
var BASE_URL = window.location.origin;
var datatableVNT = function datatableVNT(data) {
  if ($.fn.DataTable.isDataTable("#noTerminalTable")) {
    tableAcessos.clear().draw();
    tableAcessos.destroy();
  }
  tableAcessos = $("#noTerminalTable").DataTable({
    data: data,
    responsive: true,
    searching: true,
    ordering: false,
    select: true,
    language: {
      url: "".concat(BASE_URL, "/dataTable_pt-br.json")
    },
    columns: [{
      data: "id",
      title: "ID"
    }, {
      data: "veiculos.placa",
      title: "Placa"
    }, {
      data: "veiculos.natureza",
      title: "Tipo"
    }, {
      data: "motorista.nome",
      title: "Motorista"
    }, {
      data: "motorista.cnh",
      title: "CNH"
    }, {
      data: "created_at",
      title: "Data/Hora",
      render: function render(data, type, row) {
        return moment(data).format('DD/MM/YYYY HH:mm');
      }
    }],
    order: [[5, 'desc']]
  });
};
var datatableAcessos = function datatableAcessos(data) {
  if ($.fn.DataTable.isDataTable("#acessoslTable")) {
    tableAcessos.clear().draw();
    tableAcessos.destroy();
  }
  tableAcessos = $("#acessoslTable").DataTable({
    data: data,
    responsive: true,
    searching: true,
    // ordering: false,
    select: false,
    language: {
      url: "".concat(BASE_URL, "/dataTable_pt-br.json")
    },
    columns: [{
      data: "id",
      title: "ID"
    }, {
      data: "veiculos.placa",
      title: "Placa"
    }, {
      data: "veiculos.natureza",
      title: "Tipo"
    }, {
      data: "motorista.nome",
      title: "Motorista"
    }, {
      data: "motorista.cnh",
      title: "CNH"
    }, {
      data: "direcao",
      title: "Direção"
    }, {
      data: "created_at",
      title: "Data/Hora",
      render: function render(data, type, row) {
        return moment(data).format('DD/MM/YYYY HH:mm');
      }
    }],
    order: [[0, 'desc']]
  });
};

/***/ }),

/***/ "./resources/js/controle_acesso/relatorios/funcoes.js":
/*!************************************************************!*\
  !*** ./resources/js/controle_acesso/relatorios/funcoes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchRelatorioAcessos: () => (/* binding */ fetchRelatorioAcessos),
/* harmony export */   getVeiculoNoTerminal: () => (/* binding */ getVeiculoNoTerminal)
/* harmony export */ });
/* harmony import */ var _dataTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTable.js */ "./resources/js/controle_acesso/relatorios/dataTable.js");


var getVeiculoNoTerminal = function getVeiculoNoTerminal(id_unidade) {
  $.post('/relatorio/veiculosNoTerminal', {
    _token: $('meta[name="csrf-token"]').attr('content'),
    id_unidade: id_unidade
  }, function (data) {
    (0,_dataTable_js__WEBPACK_IMPORTED_MODULE_0__.datatableVNT)(data);
    data.forEach(function (element) {
      var svgHTML = "\n            <div class=\"m-1\" style=\"width: 140px; height: 43.875px;\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"135px\"\n                    height=\"43.875px\"\n                    style=\"border: 1px solid black;border-radius: 5px; box-shadow: 0px 0px 3px black;\">\n                    <rect width=\"100%\" height=\"20%\" style=\"fill:blue;\"></rect>\n                    <text x=\"50%\" y=\"16%\" text-anchor=\"middle\"\n                        style=\"font-family:'Arial'; font-size:7.5px; fill:white;\">BRASIL</text>\n                    <image x=\"1%\" y=\"1%\" width=\"18%\" height=\"18%\"\n                        xlink:href=\"https://logodownload.org/wp-content/uploads/2019/01/mercosul-logo-3.png\"></image>\n                    <!-- LOGO MERCOSUL -->\n                    <image x=\"81%\" y=\"1%\" width=\"18%\" height=\"18%\"\n                        xlink:href=\"https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image\">\n                    </image> <!-- QRCode -->\n                    <rect y=\"20%\" width=\"100%\" height=\"80%\" style=\"fill:white;\"></rect>\n                    <text x=\"5%\" y=\"90%\" text-anchor=\"middle\"\n                        style=\"font-family:'Arial'; font-size:7px; fill:black;\">BR</text>\n                    <image x=\"2%\" y=\"25%\" width=\"8%\" height=\"20.5%\"\n                        xlink:href=\"https://www.gov.br/inss/pt-br/centrais-de-conteudo/imagens/qr-code-novo-fw-300x300-png\">\n                    </image>\n                    <text id=\"placaSVG\" x=\"50%\" y=\"80%\" text-anchor=\"middle\"\n                        style=\"font-family:'FE Engschrift'; font-size:25px; fill:black;\">".concat(element.veiculos.placa, "</text> <!-- PLACA -->\n                </svg>\n            </div>\n            ");
      $('#boardPlaca').append(svgHTML);
    });
    $('#qtdVeiculosNoTerminal').html(data.length);
  }, 'json').fail(function (xhr, status, error) {
    console.error('Erro na requisição POST:', error);
  });
};
var fetchRelatorioAcessos = function fetchRelatorioAcessos(dataInicioRel, dataFimRel, placaRel, motoristaRel, cnhRel, cpfRel) {
  cpfRel = cpfRel.replace(/[.-]/g, '');
  $.post('/relatorio/acessoVeiculos', {
    _token: $('meta[name="csrf-token"]').attr('content'),
    data_inicial: dataInicioRel,
    data_final: dataFimRel,
    motorista: motoristaRel,
    placa: placaRel,
    cpf: cpfRel,
    cnh: cnhRel
  }, function (data) {
    (0,_dataTable_js__WEBPACK_IMPORTED_MODULE_0__.datatableAcessos)(data);
    if (data.mensagem) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: data.mensagem
      });
    }
  }, 'json').fail(function (xhr, status, error) {
    if ($.fn.DataTable.isDataTable("#acessoslTable")) {
      _dataTable_js__WEBPACK_IMPORTED_MODULE_0__.tableAcessos.clear().draw();
      _dataTable_js__WEBPACK_IMPORTED_MODULE_0__.tableAcessos.destroy();
    }
    console.error('Erro na requisição POST:', error);
  });
};

/***/ }),

/***/ "./resources/js/controle_acesso/relatorios/relatorios.js":
/*!***************************************************************!*\
  !*** ./resources/js/controle_acesso/relatorios/relatorios.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRelatorios: () => (/* binding */ initRelatorios)
/* harmony export */ });
/* harmony import */ var _funcoes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes.js */ "./resources/js/controle_acesso/relatorios/funcoes.js");
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elementos/index.js */ "./resources/js/elementos/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function initRelatorios() {
  return _initRelatorios.apply(this, arguments);
}
function _initRelatorios() {
  _initRelatorios = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.getVeiculoNoTerminal)(259);
          $('#buscarRelAcessos').click(function () {
            (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchRelatorioAcessos)(_elementos_index_js__WEBPACK_IMPORTED_MODULE_1__.dataInicioRel.val(), _elementos_index_js__WEBPACK_IMPORTED_MODULE_1__.dataFimRel.val(), _elementos_index_js__WEBPACK_IMPORTED_MODULE_1__.placaRel.val(), _elementos_index_js__WEBPACK_IMPORTED_MODULE_1__.motoristaRel.val(), _elementos_index_js__WEBPACK_IMPORTED_MODULE_1__.cnhRel.val(), _elementos_index_js__WEBPACK_IMPORTED_MODULE_1__.cpfRel.val());
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _initRelatorios.apply(this, arguments);
}

/***/ })

}]);