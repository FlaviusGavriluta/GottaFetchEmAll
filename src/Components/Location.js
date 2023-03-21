import React from 'react';


export const Area = (props) => {

    const { url } = props;

    const showEncounterHandler = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.results)
            console.log(data.areas[1].url)
        } catch (e) {
            console.error(e);
        }
    }


    return <button onClick={showEncounterHandler}>Show Encounter</button>
}
