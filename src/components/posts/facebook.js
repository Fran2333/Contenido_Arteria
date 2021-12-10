import {React} from "react";
import {NukaCarousel} from "../carousel/carousel.js";
import moment from 'moment';

import './facebook.css';

export const Facebook = ({formInfo}) => {

  const date = formInfo.start;
  console.log(date);
  const now = (moment().minutes(0).seconds(0).add(1,'hours')).toDate(); // 3:00:00

  const urls = () => {
    if(formInfo.urls == 'undefined'){
      return [];
    }else{
      return formInfo.urls;
    }
  }

  return (
    <>
      <div className="background-fb">
        <div className="info-brand">
            <div className="logo-brand"></div>
            <div className="text-brand">
            <h4 className="user-brand">Anónimo</h4>
            <span className="date-brand-post" id="date-post">
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
        </div>
        <p className="description-content">
          {formInfo.notes}
        </p>
        <div>
          <NukaCarousel urls={urls}/>
        </div>
      </div>
    </>
  );
};