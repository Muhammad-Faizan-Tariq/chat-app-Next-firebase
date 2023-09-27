import { useEffect, useRef, useState} from 'react'
import { onSnapshot, doc, } from 'firebase/firestore';
import { useChatContext } from '@/context/chatContext';
import { db } from '@/firebase/firebase';
import Message from './Message';

const Messages = () => {

    const [messages, setMessages] = useState([]);
    const { data } = useChatContext();
    const ref = useRef();

    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "chats", data.chatId),
        (doc)=>{
            if(doc.exists()){
                setMessages(doc.data().messages);
            }
        });
        return ()=> unsub();
    }, [data.chatId])

  return (
    <div ref={ref} className='grow p-5 overflow-auto scrollbar flex flex-col'>
        {messages.map((m)=>{
          return <Message message={m} key={m.id}/>
        })}
    </div>
  )
}

export default Messages