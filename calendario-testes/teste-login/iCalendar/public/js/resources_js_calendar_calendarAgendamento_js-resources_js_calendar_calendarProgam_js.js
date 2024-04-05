(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_calendar_calendarAgendamento_js-resources_js_calendar_calendarProgam_js"],{

/***/ "./resources/js/calendar/CalendarConfigClass.js":
/*!******************************************************!*\
  !*** ./resources/js/calendar/CalendarConfigClass.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configCalendar: () => (/* binding */ configCalendar)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CarregarConfiguracoesCalendar = /*#__PURE__*/function () {
  function CarregarConfiguracoesCalendar() {
    _classCallCheck(this, CarregarConfiguracoesCalendar);
  }
  return _createClass(CarregarConfiguracoesCalendar, [{
    key: "carregarConfiguracoes",
    value: function carregarConfiguracoes() {
      return new Promise(function (resolve, reject) {
        var requestBody = {
          id_unidade_negocio: 5
        };
        fetch('/calendar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var config = data[0];
          resolve({
            headerToolbar: JSON.parse(config.headerToolbar),
            slotDuration: config.slotDuration,
            slotMaxTime: config.slotMaxTime,
            buttonText: JSON.parse(config.buttonText),
            editable: config.editable,
            dayMaxEvents: config.dayMaxEvents,
            locale: config.locale,
            allDayText: config.allDayText,
            navLinks: config.navLinks,
            selectable: config.selectable,
            selectMirror: config.selectMirror
          });
        })["catch"](function (error) {
          console.error('Erro ao buscar configurações do calendar:', error);
          reject(error);
        });
      });
    }
  }]);
}();
var configCalendar = new CarregarConfiguracoesCalendar();

/***/ }),

/***/ "./resources/js/calendar/calendarAgendamento.js":
/*!******************************************************!*\
  !*** ./resources/js/calendar/calendarAgendamento.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   id_cliente: () => (/* binding */ id_cliente),
/* harmony export */   id_ope_Janela: () => (/* binding */ id_ope_Janela),
/* harmony export */   initCalendarAgendamento: () => (/* binding */ initCalendarAgendamento),
/* harmony export */   janelaEventEnd: () => (/* binding */ janelaEventEnd),
/* harmony export */   janelaEventStar: () => (/* binding */ janelaEventStar),
/* harmony export */   janelaProgram: () => (/* binding */ janelaProgram)
/* harmony export */ });
/* harmony import */ var _CalendarConfigClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarConfigClass.js */ "./resources/js/calendar/CalendarConfigClass.js");
/* harmony import */ var _calendarProgam_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarProgam.js */ "./resources/js/calendar/calendarProgam.js");
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elementos/index.js */ "./resources/js/elementos/index.js");
/* harmony import */ var _calendarBloqueio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendarBloqueio.js */ "./resources/js/calendar/calendarBloqueio.js");
/* harmony import */ var _programar_importar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../programar/importar.js */ "./resources/js/programar/importar.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var config, janelaProgram, id_cliente, janelaEventStar, janelaEventEnd, id_ope_Janela;





