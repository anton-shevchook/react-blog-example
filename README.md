This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Intro

The idea of project is simple. It's a Blog!
There are posts(articles) on the blog. You can `create`, `read`, `update`, `delete` posts, (CRUD in short).

Why we chose to go with Blog and Posts?

Well, because idea could be related to any other application. If you will think that posts are products, you have not a blog, but an online store or any other application. (You can relate your application to this one!!) All other actions are the same, `create`, `read`, `update`, `delete`. So this CRUD principle is base of most application on the web.

## Thinking about our Blog

So let's start of of something basic. Our Blog can have:
- 3 simple, static html pages, Home, About, Contact.
- *Header and Footer* are present on every page.
- *Post Archive page*, which will have list view of posts.
- *Single Post view*, that will be showing detailed info of the post.
- *Admin page*, where user can create, update, delete posts.
- *Login page*, where user would be able to login as admin.

And that's it.

## Thinking in depth

Let's give more thought about previously mentioned parts of the blog.
- All the pages should be done in react components.
- Navigation between pages, Header, Footer should be done using React Router library.
- As we don't use our database, we will be retrieving posts from fake API and rendering their list in Post Archive page.
- On the Single Post view we will be retrieving info only about one particular post, also from API.
- Our CRUD actions will be implemented by creating state, state management functions, filling state with posts fetched from API and propagating them down to components via props.
- Admin page will have it's own nested navigation, done with React Router.
- Login page will be using authentication mechanism.

## Chosing our tools

Each feature should be done with additional specific technology, library or function. Based on what we previously mentioned, lets define what we need to use:

- React Router, for page navigation, redirects.
- Javascript Fetch API, for retrieving data from API.
- React Hooks and props for state management.
- Authentication Mechanism for login into system.

## Project Phases

Having all that information, now we can divide our project into development phases. Each phase will be combination of Project Part we are creating and Technology(library) we are using for it.

### Phase #1: Page Components (technologies: React Components, React Router)

- Turning pages into components.
- Using React Router to navigate.
- Creating Header and Footer.

### Phase #2: List Post View, Single Post View (technologies: React Router Parameters)

- Creating List Post View and Single Post View
- Using Router parameters to navigate from List Post View to Single Post View.

### Phase #3: Creating State (technologies: Fetch API React Hooks, props)

- Fetching data into our application
- Creating  State.
- Propagating state data through props into lower components.
- Turning data into HTML elements, rendering data.

### Phase #4: Admin Page and it's subpages (technologies: React Router, Nested Routes, subnavigation)

- Creating Admin page.
- Creating Posts and Create Post subpages.
- Rendering posts data in admin table.

### Phase #5: Implementing CRUD operations (technologies: Javascript Array Methods, React Hooks)

- Implementing action delete.
- Implementing action create.
- Implementing action edit.

### Phase #7: Creating Login Page (technologies: React Router, Authentication Mechanism)

- Creating Login Page.
- Using React Router for Protected Routes.
- Implementing Authentication.
- Handling Login form.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
