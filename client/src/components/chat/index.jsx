import React from 'react';
import { useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced';
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";

const Chat = () => {
  const chatProps =useMultiChatLogic(

    "9b6feca7-429a-425f-8bee-dfd3e46a8231",
    "testuser",
    "1234"
  );
    

  return( 
  <div style={{flexBasis:"100%"}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow 
      {...chatProps}
      style={{height:"100vh"}}
      renderChatHeader={(chat)=> <Header chat={chat}/>}
      renderMessageForm={(props)=>{
        return(
          <StandardMessageForm props={props} activeChat={chatProps.chat}/>
        );
      }}
    />
  </div>
  );
};

export default Chat;
