function calculate(){
    let a=Number(document.getElementById("bookOne").value);
    let b=Number(document.getElementById("bookTwo").value);
    let c=Number(document.getElementById("bookThree").value);
    let d=Number(document.getElementById("bookFour").value);
    let e=Number(document.getElementById("bookFive").value);

    if(a>100 || b>100 || c>100 || d>100 ||e>100){
    alert("Invaild marks");
    }
    else{
        var obtain=a+b+c+d+e;
         document.getElementById("Obtain").innerHTML=obtain
        var Percentage=obtain/500*100
        document.getElementById("perc").innerHTML=Percentage
        if (a>=35 && b>=35 && c>=35 && d>=35 && e>=35){
            document.getElementById("result").innerHTML="<span style='color:Green'>Pass</span>"
        }
        else{
            document.getElementById("result").innerHTML="<span style='color:red'>Fail</span>"
        }
       if(obtain>450){
        document.getElementById("grade").innerHTML="A"
       }
       else if(obtain>400){
            document.getElementById("grade").innerHTML="B"
       }
       else if(obtain>350){
        document.getElementById("grade").innerHTML="C"
      }
       else if(obtain>300){
       document.getElementById("grade").innerHTML="D"
        }
        else if(obtain>250){
     document.getElementById("grade").innerHTML="E"
        }
        else if(obtain>200){
         document.getElementById("grade").innerHTML="F"
        }

     }
}