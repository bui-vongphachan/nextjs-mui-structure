"use client";

import Image from "next/image";
import { useRef } from "react";
import { CarouselContainer, ImageContainer } from "./style";

export const Carousel = (props: { images: string[] }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <CarouselContainer>
      <div ref={ref}>
        {props.images.map((image, i) => (
          <ImageContainer key={i}>
            <Image fill src={image} alt="reviewer" sizes="100%" />
          </ImageContainer>
        ))}
      </div>
    </CarouselContainer>
  );
};
