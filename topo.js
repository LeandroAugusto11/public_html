/**
*@author Leandro Augusto
*/
$(document).ready(function(){
    $(function(){
        $('.Top').click(function(){
            $('html,body').animate({scrollTop: 0}, 'slow');
        });
    });
});