# Bidding Software
## Description 
This software was designed for companies or people with a lot of one product they want to auction off. There is currently indivudual pages for the item being auctioned, that ask for information of the customer. This web app was created using an ec2 aws instance through ubuntu on apache2 web servers. 

GitHub: https://github.com/gpw03/CS3300-FinalProject.git

## Instructions
1.) Log into your aws instanse  <br>
2.) Install apache2: `sudo apt install apache2`  <br>
3.) Download all of this code  <br>
4.) Log out of your aws instance onto your local machince  <br>
5.) Use `scp` to transfer all of the html files from your local into _~/var/www/html_ in your aws instance  <br>
6.) Use `scp` to transfer all of the css files into _~/var/www/html/css_  <br>
7.) Using same method as above put the images into _~/var/www/html/images_  <br>
8.) Using same nethod put js files into _~/var/www/html/js_  <br>
9.) Refresh your browser with the given link on aws and see the webapp  <br>

## Current State
Current this project still needs a lot of featured for future use. 
Currently being worked on/needing work:
* Email notification system
* Updating the number of bids on the main page
* The listings are held as their own html page, we would like to implement a database that stores each listing as a sort of object
