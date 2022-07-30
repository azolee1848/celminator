import React from 'react';
import ResultsCounter from "./ResultsCounter";

export default function ResultsCounters({items}: any) {

    return (
        <>
            <div className={"resultsCountersContainer"}>
                {
                    items.map((item:any) => <ResultsCounter key={item.title} title={item.title} description={item.description} value={item.value}/>)
                }
            </div>
        </>
    );
}