function initCalendarAgendamento() {
  return _initCalendarAgendamento.apply(this, arguments);
}
function _initCalendarAgendamento() {
  _initCalendarAgendamento = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var calendarAgendamento, loadCalendarAndConfig, _loadCalendarAndConfig, returnOptions, calendarLoad, showCustomContextMenu, showProgram, editEvent, deleteEvent, newWindoWSubmit, updateWindowSubmit;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          updateWindowSubmit = function _updateWindowSubmit(event) {
            event.preventDefault();
            var operacao = document.getElementById('select-operacao-edit');
            var clienteInput = document.getElementById('select-cliente-edit');
            var startDateInput = document.getElementById('start-date-edit');
            var endDateInput = document.getElementById('end-date-edit');
            var editid = document.getElementById('edit-id');
            var diaTodoEdit = document.getElementById('dia-todo-edit');

            // retrieve the form input values
            if (endDateInput.value < startDateInput.value) {
              _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.dangerAlert.style.display = 'block';
              return;
            }
            var updateEvent = {
              id: editid.value,
              id_operacao: operacao.value,
              datahora_inicio: startDateInput.value,
              datahora_fim: endDateInput.value,
              dia_todo: diaTodoEdit.checked,
              id_cliente: clienteInput.value
            };
            Swal.fire({
              title: "Tem certeza que deseja salvar as alterações?",
              showDenyButton: true,
              confirmButtonText: "Confirmar",
              denyButtonText: "Cancelar"
            }).then(function (result) {
              if (result.isConfirmed) {
                Swal.fire("Editado!", "", "success");
                fetch('/janelas/update', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updateEvent)
                }).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  var eventToRemove = calendarAgendamento.getEventById(updateEvent.id);
                  eventToRemove.remove();
                  var operationTitles = {
                    1: {
                      title: 'E->Descarregamento de navio',
                      color: '#0000FF'
                    },
                    2: {
                      title: 'S->Ensaque para venda',
                      color: '#00BFFF'
                    },
                    3: {
                      title: 'E->Transferência do cliente',
                      color: '#4682B4'
                    },
                    4: {
                      title: 'S->Transferência para o cliente',
                      color: '#B0C4DE'
                    }
                  };
                  if (operationTitles.hasOwnProperty(operacao.value)) {
                    var title = operationTitles[operacao.value].title;
                    var backgroundColor = operationTitles[operacao.value].color;
                  }
                  calendarAgendamento.addEvent({
                    id: updateEvent.id,
                    title: title,
                    backgroundColor: backgroundColor,
                    start: updateEvent.datahora_inicio,
                    end: updateEvent.datahora_fim,
                    allDay: updateEvent.dia_todo
                  });
                })["catch"](function (error) {
                  console.error('Erro ao inserir evento:', error);
                });
              } else if (result.isDenied) {
                Swal.fire("Alterações não foram salvas", "", "info");
              }
            });
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.editModal.hide();
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.form.reset();
          };
          newWindoWSubmit = function _newWindoWSubmit(event) {
            event.preventDefault();
            var operacao = document.getElementById('select-operacao').value;
            var cliente = document.getElementById('select-cliente').value;
            var startDateInput = document.getElementById('start-date');
            var endDateInput = document.getElementById('end-date');
            var checkedInput = document.getElementById('dia-todo');
            if (endDateInput.value < startDateInput.value) {
              _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.dangerAlert.style.display = 'block';
              return;
            }
            var newEvent = {
              unidade: 258,
              cliente: cliente,
              id_operacao: operacao,
              start: startDateInput.value,
              end: endDateInput.value,
              allDay: checkedInput.checked
            };
            fetch('/janelas/insert', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newEvent)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              var end = moment(data.evento.datahora_fim).format('YYYY-MM-DD HH:mm:ss');
              if (newEvent.allDay) {
                end = moment(data.evento.datahora_fim).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss');
              }
              newEvent['id'] = data.evento.id;
              newEvent['extendedProps'] = data.operacao.id;
              newEvent['extendedProps'] = data.id_cliente;
              newEvent['title'] = data.operacao.descricao;
              newEvent['backgroundColor'] = data.operacao.cor;
              newEvent['start'] = data.evento.datahora_inicio;
              newEvent['end'] = end;
              newEvent['allDay'] = data.evento.dia_todo;
              calendarAgendamento.addEvent(newEvent);
              console.log(newEvent);
            })["catch"](function (error) {
              console.error('Erro ao inserir evento:', error);
            });
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.myModal.hide();
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.form.reset();
          };
          deleteEvent = function _deleteEvent() {
            var eventId = window.currentEvent.id;
            Swal.fire({
              title: "Você tem certeza que deseja excluir a janela?",
              text: "Não será possivel reverter essa ação!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              cancelButtonText: "Cancelar",
              confirmButtonText: "Sim, excluir!"
            }).then(function (result) {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deletado!",
                  text: "Sua janela foi deletada.",
                  icon: "success"
                });
                fetch('/delete-janela/' + eventId, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  console.log(data.message);
                  // Atualize o calendário ou a interface do usuário conforme necessário
                  window.currentEvent.remove();
                })["catch"](function (error) {
                  console.error('Erro ao deletar evento:', error);
                });
              }
            });
          };
          editEvent = function _editEvent() {
            var titleInput = document.getElementById('select-operacao-edit');
            var clienteInput = document.getElementById('select-cliente-edit');
            var startDateInput = document.getElementById('start-date-edit');
            var endDateInput = document.getElementById('end-date-edit');
            var checkedInput = document.getElementById('dia-todo-edit');
            var editid = document.getElementById('edit-id');
            var eventId = window.currentEvent.id;
            var dataToSend = {
              id: eventId
            };
            var requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToSend)
            };
            fetch('/janela', requestOptions).then(function (response) {
              return response.json();
            }).then(function (data) {
              titleInput.value = data[0].id_operacao;
              clienteInput.value = data[0].id_cliente;
              editid.value = data[0].id;
              startDateInput.value = data[0].datahora_inicio;
              endDateInput.value = data[0].datahora_fim;
              checkedInput.checked = data[0].dia_todo;
            })["catch"](function (error) {
              console.error('Erro ao buscar dados da janela:', error);
            });
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.editModal.show();
          };
          showProgram = function _showProgram() {
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.importProgamModal.show();
          };
          showCustomContextMenu = function _showCustomContextMen(event) {
            window.currentEvent = event;
            function withModalHide(action) {
              return function () {
                action();
                _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.modalFuncoes.hide();
              };
            }
            $('#contexEdit').off('click').on('click', withModalHide(editEvent));
            $('#contexDelete').off('click').on('click', withModalHide(deleteEvent));
            $('#contexBloqueio').off('click').on('click', withModalHide(_calendarBloqueio_js__WEBPACK_IMPORTED_MODULE_3__.bloqueioEvent));
            console.log(event);
            if (event.extendedProps.id_ope === 1) {
              $('#contexProgramar').off('click').on('click', withModalHide(showProgram));
            } else if (event.extendedProps.id_operacao == 1) {
              $('#contexProgramar').off('click').on('click', withModalHide(showProgram));
            } else {
              $('#contexProgramar').off('click').on('click', withModalHide(_calendarProgam_js__WEBPACK_IMPORTED_MODULE_1__.progamEvent));
            }
          };
          _loadCalendarAndConfig = function _loadCalendarAndConfi2() {
            _loadCalendarAndConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _CalendarConfigClass_js__WEBPACK_IMPORTED_MODULE_0__.configCalendar.carregarConfiguracoes();
                  case 3:
                    config = _context2.sent;
                    if (_elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.calendarEl) {
                      calendarLoad();
                      returnOptions();
                    }
                    _context2.next = 10;
                    break;
                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);
                    console.error('Erro ao carregar configurações:', _context2.t0);
                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, null, [[0, 7]]);
            }));
            return _loadCalendarAndConfig.apply(this, arguments);
          };
          loadCalendarAndConfig = function _loadCalendarAndConfi() {
            return _loadCalendarAndConfig.apply(this, arguments);
          };
          loadCalendarAndConfig();
          returnOptions = function returnOptions() {
            fetch('/clientes').then(function (response) {
              return response.json();
            }).then(function (data) {
              data.forEach(function (cl) {
                var optionCliente = new Option(cl.nome, cl.id);
                var optionEditCliente = new Option(cl.nome, cl.id);
                _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.selectEditCliente.add(optionEditCliente);
                _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.selectCliente.add(optionCliente);
              });
            });
            fetch('/operacao').then(function (response) {
              return response.json();
            }).then(function (data) {
              data.forEach(function (op) {
                var optionOperacao = new Option(op.descricao, op.id);
                var optionEditOperacao = new Option(op.descricao, op.id);
                _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.selectOperacao.add(optionOperacao);
                _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.selectEditOperacao.add(optionEditOperacao);
              });
            })["catch"](function (error) {
              return console.error('Erro:', error);
            });
          };
          calendarLoad = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var screenHeight;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    screenHeight = window.innerHeight;
                    if (_elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.calendarEl) {
                      calendarAgendamento = new FullCalendar.Calendar(_elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.calendarEl, {
                        titleFormat: {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        },
                        contentHeight: screenHeight,
                        headerToolbar: config.headerToolbar,
                        slotDuration: config.slotDuration,
                        slotMaxTime: config.slotMaxTime,
                        buttonText: config.buttonText,
                        editable: config.editable,
                        dayMaxEvents: config.dayMaxEvents,
                        events: function events(fetchInfo, successCallback, failureCallback) {
                          $.ajax({
                            url: '/janelas',
                            type: 'GET',
                            dataType: 'json',
                            data: {
                              start: fetchInfo.startStr,
                              // Início da faixa de datas visível
                              end: fetchInfo.endStr // Fim da faixa de datas visível
                            },
                            success: function success(data) {
                              var events = data.map(function (element) {
                                var end = element.dia_todo ? moment(element.datahora_fim).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss') : element.datahora_fim;
                                return {
                                  id: element.id,
                                  title: element.operacao.descricao,
                                  start: element.datahora_inicio,
                                  end: end,
                                  backgroundColor: element.operacao.cor,
                                  allDay: element.dia_todo,
                                  id_ope: element.operacao.id,
                                  cliente: element.id_cliente
                                };
                              });
                              successCallback(events);
                            },
                            error: function error() {
                              failureCallback();
                            }
                          });
                        },
                        locale: config.locale,
                        allDayText: config.allDayText,
                        navLinks: config.navLinks,
                        selectable: config.selectable,
                        selectMirror: config.selectMirror,
                        select: function select(arg) {
                          var startDateInput = document.getElementById('start-date');
                          var endDateInput = document.getElementById('end-date');
                          var checkedInput = document.getElementById('dia-todo');
                          var dateStrStart = new Date(arg.startStr);
                          var dateStrEnd = new Date(arg.endStr);
                          if (arg.allDay) {
                            dateStrStart = moment(dateStrStart).add(1, 'days').format('YYYY-MM-DD') + ' 00:00';
                            dateStrEnd = moment(dateStrEnd).format('YYYY-MM-DD') + ' 23:59';
                          } else {
                            dateStrStart = moment(dateStrStart).format('YYYY-MM-DD HH:mm:ss');
                            dateStrEnd = moment(dateStrEnd).format('YYYY-MM-DD HH:mm:ss');
                          }
                          startDateInput.value = dateStrStart;
                          endDateInput.value = dateStrEnd;
                          checkedInput.checked = arg.allDay;
                          _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.myModal.show();
                          _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.myModal._element.addEventListener('hide.bs.modal', function () {
                            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.dangerAlert.style.display = 'none';
                            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.form.reset();
                          });
                          calendarAgendamento.unselect();
                        },
                        eventClick: function eventClick(arg) {
                          // Capta o evento de click sobre o evento
                          janelaProgram = arg.event.id;
                          id_ope_Janela = arg.event.extendedProps.id_ope;
                          id_cliente = arg.event.extendedProps.cliente;
                          janelaEventStar = arg.event.start;
                          janelaEventEnd = arg.event.end;
                          showCustomContextMenu(arg.event);
                          _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.modalFuncoes.show();
                        },
                        eventResize: function eventResize(arg) {
                          var endDate = arg.event.end;
                          if (endDate.getHours() === 0) {
                            endDate = new Date(endDate.getTime() - 1000);
                          }
                          var formattedStart = moment(arg.event.start).format('YYYY-MM-DD HH:mm:ss');
                          var formattedEnd = arg.event.end ? moment(endDate).format('YYYY-MM-DD HH:mm:ss') : null;
                          var updateEvent = {
                            id: arg.event.id,
                            datahora_inicio: formattedStart,
                            datahora_fim: formattedEnd
                          };
                          fetch('/janelas/update', {
                            method: 'PUT',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(updateEvent)
                          }).then(function (response) {
                            return response.json();
                          }).then(function (data) {
                            console.log(data);
                          })["catch"](function (error) {
                            console.error('Erro:', error);
                          });
                        },
                        eventDrop: function eventDrop(arg) {
                          var formattedStart = moment(arg.event.start).format('YYYY-MM-DD HH:mm:ss');
                          var formattedEnd = arg.event.end ? moment(arg.event.end).format('YYYY-MM-DD HH:mm:ss') : moment(arg.event.start).format('YYYY-MM-DD') + ' 23:59:00';
                          var updateEvent = {
                            id: arg.event.id,
                            dia_todo: arg.event.allDay,
                            datahora_inicio: formattedStart,
                            datahora_fim: formattedEnd
                          };
                          fetch('/janelas/update', {
                            method: 'PUT',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(updateEvent)
                          }).then(function (response) {
                            return response.json();
                          }).then(function (data) {
                            console.log(data);
                          })["catch"](function (error) {
                            console.error('Erro:', error);
                          });
                        }
                      });
                      calendarAgendamento.render();
                    }
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function calendarLoad() {
              return _ref.apply(this, arguments);
            };
          }(); // Insert event
          _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.form.addEventListener('submit', newWindoWSubmit);
          // Update event

          _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.formEdit.addEventListener('submit', updateWindowSubmit);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _initCalendarAgendamento.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/calendar/calendarBloqueio.js":
