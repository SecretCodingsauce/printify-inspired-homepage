import { FaBars, FaTimes } from 'react-icons/fa';




export default function Navbar ({toggleMenu, isMenu}){


    return (
        <nav className="bg-white shadow">
        <div className="container mx-auto mb-0 px-4 py-4 flex justify-between items-center">
          <div><h1 className="text-2xl font-bold text-green-500">Printify</h1>
          <a  href='https://ayushmansharma-profile.vercel.app/' className='text-xs p-0 m-0' rel="noreferrer" target='_blank'>made by <span className='text-blue-800 underline'>Ayushman Sharma</span></a>  
</div>

      
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenu ? (
              <FaTimes className="text-2xl text-gray-600" />
            ) : (
              <FaBars className="text-2xl text-gray-600" />
            )}
          </div>

         
          <nav className="hidden md:flex space-x-4 md:space-x-8">
            <a href="#products" className="text-gray-600 hover:text-green-500">Products</a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-green-500">Why Us?</a>
            <a href="#reviews" className="text-gray-600 hover:text-green-500">Reviews</a>
          </nav>
        </div>

   
        {isMenu && (
          <nav className="md:hidden bg-white shadow-lg py-4">
            <a href="#products" className="block px-4 py-2 text-gray-600 hover:text-green-500">Products</a>
            <a href="#why-choose-us" className="block px-4 py-2 text-gray-600 hover:text-green-500">Why Us?</a>
            <a href="#reviews" className="block px-4 py-2 text-gray-600 hover:text-green-500">reviews</a>
          </nav>
        )}
      </nav>
    )
}