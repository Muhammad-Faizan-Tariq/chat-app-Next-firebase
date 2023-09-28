import React, { useEffect, useReducer, useRef } from 'react'
import ClickAwayListener from 'react-click-away-listener';

const MessageMenu = ({ showMenu, setShowMenu, self, deletePopupHandler }) => {

    const handleClickAway = () => {
        setShowMenu(false)
    };
    const ref =useRef()

    useEffect(()=>{
        ref?.current?.scrollIntoViewIfNeeded();
    }, [showMenu])

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div ref={ref}
            className={`w-[200px] absolute bg-c0 z-10 rounded-md overflow-hidden top-8
            ${self ? "right-0" : "left-0"}`}>
                <ul className='flex flex-col py-2'>
                    {self && <li className='flex items-center py-3 px-5
                        hover:bg-black cursor-pointer'>
                        Edit Message
                    </li>}
                    <li className='flex items-center py-3 px-5
                    hover:bg-black cursor-pointer'
                    onClick={(e)=>{
                        e.stopPropagation();
                        deletePopupHandler(true)
                        }}>
                        Delete Message
                    </li>
                </ul>
            </div>
        </ClickAwayListener>
    )
}

export default MessageMenu;