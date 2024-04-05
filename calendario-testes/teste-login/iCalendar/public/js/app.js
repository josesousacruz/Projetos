/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/index.js */ "./resources/js/sidebar/index.js");
/* harmony import */ var _sidebar_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controle_acesso_gerenciamento_gerenciamentos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controle_acesso/gerenciamento/gerenciamentos.js */ "./resources/js/controle_acesso/gerenciamento/gerenciamentos.js");
/* harmony import */ var _controle_acesso_triagem_triagem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controle_acesso/triagem/triagem.js */ "./resources/js/controle_acesso/triagem/triagem.js");

// import './controle_acesso/relatorios/relatorios.js';


if (window.location.pathname === '/') {
  __webpack_require__.e(/*! import() */ "resources_js_calendar_calendarHome_js").then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendarHome.js */ "./resources/js/calendar/calendarHome.js")).then(function (modulo) {
    // Chama a função exportada para inicializar o módulo
    modulo.initCalendarHome();
  })["catch"](function (erro) {
    console.error('Erro ao importar o módulo:', erro);
  });
}
if (window.location.pathname === '/agendamento') {
  __webpack_require__.e(/*! import() */ "resources_js_calendar_calendarAgendamento_js-resources_js_calendar_calendarProgam_js").then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendarAgendamento.js */ "./resources/js/calendar/calendarAgendamento.js")).then(function (modulo) {
    // Chama a função exportada para inicializar o módulo
    modulo.initCalendarAgendamento();
  })["catch"](function (erro) {
    console.error('Erro ao importar o módulo:', erro);
  });
}
if (window.location.pathname === '/acesso') {
  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./controle_acesso/triagem/triagem.js */ "./resources/js/controle_acesso/triagem/triagem.js")).then(function (modulo) {
    // Chama a função exportada para inicializar o módulo
    modulo.initTriagem();
  })["catch"](function (erro) {
    console.error('Erro ao importar o módulo:', erro);
  });
}
if (window.location.pathname.includes('/relatorios')) {
  console.log('/relatorios');
  __webpack_require__.e(/*! import() */ "resources_js_controle_acesso_relatorios_relatorios_js").then(__webpack_require__.bind(__webpack_require__, /*! ./controle_acesso/relatorios/relatorios.js */ "./resources/js/controle_acesso/relatorios/relatorios.js")).then(function (modulo) {
    // Chama a função exportada para inicializar o módulo
    modulo.initRelatorios();
  })["catch"](function (erro) {
    console.error('Erro ao importar o módulo:', erro);
  });
}

// Lista de URLs para as quais o loading não deve ser exibido
var excecoesLoading = ['/programacao/insert', 'http://cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json', '/gerenciamento/pessoas', '/gerenciamento/veiculos'];
$(document).ajaxSend(function (event, jqxhr, settings) {
  var infosVeiculosAcesso = (0,_controle_acesso_triagem_triagem_js__WEBPACK_IMPORTED_MODULE_2__.getInfosVeiculosAcesso)();
  if (infosVeiculosAcesso.length > 0) {
    excecoesLoading.push("/movimentacao/verificar/".concat(infosVeiculosAcesso[0].id_veiculo_cavalo));
  }
  if (!excecoesLoading.includes(settings.url)) {
    $("#loading-wrapper").fadeIn();
  }
});
$(document).ajaxComplete(function (event, jqxhr, settings) {
  if (!excecoesLoading.includes(settings.url)) {
    $("#loading-wrapper").fadeOut(2000);
  }
});
window.addEventListener('popstate', function (event) {
  if (event.state && event.state.tipo) {
    carregarConteudo(event.state.tipo);
  }
});

/***/ }),

/***/ "./resources/js/controle_acesso/gerenciamento/dataTable.js":
/*!*****************************************************************!*\
  !*** ./resources/js/controle_acesso/gerenciamento/dataTable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datatabPessoasGerenciamento: () => (/* binding */ datatabPessoasGerenciamento),
