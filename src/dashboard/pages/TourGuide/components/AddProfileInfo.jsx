import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { IoIosCloseCircle } from "react-icons/io";


import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../../context/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import UserStats from '../../userHome/components/UserStats';
import UploadVideo from './UploadVideo';

const languages = [
    "English",
    "Mandarin Chinese",
    "Hindi",
    "Spanish",
    "French",
    "Arabic",
    "Russian",
    "Portuguese",
    "Bengali",
    "Urdu",
    "Indonesian",
    "German",
    "Japanese",
    "Swahili",
    "Turkish",
    "Italian",
    "Dutch",
    "Polish",
    "Korean",
    "Vietnamese",
    "Thai",
    "Tagalog",
    "Malay",
    "Farsi (Persian)",
    "Telugu",
    "Tamil",
    "Marathi",
    "Urdu",
    "Gujarati",
    "Malayalam",
    "Kannada",
    "Odia",
    "Punjabi",
    "Assamese",
    "Maithili",
    "Burmese",
    "Khmer",
    "Hausa",
    "Yoruba",
    "Igbo",
    "Zulu",
    "Swedish",
    "Danish",
    "Norwegian",
    "Finnish",
    "Hebrew",
    "Greek",
    "Hungarian",
    "Czech",
    "Slovak",
    "Bulgarian",
]

const specialties = [
    "Historical Tours",
    "Cultural Experiences",
    "Nature Walks",
    "Adventure Tours",
    "Culinary Tours",
    "Wine Tasting",
    "Wildlife Safaris",
    "Photography Expeditions",
    "Beach Retreats",
    "City Exploration",
    "Hiking and Trekking",
    "Mountain Climbing",
    "Cruise Adventures",
    "Wellness Retreats",
    "Educational Tours",
    "Art and Architecture",
    "Festivals and Events",
    "Family-Friendly Tours",
    "Volunteer and Service Trips",
    "Ecotourism",
    "Religious Pilgrimages",
    "Scuba Diving Excursions",
    "Skiing and Winter Sports",
    "Luxury Getaways",
    "Backpacking Journeys",
    "Road Trips",
    "Island Hopping",
    "Camping Adventures",
    "Historical Reenactments",
    "Ghost Tours",
    "Railway Journeys",
    "Hot Air Balloon Rides",
    "Sailing and Boating",
    "Archaeological Expeditions",
    "Surfing Escapades",
    "Fishing Tours",
    "Spa and Wellness Retreats",
    "Yoga and Meditation Retreats",
    "Bird Watching",
    "Motorcycle Tours",
    "Cultural Festivals",
    "Zip Line Adventures",
    "Paragliding Excursions",
    "Luxury Train Journeys",
    "Helicopter Tours",
]

const certifications = [
    "Local Tour Guide License",
    "Tourism Management Certification",
    "First Aid and CPR Certification",
    "Language Proficiency Certification",
    "Cultural Heritage Certification",
    "Wilderness First Responder (WFR) Certification",
    "Driver's License",
    "Customer Service Training",
    "Professional Tour Guide Associations Membership",
    "Environmental or Ecotourism Certification",
    "Specialized Certifications (e.g., Scuba Diving, Rock Climbing)",
    "Safety Training and Emergency Response Certification",
]

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]





