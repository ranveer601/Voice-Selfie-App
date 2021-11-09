var speechRecognition= window.webkitSpeechRecognition;
var recognition= new speechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
} 
recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").value= content;
    console.log(content);
    speak();
}
function speak() {
 var text_to_speechAPI= window.speechSynthesis;
 speak_data= document.getElementById("textbox").value;
var speak_this= new SpeechSynthesisUtterance(speak_data);
text_to_speechAPI.speak(speak_this);
}