/*!***************************************************!*\
  !*** ./resources/js/calendar/calendarBloqueio.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bloqueioEvent: () => (/* binding */ bloqueioEvent)
/* harmony export */ });
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementos/index.js */ "./resources/js/elementos/index.js");
/* harmony import */ var _CalendarConfigClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarConfigClass.js */ "./resources/js/calendar/CalendarConfigClass.js");
/* harmony import */ var _fetchEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchEvents.js */ "./resources/js/calendar/fetchEvents.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var config;
function loadCalendarAndConfig() {
  return _loadCalendarAndConfig.apply(this, arguments);
}
function _loadCalendarAndConfig() {
  _loadCalendarAndConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _CalendarConfigClass_js__WEBPACK_IMPORTED_MODULE_1__.configCalendar.carregarConfiguracoes();
        case 3:
          config = _context.sent;
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Erro ao carregar configurações:', _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _loadCalendarAndConfig.apply(this, arguments);
}
loadCalendarAndConfig();
var calendarBlock;
function bloqueioEvent() {
  var eventStart = moment(window.currentEvent.start).format('YYYY-MM-DD');
  var eventEnd = moment(window.currentEvent.end).format('YYYY-MM-DD');
  var eventId = window.currentEvent.id;
  var screenHeight = window.innerHeight;
  (0,_fetchEvents_js__WEBPACK_IMPORTED_MODULE_2__.fetchJanelaBloqueio)(eventId).then(function (arrayBloqs) {
    calendarBlock = new FullCalendar.Calendar(_elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.calendarElBlock, {
      titleFormat: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      contentHeight: screenHeight,
      headerToolbar: config.headerToolbar,
      initialView: 'timeGrid',
      events: arrayBloqs,
      visibleRange: {
        start: eventStart,
        end: eventEnd
      },
      initialDate: eventStart,
      slotDuration: config.slotDuration,
      slotMaxTime: config.slotMaxTime,
      buttonText: config.buttonText,
      editable: config.editable,
      dayMaxEvents: config.dayMaxEvents,
      locale: config.locale,
      allDayText: config.allDayText,
      navLinks: config.navLinks,
      selectable: config.selectable,
      selectMirror: config.selectMirror,
      viewDidMount: function viewDidMount() {
        // Desabilita os botões depois que a visualização do calendário for montada
        $('#calendarBlock .fc-prev-button, #calendarBlock .fc-next-button,#calendarBlock .fc-dayGridMonth-button, #calendarBlock .fc-timeGridWeek-button,#calendarBlock .fc-timeGridDay-button,#calendarBlock .fc-listWeek-button').prop('disabled', true).addClass('disabled-button');
      },
      eventClick: function eventClick(arg) {
        arg.jsEvent.preventDefault();
        window.currentEvent = arg.event;
        var $contextMenu = $("#contextMenu");
        $contextMenu.css({
          display: "block",
          left: arg.jsEvent.pageX,
          top: arg.jsEvent.pageY
        });
        arg.jsEvent.stopPropagation();
      },
      select: function select(arg) {
        eventId = document.getElementById('event-id');
        _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.startDateInput.value = moment(arg.start).format('YYYY-MM-DD HH:mm:ss');
        _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.endDateInput.value = moment(arg.end).format('YYYY-MM-DD HH:mm:ss');
        eventId.value = window.currentEvent.id;
        _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.blockModalForm.show();
      }
    });
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.blockModal.show();
  });
  $('#block-edit').on('shown.bs.modal', function () {
    calendarBlock.render();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  // Insert bloq
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.formBlock.addEventListener('submit', function (event) {
    event.preventDefault();
    if (_elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.endDateInput.value < _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.startDateInput.value) {
      dangerAlert.style.display = 'block';
      return;
    }
    var newBlock = {
      janela: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.eventId.value,
      title: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.motivo.value,
      start: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.startDateInput.value,
      end: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.endDateInput.value,
      backgroundColor: '#FFA500'
    };
    fetch('janelas/bloqueio/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlock)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      newBlock['id'] = data.evento.id;
      console.log(newBlock);
      calendarBlock.addEvent(newBlock);
    })["catch"](function (error) {
      console.error('Erro ao inserir evento:', error);
    });
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.blockModalForm.hide();
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.formBlock.reset();
  });
  $('#menuActionEditar').click(function () {
    var eventId = window.currentEvent.id;
    console.log(eventId);
    fetch('/bloqueios/' + eventId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.motivoEdit.value = data[0].motivo;
      _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.startDateInputEdit.value = data[0].datahora_inicio;
      _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.endDateInputEdit.value = data[0].datahora_fim;
      _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.editidBloq.value = data[0].id;
    })["catch"](function (error) {
      console.error('Erro ao editar evento:', error);
    });
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.blockModalFormEdit.show();
    $('#contextMenu').hide();
  });
  $('#myFormBlock-edit').submit(function (event) {
    event.preventDefault();
    if (_elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.endDateInput.value < _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.startDateInput.value) {
      dangerAlert.style.display = 'block';
      return;
    }
    var updateEvent = {
      id: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.editidBloq.value,
      motivo: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.motivoEdit.value,
      datahora_inicio: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.startDateInputEdit.value,
      datahora_fim: _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.endDateInputEdit.value
    };
    Swal.fire({
      title: "Tem certeza que deseja salvar as alterações?",
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: "Cancelar"
    }).then(function (result) {
      if (result.isConfirmed) {
        Swal.fire("Editado!", "", "success");
        fetch('/bloqueios/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          body: JSON.stringify(updateEvent)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.blockModalFormEdit.hide();
          console.log(data);
          var eventToRemove = calendarBlock.getEventById(updateEvent.id);
          eventToRemove.remove();
          calendarBlock.addEvent({
            id: updateEvent.id,
            title: updateEvent.motivo,
            start: updateEvent.datahora_inicio,
            end: updateEvent.datahora_fim,
            allDay: updateEvent.dia_todo,
            backgroundColor: '#FFA500'
          });
        })["catch"](function (error) {
          console.error('Erro ao inserir evento:', error);
        });
      } else if (result.isDenied) {
        Swal.fire("Alterações não foram salvas", "", "info");
      }
    });
  });
  $('#menuActionExluir').click(function () {
    var eventId = window.currentEvent.id;
    Swal.fire({
      title: "Você tem certeza que deseja excluir o bloqueio?",
      text: "Não será possivel reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, excluir!"
    }).then(function (result) {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deletado!",
          text: "O bloqueio foi deletada.",
          icon: "success"
        });
        fetch('/delete-bloqueio/' + eventId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data.message);
          window.currentEvent.remove();
        })["catch"](function (error) {
          console.error('Erro ao deletar evento:', error);
        });
      }
    });
    $('#contextMenu').hide();
  });
  $(document).click(function (event) {
    if (!$(event.target).closest('#contextMenu').length) {
      $('#contextMenu').hide();
    }
  });
});

