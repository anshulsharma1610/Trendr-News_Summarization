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
      <td>Arpita</td>
    </tr>
    <tr>
    <td>As a user, I want to be able to see top news headlines in trending section irrespective of my preferences</td>
    <td>Shubhi</td>
    </tr>
    <tr>
      <td>As a user, I want to be able to like, comment, and share news articles.</td>
      <td>Shubhi</td>
    </tr>
    <tr>
      <td>As a user, I want to be able to save/bookmark articles.</td>
      <td>Arpita</td>
    </tr>
    <tr>
      <td rowspan="2">Milestone 3: Search and Translation</td>
      <td>As a user, I want to be able to search for news articles by keywords and categories.</td>
      <td>Kashyap</td>
    </tr>
    <tr>
      <td>As a user, I want to be able to translate articles into other languages.</td>
      <td>Kashyap</td>
    </tr>
    <tr>
      <td rowspan="2">Milestone 4: Subscription Management and Paid Subscribers</td>
      <td>As a user, I want to be able to enroll and manage my app subscription.</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td>As an admin, I want to be able to view paid subscribers.</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td rowspan="3">Milestone 5: Admin Features and User Management</td>
      <td>As an admin, I want to be able to add news articles to the website.</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td>As an admin, I want to be able to manage users and view analytics dashboard.</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td>As a super admin, I want to be able to add other admins.</td>
      <td>Anshul</td>
    </tr>
    <tr>
      <td rowspan="2">Milestone 6: Moderation and Analytics Dashboard</td>
      <td>As a moderator, I want to be able to delete comments and block users.</td>
      <td>Arpita</td>
    </tr>
    <tr>
      <td>As an admin, I want to be able to view an analytics dashboard to track website traffic and user behavior.</td>
      <td>Arpita</td>
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
