import ora from 'ora';

const pulsePrompt = ora({
    text: ' System Ready. Accepting Commands. Press Enter for Main Menu.',

    spinner: {
        frames: [' ', ' ', ' ', ' ', ' ', ' ', ' ', '❤️'],
        interval: 130, // Optional
    },

}).start();

export default pulsePrompt;

export async function init() {
    const pulsePrompt = ora({
    }).stop();
}