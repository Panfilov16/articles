import React from 'react';

function Date(){
    return(
        Date.now().getFullYear()+"-"+Date.now().getMonth()+"-"+Date.now().getDate()
    )
}
export default Date;