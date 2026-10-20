# Namaste React

...
# Parcel
- dev build
- local server
- hmr = hot module replacement
- File watching algorithm - written in c++
- cashing - faster builds
- iamge optimization 
- minification 
- bundle 
- compress
- consistent hashing
- code spiliting 
- diffential bundling - support older browser
- daignostics 
- error handling 
- https
- tree shaking - remove unused code for you
- differnt dev and prod bundles


# namaste food 

/**
header
  logo
  navitems 
body
  search 
  resturant container
    resturant cards
      img
      name of item , star rtings , cuisines etc
footer
  copyright
  links
  address
  footer

*/

# react hooks
 (Normal JS utility funcitons )
 -useState() -- superpowerfil react variables
 -useEffect()
 -useParms()
 -useContext()   --- createContext() --- useContext(passthe created context ) -- to provide it in all the pages use provider() for class based - use consumer | bind it woth use state to maintian its state and can also send funtion in the provider to setsatte funtion

# Routing 
  - 2types of rounting in web apps
    -client side routing
    -server side routing


# Redux toolkit
  - install @eduxjs/toolkit and react-redux
  - build our store - configureStore()
  - create (cartSlice) - createSlice()
  - connect our store to our app - <Provider store = {appStore}>
  - dispacth action - 
  - selctor - const cartItems = useSelector((store)=> store.cart.items);