import React from "react";
import Container from "./Container";

const ToggleButtons = ({
  toggleStatus,
  setToggleStatus,
  setData,
  pendingData,
  submittedData,
  reviewedData,
  issues,
}) => {
  const btns = ["All", "Pending", "Submitted", "Completed"];

  return (
    <div>
      <Container>
        <div className="text-right mb-8">
          {btns.map((btn, ind) => {
            return (
              <button
                onClick={() => {
                  setToggleStatus(btn);
                  ind == 0 && setData(issues);
                  ind == 1 && setData(pendingData);
                  ind == 2 && setData(submittedData);
                  ind == 3 && setData(reviewedData);
                }}
                className={`toggle-btn 
                                    ${toggleStatus == btn && "active"}
                                    ${ind == 0 && "rounded-l-md"}
                                    ${ind == btns.length - 1 && "rounded-r-md"}
                                `}
              >
                {btn}
              </button>
            );
          })}

          {/* <button onClick={()=> setToggleStatus("All")} className={`toggle-btn ${toggleStatus == "All" && "active"}`}>All</button>

                  <button onClick={()=> setToggleStatus("Pending")} className={`toggle-btn ${toggleStatus == "Pending" && "active"}`}>Pending</button>

                  <button onClick={()=> setToggleStatus("Submitted")} className={`toggle-btn ${toggleStatus == "Submitted" && "active"}`}>Submitted</button>

                  <button onClick={()=> setToggleStatus("Reviewed")} className={`toggle-btn ${toggleStatus == "Reviewed" && "active"}`}>Reviewed</button> */}
        </div>
      </Container>
    </div>
  );
};

export default ToggleButtons;
