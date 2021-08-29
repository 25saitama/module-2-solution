$(function (){
    $("#navbarToggle").blur(function (event){
        var swidth = window.innerWidth;
        if (swidth < 768){
            $("#navbarToggleExternalContent").collapse("hide");
        }
    });
});