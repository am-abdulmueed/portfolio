 "use client";
 import React from "react";
 import { Card, CardBody } from "@nextui-org/react";
 import { motion } from "framer-motion";
 import { MdStar, MdVerified } from "react-icons/md";
 import { FaAndroid, FaWindows, FaApple, FaLinux } from "react-icons/fa";
 
 const RatingCard = ({ rating = 4.8, users = "20k+" }) => {
   const stars = Array.from({ length: 5 }).map((_, i) => (
     <MdStar key={i} className={i < Math.floor(rating) ? "text-yellow-400" : "text-yellow-300"} size={18} />
   ));
 
   return (
     <motion.div
       initial={{ opacity: 0, y: 6 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.4 }}
     >
       <Card className="bg-background/40 backdrop-blur-md border-small border-default-200/50 shadow-lg rounded-2xl max-w-sm relative overflow-hidden">
         <motion.div
           className="absolute inset-0 pointer-events-none"
           initial={{ opacity: 0 }}
           whileHover={{ opacity: 1 }}
           transition={{ duration: 0.3 }}
         >
           <motion.div
             className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-white/10 to-transparent"
             initial={{ x: "-120%" }}
             whileHover={{ x: "250%" }}
             transition={{ duration: 0.9 }}
           />
         </motion.div>
         <CardBody className="p-4 gap-3">
           <div className="flex items-center gap-2">
             <span className="text-lg font-semibold">{rating.toFixed(1)}</span>
             <div className="flex">{stars}</div>
             <MdVerified className="text-primary" size={18} />
             <span className="text-sm text-default-500 ml-1">{users} users</span>
           </div>
           <div className="flex items-center gap-3 text-default-500">
             <span className="text-xs">Platforms</span>
             <FaAndroid size={16} className="text-green-500" />
             <FaApple size={16} className="text-default-900 dark:text-white" />
             <FaWindows size={16} className="text-blue-500" />
             <FaLinux size={16} className="text-yellow-600" />
           </div>
         </CardBody>
       </Card>
     </motion.div>
   );
 };
 
 export default RatingCard;
