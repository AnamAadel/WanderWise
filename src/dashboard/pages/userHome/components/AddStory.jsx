import { useState } from 'react';
import DatePicker from "react-datepicker";

import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import swal from 'sweetalert';
import { useAuth } from '../../../../context/AuthProvider';
import useAxiosPublic from '../../../../hooks/useAxiosPablic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import UserStats from './UserStats';
function AddStory() {
    const [startDate, setStartDate] = useState(new Date());
    const [tourType , setTourType] = useState([]);
    const [rating , setRating] = useState(0);
    const [ratingError , setRatingError] = useState("");
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleInputField = async (data)=> {
        console.log(data)
        console.log(rating)
        if(rating == 0){
            setRatingError("This field is required!")
        }
        
        const file = data.spotPhoto[0]
        
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`,{image: file} , {
            headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    
    console.log(res.data.data.display_url)
    delete data.spotPhoto
    const storyData = {...data, email: user?.email, photo: user?.photoURL , spotPhoto: res.data.data.display_url , date: startDate.toLocaleDateString(), rating: rating}

    console.log(storyData)
    axiosSecure.post("/stories", storyData).then(res => {
        console.log(res.data)

        swal({
            title: `Added Story Successfully. ${res.data.video?.acknowledged ? "You can watch the video on the home page overview section" : ""}`,
            icon: "success",
          });
    }).catch(err => {
        swal({
            title: ` ${err}`,
            icon: "warning",
          });
    })
    }


    const handleRating = (number)=> {
        console.log(number)
        setRating(number)
        setRatingError("")
        console.log(startDate.toLocaleDateString())
    }
    useEffect(()=> {
        axiosPublic.get("/packages/type").then(res => {
            setTourType(res.data)
        }).catch(err => console.log(err))
    },[axiosPublic])
    
    return (
        <>
            <section className="w-[80%] -mt-32 mb-12 p-6 mx-auto bg-white shadow-2xl rounded-md dark:bg-gray-800 relative z-10">
            <UserStats />
                <h1 className="text-5xl text-center font-bold text-neutral capitalize dark:text-neutral">Add Your Story</h1>
                <form onSubmit={handleSubmit(handleInputField)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                     {/* name */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="username">Name</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>
            {/* location */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="emailAddress">Location</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("location", { required: true })} />
                            {errors.location && <span className="text-red-400">This field is required</span>}
                        </div>
                        {/* tour type */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="password">Tour Type</label>
                            <select {...register("tourType", { required: true })} className="select select-bordered block w-full mt-2" defaultValue="" >
                                    <option  value=""></option>
                                    
                                {tourType.map((item, idx)=> (
                                    <option key={idx} value={item.tourType}>{item.tourType}</option>
                                ))}
                            </select>
                            {errors.tourType && <span className="text-red-400">This field is required</span>}
                        </div>
                    {/* date */}
                        <div>
                            <label className="text-neutral dark:text-gray-200 block">Date</label>
                            <DatePicker id="date"
                                className="w-full block mt-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        {/* Title */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="passwordConfirmation">Title</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("title", { required: true })}></textarea>
                            {errors.title && <span className="text-red-400">This field is required</span>}
                        </div>
                        {/* story */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="passwordConfirmation">Story</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("story", { required: true })}></textarea>
                            {errors.story && <span className="text-red-400">This field is required</span>}
                        </div>
                        {/* recognition */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="passwordConfirmation">Tour Guide Recognition</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("recognition", { required: true })}></textarea>
                            {errors.recognition && <span className="text-red-400">This field is required</span>}
                        </div>
                        {/* spot image */}
                        <div>
                            <label className="block text-sm font-medium text-neutral">
                                Spot Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-neutral" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" {...register("spotPhoto", { required: true })} />
                                        </label>
                                        <p className="pl-1 text-neutral">or drag and drop</p>
                                        {errors.spotPhoto && <span className="text-red-400">This field is required</span>}
                                    </div>
                                    <p className="text-xs text-neutral">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/* rating */}
                        <h3 className='text-xl mx-auto font-extrabold text-neutral capitalize flex flex-col justify-center gap-3 items-center'>
                        <div className='flex gap-6'>

                            <span className='-mt-[1rem]'>Rating</span>
                            <ReactStars
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                classNames="-mt-4"
                                onChange={handleRating}
                            />
                        </div>
                            
                            <span className="text-red-400 block font-medium">{ratingError}</span>
                        </h3>

                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="emailAddress">Youtube Video ID</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("video")} />
                            {errors.video && <span className="text-red-400">This field is required</span>}
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="btn btn-neutral">Add</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddStory