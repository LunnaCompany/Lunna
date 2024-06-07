import React from "react";
import "./CardSideNotification.css";
export default function CardSideNotification({ Photo, Title, Text }) {
   return (
      <div className="CardSideNotification">
         <div className="CardSideNotification-Border">
            <div className="CardSideNotification-Photo">
              <img src={Photo} alt="Photo Notification"/>
            </div>
            <div className="CardSideNotification-TextNotification">
               <p>{Title}</p>
               <p>{Text}</p>
            </div>
         </div>
      </div>
   );
}
