# Developer's Guide for Implementation

## Sketch the mockup

## Prepare Resources
* Images, Logo, Favicon, Icons, Fonts

## Application Structure and Styling
* HTML (layout)
* Styling (css)

## Project Setup
* Initialize project

## /api
* api.js
* data.js


## Database Setup in Back4App
* Create Back4App App
* View documentation on Users
* Adjust api.js to include AppID, APIKey, correct headers, register, login, logout routesand body
* Test register, login, logout
* Create CRUD functions for Item collection
* Test Item collection, confirm public READ / WRITE
* View documentation on security, ACL, CLP
* Configure public read, authenticated write, no add field CLP
* Test read / write
* Configure owner Pointer
* Adjust data.js to include owner pointer on create { __type: 'Pointer', 'className': '_User', }
* Test owner protection
* Add query to include owner on GET
* Create Like collection, configure CLP, owner pointer, item Pointer
* Create CRUD funcrions for Like collection, with owner protection
* Test Like collection
* Proceed with implementation of views

### Data Structure
    * Sessions (generic) <-|-> "sessionStorage"
* Users (generic)
```javascript
{
    objectId,
    username: String,
    email: String,
    password: String,
    itemsCreated: Pointer<Item>,
    countItemsCreated: Number,
    itemsLiked: Number
}
```
* Items 
```javascript
{
    objectId,
    title: String,
    author: Pointer<User>,
    category: String,
    imageUrl: String,
    width: Number,
    height: Number,
    materials: Array<String>,
    likes: Number //default = 0
}
```
* Likes
```javascript
{
    objectId,
    likedItem: Pointer<Item>,
    likesCount: Number
}
```

<!-- 
Pointer { 
    __type: 'Pointer', 
    'className': '_User',
    objectId: userId
} 
-->

### Access Controls
* **Guest**: register; view Gallery, Item Details and Author's Profiles; like Items
* **User**: login, logout; create | edit | delete own Item; update own Profile
* **Admin**: login,logout; update Gallery, update Author's List

## Deployment in GitHub Pages

## Screen Implementation Order
### Authentication:
* Login, Register Screens, Logout Action 
### Editor Functionalities:
* Create
* Edit, Delete
* Admin Panel - Categories, Statistics
### Common Access Screens:
* Welcome Screen
* Gallery Browser
* Masterpiece's Details
* Profile Screen
### Admin Panel:
* Filter by Author
* Remove Author's Collection from Gallery
* Anounce Events

## Finishing Touches