/***/ }),

/***/ "./resources/js/calendar/calendarProgam.js":
/*!*************************************************!*\
  !*** ./resources/js/calendar/calendarProgam.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calendarStart: () => (/* binding */ calendarStart),
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   oldEnd: () => (/* binding */ oldEnd),
/* harmony export */   oldStart: () => (/* binding */ oldStart),
/* harmony export */   progamEvent: () => (/* binding */ progamEvent),
/* harmony export */   selectEnd: () => (/* binding */ selectEnd),
/* harmony export */   selectEnd2: () => (/* binding */ selectEnd2),
/* harmony export */   selectStart: () => (/* binding */ selectStart),
/* harmony export */   selectStart2: () => (/* binding */ selectStart2),
/* harmony export */   slotEnd: () => (/* binding */ slotEnd),
/* harmony export */   slotStart: () => (/* binding */ slotStart)
/* harmony export */ });
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementos/index.js */ "./resources/js/elementos/index.js");
/* harmony import */ var _calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarAgendamento.js */ "./resources/js/calendar/calendarAgendamento.js");
/* harmony import */ var _CalendarConfigClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarConfigClass.js */ "./resources/js/calendar/CalendarConfigClass.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var config, calendarStart, oldStart, oldEnd, slotStart, slotEnd, selectStart, selectEnd, selectStart2, selectEnd2;
function loadCalendarAndConfig() {
  return _loadCalendarAndConfig.apply(this, arguments);
}
function _loadCalendarAndConfig() {
  _loadCalendarAndConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _CalendarConfigClass_js__WEBPACK_IMPORTED_MODULE_2__.configCalendar.carregarConfiguracoes();
        case 3:
          config = _context.sent;
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Erro ao carregar configurações:', _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _loadCalendarAndConfig.apply(this, arguments);
}
loadCalendarAndConfig();
function progamEvent() {
  var currentDate = moment().format('YYYY-MM-DD');
  var eventStartMoment = moment(_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaEventStar).format('YYYY-MM-DD');
  var screenHeight = window.innerHeight;
  if (currentDate > eventStartMoment) {
    calendarStart = currentDate;
  } else {
    calendarStart = eventStartMoment;
  }
  $.get('/janelas/bloqueios/' + _calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaProgram, function (data) {
    var intervalosBloqueados = data.map(function (element) {
      return {
        id: element.id,
        title: element.motivo,
        start: element.datahora_inicio,
        end: element.datahora_fim,
        id_janela: element.id_janela
      };
    });
    var calendarProg = new FullCalendar.Calendar(_elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.calendarElProg, {
      titleFormat: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      contentHeight: screenHeight,
      headerToolbar: config.headerToolbar,
      visibleRange: {
        start: calendarStart,
        end: _calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaEventEnd
      },
      initialDate: calendarStart,
      initialView: 'timeGrid',
      slotDuration: config.slotDuration,
      slotMaxTime: config.slotMaxTime,
      buttonText: config.buttonText,
      editable: config.editable,
      dayMaxEvents: config.dayMaxEvents,
      locale: config.locale,
      allDayText: config.allDayText,
      navLinks: config.navLinks,
      selectable: config.selectable,
      selectMirror: config.selectMirror,
      viewDidMount: function viewDidMount() {
        // Desabilita os botões depois que a visualização do calendário for montada
        $('#calendarProg .fc-prev-button, #calendarProg .fc-next-button,#calendarProg .fc-dayGridMonth-button, #calendarProg .fc-timeGridWeek-button,#calendarProg .fc-timeGridDay-button,#calendarProg .fc-listWeek-button').prop('disabled', true).addClass('disabled-button');
      },
      dateClick: function dateClick(arg) {
        if (arg.allDay) {
          slotStart = moment(arg.dateStr).format('YYYY-MM-DD') + ' 00:00';
          slotEnd = moment(arg.dateStr).format('YYYY-MM-DD') + ' 23:59';
        } else {
          slotStart = moment(arg.dateStr).format('YYYY-MM-DD HH:mm:ss');
          slotEnd = moment(arg.dateStr).add(2, 'hours').format('YYYY-MM-DD HH:mm:ss');
        }
        _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.importProgamModal.show();
      },
      selectAllow: function selectAllow(selectInfo) {
        eventEnd = moment(window.currentEvent.end).add(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
        eventStart = moment(window.currentEvent.start).format('YYYY-MM-DD HH:mm:ss');
        selectStart = moment(selectInfo.startStr).format('YYYY-MM-DD HH:mm:ss');
        selectEnd = moment(selectInfo.endStr).format('YYYY-MM-DD HH:mm:ss');
        selectStart2 = moment(selectInfo.startStr);
        selectEnd2 = moment(selectInfo.endStr);

        // Verifica se a seleção está fora do intervalo permitido
        if (selectStart < eventStart || selectEnd > eventEnd) {
          return false; // Bloqueia a seleção fora do intervalo permitido
        }

        // Verifica se o intervalo selecionado se sobrepõe a qualquer intervalo bloqueado
        for (var i = 0; i < intervalosBloqueados.length; i++) {
          var bloqueioStart = moment(intervalosBloqueados[i].start);
          var bloqueioEnd = moment(intervalosBloqueados[i].end);
          if (selectStart2 < bloqueioEnd && selectEnd2 > bloqueioStart) {
            return false; // Bloqueia a seleção
          }
        }
        return true; // Permite a seleção
      }
    });
    calendarProg.addEventSource(intervalosBloqueados.map(function (intervalo) {
      return {
        title: intervalo.title,
        start: intervalo.start,
        end: intervalo.end,
        rendering: 'background',
        color: '#A9A9A9',
        overlap: false // Impede que outros eventos sejam criados neste intervalo
      };
    }));
    calendarStart = moment(calendarProg.view.activeStart).subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
    var calendarEnd = moment(calendarProg.view.activeEnd).format('YYYY-MM-DD HH:mm:ss');
    var eventEnd = moment(window.currentEvent.end).format('YYYY-MM-DD HH:mm:ss');
    var eventStart = moment(window.currentEvent.start).format('YYYY-MM-DD HH:mm:ss');
    var currentDay = moment().format('YYYY-MM-DD HH:mm:ss');

    // Cria um evento de fundo para o intervalo antes do eventStart
    var beforeEvent = {
      title: 'Intervalo indisponivel',
      start: calendarStart,
      // início do calendário
      end: eventStart,
      // início do evento
      rendering: 'background',
      color: '#ffcccc'
    };
    var afterEvent = {
      title: 'Intervalo indisponivel',
      start: eventEnd,
      end: calendarEnd,
      rendering: 'background',
      color: '#ffcccc'
    };
    if (currentDay > eventEnd) {
      oldStart = eventStart;
      oldEnd = eventEnd;
    } else {
      oldStart = '';
      oldEnd = '';
    }
    var oldEvent = {
      title: 'Intervalo indisponivel',
      start: oldStart,
      end: oldEnd,
      rendering: 'background',
      color: '#ffcccc'
    };

    // Adicionando os eventos a um array
    var backgroundEvents = [beforeEvent, afterEvent, oldEvent];
    calendarProg.addEventSource(backgroundEvents);
    if (eventEnd < currentDay) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O prazo da janela já foi ultrapassado!'
      });
    } else {
      _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.progamModal.show();
      $('#modal-prog').on('shown.bs.modal', function () {
        calendarProg.render();

        // setTimeout(function() {
        //     $('.fc-dayGridMonth-button, .fc-timeGridWeek-button, .fc-timeGridDay-button, .fc-listWeek-button').prop('disabled', true).addClass('disabled-button');
        // }, 100);
      });
    }
  }).fail(function (jqXHR, textStatus, error) {
    console.error('Erro ao buscar eventos:', error);
  });
}

