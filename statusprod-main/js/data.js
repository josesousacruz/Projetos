
 
 let data = new Date()

 let ano = data.getFullYear()

 let mes = String(data.getMonth()+1)

 let dia = String(data.getDate())

 let qtdiaMes = () =>{
     switch(mes){
         case `1` :
            return 31
            case `2` :
                return 28
                case `3` :
                    return 31
                    case `4` :
                        return 30
                        case `5` :
                            return 31
                            case `6` :
                                return 30
                                case `7` :
                                    return 31
                                    case `8` :
                                        return 31
                                        case `9` :
                                            return 30
                                            case `10` :
                                                return 31
                                                case `11` :
                                                    return 30
                                                    case `12` :
                                                        return 31
                        
     }
 }

 let qtdDias = () => {
    if (mes) {
           for(let i = 1; i <= qtdiaMes(); i++ ){
               console.log(i+`/`+mes+`/`+ano)           
    }
  }
}

 let diaAtual = () => {
    if(dia <= qtdiaMes()){
        return dia.toString()
    }
}



qtdDias()

// console.log(diaAtual()+`/`+mes+`/`+ano)



