const months=[
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];
const weekdays=[
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];
const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4');
//console.log(items);
let futureDate=new Date(2025,7,18,23,59,59);
console.log(futureDate);
const year=futureDate.getFullYear();
const hours=futureDate.getHours();
const day=weekdays[futureDate.getDay()];
const min=futureDate.getMinutes();
let month=futureDate.getMonth();
const date=futureDate.getDate();

//console.log(month);
giveaway.textContent=`giveaway ends on ${day},  ${date}   ${month+1}   ${year}  ${hours}:${min}pm`;
const futureTime=futureDate.getTime();
console.log(futureTime)

function getRemainingTime(){
    const today=new Date().getTime();
    const t=futureTime-today;
    console.log(t);
      //1s=1000ms
      //1m=60s
      //1hr=60min
      //id=24hr
      const oneDay=24*60*60*1000;
      const oneHour=60*60*1000;
      const oneMin=60*1000;
       
       let days=Math.floor(t/oneDay);
       let hours=Math.floor((t%oneDay)/oneHour);
       let minu=Math.floor((t%oneHour)/oneMin);
       let sec=Math.floor((t%oneMin)/1000);
       const values=[days,hours,minu,sec];
       function FormData(item){
               if(item<10){
                return (item=`0${item}`);
               }return item;
       }
       items.forEach(function(item,index){
        item.innerHTML=values[index];
       })
       if(t<0){
        clearInterval(countDown);
        deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired</h4>`;
       }

    }
let countDown=setInterval(getRemainingTime,1000);
getRemainingTime();

