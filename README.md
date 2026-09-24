# HcTrips

A campsite directory built with React and Redux Toolkit — feature-sliced state, async thunks against a REST backend, validated forms and animated list rendering.

Built in 2023 during the Nucamp full stack bootcamp. Kept here because the state architecture is the part worth showing: it is organised by feature rather than by file type, which is the structure I would still reach for today.

---

## What it is

Browse campsites, read and post comments, view partners and promotions, log in, and send a contact form.

```
src/
├── app/
│   ├── store.js              Redux store configuration
│   └── shared/baseUrl.js     single place the API base lives
├── features/                 state and UI colocated per feature
│   ├── campsites/            list, card, detail, slice
│   ├── comments/             list, item, form, slice
│   ├── partners/             list, item, slice
│   ├── promotions/           slice
│   └── user/                 login form, slice
└── components/               Header, Footer, SubHeader, Loading, Error, ContactForm
```

---

## What I built

**Feature-sliced state.** Each feature owns its slice, its selectors and its components in one directory. Adding a feature means adding a folder, not touching five shared files scattered across the tree. The alternative — `components/`, `reducers/`, `actions/` — spreads one concern across the whole project and is the structure that makes large React codebases painful.

**Async thunks with real loading states.** `createAsyncThunk` handles fetching, and each slice tracks `isLoading` and `errMess` separately. The UI renders a spinner, an error, or data — never a blank component that silently fails. A fetch that can only succeed is a fetch you have not finished writing.

**Form validation with Formik.** The contact form and the comment form validate on blur and on submit with field-level messages, rather than letting the browser's default validation decide what the user sees.

**Animated list rendering** with `react-spring`, so lists fade and stagger in rather than appearing all at once.

**Routing** with React Router, including a parameterised campsite detail route and a not-found route.

---

## Running it

```bash
npm install
npm start
```

The API base URL lives in `src/app/shared/baseUrl.js` and expects the bootcamp's JSON server backend. Without it running, the app renders its loading and error states — which, given the point above, is at least the behaviour it was designed for.

---

## What I would do differently now

**Untrack `node_modules`.** This repository committed its dependencies before `.gitignore` was added, and they were never removed from tracking — nearly 50,000 files. I have removed them from tracking, though the history still carries them, which is why a clone of this repository is far larger than the code in it. The lesson stuck: check `git status` before the first commit, not after the fortieth.

**Delete the template boilerplate.** `features/counter/` is the Create React App Redux template's example and has nothing to do with campsites. Leaving generated scaffolding in a project makes a reader work out which parts are mine — I would remove it on day one now.

**Handle the API base properly.** A hardcoded `baseUrl.js` should be an environment variable, so the same build can point at local, staging and production without a code change.

**Write tests.** There are none, beyond the template's `counterSlice.spec.js`. The slices are reducers — pure functions from state and action to new state — and they are the easiest thing in the entire codebase to test. In [netwatch](https://github.com/Autokratz/netwatch) I wrote 118 tests at 96% branch coverage around logic of exactly that kind.

**Type the API responses.** Every `action.payload` here is untyped, so a backend field rename fails silently in a component rather than loudly at the boundary.

---

MIT · built by [Hector Cabra](https://autokratz.github.io)
