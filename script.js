
const mic=document.getElementById('mic');
const listen=document.getElementById('listen');
const status=document.getElementById('status');
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
let rec;
if(SR){
rec=new SR();
rec.lang='ko-KR';
rec.interimResults=true;
mic.onclick=()=>{
mic.classList.add('hidden');
listen.classList.remove('hidden');
status.textContent='';
rec.start();
};
rec.onresult=e=>{
let t='';
for(let i=0;i<e.results.length;i++)t+=e.results[i][0].transcript;
status.textContent=t;
};
rec.onend=()=>{
status.classList.add('done');
setTimeout(()=>status.classList.remove('done'),600);
listen.classList.add('hidden');
mic.classList.remove('hidden');
};
document.body.addEventListener('click',e=>{
if(!listen.classList.contains('hidden') && e.target!==mic){
try{rec.stop();}catch(err){}
}
});
}else{
status.textContent='이 브라우저는 음성인식을 지원하지 않습니다.';
}
