import { useAuth } from '@/context/authContext'
import Avatar from './Avatars';
import Image from 'next/image';
import { useChatContext } from '@/context/chatContext';
import ImageViewer from "react-simple-image-viewer";

const Message = ({ message }) => {

  const { currentUser } = useAuth()
  const { users, data, imageViewer,  setImageViewer} = useChatContext();

  const self = message.sender === currentUser.uid;

  return (
    <div className={`mb-5 max-w-[75%] ${self ? "self-end" : ""}`}>
      <div className={`flex items-end gap-3 mb-1 ${self ? "justify-start flex-row-reverse" : ""}`}>
        <Avatar size="small" className="mb-4"
          user={self ? currentUser : users[data.user.uid]}
        />
        <div className={`group flex flex-col gap-4 p-4 rounded-3xl relative break-all
        ${ self ? "rounded-br-md bg-c5" : "rounded-bl-md bg-c1"}`}> 
        {message.text && (
          <div className='text-sm'>{message.text}</div>
        )}

        {message.img && (
          <>
          <Image src={message.img}
            width={250}
            height={250}
            alt={message?.text || ""}
            className="rounded-3xl max-w-[250px]"
            onClick={()=>{
              setImageViewer({ msgId: message.id, url: message.img })
            }}/>

            {imageViewer && imageViewer.msgId === message.id && (
              <ImageViewer
                src={[imageViewer.url]}
                currentIndex={0}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={()=>setImageViewer(null)}
              />
            )}
          </>
        )}
        </div>
      </div>
      <div>date</div>
    </div>
  )
}

export default Message