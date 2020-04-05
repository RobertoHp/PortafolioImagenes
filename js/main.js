$(document).ready(function(){
    $('.enlaces').click(function(){
        var valor = $(this).attr('data-nombre');
        
        $(this).addClass('activo').siblings().removeClass('activo');
        
        if(valor == 'todos'){
            $('.filtro').show('1000');
        }else{
            $('.filtro').not('.' + valor).hide('10');
            $('.filtro').filter('.' + valor).show('500');
        }

     
    });
});