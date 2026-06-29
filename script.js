const mic=document.getElementById('mic');
const status=document.getElementById('status');
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!SR){status.textContent='이 브라우저는 음성인식을 지원하지 않습니다.';}
else{
const r=new SR();
r.lang='ko-KR';
r.interimResults=false;
r.continuous=false;
mic.onclick=()=>{mic.classList.add('listening');status.textContent='🎤 듣고 있어요...';r.start();};
r.onresult=e=>status.textContent=e.results[0][0].transcript;
r.onend=()=>mic.classList.remove('listening');
r.onerror=e=>{status.textContent='오류: '+e.error;mic.classList.remove('listening');};
}
