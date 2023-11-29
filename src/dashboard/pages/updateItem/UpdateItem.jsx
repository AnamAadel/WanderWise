import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const menuNames = ["salad", "pizza", "soups", "desserts", "drinks"];
function UpdateItem() {
  const axiosSecure = useAxiosSecure();
  const loadData = useLoaderData()
  console.log(loadData[0])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()


  const onSubmit = async (data) => {
    console.log(data.file[0])
    console.log(errors)

    const file = data.file[0]

    let image = data.image;
    
    if(file){
      const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`,{image: file} , {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      image = res.data.data.display_url
      console.log("imgbb:", image);
    }

    console.log("loadData:", image)

    const product = {
      name: data.name,
      image: image,
      category: data.category.toLowerCase(),
      price: data.price,
      recipe: data.details
    }

    console.log(product)

    axiosSecure.patch(`/menu/${loadData?._id}`, product).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded space-y-8 px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-auto">
      <SectionTitle subTitle="What's new" title="ADD AN ITEM" />
      <div className="">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
          Recipe Name
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" {...register("name", { required: true })} placeholder="Recipe Name" defaultValue={loadData?.name} />
        {errors.name?.type === "required" && (
          <p className="text-red text-xs italic text-red-600">Please fill out this field.</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
            Category
          </label>
          <div className="relative w-full">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state" {...register("category", { required: true })} defaultValue={loadData?.category}>
              {
                menuNames.map(item => (
                  <option value={item} key={item} >{item}</option>
                ))
              }
            </select>
            {errors.category?.type === "required" && (
              <p className="text-red text-xs italic text-red-600">Please fill out this field.</p>
            )}
          </div>
        </div>
        <div className="">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
            Price
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" name='price' {...register("price", { required: true })} type="text" placeholder="Doe" defaultValue={loadData?.price} />
          {errors.price?.type === "required" && (
            <p className="text-red text-xs italic text-red-600">Please fill out this field.</p>
          )}
        </div>

      </div>
        <div className="w-full">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
            Photo Link
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" name='image' {...register("image")} type="text" placeholder="Doe" defaultValue={loadData?.image} />
          {errors.price?.type === "required" && (
            <p className="text-red text-xs italic text-red-600">Please fill out this field.</p>
          )}
        </div>
      <div className="">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
          Recipe Name
        </label>
        <textarea name="details" placeholder='Recipe Details' className='min-h-[170px] p-4 w-full border' {...register("details", { required: true })} defaultValue={loadData?.recipe} ></textarea>
        {errors.details?.type === "required" && (
          <p className="text-red text-xs italic text-red-600">Please fill out this field.</p>
        )}
      </div>
      <input type="file" className="file-input w-full max-w-xs"  {...register("file")} />

      {errors.file?.type === "required" && (
          <p className="text-red text-xs italic text-red-600">Please fill out this field.</p>
        )}
      <button type='submit' className='btn btn-neutral'>Submit</button>
    </form>
  )
}

export default UpdateItem