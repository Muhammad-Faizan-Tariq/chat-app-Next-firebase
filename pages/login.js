import Link from 'next/link'
import ToastMessage from '@/components/ToastMessage';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { auth } from "@/firebase/firebase";
import { IoLogoGoogle, IoLogoFacebook} from "react-icons/io"
import { signInWithEmailAndPassword,
         GoogleAuthProvider,
         FacebookAuthProvider,
         signInWithPopup,
         sendPasswordResetEmail
        } from 'firebase/auth';
import Loader from '@/components/Loader';

const Login = () => {

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
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password)
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

    const resetPassword =  async () =>{
        try {
            toast.promise(async()=>{
                    await sendPasswordResetEmail(auth, email)
            },{
                pending: "Generating a reset link",
                success: "Reset email sent to your registered email id",
                error: "You may  have entered wrong email id!"
            },{
                autoClose: 5000
            })
        } catch (error) {
           console.error(error); 
        }
    }

  return isLoading || (!isLoading && currentUser) ? <Loader/> : (

    <div className='h-[100vh] flex justify-center items-center bg-c1'>
        <ToastMessage/>
        <div className='flex items-center flex-col'>
            
            {/* Heading Div*/}
            <div className='text-center'>
                <div className='text-4xl font-medium'>Login to Your Account</div>
                <div className='mt-3 text-c3'>Connect and Chat with your Nears & Dears</div>
            </div>

            {/* Login with account Div*/}
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
            <form
            className='flex flex-col items-center gap-3 w-[500px] mt-5'
            onSubmit={handleSubmit}
            >
                <input type='email' placeholder='Enter your email' autoComplete='off'
                className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3'
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input type='password' placeholder='Enter your password' autoComplete='off'
                className='w-full h-14 bg-c5 rounded-xl outline-none border-none px-5 text-c3'
                />
                <div className='text-right w-full text-c3'>
                    <span
                    className='cursor-pointer'
                    onClick={resetPassword}
                    >
                    Forgot Password?
                    </span>
                </div>
                <button className='mt-4 w-full h-14 rounded-xl outline-none text-base font-medium
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Login to Your Account</button>
            </form>

            {/* Register Now Div*/}
            <div className='flex justify-center gap-1 text-c3 mt-5'>
                <span>Not a member yet?</span>
                <Link href="/register"
                className='font-medium text-white underline underline-offset-2 cursor-pointer'
                >Register Now</Link>
            </div>

        </div>
    </div>
  );
}

export default Login