/* harmony export */   datatabVeiculosGerenciamento: () => (/* binding */ datatabVeiculosGerenciamento),
/* harmony export */   gerenciamentoPessoas: () => (/* binding */ gerenciamentoPessoas),
/* harmony export */   gerenciamentoVeiculos: () => (/* binding */ gerenciamentoVeiculos)
/* harmony export */ });
var BASE_URL = window.location.origin;
var gerenciamentoPessoas;
var gerenciamentoVeiculos;
var datatabPessoasGerenciamento = function datatabPessoasGerenciamento(data) {
  if ($.fn.DataTable.isDataTable("#gerenciamentoPessoas")) {
    gerenciamentoPessoas.clear().draw();
    gerenciamentoPessoas.destroy();
  }
  gerenciamentoPessoas = $("#gerenciamentoPessoas").DataTable({
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
      data: "nome",
      title: "Nome",
      render: function render(data, type, row) {
        var baseUrl = window.location.protocol + "//" + window.location.host + "/";
        var novoSrc = "".concat(baseUrl).concat(row.entidade_fisica.imagem, ".jpeg");
        return "<a class=\"d-flex align-items-center text-900\"><div class=\"avatar avatar-l\"><img style=\"width: 50px; height:50px; object-fit:cover;\" src=\"".concat(novoSrc, "\" alt=\"avatar\" class=\"rounded-circle\"></div><h6 class=\"mb-0 ms-3 text-900\">").concat(row.nome, "</h6></a>");
      }
    }, {
      data: 'ativo',
      title: "Status",
      render: function render(data, type, row) {
        var _row$ativo;
        var status = ((_row$ativo = row.ativo) !== null && _row$ativo !== void 0 ? _row$ativo : 1) ? "<span class=\"badge rounded-pill text-bg-success text-white\"><h6 class=\"mb-0 text-700\">Ativo</h6></span>" : "<span class=\"badge rounded-pill text-bg-danger text-white\"><h6 class=\"mb-0 text-700\">Bloqueado</h6></span>";
        return status;
      }
    }, {
      data: "entidade_fisica.cnh",
      title: "CNH"
    }, {
      data: "entidade_fisica.cpf",
      title: "CPF"
    }]
  });
};
var datatabVeiculosGerenciamento = function datatabVeiculosGerenciamento() {
  if ($.fn.DataTable.isDataTable("#gerenciamentoVeiculos")) {
    gerenciamentoVeiculos.clear().draw();
    gerenciamentoVeiculos.destroy();
  }
  gerenciamentoVeiculos = $("#gerenciamentoVeiculos").DataTable({
    processing: true,
    serverSide: true,
    ajax: {
      url: "/gerenciamento/veiculos",
      type: 'POST',
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    },
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
      data: "natureza",
      title: 'Natureza'
    }, {
      data: "placa",
      title: "Placa"
    }, {
      data: "tipo_veiculo.descricao",
      title: "Tipo"
    }]
  });
};

/***/ }),

/***/ "./resources/js/controle_acesso/gerenciamento/funcoes.js":
/*!***************************************************************!*\
  !*** ./resources/js/controle_acesso/gerenciamento/funcoes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base64ToBlob: () => (/* binding */ base64ToBlob),
