import React, { useEffect, useState } from "react";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { ImageLoader, imagesSize } from "../../utils/ImageLoader";

const ImageSliderComponent = ({ data }) => {
  const imageWidth = imagesSize?.productDetailsImageWidth;
  const iconWidth = imagesSize?.productDetailsImageIconWidth;
  const imageHeight = imagesSize?.productDetailsImageHeight;

  const galleryOptions = {
    showNav: false,
    autoPlay: true,
    showPlayButton: false
  };

  const sliderImages = [
    {
      original: ImageLoader(data?.main_image, imageWidth, imageHeight),
      thumbnail: ImageLoader(data?.main_image, iconWidth, imagesSize?.productDetailsImageIconHeight),
    },
    ...(data?.other_images || []).map(item => ({
      original: ImageLoader(item, imageWidth, imageHeight),
      thumbnail: ImageLoader(item, iconWidth, imagesSize?.productDetailsImageIconHeight),
    })),
    ...(data?.variations || []).filter(item => item?.media !== null).map(item => ({
      original: ImageLoader(item.media, imageWidth, imageHeight),
      thumbnail: ImageLoader(item.media, iconWidth, imagesSize?.productDetailsImageIconHeight),
    })),
  ];




  return (
    <div>
      <div className='wrapper'>
        <ImageGallery items={sliderImages}  {...galleryOptions} />
      </div>
    </div>
  );
};

export default ImageSliderComponent;
