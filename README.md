# Cars Reviews

This app is for car reviews. Provides there is a public and private part. The public part gives the access to all car reviews, login and registration pages. Private users are divided into 2 roles. Regular users and administrators. The regular users can add comment on each review. The administrator can add, remove and edit reviews.

## Develoment

These projects are built using a Angular framework. The app is used with lazy load and state management, it also uses angular animations to present cars. The data is loaded via communication with console kinvey.

## App Modules

The application is built from the following modal structure:

- **Shared Module**

The Shered module contains in components, interfaces and form validators that are reused throughout the application.

- **Core Module**

The core module imported into the app module contains the authentication module, the components that are displayed on all pages and the interceptors. It also contains store information about the main components.

- **Auth Module**

The authentication module is a lazyload that has an '/auth/' router. It contains 3 components: login, registration and profile. There is also a service that takes care of communication with the server. Authentication is done with the auth Token provided by the server. This token is stored in local storage. When initializing the application, a request is made to the server to verify the saved token. If it is not valid it is deleted and the user is sent to the login page for a new authorization. The module also has a guard that takes care of which pages users can access.

- **Pages Module**

The page module contains 3 three pages. These are home, about, contacts pages. The about and contacts pages are static pages. The home page contains 2 dynamic sections that retrieve data from the server. This data is saved in the store and then visualized.

- **Cars Module**

The Cars module is also a lazyload module with router '/cars/'. He takes care of displaying the car list, adding and removing a car. Also for presenting the detailed page of each car and adding comments about the car. The service in this module takes care of all communication with the server. The data is saved in the store and after each change and updated on the screen. Depending on the type of users, different options are provided for working with the application. Non-authenticated consumers can only view cars. Users with ordinary rights have the opportunity to add a comment under each car review. Users with administrative rights have the ability to add, remove and edit a car review. Auth.guard takes care of determining the access rights.

- **Comments Module**

The comments module is responsible for listing and adding comments.

## Deployment

The application can be accessed at the following address: [Car Reviews](https://kaloyanmarinov.github.io/cars-reviews-softuni-angular/)

Admin user credentials:

Username: admin@gmail.com

Password: 123456
