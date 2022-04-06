# [Welcome to The Tech Blog](https://hidden-lake-84375.herokuapp.com/)

#### The Tech Blog a full-stack CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. It allows tech enthusiasts to post topic of interest and allow others to view and comment on those posts.

---

#### Collaborators:
* [Brian Swartz](https://github.com/bdswartz)

---

## Installation
N/A - 

---

## Usage
A user can browse posts to the site without creating an account but will need to create an account and be logged into the site in order to create new posts or comment on existing ones.

---

## Technologies

> <b>Development Tools:</b>
  * node.js
    * [Sequelize package](https://www.npmjs.com/package/sequelize)
    * [mySQL2 package](https://www.npmjs.com/package/mysql2)
    * [dotenv package](https://www.npmjs.com/package/dotenv)
    * [express handlebars](https://www.npmjs.com/package/express-handlebars)
    * [express-session](https://www.npmjs.com/package/express-session)
    * [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  * JavaScript
  * SQL

  ---

## User Story
### AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
    
### Acceptance Criteria for Minimum Viable Product

GIVEN a CMS-style blog site
*  WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
*  WHEN I click on the homepage option
    THEN I am taken to the homepage
*  WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
*  WHEN I choose to sign up
    THEN I am prompted to create a username and password
*  WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
*  WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
*  WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard, and the option to log out
*  WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
*  WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
*  WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
*  WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
*  WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
*  WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
*  WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard
*  WHEN I click on the logout option in the navigation
    THEN I am signed out of the site
*  WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
    
---

## Features
-  Utilizes sequelize for ORM to aid in creating and querying the database.
-  Uses express as the server.
-  The site maintains a database of users and requires login so that other users can see who created a post or comment.

![Top of Landing Page](./landing-ss.jpg)

![Post and Comment Page](./post-comment-ss.jpg)

---

## Questions
Please visit my GitHub page
at https://github.com/bdswartz

If there are any questions about the project,
feel free to open an issue or contact me at briandswartz@outlook.com