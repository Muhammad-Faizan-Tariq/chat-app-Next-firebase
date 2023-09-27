import Chat from '@/components/Chat';
import Chats from '@/components/Chats';
import LeftNav from '@/components/LeftNav';
import Loader from '@/components/Loader';
import { useAuth } from '@/context/authContext'
import { useChatContext } from '@/context/chatContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


const Home = () => {

  const { signOut, currentUser, isLoading } = useAuth();
  const router = useRouter();
  const { data } = useChatContext();

  useEffect(()=>{
    if(!isLoading && !currentUser){
      router.push("/login")
    }
  }, [currentUser, isLoading])

  return !currentUser ? <Loader/> : (
    <div className=' bg-c1 flex h-[100vh]'>
      <div className='flex w-full shrink-0'>

        <LeftNav/>

        <div className='flex bg-c2 grow'>
        <div className='w-[400px] p-5 overflow-auto scrollbar shrink-0 border-r border-white/[0.5]'>
          <div className='flex flex-col h-full'>
            <Chats/>
          </div>
        </div>
          {data.user && <Chat/>}
        </div>

      </div>
    </div>
  )
}

export default Home