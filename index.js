const cards = document.querySelector(".cards");
const voiceSelect = document.getElementById("voices");
const textBox= document.getElementById("textBox");
const readButton = document.getElementById("btn");
const toggleButton = document.getElementById("toggleBtn");
const closeButton = document.getElementById("close");
const message = new  SpeechSynthesisUtterance();

const data= [
    {
        image: "drink",
        text: "I'm Thirsty" },
      
      {
        image: "food",
        text: "I'm Hungry" },
      
      {
        image: "tired",
        text: "I'm Tired" },
      
      {
        image: "hurt",
        text: "I'm Hurt" },
      
      {
        image: "happy",
        text: "I'm Happy" },
      
      {
        image: "angry",
        text: "I'm Angry" },
      
      {
        image: "sad",
        text: "I'm Sad" },
      
      {
        image: "scared",
        text: "I'm Scared" },
      
      {
        image: "outside",
        text: "I Want To Go Outside" },
      
      {
        image: "home",
        text: "I Want To Go Home" },
      
      {
        image: "school",
        text: "I Want To Go To School" },
      
      {
        image: "grandma",
        text: "I Want To Go To Grandmas" }
    ];

    function createCards(item){
        const card = document.createElement("div");
        const {image , text} = item;
        card.classList.add("card");
        card.innerHTML = `
        <img src="https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true" alt="${text}">
        <p class="info">${text}</p>
        `;

        card.addEventListener("click" ,() => handleVoice(text, card));
        cards.appendChild(card); 
    }

    data.forEach(createCards);

    let voices = [];

    function getVoices(){
        voices = speechSynthesis.getVoices();
        voices.forEach(voice =>{
            const option = document.createElement("option");
            option.value = voice.name;
            option.innerText = `${voice.name} ${voice.lang}`;
            voiceSelect.appendChild(option);
        });
    }

    function handleVoice(text , card){
        setTextMessage(text);
        speakText();
        card.classList.add("active");
        setTimeout(()=>
            card.classList.remove("active") , 800);
    }

    function setTextMessage(text){
        message.text = text;
    }

    function speakText(){
        speechSynthesis.speak(message);
    }

    function setVoice(e){
        message.voice = voices.find(voice => voice.name === e.target.value);
    }

    toggleButton.addEventListener("click", () =>{
        document.getElementById("textBox").classList.toggle("show") 
    });

    closeButton.addEventListener("click", ()=>{
        document.getElementById("textBox").classList.remove("show"); 
    })

    speechSynthesis.addEventListener("voiceschanged", getVoices);

    voiceSelect.addEventListener("change", setVoice);

    readButton.addEventListener("click", () =>{
        setTextMessage(text.value);
        speakText();
    })

    getVoices();