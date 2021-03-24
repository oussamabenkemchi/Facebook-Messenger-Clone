import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./firebase"
import Firebase from "firebase"
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';



function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username,setUsername] = useState("hhh")
  const [isUnknown,setValue]  = useState(false)

  useEffect(()=>{
     const user = prompt("Please, enter your name")
    console.log("user is  "+ user);
    if(user === null || user === ""){
      setUsername("Unknown User")
      setValue(true)
    }
    else{setUsername(user)}
  
  
  },[]) 
  
  useEffect(()=>{
      db.collection("messages").orderBy("timestamp","desc").onSnapshot(snapshot =>{
           setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})) 
      )})
  }, [])


  const handleOnChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };


  const sendMessage = (event) => {
    //all the logic to send a message
    /* setMessages(prevValue =>{
        return [...prevValue,input]
      }) */
    
    db.collection("messages").add({
      username:username,
      text:input,
      timestamp:Firebase.firestore.FieldValue.serverTimestamp(  )
    })  
    //setMessages([...messages, {username:username,text:input}]);
    setInput("");
    event.preventDefault();
  };

  return (
    <div className="App">
    <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>Facebook Messenger Clone </h1>
          <h2>Welcome {!isUnknown && username}</h2>
    <form className="App__form">
    <FormControl className="app__formControl" >
        <InputLabel>Enter a message</InputLabel>
        <Input className="app__input" placeholder="Enter a message ... " value={input} onChange={handleOnChange}  />

        <IconButton  disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage} >
        <SendIcon className="app__iconButton"/>
      </IconButton>
      </FormControl>
    </form>
      

      {/* messages */}
      <FlipMove> 
      {messages.map(({id,message}) => {
        return  <Message key={id} username={username} message={message}/>
      })}
      </FlipMove>

    </div> 
  );
}

export default App;
