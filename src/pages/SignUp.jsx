import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.config";
import { useAuth } from '../context/AuthProvider';
import useAxiosPublic from "../hooks/useAxiosPablic";


function SignUp() {
    const { signInWithGoogle, createUser, user, logout, setLoading } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const SubmitHandler = async (data) => {
        setLoading(true)
        const file = data.photo[0]
        
        const photResult = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`,{image: file} , {
            headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    
    console.log(photResult.data.data.display_url)
    delete data.photo

        createUser(data.email, data.password).then((res)=> {
            

            updateProfile(auth.currentUser , {displayName: data.name, photoURL: photResult.data.data.display_url}).then(res => {
                console.log(res);
                axiosPublic.post("/users", {name: data.name, email: data.email }).then(res => {
                    console.log(res.data)
                    setLoading(false)
                    swal({
                        title: "User created successfully!",
                        text: "Now You Can Sign in",
                        icon: "success",
                      });
                    
                }).catch(err => console.log(err))
                logout();
                navigate("/login");
            }).catch(err => console.log(err))


        }).catch((err)=> {
            console.log(err);
        })
    }
    const handleShowPassword = ()=> {
        setShowPassword(!showPassword);
        console.log(showPassword)

    }

    return (
        <div className='pt-20 -mb-2'>
            <div className="py-6" >
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white text-center">
            Create your Free Account
              </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl items-center bg-white">
                    <img src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='mix-blend-multiply' />
                    <form className="p-8" onSubmit={handleSubmit(SubmitHandler)} >
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" {...register("email", { required: true })} />
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>
                        <div className="mt-4 relative">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
                                <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type={showPassword ? "text" : "password"} {...register("password", {
                                required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
                            })} />
                            <button className='absolute bottom-3 right-2' type='button' onClick={handleShowPassword}>{showPassword ? <AiFillEye className='text-xl' /> : <AiFillEyeInvisible className='text-xl' />}</button>
                            {errors.password?.type === "required" && <span className="text-red-400">This field is required</span>}

                            {errors.password?.type === "pattern" && <span className="text-red-400">Minimum eight characters, at least one letter and one number.</span>}
                        </div>
                        <input type="file" className="file-input file-input-bordered w-full mt-4" {...register("photo", { required: true })} />
                        {errors.photo && <span className="text-red-400">This field is required</span>}
                        <div className="mt-8">
                            <button type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sign up</button>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/login" className="text-xs text-gray-500 uppercase">or Log in</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp