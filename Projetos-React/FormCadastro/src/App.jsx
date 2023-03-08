import { useState } from "react";



function App() {

  const [data, setData] = useState(
    {
      fullName: '',
      email: '',
      maritalStatus: '',
      genre: ''
    }
  )

  const handleChange = (event) => {

    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value }


      return newData
    })
  }


  const calculateProress = () => {

    let value = 0;
    let amauntToAdd = 25;



    if (data.fullName) {
      const explodeString = data.fullName.split(' ');
      if (explodeString[1]) {
        value += amauntToAdd
      }
    }
    if (data.email) {
      let regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (regular.test(data.email)) {
        value += amauntToAdd
      }


    }
    if (data.maritalStatus) {
      value += amauntToAdd
    } if (data.genre) {
      value += amauntToAdd
    }

    return value

  }

  const handleClick = () => {
    alert("Formulario enviado")

    setData( 
      {
        fullName: '',
        email: '',
        maritalStatus: '',
        genre: ''
      })
  }

  return (
    <div className='App'>
      <h1>Formulário</h1>

      <main>
        {/* crie a barra de progresso aqui */}
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateProress()}%` }}></div>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name="fullName" value={data.fullName} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input name="email" value={data.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name="maritalStatus" value={data.maritalStatus} onChange={handleChange}>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' name='genre' value={'Masculino'} onChange={handleChange} checked={data.genre === 'Masculino'} /> Masculino
            </span>
            <span>
              <input type='radio' name='genre' value={'Feminino'} onChange={handleChange} checked={data.genre === 'Feminino'} /> Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick}  disabled={calculateProress() !== 100}> Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
