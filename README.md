# StarwarsLister

To run this project locally you will need to have node.js with the node package manager and Angular installed on your machine:

Ensure you have the latest version of node.js installed on your system (to do this, open a terminal window and type 'node -v' and hit enter, if a version number appears, you have node installed -- the latest version is 11.4.0)
	If node.js is not installed, you can go to this link to download the installer: https://nodejs.org/en/download/
  
Ensure that you have the latest version of Angular installed on your machine as well (to do this, open a terminal window and type 'ng -v' and hit enter, if a version number appears, you have Angular installed -- latest version is 7.1.3)
	If Angular is not installed, run these 2 commands in a terminal (node package manager will install it for you):
	npm install -g @angular/cli
	npm install --save-dev @angular-devkit/build-angular

Clone/download this repository to a place your local machine		
Navigate to the root folder on your machine called 'starwars-lister-master'
Shift+right-click on the folder and select "Command Prompt Here" or "Powershell Here"
** If you would like to view the code in an editor:
	If you have Visual Studio Code, simply type 'code .' and hit enter and the project will open in a new Visual Studio Code instance.
	Otherwise, you can open it in your favorite editor as you normally would!
Type in the command "ng serve --open" and hit enter - this should open the application in your default browser

** Note: If you are using Google Chrome, there may be an issue with CORS. The workaround I found to run it locally was to install a Chrome extension called Allow Cross Origin Control (you can get it here: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi), however this could have just been something on my computer causing the CORS issue as I have a proxy set up, I thought I would mention it here to be safe!



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
