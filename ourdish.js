window.onload=function(){
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("numberPlace"),
        submitBtn = document.getElementById("submit"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           
        }
        if(number == min) {        
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";            
           }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }     
        if(number == max){
               numberPlace.style.color= "red";
               setTimeout(function(){numberPlace.style.color= "black"},500)
        }
           
        else {
               numberPlace.style.color= "black";
               
        }
     
           
    }
    submitBtn.onclick = function(){
       alert("you choice : " + number);
   }
    
}




//     var minusBtn = document.getElementsByClassName("minus");
//        var plusBtn = document.getElementsByClassName("plus");
//       var  numberPlace = document.getElementsByClassName("numberPlace");
//        var submitBtn = document.getElementsByClassName("submit");
//       var  number = 0; /// number value
//       var  min = 0; /// min number
//        var max = 30; /// max number

// var newNumber;
        
// minusBtn.addEventListener('click',function(){

//     numberPlace.innerText = number -1 ; /// Display the value in place of the number
// });


// plusBtn.addEventListener('click',function(){
   
//         numberPlace.innerText = number + 1 ; /// Display the value in place of the number
        
    
// });