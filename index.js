window.onload = function(event) {       
    function create() {
        let timeout = 120;
        counter ();
        function counter () {
        document.getElementById('count').innerHTML = timeout;
        timeout--
                if (timeout < 0) {
                clearTimeout(counter);
                timeout = 120;
                //time = setTimeout (counter, 1000);
                } else {
                time = setTimeout (counter, 1000);
            }     
        }
       timerId = setTimeout(function timer() {
       alert('Ты бездельничаешь!');
       timerId = setTimeout(timer, 120000); 
       counter ();
       }, 120000);
        
       // let timerId = setInterval(counter,10000)
       };
       create();
        document.onclick=document.onchange=document.onmouseover=document.onmouseout=document.onkeydown=
        document.focus=document.plur=document=function timer(){
        console.log(123);
        clearTimeout(timerId);
        clearTimeout(time);
        create();
        };
    
        
}