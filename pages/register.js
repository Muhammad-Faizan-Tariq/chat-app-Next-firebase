import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/authContext';
import { IoLogoGoogle, IoLogoFacebook} from "react-icons/io"
import { auth, db } from "@/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    updateProfile
   } from 'firebase/auth';
import { useRouter } from 'next/router';
import { doc, setDoc } from 'firebase/firestore';
import { profileColors } from '@/utils/constants';
import Loader from '@/components/Loader';

const Register = () => {

    const { currentUser, isLoading } = useAuth();
    const [ email, setEmail ] = useState("")
    const router = useRouter();
    const gProvider = new GoogleAuthProvider();
    const fProvider = new FacebookAuthProvider();


    useEffect(() => {
        // if user is log-in
      if(!isLoading && currentUser){
        router.push("/");
      }
    }, [currentUser, isLoading])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const colorIndex= Math.floor(Math.random() * profileColors.length) ;
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName,
                email,
                color: profileColors[colorIndex]
            })
            await setDoc(doc(db, "userChats", user.uid), {})
            await updateProfile(user, {displayName})
            console.log(user);
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

    const signWithGoogle = async () => {
        try {
            await signInWithPopup(auth, gProvider)
        } catch (error) {
           console.error(error); 
        }
    }

    const signWithFacebook = async () => {
        try {
            await signInWithPopup(auth, fProvider)
        } catch (error) {
           console.error(); 
        }
    }

  return isLoading || (!isLoading && currentUser) ? <Loader/> :  (
    <div className='h-[100vh] flex justify-center items-center bg-c1'>
        <div className='flex items-center flex-col'>
            
            {/* Heading Div*/}
            <div className='text-center'>
                <div className='text-4xl font-medium'>Create New Account</div>
                <div className='mt-3 text-c3'>Connect and Chat with your Nears & Dears</div>
            </div>

            {/* Sign up with account Div*/}
            <div className='flex items-center gap-2 w-full mt-10 mb-5'>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]' onClick={signWithGoogle}>
                    <div className='flex items-center justify-center gap-3 text-white font-medium bg-c1 w-full h-full rounded-md'>
                        <IoLogoGoogle size={25}/>
                        <span>Login with Google</span>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-14 rounded-md cursor-pointer p-[1px]' onClick={signWithFacebook}>
                    <div className='flex items-center justify-center gap-3 text-white font-medium bg-c1 w-full h-full rounded-md'>
                        <IoLogoFacebook size={25}/>
                        <span>Login with Facebook</span>
                    </div>
                </div>
            </div>

            {/* OR Div*/}
            <div className='flex items-center gap-1'>
                <span className='w-5 h-[1px] bg-c3'></span>
                <span className='text-c3 font-semibold'>OR</span>
                <span className='w-5 h-[1px] bg-c3'></span>
            </div>
            
            {/* Input field Div*/}
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 w-[500px] mt-5'>
            <input type='text' placeholder='Enter your name' autoComplete='off'
                className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3'
                />
                <input type='email' placeholder='Enter your email' autoComplete='off'
                className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3'
                />
                <input type='password' placeholder='Enter your password' autoComplete='off'
                className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3'
                />
                <button className='mt-4 w-full h-14 rounded-xl outline-none text-base font-medium
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Sign Up</button>
            </form>

            {/* Register Now Div*/}
            <div className='flex justify-center gap-1 text-c3 mt-5'>
                <span>Already have an account?</span>
                <Link href="/login"
                className='font-medium text-white underline underline-offset-2 cursor-pointer'
                >Login</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Register