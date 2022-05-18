import { useEffect, useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function Body(props){

    return(
        <div>
            <h1>Body</h1>
            <h3>{JSON.stringify(props)}</h3>
            <GalleryList list={props.list}/>
        </div>
    )
}

export default Body