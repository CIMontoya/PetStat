# PetStat

#### A household with multiple people and pets can be a bit disorganized. This app was created to facilitate the care of pets by allowing the pet owners to see their pet's status.

## Entity Relationship Diagram
![Entity Relationship Diagram](erd.png)

## Server Routes
1. Get request to access all the data of a household specified by the user
    ('/:household')
2. Post request to add a user to the user table
    ('/user')
3. Post request to add a pet to the pets table
    ('/pet')
4. Post request to add an activity to the activity table
    ('/activity')
5. Update request in case of owner info change
    ('/userData/:id')
6. Update request in case of pet info change
    ('/petData/:id')
7. Update request in case of household info change
    ('/houseData/:id')
8. Delete request for caretakers not being further available
    ('/user/:id')
9. Delete request for pets that are no longer in the household
    ('/pet/:id')
10. Delete request for activities that are no longer required
    ('activity/:id')

## Technologies
<img src="https://cdn.filestackcontent.com/NLhmEQbVQUWSrfIFaXPh" width="40%">
<img src="https://expressjs.com/images/express-facebook-share.png =250x250" width="40%">
<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" width="40%">
<img src="https://i1.wp.com/wptavern.com/wp-content/uploads/2016/10/graphql.png?ssl=1" width="40%">
<img src="https://knexjs.org/assets/images/knex.png" width="40%">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/791px-CSS3_and_HTML5_logos_and_wordmarks.svg.png" width="40%">
<img src="http://2ality.com/2011/10/logo-js/js.jpg" width="40%">
<img src="https://www.twilio.com/marketing/bundles/company-brand/img/logos/red/twilio-logo-red.png" width="40%">

##User Stories
1. As a user, I would like to create a house so I can contain all the pets and caretaker info

2. As a user, I would like to add caretakers to the house so they can update the pet's needs

3. As a user, I would like to add pets to the house so I know what pets live in the house

4. As a user, I would like to add activities for each individual pet so that each pet gets it's own personal care

5. As a user, I would like to remove pets, caretakers, households, or activities when they are no longer required

6. As a user, I would like to edit pet, caretaker, household, or activity information in case a change has been made

7. As a user, I would like to receive a notification when an activity need to be completed so that I am reminded to do the activity

8. As a user, I would like to see a household and everything pertaining to it so I can see how my pets are doing and when the next activity will take place

9. As a user, I would like to sign up or log in so I have a personalized experience in the app

10. As a user, I would like to log out so my data is safe if I lose my phone

## Mock Up
[Adobe XD](https://xd.adobe.com/view/24a0eda8-c5c7-4ea6-7540-bebbe1860c0b-5291/)

## Trello Board
[Trello](https://trello.com/b/6uBnQbyQ/petstat)
