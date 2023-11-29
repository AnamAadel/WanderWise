import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import { useAuth } from '../../../../context/AuthProvider'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

function UploadVideo() {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const uploadVideo = async (data)=> {
        const file = data.image[0]

            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`, { image: file }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

        data.image = res.data.data.display_url

        const videoData = {...data, email: user?.email, owner: user?.displayName}

        console.log(videoData)
        axiosSecure.post(`/videos?email=${user?.email}`, videoData).then(res => {
            swal({
                title: "Video uploaded successfully!",
                icon: "success",
              });
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <section className="w-full mb-12 p-6 px-16 mx-auto bg-white rounded-md dark:bg-gray-800 relative z-10">
            <h1 className="text-5xl text-center font-bold text-neutral capitalize dark:text-neutral">Upload Your Video</h1>
            <form onSubmit={handleSubmit(uploadVideo)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    {/* spot name */}
                    <div>
                        <label className="text-neutral dark:text-gray-200" htmlFor="username">Spot Name</label>
                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("name")} />
                    </div>

                    {/* youtube video id */}
                    <div>
                        <label className="text-neutral dark:text-gray-200" htmlFor="username">Youtube video Id</label>
                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("video")} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral">
                            Thumbnail Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-neutral" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="thumbnail-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span className="">Upload a file</span>
                                        <input id="thumbnail-upload" name="thumbnail-upload" type="file" className="sr-only" {...register("image")} />
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
                    <button className="btn btn-neutral">Upload</button>
                </div>
            </form>
        </section>
    )
}

export default UploadVideo