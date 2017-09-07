
$(document).ready(function(){


    $('.face-to-face').click(function(){
        $(this).css('background-color', '#4c7baa');
        $('.video-conference').css('background-color', 'white');
        $('.teleconference').css('background-color', 'white');
        
        $('.note-faceToFace').show();
        $('.note-videoConference').hide();
        $('.note-teleconference').hide();
        
    });

    $('.video-conference').click(function(){
        $(this).css('background-color', '#4c7baa');
        $('.face-to-face').css('background-color', 'white');
        $('.teleconference').css('background-color', 'white');

        $('.note-faceToFace').hide();
        $('.note-videoConference').show();
        $('.note-teleconference').hide();
    })

    $('.teleconference').click(function(){
        $(this).css('background-color', '#4c7baa');
        $('.face-to-face').css('background-color', 'white');
        $('.video-conference').css('background-color', 'white');

        $('.note-faceToFace').hide();
        $('.note-videoConference').hide();
        $('.note-teleconference').show();
    })

});