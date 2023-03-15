import { useState } from 'react'
import { MdDelete } from "react-icons/md";

function Main() {




  const [lista, setLista] = useState([]);
  const [value, setValue] = useState('');


  const onRemove = (todo)=>{
    setLista(lista.filter((obj)=> obj.id !== todo.id)); 
    console.log("remove", todo.title)
  }

  const limpar = () => {
    setValue("");
  }

  const onToggle = (todo) =>{
   setLista(
    lista.map((obj)=>(obj.id === todo.id ?
    {...obj, checked: !todo.checked }: obj))
    ) 

  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const submit = () => {
    setLista(
      [...lista
        , { id: new Date().getTime(), title: value, checked: false }
      ])
    console.log(value)

    limpar();
  }

  const onKeyDown = (event) => {
    const ENTER_KEY = 13
    const ESCAPE_KEY = 27
    if (event.which === ENTER_KEY) {
      submit()
    } else if (event.which === ESCAPE_KEY) {
      limpar();
    }

  }
  return (

    <main className='container'>

      <h1 className='title'>Tarefas</h1>

      <input type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown} />

       <ul className="todo-listUl">
        {
          lista.map((todo) => (
            <li className="todo-listLi" key={todo.id.toString()}>
              <span
              onClick={()=>onToggle(todo)}
              onKeyPress={()=>onToggle(todo)}
              role="button"
              tabIndex={0}
               className={["todo", todo.checked ? "checked" : ""].join(" ")}>{todo.title}</span>
              <button onClick={()=> onRemove(todo)} type="button"><MdDelete size={18} />
               </button>

            </li>
          ))
        }



      </ul> 

    </main>
  )
}

export default Main;