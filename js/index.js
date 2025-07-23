function openmenu(elem){
    var ulLevel3=$(elem).find(".ul-level3-container").html();
    var ulLevel4=$(elem).find(".ul-level4-container").html();
    $(".ul-level3-realization-container").html('').html(ulLevel3);
    $(".ul-level4-realization-container").html('').html(ulLevel4);
}

function openMobileMenu(className){
    $(".active-catalog").removeClass("active-catalog");
    $("."+className).addClass("active-catalog");
}

window.onload=function(){
    $(".burger-block").on("click",function(){
        if($(this).attr("id")=="burger-block"){
            $("#burger-block").removeClass("active");
            $(".close-block").addClass("active");
            $(".phone-header").addClass("active");
        }else{
            $(".close-block").removeClass("active");
            $("#burger-block").addClass("active");
            $(".active-catalog").removeClass("active-catalog");
            $(".main-catalog").addClass("active-catalog");
            $(".phone-header").removeClass("active");
        }
    });
}