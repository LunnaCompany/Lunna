import React from "react";
import "./SideNotification.css";
import HumanIcon from "./img/Image-60.png";
//
import { MdOutlineNotifications } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { motion } from "framer-motion";
//
import CardSideNotification from "./CardSideNotification/CardSideNotification";
//
export default function SideNotification({ setNotificationOverlay }) {
   //
   const dropIn = {
      hidden: { y: "-100vh", opacity: 0 },
      visible: {
         y: "0",
         opacity: 1,
         transition: {
            duration: 0.5,
            type: "spring,",
            damping: 15,
            stiffness: 500,
         },
      },
      exit: { y: "100vh", opacity: 0 },
   };

   //
   return (
      <div className="SideNotification-Background">
         <motion.div
            className="SideNotification"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <div className="SideNotification-SectionIcons">
               <div className="SideNotification-Icon">
                  <MdOutlineNotifications size="28" color="black" />
               </div>
               <div
                  className="SideNotification-Icon"
                  onClick={() => setNotificationOverlay(false)}
               >
                  <MdArrowBackIosNew
                     size="28"
                     className="SideNotifications-RotateIcon"
                     color="black"
                  />
               </div>
            </div>
            <div className="SideNotification-Cards">
               <CardSideNotification
                  Photo={HumanIcon}
                  Title="Título"
                  Text="Descrição da notificação"
               />
               <CardSideNotification
                  Photo={HumanIcon}
                  Title="Título"
                  Text="Descrição da notificação"
               />
               <CardSideNotification
                  Photo={HumanIcon}
                  Title="Título"
                  Text="Descrição da notificação"
               />
               <CardSideNotification
                  Photo={HumanIcon}
                  Title="Título"
                  Text="Descrição da notificação"
               />
            </div>
         </motion.div>
      </div>
   );
}
