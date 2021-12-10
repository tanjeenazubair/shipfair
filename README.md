<p align="center">
  <a href="" rel="noopener">
 <img src="https://static.wixstatic.com/media/e7f15c_2909344e0f57471ca9de10130ea1eb72~mv2.jpg/v1/fill/w_356,h_356,al_c,q_90/e7f15c_2909344e0f57471ca9de10130ea1eb72~mv2.webp" alt="Project logo"></a>
</p>
<h2 align="center">Shipfair</h2>


<div align="center">

  [![Hackathon](https://img.shields.io/badge/shipfair-name-orange.svg)](https://shipfair.vercel.app) 
  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

<p align="center"> ShipFair isn’t a shipping service. It’s a local delivery management software for small businesses with existing drivers. Track your delivery orders easily and get your product in the hands of customers, fast.
    <br> 
</p>

## 📝 Table of Contents
- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- Getting Start
- [Technology Stack](#tech_stack)
- Users Management with authentication
- Profile Handling



## 🧐 Problem Statement <a name = "problem_statement"></a>
Small parcel transportation can cost up to 4-5 times more in emerging markets than it does in 
developed markets for enterprises who import and manufacture textile and apparel goods. As a result, tens of 
thousands of small-scale companies rely on unofficial shipping networks to save money.
Another problem is the security and delay in their packages and luggage. 


## 💡 Idea / Solution <a name = "idea"></a>
 This website will provide the companies shipping facilities with high quality delivery with proper 
security and also will help to take and bring packages on time. Shippers and travelers can contact, it will save 
them from security hassles.
## 💡 Getting Start
Creating react app

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.


Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>

## Technology Stack
- HTML
- CSS/SCSS
- JavaScript
- React
- Firebase
- Node
- ChatEngine/Socket.io

## 👤 User Management System
- <h2>SignUp:</h2>
<p>In  ShipFair website, users can easily make their new accounts.They can make their profiles and can perform tasks as agent or shipper.They have to put username ,email, password for their accounts.After Signup they can login to their accounts.Their data will be successfully saved in database.Now they can have access to all the fields of the website.

- <h2>Login:</h2>
<p> Users can login to their accounts.They can login via google.This will save users time, they don't have to fill all the fields everytime.Their password will be highly confidential.They can access to all fields to the website.</p>

- <h2>Reset Password:</h2>
<p>User may forget their password.So, there is a feature that they can reset their password via google authentication easily and can have access to their accounts
From the ShipFair website an OTP link will be send to the user's provided email.</p>

## 👤 Profile Handling
After the user log in, he/she will redirect to their Dashboard. In left side panel the user will be entertained with a menu bar.

Menu bar contains the following:
- Home
- Trips
- Parcels
- Messages
- Profile

In the main panel ,the selected menu option will be opened.

## 🏠 Home

After opening the home option, users's posted packages and trips will appear. In the main panel, cthere will be complete information of the selected packages and trips.
The information will contain name, date and description of the package and trips.

## ✈️ Trips

After selecting the trips option, main panel will be adjust according to the it. All related information of selected trips will be filtered from user's data.User can see name, loctaion and scheduled data and time of his trips section.


## 📦 Parcels

After selecting the parcles option, main panel will be adjust according to the it. All related information of selected parcels will be filtered from user's data. User can see the name, loctaion and scheduled data and time in his parcels section.


## 💬 Messages

After selecting the messages option, main panel will be adjust according to the it. A complete and proper chatting section will be opened.The users can interact with the other users (shippers). The users can send messages to each other and can ask about the posted packages and trips.The users will be entertained with quick responses.

## 👤  Profile
In the profile option, the user can see his profile details. Users can see his credentials, all About details including bio, country and company information. user can edit and save his details at any time.
There is a section of additional details as well. Users can add any additional details which can help him in attracting more clients.

