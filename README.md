# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Project Overview

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

* The person using your application should have a way of impersonating/logging in as an existing user
* all pages in the application should require authentication before display
* user can logout and log back in

Root Page
* toggle between his/her answered and unanswered polls on the home page
* polls are sorted by timestamp of when created
* unanswered questions should be shown by default
* name of the logged in user should be visible on the page
* clicking on poll goes to poll details page

Poll Detail Page
* details of each poll should be available at questions/:question_id

unanswered
Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.

answered
Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.

404 page for when poll doesnt exist

Voting on Poll
* Upon voting in a poll, all of the information of an answered poll should be displayed.
* The user’s response should be recorded and clearly visible on the poll details page. (no changing of voting allowed)


Adding Poll Page
* The form for posting new polling questions should be available at the /add route.
* should show the text “Would You Rather” and have a form for creating two options
* Upon submitting the form, a new poll should be created, and the user should be taken to the home page
* and the new polling question should appear in the correct category on the home page.


Leaderboard Page
* The application should have a leaderboard that’s available at the /leaderboard route.
* ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered

* Entries
User’s name;
User’s picture
Number of questions the user asked; and
Number of questions the user answered

Rubrik https://review.udacity.com/#!/rubrics/1567/view

## Project Planing

### Views and Components

There are 4 views in the app
Home
New Poll
Leader Board
Poll

Home View Components
 - App
 - Nav
     - links to Home, New Poll, Leader Board
     - logged in user, and logout link
 - Unanswered Polls List and Answered Poll List
     - Polls

Leader Board View Components
    - App
    - Nav
    - List of Users
        - User: image, name, answered question total, created question total, and score

New Poll View Components
    - App
    - Nav
    - New Poll Form

Poll View Components
    - App
    - Nav
    - Poll
        - Name of author, avatar, form selection and submit (unanswerd)
        - Name of author, avatar, Results and loggedin user selection


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
