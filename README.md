# relay-context
Relay's original `QueryRenderer` requires an environment to determine the graphql endpoint to talk with. Mostly you will do something like this:

A) pass down through props
B) store in the window to access it later on
C) store it in a registry object to access it later on

This is where `relay-context` comes into play. It provides a high-order component to register your environment(s) at one place (see Example > Main entry point). It is also possible to specify a default environment for your `QueryRenderer`.

## Install
### yarn
```
yarn add relay-context
```

### npm
```
npm i --save relay-context
```

## Example
### Main entry point
```javascript
import { Context } from 'relay-context';
import { render } from 'react-dom';
import App from './components/App';

// create your relay environment(s)
const environmentA = new Environment();
const environmentB = new Environment();

render(
  <Context environmentRegistry={{ a: environmentA, b: environmentB }} defaultEnvironment="a">
    <App />
  </Context>
)
```

### Somewhere in your application (e.g. `Beer.js`)
```javascript
import React from 'react';
import { QueryRenderer } from 'relay-context'
import { graphql } from 'react-relay';

export default ({ slug }) => <QueryRenderer
  variables={{ slug }}
  environment="b" // uses b
  query={graphql`
    query BeerQuery(
      $slug: String!
    ) {
      query {
        beer: beerBySlug(slug: $slug) {
          title
          slug
          rating
          related(limit: 10) {
            title
            slug
            rating
          }
        }
      }
    }
  `}
  render={({ error, props }) => {
    // TODO: render stuff
  }}
/>;
```
