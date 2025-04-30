# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

The photo app The app shall allow users to upload photos, to search uploaded photos, to comment on photos

1.Authentication  
1.1 The authentication shall allow the users to log in using email and password  
1.2 The authentication shall allow users to sign up using email and password  
1.3 The authentication shall bring user to homepage once log in is completed  
1.4 When a photo is clicked, it shall bring user to single photo view  

2 Homepage  
2.1 The homepage shall have a search bar at the top  
2.2 The homepage shall display thumbnail pictures as its body  
2.3 The homepage shall provide an upload button which brings the user to upload screen  

3 Upload  
3.1 The upload screen shall allow users to upload photos from gallery(local storage)  
3.2 The uoload screen shall allow users to fill in metadata in a form  
3.2.1 In case the photo is in JPEG, it should attempt to retrieve metadata first  
3.3 The uploaded photo shall be stored and searchable  
3.4 It shall have a button to initiate the upload  
3.5 When upload is done it shall present message that upload is successful  
3.6 It shall allow users to abort upload at any stage  
3.7 It shall provide a button for the user to go back to homepage  
  
4 Search  
4.1 The search screen shall display photos fitting the tags  
4.2 The search screen shall have a button pointing to upload screen  
4.3 The search screen shall have a button pointing to homepage  
  
5.Single view  
5.1 It shall display selected photo in full screen  
5.2 It shall allow users to post comment  
5.3 It shall allow users to view comment  
5.4 It shall allow users to view metadata  
5.5 It shall allow users to view tags  
5.5 It shall allow users to propose tag change or metadata change  
5.6 It shall provide a button to go back to homepage  
