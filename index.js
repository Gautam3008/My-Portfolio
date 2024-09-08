// conatct me form

$(document).ready(function () {
    $("#form-open").click(function () {
        $(".what-colse").slideToggle("fast");
        $(".what-form").slideToggle("fast");
    })

    $("#form-close").click(function(){
        $(".what-colse").slideUp("fast");
        $(".what-form").slideUp("fast");


    })

})


// mobile menu




// loader


let preloader = document.getElementById("Loding");

function MyFuction(){
          
     preloader.style.display = "none";
     


}