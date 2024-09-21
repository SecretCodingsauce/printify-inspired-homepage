import { useState,useEffect } from 'react';
import axios from 'axios';
import ProductsSection from './HomeComponents/ProductsSection';
import WhyChooseUs from './HomeComponents/WhyChooseUs';
import Reviews from './HomeComponents/Reviews';
import Navbar from './HomeComponents/Navbar';
import HeroSection from './HomeComponents/HeroSection';
import Footer from './HomeComponents/Footer';


export default function HomePage() {

    const [comments,setComments]=useState([])


    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res=>setComments(res.data))
       
    },[])

    const [isMenu, setisMenu] = useState(false);

    const toggleMenu = () => {
        setisMenu(!isMenu);
    };

    return (
        <div className="bg-gray-100">

            <Navbar isMenu={isMenu} toggleMenu={toggleMenu} />
            <HeroSection />
            <ProductsSection />
            <WhyChooseUs />
            <Reviews comments={comments} />
            <Footer />

           
        </div>
    );
}
