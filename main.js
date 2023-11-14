var repo_site = "https://AquaMela.github.io/I_am_so_happy/";
 
var audioPath = 'sound/dokaben (2).mp3';
var textToDisplay = '<p style="color:red; font-size: 90px;">祝 WAVEプロジェクト 脱退</p>';

var welcom = {
    type: "html-keyboard-response",
    stimulus: "Welcom to the experiment! Press any key to begin."
    };
    
var trial = {
    type: 'audio-keyboard-response',
    stimulus: audioPath,
    choices: jsPsych.NO_KEYS,
    trial_ends_after_audio: true
};

var shuku = {
    type: 'html-keyboard-response',
    stimulus: textToDisplay
}


// Create the timeline
var timeline = [welcom, trial, shuku];

// Run the experiment
jsPsych.init({
  timeline: timeline,
  //on_finish: function() {
    //jsPsych.data.displayData();
  //}
});