/* harmony export */   cameraStream: () => (/* binding */ cameraStream),
/* harmony export */   capturedImage: () => (/* binding */ capturedImage),
/* harmony export */   fetchPessoasGerenciamento: () => (/* binding */ fetchPessoasGerenciamento),
/* harmony export */   fetchUplaudImg: () => (/* binding */ fetchUplaudImg),
/* harmony export */   fetchVeiculosGerenciamento: () => (/* binding */ fetchVeiculosGerenciamento),
/* harmony export */   modalDetailslMotorista: () => (/* binding */ modalDetailslMotorista),
/* harmony export */   setCameraStream: () => (/* binding */ setCameraStream),
/* harmony export */   startCamera: () => (/* binding */ startCamera),
/* harmony export */   takePhoto: () => (/* binding */ takePhoto),
/* harmony export */   updateImg: () => (/* binding */ updateImg),
/* harmony export */   updatePessoasGerenciamento: () => (/* binding */ updatePessoasGerenciamento)
/* harmony export */ });
/* harmony import */ var _dataTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTable.js */ "./resources/js/controle_acesso/gerenciamento/dataTable.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var capturedImage = null;
var cameraStream = null;
var fetchPessoasGerenciamento = function fetchPessoasGerenciamento() {
  $.post('/gerenciamento/pessoas', {
    _token: $('meta[name="csrf-token"]').attr('content')
  }, function (data) {
    (0,_dataTable_js__WEBPACK_IMPORTED_MODULE_0__.datatabPessoasGerenciamento)(data);
  }, 'json').fail(function (xhr, status, error) {
    if ($.fn.DataTable.isDataTable("#gerenciamentoPessoas")) {
      $.fn.DataTable.isDataTable("#gerenciamentoPessoas").clear().draw();
      $.fn.DataTable.isDataTable("#gerenciamentoPessoas").destroy();
    }
    console.error('Erro na requisição POST:', error);
  });
};
var fetchVeiculosGerenciamento = function fetchVeiculosGerenciamento() {
  $.post('/gerenciamento/veiculos', {
    _token: $('meta[name="csrf-token"]').attr('content')
  }, function (data) {
    (0,_dataTable_js__WEBPACK_IMPORTED_MODULE_0__.datatabVeiculosGerenciamento)(data);
  }, 'json').fail(function (xhr, status, error) {
    if ($.fn.DataTable.isDataTable("#gerenciamentoPessoas")) {
      $.fn.DataTable.isDataTable("#gerenciamentoPessoas").clear().draw();
      $.fn.DataTable.isDataTable("#gerenciamentoPessoas").destroy();
    }
    console.error('Erro na requisição POST:', error);
  });
};
var updatePessoasGerenciamento = function updatePessoasGerenciamento(infos) {
  $.ajax({
    url: '/gerenciamento/pessoas/update',
    type: 'PUT',
    data: _objectSpread({
      _token: $('meta[name="csrf-token"]').attr('content')
    }, infos),
    dataType: 'json',
    success: function success(data) {
      $('#bntUpdadeBloqueio').html(data.entidade.ativo ? 'Bloquear Acesso' : 'Desbloquear Acesso').removeClass('btn-warning btn-danger').addClass(data.entidade.ativo ? 'btn-danger' : 'btn-warning');
      data.entidade.ativo ? $('#bloqueioimg').hide() : $('#bloqueioimg').show();
      fetchPessoasGerenciamento();
    },
    error: function error(xhr, status, _error) {
      console.error('Erro na requisição PUT:', _error);
    }
  });
};
var modalDetailslMotorista = function modalDetailslMotorista(infos) {
  $('#bntUpdadeBloqueio').html(infos.ativo ? 'Bloquear Acesso' : 'Desbloquear Acesso').removeClass('btn-warning btn-danger').addClass(infos.ativo ? 'btn-danger' : 'btn-warning').prop('disabled', true);
  infos.ativo ? $('#bloqueioimg').hide() : $('#bloqueioimg').show();
  updateImg(infos.id);
  $('#id_datails').val(infos.id);
  $('#nomeGerenciamento').val(infos.nome);
  $('#cpfGerenciamento').val(infos.entidade_fisica.cpf);
  $('#cnhGeremciamento').val(infos.entidade_fisica.cnh);
  $('#emailGerenciamento').val(infos.entidade_contatos ? infos.entidade_contatos.email : '');
  $('#telefoneGerenciamento').val(infos.entidade_contatos ? infos.entidade_contatos.contato : '');
  $('#UFGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.uf : '');
  $('#cidadeGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.cidade : '');
  $('#cepGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.cep : '');
  $('#complementoGerenciamento').val(infos.entidade_endereco ? infos.entidade_endereco.complemento : '');
  $('#bloqueioGerenciamento').prop('checked', false);
};
var updateImg = function updateImg(id_entidade) {
  var baseUrl = window.location.protocol + "//" + window.location.host + "/";
  var novoSrc = "".concat(baseUrl, "images/motoristas/").concat(id_entidade, ".jpeg");
  fetch(novoSrc).then(function (response) {
    if (response.ok) {
      $('#img_motorista').attr('src', novoSrc);
    } else {
      $('#img_motorista').attr('src', "".concat(baseUrl, "images/motoristas/defaut.jpeg"));
    }
  })["catch"](function (error) {
    console.error('Erro ao tentar carregar a imagem:', error);
  });
};
var base64ToBlob = function base64ToBlob(base64Data) {
  var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
  var byteCharacters = atob(base64Data);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, {
    type: contentType
  });
};
var fetchUplaudImg = function fetchUplaudImg(file, img, id_entidade) {
  if (!img && !file) {
    $.post('/upload-image', {
      _token: $('meta[name="csrf-token"]').attr('content'),
      id_entidade: id_entidade
    }, function (data) {
      fetchPessoasGerenciamento();
    }, 'json').fail(function (xhr, status, error) {
      console.error('Erro na requisição POST:', error);
    });
  }
  if (img) {
    var base64Data = img.src.replace(/^data:image\/\w+;base64,/, "");
    var blob = base64ToBlob(base64Data, 'image/jpeg');
    file = new File([blob], {
      type: 'image/jpeg'
    });
  }
  if (file) {
    var formData = new FormData();
    formData.append('image', file);
    formData.append('id_entidade', id_entidade);
    $.ajax({
      url: '/upload-image',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function success(response) {
        updateImg(id_entidade);
      },
      error: function error(_error2) {
        if (_error2.status === 422) {
          // Erro de validação
          var errors = _error2.responseJSON.errors;
          $.each(errors, function (key, value) {
            Swal.fire({
              title: value[0],
              text: value[1],
              icon: "warning"
            });
          });
        } else {
          console.log('Erro:', _error2);
        }
      }
    });
  }
  updateImg(id_entidade);
  fetchPessoasGerenciamento();
};
var cameraVideo = document.getElementById('cameraVideo'),
  cameraCanvas = document.getElementById('cameraCanvas');

// Função para iniciar a câmera
var startCamera = function startCamera() {
  $('#capturedImageDisplay').css('display', 'none');
  $('#cameraVideo').css('display', 'block');
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(function (stream) {
      cameraStream = stream;
      cameraVideo.srcObject = stream;
      cameraVideo.play();
    })["catch"](function (err) {
      console.error('An error occurred: ' + err);
    });
  } else {
    console.error('Camera access is not supported.');
  }
};
var takePhoto = function takePhoto() {
  cameraCanvas.width = cameraVideo.videoWidth;
  cameraCanvas.height = cameraVideo.videoHeight;
  var context = cameraCanvas.getContext('2d');
  context.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);
  var dataUrl = cameraCanvas.toDataURL('image/jpeg');
  capturedImage = new Image();
  capturedImage.src = dataUrl;
  $('#capturedImageDisplay').attr('src', dataUrl);
  $('#capturedImageDisplay').css('display', 'block');
  $('#cameraVideo').css('display', 'none');
};
var setCameraStream = function setCameraStream(stream) {
  cameraStream = stream;
};

/***/ }),

/***/ "./resources/js/controle_acesso/gerenciamento/gerenciamentos.js":
/*!**********************************************************************!*\
  !*** ./resources/js/controle_acesso/gerenciamento/gerenciamentos.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _funcoes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes.js */ "./resources/js/controle_acesso/gerenciamento/funcoes.js");
