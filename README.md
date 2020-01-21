# js-band-final-task

**Ciklum University: JS Band Internship. Final task**

The application allows user to purchase books in the online book store. To make
transaction, a user has to sign in the store. There is an ability to look
through the books available and to check details about them. A user can add
books into his cart, to see his order list via 'Cart' button and make a purchase
of chosen books via 'Purchase' button.

Check the demo via link: https://romanbezpalyi.github.io/js-band-final-task/.

## Launching

To launch the project, follow next steps:

1. Clone the repository into chosen directory:

```bash
git clone https://github.com/RomanBezpalyi/js-band-final-task.git
```

2. Change directory to project's directory:

```bash
cd js-band-final-task
```

3. Install all the dependencies required:

```bash
npm i
```

4. Run project:

```bash
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (Webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Project Structure

```bash
├── assets
│   ├── icons
│   │   └── shopping-cart.svg
│   └── images
│       └── JS_BAND_STORE.png
├── components
│   ├── App
│   │   │── App.jsx
│   │   └── index.js
│   ├── BackButton
│   │   │── BackButton.jsx
│   │   └── index.js
│   ├── BookDashboard
│   │   │── BookDashboard.jsx
│   │   │── BookDashboardContainer.js
│   │   └── index.js
│   ├── BookDescription
│   │   │── BookDescription.jsx
│   │   │── BookDescriptionContainer.js
│   │   └── index.js
│   ├── BookList
│   │   │── BookList.jsx
│   │   │── BookListContainer.js
│   │   └── index.js
│   ├── BookListItem
│   │   │── BookListItem.jsx
│   │   └── index.js
│   ├── CartDashboard
│   │   │── CartDashboard.jsx
│   │   │── CartDashboardContainer.js
│   │   └── index.js
│   ├── CartForm
│   │   │── CartForm.jsx
│   │   │── CartFormContainer.js
│   │   └── index.js
│   ├── CartTable
│   │   │── CartTable.jsx
│   │   └── index.js
│   ├── FilterForm
│   │   │── FilterForm.jsx
│   │   │── FilterFormContainer.jsx
│   │   └── index.js
│   ├── Header
│   │   │── Header.jsx
│   │   │── HeaderContainer.jsx
│   │   └── index.js
│   ├── HOC
│   │   ├── AuthRedirect
│   │   │   │── AuthRedirect.jsx
│   │   │   └── index.js
│   │   └── ProtectedComponent
│   │       │── index.js
│   │       └── ProtectedComponent.jsx
│   ├── LoaderSpinner
│   │   │── index.js
│   │   └── LoaderSpinner.jsx
│   ├── LogOutModal
│   │   │── index.js
│   │   │── LogOutModal.jsx
│   │   └── LogOutModalContainer.js
│   ├── Root
│   │   ├── index.js
│   │   └── Root.jsx
│   └── SigninForm
│       │── index.js
│       │── SigninForm.jsx
│       └── SigninFormContainer.js
├── configs
│   └── index.js
├── constants
│   └── priceSelectorOptions.js
├── helpers
│   └── filterBooks.js
├── pages
│   ├── BookPage.jsx
│   ├── BooksPage.jsx
│   ├── CartPage.jsx
│   ├── NotFoundPage.jsx
│   └── SigninPage.jsx
├── redux
│   ├── books
│   │   │── actions.js
│   │   │── operations.js
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── cartList
│   │   │── actions.js
│   │   │── operations.js
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── controllers
│   │   │── actions.js
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── errors
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── filters
│   │   │── actions.js
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── loadings
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── selectedBook
│   │   │── actions.js
│   │   │── operations.js
│   │   │── reducer.js
│   │   └── selectors.js
│   ├── session
│   │   │── actions.js
│   │   │── operations.js
│   │   │── reducer.js
│   │   └── selectors.js
│   └── store.js
├── services
│   ├── books-api.js
│   └── session-api.js
├── styles
│   ├── base
│   │   └── normalize.scss
│   ├── components
│   │   ├── base-btn
│   │   │   └── base-btn.scss
│   │   ├── book-list
│   │   │   └── book-list.scss
│   │   ├── book-page
│   │   │   └── book-page.scss
│   │   ├── cart-form
│   │   │   └── cart-form.scss
│   │   ├── cart-page
│   │   │   └── cart-page.scss
│   │   ├── common
│   │   │   └── common.scss
│   │   ├── filter-form
│   │   │   └── filter-form.scss
│   │   ├── header
│   │   │   └── header.scss
│   │   ├── list-item
│   │   │   └── list-item.scss
│   │   ├── modal
│   │   │   └── modal.scss
│   │   └── signin-page
│   │       └── signin-page.scss
│   └── main.scss
└── index.js
```
