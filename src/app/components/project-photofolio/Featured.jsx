import { useEffect, useRef, useState } from 'react';
import { PHOTOFOLIO_IMAGE_LIST } from '../../../utils/constants';

export default function Featured() {
  const images = [
    PHOTOFOLIO_IMAGE_LIST['nature1.jpg'],
    PHOTOFOLIO_IMAGE_LIST['nature2.jpg'],
    PHOTOFOLIO_IMAGE_LIST['nature3.jpg'],
    PHOTOFOLIO_IMAGE_LIST['nature4.jpg'],
    PHOTOFOLIO_IMAGE_LIST['nature5.jpg'],
  ];
  const timeoutRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(
      () => setIndex(index === images.length - 1 ? 0 : index + 1),
      2500
    );
  }, [index, images.length]);

  return (
    <div className="featured">
      <div
        className="featured-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img className="slide" key={index} src={image} alt="" />
        ))}
      </div>

      <div className="slider-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slider-dot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
