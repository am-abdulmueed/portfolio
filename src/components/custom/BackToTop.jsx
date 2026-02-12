 "use client";
 import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import { ArrowUp } from "lucide-react";
 
 const BackToTop = () => {
   const [visible, setVisible] = useState(false);
 
   useEffect(() => {
     const onScroll = () => {
       setVisible(window.scrollY > 300);
     };
     window.addEventListener("scroll", onScroll, { passive: true });
     onScroll();
     return () => window.removeEventListener("scroll", onScroll);
   }, []);
 
   const scrollTop = () => {
     try {
       window.scrollTo({ top: 0, behavior: "smooth" });
     } catch {
       window.scrollTo(0, 0);
     }
   };
 
   return (
     <motion.button
       aria-label="Back to top"
       onClick={scrollTop}
       initial={{ opacity: 0, scale: 0.8, y: 20 }}
       animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, y: visible ? 0 : 20 }}
       transition={{ type: "spring", stiffness: 300, damping: 24 }}
       className="fixed bottom-6 right-6 z-[70] rounded-full p-3 bg-background/70 backdrop-blur-md border border-default-200/60 shadow-lg hover:shadow-xl hover:scale-105 text-foreground"
     >
       <ArrowUp size={20} />
     </motion.button>
   );
 };
 
 export default BackToTop;
