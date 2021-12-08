import {React} from "react";
import {NukaCarousel} from "../carousel/carousel.js";

import './instagram.css';

export const Instagram = ({formInfo}) => {

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
        <p className="description-content-i">
          {formInfo.notes}
        </p>
        <span className="date-brand-post" id="date-post">

        </span>
      </div>
    </>
  );
};