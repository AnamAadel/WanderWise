import { useState } from 'react';
import YouTube from 'react-youtube';

function VideoModal({modalVideoLink}) {
    const [player, setPlayer] = useState(null)
    const [loading, setLoading] = useState(false)
    const onReady = (event) => {
        setPlayer(event.target);
      };

      const playVideo = () => {
        if (player) {
          player.playVideo();
        }
      };
    
      const pauseVideo = () => {
        console.log(player)
        if (player) {
          player.pauseVideo();
        }
      };
    const opts = {
        height: '390',
        width: '740',
        playerVars: {
          autoplay: 1,
        }}
    return (
        <dialog id="my_modal_3" className="modal mx-auto" >
            <div className="modal-box bg-transparent flex justify-center shadow-none" style={{maxWidth: "800px"}} >
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle text-neutral btn-neutral hover:text-white absolute right-0 top-2 bg-white"  onClick={pauseVideo}>✕</button>
                    {
                        !loading ? 
                    <YouTube videoId={modalVideoLink} opts={opts} onReady={onReady} />
                    :
                    <h2>loading...</h2>
                    }
                </form>
            </div>
        </dialog>
    )
}

export default VideoModal