import { useState } from 'react';
import useGetPackages from '../../../hooks/useGetPackages';

import DatePicker from "react-datepicker";

import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

function BookingForm({ selectedPackage }) {
    const { packageData } = useGetPackages();
    const guideName = packageData?.map(item => { return { name: item?.tourGuide?.name, email: item?.tourGuide?.email } });
    const [startDate, setStartDate] = useState(new Date());
    const [isPhotoRequire, setIsPhotoRequire] = useState(true);
    const [photoLink, setPhotoLink] = useState("");
    const [bookPending, setBokPending] = useState(false);
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const navigation = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handlePhoto = (e) => {
        console.log(e.target.value)
        console.log(e.target.value.length)
        if (e.target.value.length > 0) {
            setIsPhotoRequire(false)
            setPhotoLink(e.target.value)
        } else {
            setIsPhotoRequire(true)
        }
    }

    const handleBooking = async (data) => {
        setBokPending(true)
        delete selectedPackage._id
        data = { ...data, ...selectedPackage, email: user?.email, date: startDate.toLocaleDateString(), status: "In Review" }
        if (photoLink.length > 1) {

            data.photo = photoLink

        } else {

            const file = data.photo[0]

            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`, { image: file }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            data.photo = res.data.data.display_url
            console.log(res.data.data.display_url)

        }

        axiosSecure.post("/bookings", data).then(res => {
            setBokPending(false)


            swal({
                title: "Confirm Booking!",
                text: "Your Booking completed successfully!",
                type: "success",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "See Your Booking",
                closeOnConfirm: false
            }).then(isConfirm => {
                if (isConfirm) {
                    navigation("/dashboard/myBookings")
                }
            })
        }).catch(err => {
            console.log(err)
            setBokPending(false)
            swal({
                title: "there is an error",
                icon: "warning",
            });

        })


    }

    const handleAlert = () => {
        swal({
            title: "Before Log in",
            text: "You will not be able to book this package.",
            type: "warning",
            showCancelButton: true,
            dangerMode: true,
            buttons: true,
        }).then(isConfirm => {
            if (isConfirm) {
                navigation("/login")
            }
        })
    }

    return (
        <div className="flex items-center justify-center p-12 border-2 mt-12 shadow-2xl mb-10">

            <div className="mx-auto w-full max-w-[550px] bg-white">
                <h3 className='text-3xl font-extrabold text-neutral mb-8 capitalize'>booking now.</h3>
                <form onSubmit={handleSubmit(handleBooking)}>
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Full Name
                        </label>
                        <input type="text" name="name" id="name" placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                            Email Address
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" {...register("userEmail", { required: true })} />
                        {errors.userEmail && <span className="text-red-400">This field is required</span>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            Price
                        </label>
                        <input type="text" name="price" id="phone" value="4.99"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" {...register("price", { required: true })} />

                        {errors.price && <span className="text-red-400">This field is required</span>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="photo" className="mb-3 block text-base font-medium text-[#07074D]">
                            Photo Link
                        </label>
                        <input type="text" name="photo" onChange={handlePhoto} id="phone" placeholder="Enter your Photo Link"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

                    </div>
                    <div className="divider">OR</div>
                    <div className="form-control w-full mb-5">
                        <input type="file" {...register("photo", { required: isPhotoRequire })} className={`file-input file-input-bordered w-full max-w-xs ${!isPhotoRequire ? "opacity-20 pointer-events-none" : ""}`} />
                        {errors.photo && <span className="text-red-400">This field is required</span>}
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3">
                            <div className="mb-5">
                                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Date
                                </label>
                                <DatePicker id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-control w-full mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                            Tour guide name
                        </label>
                        <select className="select select-bordered" {...register("tourGuide", { required: true })} >
                            {guideName.map((item, idx) => (

                                <option key={idx} value={item.email}>{item.name}</option>
                            ))}
                        </select>
                        {errors.price && <span className="text-red-400">This field is required</span>}
                    </div>

                    {!user ?
                        <div className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none cursor-pointer" onClick={handleAlert}>Book Now</div>
                        :
                        <div>
                            {
                                !bookPending ?
                                    <button
                                        className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Book Now
                                    </button>
                                    :
                                    <button
                                        className="hover:shadow-form w-full rounded-md bg-[#6A64F1] pointer-events-none py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                        <span className="loading loading-dots loading-lg"></span>
                                    </button>

                            }
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default BookingForm