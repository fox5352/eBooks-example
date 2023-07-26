# EBooks Example site 

This is an e-commerce website example

it uses environment variables to connect to the back-end

```
    REACT_APP_URL
```
## Data 

The data should be returned as an array of objects

the cards uses objects
```
    {
      id: Number,
      title: String,
      detail: String,
      rating: Number,
      price: Number,
      best_seller: Boolean,
      in_stock: Boolean
    }
```
I plan on adding url into the object for the card images

## Login/Register

The Login/Register response expects a id and token and stores it in the user global state and browsers session storage.
I plan to add toasts for error handing in the Login/Register page

----

Deployed version on [netlify](http://example.com/ "link to the deployed site")

[![Netlify Status](https://api.netlify.com/api/v1/badges/92cf1095-4ec3-4e82-8b97-59205ce047c5/deploy-status)](https://app.netlify.com/sites/ebooks-example/deploys)