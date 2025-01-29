import AllTask from "../other/AllTask"
import Header from "../other/Header"

const AdminDashboard = () => {
  return (
    <>
    <Header/>
    <form className=" justify-between  mt-7 p-5 flex  w-[100%] bg-[#3C4043] rounded gap-20">
        <div className="flex flex-col items-start">
            <h3>Task Title</h3>
            <input id="plc" className=" text-white w-[600px] mb-4 p-2 rounded border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" type="text" placeholder="Make a UI design" />
            <h3>Date</h3>
            <input type="date" placeholder="Date" id="plc" className=" text-white w-[600px] mb-4 p-2 rounded border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <h3>Asign To</h3>
            <input type="text" placeholder="You want to asign" id="plc" className=" text-white w-[600px] mb-4 p-2 rounded border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <h3>Category</h3>
            <input type="text" placeholder="what the category" id="plc" className=" text-white w-[600px] mb-4 p-2 rounded border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div className=" flex flex-col  items-center gap-4">
            <h3>Description</h3>
            <textarea cols="30" rows="10" className=" text-white w-[400px] p-2 rounded border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" type="text"></textarea>
            <button className=" bg-green-500 text-xl w-40 ">Create Task</button>
        </div>
    </form>
    <AllTask/>
    </>
  )
}

export default AdminDashboard