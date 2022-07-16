import React from 'react';
import ResultsCounter from "./ResultsCounter";

function ResultsCounters() {
    return (
        <div className={"resultsCountersContainer"}>
            <ResultsCounter title={"Akaraterő"} value={5}/>
            <ResultsCounter title={"Kitartás"} value={2}/>
            <ResultsCounter title={"Stratégia"} value={9}/>
            <ResultsCounter title={"Újítás"} value={3}/>
            <ResultsCounter title={"Gyorsaság"} value={4}/>
        </div>
    );
}

export default ResultsCounters;