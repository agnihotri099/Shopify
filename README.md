# ShoppieShop-eCommerce-Website


<p align="center">
<img src="https://user-images.githubusercontent.com/83106116/178802206-951f8264-dfd7-4179-ad60-c4638b794ae4.png" alt="ShoopieShop"/>

<br/>
  <a href="https://shoppieshop.netlify.app//">View Deployed Website</a>
</p>

## Features and Interfaces

1. Register Page
   - Seamless registration page which asks for basic details of the user and registers new users using mail id and password which is encrypted!
    <img width="857" alt="register" src="https://user-images.githubusercontent.com/83106116/178805793-80ccfe92-4447-4870-8193-0986e1f5f86a.png">

    - When password and confirm password are not same or the email id already exist, it will display an error message.
    
     <img width="464" alt="differentPassword" src="https://user-images.githubusercontent.com/83106116/178804402-837c765d-dfdf-4615-aa87-fc6fb7961a84.png">  <img width="455" alt="mailexist" src="https://user-images.githubusercontent.com/83106116/178805226-f8529bb0-1a81-45ad-acc3-75a90183c79d.png">
     
2. Login Page
   - When the user already have an account and clicks the sign in button, he/she will be directed to the login page where the user needs to enter the registered email id.
    <img width="852" alt="login" src="https://user-images.githubusercontent.com/83106116/178806892-b181f84b-d663-44b7-a314-0b3c031fdc4d.png">
   
   - If the user enters an incorrect password or tries to login by entering an unregisterted email id, it will display an error message.
   - 
    <img width="474" alt="invalidemail" src="https://user-images.githubusercontent.com/83106116/178806294-de9168f6-f50e-4f06-8924-47f91bc26a37.png"> <img width="400" alt="invalidemail" src="https://user-images.githubusercontent.com/83106116/178807183-d6fa49aa-277c-4ce8-818c-e74196251084.png">
    
    - When the user enters valid email id and password, he/she will be allowed to add items to cart and buy them successfully. 

4. Home Page
   - As soon as the user login successfully, it will direct to the home page.
   - Here the user can view the items to buy and add them to cart.
    <img width="853" alt="home" src="https://user-images.githubusercontent.com/83106116/178802206-951f8264-dfd7-4179-ad60-c4638b794ae4.png">

   - The navbar has a filter by category option also. As soon as the user clicks the button the items will get filtered according to the value choosen.
    <img width="856" alt="filter" src="https://user-images.githubusercontent.com/83106116/178808617-b3735470-6ec4-435a-a0e2-9c0897a66cc0.png">

5. Product Page
   - As the user clicks the particular product, he/she is directed to that product which contains all the details of the product.
   - The user can add the products to the cart as well as remove the products from the cart. The cart can be viewed by clicking on the cart icon in the navbar.
   - The quantity can be increased or decreased and the total amount gets updated automatically as the products are removed or the quantity gets changed.
    <img width="856" alt="product" src="https://user-images.githubusercontent.com/83106116/178810189-811acd68-1d67-48ca-bb6a-59a80043c10a.png">

6. Cart Page
   - When the user adds the item to cart, he/she is directed to cart page containing all the items that user wish to buy.
    <img width="852" alt="cart" src="https://user-images.githubusercontent.com/83106116/178812219-03da7627-2501-476d-b17c-5c2c74259272.png">

  - Cart page contains the proceed to checkout button where user can proceed further to buy their items.
  - The user is then asked to enter the address and the payment he wish to use.
  <img width="455" alt="address" src="https://user-images.githubusercontent.com/83106116/178813159-2c03a5f5-e3c7-478c-942f-36e289ee1db2.png"> <img width="470" alt="paymentmethod" src="https://user-images.githubusercontent.com/83106116/178813235-e92f0889-85da-4231-912d-1917f0c37e6a.png">

6. Place Order
  - when the user selects the payment option and clicks continue, he/she is then directed to order page where the order can be placed.
  <img width="852" alt="placeorder" src="https://user-images.githubusercontent.com/83106116/178815330-287a7873-8f48-4c3d-bd5b-9a7380072476.png">
  
  - User can make payment using paypal by entering a valid paypal account details.
  <img width="852" alt="paypal" src="https://user-images.githubusercontent.com/83106116/178815490-1a034eb1-c8de-4d1a-b392-1f80727f0585.png">
  
  - As soon as the payment is done, payment details get updated.
  <img width="852" alt="order placed" src="https://user-images.githubusercontent.com/83106116/178815686-aa29695e-fce3-4642-a8c1-608b6f9a156a.png">
  
  - Now user can relax and wait for the item to be delivered.
  
