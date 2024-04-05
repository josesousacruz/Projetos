<?php

namespace App\Http\Controllers;

use App\Models\Entidade;
use App\Models\Entidade_contato;
use App\Models\Entidade_endereco;
use App\Models\Entidade_pessoa_fisica;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class GerenciamentoController extends Controller
{
    public function show($tipo = null)
    {
        return view('gerenciamento.index', compact('tipo'));
    }

    public function listarPessoas()
    {
        $entidades = Entidade::has('entidade_fisica')
            ->select('id', 'nome', 'ativo')
            ->with(['entidade_fisica' => function ($query) {
                $query->select('id', 'id_entidade', 'cpf', 'cnh', 'rg', 'imagem');
            }, 'entidade_contatos' => function ($query) {
                $query->select('id', 'id_entidade', 'email', 'contato');
            }, 'entidade_endereco' => function ($query) {
                $query->select('id', 'id_entidade', 'cep', 'cidade', 'complemento', 'uf');
            }])
            ->get();

        return response()->json($entidades);
    }

    public function updateGerenciamentoPessoa(Request $request)
    {
        $entidadeData = $request->all();

        $entidade = Entidade::where('id', $request->id_entidade)->first();
        $entidade_pessoa_fisica = Entidade_pessoa_fisica::where('id_entidade', $request->id_entidade)->first();
        $entidade_pessoa_contato = Entidade_contato::where('id_entidade', $request->id_entidade)->first();
        $entidade_pessoa_endereco = Entidade_endereco::where('id_entidade', $request->id_entidade)->first();

        if ($entidade) {
            if ($request->has('checked')) {
                $entidade->ativo = $entidade->ativo == 0 ? 1 : 0;
            }
            $entidade->update($entidadeData);

            if ($entidade_pessoa_fisica) {
                $entidade_pessoa_fisica->update($entidadeData);
            }
            if ($entidade_pessoa_contato) {
                $entidade_pessoa_contato->update($entidadeData);
            }
            if ($entidade_pessoa_endereco) {
                $entidade_pessoa_endereco->update($entidadeData);
            }

            return response()->json([
                'entidade' => $entidade,
                'entidade_pessoa_fisica' => $entidade_pessoa_fisica,
                'entidade_pessoa_contato' => $entidade_pessoa_contato,
                'entidade_pessoa_endereco' => $entidade_pessoa_endereco
            ], 201);;
        } else {
            return response()->json(['error' => 'Entidade não encontrada'], 404);
        }
    }

    public function uploadImagem(Request $request)
    {
        $motoristaId = $request->id_entidade;
        $imageName = $motoristaId . '.jpeg';
        $imagePath = public_path('images/motoristas/' . $imageName);
        $entidade_pessoa_fisica = Entidade_pessoa_fisica::where('id_entidade', $motoristaId)->first();

        if (!$request->image) {
            if (File::exists($imagePath)) {
                $deleted = File::delete($imagePath);
                if ($deleted) {

                    $entidade_pessoa_fisica->update(['imagem' => DB::raw('DEFAULT')]);

                    return response()->json(['message' => 'Arquivo deletado com sucesso.', 'path' => $entidade_pessoa_fisica]);
                } else {
                    return response()->json(['error' => 'Falha ao deletar o arquivo.', 'path' => $imagePath], 500);
                }
            } else {
                return response()->json(['error' => 'Arquivo não encontrado.', 'path' => $imagePath], 404);
            }
        }

        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg|max:800',
            'id_entidade' => 'required|integer',
        ], [
            'image.required' => 'Por favor, selecione uma imagem.',
            'image.mimes' => 'O formato da imagem deve ser JPEG, PNG, JPG.',
            'image.max' => 'O tamanho da imagem não deve exceder 800K.',
            'id_entidade.required' => 'O ID do motorista é obrigatório.',
            'id_entidade.integer' => 'O ID do motorista deve ser um número inteiro.',
        ]);

        $imageName = $motoristaId . '.jpeg';
        $request->image->move(public_path('images/motoristas'), $imageName);
        $entidade_pessoa_fisica->update(['imagem'=>'images/motoristas/'.$motoristaId]);

        return response()->json(['success' => 'Imagem enviada com sucesso.']);
    }
}
