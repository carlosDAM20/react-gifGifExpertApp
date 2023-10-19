import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImges] = useState([]);
    const [isLoading, setIsloading] = useState([true]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImges(newImages);
    setIsloading(false);
  };

  useEffect(() => {
    getGifs(category);
    getImages();
  }, []);

    return {
        images: images,
        isLoading
    }
  
}