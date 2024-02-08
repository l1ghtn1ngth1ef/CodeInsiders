import { EventEmitter } from 'events';
import { spawn, exec } from 'child_process';
import ora from 'ora';
import shell from 'shelljs';
import inquirer from 'inquirer';
import { Log, green, greenBright } from '@kitql/helpers';
import pressAnyKey from 'press-any-key';
import pulsePrompt from './pulsatePrompt.js';

const emitter = new EventEmitter();
emitter.setMaxListeners(100);

const LintMessage = new Log('');

const testComm = LintMessage.info(`${greenBright('Run the Vite Dev Server')}`);

console.clear();

console.log('⚡ MultiVerse - Multi-Dimensional Console Interpreter ⚡');

pressAnyKey('\r')
  .then(() => {
    pulsePrompt.stop();
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'Menu',
          message: 'Choose Command',
          choices: [
            { name: `Execute SSR Development and Production Server Environment`, value: 'npm run dev > /dev/null', key: 'v' },
            { name: 'Turn off Throbber', value: 'node -v', key: 'b' },
            { name: 'Run ls in color', value: 'ls -a --color', key: 'r' },
            { name: 'Shutdown the Command Interpreter', value: 'pkill node && clear', key: 'q' },
            { name: 'Cancel Command Interpreter', value: 'exit', key: 'c' },
          ],
          renderSelected: (choice) => `❯ ${choice.name} (${choice.key})`, // optional
          renderUnselected: (choice) => ` ${choice.name} (${choice.key})`, // optional
        },
      ])
      .then((answers) => {
        console.info('⚡ Executing Command:', answers.Menu);
        // shell.exec(`sh ./${answers.Menu}`,{silent:true})
        const childProcess = spawn(`${answers.Menu}`, { shell: true, stdio: 'inherit' });
      })
      .then((answers) => {
     //   const childProcessPerpetual = spawn('node KonSoulOperator/KonSoulOperator.js', { shell: true, stdio: 'inherit' });
      });
  });

export default function MultiVerse() {
  return {
    name: 'MultiVerse',
  };
}