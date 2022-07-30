import React from 'react';
import ResultsCounterProps from "../../../Interfaces/ResultsCounterProps";

export default function ResultsCounter({title, value, description}:ResultsCounterProps) {

    return (
      <>
        {value && (
          <>
            <div className="resultsCounterContainer" title={description}>
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