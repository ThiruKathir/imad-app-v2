// counter code
var button= document.getElementById('counter');

button.onclick = function () {
     
     // Make a request to counter Endpoint
     var request = new XMLHttpRequest();
     
     // Capture the response and store it in a variable
     request.onreadystatechange  = function(){
       if(request.readyState===XMLHttpRequest.DONE) {
         // take some action   
         if(reqest.status ===200){
             var counter = request.responseText;
               var span = document.getElementById('count');
                span.innerHTML= counter.toString();
             
         }
       }
       //not done yet
     };
  
};