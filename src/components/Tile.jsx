const Tile =()=>{
    return(
        <div className="flex flex-1 w-full h-[400px] items-center justify-center">
            <div className="flex relative h-[100%] w-full justify-center bg-gray-100">
                <div className="flex bg-gray-400  w-[300px] border-2">
                    <Photo />
                    <Name />
                    <Description/>
                </div>
            </div>
        </div>
    )
}
export default Tile;