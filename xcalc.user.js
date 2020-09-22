$(document).ready(function(){
   
    $('input[name="fields[design]"]').change(function(){
         var image = $(this).parent().find('img').attr('src');
        
         $('.uk-bacgkround-cover-changed').css({
            'background':'url("'+image+'") no-repeat top #F9FAF5', 
            'background-size': '100% auto', // '100% auto'
            'height': '100%',
            'width': '50%',
            'position': 'fixed',
         });    
         
         $('.uk-bacgkround-cover').css({
            'background':'url("'+image+'") no-repeat top #F9FAF5', 
            'background-size': '100% auto', // '100% auto'
         });        
         
         //let timerId = setInterval(() => alert('tick'), 2000);
         //$('.uk-drop').show();
        
     });
    
    
     
 });