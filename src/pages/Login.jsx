import React, { useEffect, useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useAuth } from '../context/AuthProvider';

import { useForm } from "react-hook-form";
import { FaGithub } from 'react-icons/fa6';
import swal from 'sweetalert';
import useAxiosPublic from '../hooks/useAxiosPablic';

function Login() {
    const {signInWithGoogle, signInUser, loading, setLoading , setUser, signInWithGithub} = useAuth();
    const captchaInput = useRef(null);
    const [isDisabled, setIsDisabled] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    
    const axiosPublic = useAxiosPublic()

    const handleCaptcha = ()=> {
        if(captchaInput.current.value.length === 6){
            if(validateCaptcha(captchaInput.current.value)){
                console.log("captcha is", false)
                setIsDisabled(false)
            }else{
                console.log("captcha is", true)
                setIsDisabled(true)
            }
            
        }else{
            console.log("captcha is", true)
            setIsDisabled(true)
        }
    }

    const handleShowPassword = ()=> {
        setShowPassword(!showPassword);
        console.log(showPassword)

    }

    useEffect(()=> {
        loadCaptchaEnginge(6)
    },[])
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleGoogleSignIn = async ()=> {
        setLoading(true)
        await signInWithGoogle().then(googleResult => {
            setUser(googleResult.data)
            axiosPublic.post("/users", {name: googleResult?.user?.displayName, email: googleResult?.user?.email }).then(res => {
                console.log(res.data)
                swal({
                    title: "User Sign in successfully!",
                    icon: "success",
                });
                setLoading(false)
                
            }).catch(err => console.log(err))
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    const handleGihubSignIn = async ()=> {
        setLoading(true)
        await signInWithGithub().then(githubResult => {
            setUser(githubResult.data)
            axiosPublic.post("/users", {name: githubResult?.user?.displayName, email: githubResult?.user?.email }).then(res => {
                console.log(res.data)
                swal({
                    title: "User Sign in successfully!",
                    icon: "success",
                });
                setLoading(false)
                
            }).catch(err => console.log(err))
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    const handleSignInUser = async (data)=> {
        setLoading(true)
      await signInUser(data.email, data.password).then(res => {
            console.log(res)
            setLoading(false)
            swal({
                title: "User Sign in successfully!",
                icon: "success",
            });
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
    return (
        <div className='pt-20 -mb-2' >
            <div className="py-6" >
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl items-center bg-wite">
                    <img src="https://images.unsplash.com/photo-1637276661836-9ca7bf61eb0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='bg-neutral' />
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <a href="#" onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3" >
                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </a>
                        <a href="#" onClick={handleGihubSignIn} className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3" >
                            <FaGithub className="text-4xl" />
                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Github</h1>
                        </a>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleSubmit(handleSignInUser)}>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" {...register("email", { required: true })} />
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>
                        <div className="mt-4 relative">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type={showPassword ? "text" : "password"} {...register("password", {
                                required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
                            })} />
                            <button className='absolute bottom-3 right-2' type='button' onClick={handleShowPassword}>{showPassword ? <AiFillEye className='text-xl' /> : <AiFillEyeInvisible className='text-xl' />}</button>
                            
                            {errors.password?.type === "required" && <span className="text-red-400">This field is required</span>}

                            {errors.password?.type === "pattern" && <span className="text-red-400">Minimum eight characters, at least one letter and one number.</span>}
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                            <LoadCanvasTemplate />
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" ref={captchaInput} onChange={handleCaptcha} />

                        </div>
                        <div className="mt-8">
                            <button type='submit' className={` text-white font-bold py-2 px-4 w-full rounded ${isDisabled ? "btn-disabled bg-gray-300" : "bg-gray-700"}`} >Login</button>
                        </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/signup" className="text-xs text-gray-500 uppercase">or sign up</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login