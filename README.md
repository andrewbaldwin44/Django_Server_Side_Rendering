## Django Server Side Rendering With React

https://medium.com/meural-product-development/setting-up-server-side-rendering-with-react-redux-and-django-4d6f4d2fd705

## Deploy the Project

**Clone the repo to your local machine using the terminal**:

```
$ git clone git@github.com:andrewbaldwin44/Django_Server_Side_Rendering.git
```

**Deploy the Back-End Development Server**:

1. Move into the composer directiory `cd composer`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment: `source venv/bin/activate`
4. Install the dependencies: `pip install -r requirements.txt`
5. Create a `.env` file with `DEBUG` set to `True` and generate a `SECRET_KEY`
6. Set up the database by running the migrations `python server/manage.py migrate metalfini`
7. Start the development server `python server/manage.py runserver`

**Deploy the Front-End Development Server**:

1. Move into the server directory `cd server`
2. Install the dependencies `yarn install`
3. Start the development server `yarn start`

This will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
