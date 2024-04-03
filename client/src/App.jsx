import { useState } from "react" ;
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Chat from "@/components/chat";


//here this function redirects to the prop or state called the chat 

function App() {
  

  return (
    <>
      <div className='app'>
       <BrowserRouter>
         <Routes> 
          <Route path="/chat" element={<Chat/>}/>  
         </Routes>
       </BrowserRouter>
       </div>
    </>
  );
}

export default App;
