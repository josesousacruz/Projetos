
let datas = new Date()

var primeiroDiaMeS = new Date(datas.getFullYear(), datas.getMonth(),1);




 let mes = String(datas.getMonth()+1)

 let dia = String(datas.getDate())
 
 

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

 programadoMes = 13000

function retornaMetaDia(){

   let = programadoDia = []

    for(let i = 1; i <= qtdiaMes(); i++ ){
        programadoDia.push(Math.round(programadoMes / qtdiaMes()))
    }

    
    return programadoDia
} 


function retornaDiasDoMes(){

    let resultados = []
    for(let i = 1; i <= qtdiaMes(); i++ ){
        resultados.push(i)
    }
    // console.log(resultados)
    return resultados
}








////////////////////////////////////////////// GRAFICO BARRA/////////////////////////////////////////////////////////////////

$('#search').click(function(){
  
  var data_inicio = $('#data_inicio').val();
  var data_final = $('#data_final').val();



    if(data_inicio != '' && data_final != ''){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$.post('graficos/graficoPieFilter.php',{data_inicio:data_inicio,data_final:data_final},function(result){

  var data = JSON.parse(result);


  var quantidadeProdMes = [];
      
          


  for(let i in data){
      quantidadeProdMes.push(data[i].produzidoTotal)
      
  }
  
  graficoPie(quantidadeProdMes)

  
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      $.post('graficos/graficoBarFilter.php',{data_inicio:data_inicio,data_final:data_final},function(result){

        var data = JSON.parse(result);
        

        var quantidadeArray = [];
        var dataArray = [];
        
        


        for(let i in data){
          quantidadeArray.push(data[i].produzidoDia)
          dataArray.push(data[i].data_fim.split('-').reverse().join('/'))
          
      }
      graficoBar(dataArray, quantidadeArray )
    
    

      })

     
    }else{
     alert("Os filtros requerem parametros");
    }
  

 

 });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function graficoPie(totalProduzido){

  const totalMetaMes = programadoMes
  
  const saldoPendente = totalMetaMes - totalProduzido
  
  

  
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




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

        label: 'Produzido',
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
    document.getElementById('myBarChart'),
    config
  );
  

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////