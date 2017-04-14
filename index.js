var ball=document.getElementById('ball');

       
ball.onclick=function(){
   
    
    var speed=0;
    function go(){
        
        speed=speed+0.1;
        var balltop=parseFloat(ball.offsetTop);

      
        
 console.log(balltop);
       if(balltop>560){
           speed=-speed/1.2;
           console.log('speed'+speed);
            if(Math.abs(speed)<0.6){
                 
             return false;
           }
        }
       
       ball.style.top=balltop+speed+'px';
       setTimeout(go,10);
    }
    go();
}
