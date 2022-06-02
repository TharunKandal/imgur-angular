# Imgur

This is an Gallery App which displays the Images in a responsive Grid.

. The Gallery grid uses Cards to display the images and Card Body for the Description of Images .
. The Images are Filtered out using DropDowns - By Sections and Time Period .
. Images are sorted based on the Specification - 1. Viral , 2.Top, 3.Time, 4.Rising

## Approach

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

`ng new` command is used to create default Angular App .

`Material Design Bootstrap ` - UI KIT is used for the Layout and Styled Components like Cards , Nav and DropDowns .

`imgur Service` is used to fetch the data from the Imgur Service using an Observable from `RxJs` and `HttpModule` .

    . The service uses `client Id` in headers as Authorization token to access Imgur Service .
    . The Service is injected to the `root` and accessed by the App Component .
    . The Image Data is Initially set to the App component using `getImages()` method in `OnInit` life cycle method.
    . The App Component binds the data to the App template by `property-Binding` technique.
    . The Image gallery Data is filtered out using `Form Group` containing `select` Components which binds using `Form Controls`.
    . The `Select` Dropdowns uses `EventBinding` to the `change` event to fetch the data as per `FormGroup` Specifications .
    . The Main View is set to `Loading` animation while fetching the data.
    . prettier is used to format the Code .

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Since imgur API won't work well with http://localhost and slight modification is made to the start up script react-scripts start --host 0.0.0.0

Hence server will start at http://0.0.0.0:3000/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
