window.onload = function(){
  setTimeout(function(){
    document.getElementById('page').style.display = 'inline-block'
    document.getElementById('loading').style.display = 'none'
    document.getElementById('page').style.animationName = 'open'
    document.getElementById('page').style.animationDuration = '2.5s'
  },3000)
  
}

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
let res = document.getElementById('box')
let inputs = document.querySelectorAll('input')
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
  let ovrremain = Math.round(((ovr - mainovr)) * 11) + 1
  let rankremain = Math.round((ranks - mainranks) * 11) + 1
  let skillremain = Math.round((skills - mainskills) * 11) + 1
  let inps = [...inputs]
let error = document.getElementById('error')
for(i = 0;i < inps.length;i++){
 if(inps[i].value == ''){
  inps[i].classList.add('error')
  error.innerHTML = 'هناك مكان لم يكتب فيه'
  error.style.cssText = `
  text-align:center;
  color:red;
  `
  res.innerHTML = ''
 }
 else{
   inps[i].classList.remove('error')
  document.getElementById('box').innerHTML = ` <div id="ovr"> ${+ovr + +ranks + +skills} الاوفر الحالي هو</div> <div id="a"> تبقي لك ${ovrremain} اوفر علي الاوفر القادم </div> <div id='b'> تبقي لك ${rankremain} رانك علي الاوفر القادم </div> <div id="c"> تبقي لك ${skillremain} سكيل علي الاوفر القادم </div>`
 }
}
for(i = 11;i < 22;i++){
  if(inps[i].value == 30){
    inps[i].value = 25
  }
  if(inps[i].value > 30){
   document.getElementById('errorrank').innerHTML='كتبت عدد رانكات غير موجود في اللعبة'
   res.innerHTML = ''
  }
  else{
    document.getElementById('box').innerHTML =`<div id="ovr"> ${+ovr + +ranks + +skills} الاوفر الحالي هو</div> <div id="a"> تبقي لك ${ovrremain} اوفر علي الاوفر القادم </div> <div id='b'> تبقي لك ${rankremain} رانك علي الاوفر القادم </div> <div id="c"> تبقي لك ${skillremain} سكيل علي الاوفر القادم </div>`
  }
}
for(i = 22;i < inps.length;i++){
  if(inps[i].value > 20){
    document.getElementById('errorskill').innerHTML = 'كتبت عدد معززات مهارة غير موجود حاليًا في اللعبة'
  res.innerHTML = ''
}
}
// ranks check //
let m = 0;
for(i = 11;i < 22;i++){
  m += Math.floor(inps[i].value / 5)
  if(m >= 45){
    document.getElementById('b').innerHTML = 'توقف تطوير الرانكات حاليا'
  }
}
// end check ranks //
// check skills //
let n = 0;
for(i = 22;i < inps.length;i++){
  n += +inps[i].value
  if(n >= 210){
    document.getElementById('c').innerHTML = 'توقف تطوير معززات المهارة'
  }
}
// end check skills //
}
//night mode//
let icon = document.getElementById('icon')
let body = document.body
let calc = document.getElementById('calc')
let inputts = [...inputs]
let header = document.getElementById('start')
let lang = document.querySelector('select')
let btn = document.querySelector('button')
let erroro = document.getElementById('error')
let errorrank = document.getElementById('errorrank')
let errorskill = document.getElementById('errorskill')
let webs = document.getElementById('websites')
let call = document.getElementById('social-word')
let arrow = document.getElementById('arrow')
let warning = document.getElementsByClassName('web')
let warns = [...warning]
function colornight(bgcolor,color){
  for(i = 0;i < inputts.length;i++){
    inputts[i].style.color = color
    inputts[i].style.backgroundColor = bgcolor 
  }
}
function warncolor(bgcolor,color){
  for(i = 0;i < warns.length;i++){
    warns[i].style.backgroundColor = bgcolor
    warns[i].style.color = color
  }
}
let inf = document.querySelectorAll('span')[0]
icon.addEventListener('click',function(){
  if(icon.classList.contains('fa-sun-o')){
    icon.classList.remove('fa-sun-o');
    icon.classList.add('fa-moon-o');
    body.style.backgroundColor = 'black';
    calc.style.color = 'white';
    calc.style.backgroundColor = '#1D267D'
    colornight('black','white')
    header.style.color = 'white'
    header.style.backgroundColor = '#2E294E'
    lang.style.backgroundColor = 'black'
    lang.style.color = 'white'
    btn.style.backgroundColor = '#D4ADFC'
    btn.style.color = 'white'
    erroro.style.color = 'white'
    errorrank.style.color = 'white'
    errorskill.style.color = 'white'
    res.style.backgroundColor = '#393053'
    res.style.color = 'white'
    webs.style.backgroundColor = '#FB2576'
    call.style.color = 'white'
    arrow.style.color = 'white'
    inf.style.setProperty('--color','#2447B2')
    warncolor('#553939','white')
  }
  else{
    icon.classList.remove('fa-moon-o');
    icon.classList.add('fa-sun-o');
    body.style.backgroundColor = '#FFE9E9'
    calc.style.color = 'black'
    calc.style.backgroundColor = '#F46036'
    colornight('white','black')
    header.style.color = 'black'
    header.style.backgroundColor = 'whitesmoke'
    lang.style.backgroundColor = 'white'
    lang.style.color = 'black'
    btn.style.backgroundColor = 'red'
    btn.style.color = 'black'
    erroro.style.color = 'black'
    errorrank.style.color = 'black'
    errorskill.style.color = 'black'
    res.style.backgroundColor = '#1B998B'
    res.style.color = 'black'
    webs.style.backgroundColor = 'red'
    call.style.color = 'red'
    arrow.style.color = 'black'
    inf.style.setProperty('--color','#418D5D')
    warncolor('orange','black')
  }
})
console.log(lang.value)
lang.onchange = function(){
  if(lang.value == 'En'){
    setTimeout(function(){
      location.href = 'https://sahers.github.io/fifas-en/'
    },3000)}
}
