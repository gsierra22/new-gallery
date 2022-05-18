import { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props){

    return(
        <div>
            <h1>GalleryList</h1>
            <h3>{JSON.stringify(props)}</h3>
            <GalleryItem/>
        </div>
    )
}

export default GalleryList