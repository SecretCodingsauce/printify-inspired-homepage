import cups from "./imgs/cups.png"
import Shirts from "./imgs/Untitled design.png"
import phonecases from "./imgs/Phone cases.png"

export default function ProductsSection(){

    return (
        <section id="products" className="py-16 md:py-20">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-2xl md:text-3xl font-semibold">Our Products</h3>
          <p className="mt-2 text-gray-600">Choose from a variety of customizable products.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
   
            <div className="bg-white p-6 shadow-md rounded-lg">
              <img src={Shirts} alt="T-Shirts" className="mx-auto" />
              <h4 className="text-xl font-bold mt-4">T-Shirts</h4>
              <p className="mt-2 text-gray-600">Create custom T-shirts with ease.</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <img src={cups} alt="Mugs" className="mx-auto" />
              <h4 className="text-xl font-bold mt-4">Mugs</h4>
              <p className="mt-2 text-gray-600">Personalize your own mugs.</p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <img src={phonecases} alt="Phone Cases" className="mx-auto" />
              <h4 className="text-xl font-bold mt-4">Phone Cases</h4>
              <p className="mt-2 text-gray-600">Design unique phone cases.</p>
            </div>
          </div>
        </div>
      </section>
    )
}