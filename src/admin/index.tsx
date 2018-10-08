import 'netlify-cms';
import * as netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init({
  container: "body"
});

window['netlifyIdentity'] = netlifyIdentity;  // netlify cms expect this global