/***/ }),

/***/ "./resources/js/calendar/fetchEvents.js":
/*!**********************************************!*\
  !*** ./resources/js/calendar/fetchEvents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchEvents: () => (/* binding */ fetchEvents),
/* harmony export */   fetchJanelaBloqueio: () => (/* binding */ fetchJanelaBloqueio)
/* harmony export */ });
function fetchEvents() {
  return new Promise(function (resolve, reject) {
    $.get('/janelas').done(function (data) {
      var events = data.map(function (element) {
        var end = element.dia_todo ? moment(element.datahora_fim).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss') : element.datahora_fim;
        return {
          id: element.id,
          title: element.operacao.descricao,
          start: element.datahora_inicio,
          end: end,
          backgroundColor: element.operacao.cor,
          allDay: element.dia_todo,
          id_ope: element.operacao.id,
          cliente: element.id_cliente
        };
      });
      resolve(events);
    }).fail(function (error) {
      console.error('Erro ao buscar eventos:', error);
      reject(error);
    });
  });
}
function fetchJanelaBloqueio(id) {
  return new Promise(function (resolve, reject) {
    $.get('/janelas/bloqueios/' + id).done(function (data) {
      var blocks = data.map(function (element) {
        return {
          id: element.id,
          title: element.motivo,
          start: element.datahora_inicio,
          end: element.datahora_fim,
          backgroundColor: '#FFA500',
          // Cor de fundo fixa para todos os bloqueios
          id_janela: element.id_janela
        };
      });
      resolve(blocks);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log('Erro ao buscar bloqueios', textStatus, errorThrown);
      reject(errorThrown);
    });
  });
}

