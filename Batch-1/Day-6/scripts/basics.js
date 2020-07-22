console.log("DOM BASICS#");


function changeBackgroundColor(){
    let colorsArr = [ 'red', 'black', 'orange', 'white', 'green' ];

    colorsArr.forEach((item,index)=>{

        setTimeout(() => {
            document.body.style.background=item;
        },3000*index);
    });
}


function printTableOfNumber(){

    let number = prompt("Enter a positive number : ");
    document.getElementById('printTable').innerHTML="";
    for(var i=1;i<=10;i++){
        document.getElementById('printTable').innerHTML+=`${number} X ${i} = ${number*i}<br>`;
    }
}

function displayMyWebPage(){
    document.body.innerHTML = ` <button id='theme'>Switch to Dark Mode</button>
                                <p id='welcomeText'></p>
                                <p id='clock'></p>`;

    let userName = prompt("Enter your name : ");

    document.getElementById('welcomeText').innerHTML=`Hi <b>${userName}</b>, Welcome to LetsUpgrade Assignment 6 `;

    let button = document.getElementById('theme');
    button.onclick=()=>{
             document.body.classList.toggle('dark');
    };

    setInterval(showClock,1000);
}

function showClock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('clock').innerText='Current Time : ' + time;
}






