# WebAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

#AWS Ubuntu Pipeline

Installation de Jenkins
sudo apt install openjdk-8-jre
sudo update-alternatives --config java
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo apt-add-repository "deb https://pkg.jenkins.io/debian-stable binary/"
sudo apt install jenkins
sudo systemctl start jenkins

Installation de NPM/Node/AngularCLI
sudo apt-get update
sudo apt-get install npm
wget -qO- https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs

npm i @angular/cli

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
