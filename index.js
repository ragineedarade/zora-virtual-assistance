let box = document.querySelector(" .box");
let btn = document.querySelector("button");
const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  window.speechSynthesis.speak(speakInput);
  // speakInput.rate=1;
  // speakInput.pitch = 2;
  // speakInput.volume
  speakInput.lang = "en-IN";
};
window.onload = () => {
  speakFunc("   hy dude i am zora your virtual assistance");
  greatingFunc();
};
const greatingFunc = () => {
  let date = new Date();
  let hour = date.getHours();
  console.log(hour);
  if (hour >= 0 && hour < 12) speakFunc(" good morning");
  else if (hour >= 12 && hour < 16) {
    speakFunc("good afternoon");
  } else {
    speakFunc("good evening ");
  }
};

const startVoiceInput = () => {
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition(); // Corrected spelling
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      let spokenText = e.results[0][0].transcript;
      handleCommands(spokenText);
      box.classList.remove("btn-box");
      btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };
    recognition.start(); // Start recognition once
  } else {
    alert("Your browser does not support voice recognition.");
  }
};

// Ensure `btn` is defined
// Assuming there is a button with id="btn"
btn.onclick = () => {
  box.classList.add("btn-box");
  btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
  startVoiceInput();
};

const handleCommands = (command) => {
  console.log(command);
  //  Here I open youtube command Machine will open specific channel name over youtube
  if (command.includes("YouTube")) {
    speakFunc(`Opening YouTube channel for ${command}`);
    const channelName = command.replace("YouTube", "").trim();
    window.open(`https://www.youtube.com/results?search_query=${channelName}`);
  }
  // In this statement machine will reply of Hello Command
  else if (
    command.includes("Hello.") ||
    command.includes("Hey.") ||
    command.includes("Hi.")
  ) {
    speakFunc("Hello mam, how can i help you.");
  }
  // In this statement machine will be tell about machines name and owner's name
  else if (
    command.includes("Who are you?") ||
    command.includes("Who is your developer?") ||
    command.includes("Who is your owner?")
  ) {
    speakFunc("I am Zora Your Virtual assistance build by raginee darade");
  }
  // In this statement machine will be open youtube and also machine will be opened specific channel of youtube
  else if (command.includes("Open YouTube") || command.includes("YouTube.")) {
    speakFunc(" opening youtube wait");
    window.open("https://www.youtube.com/watch?v=Douy2lRDBo4&t=1676s");
  }
  // In this statement linkedin app will be open
  else if (
    command.includes("Open LinkedIn.") ||
    command.includes("LinkedIn.")
  ) {
    speakFunc(" opening Linkedin.... wait");
    window.open("https://www.linkedin.com/feed/");
  }
  //  In this statement calculator will be open
  else if (
    command.includes("Open Calculator.") ||
    command.includes("Calculator.")
  ) {
    speakFunc(" opening calculator... wait");
    window.open("Calculator://");
  }
  // What is the time now
  else if (
    command.includes("Tell me time.") ||
    command.includes("Time.") ||
    command.includes("What is time right now?")
  ) {
    let time = new Date().toLocaleString(undefined, {
      hours: "numeric",
      minute: "numeric",
    });
    speakFunc(time);
  }
  // Here machine will be tell about what the date of today
  else if (
    command.includes("Tell me date.") ||
    command.includes("Date.") ||
    command.includes("What is date today?")
  ) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "long",
    });
    speakFunc(date);
  }
  // In this space age machine will directly open chair jeopardy account
  else if (command.toLowerCase().includes("chatgpt")) {
    speakFunc("Opening ChatGPT account");
    window.open("https://chat.openai.com/");
  } else {
    speakFunc(`this i found on internnet reguarding ${command}`);
    window.open(`https://www.google.com/search?q=${command}`);
  }
};
