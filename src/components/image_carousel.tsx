import { ImageCarouselProps } from "@/types/components/image_carousel";

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div>
      <div className="carousel rounded-2xl">
        {images.map((image, index) => (
          <div key={index} id={`${index}`} className="carousel-item w-full">
            <img src={image} className="w-full" alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center py-2 gap-2">
        {images.map((image, index) => (
          <a key={index} href={`#${index}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
