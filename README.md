
# Branch x Insurtech Groups Home Form D2C

This form allows a user to enter basic information about themselves and get a estimated pricing for thier home insurance. Auto insurance is also an option for the user. ITG makes a call to Branch's API endpoint with the data the user submited. Branch returns an estimated price & a link for the consumer to continue the bind process. 


## Branch API

#### POST all items

```http
  POST /branch
```
The `/branch` api route is hosted on Heroku with a Node.js/Express server. 



## Demo

Insert gif or link to demo


## Installation

Install with NPM

```bash
  npm install BranchD2C-Form-English
  cd BranchD2C-Form-English
```
    
## Deployment

To deploy this project run

```bash
  npm run dev
```


## Tech Stack

**Client:** React, TailwindCSS, Vite

**Server:** Node, Express

