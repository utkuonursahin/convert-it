# eXcurrency Project

## Project Description
I built this simple project for my portfolio. API that I used, provides real-time and historical exchange rates for up to 168 world currencies but I added only 40 of them because adding all of them would be a lot of work. Also it shows a chart for the exchanged currency's value parameter for last 5 days.
<img src="src\img\excurrency.png">

## Techniques That I Used To Build This Application
In this project I used SASS and tried to implement MVC Architecture with modern ES6 modules. For bundling I used Parcel version one because version two has some bugs. For fetching forecast data I used Currency Scoop API. Moreover I used **Netlify's serverless functions** for hiding my API keys in production so fetching data works a little bit different behind the scenes. Also I used Chart.js for displaying a chart about currency value. **I think using Chart.js is the most importing thing that I learned while developing this project.**

## Problems & Cons
I used Netlify's serverless functions for fetching data and hiding my API keys on the users' browser. Serverless functions hurt a little bit network performance approximately 0.3 - 0.5ms.

#### Author : Utku Onur Sahin
##### Date : 28.08.2021