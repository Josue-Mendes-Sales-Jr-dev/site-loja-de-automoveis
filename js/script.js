 $(document).ready(function(){
    //progress bar
    let containerA=document.getElementById('circleA');

    let circleA= new ProgressBar.Circle(containerA,{
        
        color:'#c51414',
        strokeWidth:8,
        duration:1600,
        from:{color:'#c51414'},
        to:{color:'#a21410'},

        step: function(state,circle){

            circle.path.setAttribute('stroke',state.color)
            let value= Math.round(circle.value()*60)
            circle.setText(value)
        }
    })

    let containerB=document.getElementById('circleB');

    let circleB= new ProgressBar.Circle(containerB,{
        
        color:'#c51414',
        strokeWidth:8,
        duration:1800,
        from:{color:'#c51414'},
        to:{color:'#a21410'},

        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color)
            let value= Math.round(circle.value()*453)
            circle.setText(value)
        }
    })
    let containerC=document.getElementById('circleC');

    let circleC= new ProgressBar.Circle(containerC,{
        
        color:'#c51414',
        strokeWidth:8,
        duration:2000,
        from:{color:'#c51414'},
        to:{color:'#a21410'},

        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color)
            let value= Math.round(circle.value()*32)
            circle.setText(value)
        }
    })
    let containerD=document.getElementById('circleD');

    let circleD= new ProgressBar.Circle(containerD,{
        
        color:'#c51414',
        strokeWidth:8,
        duration:2400,
        from:{color:'#c51414'},
        to:{color:'#a21410'},

        step: function(state,circle){
            
            circle.path.setAttribute('stroke',state.color)
            let value= Math.round(circle.value()*230)
            circle.setText(value)
        }
    })
  
          circleA.animate(1.0)
          circleB.animate(1.0)
          circleC.animate(1.0)
          circleD.animate(1.0)

        
     //parallax 
     setTimeout(function(){
        $('#data-area').parallax({imageSrc:'img/cidadeparallax.png'})
       
     },250)
    
     $('.filter-btn').on('click', function(){
        let type=$(this).attr('id')
        let boxes =$(".project-box")

        $('.main-btn').removeClass('active')
        $(this).addClass('active')
        
        if(type == 'dsg-btn'){
          eachBoxes('dsg',boxes)
        } else if(type == 'dev-btn'){
            eachBoxes('dev',boxes)
        } else if(type == 'seo-btn'){
            eachBoxes('seo',boxes)
        } else{
            eachBoxes('all',boxes)
        }
     })
     
     function eachBoxes(type, boxes){
        if(type == 'all-btn'){
            $(boxes).fadeIn();
        }else{
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('show')
                }else{
                    $(this).fadeIn()
                }
            })
        }
     }

  


 })

 