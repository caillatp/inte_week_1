var elem1 = 0;
var elem2 = 0;
var elem3 = 0;
var Count = 0;
var max = 0;
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
        handleDropEvent(event, ui);
        var $this = $(this);
        ui.draggable.position({
        my: "center",
        at: "center",
        of: $this,
       using: function(pos) {
        $(this).animate(pos, 200, "linear");  
        }
    });
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
      $('.content_'+ idx ).prepend('<img id="theImg" src="../img/img_beta_app/'+ draggable.attr('id') +'.png" />');
        idx--;  
        }
    }else if (elem1 == 1 && elem2 == 0){
        elem2 = 1;
        idx = 5;
        while (idx > 1){
            $('.content_' + idx ).empty(); 
            $('.content_' + idx ).prepend('<img id="theImg" src="../img/img_beta_app/'+ draggable.attr('id') +'.png" />');
            idx = idx - 3;
        }
    }else if (elem1 == 1 && elem2 == 1){
        elem3 = 1;
        idx = 4;
        while (idx > 0){
            $('.content_' + idx ).empty(); 
            $('.content_' + idx ).prepend('<img id="theImg" src="../img/img_beta_app/'+ draggable.attr('id') +'.png" />');
            idx = idx - 3;
        }
    }
}

function Clearall(){
   // delete de la prev
    var idx = 6;
    while (idx > 0){
         $('.content_' + idx ).empty(); 
        idx--;
    }
    //reset de id=menu-app
    elem1 = 0;
    elem2 = 0;
    elem3 = 0;
    $( "#menu-app" ).empty(); 
    $( "#menu-app" ).load( "../html/beta_app.html #menu-content" ); // réintergation des images après supr
    alert("Refresh ok");    //--> problème ici
    $( init );
}

/*
function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
}*/
