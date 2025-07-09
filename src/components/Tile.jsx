import Photo from "./Photo";
import Name from "./Name";
import Description from "./Description";
import AcceptButton from "./AcceptButton";
import RejectButton from "./RejectButton";
import ActionButton from "./ActionButton";

const Tile =()=>{
    return(
        <div className="flex flex-1 w-full h-[400px] items-center justify-center">
            <div className="flex relative h-[100%] w-full justify-center bg-gray-100">
                <div className="flex flex-col bg-gray-400  w-[300px] border-2 rounded-lg ">
                    <div className="flex flex-row w-full h-[30%]">
                        <Name />
                        <Photo />
                    </div>
                    <Description/>
                    <div className="flex flex-row w-full h-[20%]">
                        <AcceptButton />
                        <RejectButton />
                        
                    </div>
                    <div className="flex items-center justify-center h-[20%] bg-white">
                        <ActionButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tile;