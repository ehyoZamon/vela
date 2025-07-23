function selectDiseasePart() {
    $(".human_body .body_part").off("click");
    $(".human_body .body_part").on("click",function(){
        if(!($(this).hasClass("selected_body_part"))){
            $(this).addClass("selected_body_part");
            $("<li class='human_body_part' text=''></li>").html($(this).attr("id")).attr("text",$(this).attr('id')).appendTo("ul.human_body_parts_to_publicate");
        }else{
            $(this).removeClass("selected_body_part");
            $("li.human_body_part[text='"+$(this).attr("id")+"']").remove();
        }
    });
}

window.onload=function(){
    selectDiseasePart();
    
    var symptom_autofillment_timer;
    $(".symptom_input").on("keyup",function(){
        $.ajax({
        		url: "../pages/moderator_logic.php",
        		type: "POST",
        		data: {
        		    "type": "symptom_autofillment",
        		    "symptom_input": $(".symptom_input").val()
        		},
        		dataType: "json",
        		beforeSend: function(){
        			//animation for loading
        		},
        		success: function(data){
        	     $(".symptom_autofillment").html("");
                    var symptoms=data["symptoms"];
                    if(data["message"]=="success"){
                        for(var i=0;i<symptoms.length;i++){
                            $("<li class='autofill_symptom'></li>").html(symptoms[i].replaceAll("&",",")).on("click",function(){
                                    $(".symptom_input").val($(this).html());
                                    $(".autofill_symptom").remove();
                                    $(".symptom_autofillment").html("");
                            }).appendTo(".symptom_autofillment");
                        }
                    }
                    clearTimeout(symptom_autofillment_timer);
                    symptom_autofillment_timer=setTimeout(function(){
                        $(".symptom_autofillment").html("");
                    },5000)
        		}
        });
    });
    
    $(".add_symptom").on("click",function(){
        var symptom=$(".symptom_input").val();
        symptom=symptom.replaceAll("  "," ");
        if(symptom.length>3){
            var new_symptom=$('<li class="disease_symptom"><span class="symptom_value"></span><span class="remove_symptom" style="font-size: 20px; сolor: red; cursor: pointer;"> &#10005;</span></li>');
            $(new_symptom).find(".symptom_value").html(symptom);
            $(new_symptom).appendTo(".disease_symptoms_list");
            $(".symptom_autofillment").html("");
            $(new_symptom).find(".remove_symptom").on("click",function(){
                $(this).parent().remove(); 
            });
            $(".symptom_input").val("");
        }
    });
    
    function loadDiseaseData(disease_name){
        $.ajax({
            url: "../pages/moderator_logic.php",
    		type: "POST",
    		data: {
    		    "type": "disease_data_autofillment",
    		    "disease_name": disease_name 
    		},
    		dataType: "json",
    		beforeSend: function(){
    			//animation for loading
    		},
    		success: function(data){
    		    console.log(data);
    	        if(data["message"]=="success"){
    	            data["disease_parts"].forEach(function(elem){
                        $(".human_parts #"+elem.replaceAll(" ","\\ ")).trigger("click");
    	            });
    	            
    	            data["disease_symptoms"].forEach(function(elem){
    	                $(".symptom_input").val(elem);
    	                $(".add_symptom").trigger("click");
    	            });     
    	            
    	            $(".inf_to_female").val(data["inf_to_female"]);
    	            $(".inf_to_male").val(data["inf_to_male"]);
    	            
    	            data["age_affect"].forEach(function(elem){
    	                var age_affect=elem.split("&");
    	                $("#age_from").val(age_affect[0]);
    	                $("#age_to").val(age_affect[1]);
    	                $("#age_probability").val(age_affect[2]);
    	                $(".add_probability").trigger("click");
    	            });
    	            
    	            data["disease_affecting_habits"].forEach(function(elem){
    	                $("#bad_habit").val(elem[0]);
    	                $("#habit_affect").val(elem[1]);
    	                $(".add_habit_affect").trigger("click");
    	            });
    	            
    	            data["disease_risk_group"].forEach(function(elem){
    	                $("#risk_group_question").val(elem[0]);
    	                $("#risk_input").val(elem[1]);
    	                $(".add_risk_data").trigger("click");
    	            });
    	            
    	            
    	            if(data["weight_affect"]==1){
    	                $("#weight_min_affect").trigger("click");
    	            }else if(data["weight_affect"]==2){
    	                $("#weight_max_affect").trigger("click");
    	            }else if(data["weight_affect"]==3){
    	                $("#weight_min_affect").trigger("click");
    	                $("#weight_max_affect").trigger("click");
    	            }
    	            
    	            
    	            data["condition_photos"].forEach(function(elem){
    	                var photo_container=$("<div class='photo_loaded'></div>").attr("condition_src",elem);
                        $("<img class='uploaded_disease_photo'>").attr("src","/images/disease_photos/"+elem).appendTo(photo_container);
                        $("<img src='/images/icons/remove.svg' class='remove_photo_icon'>").on("click",function(){
                            $(this).parent().remove();
                        }).appendTo(photo_container);
                        $(photo_container).appendTo(".condition_photos_loaded");
                        $("#disease-photo-input").val("");
                        $("#disease-photo-input").html("");  
    	            });
    	        }
    		}
        });
    }
    
    var disease_name_autofillment_timer;
    $(".disease_info_name").on("keyup",function(){
        $.ajax({
    		url: "../pages/moderator_logic.php",
    		type: "POST",
    		data: {
    		    "type": "disease_name_autofillment",
    		    "disease_name_input": $(".disease_info_name").val()
    		},
    		dataType: "json",
    		beforeSend: function(){
    			//animation for loading
    		},
    		success: function(data){
    	        $(".autofill_disease_name").remove();
                $(".disease_name_autofillment").html("");
                var diseases=data["diseases"];
                if(data["message"]=="success"){
                    for(var i=0;i<diseases.length;i++){
                        $("<li class='autofill_disease_name'></li>").html(diseases[i]).on("click",function(){
                                $(".disease_symptoms_list").find(".disease_symptom").remove();
                                $(".human_body_parts_to_publicate").find(".human_body_part").remove();
                                $(".probability_value").remove();
                                $(".bad_habit_value").remove();
                                $(".risk_group_affect_value").remove();
                                $(".body_structure").find(".selected_body_part").removeClass("selected_body_part");
                                $("body").scrollTo(".disease_name",{duration: 1000});
                                document.getElementsByClassName("fill_disease_data_form")[0].reset();
                                
                                $(".disease_info_name").val($(this).html());
                                $(".autofill_disease_name").remove();
                                $(".disease_name_autofillment").html("");
                                loadDiseaseData($(this).html());
                        }).appendTo(".disease_name_autofillment");
                    }
                }
                clearTimeout(disease_name_autofillment_timer);
                disease_name_autofillment_timer=setTimeout(function(){
    		        $(".disease_name_autofillment").html("");
            	},5000);
    		}
        });
    });
    
    
    var habit_autofillment_timer;
    $("#bad_habit").on("keyup",function(){
        $.ajax({
    		url: "../pages/moderator_logic.php",
    		type: "POST",
    		data: {
    		    "type": "habit_autofillment",
    		    "habit_input": $("#bad_habit").val()
    		},
    		dataType: "json",
    		beforeSend: function(){
    			//animation for loading
    		},
    		success: function(data){
    	        $(".autofill_habit").remove();
                $(".habit_autofillment").html("");
                if(data["message"]=="success"){
                    var habits=data["habits"];
                    for(var i=0;i<habits.length;i++){
                        $("<li class='autofill_habit'></li>").html(habits[i]).on("click",function(){
                                var habit=$(this).html();
                                habit=habit.split("-");
                                $("#bad_habit").val(habit[0]);
                                $("#habit_affect").val(habit[1]);
                                $(".autofill_habit").remove();
                                $(".habit_autofillment").html("");
                        }).appendTo(".habit_autofillment");
                    }
                }
                clearTimeout(habit_autofillment_timer);
                habit_autofillment_timer=setTimeout(function(){
    		        $(".habit_autofillment").html("");
            	},5000);
    		}
        });
    });
    
    var risk_group_autofillment_timer;
    $("#risk_group_question").on("keyup",function(){
        $.ajax({
    		url: "../pages/moderator_logic.php",
    		type: "POST",
    		data: {
    		    "type": "risk_group_autofillment",
    		    "question_input": $("#risk_group_question").val()
    		},
    		dataType: "json",
    		beforeSend: function(){
    			//animation for loading
    		},
    		success: function(data){
    	        $(".autofill_risk_group").remove();
                $(".risk_group_autofillment").html("");
                if(data["message"]=="success"){
                    var risk_groups=data["risk_groups"];
                    for(var i=0;i<risk_groups.length;i++){
                        $("<li class='autofill_risk_group'></li>").html(risk_groups[i]).on("click",function(){
                                var risk_group=$(this).html();
                                risk_group=risk_group.split(":");
                                $("#risk_group_question").val(risk_group[0]);
                                $("#risk_input").val(risk_group[1]);
                                $(".autofill_risk_group").remove();
                                $(".risk_group_autofillment").html("");
                        }).appendTo(".risk_group_autofillment");
                    }
                }
                clearTimeout(risk_group_autofillment_timer);
                risk_group_autofillment_timer=setTimeout(function(){
    		        $(".risk_group_autofillment").html("");
            	},5000);
    		}
        });
    });
    
    $(".add_probability").on("click",function(){
        var age_from=$("#age_from").val();
        var age_to=$("#age_to").val();
        var age_probability=$("#age_probability").val();
        $("<tr class='probability_value'><td class='age_from'>"+age_from+"</td><td>&#8212;</td><td class='age_to'>"+age_to+"</td><td class='probability_percentage'>"+age_probability+"</td><td class='remove_age_probability'>&#10005;</td></tr>").appendTo(".age_affect_table tbody")
            .find(".remove_age_probability").on("click",function(){
                $(this).parent().remove();
            });
        $("#age_from").val("");
        $("#age_to").val("");
        $("#age_probability").val("");
    });
    
    $(".add_habit_affect").on("click",function(){
        var bad_habit=$("#bad_habit").val();
        var habit_affect=$("#habit_affect").val();
        $("<tr class='bad_habit_value'><td class='bad_habit'>"+bad_habit+"</td><td class='habit_affect'>"+habit_affect+"</td><td class='remove_habit_affect'>&#10005;</td></tr>").appendTo(".habit_affect_table tbody")
            .find(".remove_habit_affect").on("click",function(){
            $(this).parent().remove();
        });
        $("#bad_habit").val("");
        $("#habit_affect").val("");
    });
    
    $(".add_risk_data").on("click",function(){
        var risk_question=$("#risk_group_question").val();
        var risk_affect=$("#risk_input").val();
        $("<tr class='risk_group_affect_value'><td class='risk_affect_question'>"+risk_question+"</td><td class='risk_affect_data'>"+risk_affect+"</td><td class='remove_risk_group_affect'>&#10005;</td></tr>").appendTo(".risk_affect_table tbody")
            .find(".remove_risk_group_affect").on("click",function(){
            $(this).parent().remove();
        });
        $("#risk_group_question").val("");
        $("#risk_input").val("");
    });

} 
    