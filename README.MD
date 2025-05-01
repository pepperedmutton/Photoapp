# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

The photo app The app shall allow users to upload photos, to search uploaded photos, to comment on photos


1. Authentication  

    1.1 The authentication shall allow the users to log in using email and password  
    1.2 The authentication shall allow users to sign up using email and password  
    1.3 The authentication shall bring user to homepage once log in is completed  
    1.4 user/pass will be stored in database, password will be salted and there will be a change password form

2. Homepage  

    2.1 The homepage shall have a search bar at the top  
    2.2 The homepage shall display thumbnail pictures as its body  
    2.3 The homepage shall provide an upload button which brings the user to upload screen  
    2.4 When a photo is clicked, it shall bring user to single photo view  
  
3. Upload  

    3.1 The upload screen shall allow users to upload photos from gallery(local storage)  
    3.2 The upload screen shall allow users to fill in metadata in a form  
    3.2.1 In case the photo is in JPEG, it should attempt to retrieve metadata first  
    3.2.2 Metadata (size, position, ...) can be extended through tags
    3.2.3 Tags will come from database and there will be 3 types (camera model, lens model and freeform) there will be a 1-N relation between photo and tags.
        the user can attach trough a autocomplete form from 0 to N tags to a photo.
        there will be a special "tag" named "public" that will enable the public view (without being logged) of this particular in the frontpage. 
        the carousel component will provide this view
        this "public" tag should be take into account by the search call.
        for this, we probably need a join table between photo and tag
    3.2.4 camera model & lens model will be preloaded with data from https://cameraversus.com/. a json file with data will be provided for seeding db
    3.3 It shall have a button to initiate the upload  
    3.4 When upload is done it shall present message that upload is successful  
    3.5 It shall allow users to abort upload at any stage  
    3.6 It shall provide a button for the user to go back to homepage
  
4. Search  

    4.1 The search screen shall display photos fitting the tags  
    4.2 The search screen shall have a button pointing to upload screen      
    4.3 The search screen shall have a button pointing to homepage  
  
5. Single view  

    5.1 It shall display selected photo in full screen  
    5.2 It shall allow users to post comment  
    5.3 It shall allow users to view comment  
    5.4 It shall allow users to view metadata  
    5.5 It shall allow users to view tags  
    5.5 It shall allow users to propose tag change or metadata change  
    5.6 It shall provide a button to go back to homepage  

6. Infrastructure

    6.1 Images will be stored in a render persistant storage and mounted under dist/storage. this is where image will be uploaded.
        during tests, it can be simulated with normal folder and File API calls.
    6.2 database will be postgres, and knex used for database abstraction layer


7. React Components  

    - Luigi:
        - Gallery (grid to display a user library)
        - Image (detail)
        - Upload (drag & drop & tagging)
        - Carrousel (will be used on frontpage, with pictures tagged as "public" in random order)
        - Toolbar (top level toolbar with 1 input: search & hardcoded shortcuts)

    - Frédéric
        - Login (user/password form)
        - TagsManagement (tags management)
        - Tags (tagging of an image)
        - Comments (display/edit comments timeline)


# Api categories
    - /api/gallery 
    - /api/image/
        - GET: get an image and all it's metadata (tags, ...)
    - /api/image/tag
        - DELETE: remove a tag from an image
        - PUT: add a new tag to an image
    - /api/upload
    - /api/search

    - /api/login
        - POST payload: {user, password}
        - provide JWT token in payload if success.
        - token will be send through a session cookie to authenticate all api calls
        - DELETE: logoff
        - PUT/GET: not supported

    - /api/signup
        - POST: {email, name, password (clear)}
            possible response: 
                - resultcode = 0: failure, and message will explain (like already registered)
                - resultcode = 1: creation ok

    - /api/tags: 
        - GET: "/:search_term" used by autocmplete. 
            - the group camera & lenses are provided for all users 
            - other tags (freeform) are filtered by logged i user
        - POST: 
            - add a tag to a user library
        - DELETE/PUT: not supported in MVP1

    - /api/comments
        - GET: "/:image_id" get a list of all comments, with those one editable by the current user (extrapolate from session cookie)
        - POST: "/:image_id" add a new comment
        - DELETE: "/:image_id" delete a post
        - PUT: "/:image_id" updat a post

# format of API return call ?
ex: POST response
{ 
    resultLessage: "success|failure" => MANDATORY
    resultCode: 1 (success) | 0 (failure) => MANDATORY
    data: json object in response => OPTIONAL
 }


## 