/* harmony import */ var _dataTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataTable.js */ "./resources/js/controle_acesso/gerenciamento/dataTable.js");
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elementos/index.js */ "./resources/js/elementos/index.js");




(0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchPessoasGerenciamento)();
(0,_dataTable_js__WEBPACK_IMPORTED_MODULE_1__.datatabVeiculosGerenciamento)();
$('#cpf').mask('000.000.000-00');
$('#UFGerenciamento').mask('AA');
$('#cpfGerenciamento').mask('000.000.000-00');
$('#cnhGeremciamento').mask('00000000000');
$('#telefoneGerenciamento').mask('(00)0 0000-0000');
$('#gerenciamentoPessoas').on('select.dt', function (e, dt, type, indexes) {
  var infos = _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.gerenciamentoPessoas.rows(indexes).data().toArray();
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.modalDetailslMotorista)(infos[0]);
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.modalDetalhesMotorista.show();
});
$('#cancelDatails').on('click', function () {
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.modalDetalhesMotorista.hide();
  $('#formGerenciamento input').val(null);
});
$('#updateDatails').on('click', function () {
  var dadosPessoa = {
    id_entidade: $('#id_datails').val(),
    nome: $('#nomeGerenciamento').val(),
    cpf: $('#cpfGerenciamento').val(),
    cnh: $('#cnhGeremciamento').val(),
    email: $('#emailGerenciamento').val(),
    telefone: $('#telefoneGerenciamento').val(),
    uf: $('#UFGerenciamento').val(),
    cidade: $('#cidadeGerenciamento').val(),
    cep: $('#cepGerenciamento').val(),
    complemento: $('#complementoGerenciamento').val()
  };
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchPessoasGerenciamento)();
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.updatePessoasGerenciamento)(dadosPessoa);
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.modalDetalhesMotorista.hide();
  $('#formGerenciamento input').val(null);
});
$('#bloqueioGerenciamento').on('change', function () {
  $('#bntUpdadeBloqueio').prop('disabled', !$(this).prop('checked'));
});
$('#bntUpdadeBloqueio').on('click', function () {
  var dadosPessoa = {
    id_entidade: $('#id_datails').val()
  };
  if ($('#bloqueioGerenciamento').prop('checked')) {
    dadosPessoa.checked = 1;
  }
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.updatePessoasGerenciamento)(dadosPessoa);
});
$('#btnUpdateImg').on('click', function () {
  $('#fileInputImg').click();
});
$('#fileInputImg').on('change', function () {
  var file = this.files[0];
  var id_entidade = $('#id_datails').val();
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchUplaudImg)(file, '', id_entidade);
});
$('#btnCamera').on('click', function () {
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.cameraModal.show();
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.startCamera)();
});
$('#otherPhotoButton').on('click', function () {
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.startCamera)();
});

// Quando o botão de tirar foto é clicado
$('#takePhotoButton').on('click', function () {
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.takePhoto)();
});
$('#savePhotoButton').on('click', function () {
  var id_entidade = $('#id_datails').val();
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchUplaudImg)('', _funcoes_js__WEBPACK_IMPORTED_MODULE_0__.capturedImage, id_entidade);
});
$('#bntDefaut').on('click', function () {
  var id_entidade = $('#id_datails').val();
  (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchUplaudImg)('', '', id_entidade);
});
$('#cameraModal').on('hidden.bs.modal', function () {
  if (_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.cameraStream) {
    _funcoes_js__WEBPACK_IMPORTED_MODULE_0__.cameraStream.getTracks().forEach(function (track) {
      track.stop();
    });
    (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.setCameraStream)(null);
  }
});

/***/ }),

/***/ "./resources/js/controle_acesso/triagem/dataTable.js":
/*!***********************************************************!*\
  !*** ./resources/js/controle_acesso/triagem/dataTable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datatableCA: () => (/* binding */ datatableCA),
/* harmony export */   tableControleAcesso: () => (/* binding */ tableControleAcesso)
/* harmony export */ });
var tableControleAcesso;
var BASE_URL = window.location.origin;
var datatableCA = function datatableCA(data) {
  if ($.fn.DataTable.isDataTable("#programTable")) {
    tableControleAcesso.clear().draw();
    tableControleAcesso.destroy();
  }
  tableControleAcesso = $("#programTable").DataTable({
    data: data.programacao,
    responsive: {
      details: {
        renderer: function renderer(api, rowIdx, columns) {
          // Lógica customizada para decidir quando mostrar detalhes
          return false; // Isso evitará que a <tr> de detalhes seja mostrada
        }
      }
    },
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
      data: "veiculo.placa",
      title: "Placa"
    }, {
      data: "entidade_motorista.nome",
      title: "Motorista"
    }, {
      data: "operacoes.observacao",
      title: "Operação"
    }, {
      data: "veiculo_carreta.placa",
      title: "Carreta"
    }, {
      data: "veiculo.tipo_veiculo.descricao",
      title: "Tipo"
    }, {
      data: "entidade_motorista.cnh",
      title: "CNH"
    }, {
      data: "entidade_motorista.cpf",
      title: "CPF"
    }, {
      data: "entidade_transportador.razao_social",
      title: "Transportadora"
    }]
  });
};

/***/ }),

