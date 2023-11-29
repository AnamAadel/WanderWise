
function Contact() {
  return (
    <div className="hero container mx-auto py-12 my-16 shadow-2xl relative overflow-hidden border-4">
    
  <div className="hero-content flex-col lg:flex-row items-stretch gap-0 ">
    <div className="text-center lg:text-left bg-dark p-8">
     
        <h2 className='text-3xl font-bold mb-6'>Reach Us</h2>
      <ul className='space-y-4'>
        <li><b>Email</b>: myname@gmail.com</li>
        <li><b>Phone</b>: +88017654853214</li>
        <li><b>Address</b>: South Mourail, Brahmonbaria, Chattogram, Bangladesh</li>
      </ul>
    </div>
    <div className="p-8 flex-shrink-0 w-full max-w-2xl  bg-blue-200 rounded-none  relative overflow-hidden">
    <img src="/leaves.png" alt="" className='w-[300px] md:w-[500px] absolute bottom-0 -right-44 opacity-25 rotateY' />
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="number" placeholder="Phone" className="input input-bordered" required />
        </div>
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="" className='w-full min-h-[150px] input input-bordered'></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Contact