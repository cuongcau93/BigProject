
$(document).ready(function(){


    $('.face-to-face').click(function(){
        
        $(this).addClass('text-active');
        $('.video-conference').removeClass('text-active');
        $('.teleconference').removeClass('text-active');
        
        $('.note-faceToFace').show();
        $('.note-videoConference').hide();
        $('.note-teleconference').hide();
        
    });

    $('.video-conference').click(function(){
        $(this).addClass('text-active');
        $('.face-to-face').removeClass('text-active');  
        $('.teleconference').removeClass('text-active');  

        $('.note-faceToFace').hide();
        $('.note-videoConference').show();
        $('.note-teleconference').hide();
    })

    $('.teleconference').click(function(){
        $(this).addClass('text-active');
        $('.face-to-face').removeClass('text-active'); 
        $('.video-conference').removeClass('text-active'); 

        $('.note-faceToFace').hide();
        $('.note-videoConference').hide();
        $('.note-teleconference').show();
    })

});