import React, { useRef, useState } from 'react';
import {firebase} from "../libraries/firebase"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import "../stylesheets/Chat.scss";
import { NavigationBar } from '../components/NavigationBar';



import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();


const Chat = () => {
    const [user] = useAuthState(auth);

    return (
        <>
        <div className="dashboard_greeting_container">
    <NavigationBar />
  </div>
        <div className="Chat">
          <header className='chat_header'>
            <h1 className='chat_heading'>Shipfair Chat</h1>
            <SignOut />
          </header>
    
          <section>
            {user ? <ChatRoom /> : <SignIn />}
          </section>
    
        </div>
        </>
      );
    }
    
    function SignIn() {
    
      const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
        <>
          <button className="chat_button" onClick={signInWithGoogle}>Sign in with Google</button>
          <p className="chat_desc">Do not violate the community guidelines or you will be banned for life!</p>
        </>
      )
    
    }
    
    function SignOut() {
      return false && (
        <button className="button" onClick={() => auth.signOut()}>Sign Out</button>
        
      )
    }
    
    
    function ChatRoom() {
      const dummy = useRef();
      const messagesRef = firestore.collection('messages');
      const query = messagesRef.orderBy('createdAt').limit(25);
    
      const [messages] = useCollectionData(query, { idField: 'id' });
    
      const [formValue, setFormValue] = useState('');
    
    
      const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
        })
    
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
    
      return (<>
        <main >
    
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    
          <span ref={dummy}></span>
    
        
    
        </main>
        <form className='chat_form' onSubmit={sendMessage}>
    
          <input className="chat_input" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
    
          <button className='chat_button' type="submit" disabled={!formValue}>‍🚀</button>
    
        </form>
      </>)
    }
    
    
    function ChatMessage(props) {
      const { text, uid, photoURL } = props.message;
    
      const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    
      return (<>
        <div className={`message ${messageClass}`}>
          <img className='chat_img' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
          <p className='chat_desc'>{text}</p>
        </div>
      </>)
    }

export default Chat
