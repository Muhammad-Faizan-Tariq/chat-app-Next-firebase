import React from 'react'
import PopupWraper from './PopupWraper'
import { useChatContext } from '@/context/chatContext'
import { useAuth } from '@/context/authContext'
import { RiErrorWarningFill } from 'react-icons/ri'
import { DELETED_FOR_ME, DELETED_FOR_EVERYONE } from '@/utils/constants'



const DeleteMsgPopup = (props) => {

    const {currentUser} = useAuth();
    const {users, dispatch} = useChatContext();

  return (
    <PopupWraper {...props}>

        <div className='mt-10 mb-5'>
            <div className='flex items-center justify-center gap-3'>
                <RiErrorWarningFill size={24}
                className='text-red-500'/>
                <div className='text-lg'>Are you sure, you want to delete message?</div>
            </div>
            <div className='flex items-center justify-center gap-2 mt-10'>
                {props.self && <button onClick={()=>props.deleteMessage(DELETED_FOR_ME)}
                className='border-[2px] border-red-700 py-2 px-2 text-sm rounded-md
                text-red-500 hover:bg-red-700 hover:text-white'>Delete for me</button>}
                <button onClick={()=>props.deleteMessage(DELETED_FOR_EVERYONE)}
                className='border-[2px] border-red-700 py-2 px-2 text-sm rounded-md
                text-red-500 hover:bg-red-700 hover:text-white'>Delete for Everyone</button>
                <button onClick={props.onHide}
                className='border-[2px] border-white py-2 px-2 text-sm rounded-md
                text-white hover:bg-white hover:text-black'>Cancel</button>
            </div>
        </div>
    </PopupWraper>
  )
}

export default DeleteMsgPopup