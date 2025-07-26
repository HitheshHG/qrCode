import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            message: 'Enter the URL to generate a QR code:',
            name: 'URL',
        }
    ])
    .then((answers) => {
        const URL = answers.URL;
        var qr_svg = qr.image(URL);
        qr_svg.pipe(fs.createWriteStream('qrCode.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });