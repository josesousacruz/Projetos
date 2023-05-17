
$(function(){
       
    $(".sortable").sortable({
        connectWith: ".sortable",
        placeholder: 'bg-light.bg-gradient',
        scroll: true,
        animation: 150,
        revert: true,
        ghostClass: 'blue-background-class',
        cursor: "move",
        update: function(event, ui) {
             var cad_id_item_list = $(this).sortable('toArray').toString();
           
             $.ajax({
                 url: 'ordenar.php',
                 type: 'POST',
                 data: {id : cad_id_item_list},
                 success: function(data) {
                
                 }
             });
        },
        start: function(event, ui) {
            
            $(ui.item).find("td").addClass("invisible");
        
        },
        stop: function(event, ui) {
            $(ui.item).find("td").removeClass("invisible");
        }
        
    });
}); 



  
  