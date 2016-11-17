var elem1 = 0, elem2 = 0, elem3 = 0, max = 0;
local_file = "../html/beta_app.html";
$( init );
function init() { 
    $('.drag').draggable({
        containment: '.container',
        snap: false,
        revert : function(event, ui) {
            $(this).data("draggable").originalPosition = {
                top : 0,
                left : 0
            };
            return !event;
        },
  });

  // drop unique par choix pour spécifier le nombre de contenu
    $('.drop').droppable( {
        drop: function(event, ui){
        if (max == 0){
        $( "img" ).remove("#" + ui.draggable.attr('id'));
        handleDropEvent(event, ui);
        }else{
            Clearall();
        }    
    }
    });
  }


// Afficher le prévisionnage 
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  if ( elem1 == 0){
      idx = 6;
      elem1 = 1;
      while (idx > 0){
      $('.content_'+ idx ).prepend('<img class="rotate" src="../img/app_img/elem/'+ draggable.attr('id') +'.png" />');
        idx--;  
        }
    }else if (elem1 == 1 && elem2 == 0){
        elem2 = 1;
        idx = 5;
        while (idx > 1){
            $('.content_' + idx ).empty(); 
            $('.content_' + idx ).prepend('<img class="rotate135" src="../img/app_img/elem/'+ draggable.attr('id') +'.png" />');
            idx = idx - 3;
        }
    }else if (elem1 == 1 && elem2 == 1){
        elem3 = 1;
        idx = 4;
        while (idx > 0){
            $('.content_' + idx ).empty(); 
            $('.content_' + idx ).prepend('<img class="rotate45" src="../img/app_img/elem/'+ draggable.attr('id') +'.png" />');
            idx = idx - 3;
        }
    }if (elem1 == 1 && elem2 == 1 && elem3 == 1){
        max = 1;
    }
}

function Clearall(){
    var idx = 6;
    while (idx > 0){
         $('.content_' + idx ).empty(); 
        idx--;
    }
    elem1 = 0;
    elem2 = 0;
    elem3 = 0;
    max = 0;
    $( "#menu-app" ).empty(); 
    $( "#menu-app" ).load( local_file +" #menu-content" );
    setTimeout(function(){ $( init ); }, 1000);
}