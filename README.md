[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/0wrsx4Jb)

## Trendr - Stay ahead of the news 


 ### Project Description: Trendr

This project is a news application that allows users to create an account and log in with a unique username and password. Users can then set and change their preferences for news categories and sources.
The news feed displays news summaries based on the user's preferences. Additionally, the application shows top tweets based on the user's news preference and top news headlines in the trending section irrespective of their preferences.
Users can like, comment, and share news articles and also save/bookmark articles for later reading. The application also allows users to search for news articles by keywords and categories and translate articles into other languages.
In terms of subscription management, users can enroll and manage their app subscription. Paid subscribers can be viewed by the admin.
The admin features include the ability to add news articles to the website, manage users, view analytics dashboard, and add other admins. Moderation features include the ability for moderators to delete comments and block users.
The analytics dashboard provides insights on website traffic and user behavior, which can be used to make data-driven decisions.
This news application provides a comprehensive news experience for users while offering powerful management tools for the admin.


 ### Project Milestones and User Stories

<table>
  <thead>
    <tr>
      <th>Milestone</th>
      <th>User Story</th>
      <th>Assigned To</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Milestone 1: User Authentication and Preferences</td>
      <td>As a user, I want to create an account and log in with a unique username and password.</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td>As a user, I want to be able to get and change my preferences for news categories and sources.</td>
      <td>Arpita</td>
    </tr>
    <tr>
      <td rowspan="5">Milestone 2: News Feed, Social Features, and Bookmarks</td>
      <td>As a user, I want to be able to see news summaries on the news feed.</td>
      <td>Kashyap</td>
    </tr>
     <tr>
      <td>As a user, I want to be able to see top tweets based on my news preference</td>
      <td>Anshul</td>
    </tr>
    <tr>
    <td> As a user, I want to be able to see top news headlines in trending section irrespective of my preferences</td>
    <td>Shubhi</td>
    </tr>
    <tr>
      <td>As a user, I want to be able to like, comment, and share news articles.</td>
      <td>Kashyap</td>
    </tr>
    <tr>
      <td>As a user, I want to be able to save/bookmark articles.</td>
      <td>Shubhi</td>
    </tr>
     <tr>
      <td>As a User, I want to be update my personal details and preferences.</td>
      <td>Arpita</td>
    </tr>
    <tr>
      <td rowspan="2">Milestone 3: Search</td>
      <td>As a user, I want to be able to search for news articles by keywords and categories.</td>
      <td>Kashyap</td>
    </tr>
    <tr>
      <td rowspan="2">Milestone 4: Subscription Management and Paid Subscribers</td>
      <td>As a user, I want to be able to enroll and manage my app subscription.</td>
      <td>Anshul</td>
    </tr>
        <tr>
      <td>As a user, i want to be able to buy a subscription and complete my transaction via payment Gateway</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td>As an admin, I want to be able to view paid subscribers.</td>
      <td>Arpita</td>
    </tr>
    <tr>
      <td rowspan="3">Milestone 5: Admin Features and User Management</td>
      <td>As an admin, I want to be able to add news articles to the website.</td>
      <td>Shubhi</td>
    </tr>
    <tr>
      <td>As an admin, I want to be able to manage Users</td>
      <td>Shubhi</td>
    </tr>
      <tr>
      <td>As an admin, I want to be able to manage News</td>
      <td>Shubhi</td>
    </tr>
        <tr>
      <td>As an admin, I want to be able to manage Subscription</td>
      <td>Arpita</td>
    </tr>
    <tr>
      <td>As an admin, I want to be able to manage Preferences.</td>
      <td>Arpita</td>
    </tr>
      <tr>
      <td>As a admin, I should to be able fetch news summaries using OpenAI GPT-3.5.</td>
      <td>Kashyap</td>
    </tr>
    
  </tbody>
</table>



 ### Object Model Diagram




![Trender drawio](https://user-images.githubusercontent.com/42668979/226991426-906ee09b-543e-4aa8-a84b-d838ccc3d5a2.png)


### External APIs

https://newsdata.io/  <br>
https://platform.openai.com/ <br>
https://stripe.com/docs/payments <br>
https://razorpay.com/docs/#home-payments

-------------------------------------------------

 ### Instructions to use the repo

- You can clone the repo by using HTTP: 

https://github.com/neu-mis-info-6150-spring-2023/final-project-group-web_weavers.git

OR set up the SSH Key using: 

git@github.com:neu-mis-info-6150-spring-2023/final-project-group-web_weavers.git

Commands to use: 

git clone `<use HTTP Link or SSH Link>`

#### To run Stripe Webhook throught Stripe CLI on local: stripe listen --forward-to localhost:4242/webhook 
-----------------------------------------------------
