// let qtdDias = () => {
    
//            for(let i = 1; i <= 31; i++ ){
//           console.log(`${i}`)
      
//     }
  
// }
$('document').ready(function(){
  $.ajax({
    type: "POST",
    url: code.php,
    dataType: "JASON",
    succes: function (data){
  
    }
  });
  
})




const labels = ['1','2','3','4','5','6','7','8','9']

  const data = {
    labels: labels,
    datasets: [{
        label: 'Programado',
        backgroundColor: 'rgb(166, 249, 247)',
        borderColor: 'rgb(255, 99, 132)',
        data: [140, 140, 140,140 ,140,140]





    },{

        label: 'Produzido',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [150, 110, 185,200,250,180]
  



    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myAreaChart'),
    config
  );


