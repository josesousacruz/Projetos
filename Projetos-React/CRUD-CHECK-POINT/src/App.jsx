import { useState } from "react";

export default function App() {

    const [data, setData] = useState(
        {
            Titulo: '',
            Categoria: '',
            Data: '',
            Descr: ''
        }
    )

    const [listaItens, setlistaItens] = useState([])

    const listaItensStorage = JSON.parse(localStorage.getItem('cad_livro')) ?? []

    // setlistaItens([listaItensStorage])


    const handleClick = () => {
        setlistaItens([...listaItens,
        {
            id: new Date().getTime(),
            Titulo: data.Titulo,
            Categoria: data.Categoria,
            Data: data.Data,
            Descr: data.Descr
        }])

        localStorage.setItem('cad_livro', JSON.stringify([...listaItens,data]))

        setData(
            {
                Titulo: '',
                Categoria: '',
                Data: '',
                Descr: ''
            }
        )

    }




    const handleChange = (event) => {

        const { name, value } = event.target;

        setData((prev) => {
            const newData = { ...prev, [name]: value }

            return newData
        })
    }

    const handleDelete = (id) => {

        const result = listaItens.filter((obj) => obj.id !== id)
        setlistaItens(result)

    }


    const handleEdit = (id) => {
        const result = listaItens.filter((obj) => obj.id === id)

        setData(
            {   id: result[0].id,
                Titulo: result[0].Titulo,
                Categoria: result[0].Categoria,
                Data: result[0].Data,
                Descr: result[0].Descr
            })
    }

    const handleSave = () =>{
        console.log("Editar")

        setData(
            {   id: '',
                Titulo: '',
                Categoria: '',
                Data: '',
                Descr: ''
            })
    

    }


    const calculateProress = () => {

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
                    <input name="Data" value={data.Data} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Descrição</label>
                    <input name="Descr" value={data.Descr} onChange={handleChange} />
                </div>
                <button onClick={data.id ? handleSave : handleClick} disabled={calculateProress() !== 100} > Enviar Formulário</button>
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