/***/ }),

/***/ "./resources/js/programar/collapse.js":
/*!********************************************!*\
  !*** ./resources/js/programar/collapse.js ***!
  \********************************************/
/***/ (() => {

$("#btnProgramacaoUnica").on("click", function () {
  $("#multiCollapseExample2").collapse("hide");
  $("#multiCollapseExample1").collapse("show");
});
$("#btnProgramacaoLote").on("click", function () {
  $("#multiCollapseExample1").collapse("hide");
  $("#multiCollapseExample2").collapse("show");
});
$("#btnAmbosCadastros").on("click", function () {
  $("#multiCollapseExample1").collapse("show");
  $("#multiCollapseExample2").collapse("show");
});

/***/ }),

/***/ "./resources/js/programar/funcoes.js":
/*!*******************************************!*\
  !*** ./resources/js/programar/funcoes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileToBase64: () => (/* binding */ fileToBase64)
/* harmony export */ });
// Função para converter um arquivo para base64
function fileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return resolve(reader.result);
    };
    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

/***/ }),

/***/ "./resources/js/programar/importar.js":
/*!********************************************!*\
  !*** ./resources/js/programar/importar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeForm: () => (/* binding */ initializeForm),
/* harmony export */   resetFormSteps: () => (/* binding */ resetFormSteps),
/* harmony export */   tableImports: () => (/* binding */ tableImports)
/* harmony export */ });
/* harmony import */ var _collapse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.js */ "./resources/js/programar/collapse.js");
/* harmony import */ var _collapse_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_collapse_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar/calendarAgendamento.js */ "./resources/js/calendar/calendarAgendamento.js");
/* harmony import */ var _calendar_calendarProgam_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar/calendarProgam.js */ "./resources/js/calendar/calendarProgam.js");
/* harmony import */ var _funcoes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcoes.js */ "./resources/js/programar/funcoes.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var tableImport;
function tableImports() {
  var dataString = localStorage.getItem('localProgramacoes');
  if ($.fn.DataTable.isDataTable("#tableImport")) {
    tableImport.clear().draw();
    tableImport.destroy();
  }
  if (dataString) {
    var dataArray = JSON.parse(dataString);
    tableImport = $("#tableImport").DataTable({
      data: dataArray,
      // Use dataArray aqui
      responsive: true,
      searching: false,
      lengthChange: false,
      paging: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json"
      },
      columns: [{
        data: "name",
        title: "Nome"
      }, {
        data: "cnh",
        title: "CNH"
      }, {
        data: "cpf",
        title: "CPF"
      }, {
        data: "rg",
        title: "RG"
      }, {
        data: "telefone",
        title: "Telefone"
      }, {
        data: "cavalo",
        title: "Cavalo"
      }, {
        data: "carreta",
        title: "Carreta"
      }, {
        data: "slotStart",
        title: "Slot inicio"
      }, {
        data: "slotEnd",
        title: "Slot Fim"
      }, {
        data: "janelaProgram",
        title: "Id Janela"
      }],
      createdRow: function createdRow(row, data, dataIndex) {
        $(row).attr('data-index', dataIndex);
      }
    });
  }
}
tableImports();
$.validator.addMethod("regex", function (value, element, regexp) {
  var re = new RegExp(regexp);
  return this.optional(element) || re.test(value);
}, "Formato inválido.");
$.validator.addMethod("regex", function (value, element, regexp) {
  var re = new RegExp(regexp);
  return this.optional(element) || re.test(value);
}, "Formato inválido.");
function initializeForm() {
  var formImport = $("#form-total");
  $('#placa').mask('AAAAAAA');
  $('#cpf').mask('000.000.000-00');
  $('#cnh').mask('00000000000');
  $('#cpfAcesso').mask('000.000.000-00');
  $('#cnhAcesso').mask('00000000000');
  $('#rg').mask('00000000000');
  $('#telefone').mask('(00)0 0000-0000');
  formImport.validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
        regex: /^[a-zA-ZÀ-ú\s]*$/ // Expressão regular para validar apenas letras e espaços
      },
      telefone: {
        required: true,
        digits: false
      },
      cnh: {
        required: true,
        regex: /^\d{11}$/,
        digits: true
      },
      cpf: {
        required: false,
        regex: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
      },
      rg: {
        required: false,
        regex: /^\d{1,2}\.?\d{3}\.?\d{3}-?[a-zA-Z0-9]{1}$/
      },
      cavalo: {
        required: true,
        regex: /^[A-Z]{3}-?[0-9]{4}|[A-Z]{3}-?[0-9][A-Z][0-9]{2}$/
      },
      carreta: {
        required: false,
        regex: /^[A-Z]{3}-?[0-9]{4}|[A-Z]{3}-?[0-9][A-Z][0-9]{2}$/
      }
    },
    messages: {
      name: {
        required: "Você deve preencher o nome",
        minlength: "O nome deve ter mais que 5 caracteres",
        regex: "O nome não deve conter números"
      },
      telefone: {
        required: "O telefone é obrigatório",
        minlength: "O telefone deve ter 11 dígitos",
        maxlength: "O telefone deve ter 11 dígitos"
      },
      cnh: {
        required: "A CNH é obrigatória",
        regex: "Formato de CNH inválido"
      },
      cpf: {
        regex: "Formato de CPF inválido"
      },
      rg: {
        regex: "Formato de RG inválido"
      },
      cavalo: {
        required: "A placa do cavalo é obrigatória",
        regex: "Formato de placa inválido"
      },
      carreta: {
        required: "A placa da carreta é obrigatória",
        regex: "Formato de placa inválido"
      }
    }
  });
  formImport.steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    autoFocus: true,
    transitionEffectSpeed: 500,
    titleTemplate: '<div class="title">#title#</div>',
    labels: {
      previous: 'Voltar',
      next: 'Proximo',
      finish: 'Salvar',
      current: ''
    },
    onFinished: function () {
      var _onFinished = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event, currentIndex) {
        var formData, file1, file2, data, _iterator, _step, pair, existingData, dataArray;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData(document.getElementById('form-total'));
              file1 = formData.get('filecnhmotorista');
              file2 = formData.get('filedocumentveiculo');
              data = {};
              _iterator = _createForOfIteratorHelper(formData.entries());
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  pair = _step.value;
                  data[pair[0]] = pair[1];
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!file1) {
                _context.next = 10;
                break;
              }
              _context.next = 9;
              return (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_3__.fileToBase64)(file1);
            case 9:
              data.filecnhmotorista = _context.sent;
            case 10:
              if (!file2) {
                _context.next = 14;
                break;
              }
              _context.next = 13;
              return (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_3__.fileToBase64)(file2);
            case 13:
              data.filedocumentveiculo = _context.sent;
            case 14:
              // Adicionando slotStart, slotEnd e eventProgram ao objeto data
              if (_calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.id_ope_Janela === 1) {
                data.slotStart = moment(_calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaEventStar).format('YYYY-MM-DD HH:mm:ss');
                ;
                data.slotEnd = moment(_calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaEventEnd).format('YYYY-MM-DD HH:mm:ss');
                ;
                data.janelaProgram = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaProgram;
                data.id_cliente = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.id_cliente;
              } else {
                data.slotStart = _calendar_calendarProgam_js__WEBPACK_IMPORTED_MODULE_2__.slotStart;
                data.slotEnd = _calendar_calendarProgam_js__WEBPACK_IMPORTED_MODULE_2__.slotEnd;
                data.janelaProgram = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaProgram;
                data.id_cliente = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.id_cliente;
              }
              existingData = localStorage.getItem('localProgramacoes');
              dataArray = existingData ? JSON.parse(existingData) : []; // Adicionar os novos dados ao array
              dataArray.push(data);

              // Salvar o array atualizado no localStorage
              localStorage.setItem('localProgramacoes', JSON.stringify(dataArray));
              resetFormSteps();
              tableImports();
              $('#cpf').mask('000.000.000-00');
              $('#cnh').mask('00000000000');
              $('#telefone').mask('(00)0 0000-0000');
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function onFinished(_x, _x2) {
        return _onFinished.apply(this, arguments);
      }
      return onFinished;
    }(),
    onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
      $('#cpf').mask('000.000.000-00');
      $('#cnh').mask('00000000000');
      $('#telefone').mask('(00)0 0000-0000');
      return formImport.valid();
      // return true
    }
  });
}
initializeForm();

