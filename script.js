const greeting=document.getElementById('greeting');
   

function mygreeting(){
    let today=new Date(),
        hour=today.getHours();

    if(hour<12){ 
        greeting.textContent='Good Morning';
    } 

    else if(hour<18){
        greeting.textContent='Good Afternoon';
    }

    else{
        greeting.textContent='Good Evening';
    }
}

mygreeting();
