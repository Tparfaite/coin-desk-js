const main=document.getElementsByClassName("main")[0];
const header=document.getElementsByClassName("header")[0];
const container=document.getElementById("container");
const cont=document.getElementsByClassName("cont")[0];
const year=new Date();
const date=year.toGMTString();
console.log(date);


const displayCont=(date,code,rate,description)=>{
const card=`
<div class="card">
  <div class="time">${date}</div>
  <div class="content">code:Bitcoin to ${code}<br>rate:${rate}<br>description:${description}</div>
</div>


`
cont.innerHTML+=card;

}


const fetchData=async()=>{

const fetchCoin=await (await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")).json();
console.log(fetchCoin);
const bpi=fetchCoin.bpi;
displayCont(date,bpi.USD.code,bpi.USD.rate,bpi.USD.description);
displayCont(date,bpi.GBP.code,bpi.GBP.rate,bpi.GBP.description);
displayCont(date,bpi.EUR.code,bpi.EUR.rate,bpi.EUR.description);
console.log(bpi.USD);
header.innerHTML=`Disclaimer:${fetchCoin.disclaimer}` +`<br>chartName: ${fetchCoin.chartName}` 

}
fetchData()