import './bootstrap';

import Alpine from 'alpinejs';


window.Alpine = Alpine;

Alpine.start();

function getUser() {
  const userData = fetch(`/api/taskss`)
    .then(response => response.json())
    .then(data => data.forEach(element => {
      const newRow = document.createElement('tr')
        newRow.innerHTML =  `
        <tr class="bg-gray-800 tasks">                                            
        <td class="p-3">
         ${element.id}
        </td>
        <td class="p-3">
        ${element.task}
        </td>
        <td class="p-3 font-bold">
          200.00$
        </td>
        <td class="p-3">
          <span class="bg-green-400 text-gray-50 rounded-md px-2">available</span>
        </td>
        <td class="p-3 ">
          <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
            <i class="material-icons-outlined text-base">visibility</i>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
            <i class="material-icons-outlined text-base">edit</i>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
            <i class="material-icons-round text-base">delete_outline</i>
          </a>
        </td>
      </tr>
    
`
  document.getElementById('tasks').appendChild(newRow);
      
    }))
    .catch(error => console.log(error))
    .finally(() => console.log('fim'))
 }
 getUser()




