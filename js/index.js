// Formula to calculate typing speed. 
// typing_speed  = (actualWords / totalTime)* 60

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence')

let startTime, endTime, totalTimeTaken;
const sentences = [
    'The quick brown fox jump over the lazy dog 1',
    'The quick brown fox jump over the lazy dog 2',
    'The quick brown fox jump over the lazy dog 3'
]

const calculateTypingSpeed = (total_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split("").length

    if(actualWords !== 0){
        let typing_speed = (actualWords / totalTimeTaken)* 60;
        typing_speed = Math.round(typing_speed)
        score.innerHTML = `Your typing Speed is ${typing_speed} words per minute &
        you wrote ${actualWords} words`
    } else {
        score.innerHTML = `Your typing Speed is zero words per minute &
        you wrote zero words`
    }
}
const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date()
    endTime = date.getTime()

    totalTimeTaken = (endTime - startTime) / 1000

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);
    show_sentence.innerHTML = "";
    typing_ground.value = "";
}

const startTyping = (params) => {
    let randomNumber = Math.floor(Math.random()* sentences.length);
    // console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber]

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done"
}
btn.addEventListener('click', ()=> {
    switch (btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute('disabled')
            startTyping();
            break;
        case "done":
            typing_ground.setAttribute('disabled', true)
            endTypingTest();
            break
    }
})