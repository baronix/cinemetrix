import { FaArrowAltCircleUp } from "react-icons/fa" 
import { useState } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
            if (scrolled > 300){ 
                setVisible(true) 
            }  
            else if (scrolled <= 300){ 
                setVisible(false) 
            } 
    }; 

    const scrollToTop = () =>{ 
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
        }); 
  }; 

    window.addEventListener('scroll', toggleVisible);

  return (
    <div className="fixed text-[#e0a368] w-[100%] opacity-85 right-[-80%] lg:right-[-90%] z-90 lg:bottom-[50px] bottom-[35px] cursor-pointer">
        <FaArrowAltCircleUp
        className="lg:hover:scale-105 duration-300 shadow-lg shadow-black rounded-[50%] mix-blend-exclusion"
        size={60} 
        onClick={scrollToTop}  
        style={{display: visible ? 'inline' : 'none'}}
        />
    </div>
  )
}

export default BackToTop