function AddProfileInfo() {
    const [startDate, setStartDate] = useState(new Date());
    const [storeLanguage, setStoreLanguage] = useState([]);
    const [storeSpecialties, setStoreSpecialties] = useState([]);
    const [storeCertifications, setStoreCertifications] = useState([]);
    const [storeWeekDay, setStoreWeekDay] = useState([]);
    const [languagesError, setLanguagesError] = useState("");
    const [specialtiesError, setSpecialtiesError] = useState("");
    const [certificationsError, setCertificationsError] = useState("");
    const [weekDayError, setWeekDayError] = useState("");
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleProfileInfo = async (data)=> {
        const file = data.coverPhoto[0]

            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`, { image: file }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

        data.coverPhoto = res.data.data.display_url

        const profileInfo = {...data, languages: storeLanguage, specialties: storeSpecialties, certifications: storeCertifications, availability: storeWeekDay, date: startDate.toLocaleDateString()}

        axiosSecure.put(`/users?email=${user?.email}`, profileInfo).then(res => {
            console.log(res.data)
            swal({
                title: "User Updated successfully!",
                icon: "success",
              });
        console.log(profileInfo)
        }).catch(err => {
            console.log(err)
        })
    }

    const uploadVideo = async (data)=> {
        // const file = data.image[0]

        //     const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`, { image: file }, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         }
        //     });

        // data.image = res.data.data.display_url

        const videoData = {...data, email: user?.email, owner: user?.displayName}

        console.log(videoData)
    }
    
    const handleLanguage = (name)=> {
        console.log(name)
        console.log(storeLanguage.includes(name))
        if(!storeLanguage.includes(name)){
            const newArr = [...storeLanguage, name]
            setStoreLanguage(newArr)
            
            setLanguagesError("")
        }else{
            console.log(" store is false")
            setLanguagesError(`${name} Already selected`)
        }
    }

    const handleSpecialties = (name)=> {
        if(!storeSpecialties.includes(name)){
            const newArr = [...storeSpecialties, name]
            setStoreSpecialties(newArr)
            
            setSpecialtiesError("")
        }else{
            console.log(" store is false")
            setSpecialtiesError(`${name} Already selected`)
        }
    }

    const handleCertifications = (name)=> {
        if(!storeCertifications.includes(name)){
            const newArr = [...storeCertifications, name]
            setStoreCertifications(newArr)
            
            setCertificationsError("")
        }else{
            console.log(" store is false")
            setCertificationsError(`${name} Already selected`)
        }
    }

    const handleWeekDay = (name)=> {
        if(!storeWeekDay.includes(name)){
            const newArr = [...storeWeekDay, name]
            setStoreWeekDay(newArr)
            
            setWeekDayError("")
        }else{
            console.log(" store is false")
            setWeekDayError(`${name} Already selected`)
        }
    }

    // delete handle function

    const deleteLanguage = (name)=> {
        const filterItems = storeLanguage.filter(item => item !== name);
        setStoreLanguage(filterItems)
    }


    const deleteSpecialties = (name)=> {
        const filterItems = storeSpecialties.filter(item => item !== name);
        setStoreSpecialties(filterItems)
    }

    const deleteCertifications = (name)=> {
        const filterItems = storeCertifications.filter(item => item !== name);
        setStoreCertifications(filterItems)
    }

    const deleteWeekDay = (name)=> {
        const filterItems = storeWeekDay.filter(item => item !== name);
        setStoreWeekDay(filterItems)
    }
    return (
        <>
            <section className="w-full mb-12 p-6 px-16 mx-auto bg-white rounded-md dark:bg-gray-800 relative z-10">
            <UserStats />
                <h1 className="text-5xl text-center font-bold text-neutral capitalize dark:text-neutral">Update Your Profile</h1>
                <form onSubmit={handleSubmit(handleProfileInfo)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    {/* name */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="username">Name</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("name")} />
                        </div>
                    {/* email */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="emailAddress">Email</label>
                            <input type="email" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("email")}  />
                        </div>
                        {/* phone */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="emailAddress">Phone</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("phone")} />
                        </div>
                        {/* location */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="emailAddress">Location</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("location")} />
                        </div>
                        {/* language */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="password">Language</label>
                            <div className='flex gap-4 my-3 flex-wrap'>
                            {storeLanguage.map((name, idx)=> (
                            <span className='py-2 px-4 border rounded-full font-bold flex items-center gap-3' key={idx}>{name}<span className='hover:text-red-400 cursor-pointer text-xl' onClick={()=> deleteLanguage(name)}><IoIosCloseCircle /></span></span>

                            ))}
                            
                            </div>
                            <p className='text-red-400 text-xl'>{languagesError}</p>
                            <select onChange={(e)=> handleLanguage(e.target.value)} className="select select-bordered block w-full mt-2">
                                {languages.map((name, idx) => (
                                    <option key={idx} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>
                        {/* specialties */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="password">Specialties</label>
                            <div className='flex gap-4 my-3 flex-wrap'>
                            {storeSpecialties.map((name, idx)=> (
                            <span className='py-2 px-4 border rounded-full font-bold flex items-center gap-3' key={idx}>{name}<span className='hover:text-red-400 cursor-pointer text-xl' onClick={()=> deleteSpecialties(name)}><IoIosCloseCircle /></span></span>

                            ))}
                            
                            </div>
                            <p className='text-red-400 text-xl'>{specialtiesError}</p>
                            <select onChange={(e)=> handleSpecialties(e.target.value)} className="select select-bordered block w-full mt-2">
                                {specialties.map((name, idx) => (
                                    <option key={idx} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>
                        {/* certifications */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="password">Certifications</label>
                            <div className='flex gap-4 my-3 flex-wrap'>
                            {storeCertifications.map((name, idx)=> (
                            <span className='py-2 px-4 border rounded-full font-bold flex items-center gap-3' key={idx}>{name}<span className='hover:text-red-400 cursor-pointer text-xl' onClick={()=> deleteCertifications(name)}><IoIosCloseCircle /></span></span>

                            ))}
                            
                            </div>
                            <p className='text-red-400 text-xl'>{certificationsError}</p>
                            <select onChange={(e)=> handleCertifications(e.target.value)} className="select select-bordered block w-full mt-2">
                                {certifications.map((name, idx) => (
                                    <option key={idx} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>

                        {/* WeekDay */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="password">WeekDay</label>
                            <div className='flex gap-4 my-3 flex-wrap'>
                            {storeWeekDay.map((name, idx)=> (
                            <span className='py-2 px-4 border rounded-full font-bold flex items-center gap-3' key={idx}>{name}<span className='hover:text-red-400 cursor-pointer text-xl' onClick={()=> deleteWeekDay(name)}><IoIosCloseCircle /></span></span>

                            ))}
                            
                            </div>
                            <p className='text-red-400 text-xl'>{weekDayError}</p>
                            <select onChange={(e)=> handleWeekDay(e.target.value)} className="select select-bordered block w-full mt-2">
                                {weekDay.map((name, idx) => (
                                    <option key={idx} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Experience */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="username">Experience</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("experience")} />
                        </div>
                        {/* date */}
                        <div>
                            <label className="text-neutral dark:text-gray-200 block">Date</label>
                            <DatePicker id="date"
                                className="w-full block mt-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        {/* cancellationPolicy */}
                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="passwordConfirmation">Cancellation Policy</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("cancellation")}></textarea>
                        </div>

                        {/* termsAndConditions */}

                        <div className='col-span-full'>
                            <label className="text-neutral dark:text-gray-200" htmlFor="passwordConfirmation">Terms And Conditions</label>
                            <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("termsAndCondition")}></textarea>
                        </div>

                        {/* facebook */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="username">Facebook Link</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("facebook")} />
                        </div>

                        {/* twitter */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="username">Twitter Link</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("twitter")} />
                        </div>

                        {/* linkedin */}
                        <div>
                            <label className="text-neutral dark:text-gray-200" htmlFor="username">Linkedin Link</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("linkedin")} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral">
                                Photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-neutral" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" {...register("photo", { required: true })} />
                                            {errors.photo && <span className="text-red-400">This field is required</span>}
                                        </label>
                                        <p className="pl-1 text-neutral">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-neutral">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="btn btn-neutral">Update</button>
                    </div>
                </form>
            </section>
            <UploadVideo />
        </>
    )
}

export default AddProfileInfo