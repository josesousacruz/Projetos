<?php

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\AcessoController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\EntidadeController;
use App\Http\Controllers\GerenciamentoController;
use App\Http\Controllers\JanelaBloqueioController;
use App\Http\Controllers\JanelasController;
use App\Http\Controllers\OptionsController;
use App\Http\Controllers\programacaoController;
use App\Http\Controllers\VeiculoController;
use App\Http\Controllers\VeiculosMovimentacaoController;
use App\Http\Controllers\RelatorioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', function () {
    return view('dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
    
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

/********************************Views*********************************/
Route::get('/', function () {
    return view('home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/agendamento', function () {
    return view('agendamento');
})->name('agendamento');

Route::get('/acesso', function () {
    return view('acesso');
})->name('acesso');

Route::get('/relatorios/{tipo?}', [RelatorioController::class, 'show'])->name('relatorios');
Route::get('/gerenciamento/{tipo?}', [GerenciamentoController::class, 'show'])->name('gerenciamentos');
/******************************************************************************* */

/*****************************Rotas Calendar********************************/
Route::post('/calendar', [CalendarController::class, 'getInfosCalendar']); //Read
/******************************************************************************* */

/*****************************Rotas CRUD Janelas********************************/
Route::post('/janelas/insert', [JanelasController::class, 'insertJanelas']); //Create
Route::get('/janelas', [JanelasController::class, 'listarJanelas']); //Read
Route::post('/janela', [JanelasController::class, 'janela']); //Read
Route::put('/janelas/update', [JanelasController::class, 'updateJanelas']); //Update
Route::delete('/delete-janela/{id}', [JanelasController::class, 'deleteJanela']); // Delete
/******************************************************************************* */

/*****************************Rotas CRUD Bloqueios********************************/
Route::post('janelas/bloqueio/insert', [JanelaBloqueioController::class, 'insertJanelasBloq']); //Create
Route::get('/janelas/bloqueios/{id}', [JanelaBloqueioController::class, 'janelasBloq']); //Read 
Route::get('/bloqueios/{id}', [JanelaBloqueioController::class, 'getBloq']); //Read
Route::put('/bloqueios/update', [JanelaBloqueioController::class, 'updateBloq']); //Update
Route::delete('/delete-bloqueio/{id}', [JanelaBloqueioController::class, 'deleteBloq']); //Delete
/**************************************************************************************** */

/*****************************Get Options********************************/
Route::get('/operacao', [OptionsController::class, 'listarOperacao']); //Read
Route::get('/clientes', [OptionsController::class, 'listarClientes']); //Read
/************************************************************************/

/*****************************Rotas CRUD Entidade********************************/
Route::get('/entidade', [EntidadeController::class, 'listarEntidades']); //Read
Route::post('/entidade/insert', [EntidadeController::class, 'insertEntidade']);
/********************************************************************************/

/*****************************Rotas CRUD Veiculo********************************/
Route::post('/veiculos/insert', [VeiculoController::class, 'insertVeiculos']); //Create
/********************************************************************************/

/*****************************Rotas CRUD Programacao******************************/
Route::post('/programacao/insert', [programacaoController::class, 'insertProgramacao']); // Create
Route::put('programacao/update', [programacaoController::class, 'updateProgramacao']);
/********************************************************************************/

/***************************Rotas Controle de acesso****************************/
Route::post('/acesso/triagem', [AcessoController::class, 'verificaProgram']);
Route::post('/acesso/movimentacao', [VeiculosMovimentacaoController::class, 'insertMovimentacao']);
Route::get('/movimentacao/verificar/{idVeiculo}', [VeiculosMovimentacaoController::class, 'verifyMovimentação']);

Route::post('/relatorio/veiculosNoTerminal', [RelatorioController::class, 'veiculosNoTerminal']);
Route::post('/relatorio/acessoVeiculos', [RelatorioController::class, 'acessosVeiculos']);

Route::post('/gerenciamento/pessoas', [GerenciamentoController::class, 'listarPessoas']);
Route::put('/gerenciamento/pessoas/update', [GerenciamentoController::class, 'updateGerenciamentoPessoa']);

Route::post('/upload-image',[GerenciamentoController::class,'uploadImagem']);
/******************************************************************************* */


require __DIR__.'/auth.php';
