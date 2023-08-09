import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Tag from "../components/Tag";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {

const[gif,setGif] = useState('');
const [loading,setLoading] = useState('');

async function fetchData(tag){
    setLoading(true);

//select url according to tag
const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
//fetch data from api

const imageSource = data.data.images.downsized_large.url;
//path of gif

//now link imagesource with gif
setGif(imageSource);
setLoading(false);

}

useEffect( () => {
    fetchData();
},[])

//we need this in our random.js & Tag.js so we have to return this
return{gif,loading,fetchData};

}

export default useGif;
