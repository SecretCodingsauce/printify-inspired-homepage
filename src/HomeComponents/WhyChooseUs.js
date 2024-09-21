export default function WhyChooseUs(){

    return (
        <section id="why-choose-us" className="bg-gray-200 py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold">Why Choose Us?</h3>
          <p className="mt-2 text-gray-600">We make it easy to start and grow your business.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6">
              <h4 className="text-xl font-bold">No Upfront Costs</h4>
              <p className="mt-2 text-gray-600">Only pay for what you sell.</p>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold">Fast Shipping</h4>
              <p className="mt-2 text-gray-600">Deliver your products worldwide.</p>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold">Top-Notch Quality</h4>
              <p className="mt-2 text-gray-600">Premium materials for every order.</p>
            </div>
          </div>
        </div>
      </section>
    )
}