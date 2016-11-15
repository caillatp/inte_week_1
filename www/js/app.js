$( init );
var elem1 = 0;
var elem2 = 0;
var elem3 = 0;
function init(elem1, elem2, elem3) {
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
    $('.drop').droppable( {
        drop: function(event, ui) {
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

function ClearPrev(){
    var idx = idx = 6;
    while (idx > 0){
         $('.content_' + idx ).empty(); 
        idx--;
    }
}

function ClearChoice(){
    $('choice_1').empty();  
    $('choice_2').empty();  
    $('choice_3').empty();  
}

/*
function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
}*/
