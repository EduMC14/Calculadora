let input=document.getElementById("input");
function getCharts(v){
    input.value+=v;
    // val.value=val.value+v;
    }
    function reset(){
    input.value="";
    }
    function getResult(){
    input.value=eval(input.value);
    }
    function functionDelete(){
    input.value=input.value.substr(0,input.value.length-1);
    }