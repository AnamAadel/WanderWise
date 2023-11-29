import swal from 'sweetalert';
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import useGetCartItems from './useGetCartItems';

function useAddToCart() {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch} = useGetCartItems()
    const handleAddToCart = (item)=> {
        console.log(item);
        const menuId = item._id;
        const cartData = {email: user?.email, menuId , ...item}
        if(user){
            axiosSecure.post("/cart", cartData).then(res => {
                console.log(res.data);
                if(res.data.acknowledged){
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                      });
                      refetch()
                }
            }).catch(err => console.log(err))

        }else{
            swal({
                title: "Please Login Before",
                text: "You clicked the button!",
                icon: "warning",
              });
        }
    }
  return handleAddToCart ;
}

export default useAddToCart