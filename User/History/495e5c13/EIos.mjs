import { ESLint } from 'eslint';
import { green, redBright, red, Log, yellow 
} from '@kitql/helpers';

const LintMessage = new Log('Linter');

(async function main() {
    // 1. Create an instance.
    const eslint = new ESLint();
    // 2. Lint files.
    const results = await eslint.lintFiles([
        './src/**/**.{js,jsx,ts,tsx,md,html}',
    ]);

    // 3. Format the results.
    const formatter = await eslint.loadFormatter(
        './lintFormatter/lintFormatter.js'
    );
    let resultText = formatter.format(results);

    // 4. Output it.
    let jsonAsPrettyString = `${JSON.stringify(resultText, null, 1)}`;

    //console.log(JSON.stringify(resultText, null, 2).replace(/\s+/g, ' ').replace(/\\n/g, '').replace(/\\n/g, '').replace(/\"/g, "").replace(/\,/g, "").replace(/\s\s+/g, " "));
    //console.log(resultText)= function () {};
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});
