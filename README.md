# Bidding Software
## Description 
This software was designed for companies or people with a lot of one product they want to auction off. There is currently indivudual pages for the item being auctioned, that ask for information of the customer. This web app was created using an ec2 aws instance through ubuntu on apache2 web servers. 

## Instructions
1.) Log into your aws instanse
2.) Install apache2: sudo apt install apache2
3.) Download all of this code
4.) Log out of your aws instance onto your local machince
5.) Use _scp_ to transfer all of the html files from your local into ~/var/www/html in your aws instance
6.) Use _scp_ to transfer all of the css files into ~/var/www/html/css 
7.) Using same method as above put the images into ~/var/www/html/images
8.) Using same nethod put js files into ~/var/www/html/js
9.) Refresh your browser with the given link on aws and see the webapp

## Current State
Current this project still needs a lot of featured for future use. 
Currently being worked on/needing work:
* Email notification system
* Updating the number of bids on the main page
* The listings are held as their own html page, we would like to implement a database that stores each listing as a sort of object
