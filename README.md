# TEXT-READER web appllication allows user to convert text into speech 

The createCards function is responsible for creating and populating the cards with text and images from the data.
The getVoices function retrieves available voices using the speechSynthesis.getVoices() method and populates the voice selection dropdown with these options.
The handleVoice function takes a text and a card element as parameters.
setTextMessage sets the text content of the message object.
speakText initiates the text-to-speech conversion using the speechSynthesis.speak method with the message object
The setVoice function sets the voice for the message object based on the user's selection in the voice dropdown.
