import { useEffect, useRef, useState} from 'react'
import { onSnapshot, doc, } from 'firebase/firestore';
import { useChatContext } from '@/context/chatContext';
import { db } from '@/firebase/firebase';
import Message from './Message';
import { DELETED_FOR_ME } from '@/utils/constants';
import { useAuth } from '@/context/authContext';

const Messages = () => {

    const [messages, setMessages] = useState([]);
    const { data, setIsTyping } = useChatContext();
    const { currentUser } = useAuth();
    const ref = useRef();

    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "chats", data.chatId),
        (doc)=>{
            if(doc.exists()){
                setMessages(doc.data().messages);
                setIsTyping(doc.data()?.typing?.[data.user.uid] || false)
            }
            setTimeout(()=>{
              scrollToBottom()
            }, 0)
        });
        return ()=> unsub();
    }, [data.chatId]);

    const scrollToBottom = () => {
      const chatContainer = ref.current;
      chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;
    };


  return (
    <div ref={ref} className='grow p-5 overflow-auto scrollbar flex flex-col'>
        {messages
        ?.filter((m)=>{
          return (
            m?.deletedInfo?.[currentUser.uid] !==
            DELETED_FOR_ME &&
            !m?.deletedInfo?.deteledForEveryone &&
            !m?.deleteChatInfo?.[currentUser.uid]
          )
        })
        ?.map((m)=>{
          return <Message message={m} key={m.id}/>
        })}
    </div>
  )
}

export default Messages