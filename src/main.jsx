import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import AuthProvider from "./context/AuthProvider";
import Main from './dashboard/Main';
import MyAssignTour from './dashboard/pages/TourGuide/MyAssignTour';
import TourGuide from './dashboard/pages/TourGuide/TourGuide';
import AddPackage from './dashboard/pages/addPackage/AddPackage';
import AdminHome from './dashboard/pages/admin/AdminHome';
import MyBookings from './dashboard/pages/booking/MyBookings';
import ManageUsers from './dashboard/pages/manageUsers/ManageUsers';
import UserHome from './dashboard/pages/userHome/UserHome';
import WishList from './dashboard/pages/wishlist/WishList';
import useAxiosPublic from './hooks/useAxiosPablic';
import "./index.css";
import ErrorPage from './pages/ErrorPage';
import Login from "./pages/Login";
import PackageDetails from './pages/Package/PackageDetails';
import Packages from './pages/Package/Packages';
import SignUp from "./pages/SignUp";
import AboutUs from './pages/about/AboutUs';
import Blog from './pages/blog/Blog';
import BlogDetails from './pages/blog/BlogDetails';
import Communities from './pages/comunity/Communities';
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import TourGuideProfile from './pages/profile/TourGuideProfile';
import Stories from './pages/stories/Stories';
import StoryDetails from './pages/stories/StoryDetails';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import('preline')
const axiosPublic = useAxiosPublic();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/communities",
        element: <Communities />

      },
      {
        path: "/about",
        element: <AboutUs />

      },
      {
        path: "/blog",
        element: <Blog />

      },
      {
        path: "/blog/:id",
        loader: ({params})=> axiosPublic.get(`/blog/${params.id}`),
        element: <BlogDetails />

      },
      {
        path: "/packages",
        element: <Packages />
      },
      {
        path: "/packages/:id",
        element: <Packages />
      },
      {
        path: "/packageDetail/:id",
        loader: ({params})=> axiosPublic.get(`/packages/${params.id}`) ,
        element: <PackageDetails />
      },
      {
        path: "/stories",
        element: <Stories />
      },
      {
        path: "/story/:id",
        loader: ({params})=> axiosPublic.get(`/stories/${params.id}`),
        element: <StoryDetails />
      },
      {
        path: "/tourGuideProfile/:id",
        loader: ({params})=> axiosPublic.get(`/tourGuides/${params.id}`),
        element: <TourGuideProfile />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <PublicRoute> <Login /></PublicRoute>
      },
      {
        path: "/signup",
        element: <PublicRoute>  <SignUp /></PublicRoute>
      },
    ], 
  },
  {
    path: "/dashboard",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      // tourist
      {
        path: "/dashboard/tourist",
        element: <PrivateRoute><UserHome /></PrivateRoute>
      },
      {
        path: "/dashboard/myBookings",
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
      {
        path: "/dashboard/wishlist",
        element: <PrivateRoute><WishList /></PrivateRoute>
      },
      // Tour guide profile dashboard

      {
        path: "/dashboard/tourGuide",
        element: <PrivateRoute><TourGuide /></PrivateRoute>
      },
      {
        path: "/dashboard/assignTour",
        element: <PrivateRoute><MyAssignTour /></PrivateRoute>
      },
      // admin
      {
        path: "/dashboard/admin",
        element: <PrivateRoute><AdminHome /></PrivateRoute>
      },
      {
        path: "/dashboard/addPackage",
        element: <PrivateRoute><AddPackage /></PrivateRoute>
      },
      {
        path: "/dashboard/manageUsers",
        element: <PrivateRoute><ManageUsers /></PrivateRoute>
      },

    ]
  }
]);



// Create a client
const queryClient = new QueryClient()

// axios.defaults.withCredentials = true
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>

  </QueryClientProvider>
  </React.StrictMode>
);