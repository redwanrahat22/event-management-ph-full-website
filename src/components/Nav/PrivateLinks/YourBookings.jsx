import ShowBookings from "./ShowBookings";

const YourBookings = () => {
    const DataLoad = JSON.parse(localStorage.getItem('booking'))
    
    return (
        <div>
        <div className="md:mt-32 mt-16 md:grid grid-cols-3 gap-8 space-y-5 md:space-y-0 ">
           {
            DataLoad && DataLoad.map(data => <ShowBookings key={data.id} showcard = {data}></ShowBookings>)
           }
        </div>
        <div className="text-center md:mt-20 mt-12 ">
            {
                DataLoad && <button onClick={()=>{localStorage.removeItem('booking'),location.reload()}} className="text-[12px] md:text-lg md:px-4 px-2 py-1 rounded-lg hover:text-white hover:bg-common duration-200 font-semibold border-common border-2 text-common ">Clear All</button>
            }
        </div>
        </div>
    );
};

export default YourBookings;