
function register(){
    $('#layer_frame').css({'display':'none'});
    $('#register_frame').css({'display':'block'});
}
function login(){
    $('#layer_frame').css({'display':'block'});
    $('#register_frame').css({'display':'none'});
}
function closeWindow01(){
    $('#layer_frame').css({'display':'none'});
}
function closeWindow02(){
    $('#register_frame').css({'display':'none'});
}
function closeWindow03(){
    $('#agreement_frame').css({'display':'none'});
}
function agreement(){
    $('#agreement_frame').css({'display':'block'})
}

$(document).ready(function(){
   //点击关闭窗口符号
        /*$('.login_in').click(function(){
            
        });*/
        /*$('.close_pic').click(function(){
            $('#layer_frame').css({'display':'none'});
        });*/
        //点击登录
        $('#charge').click(function(){
            var Html=$('#password').val();
            if(Html==""){
                $('.four_div p').html('*密码不能为空');
            }else if(Html!==""){
                
            }

        });

    //点击注册
        /*$('.register_js').click(function(){
            
        });
        $('#register_frame .close_pic').click(function(){
            $('#register_frame').css({'display':'none'});
        });*/
    //
    
});

            