7. Profile Page
  - The navbar has a dropdown on User's name from where user can click on profile button to update his/her profile.
  - User can also add image to look profile attractive.
  <img width="852" alt="profile" src="https://user-images.githubusercontent.com/83106116/178816312-16365d52-0275-4fcc-8ba8-4dfc1cf64279.png">
  
8. My Orders Page
  - The navbar has a dropdown on User's name from where user can click on my order button to view order details.
  - Here user can view his/her orders which are placed or pending to be placed.
  - This page contains all the details about the product and the payment done.
  <img width="852" alt="myorders" src="https://user-images.githubusercontent.com/83106116/178816772-47286e11-afa3-4d22-bb19-c30d9ffd5ba6.png">
  
9. Logout
   - The navbar has a dropdown on User's name from where user can click on logout button which directs the user back to the login page.

Also the website has a favicon icon to enhance its UI and increase its authenticity.
<img width="206" alt="faviconicon" src="https://user-images.githubusercontent.com/83106116/178817326-cb756042-cbb3-4aac-acb8-ece432d77c90.png">

## Tech stack

<p align="left">
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>
	<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express" width="40" height="40" /> </a>
	<a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /> </a>
  <a href="https://www.netlify.com/" target="_blank"> <img src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" alt="netlify" width="40" height="40"/> </a>
  <a href="https://reactjs.org/docs/getting-started.html" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="reactjs" width="40" height="40"/> </a>
	<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a>
	<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a>
<a href="https://bootswatch.com/" target="_blank"> <img src="https://camo.githubusercontent.com/51da0973891f15de1404fe9e17951136a420dafec4f9bbfa883e6283623c9317/68747470733a2f2f626f6f747377617463682e636f6d2f5f6173736574732f696d672f6c6f676f2d6461726b2e737667" alt="bootswatch" width="40" height="40"/> </a> 
<a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a>
<a href="https://mui.com/material-ui/getting-started/overview/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Logo_material_design.svg/512px-Logo_material_design.svg.png?20200304070251" alt="materialui" width="40" height="40"/> </a>
<a href="https://www.paypal.com/in/home" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png?20210313113929" alt="paypal" width="80" height="40"/> </a>
</p>

- Node.js
- Express
- MongoDB
- CSS3
- Git
- Heroku
- Netlify
- Figma
- Bootswatch
- Paypal

## Getting Started

## Required Environment Variables

VARIABLE | Sample value
---- | ---
JWT_KEY  | sample_key
NODE_ENV | sample_value
MONGO_URL  | mongodb://localhost/Shoppieshop
PORT | 8080
PAYPAL_CLIENT_ID | paypal_client_id


## Installation Instructions

1. Install *Node.js*
2. Install *npm*
3. If you plan to use a local instance of *MongoDB database*, install *MongoDB atlas*.
4. Clone this github repo `git clone https://github.com/Mitushi-23/ShoppieShop-eCommerce-Website.git`.
5. In the local project directory, create a new file called "`.env`".
6. Setup the environment variables as described above.
7. Open the local project directory in a terminal, and run: `npm install`.
8. Create a paypal account and then create the app to obtain `PAYPAL_CLIENT_ID`.

## To start the application locally

In the project directory, you can run:
---
### `npm run dev` To start frontend and backend simultaneusly.

Runs the front-end client app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs the back-end server app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser. Please note that the server requires an active instance of the **MongoDB database**. Either provide a *MongoDB atlas* link in the `MONGO_URL` environment variable, or use a local database, by placing its URI in the same.



## Need help?

Feel free to contact me on
[![Instagram](https://img.shields.io/badge/Instagram-follow-purple.svg?logo=instagram&logoColor=white)](https://www.instagram.com/mitushi_agrawal_/) [![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter&logoColor=white)](https://twitter.com/mitushi_agrawal) [![LinkedIn](https://img.shields.io/badge/LinkedIn-follow-green.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mitushi-agrawal-bb75b0210/)

---------
