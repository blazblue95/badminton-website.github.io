$(document).ready(function(event){

    /* intro button toggle for sections*/

    /* */

    $("#buttondiv").click( function() {
        console.log('hola');
        $("#sidebar").animate( {width: '20%'}, 'slow');
    });

    $("#sidebar").click( function() {
        $("#sidebar").animate( {width: '0'}, 'slow');
    })

    
});