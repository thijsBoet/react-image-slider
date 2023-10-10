import { useState } from 'react';
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react';


type ImageSliderProps = {
  imageUrls: string[]
}

const ImageSlide = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <section>
      <img src={imageUrls[imageIndex]} alt="" />
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRight />
      </button>
    </section>
  )
}

export default ImageSlide