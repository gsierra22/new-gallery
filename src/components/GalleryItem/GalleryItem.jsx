import { useEffect, useState } from "react";

function GalleryItem(props){

    return(
        <div>
            <h1>GalleryItem</h1>
            <h3>{JSON.stringify(props)}</h3>
        </div>
    )
}

export default GalleryItem