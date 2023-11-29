
function useWishlist() {
    const localData = JSON.parse(localStorage.getItem("wishlist"))|| []
    
  return localData
}

export default useWishlist