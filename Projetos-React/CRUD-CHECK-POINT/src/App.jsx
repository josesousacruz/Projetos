import { useState } from "react";

export default function App() {

    const [data, setData] = useState(
        //State com um objeto contendo os campos do form
        {
            Titulo: '',
            Categoria: '',
            Data: '',
            Descr: ''
        }
    )

    const [listaItens, setlistaItens] = useState([])
    //State contendo array que vai armazenar os itens

    // const listaItensStorage = JSON.parse(localStorage.getItem('cad_livro')) ?? []

    const handleClick = () => {
        //função que vai setar para lista de itens, tds os objetos da lista atual,
        // mais um novo item com as informações contidas no state data
        setlistaItens([...listaItens,
        {
            id: new Date().getTime(),
            Titulo: data.Titulo,
            Categoria: data.Categoria,
            Data: data.Data,
            Descr: data.Descr
        }])

        // localStorage.setItem('cad_livro', JSON.stringify([...listaItens,data]))

        setData(
            //Zera novamente os valores do state data
            {
                Titulo: '',
                Categoria: '',
                Data: '',
                Descr: ''
            }
        )

    }




    const handleChange = (event) => {
        //função vai ser chamada no metodo onChange de cada input

        const { name, value } = event.target;
        // vai pegar o nome e valor do input onde foi acionada o metodo

        setData((prev) => {
            const newData = { ...prev, [name]: value }
            //Seta o state data mantendo os demais campo e alterando onde foi acionado o metodo

            return newData
        })
    }

    const handleDelete = (id) => {
        // Função recebe o parametro id
        const result = listaItens.filter((obj) => obj.id !== id)
        // result recebe o filtro de listaItens sem o obj que o id é igual ao passado no parametro
        setlistaItens(result)


        setData(
            {
                Titulo: '',
                Categoria: '',
                Data: '',
                Descr: ''
            }
            )

    }


    const handleEdit = (id) => {
        const result = listaItens.filter((obj) => obj.id === id)
        //Retorna o obj que o id é igual ao passado em parametro


        setData(
            // Seta data passando a const result(q é um array), 
            //o index 0 pq é o unico q foi retornado mais a propiedade
            {   id: result[0].id,
                Titulo: result[0].Titulo,
                Categoria: result[0].Categoria,
                Data: result[0].Data,
                Descr: result[0].Descr
            })
    }

    const handleSave = () =>{
        
        //implementar o update

        setData(
            {   id: '',
                Titulo: '',
                Categoria: '',
                Data: '',
                Descr: ''
            })
    

    }


    const calculateProress = () => {
        //função q retorna um valor de acordo com a quantidade de campos preenchidos

        let value = 0;
        let amauntToAdd = 25;



        if (data.Titulo) {
            value += amauntToAdd

        }
        if (data.Categoria) {
            value += amauntToAdd
        }
        if (data.Data) {
            value += amauntToAdd
        }
        if (data.Descr) {
            value += amauntToAdd
        }

        return value

    }



    return (
        <>
            <main>
                <div className="bar-container">
                    <div className="bar" style={{ width: `${calculateProress()}%` }}></div>
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Titulo</label>
                    <input name="Titulo" value={data.Titulo} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Categoria</label>
                    <select name="Categoria" value={data.Categoria} onChange={handleChange}>
                        <option value=''>- selecione...</option>
                        <option value='Romance'>Romance</option>
                        <option value='Terror'>Terror</option>
                        <option value='Ação'>Ação</option>
                    </select>

                </div>
                <div className='form-group'>
                    <label htmlFor=''>Data</label>
                    <input type='date' name="Data" value={data.Data} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Descrição</label>
                    <input name="Descr" value={data.Descr} onChange={handleChange} />
                </div>
                <button onClick={data.id ? handleSave : handleClick} disabled={calculateProress() !== 100} >
                   {data.id ? "Editar": "Salvar"} 
                </button>
            </main>




            <section className="flex justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-8">
                <div className="h-full">

                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Livros</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Titulo</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Categoria</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Data</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Descrição</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">

                                        {listaItens.map((item) => (
                                            <tr key={item.id}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">

                                                        <div className="font-medium text-gray-800">{item.Titulo}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{item.Categoria}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium">{item.Data}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-center">{item.Descr}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap" >
                                                    <button onClick={() => handleEdit(item.id)} className="p-0 whitespace-nowrap">Edit</button>
                                                    <button onClick={() => handleDelete(item.id)} className="p-0 whitespace-nowrap">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
