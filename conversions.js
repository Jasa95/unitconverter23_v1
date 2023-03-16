"use strict";

//`feetToM( feet )` – modtager fod, regner om til meter  
//`mToFeet( meters )` – modtager meter, regner om til fod

function feetToM ( feet ) {
    const FEETPERM = 0.3048;
    return feetToM * FEETPERM;
}

function mToFeet ( meters ) {
    const METERSPERF = 3.2808;
    return meters * METERSPERF;
}