/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Service_intro_data from "./Service_intro_data";


const Service_top_section = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Service_intro_data
              name="Trusted travel"
              img=''
              des="Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum,"
            ></Service_intro_data>
          </div>
          <div className="col-md-4">
            <Service_intro_data
              name="Worldwide guide"
              img=''
              des="Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum,"
            ></Service_intro_data>
          </div>
          <div className="col-md-4">
            <Service_intro_data
              name="Travel experience"
              img=''
              des="Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum,"
            ></Service_intro_data>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_top_section;
