
let datas = new Date()



 let mes = String(datas.getMonth()+1)

 let dia = String(datas.getDate())


 var primeiroDiaMeS = new Date(datas.getFullYear(), datas.getMonth(),1);
 var ultimoDiaMes = new Date(datas.getFullYear(), datas.getMonth() + 1 , 0);


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

 programadoMes = 13000;


//  $('document').ready(function(){
//   $.post('graficos/valorMetaMensal.php',function(result){
//     var data = JSON.parse(result);

    
//     // programadoMes.push(data[0].valorDaMeta);

//     programadoMes = data[0].valorDaMeta;

//     // console.log(data);


//   })


// });

 

 






function retornaMetaDia(){

  let = programadoDia = []

   for(let i = 1; i <= qtdiaMes(); i++ ){
       programadoDia.push(Math.round(programadoMes / qtdiaMes()))
   }

   
   return programadoDia
} 







    ////////////////////////////////////Tabela infos//////////////////////////////////////////////

    $('document').ready(function(){

      

  var data_inicio = primeiroDiaMeS.toLocaleDateString("pt-BR").split('/').reverse().join('-');
  var data_final = ultimoDiaMes.toLocaleDateString("pt-BR").split('/').reverse().join('-');

  $.post('graficos/graficoTabela.php',{data_inicio:data_inicio,data_final:data_final},function(result){

    var data = JSON.parse(result);
              var carregadoEmBigbag = [];
              var carregadoEmGranel = [];
              var totalVeiculosCarregados = [];
          
  
  
              for(let i in data){
                  carregadoEmBigbag.push(data[i].carregadoEmBigbag);
                  carregadoEmGranel.push(data[i].carregadoEmGranel);
                  totalVeiculosCarregados.push(data[i].totalVeiculosCarregados);
                  
                  

              }
              tabelaInfo(carregadoEmBigbag,carregadoEmGranel, totalVeiculosCarregados,programadoMes)

            })



            ///////////////////////////

            $.post('graficos/metaProgramadaNaoExecut.php',{data_inicio:data_inicio,data_final:data_final},function(result){

              var data = JSON.parse(result);
          
                        var metaProgramadaNaoExecutada = [];

                    
            
            
                        for(let i in data){
                            metaProgramadaNaoExecutada.push(data[i].metaProgramadaNaoExecutada);

                      
          
                        }
          
                        tabelaInfoMetaNaoExecut(metaProgramadaNaoExecutada)
                        
                        
                      })

////////////////////////


  
  })

  function tabelaInfoMetaNaoExecut(metaProgramadaNaoExecutada){
    var metaProgramadaNaoExecutadaa = document.createTextNode(metaProgramadaNaoExecutada)
    document.getElementById('metaProgramadaNaoExecutada').appendChild(metaProgramadaNaoExecutadaa)
  }



  function tabelaInfo(carregadoEmBigbag, carregadoEmGranel, totalVeiculosCarregados,programadoMes){

    var carregadoEmBigbag = document.createTextNode(carregadoEmBigbag)
    document.getElementById('carregadoEmBigbag').appendChild(carregadoEmBigbag)
    
    var carregadoEmGranel = document.createTextNode(carregadoEmGranel)
    document.getElementById('carregadoEmGranel').appendChild(carregadoEmGranel)

    var totalVeiculosCarregados = document.createTextNode(totalVeiculosCarregados)
    document.getElementById('totalVeiculosCarregados').appendChild(totalVeiculosCarregados)

    
    var labelMeta = document.createTextNode(programadoMes)
    document.getElementById('totalMeta').appendChild(labelMeta)

    
    var Metadia = programadoMes / qtdiaMes()
    var labelMeta = document.createTextNode(Math.round(Metadia))
    document.getElementById('MetaDiaria').appendChild(labelMeta)


  }
  

 


  ////////////////////////////////////////////// GRAFICO BARRA/////////////////////////////////////////////////////////////////




$('document').ready(function(){

  
 

  var data_inicio = primeiroDiaMeS.toLocaleDateString("pt-BR").split('/').reverse().join('-');
  var data_final = ultimoDiaMes.toLocaleDateString("pt-BR").split('/').reverse().join('-');

  $.post('graficos/graficoBar.php',{data_inicio:data_inicio,data_final:data_final},function(result){
  

  var data = JSON.parse(result);


  var quantidadeArray = [];
  var dataArray = [];



  for(let i in data){
      quantidadeArray.push(data[i].produzidoDia)
      dataArray.push(data[i].data_fim.split('-').reverse().join('/'))
  }


 graficoBar(dataArray, quantidadeArray )


})



  })



function graficoBar (datachegada, quantidade){

 


  const labels = datachegada

    const data = {
    labels: labels,
    datasets: [{
        label: 'Meta diaria',
        backgroundColor: 'rgb(166, 249, 247)',
        borderColor: 'rgb(255, 99, 132)',
        data: retornaMetaDia()

    },{

        label: 'Executado',
        backgroundColor: 'rgb(47,79,79)',
        borderColor: 'rgb(255, 99, 132)',
        data: quantidade

        
    }],
    
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
            ticks: {
                max: 1000,
                min: 0,
                // stepSize: 50
            }
        }]
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myBarChart'), config );
  

}

//////////////////////////////////Grafico Pizza////////////////////////////////////////////////////

$('document').ready(function(){
  var data_inicio = primeiroDiaMeS.toLocaleDateString("pt-BR").split('/').reverse().join('-');
  var data_final = ultimoDiaMes.toLocaleDateString("pt-BR").split('/').reverse().join('-');


  $.post('graficos/graficoPie.php',{data_inicio:data_inicio,data_final:data_final},function(result){

    var data = JSON.parse(result);


    var quantidadeProdMes = [];
        
            


    for(let i in data){
        quantidadeProdMes.push(data[i].produzidoTotal)
        
    }
    
    graficoPie(quantidadeProdMes)

    
})

})


function graficoPie(totalProduzido){

const totalMetaMes = programadoMes

const saldoPendente = totalMetaMes - totalProduzido


///////////////////////////Parte do grafico em tabela///////////////////////////////


var labelPendente = document.createTextNode(saldoPendente)
document.getElementById('saldoPendente').appendChild(labelPendente)

var necessidadeVeicuPdiaPobjetivo = document.createTextNode(Math.round((saldoPendente /50) / (qtdiaMes() - dia)))
document.getElementById('necessidadeVeicuPdiaPobjetivo').appendChild(necessidadeVeicuPdiaPobjetivo)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const data = {
    labels: [
      'Total Meta',
      'Executado',
      'Saldo Pendente'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [totalMetaMes, totalProduzido, saldoPendente],
      backgroundColor: [
        'rgb(166, 249, 247)',
        'rgb(47,79,79)',
        'rgb(255,228,181)'
      ],
    //   hoverOffset: 4
    }]
  };


    
      const config = {
        type: 'pie',
        data: data,
      };
    
      const myChart = new Chart(
        document.getElementById('myPieChart'),
        config
      );
      
    }

    




    
