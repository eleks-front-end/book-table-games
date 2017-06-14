# Prerequisits

##### Set up WSO2

Copy `.env.sample` to `.env` paste here `REACT_APP_WSO2_CLIENT_ID` from your Service Providers config in WSO2

Copy `server/config/config.sample.json` to `server/config/config.json` paste here SCIMAPI.headers.Authorization you can get it from a curl request headers https://docs.wso2.com/display/IS510/SCIM+APIs

##### Install node modules:

`$ npm install`

##### Run SPA localy:

Run mongod

`$ mongod`

Create test DB

`$ npm run createDB`

Run webpack and server

`$ npm run start`

##### Build production:

`$ npm run build`

##### [Demo](https://book-table-games-domovoj1.c9users.io/)
