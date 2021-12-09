import {React} from "react";
import {NukaCarousel} from "../carousel/carousel.js";
import moment from 'moment';

import './instagram.css';

export const Instagram = ({formInfo}) => {

  const date = formInfo.start;
  const now = (moment().minutes(0).seconds(0).add(1,'hours')).toDate(); // 3:00:00

  return (
    <>
      <div className="background-fb">
        <div className="info-brand-i">
            <div className="logo-brand"></div>
            <div className="text-brand">
            <h4 className="user-brand">Anónimo</h4>
            </div>
        </div>
        <div>
          <NukaCarousel urls={formInfo.urls}/>
        </div>
        <p className="des-p-i">
          <code className="description-content-i">
            {formInfo.notes}
          </code>
        </p>
        <span className="date-brand-post-i" id="date-post">
          {
            date ? (
              date.getDate() + " / " + (date.getMonth()+1) + " / " + date.getFullYear() + "  -  " + date.getHours()+":"+
              date.getMinutes()
            ):(
              now.getDate() + " / " + (now.getMonth()+1) + " / " + now.getFullYear() + "  -  " + now.getHours()+":"+
              now.getMinutes()
            )
          }
        </span>
      </div>
    </>
  );
};