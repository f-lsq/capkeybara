# Capkeybara
[Capkeybara](#) is THE ultimate e-commerce platform for top-notch mechanical keyboard components that cater to all your needs! 

<p align="center">
  <img src="src/assets/images/readme/logo.webp" width="200" margin="auto">
</p>

Whether you're a seasoned keyboard enthusiast, a newbie exploring the world of mechanical keyboards, or simply on the hunt for a quick upgrade, we've got you covered! We are here guide you with expert advice to ensure you make the perfect choice every time you hit that "add to cart" button!

* [Frontend Repository](https://github.com/f-lsq/capkeybara-frontend) (ReactJS - useForm, Toastify, Styled Components)
* [Backend Repository](https://github.com/f-lsq/capkeybara-frontend) (NodeJS - Express, Handlebars, Bookshelf ORM with knex, DB-migrate, Cloudinary, Stripe, and MySQL)

<!-- Begin with your project name, and a summary of what your project is about. Briefly describe the motivations of the owners who kickstarted this project. Treat it as an elevator pitch for your project.

* Describe the context and goals of your project
* Make sure to justify why the project should exists
* Include a URL to the deployed version of your project -->

## Table of Contents
1. [System Design](#system-design)
2. [UI/UX](#uiux)
3. [Features](#features)
4. [Use Cases](#use-cases)
5. [Technologies Used](#technologies-used)
6. [Testing](#testing)
7. [Test Cases](#test-cases)
8. [Deployment](#deployment)
9. [Credits](#credits)

## System Design
### Entity Relationship Diagram
![Entity Relationship Diagram](src/assets/images/readme/erd.png)

### SQL Schema Diagram
![SQL Schema](src/assets/images/readme/schema.png)

### API Routes
| Method/Path                         | Request Body / Parameters  | Response                           | 
| -----------------------------------| -------------------------- | ---------------------------------- | 
| GET /products                      |                            | On success,... <br/>On failure,... | 
| POST /products/add/:productId      | {<br/>"name": string, <br/> "description": string,<br/> etc <br/>}                           | On success,... <br/>On failure,... | 
| PUT /products/edit/:productId      |                            | On success,... <br/>On failure,... | 
| DELETE /products/delete/:productId |                            | On success,... <br/>On failure,... | 

## UI/UX

<!-- This section should talk about the 

* List down the user stories and their acceptance criteria.
* Share links to wireframes, mockups, diagrams that are used in the UI/UX processes. Those files can be pushed to the Github repository, or be placed in a separate PDF file as part of the repository.
* Describe what your considerations were for the Five Planes of UI/UX, such as the choice of colour and fonts for the surface plane, or information organisation strategy for the structure plane. -->

### User Stories
1. As a *keyboard hobbyist* (regular), I want to browse the available keyboard accessories, so that I can make modifications to my current keyboard(s).
2. As a *beginner* (uncertain), I want to follow a step by step guide on how to build a keyboard, or even purchase a starter pack containing keyboard components, so that I can start building my first keyboard easily.
3. As a *buyer* (spontaneous), I want to browse the pre-built keyboards, add them to my cart, checkout and track my orders in real time, so that I will be able to receive and use the keyboard quickly.
4. As a *vendor*, I want to list my products and manage my orders, so that I can increase the reach of my products and make more profits.
5. As an *admin*, I want to be able to perform CRUD on the users, sellers and other tables in the database, so that the site remains clean, with no redundant data or disruptive users.

### Wireframes
Below are the wireframes for both the buyers, and seller pages. The link to the Figma project can be accessed [here](https://www.figma.com/design/6GzeGtguNyc9KlLTqTjQqW/Capkeybara?node-id=155%3A38&t=FTLRmqNO8eSulcjp-1).


#### Wireframe for Buyer Pages
![Wireframe for Buyer Pages](src/assets/images/readme/buyer-wireframe.png)

#### Wireframe for Seller Pages
![Wireframe for Seller Pages](src/assets/images/readme/seller-wireframe.png)

### Mockups
#### Landing Page
![Landing Page](src/assets/images/readme/landing.gif)

#### Shop Page
![Shop Page](src/assets/images/readme/shop.png)

#### Build a Keyboard Page
![Build a Keyboard Page](src/assets/images/readme/build-a-keyboard.png)

#### About Page
![About Page](src/assets/images/readme/about.png)

#### Buyer Sign Up Page
![Buyer Sign Up Page](src/assets/images/readme/buyer-signup.png)

#### Buyer Log In Page
![Buyer Log In Page](src/assets/images/readme/buyer-login.png)

#### Buyer Cart Page
![Buyer Cart Page](src/assets/images/readme/buyer-cart.png)

#### Buyer Profile Page
![Buyer Profile Page](src/assets/images/readme/buyer-profile.png)

#### Seller Sign Up Page
![Buyer Sign Up Page](src/assets/images/readme/buyer-signup.png)

#### Seller Log In Page
![Seller Log In Page](src/assets/images/readme/seller-login.png)

#### Seller Cart Page
![Seller Cart Page](src/assets/images/readme/seller-cart.png)

#### Seller Profile Page
![Seller Profile Page](src/assets/images/readme/seller-profile.png)

#### Seller Product Page
![Seller Product Page](src/assets/images/readme/seller-product.png)

#### Seller Add Product Page
![Seller Add Product Page](src/assets/images/readme/seller-add-product.png)

#### Seller Update Product Page
![Seller Update Product Page](src/assets/images/readme/seller-update-product.png)

#### Seller Delete Product Page
![Seller Delete Product Page](src/assets/images/readme/seller-delete-product.png)

#### Seller Order Page
![Seller Order Page](src/assets/images/readme/seller-order.png)

### Choice of Color and Information Organisation
Capkeybara was mainly inspired by the rodent itself. The site aims to blend cuteness with its actual theme being a mechanical keyboard e-commerce store. The color scheme for the buyers page was also derived images of the capybara, as seen in the image below.

![Colour Scheme](src/assets/images/readme/color-scheme.jpg)

As the site is aimed for all consumers alike, be it keyboard enthusiast, regular shoppers, or even beginners just starting out, the landing page is organised to cater to these different target audiences. 
* `Browse Keyboard` button allows both keyboard hobbyist and regular consumer looking for a quick buy to directly browse the selection of keyboard the site has to offer, with just a click.
* `Build a Keyboard` button enables beginners to effectively move to the relevant page to read up and learn about the ways to build a keyboard. Once they have gone through the tutorial style guide, they will then be redirected to the shop to purchase their first keyboard, or keyboard components.


## Features
<!-- List down the major features of your application, and also the algorithms that you have used to implement those features. If there are any limitations or bugs, please describe them as well. If you have any features pending implementation, you can also take the opportunity to discuss them here. -->
Major features of capkeybara includes
1. **Search**, which makes use of algorithm such as mergesort for sorting
2. **Checkout**, which is handled by Stripe. A session ID will be generated from Stripe and received by the client to indicate a successful transaction. The main limitation of this is that users are able to skip the checkout process and make an order by navigating to the `/checkout/success` page. A possible solution for this is to validate the session ID sent by Stripe before placing an order.
3. **Order Status**, which allows buyers to check the status of their order. They include `Payment Made`, `Ready to Ship`, `Out for Delivery`, `Delivered`. A limitation of this from the seller side is that the status of an order can only be update once all products in an order meets the order status requirement (eg. order status can only be updated to 'Delivered' if all products in the order has been delivered). Changing this order status will also update the order status for all sellers.

## Use Cases
<!-- If you wish to present the features list in a form more suitable for software development, you can write them as use cases instead. 

A basic use case consists of:
* The name of the use case, usually a short title of what it does
* The objective, from the user's point of view
* The steps the user will take to achieve the objective -->

## Technologies Used
<!-- Provide an overview of the languages, frameworks, libraries and any other tools that you have used to produce the project.  Be sure to provide a short description of where in the project the technology is used, and a URL to its Github repository.  -->
### Frontend
* [ReactJS](https://react.dev/reference/react) - Route access restriction, navigation between pages, form control using useForm
* [Cloudinary](https://cloudinary.com/documentation/upload_widget) - Image upload widget for buyer and seller and product images

### Backend
* [NodeJS](https://nodejs.org/en) - Server environment. [ExpressJS](https://expressjs.com/), [Handlebars](https://handlebarsjs.com/) for admin page templating, [Sessions](https://expressjs.com/en/resources/middleware/session.html), JWT with bcrypt for Authentication, [Bookshelf ORM](https://bookshelfjs.org/) with knex, [Stripe](https://stripe.com/) for payment processing and [caolan form](https://github.com/caolan/forms) for form control.
* [MySQL](https://www.mysql.com/) - Database management, used in conjuntion with [db-migrate](https://db-migrate.readthedocs.io/en/latest/)


## Testing
<!-- Provide proof that you have done testing on your project. You can provide step by step instructions for the examiner to test the project. Use your user stories and their acceptance criteria as a starting point. Do note that any unhandled exceptions, console errors etc will be considered as failing the testing criteria. 

You may want to provide manual test cases. An example of a manual test case could be:
1. Test that user can sign in
  a. From the home page, click on the 'Login' button
  b. Fill in a valid username and password and click on the 'Login'  button
  c. The user should be redirected to the profile page

2. Test user entering an invalid password
  a. From the home page, click on the 'Login' button
  b. FIll in a valid username but an invalid password, and click on the 'Login' button
  c. The user should be informed that the login has failed.

You can consider putting your manual test cases in a PDF file if they make your readme file too long. -->

## Test Cases
<!-- If you wish to present your testing steps in a clearer method, consider writing *test cases*. A test case consists of the following structure:

| Test Case # | Test Case Description                               | Test Steps                                   | Expected Results         |
| ------------| --------------------------------------------------- | -------------------------------------------- | ------------------------ |
|             | Prerequisite: The user is at the calculate BMI form |                                              |                          |
| 1           | Calculate the BMI                                   | 1. Enter the weight into the textbox as 84kg<br />2. Enter the height into the textbox as 1.71<br />3. Click the Calculate Button | The BMI is shown as 28.7 |

The above format is just an example. As long as you provide:
* A description of the test case
* The steps for performing the test
* The expected results
* Any assumptions or prerequisites

Your test case should work well! -->

## Deployment

<!-- Describe the process that you used to host your website on a hosting platform (such as Github pages or Heroku). Provide the following details:

1.	What is your hosting platform?
2.	How is the database hosted?
3.	What are the environment variables and what are they responsible for?
4.	What are the dependencies that your project used?
5.	What are the deployment steps for the project?

You can provide deployment details in a separate document (PDF or another markdown file). There is no need to be original for this section; if another website or document have the steps, just link there and acknowledge the author in your credits. -->
* [React Frontend](#) (Netlify)
* [Express Backend - Admin Page](#) (Render)

## Credits
<!-- Put here all the code, content and assets that you have used. If you have used a piece of code from an external website, please acknowledge it and provide a link to it.  -->

[How to organise a react project](https://www.taniarascia.com/react-architecture-directory-structure/#services)

# Replace all image to 'WebP'

Sample CSS 
```
  // Mobile View
  padding-top: 2.94em;

  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding-top: 3.5em;
  }

  // Monitor View
  @media screen and (min-width: 1280px) {
    padding-top: 4.69em;
    
  }
```

Sample CSS 
```
  // Mobile View


  // Tablet View
  @media screen and (min-width: 481px) and (max-width: 768px) {

  }

  // Laptop View
  @media screen and (min-width: 769px) and (max-width: 1279px) {

  }

  // Monitor View
  @media screen and (min-width: 1280px) {

    
  }
```


# Possible Improvement
* Saving user information in localStorage or sessionStorage instead of constantly calling the API for the information -> Error calling API when token refreshes
* Currently, buyers can bypass checkout by going to the checkout/success route