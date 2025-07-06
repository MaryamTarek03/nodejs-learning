import chalk from "chalk";

function printUsage() {
  console.log(`
${chalk.magenta.bold.underline(`Welcome to my CLI,
you look like a newbie so i will help you a bit
here are my available spells:`)}

        ${chalk.blueBright(`
        --start\t\tStart the game
        --build\t\tBuild the App
        --version\tCheck the version
        --name\t\tPrint the name
        `)}
        `);
        console.log(chalk.magentaBright.underline('Have a good day!\n'))
        console.log(chalk.gray.strikethrough('And go waste your time on reels'))
}

printUsage();
