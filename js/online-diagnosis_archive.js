function selectBodyPart(){
    $(".human_body .body_part").on("click",function(e){
       $(".human_body .selected_body_part").removeClass("selected_body_part");
       $(this).addClass("selected_body_part");
       $(".step4").removeClass("selected_step").css("opacity","0");
       $(".step1").css("opacity","100").addClass("selected_step");
       loadSymptoms($(this).attr("id"));
    });
    
    $(".step1").css("opacity","100").addClass("selected_step");
}

function loadSymptoms(part_name){
        $(".step2").css("opacity","100").addClass("selected_step");
        $.ajax({
        		url: "https://med.ehyo.tj/sources/med_api.php",
        		type: "POST",
        		data: {
        		    "type": "loadDiseases",
        		    "part_name": part_name
        		},
        		dataType: "json",
        		beforeSend: function(){
        		    $(".loaderContainer").css("display","flex");
        		},
        		success: function(data){
        		    $(".symptoms_list").css("display","flex");
        		    $(".diseases_list").css("display","none");
        		    $(".articles_list").css("display","none");
        		    $(".loaderContainer").css("display","none");
        		    $(".symptom_of_disease").remove(); 
        		    if(data["message"]=="success"){
        		       for(var i=0;i<data["symptoms"].length;i++){
        		           $("<section><p>" + data["symptoms"][i] + "</p><p><input type='checkbox'></p></section>").addClass("symptom_of_disease").attr("id",data["symptoms"][i]).appendTo(".part_symptoms");           
        		       }
        		    }else{
        		        console.log(data);
        		    }
        		    $("body").scrollTo(".symptoms_list",{duration: 1000}); 
        		    
        		}
        });
    }
    
    function loadExactDiseases(){
            $(".step3").css("opacity","100").addClass("selected_step");
        
            symptoms=[];
            $(".symptom_of_disease").find("input:checked").each(function(){
                symptoms.push($(this).parent().parent().attr("id"));    
            });
            
            if(symptoms.length==0){
                loadSymptoms($(".selected_body_part").attr("id"));
                return 0;
            }
            
            $.ajax({
        		url: "https://med.ehyo.tj/sources/med_api.php",
        		type: "POST",
        		data: {
        		    "type": "loadExactDiseases",
        		    "symptoms": symptoms,
        		    "part_name": $(".selected_body_part").attr("id")
        		},
        		dataType: "json",
        		beforeSend: function(){
        		    $(".loaderContainer").css("display","flex");
        		},
        		success: function(data){
        		    $(".symptoms_list").css("display","none");
        		    $(".diseases_list").css("display","flex");
        		    $(".articles_list").css("display","none");
        		    $(".loaderContainer").css("display","none");
        		    $(".disease_of_part").remove();
        		    if(data["message"]=="success"){
        		        for(var i=0;i<data['diseases'].length;i++){
        		            $("<section><p>" + data['diseases'][i] + "</p><div class='precision'><p><input type='range' min='0' max='100' disabled value='"+data['precisions'][i]+"'></p><p>"+data['precisions'][i]+"%</p></div></section>").addClass("disease_of_part").attr("id",data['diseases'][i]).appendTo(".part_diseases").on("click",function(){
                                $(".interface").addClass("interface_disease_selected");
                                loadDiseaseInfo($(this).attr("id"));
                            })    
                        }
        		    }
        		    $("body").scrollTo(".diseases_list",{duration: 1000}); 
        		}
            }); 
        
    }
    
    function loadDiseaseInfo(disease_name){
        $(".step4").css("opacity","100").addClass("selected_step");
        $.ajax({
            url: "https://med.ehyo.tj/sources/med_api.php",
            type: "POST",
            data: {
                "type": "loadDiseaseInfo",
                "disease_name": disease_name,
            },
            dataType: "json",
            beforeSend: function(){
                $(".loaderContainer").css("display","flex");
            },
            success: function(data){
                $(".loaderContainer").css("display","none");
                if(data["message"]=="success"){
                    $(".publish_time>span").html(data["created_on"]);
                    $(".view>span.seen").html(data["seen"]);
                    $("#disease_res_name").html(data["disease_name"]);
                    $("#disease_res_symptoms").html("<ul><li>" + data["symptoms"].replaceAll(",","</li><li>") + "</li></ul>");
                    $("#disease_res_prevention").html(data["prevention"]);
                    $("#disease_res_treatment").html(data["treatment"]);
                    $("#disease_res_definition").html(data["definition"]);
                    $(".publication_author .author").html(data["author_name"]+" "+data["author_surname"]);
                    $(".publication_author .author_photo").attr("src","https://med.ehyo.tj/images/avatars/" + data["author_photo"]);
                    $(".articles_list").css("display","flex");
                    $(".diseases_list").css("display","none");
                    $(".symptoms_list").css("display","none");
                    for(var count=0;count<2;count++){
                        for(var i=0;i<data["clinics"].length;i++){
                            console.log(data["clinics"][i]);
                            $("<div class='slide'><a target='_blank' href='"+data["clinics"][i][2]+"'><img src='../images/clinics_logos/"+data["clinics"][i][1]+"' height='auto' width='auto' alt='"+data["clinics"][i][0]+"'/></a></div>").appendTo(".slide-track");
                        }
                    }
                     
                    document.documentElement.style.setProperty('--multiplier', data["clinics"].length);
                    /*$(".slider .slide-track").css({"-webkit-animation": "scroll 7s linear infinite",
                                                    "animation": "scroll 7s linear infinite",
                                                    "width": "calc(250px*14)"});*/
                }
                $("body").scrollTo(".articles_list",{duration: 1000}); 
            }
        }); 
    }
    
    
    selectBodyPart();
    $(".load_diseases_button").on("click",function(){
        $(".step4").removeClass("selected_step").css("opacity","0");
       loadExactDiseases(); 
    });
    
    $(".step").on("click",function(){
        var num=$(this).find("span").html();
        $(".selected_step").removeClass("selected_step");
        $(".step"+num).addClass("selected_step");
        if(num==1){
            $(".step"+2).addClass("selected_step");
        }
        
        if(num==2){
            $(".symptoms_list").css("display","flex");
            $(".diseases_list").css("display","none");
            $(".articles_list").css("display","none");
        }else if(num==3){
            $(".symptoms_list").css("display","none");
            $(".diseases_list").css("display","flex");
            $(".articles_list").css("display","none");
        }else if(num==4){
            $(".symptoms_list").css("display","none");
            $(".diseases_list").css("display","none");
            $(".articles_list").css("display","flex");
        }
    });
