[How to organise a react project](https://www.taniarascia.com/react-architecture-directory-structure/#services)

# Capkeybara
[Capkeybara](#) is THE ultimate e-commerce platform for top-notch mechanical keyboard components that cater to all your needs! 

Whether you're a seasoned keyboard enthusiast, a newbie exploring the world of mechanical keyboards, or simply on the hunt for a quick upgrade, we've got you covered! We are here guide you with expert advice to ensure you make the perfect choice every time you hit that "add to cart" button!

![Landing Page](assets/readme/landing-page.png)

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
![ERD](src/assets/images/readme/erd.png)

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
1. As a **keyboard hobbyist** (regular), I want to browse the available keyboard accessories, so that I can make modifications to my current keyboard(s).
2. As a **beginner** (uncertain), I want to follow a step by step guide on how to build a keyboard, and also a starter pack containing keyboard components, so that I can start building my first keyboard easily.
3. As a **buyer** (spontaneous), I want to browse the pre-built keyboards, add them to my cart, checkout and track my orders in real time, so that I will be able to receive and use the keyboard.
4. As a **seller**, I want to list my products and manage my orders, so that I can increase the reach of my products and make some profits.
5. As a **site admin**, I want to be able to perform CRUD on the users, sellers and other relevant tables, so that the site remains clean, with no redundant data or disruptive users.

## Features
<!-- List down the major features of your application, and also the algorithms that you have used to implement those features. If there are any limitations or bugs, please describe them as well. If you have any features pending implementation, you can also take the opportunity to discuss them here. -->


## Use Cases
<!-- If you wish to present the features list in a form more suitable for software development, you can write them as use cases instead. 

A basic use case consists of:
* The name of the use case, usually a short title of what it does
* The objective, from the user's point of view
* The steps the user will take to achieve the objective -->

## Technologies Used
<!-- Provide an overview of the languages, frameworks, libraries and any other tools that you have used to produce the project.  Be sure to provide a short description of where in the project the technology is used, and a URL to its Github repository.  -->


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

## Credits
<!-- Put here all the code, content and assets that you have used. If you have used a piece of code from an external website, please acknowledge it and provide a link to it.  -->
