
const TopNavBar = () => {
  return (
    <nav className="flex bg-slate-700 py-2 gap-2 text-white px-3 items-center">
      <div className="left flex">
        <div className="logo mr-2">Xt</div>
        <div className="location">
          <span>!</span>
          <span>Nepal</span>
        </div>

      </div>
      <div className="searchbar w-full relative">
        <input type="text" className="w-full p-1 rounded-lg" />
        <span className="w-12 rounded-tr-lg rounded-br-lg h-8 bg-yellow-500 inline-block absolute right-0"></span>
      </div>
      <div className="useraction w-1/4 flex gap-3">
        <button className="bg-blue-300 py-1 px-2 rounded-sm text-black">Cart</button>
        <button className="bg-blue-300 py-1 px-2 rounded-sm text-black">User</button>
      </div>
    </nav>
  )
}

export default TopNavBar;