// Função para reiniciar o formulário
function resetFormSteps() {
  // Seleciona os labels para os inputs do documento do veículo e do motorista
  var labels = [document.querySelector('label[for="filedocumentveiculo"]'), document.querySelector('label[for="filecnhmotorista"]') // Certifique-se de que 'labelMotoristaInput' é o id correto do input do motorista
  ];
  labels.forEach(function (label) {
    var paths = label.querySelectorAll('svg path');
    paths.forEach(function (path) {
      path.style.fill = '#121212';
      path.style.stroke = '#121212';
    });
  });
  $("#form-total").steps("destroy");
  $('#labelMotoristaInput').html('Arraste e solte sua imagem/pdf do documento do motorista aqui, ou clique para selecionar!');
  $('#labelDocumentVeiculo').html('Arraste e solte sua imagem/pdf do documento do veiculo aqui, ou clique para selecionar!');
  // Reinicializa o formulário
  initializeForm();
}

// Quando o botão é clicado, aciona o input do arquivo
$('#importarLote').on('click', function () {
  $('#excelFile').trigger("click");
});

// Quando um arquivo é selecionado, processa esse arquivo
$('#excelFile').on('change', function (event) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {
      type: 'array'
    });
    var firstSheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[firstSheetName];

    // Converter os dados da planilha para JSON
    var json = XLSX.utils.sheet_to_json(worksheet, {
      raw: false,
      defval: null
    });
    var colunasAVerificarVazio = [0, 1, 2, 3, 4]; //  verifica as colunas obrigatorias para preenchimento
    var colunasAVerificarRepetidos = [0, 1, 3, 4]; // Verifica se tem campos repetidos em documentos
    var valoresVistos = colunasAVerificarVazio.reduce(function (acc, colIndex) {
      acc[colIndex] = new Set();
      return acc;
    }, {});
    var temCampoVazio = false;
    var temCampoRepetido = false;
    var listaErros = [];
    // Verificar campos vazios nas colunas especificadas
    json.forEach(function (row, rowIndex) {
      colunasAVerificarVazio.forEach(function (colIndex) {
        var valorColuna = row[Object.keys(row)[colIndex]];
        if (valorColuna === null || valorColuna === '') {
          var mensagemErro = "Campo vazio encontrado na coluna ".concat(colIndex + 1, " na linha ").concat(rowIndex + 1);
          console.log(mensagemErro);
          listaErros.push(mensagemErro);
          temCampoVazio = true;
        }
      });
      colunasAVerificarRepetidos.forEach(function (colIndex) {
        var valorColuna = row[Object.keys(row)[colIndex]];
        if (valoresVistos[colIndex].has(valorColuna)) {
          var mensagemErro = "Campo repetido encontrado na coluna ".concat(colIndex + 1, " na linha ").concat(rowIndex + 1);
          console.log(mensagemErro);
          listaErros.push(mensagemErro);
          temCampoRepetido = true;
        } else {
          valoresVistos[colIndex].add(valorColuna);
        }
      });
    });
    $('#excelFile').val("");
    var listaHTML = "<ul>";
    listaErros.forEach(function (erro) {
      listaHTML += "<li>".concat(erro, "</li>");
    });
    listaHTML += "</ul>";
    listaHTML += '<br>';
    listaHTML += "<p>Corrija os campos e importe a planilha novamente</p>";
    if (temCampoVazio || temCampoRepetido) {
      console.log(listaErros);
      Swal.fire({
        icon: 'error',
        title: 'Erro na importação da planilha',
        html: listaHTML
      });
    } else {
      var mapeamentoNomes = {
        'Tipo *': 'tipo',
        'CPF': 'cpf',
        'CNH*': 'cnh',
        'RG': 'rg',
        'Email': 'email',
        'Motorista*': 'name',
        'Placa Carreta*': 'carreta',
        'Placa Cavalo*': 'cavalo',
        'Telefone': 'telefone'
      };
      var jsonModificado = json.map(function (objeto) {
        var novoObjeto = {};
        Object.keys(objeto).forEach(function (chaveAntiga) {
          var novaChave = mapeamentoNomes[chaveAntiga] || chaveAntiga; // Usa a nova chave do mapeamento, ou a chave antiga se não estiver no mapeamento
          novoObjeto[novaChave] = objeto[chaveAntiga];
        });
        return novoObjeto;
      });
      var existingData = localStorage.getItem('localProgramacoes');
      var dataArray = existingData ? JSON.parse(existingData) : [];
      jsonModificado.forEach(function (item) {
        if (_calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.id_ope_Janela === 1) {
          item.slotStart = moment(_calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaEventStar).format('YYYY-MM-DD HH:mm:ss');
          ;
          item.slotEnd = moment(_calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaEventEnd).format('YYYY-MM-DD HH:mm:ss');
          ;
          item.janelaProgram = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaProgram;
          item.id_cliente = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.id_cliente;
        } else {
          item.slotStart = _calendar_calendarProgam_js__WEBPACK_IMPORTED_MODULE_2__.slotStart;
          item.slotEnd = _calendar_calendarProgam_js__WEBPACK_IMPORTED_MODULE_2__.slotEnd;
          item.janelaProgram = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.janelaProgram;
          item.id_cliente = _calendar_calendarAgendamento_js__WEBPACK_IMPORTED_MODULE_1__.id_cliente;
        }
        dataArray.push(item);
        localStorage.setItem("localProgramacoes", JSON.stringify(dataArray));
      });
      tableImports();
    }
  };
  // Ler o arquivo como um array buffer
  reader.readAsArrayBuffer(event.target.files[0]);
});
$('#filecnhmotorista').on('change', function (e) {
  var labelForFile = document.querySelector('label[for="filecnhmotorista"]');
  var fileName = e.target.files[0].name;
  $('#labelMotoristaInput').html(fileName);
  var paths = labelForFile.querySelectorAll('svg path');
  paths.forEach(function (path) {
    path.style.fill = '#008000';
    path.style.stroke = '#008000';
  });
});
$('#filedocumentveiculo').on('change', function (e) {
  var labelForFile = document.querySelector('label[for="filedocumentveiculo"]');
  var fileName = e.target.files[0].name;
  $('#labelDocumentVeiculo').html('fileName');
  var paths = labelForFile.querySelectorAll('svg path');
  paths.forEach(function (path) {
    path.style.fill = '#008000';
    path.style.stroke = '#008000';
  });
});
$('#resetLocalStorage').on('click', function () {
  localStorage.clear();
  tableImports();
});
$('#programarAll').on('click', function () {
  var tipo;
  Swal.fire({
    title: 'Criando as programações!',
    html: 'Aguarde...',
    timerProgressBar: true,
    didOpen: function didOpen() {
      Swal.showLoading();
    }
  });
  var programLocal = localStorage.getItem('localProgramacoes');
  programLocal = JSON.parse(programLocal);
  var errosAjax = [];
  var ajaxPromises = [];
  programLocal.forEach(function (program, index) {
    if (program.tipo == 'BI-TREM') {
      tipo = 3;
    } else if (program.tipo == 'Truck') {
      tipo = 2;
    } else if (program.tipo == 'Basculante') {
      tipo = 1;
    }
    var cpfSemPontosETracos = program.cpf.replace(/[.-]/g, '');
    var telefoneSemCaracteresIndesejados = program.telefone.replace(/[\(\)\.\-\s]/g, '');
    var programVeiculos = {
      "id_entidade_criador": 229,
      "id_entidade_cliente": program.id_cliente,
      "id_entidade_transportador": 245,
      "id_janela": program.janelaProgram,
      "id_entidade_unidade_negocio": 5,
      "datahora_inicio": program.slotStart,
      "datahora_fim": program.slotEnd,
      "veiculo": {
        "cavalo": {
          "id_veiculo_tipo": tipo,
          "placa": program.cavalo
        },
        "carreta": {
          "id_veiculo_tipo": tipo,
          "placa": program.carreta
        }
      },
      "pessoa": {
        "nome": program.name,
        "natureza": "pessoa_fisica",
        "estrutura": "individual",
        "motorista": 1,
        "pessoa_fisica": {
          "nome": program.name,
          "cpf": cpfSemPontosETracos,
          "cnh": program.cnh,
          "rg": program.rg,
          "documento": program.filecnhmotorista
        },
        "contato": {
          "email": program.email,
          "numero": telefoneSemCaracteresIndesejados
        }
      }
    };
    var ajaxPromise = new Promise(function (resolve, reject) {
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
      $.ajax({
        url: '/programacao/insert',
        type: 'POST',
        data: programVeiculos,
        success: function success(response) {
          console.log(response);
          $("#tableImport tr[data-index=\"".concat(index, "\"] td")).addClass('bg-success');
          resolve({
            success: true,
            response: response,
            mensagem: 'Programação importada com sucesso',
            index: index
          });
        },
        error: function error(xhr, status, _error) {
          var jsonXrh = JSON.parse(xhr.responseText);
          errosAjax.push({
            index: index,
            mensagem: jsonXrh
          });
          $("#tableImport tr[data-index=\"".concat(index, "\"] td")).addClass('bg-danger');
          resolve({
            success: false,
            mensagem: xhr.responseText,
            index: index,
            title: xhr.responseJSON.causas
          });
        }
      });
    });
    ajaxPromises.push(ajaxPromise);
  });
  Promise.all(ajaxPromises).then(function (responses) {
    var index;
    var errosAjax = responses.filter(function (r) {
      return !r.success;
    });
    if (errosAjax.length > 0) {
      var listaResultadosHtml = '<ul>';
      responses.forEach(function (res) {
        console.log(res);
        if (res.success) {
          index = res.index + 1;
          listaResultadosHtml += "<li class=\"\">Linha ".concat(index, ": Sucesso - ").concat(res.mensagem, "</li>");
        } else {
          index = res.index + 1;
          var resJson = JSON.parse(res.mensagem);
          listaResultadosHtml += "<li title=\"".concat(res.title, "\" class=\"\">Linha ").concat(index, ": Erro - ").concat(resJson.mensagem, "</li>");
        }
      });
      listaResultadosHtml += '</ul>';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: listaResultadosHtml
      });
    } else {
      // Todas as requisições foram bem-sucedidas
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'As programações foram salvas!',
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.clear();
      tableImports();
    }
  });
});

/***/ })

}]);