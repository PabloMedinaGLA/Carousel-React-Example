import { useEffect, useState } from 'react';
import axios from 'axios';

// https:\/\/purr.objects-us-east-1.dream.io\/i\/Uf7by.jpg

function ImageSlider() {
    const [cats, setCat] = useState([]);


    const getCats = async () => {
        const url = 'http://localhost:3000/images';
        const result = await axios.get(url);


        setCat(result.data)
        console.log(cats)
    }

    getCats();




    return cats;
}

export default ImageSlider;