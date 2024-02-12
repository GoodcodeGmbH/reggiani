import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Carousel({ photos }: { photos: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {photos.map((photo, i) => (
          <div key={i} className="embla__slide">
            <img
              src={photo}
              alt=""
              className="w-full aspect-[1.5] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
