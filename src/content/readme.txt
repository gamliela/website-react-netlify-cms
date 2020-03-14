* model for content
* component for displaying content
* component for editing content
* github api. each piece of content is represented by github blob file.

-- data read:
- will read content data (posts) directly from public url, in markdown format.
- will read metadata from github rest api. no need in authentication for this.

-- data write:
- dependent on users->current_user to create login token for github
- the idea is that login page will generate login token, based on user&password, and that user will be used
  to modify data on github. we will probably need a github app and oauth for this.

----------------------
TOO COMPLICATED
- start with store items on google data cloud

----------------------
STORIES
- build a page for entering new content (NewPostPage)
- build a page for view existing content (ShowPostPage)
- build an express server that can:
    - save new content to google cloud data store (using alon@gamliela.com account)
    - query the latest content available
    = should we use bare express for this?
        = checkout https://raygun.com/blog/nodejs-vs-hapi-express-restify-koa/
        = do we want to share the framework with multiple shared_modules? how?
        = do we need cloud functions or real server?
            - if shared_modules are completely separated, we don't want a server for each one. too expensive.

- build a page for display list of content items (ShowPostsPage)
- add react router and connect all pages
- add new welcome page, that query the content
- allow to edit a content page
- allow to login/logout