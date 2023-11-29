import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useGetAllUsers from '../../../hooks/useGetAllUsers';
import useGetPackages from '../../../hooks/useGetPackages';

const menuNames = ["Salad", "pizza", "soups", "desserts", "drinks"];
function AddPackage() {
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);
  const { AllUsers } = useGetAllUsers();
  const { packageData } = useGetPackages();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()


  const onSubmit = async (data) => {
    setIsLoading(true)
    console.log(data)
    // console.log(data)

    const tourGuide = JSON.parse(data.tourGuideName);

    const file = data.file[0]

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`, { image: file }, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });

    console.log(res.data.data.display_url)

    delete data.file
    delete data.tourGuideName

    const myPackage = { ...data, images: [res.data.data.display_url], tourGuide: tourGuide }

    console.log(myPackage)


    axiosSecure.post("/packages", myPackage).then(res => {
      console.log(res);
      swal({
        title: `Added Package Successfully.`,
        icon: "success",
      });
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
    })

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white shadow-md rounded space-y-8 px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-auto">
      <h2 className='text-6xl font-semibold text-center'>Add Your Package</h2>
      <div className="">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
          Trip Tile
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" {...register("tourTitle", { required: true })} placeholder="Recipe Name" />
        {errors.tourTitle && <span className="text-red-400">This field is required</span>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
            Trip Type
          </label>
          <div className="relative w-full">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state" {...register("tourType", { required: true })}>
              <option ></option>
              {
                packageData.map(item => item.tourType).map(item => (
                  <option value={item} key={item}>{item}</option>
                ))
              }
            </select>
            {errors.tourTitle && <span className="text-red-400">This field is required</span>}
          </div>
        </div>
        <div className="">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
            Price
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" name='price' {...register("price", { required: true })} type="text" placeholder="Doe" />
          {errors.price && <span className="text-red-400">This field is required</span>}
        </div>
        {/* rating */}
        <div className="">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
            Rating
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" name='price' {...register("rating", { required: true })} type="text" placeholder="Doe" />
          {errors.rating && <span className="text-red-400">This field is required</span>}
        </div>

        {/* video id */}
        <div className="">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
            Video Id
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" name='price' {...register("video", { required: true })} type="text" placeholder="Doe" />
          {errors.video && <span className="text-red-400">This field is required</span>}
        </div>

      </div>
      {/* language */}
      <div className=''>
        <label className="text-neutral dark:text-gray-200" htmlFor="password">Tour Guide</label>
        <select className="select select-bordered block w-full mt-2" {...register("tourGuideName", { required: true })} >
          <option ></option>
          {AllUsers.filter(user => user.role === "tourGuide").map((user) => (
            <option key={user._id} value={JSON.stringify({ name: user.name, email: user.email })} >{user.name}</option>

          ))}
        </select>
      </div>
      {errors.tourGuideName && <span className="text-red-400">This field is required</span>}
      {/* cancellationPolicy */}
      <div className='col-span-full'>
        <label className="text-neutral dark:text-gray-200" htmlFor="passwordConfirmation">Description</label>
        <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" {...register("description", { required: true })} ></textarea>
        {errors.description && <span className="text-red-400">This field is required</span>}
      </div>
      <input type="file" className="file-input w-full max-w-xs"  {...register("file", { required: true })} />
      {errors.file && <span className="text-red-400">This field is required</span>}

      {errors.file && <span className="text-red-400">This field is required</span>}
      {
        isLoading ?
          <button type='submit' className='btn btn-neutral pointer-events-none'><span className="loading loading-dots loading-lg"></span></button>
          :
          <button type='submit' className='btn btn-neutral'>Submit</button>

      }
    </form>
  )
}

export default AddPackage