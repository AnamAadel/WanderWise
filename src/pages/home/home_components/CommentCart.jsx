import React from 'react';
import ReactStars from "react-rating-stars-component";

function CommentCart() {
    return (
        <section className="p-6 ">
            <div className="container max-w-xl mx-auto">
                <div className="flex flex-col items-center w-full p-6 space-4-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100 bg-white shadow-xl">
                    <ReactStars
                        count={5}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        classNames="-mt-4"
                    />
                    <blockquote className="max-w-lg  text-lg italic font-medium text-center">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</blockquote>
                    <h3 className='text-2xl text-yellow-500 mt-3'>JANE DOE</h3>
                    <div className="avatar mx-auto mt-6">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=740&t=st=1700838160~exp=1700838760~hmac=6aa4dbb8abb8067497635ffd486603fad55cad7897b2687e216fcf0899ba8148" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommentCart