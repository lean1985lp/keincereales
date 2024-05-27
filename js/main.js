'use strict';

function speakText(text) {
    var ssml = '<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" version="1.0" xml:lang="es-AR"><voice name="es-AR-TomasNeural"><mstts:express-as><prosody rate="0%" pitch="-5%">${text}</prosody></mstts:express-as></voice></speak>';

    var utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'es-AR';
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google español de Argentina');
    utterance.text = ssml;

    speechSynthesis.speak(utterance);
}

document.getElementById('btnSpeak').addEventListener('click', function () {
    speakText('Hola, bienvenidos a Keín; donde encontrarás nuestros productos de excelente calidad!!! ');
});
