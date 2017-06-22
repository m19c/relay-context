# relay-context

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

// create your relay environment
const environment = new Environment();

render(
  <Context environment={environment}>
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
