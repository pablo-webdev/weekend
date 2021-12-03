$(document).ready(function(){          

    var mapa = $('.mapa-jq');
    var telefono = $('.telefono-jq');
    var mensaje = $('.mensaje-jq');

    mapa.on('mouseenter', function(){
        $('.mapa').css({
            'transition': '.7s',
            'background': 'linear-gradient(60deg,#FCE40B,#8BF609)',
            '-webkit-background-clip': 'text',
            '-moz-background-clip': 'text',
            'background-clip': 'text',
            'color': 'transparent' 
            });
        });

    mapa.on('mouseleave', function(){
        $('.mapa').css({
            'color': '#fff',
            'transition': '.7s'
            });
        });

    telefono.on('mouseenter', function(){
        $('.telefono').css({
            'transition': '.7s',
            'background': 'linear-gradient(60deg,#FCE40B,#8BF609)',
            '-webkit-background-clip': 'text',
            '-moz-background-clip': 'text',
            'background-clip': 'text',
            'color': 'transparent' 
            });
        });
    
    telefono.on('mouseleave', function(){
        $('.telefono').css({
            'color': '#fff',
            'transition': '.7s'
            });
        });

    mensaje.on('mouseenter', function(){
        $('.mensaje').css({
            'transition': '.7s',
            'background': 'linear-gradient(60deg,#FCE40B,#8BF609)',
            '-webkit-background-clip': 'text',
            '-moz-background-clip': 'text',
            'background-clip': 'text',
            'color': 'transparent' 
            });
        });
        
    mensaje.on('mouseleave', function(){
        $('.mensaje').css({
            'color': '#fff',
            'transition': '.7s'
            });
        });
}); //ckd


