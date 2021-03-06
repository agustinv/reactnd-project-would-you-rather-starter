# Would You Rather Project



## Installation and Launching Instructions:


* First make sure node and npm is installed in your local machine.
* git clone the git repo (eg git clone git@github.com:agustinv/reactnd-project-would-you-rather-starter.git)
* cd to local folder of app (eg cd reactnd-project-myread-starter)
* install all project dependencies with `npm install`
* start the local server with `npm start`


## Project Overview

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

* The person using your application should have a way of impersonating/logging in as an existing user
* all pages in the application should require authentication before display
* user can logout and log back in

Root Page
* toggle between his/her answered and unanswered Questions on the home page
* Questions are sorted by timestamp of when created
* unanswered questions should be shown by default
* name of the logged in user should be visible on the page
* clicking on Question goes to Question details page

Question Detail Page
* details of each Question should be available at questions/:question_id

unanswered
Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.

answered
Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.

404 page for when Question doesnt exist

Voting on Question
* Upon voting in a Question, all of the information of an answered Question should be displayed.
* The user’s response should be recorded and clearly visible on the Question details page. (no changing of voting allowed)


Adding Question Page
* The form for posting new polling questions should be available at the /add route.
* should show the text “Would You Rather” and have a form for creating two options
* Upon submitting the form, a new Question should be created, and the user should be taken to the home page
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
Dashboard
New Question
Leader Board
Question

Dashboard View Components
    - App
    - SignIn Form
    - Nav
        - links to Home, New Question, Leader Board
        - logged in user, and logout link
    - Questions List: Unanswered Questions List and Answered Question List
         - QuestionSummary
             Summary of answers and link to Question

Leader Board View Components
    - App
    - SignIn Form
    - Nav
    - UsersScores List
        - UserScore: image, name, answered question total, created question total, and score

New Question View Components
    - App
    - SignIn Form
    - Nav
    - New Question Form

QuestionPage View Components
    - App
    - 404 Page Component/NoMatch
    - SignIn Form
    - Nav
    - Question Component
        - QuestionAnswer Component:  Name of author, avatar, form selection and submit (unanswerd)
        - QuestionResult Component:  Name of author, avatar, Results and loggedin user selection

### Determine Events In The App

* Nav Component
    - Get the authedUser to display state on nav
    - Logout authedUser

* SignIn Form Component
    - SignIn User/set authedUser

* Question List Component
    - Get all Questions
    - Get authedUser so we can toggle between filtered Question lists

* QuestionSummary
    - Get Question id from list of Questions
    - Get authedUser to know what to display in summary

* QuestionPage Component
    - Get Question id from url
    - Get authedUser to display question or results, and submit question answer

* New Question Component
    - Get authedUser so user can create new Question
    - Set the text for two answers options of Question

* LeaderBoard Component
    - Get all Users so we can display UserScore list

* UserScore Component
    - Get all Questions so we can calculate scores

### Data and the Store

We need to keep track of the following in the redux store

users,
questions,
authedUser

Revisiting this one more time, (2nd time now).  Again Im not sure why the _DATA.js is not returning normalized data (ie why does answer and authorship are in both data models.)

Anyway, in order to make sure that the app functions correctly, I think there are two options

1) ignore questions and answer data from users, and in fact filter that out from redux store (as pointed out before this would be recommended otherwise it can lead to bugs).  In fact just found another bug in Home page accessing that data. [could also have data just in users but same thing]

2) move the handleSaveQuestion and handleSaveQuestionAnswer to share action which after returning dispatch actions to "saveQuestion and saveQuestionAnswers" to both questions and users.  Update reducers accordingly.

I really dislike option #2 here because of the duplication and adding of complexity.  (1.5x number of actions, 2x number of reducers affected)


Current feed on homepage and forms submits can be handle with react components themselves. No need for persisting these in store.

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
| id            | String | The question’s unique identifier |
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
