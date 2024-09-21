export default function Reviews({comments}){


    return (

        <section id="reviews" className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold">What Our Customers Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
     {comments.map((comment)=>(
         
         <div key={comment.id} className="p-6 bg-white shadow-md rounded-lg">
           <p className="text-gray-600">{comment.body}</p>
           <h4 className="mt-4 font-bold">{comment.email}</h4>
         </div>
        
     ))}
</div>
           
          </div>
      
      </section>

    )
}