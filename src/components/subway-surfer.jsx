import subwaySurferVideo from '../assets/subway-surfers2.mp4'

const SubwaySurfer=()=>{
    return (
        <div className="flex flex-row bg-gray-100">
            <div className="relative p-4 mr-auto ">
                <video src={subwaySurferVideo} width="200px" height="400px"  autoPlay muted ></video>
            </div>
        </div>
    )
}
export default SubwaySurfer;