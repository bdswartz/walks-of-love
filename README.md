# [Welcome to Walks of Love](https://hidden-lake-84375.herokuapp.com/)

#### The Walks of Love is a full-stack website that matches pet owners with freelance pet care specialists looking for new friends to care about.  It allows pet owners to post opportunities to care for their pets when they are unable to and allows potential pet caregivers to accept those oppotunities.

---

#### Collaborators:
* [Brian Swartz](https://github.com/bdswartz)

---

## Installation
N/A - 

---

## Usage
A user can navigate from the landing page to input a job buy logging in as a pet owner or the user can chose to login as a pet cagergiver and navigate to their dashboard where they can see jobs that have previously accepted or choose to move in .

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
I WANT a website where I can go to post pet care opportunities.
SO THAT as an owner, I can post opportunities for caregivers to take care on my pet when i am unable.  And as a caregiver I can offer my services by accepting posted opportunities to care for pets.
    
### Acceptance Criteria for Minimum Viable Product

GIVEN a pet care website:
*  When loading the app, open a high impact landing screen that tells the company story, and has an option to LOGIN/SignUp
When clicking on Login/Signup link on the homepage to takes you to a Login/Signup screen/modal that allows a user to login/signup with a username and password and chose whether you are a pet owner or walker
When login or signup complete, it take the owner/walker to their respective dashboard
When the owner dashboard opens, it displays all open orders for the owner and gives the owner a link to add an order, a link to see closed orders, and a link to manage pets.
When the owner clicks on the manage pets link, the owners pets and pet details are displayed and buttons to add or delete a pet are displayed.
When the owner clicks on an open order, the order is opened and the owner can edit or delete that order.
When the owner clicks on the see closed orders, a page is opened where the owner can see the past orders on their dashboard instead of open/future orders.
When the owner clicks on the “add order” button, the order form/page opens where they can fill out the details of an order.
When the walker dashboard opens, it displays all open orders for the walker and gives the walker a link to add (ie accept) a new order and a link to see completed orders.
When the walker clicks on the “see closed orders” link, a page is opened where the walker can see the past orders on their dashboard instead of open/future orders.
When the walker clicks on the “add new order” button, all available orders are displayed and a button is provided for each for the walker to accept a job.  When a walker accepts a job, he/she is taken back to their dashboard where that job is now included in the view.
When the walker clicks on an open order, the order details are opened so that the walker can complete the job and a field is provided to provide feedback to the owner on the order with a button for the walker to “complete” the order.
 
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