/***/ "./resources/js/controle_acesso/triagem/funcoes.js":
/*!*********************************************************!*\
  !*** ./resources/js/controle_acesso/triagem/funcoes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchPrograns: () => (/* binding */ fetchPrograns),
/* harmony export */   modalConfirInfo: () => (/* binding */ modalConfirInfo),
/* harmony export */   registerMov: () => (/* binding */ registerMov)
/* harmony export */ });
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../elementos/index.js */ "./resources/js/elementos/index.js");
/* harmony import */ var _dataTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataTable.js */ "./resources/js/controle_acesso/triagem/dataTable.js");
/* harmony import */ var _triagem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triagem.js */ "./resources/js/controle_acesso/triagem/triagem.js");
/* harmony import */ var laravel_mix_src_Log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! laravel-mix/src/Log.js */ "./node_modules/laravel-mix/src/Log.js");
/* harmony import */ var laravel_mix_src_Log_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(laravel_mix_src_Log_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var fetchPrograns = function fetchPrograns(placaAcesso, cnhAcesso, cpfAcesso, id_unidade) {
  cpfAcesso = cpfAcesso.replace(/[.-]/g, '');
  $.post('/acesso/triagem', {
    _token: $('meta[name="csrf-token"]').attr('content'),
    placa: placaAcesso,
    cpf: cpfAcesso,
    cnh: cnhAcesso,
    id_unidade: id_unidade
  }, function (data) {
    alteraMensagens(data);
    if (data.programacao) {
      if (data.programacao.length > 0) {
        fetchUltimaMov(data.programacao[0].id_veiculo_cavalo).then(function (existeMovSemSaida) {
          if (existeMovSemSaida) {
            (0,_triagem_js__WEBPACK_IMPORTED_MODULE_2__.setInfosVeiculosAcesso)(data.programacao);
            modalConfirInfo(data.programacao[0]);
          }
          (0,_dataTable_js__WEBPACK_IMPORTED_MODULE_1__.datatableCA)(data);
        })["catch"](function (error) {
          console.error('Erro na requisição GET:', error);
        });
      } else {
        if ($.fn.DataTable.isDataTable("#programTable")) {
          _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.clear().draw();
          _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.destroy();
        }
      }
    } else {
      if ($.fn.DataTable.isDataTable("#programTable")) {
        _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.clear().draw();
        _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.destroy();
      }
    }
  }, 'json').fail(function (xhr, status, error) {
    console.error('Erro na requisição POST:', error);
  });
};
var alteraMensagens = function alteraMensagens(data) {
  // Atualiza as mensagens principais e secundárias com base no status HTTP
  if ([200, 204, 400, 404].includes(data.http_retorno)) {
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.msgPrincipal.html(data.http_retorno === 400 || data.http_retorno === 404 ? data.error : data.message);
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.msgSecundaria.html(data.messageSecond);
  }

  // Configura o botão e o ícone com base no status HTTP
  if ([200, 204, 400, 404].includes(data.http_retorno)) {
    var isSuccess = data.http_retorno === 200;
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.btnControleAcesso.removeClass(isSuccess ? "btn-danger" : "btn-success").addClass(isSuccess ? "btn-success" : "btn-danger");
    _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.btnControleAcesso.find("i").removeClass(isSuccess ? "bi-lock-fill" : "bi-unlock-fill").addClass(isSuccess ? "bi-unlock-fill" : "bi-lock-fill");
  }
};
var modalConfirInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(infos) {
    var baseUrl, novoSrc, existeMovSemSaida;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          baseUrl = window.location.protocol + "//" + window.location.host + "/";
          novoSrc = "".concat(baseUrl).concat(infos.entidade_motorista.imagem, ".jpeg");
          console.log(infos);
          $('#nameMotorista').html(infos.entidade_motorista.nome);
          $('#objNoTerminal').html(infos.operacoes.observacao);
          $('#transpInfo').html(infos.entidade_transportador.razao_social);
          $('#tipoInfos').html(infos.veiculo.tipo_veiculo.descricao);
          $('#placaInfos').html(infos.veiculo.placa);
          $('#documInfos').html(infos.documentacao_okay ? 'Documentação completa' : 'Documentação pendente');
          $('#cpfTriagem').html(infos.entidade_motorista.cpf);
          $('#cnhTriagem').html(infos.entidade_motorista.cnh);
          $('#img_motorista_triagem').attr('src', novoSrc);
          _context.next = 14;
          return fetchUltimaMov(infos.id_veiculo_cavalo);
        case 14:
          existeMovSemSaida = _context.sent;
          existeMovSemSaida ? $("#registerAcesso").html('Registrar Saida') : $("#registerAcesso").html('Registrar Entrada');
          _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.registroAcesso.show();
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function modalConfirInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
var fetchUltimaMov = function fetchUltimaMov(data) {
  return new Promise(function (resolve, reject) {
    $.get("/movimentacao/verificar/".concat(data), function (data) {
      resolve(data);
    }).fail(function (xhr, status, error) {
      reject(error);
      console.error('Erro na requisição GET:', error);
    });
  });
};
var registerMov = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
    var direcao;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetchUltimaMov(data.id_veiculo_cavalo);
        case 2:
          direcao = _context2.sent;
          direcao ? "S" : "E";
          $.post('/acesso/movimentacao', {
            _token: $('meta[name="csrf-token"]').attr('content'),
            id_veiculo: data.id_veiculo_cavalo,
            id_entidade: data.id_entidade_motorista,
            id_unidade: 259,
            direcao: direcao
          }, function (data) {
            reset();
          }, 'json').fail(function (xhr, status, error) {
            console.error(error);
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function registerMov(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
function reset() {
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.registroAcesso.hide();
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.msgPrincipal.html('Realize uma consulta para verificar as programações disponiveis.');
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.msgSecundaria.html("Informe a PLACA, CNH ou CPF do motorista para verificar se existe programação disponivel.");
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.btnControleAcesso.removeClass("btn-success").addClass("btn-danger");
  _elementos_index_js__WEBPACK_IMPORTED_MODULE_0__.btnControleAcesso.find("i").removeClass("bi-unlock-fill").addClass("bi-lock-fill");
  if ($.fn.DataTable.isDataTable("#programTable")) {
    _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.clear().draw();
    _dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.destroy();
  }
}

/***/ }),

/***/ "./resources/js/controle_acesso/triagem/triagem.js":
/*!*********************************************************!*\
  !*** ./resources/js/controle_acesso/triagem/triagem.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInfosVeiculosAcesso: () => (/* binding */ getInfosVeiculosAcesso),
/* harmony export */   initTriagem: () => (/* binding */ initTriagem),
/* harmony export */   setInfosVeiculosAcesso: () => (/* binding */ setInfosVeiculosAcesso)
/* harmony export */ });
/* harmony import */ var _funcoes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes.js */ "./resources/js/controle_acesso/triagem/funcoes.js");
/* harmony import */ var _dataTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataTable.js */ "./resources/js/controle_acesso/triagem/dataTable.js");
/* harmony import */ var _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elementos/index.js */ "./resources/js/elementos/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var infosVeiculosAcesso = [];
function setInfosVeiculosAcesso(novaData) {
  infosVeiculosAcesso = novaData;
}
function getInfosVeiculosAcesso() {
  return infosVeiculosAcesso;
}
function initTriagem() {
  return _initTriagem.apply(this, arguments);
}
function _initTriagem() {
  _initTriagem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          $('#formBuscarProgram').on('submit', function (event) {
            event.preventDefault();
            var placaAcesso = $('#placaAcesso').val();
            var cnhAcesso = $('#cnhAcesso').val();
            var cpfAcesso = $('#cpfAcesso').val();
            var id_unidade = 259;
            (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.fetchPrograns)(placaAcesso, cnhAcesso, cpfAcesso, id_unidade);
          });
          $("#programTable").on('select.dt', function (e, dt, type, indexes) {
            if (type === 'row') {
              setInfosVeiculosAcesso(_dataTable_js__WEBPACK_IMPORTED_MODULE_1__.tableControleAcesso.rows(indexes).data().toArray());
              (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.modalConfirInfo)(infosVeiculosAcesso[0]);
            }
          });
          $('#btnCancelar').on('click', function () {
            _elementos_index_js__WEBPACK_IMPORTED_MODULE_2__.registroAcesso.hide();
          });
          $('#registerAcesso').on('click', function () {
            (0,_funcoes_js__WEBPACK_IMPORTED_MODULE_0__.registerMov)(infosVeiculosAcesso[0]);
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _initTriagem.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/elementos/index.js":
/*!*****************************************!*\
  !*** ./resources/js/elementos/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeCollapses: () => (/* binding */ activeCollapses),
/* harmony export */   blockModal: () => (/* binding */ blockModal),
/* harmony export */   blockModalForm: () => (/* binding */ blockModalForm),
/* harmony export */   blockModalFormEdit: () => (/* binding */ blockModalFormEdit),
/* harmony export */   btnControleAcesso: () => (/* binding */ btnControleAcesso),
/* harmony export */   calendarEl: () => (/* binding */ calendarEl),
/* harmony export */   calendarElBlock: () => (/* binding */ calendarElBlock),
/* harmony export */   calendarElProg: () => (/* binding */ calendarElProg),
/* harmony export */   calendarElemtHome: () => (/* binding */ calendarElemtHome),
/* harmony export */   cameraModal: () => (/* binding */ cameraModal),
/* harmony export */   cnhRel: () => (/* binding */ cnhRel),
/* harmony export */   collapseElements: () => (/* binding */ collapseElements),
/* harmony export */   cpfRel: () => (/* binding */ cpfRel),
/* harmony export */   dangerAlert: () => (/* binding */ dangerAlert),
/* harmony export */   dataFimRel: () => (/* binding */ dataFimRel),
/* harmony export */   dataInicioRel: () => (/* binding */ dataInicioRel),
/* harmony export */   editModal: () => (/* binding */ editModal),
/* harmony export */   editidBloq: () => (/* binding */ editidBloq),
/* harmony export */   endDateInput: () => (/* binding */ endDateInput),
/* harmony export */   endDateInputEdit: () => (/* binding */ endDateInputEdit),
/* harmony export */   eventId: () => (/* binding */ eventId),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   formBlock: () => (/* binding */ formBlock),
/* harmony export */   formEdit: () => (/* binding */ formEdit),
/* harmony export */   importProgamModal: () => (/* binding */ importProgamModal),
/* harmony export */   modalDetalhesMotorista: () => (/* binding */ modalDetalhesMotorista),
/* harmony export */   modalFuncoes: () => (/* binding */ modalFuncoes),
/* harmony export */   motivo: () => (/* binding */ motivo),
/* harmony export */   motivoEdit: () => (/* binding */ motivoEdit),
/* harmony export */   motoristaRel: () => (/* binding */ motoristaRel),
/* harmony export */   msgPrincipal: () => (/* binding */ msgPrincipal),
/* harmony export */   msgSecundaria: () => (/* binding */ msgSecundaria),
/* harmony export */   myModal: () => (/* binding */ myModal),
/* harmony export */   placaRel: () => (/* binding */ placaRel),
/* harmony export */   progamModal: () => (/* binding */ progamModal),
/* harmony export */   registroAcesso: () => (/* binding */ registroAcesso),
/* harmony export */   selectCliente: () => (/* binding */ selectCliente),
/* harmony export */   selectEditCliente: () => (/* binding */ selectEditCliente),
/* harmony export */   selectEditOperacao: () => (/* binding */ selectEditOperacao),
/* harmony export */   selectOperacao: () => (/* binding */ selectOperacao),
/* harmony export */   startDateInput: () => (/* binding */ startDateInput),
/* harmony export */   startDateInputEdit: () => (/* binding */ startDateInputEdit)
/* harmony export */ });
// DOM Elements
var selectOperacao = document.getElementById('select-operacao');
var selectCliente = document.getElementById('select-cliente');
var selectEditCliente = document.getElementById('select-cliente-edit');
var selectEditOperacao = document.getElementById('select-operacao-edit');
var collapseElements = document.querySelectorAll('.multi-collapse');
var activeCollapses = document.querySelectorAll('.multi-collapse.show').length;
var calendarEl = document.getElementById('agendamentoCalendar');
var calendarElProg = document.getElementById('calendarProg');
var form = document.getElementById('myForm');
var formEdit = document.getElementById('myFormEdit');
var formBlock = document.getElementById('myFormBlock');
var dangerAlert = document.getElementById('danger-alert');
var calendarElemtHome = document.getElementById('homeCalendar');
var startDateInput = document.getElementById('start-date-block');
var endDateInput = document.getElementById('end-date-block');
var motivoEdit = document.getElementById('motivo-block-edit');
var startDateInputEdit = document.getElementById('start-date-block-edit');
var endDateInputEdit = document.getElementById('end-date-block-edit');
var editidBloq = document.getElementById('edit-id-bloq');
var calendarElBlock = document.getElementById('calendarBlock');
var eventId = document.getElementById('event-id');
var motivo = document.getElementById('motivo-block');

