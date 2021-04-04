import React from "react";

const Frase = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{props.frasesBreakingBad.author}</h5>
              <p className="card-text">
              {props.frasesBreakingBad.quote}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frase;
