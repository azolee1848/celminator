import React from 'react';
import ResultsCounterProps from "../../../Interfaces/ResultsCounterProps";

function ResultsCounter(props:ResultsCounterProps) {

    const value: number = props.value;
    const title: string = props.title;

    return (
      <>
        {value && (
          <>
            <div className="resultsCounterContainer">
              <div className="resultsCounterCircle">
                <span>{value}</span>
              </div>
              <span className="resultsCounterTitle">{title}</span>
            </div>
            <div className="break"></div>
          </>
        )}
      </>
    );
}

export default ResultsCounter;