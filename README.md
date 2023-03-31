# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)



### Screenshot

![](./frontend-mentor-dashboard.png)


### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/timetracking-dashboard-using-react-and-vanilla-css-St7cFjvW9M)
- Live Site URL: [Github Pages](https://ms097530.github.io/Frontend-mentor-dashboard/)

## My process

First, I mapped out where I wanted data to reside in my components and how I wanted data to flow. While I'm not using live data, the data flow is intended to work as if I am fetching actual data (i.e. from Dashboard down to DashboardAvatar).

Second, I approached the layout using a mobile-first perspective. Much of the mobile layout makes use of the default styling, at least for the panels themselves. The inner parts of the panels did require a bit of CSS for more accurate styling. The desktop layout makes use of an outer grid to divie the longer avatar panel and the group of activity panels. The avatar group is then made into its own grid.


### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

This project helped me reinforce my overall structuring of my CSS as well as CSS in React. I think I was able to maintain a good seperation of global CSS in index.css (utility/baseline styling) and component specific styling.


## Author

- Website - [Michael Schultz](https://mschultz-portfolio.herokuapp.com/)
- Frontend Mentor - [@ms097530](https://www.frontendmentor.io/profile/ms097530)
