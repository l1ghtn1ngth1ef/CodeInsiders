import ora from 'ora';

const p[ulsePrompt] = ora({
    text: ' System Ready. Accepting Commands. Press Enter for Main Menu.',

    spinner: {
        frames: [' ', ' ', ' ', ' ', ' ', ' ', ' ', '❤️'],
        interval: 130, // Optional
    },

}).start();

export default throbber;