// jQuery Elements
var dataInicioRel = $('#datainicio');
var dataFimRel = $('#datafim');
var placaRel = $('#placa');
var motoristaRel = $('#motorista');
var cnhRel = $('#cnh');
var cpfRel = $('#cpf');
var msgPrincipal = $('#msgPrincipal');
var msgSecundaria = $('#msgSecundaria');
var btnControleAcesso = $('#btnControleAcesso');

// Bootstrap Modals
var myModal = new bootstrap.Modal(document.getElementById('form'));
var editModal = new bootstrap.Modal(document.getElementById('form-edit'));
var blockModal = new bootstrap.Modal(document.getElementById('block-edit'));
var modalFuncoes = new bootstrap.Modal(document.getElementById('modalFuncoes'));
var blockModalForm = new bootstrap.Modal(document.getElementById('form-bloqueio'));
var registroAcesso = new bootstrap.Modal(document.getElementById('registroAcesso'));
var blockModalFormEdit = new bootstrap.Modal(document.getElementById('form-bloqueio-edit'));
var progamModal = new bootstrap.Modal(document.getElementById('modal-prog'));
var importProgamModal = new bootstrap.Modal(document.getElementById('modal-prog-import'));
var cameraModal = new bootstrap.Modal(document.getElementById('cameraModal'));
var modalDetalhesMotorista = new bootstrap.Modal(document.getElementById('modalDetalhesMotorista'));

