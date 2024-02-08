import ora from 'ora';

const pulsePrompt = ora({
    text: ' System Ready. Accepting Commands. Press Enter for Main Menu.',

    spinner: {
        frames: [' ', ' ', ' ', ' ', ' ', ' ', ' ', '❤️'],
        interval: 130, // Optional
    },

}).start();

export default pulsePrompt;

module.exports.init = function (const pulsePrompt = ora ({ text: 'ok' }).stop) {
    console.log('hi');
  };