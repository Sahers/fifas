let ovr, ranks, skills;
let ovr1 = document.getElementById('ovr1')
let ovr2 = document.getElementById('ovr2')
let ovr3 = document.getElementById('ovr3')
let ovr4 = document.getElementById('ovr4')
let ovr5 = document.getElementById('ovr5')
let ovr6 = document.getElementById('ovr6')
let ovr7 = document.getElementById('ovr7')
let ovr8 = document.getElementById('ovr8')
let ovr9 = document.getElementById('ovr9')
let ovr10 = document.getElementById('ovr10')
let ovr11 = document.getElementById('ovr11')
let rank1 = document.getElementById('rank1')
let rank2 = document.getElementById('rank2')
let rank3 = document.getElementById('rank3')
let rank4 = document.getElementById('rank4')
let rank5 = document.getElementById('rank5')
let rank6 = document.getElementById('rank6')
let rank7 = document.getElementById('rank7')
let rank8 = document.getElementById('rank8')
let rank9 = document.getElementById('rank9')
let rank10 = document.getElementById('rank10')
let rank11 = document.getElementById('rank11')
let skill1 = document.getElementById('skill1')
let skill2 = document.getElementById('skill2')
let skill3 = document.getElementById('skill3')
let skill4 = document.getElementById('skill4')
let skill5 = document.getElementById('skill5')
let skill6 = document.getElementById('skill6')
let skill7 = document.getElementById('skill7')
let skill8 = document.getElementById('skill8')
let skill9 = document.getElementById('skill9')
let skill10 = document.getElementById('skill10')
let skill11 = document.getElementById('skill11')
document.getElementById('calculate').onclick = function() {
  let mainranks = (Math.floor(+rank1.value / 5) + Math.floor((+rank2.value) / 5) + Math.floor((+rank3.value) / 5) + Math.floor((+rank4.value) / 5) + Math.floor((+rank5.value) / 5) + Math.floor((+rank6.value) / 5) + Math.floor((+rank7.value) / 5) + Math.floor((+rank8.value) / 5) + Math.floor((+rank9.value) / 5) + Math.floor((+rank10.value) / 5) + Math.floor((+rank11.value) / 5)) / 11
  let mainskills = (+skill1.value + +skill2.value + +skill3.value + +skill4.value + +skill5.value + +skill6.value + +skill7.value + +skill8.value + +skill9.value + +skill10.value + +skill11.value) / 11
  let mainovr = (+ovr1.value - Math.floor(rank1.value / 5) +
    +ovr2.value - Math.floor(rank2.value / 5) +
    +ovr3.value - Math.floor(rank3.value / 5) +
    +ovr4.value - Math.floor(rank4.value / 5) +
    +ovr5.value - Math.floor(rank5.value / 5) +
    +ovr6.value - Math.floor(rank6.value / 5) +
    +ovr7.value - Math.floor(rank7.value / 5) +
    +ovr8.value - Math.floor(rank8.value / 5) +
    +ovr9.value - Math.floor(rank9.value / 5) +
    +ovr10.value - Math.floor(rank10.value / 5) +
    +ovr11.value - Math.floor(rank11.value / 5)) / 11
  ovr = Math.ceil(mainovr)
  ranks = Math.ceil(mainranks)
  skills = Math.ceil(mainskills)
  console.log(mainskills)
  console.log(skills)
  if (+rank1.value == 30) {
    rank1.value = 25
  }
  if (+rank2.value == 30) {
    rank2.value = 25
  }
  if (+rank3.value == 30) {
    rank3.value = 25
  }
  if (+rank4.value == 30) {
    rank4.value = 25
  }
  if (+rank5.value == 30) {
    rank5.value = 25
  }
  if (+rank6.value == 30) {
    rank6.value = 25
  }
  if (+rank7.value == 30) {
    rank7.value = 25
  }
  if (+rank8.value == 30) {
    rank8.value = 25
  }
  if (+rank9.value == 30) {
    rank9.value = 25
  }
  if (+rank10.value == 30) {
    rank10.value = 25
  }
  if (+rank11.value == 30) {
    rank11.value = 25
  }
  let ovrremain = Math.round(((ovr - mainovr)) * 11) + 1
  let rankremain = Math.round((ranks - mainranks) * 11) + 1
  let skillremain = Math.round((skills - mainskills) * 11) + 1
  document.getElementById('box').innerHTML = `
  <div id="ovr"> ${+ovr + +ranks + +skills} الاوفر الحالي هو</div>
  <div id="a">تبقي لك ${ovrremain}اوفر علي الاوفر القادم</div>
    <div id='b'>تبقي لك ${rankremain}رانك علي الاوفر القادم</div>
    <div id="c">تبقي لك ${skillremain}سكيل علي الاوفر القادم</div>`
  
}
/*function ranks(){
  for(let i = 1;i < 12;i++){
    if(+rank/i.value == 30){
      ranki.value = 25
    }
  }
}*/
/*

+ovr1.value - (rank1.value / 5) +
+ovr2.value - (rank2.value / 5) +
+ovr3.value - (rank3.value / 5) +
+ovr4.value - (rank4.value / 5) +
+ovr5.value - (rank5.value / 5) +
+ovr6.value - (rank6.value / 5) +
+ovr7.value - (rank7.value / 5) +
+ovr8.value - (rank8.value / 5) +
+ovr9.value - (rank9.value / 5) +
+ovr10.value - (rank10.value / 5) +
+ovr11.value - (rank11.value / 5)




*/