/***/ }),

/***/ "./resources/js/sidebar/index.js":
/*!***************************************!*\
  !*** ./resources/js/sidebar/index.js ***!
  \***************************************/
/***/ (() => {

// Loading
$(function () {
  $("#loading-wrapper").fadeOut(1000);
});

// Toggle sidebar
$("#toggle-sidebar").on('click', function () {
  $(".page-wrapper").toggleClass("toggled");
});

// Toggle sidebar fullscreen
$("#toggle-sidebar-fullscreen").on('click', function () {
  $(".page-wrapper.fullscreen").toggleClass("toggled-fullscreen");
});

// Toggle sidebar togglescreen
$("#sidebar-togglescreen").on('click', function () {
  $(".page-wrapper.togglescreen").toggleClass("toggled-togglescreen");
});

// Sidebars JS
jQuery(function ($) {
  $(".sidebar-dropdown > a").on('click', function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });

  // Added by Srinu 
  $(function () {
    // When the window is resized, 
    $(window).resize(function () {
      // When the width and height meet your specific requirements or lower
      if ($(window).width() <= 768) {
        $(".page-wrapper").removeClass("pinned");
      }
    });
    // When the window is resized, 
    $(window).resize(function () {
      // When the width and height meet your specific requirements or lower
      if ($(window).width() >= 768) {
        $(".page-wrapper").removeClass("toggled");
      }
    });
  });
});

/***/ }),

