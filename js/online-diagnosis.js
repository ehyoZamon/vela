    $(".loader_counter").css("opacity","1");
    var loader_counter=6;
    initial_loader=setInterval(function(){
        if(loader_counter>=0){
            $(".loader_counter").html(loader_counter);
            loader_counter-=1;
        }else{
            $(".initial_loader").fadeOut(500);
        }
    },1000);
    function selectBodyPart(){
        $(".human_body .body_part").on("click",function(e){
           $(".human_body .selected_body_part").removeClass("selected_body_part");
           $(this).addClass("selected_body_part");
           $(".step4").removeClass("selected_step").css("display","none");
           $(".step5").css("display","none");
           $(".step6").css("display","none");
           loadSymptoms($(this).attr("id"));
        });
    }

    function loadSymptoms(part_name){
        $(".step3").css("display","flex").addClass("selected_step");
        $.ajax({
        		url: "/tj/pages/diagnosis_logic.php",
        		type: "POST",
        		data: {
        		    "type": "loadSymptoms",
        		    "part_name": part_name,
        		    "user_gender": user.gender
        		},
        		dataType: "json",
        		beforeSend: function(){
        		    $(".loaderContainer").css("display","flex");
        		    followLoader();
        		},
        		success: function(data){
        		    $(".part_symptoms").animate({scrollTop: 0},1000);
        		    $(".loaderContainer").css("display","none");
                    $(".symptom_of_disease").remove();
                    $(".symptoms_category").remove();
                		  
        		    if(data["message"]=="success"){
        		        console.log(data);
        		        
        		        var myObject = data["symptoms"];
                        
                        var sortedObject = {};
                        Object.keys(myObject).sort((a, b) => myObject[a].age - myObject[b].age).forEach(key => {
                            sortedObject[key] = myObject[key];
                        });
                        data["symptoms"]=sortedObject;

        		       for(var key in data["symptoms"]){
        		           if(key=="not_identified"){
        		               continue;
        		           }
        		           
        		           if(!data["symptoms"]["not_identified"]){
        		               data["symptoms"]["not_identified"]=[];
        		           }
        		           
        		           if(data["symptoms"][key].length>1){
        		               var details=$("<details><summary><p>" + key + "</p></summary></details>");
    		                   $(details).addClass("symptoms_category").appendTo(".part_symptoms");
    		                    
    		                   var details_content=$("<div class='details_content'></div>");
        		               for(var i=0;i<data["symptoms"][key].length;i++){
        		                   data["symptoms"][key]=data["symptoms"][key].sort();
                		           var symptom_section=$("<section style='cursor: pointer;'><p>" + data["symptoms"][key][i].replaceAll("&",",") + "</p><p><input type='checkbox'></p></section>").addClass("symptom_of_disease").attr("id",data["symptoms"][key][i]).appendTo(details_content);   
                		           $(symptom_section).on("click",function(){
                		               var elem=$(this).find("input[type='checkbox']");
                		               if($(elem).prop("checked")){
                		                   $(elem).prop("checked",false);
                		               }else{
                		                   $(elem).prop("checked",true);
                		               }
                		           });
                		           
                		           $(symptom_section).find("input[type='checkbox']").on("click",function(e){
                		                 e.stopPropagation();
                		           });
                		       }  
                		       $(details_content).appendTo(details);
        		            }else{
        		               data["symptoms"]["not_identified"].push(data["symptoms"][key][0]);
        		            }
        		       }
        		       if(data["symptoms"]["not_identified"].length>0){
        		           data["symptoms"][key]=data["symptoms"]["not_identified"].sort();
    		               var details=$("<details><summary><p>дигар аломатҳо</p></summary></details>");
		                   $(details).addClass("symptoms_category").appendTo(".part_symptoms");
		                    
		                   var details_content=$("<div class='details_content'></div>");
    		               for(var i=0;i<data["symptoms"]["not_identified"].length;i++){
            		           var symptom_section=$("<section style='cursor: pointer;'><p>" + data["symptoms"]["not_identified"][i].replaceAll("&",",") + "</p><p><input type='checkbox'></p></section>").addClass("symptom_of_disease").attr("id",data["symptoms"]["not_identified"][i]).appendTo(details_content);   
            		           $(symptom_section).on("click",function(){
            		               var elem=$(this).find("input[type='checkbox']");
            		               if($(elem).prop("checked")){
            		                   $(elem).prop("checked",false);
            		               }else{
            		                   $(elem).prop("checked",true);
            		               }
            		           });
            		           
            		           $(symptom_section).find("input[type='checkbox']").on("click",function(e){
            		                 e.stopPropagation();
            		           });
            		       }  
            		       $(details_content).appendTo(details);
    		           }
    		           
    		           if($(".symptoms_category").length>0){
        		            $(".part_symptoms").animate({scrollTop: 0},1000);
                		    $(".diagnosis_step_block").css("display","none");
                		    $(".symptoms_list").css("display","grid");
                		    play_audio(sounds["SelectSymptoms"],sources["SelectSymptoms"]);
    		           }else{
    		               $(".step").css("display","none");
    		               $(".step2").css("display","flex");
    		               play_audio(sounds["NoDataAvailable"],sources["NoDataAvailable"]);
    		               return 0;
    		           }
    		           
    		            $('.part_symptoms details').click(function() {
                            $('.part_symptoms details').not(this).prop('open', false); // Close other sections
                        });
        		    }else{
        		        $(".step").css("display","none");
    		            $(".step2").css("display","flex");
        		        play_audio(sounds["NoDataAvailable"],sources["NoDataAvailable"]);
        		        return 0;
        		        console.log(data);
        		    }
        		    //$("body").scrollTo(".symptoms_list",{duration: 1000}); 
        		},
    		error: function(error){
    		    console.log(error); 
    		    $(".loaderContainer").css("display","none");
    		    play_audio(sounds["ErrorConnection"],sources["ErrorConnection"]);
    		}
        });
    }
    
    
    function loadHabits(){
        $(".step4").css("display","flex").addClass("selected_step");
        
        
        symptoms=[];
        $(".symptom_of_disease").find("input:checked").each(function(){
            symptoms.push($(this).parent().parent().attr("id").replaceAll(",","&"));    
        });
        
        if(symptoms.length==0){
            loadSymptoms($(".selected_body_part").attr("id"));
            return 0;
        }
        
        
        $.ajax({
    		url: "/tj/pages/diagnosis_logic.php",
    		type: "POST",
    		data: {
    		    "type": "loadHabits",
    		    "symptoms": symptoms,
    		    "part_name": $(".selected_body_part").attr("id"),
    		    "user_age": user.age,
    		    "user_gender": user.gender
    		},
    		dataType: "json",
    		beforeSend: function(){
    		    $(".loaderContainer").css("display","flex");
    		    followLoader();
    		},
    		success: function(data){
        		$(".part_habits").animate({scrollTop: 0},1000);
        		play_audio(sounds["SelectHabits"],sources["SelectHabits"]);
    		    $(".diagnosis_step_block").css("display","none");
    		    $(".loaderContainer").css("display","none");
    		    $(".habits_list").css("display","grid");
    		    $(".habit_of_disease").remove(); 
    		    if(data["message"]=="success"){
    		       if(data["habits"].length==0){
    		           loadExactDiseases();
    		           $("#step4").css("display","none");
    		           return 0;
    		       }
    		       
    		       for(var i=0;i<data["habits"].length;i++){
    		           if(data["habits"][i].length>1){
        		           var habit_section=$("<section style='cursor: pointer;'><p>" + data["habits"][i].replaceAll("$",",") + "</p><p><input type='checkbox'></p></section>").addClass("habit_of_disease").attr("id",data["habits"][i]).appendTo(".part_habits");           
        		        
        		           $(habit_section).on("click",function(){
        		               var elem=$(this).find("input[type='checkbox']");
        		               if($(elem).prop("checked")){
        		                   $(elem).prop("checked",false);
        		               }else{
        		                   $(elem).prop("checked",true);
        		               }
        		            });   
        		            
        		            $(habit_section).find("input[type='checkbox']").on("click",function(e){
        		                e.stopPropagation();
        		            });
        		        }
    		       }
    		    }else{
    		        if(data["message"]=="error"){
    		            loadRiskGroup();
        		        $("#step4").css("display","none");
    		            return 0;
    		        }
    		    }
    		    //$("body").scrollTo(".habits_list",{duration: 1000});
    		},
    		error: function(error){
    		    console.log(error); 
    		    $(".loaderContainer").css("display","none");
    		    play_audio(sounds["ErrorConnection"],sources["ErrorConnection"]);
    		}
        });
    }
    
    function loadRiskGroup(){
        $(".step5").css("display","flex").addClass("selected_step");
        
        symptoms=[];
        $(".symptom_of_disease").find("input:checked").each(function(){
            symptoms.push($(this).parent().parent().attr("id").replaceAll(",","&"));    
        });
        
        if(symptoms.length==0){
            loadSymptoms($(".selected_body_part").attr("id"));
            return 0;
        }
        
        $.ajax({
    		url: "/tj/pages/diagnosis_logic.php",
    		type: "POST",
    		data: {
    		    "type": "loadRiskGroup",
    		    "symptoms": symptoms,
    		    "part_name": $(".selected_body_part").attr("id"),
    		    "user_age": user.age,
    		    "user_gender": user.gender
    		},
    		dataType: "json",
    		beforeSend: function(){
    		    $(".loaderContainer").css("display","flex");
    		    followLoader();
    		},
    		success: function(data){
        		play_audio(sounds["AdditionalQuestions"],sources["AdditionalQuestions"]);
        		$(".part_risk_group").animate({scrollTop: 0},1000);
    		    $(".diagnosis_step_block").css("display","none");
    		    $(".loaderContainer").css("display","none");
    		    $(".risk_group_list").css("display","grid");
    		    $(".risk_group_of_disease").remove(); 
    		    if(data["message"]=="success"){
    		        console.log(data);
    		        if(data["risks"].length==0){
    		           loadRiskGroup();
    		           $("#step5").css("display","none");
    		           return 0;
    		        }
    		        risk_questions=[];
    		          
    		        for(var i=0;i<data["risks"].length;i++){
    		           var risk=data["risks"][i];
    		           risk=risk.split("&");
    		           var risk_id=risk[0];
    		           var risk_question=risk[1];
    		           var risk_responses=risk[2].split(";");
    		           
    		           var risk_section=$("<section risk_uniq_question='"+risk_question+"'>"+"<p class='risk_question' risk_id='"+risk_id+"'>"+risk_question.replaceAll("$",",")+"</p>"+"<ul class='risk_responses'></ul></section>").addClass("risk_group_of_disease").appendTo(".part_risk_group");
    		          
    		           if(!risk_questions.includes(risk_question)) {
    		                risk_questions.push(risk_question);
    		           }else{
    		                $(risk_section).css("display","none");
    		           }
    		           
    		           var response_count=0;
    		           risk_responses.forEach(function(risk_res){
    		                risk_res=risk_res.split("-");
    		                $(risk_section).find(".risk_responses").append("<li class='risk_response'>"+"<input type='radio' class='risk_response_radio' response_count='"+response_count+"' risk_affect='"+risk_res[1]+"' name='risk_response_radio"+i+"'></input><span class='risk_response'>"+risk_res[0]+"</span></li>");
    		                $(risk_section).find(".risk_response_radio").on("click",function(){
    		                    var risk_section_question=$(this).parent().parent().parent().attr("risk_uniq_question");
    		                    $("section[risk_uniq_question='"+risk_section_question+"']").find(".risk_response_radio[response_count='"+$(this).attr("response_count")+"']").prop("checked",true);
    		                });
    		                response_count+=1; //For controlling similar question_responses
    		           });
    		        }
    		    }else{
    		        if(data["message"]=="error"){
    		            loadExactDiseases();
        		        $("#step5").css("display","none");
    		            return 0;
    		        }
    		        
    		    }
    		    //$("body").scrollTo(".risk_group_list",{duration: 1000});
    		},
    		error: function(error){
    		    console.log(error);
    		    $(".loaderContainer").css("display","none");
    		    play_audio(sounds["ErrorConnection"],sources["ErrorConnection"]);

    		}
        });
    }
    
    function loadExactDiseases(){
        $(".step6").css("display","flex").addClass("selected_step");
        
        var symptoms=[];
        $(".symptom_of_disease").find("input:checked").each(function(){
            symptoms.push($(this).parent().parent().attr("id").replaceAll(",","&"));    
        });
        
        if(symptoms.length==0){
            loadSymptoms($(".selected_body_part").attr("id"));
            return 0;
        }
        
        var habits=[];
        $(".habit_of_disease").find("input:checked").each(function(){
            habits.push($(this).parent().parent().attr("id").replaceAll(",","$"));    
        });
        
        var risk_group=[];
        
        $("input.risk_response_radio:checked").each(function(){
            var risk_id=$(this).parent().parent().parent().find(".risk_question").attr("risk_id");
            var risk_affect=$(this).attr("risk_affect");
            risk_group.push(risk_id+"&"+risk_affect);
        });
        
        $.ajax({
    		url: "/tj/pages/diagnosis_logic.php",
    		type: "POST",
    		data: {
    		    "type": "loadDiseasesData",
    		    "symptoms": symptoms,
    		    "habits": habits,
    		    "risk_group": risk_group,
    		    "part_name": $(".selected_body_part").attr("id"),
    		    "user_age": user.age,
    		    "user_gender": user.gender,
    		    "user_weight": user.weight,
    		    "user_height": user.height
    		},
    		dataType: "json",
    		beforeSend: function(){
    		    $(".loaderContainer").css("display","flex");
    		    followLoader();
    		},
    		success: function(data){
                $(".part_diseases").animate({scrollTop: 0},1000);
    		    console.log(data);
    		    $(".diagnosis_step_block").css("display","none");
    		    $(".diseases_list").css("display","block");
    		    $(".loaderContainer").css("display","none");
    		    $(".disease_of_part").remove();
    		    
    		    if(data["message"]=="success"){
        		    play_audio(sounds["DiagnoseResult"],sources["DiagnoseResult"]);
    		        console.log(data);
    		        for(var i=0;i<data['diseases'].length;i++){
    		            var summary=$("<details><summary><section><p>" + data['diseases'][i] + "</p><div class='precision'><p><input type='range' min='0' max='100' disabled value='"+data['precisions'][i]+"'></p><p>"+data['precisions'][i]+"%</p></div></section></summary></details>");
    		            $(summary).addClass("disease_of_part").attr("id",data['diseases'][i]).appendTo(".part_diseases");
    		            var symptom_details="";
    		            
    		            data['symptom_details'][i].forEach(function(symptom_detail){
    		               symptom_details+="<li>"+symptom_detail+"</li>"; 
    		            });
    		            symptom_details=symptom_details.replaceAll("&",",");
    		            
    		            var habit_details="";
    		            data['habit_details'][i].forEach(function(habit_detail){
    		               habit_details+="<li>"+habit_detail+"</li>"; 
    		            });
    		            habit_details=habit_details.replaceAll("$",",");
    		            
    		            var risk_group_details="";
    		            data["risk_group_details"][i].forEach(function(risk_group_detail){
    		                risk_group_details+="<li>"+risk_group_detail+"</li>";
    		            });
    		            
    		            var details=$("<div class='disease_details'></div>");
    		           
    		            if(symptom_details.length>0){
    		               $(details).append("<p>Аломатҳои вобаста:</p><ul>"+symptom_details+"</ul>");
    		            }
    		            
    		            if(habit_details.length>0){
    		                $(details).append("<p>Одатҳои вобаста:</p><ul>"+habit_details+"</ul>");
    		            }
    		            
    		            if(risk_group_details.length>0){
    		                $(details).append("<p>Омилҳои ба беморӣ таъсиркунанда:</p><ul>"+risk_group_details+"</ul>");
    		            }
    		      
    		            $(summary).append(details);
    		            const accordionHeaders = document.querySelectorAll('.disease_of_part > summary');
                    }
                    
                    $('.part_diseases details').click(function() {
                        $('.part_diseases details').not(this).prop('open', false); // Close other sections
                        
                    });
    		    }
    		    //$("body").scrollTo(".diseases_list",{duration: 1000}); 
    		},
    		error: function(error){
    		    console.log(error); 
    		    $(".loaderContainer").css("display","none");
    		    play_audio(sounds["ErrorConnection"],sources["ErrorConnection"]);
    		}
        }); 
    }
    
    var slowConnectionTimer;
    var errorConnectionTimer;
    function followLoader(){
        clearTimeout(slowConnectionTimer);
        clearTimeout(errorConnectionTimer);
        slowConnectionTimer=setTimeout(function(){
            if($(".loaderContainer").css("display")=="flex"){
                    play_audio(sounds["SlowConnection"],sources["SlowConnection"]);
            }
        },10000)
        
        errorConnectionTimer=setTimeout(function(){
            if($(".loaderContainer").css("display")=="flex"){
                play_audio(sounds["ErrorConnection"],sources["ErrorConnection"]);
                $(".loaderContainer").css("display","none");
            }
        },20000)
    }
    
    
    var sounds={
        "playing": false,
        "EnterYourWeight": new Audio('/media/EnterYourWeight.mp3'),
        "EnterYourHeight": new Audio('/media/EnterYourHeight.mp3'),
        "EnterYourName": new Audio('/media/EnterYourName.mp3'),
        "EnterBirthDate": new Audio('/media/EnterBirthDate.mp3'),
        "SelectGender": new Audio('/media/SelectGender.mp3'),
        "SelectPart": new Audio('/media/SelectPart.mp3'),
        "SelectSymptoms": new Audio('/media/SelectSymptoms.mp3'),
        "SelectHabits": new Audio('/media/SelectHabits.mp3'),
        "AdditionalQuestions": new Audio('/media/AdditionalQuestions.mp3'),
        "DiagnoseResult": new Audio('/media/DiagnoseResult.mp3'),
        "NoDataAvailable": new Audio('/media/NoDataAvailable.mp3'),
        "SlowConnection": new Audio('/media/SlowConnection.mp3'),
        "ErrorConnection": new Audio("/media/ErrorConnection.mp3")
    }
    
    var sources;
    var soundAllowance=false;
    
    function play_sound(){
        $(".with_sound").on('focus',function(e){
            if(!soundAllowance){
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    
                    sources={
                        "EnterYourWeight": audioContext.createMediaElementSource(sounds["EnterYourWeight"]),
                        "EnterYourHeight": audioContext.createMediaElementSource(sounds["EnterYourHeight"]),
                        "EnterYourName": audioContext.createMediaElementSource(sounds["EnterYourName"]),
                        "EnterBirthDate": audioContext.createMediaElementSource(sounds["EnterBirthDate"]),
                        "SelectGender": audioContext.createMediaElementSource(sounds["SelectGender"]),
                        "SelectPart": audioContext.createMediaElementSource(sounds["SelectPart"]),
                        "SelectSymptoms": audioContext.createMediaElementSource(sounds["SelectSymptoms"]),
                        "SelectHabits": audioContext.createMediaElementSource(sounds["SelectHabits"]),
                        "AdditionalQuestions": audioContext.createMediaElementSource(sounds["AdditionalQuestions"]),
                        "DiagnoseResult": audioContext.createMediaElementSource(sounds["DiagnoseResult"]),
                        "NoDataAvailable": audioContext.createMediaElementSource(sounds["NoDataAvailable"]),
                        "SlowConnection": audioContext.createMediaElementSource(sounds["SlowConnection"]),
                        "ErrorConnection": audioContext.createMediaElementSource(sounds["ErrorConnection"])
                    };
                    
                    // Создаем анализатор
                    analyser = audioContext.createAnalyser();
                    analyser.fftSize = 2048;
                    bufferLength = analyser.frequencyBinCount;
                    dataArray = new Uint8Array(bufferLength);
                    
                    soundAllowance=true;
                    
            }
            
            audioElem=sounds[$(this).attr("data-sound")];
            audioSource=sources[$(this).attr("data-sound")];
            play_audio(audioElem,audioSource);
        });
    }
    
    var audioContext;
    var analyser;
    var bufferLength;
    var dataArray;
    var audioEleme; 
    var audioSource;
    var soundInterval;
    function play_audio(audioElement,source){
            if(!sounds["playing"]){    
                
                // Подключаем узлы
                source.connect(analyser);
                analyser.connect(audioContext.destination);
                
                // Воспроизводим аудио файл
                audioElement.volume=0.3;
                audioElement.play();
                
                // Функция для измерения тона на каждой миллисекунде
                function getAmplitude() {
                  analyser.getByteFrequencyData(dataArray);
                
                  // Вычислить среднюю амплитуду
                  let totalAmplitude = 0;
                  for (let i = 0; i < dataArray.length; i++) {
                    totalAmplitude += dataArray[i];
                  }
                
                  const averageAmplitude = totalAmplitude / dataArray.length;
                
                  return averageAmplitude;
                }
                
                var amplitude;
                soundInterval=setInterval(() => {
                  amplitude = getAmplitude();
                  if(amplitude>10){
                      amplitude=10;
                  }
                  if(amplitude>1){
                    $(".artificial_assistant").css("border-width",3+amplitude+"px");
                  }
                }, 1); // Обновлять каждую милисекунду
                
                sounds["playing"]=true;
                $(".artificial_assistant").css("background-color","rgb(255,91,98)");
                audioElement.addEventListener('ended', function() {
                    $(".artificial_assistant").css({"background-color":"transparent",
                                                    "border-width": "3px"});
                    sounds["playing"]=false;
                    clearInterval(soundInterval);
                    // Do something after audio ends, e.g., play the next track
                });
            }
        }
    
    
    selectBodyPart();
    play_sound();
    //Resizing the box according to inner window height
    /*$(".main_box").css({"height":window.innerHeight+"px"});
    window.addEventListener('resize', function() {
        $(".main_box").css({"height":window.innerHeight+"px"});
    });*/
    
    var user={
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: ""
    }
    
    $(".step1").css("display","flex").addClass("selected_step");
    
    
    $(".personal_info_form").on("submit", function (e) {
        e.preventDefault();
        user.name=$(this).find(".personal_name").val();
        var date=new Date();
        user.age=date.getUTCFullYear() - $(this).find(".personal_age").val();
        
        if(user.age>100){
            user.age=100;
        }
        
        user.gender=$(this).find(".personal_gender").val();
        user.height=$(this).find(".personal_height").val();
        user.weight=$(this).find(".personal_weight").val();
        
        $(".human_parts").css("display","none");
        if(user.gender=="male"){
            //$(".woman_body_structure").css("display","none");
            $(".man_body_structure").css("display","block");
            $(".back_to_woman_parts").css("display","none");
            $(".back_to_man_parts").css("display","block");
        }else{
            $(".woman_body_structure").css("display","block");
            //$(".man_body_structure").css("display","none");
            $(".back_to_woman_parts").css("display","block");
            $(".back_to_man_parts").css("display","none");
        }
        
        $(".diagnosis_step_block").css("display","none");
        $(".human_body").css("display","block");
        $(".step2").css("display","flex").addClass("selected_step");
        console.log(user);
        play_audio(sounds["SelectPart"],sources["SelectPart"])
    });
    
    
    $(".load_habits_button").on("click",function(){
        loadHabits();     
    });
    
    $(".load_risk_group_button").on("click",function(){
        loadRiskGroup();  
    });
    
    $(".load_diseases_button").on("click",function(){
        $(".step5").removeClass("selected_step").css("display","none");
       loadExactDiseases(); 
    });
    
    $(".step").on("click",function(){
        var num=$(this).attr("step");
        $(".selected_step").removeClass("selected_step");
        $(".step"+num).addClass("selected_step");
        
        
        $(".diagnosis_step_block").css("display","none");
        if(num=="1"){
            $(".personal_info").css("display","flex");
        }else if(num=="2"){
            $(".human_body").css("display","block");
        }else if(num=="3"){
            $(".symptoms_list").css("display","grid");
            $(".part_symptoms").animate({scrollTop: 0},1000);
        }else if(num=="4"){
            $(".habits_list").css("display","grid");
            $(".part_habits").animate({scrollTop: 0},1000);
        }else if(num=="5"){
            $(".risk_group_list").css("display","grid");
            $(".part_risk_group").animate({scrollTop: 0},1000);
        }else if(num=="6"){
            $(".part_diseases").animate({scrollTop: 0},1000);
            $(".diseases_list").css("display","flex");
        }
        
    });
