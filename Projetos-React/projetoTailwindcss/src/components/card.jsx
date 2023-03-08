const listaUser = [
    { id: new Date().getTime(), name: 'José', role:"Admin", creatAt: "05/03/2023", status: "Active"}
    
]


 export default function Card (){

    return(

        listaUser.map((user)=>(
    <tr key={user.id} >
    <td  className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <a href="#" className="relative block">
                    <img alt="profil" src="/images/person/8.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
            </div>
            <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                    {user.name}
                </p>
            </div>
        </div>
    </td>
    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
            {user.role}
        </p>
    </td>
    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
            {user.creatAt}
        </p>
    </td>
    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
            </span>
            <span className="relative">
                {user.status}
            </span>
        </span>
    </td>
    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
        </a>
    </td>
</tr>
)
        )

)
  }