/***/ "./node_modules/chalk/node_modules/ansi-styles/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/chalk/node_modules/ansi-styles/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert === undefined) {
		colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});


/***/ }),

/***/ "./node_modules/chalk/source/index.js":
/*!********************************************!*\
  !*** ./node_modules/chalk/source/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/chalk/node_modules/ansi-styles/index.js");
const {stdout: stdoutColor, stderr: stderrColor} = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/browser.js");
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = __webpack_require__(/*! ./util */ "./node_modules/chalk/source/util.js");

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = __webpack_require__(/*! ./templates */ "./node_modules/chalk/source/templates.js");
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

module.exports = chalk;


/***/ }),

/***/ "./node_modules/chalk/source/templates.js":
/*!************************************************!*\
  !*** ./node_modules/chalk/source/templates.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

module.exports = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};


/***/ }),

/***/ "./node_modules/chalk/source/util.js":
/*!*******************************************!*\
  !*** ./node_modules/chalk/source/util.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


const stringReplaceAll = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

module.exports = {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
};


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
const route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/laravel-mix/src/Log.js":
/*!*********************************************!*\
  !*** ./node_modules/laravel-mix/src/Log.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const chalk = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");

/**
 * @typedef {object} LogMessage
 * @property {string} text
 * @property {'info' | 'warn' | 'error'} type
 **/

/**
 * @typedef {'default' | 'green' | 'red'} LogColor
 **/

class Log {
    /**
     * Determine if we are in test mode.
     */
    static testing = false;

    /**
     * All logged messages.
     *
     * @type {string[]}
     */
    static fakedLogs = [];

    /**
     * Log basic info to the console.
     *
     * @param  {string} message
     * @param  {LogColor} color
     */
    static info(message, color = 'default') {
        if (Log.testing) {
            Log.fakedLogs.push(message);

            return;
        }

        console.log(Log.colors()[color], message);

        Log.reset();
    }

    /**
     *
     * @param {LogMessage} message
     */
    static message(message) {
        if (Log.testing) {
            Log.fakedLogs.push(message.text);

            return;
        }

        /** @type {string} */
        let prefix = '';

        if (message.type === 'info') {
            prefix = ' INFO ';
        } else if (message.type === 'warn') {
            prefix = ' WARN ';
        } else if (message.type === 'error') {
            prefix = ' ERR ';
        }

        const line = message.text.replace(/\n/g, '\n' + ' '.repeat(prefix.length + 1));

        if (message.type === 'info') {
            console.warn(`${chalk.bgBlue.white(prefix)} ${chalk.white(line)}`);
        } else if (message.type === 'warn') {
            console.warn(`${chalk.bgYellow.black(prefix)} ${chalk.yellow(line)}`);
        } else if (message.type === 'error') {
            console.warn(`${chalk.bgRed.white(prefix)} ${chalk.red(line)}`);
        }
    }

    /**
     * Log feedback info to the console.
     *
     * @param  {string} message
     * @param  {LogColor} color
     */
    static feedback(message, color = 'green') {
        Log.line('\t' + message, color);
    }

    /**
     * Log error info to the console.
     *
     * @param  {string} message
     * @param  {LogColor} color
     */
    static error(message, color = 'red') {
        Log.line(message, color);
    }

    /**
     * Log a new line of info to the console.
     *
     * @param  {string} message
     * @param  {LogColor} color
     */
    static line(message, color = 'default') {
        Log.info(message, color);
    }

    /**
     * Reset the default color for future console.logs.
     */
    static reset() {
        console.log(Log.colors()['default'], '');
    }

    /**
     * Enter testing mode.
     */
    static fake() {
        Log.testing = true;
    }

    /**
     * Exit testing mode.
     */
    static restore() {
        Log.testing = false;
        Log.fakedLogs = [];
    }

    /**
     * Determine if the given message was logged.
     *
     * @param  {string|string[]} messages
     */
    static received(messages) {
        messages = Array.isArray(messages) ? messages : [messages];

        let result = messages.every(message =>
            this.fakedLogs.some(log => log.includes(message))
        );

        this.restore();

        return result;
    }

    /**
     * The colors lookup table.
     */
    static colors() {
        return {
            default: '\x1b[0m',
            green: '\x1b[32m',
            red: '\x1b[31m'
        };
    }
}

module.exports = Log;


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/supports-color/browser.js":
/*!************************************************!*\
  !*** ./node_modules/supports-color/browser.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

module.exports = {
	stdout: false,
	stderr: false
};


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"resources_js_calendar_calendarHome_js":1,"resources_js_calendar_calendarAgendamento_js-resources_js_calendar_calendarProgam_js":1,"resources_js_controle_acesso_relatorios_relatorios_js":1}[chunkId]) return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("css/app" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;