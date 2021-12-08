import {React} from "react";
import {NukaCarousel} from "../carousel/carousel.js";

import './facebook.css';

export const Facebook = ({formInfo}) => {

  return (
    <>
      <div className="background-fb">
        <div className="info-brand">
            <div className="logo-brand"></div>
            <div className="text-brand">
            <h4 className="user-brand">Anónimo</h4>
            <span className="date-brand-post" id="date-post">

            </span>
            </div>
        </div>
        <p className="description-content">
          {formInfo.notes}
        </p>
        <div>
          <NukaCarousel urls={formInfo.urls}/>
        </div>
      </div>
    </>
  );
};