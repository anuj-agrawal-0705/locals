# Locals 
[Live API link](https://locals-324107.el.r.appspot.com/)

This a Backend for the Locals platform, Locals is an online platform for small and local businesses, to keep track of their credits and debts with their customers.

## 1: Installation
1. npm i
2. create a Mongodb URI
3. copy the variables from .env_vars file in a .env and fill it with required info
4. npm run start

## 2: Technologies Used:
1. Node.js
2. MongoDB for database
3. GCP APP Engine for deployment
4. GCP triggers for CI/CD job

## 3: Architecture Design
![Project Architecture](https://user-images.githubusercontent.com/55762439/131563116-7a6f1a27-9d31-412b-ad84-5b87283abb29.png)
1. **db** contains database connection code
2. We have divided it into layers: 
  Data Access Layer --- Service Layer --- Routes 
      - index.js [top layer]
      - Models [Here database structure and different Models are defined]
      - Controller [This is the setvice layer here all the business logic is defined]
      - Routes [Connecing all the endpoints with business logic]
3. **Utils** contains thirdparty services that we are using like Json Web Token
4. **.env** file contains all the environment variables and **app.yaml** contains runtime requirement for gcp deployment


      
     
      



