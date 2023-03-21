import React, { useState } from 'react';
import { Area } from './Location.js';


export const OnLocations = (props) => {
    const { locations } = props;  


    return (
        locations.map((location, i) =>
            <div key={i} >
                <div key={location.name}>
                    <div>{location.name}</div>
                </div>
                < Area url={location.url} />
            </div>
        )
    )


}



