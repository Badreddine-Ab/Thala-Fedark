




export default function NavBar() {
  return (
    <>
     
      <div className="min-h-full">
       
        <header className="bg-white shadow flex">
          <div className="mx-auto  py-6  sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Thala Fdarak</h1>
          </div>
          <div className="mx-auto  py-6 font-bold  sm:px-6 lg:px-8">
            <input type="text" className="tracking-tight text-gray-900 border-primary " />
            <button className="bg-primary py-2 px-4 rounded-r-lg text-white">Search</button>
           
          </div>
          <div className="mx-auto  py-6  sm:px-6 lg:px-8">
          <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>           
          </div>
          
        </header>
       
      </div>
    </>
  )
}