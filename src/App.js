
import './App.css';
import React, { Component } from 'react'
import  NavBar  from './component/NavBar';

import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App =()=> {
  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE

    return (
      <div>
        
         <BrowserRouter>
         <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/general" element={<News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News key="business" apiKey={apiKey} pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="ports" apiKey={apiKey} pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={6} country="in" category="technology"/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
 export default App



// import './App.css';
// import React, { Component } from 'react'
// import  NavBar  from './component/NavBar';

// import News from './component/News';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// export default class App extends Component {
//    apiKey = process.env.REACT_APP_NOT_SECRET_CODE
//   render() {
//     return (
//       <div>
        
//          <BrowserRouter>
//          <NavBar />
//         <Routes>
//           <Route path="/" element={<News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/>}></Route>
//           <Route path="/general" element={<News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/>}></Route>
//           <Route path="/business" element={<News key="business" apiKey={apiKey} pageSize={6} country="in" category="business"/>}></Route>
//           <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={6} country="in" category="entertainment"/>}></Route>
//           <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={6} country="in" category="health"/>}></Route>
//           <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={6} country="in" category="science"/>}></Route>
//           <Route exact path="/sports" element={<News key="ports" apiKey={apiKey} pageSize={6} country="in" category="sports"/>}></Route>
//           <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={6} country="in" category="technology"/>}></Route>
//         </Routes>
//       </BrowserRouter>
//       </div>
//     )
//   }
// }
