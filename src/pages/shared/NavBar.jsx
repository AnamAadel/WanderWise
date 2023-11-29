import { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

function NavBar() {
  const { user, logout, wishlist, role} = useAuth();

  console.log(role)
  

  

  const handleLogout = () => {
    logout().then((res) => {
      console.log(res)
    }).err((err) => console.log(err))
  }

  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      const scrolling = window.scrollY;
      if (scrolling > 300) {

        header.classList.add("fixed", "top-0");
        header.classList.remove("relative");
      } else {
        header.classList.add("relative");
        header.classList.remove("fixed", "top-0");

      }
    })
  }, [])

  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full  top-0 left-0 text-sm py-3 lg:py-0 h-24 bg-white border-b-4 border-blue-400 transition-all duration-500 relative" id="header" >
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between lg:px-8 h-full" aria-label="Global">
        <div className="flex items-center justify-between h-full">
          <Link className="flex-none text-xl font-semibold h-full inline-block" href="#" aria-label="Brand"><img src="https://img.freepik.com/free-vector/flat-vintage-travel-background_23-2148189177.jpg?w=740&t=st=1701010303~exp=1701010903~hmac=c2f22d87fcd8dad0a61075ee325c2451d203c58f58cdb15cef30c59881ecf1a8" alt="" className="h-full" /></Link>
          <div className="lg:hidden">
            <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden transition-all duration-300 basis-full grow lg:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:items-center lg:justify-end lg:gap-y-0 lg:gap-x-7 lg:mt-0 lg:ps-7 bg-white p-8 lg:p-0">
            <NavLink className="font-medium lg:py-6" to="/" aria-current="page">Home</NavLink>
            <NavLink className="font-medium lg:py-6" to="/communities">Community</NavLink>
            <NavLink className="font-medium lg:py-6" to="/about">About Us</NavLink>
            <NavLink className="font-medium lg:py-6" to="/packages">Packages</NavLink>
            <NavLink className="font-medium lg:py-6" to="/stories">Stories</NavLink>
            <NavLink className="font-medium lg:py-6" to="/blog">Blog</NavLink>
            <NavLink className="font-medium lg:py-6" to="/contact" aria-current="page">Contact Us</NavLink>

            <button className="flex items-end ">
            <FaRegHeart className="text-3xl" />
              <div className="badge badge-primary badge-sm">{wishlist?.length}</div>
            </button>

            {!user ? <>
              
            <NavLink className="font-medium lg:py-6" to="/login" aria-current="page">Login</NavLink>
            <NavLink className="font-medium lg:py-6" to="/signup" aria-current="page">Register</NavLink>
            </>
            :
            <div className="hs-dropdown relative group inline-flex mr-6 cursor-pointer" id="hs-dropdown-with-header " type="button">
                <div className="avatar"  >
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>

              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible top-full right-0 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 border-4" >
                <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                  <h3 className="text-lg font-bold ">{user?.displayName}</h3>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{user?.email}</p>
                </div>
                <div className="mt-2 py-2 first:pt-0 last:pb-0">


                <NavLink className="font-medium py-2 px-4 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700 block" to={`/dashboard/${role}`} aria-current="page">Dashboard</NavLink>


                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#" onClick={handleLogout}>
                  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  Logout
                  </a>
                </div>
              </div>
            </div>
            }

            

            



            
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar