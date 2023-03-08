
import { MdDelete } from "react-icons/md";




const onRemove = (todo)=>{
    setLista(lista.filter((obj)=> obj.id !== todo.id));
    console.log("remove", todo.title)
  }

  const onToggle = (todo) =>{
    setLista(
     lista.map((obj)=>(obj.id === todo.id ?
     {...obj, checked: !todo.checked }: obj))
     ) 
 
   }




const List = () => {


    return (
/* <div>ola</div> */
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

        )


}
export default List;