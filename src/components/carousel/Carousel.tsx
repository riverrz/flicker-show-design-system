import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowContainer,
  CarouselContainer,
  CarouselItem,
  Slider,
  SliderPeek,
} from './Carousel.styles';
import { useNumberOfItemsVisible } from './Carousel.hooks';

interface Props {
  children: React.ReactNode;
}

export const Carousel = (props: Props) => {
  const [page, setPage] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const numberOfItemsVisible = useNumberOfItemsVisible();
  const totalNumberOfItems = React.Children.toArray(props.children).length;

  const totalPages = Math.ceil(totalNumberOfItems / numberOfItemsVisible);

  useEffect(() => {
    const firstElement = document.querySelector<HTMLDivElement>(
      `[data-item-number="0"]`
    );
    scrollToElement(firstElement);
  }, [])

  const scrollToElement = (element: HTMLElement | null) => {
    if (!element) {
      return;
    }
    sliderRef.current?.scroll({
      left: element.offsetLeft,
      behavior: 'smooth',
    });
  };

  const handleNavigation = (direction: 'left' | 'right') => {
    switch (direction) {
      case 'left': {
        const newPage = Math.max(page - 1, 1)
        const elementToScrollInView = document.querySelector<HTMLDivElement>(
          `[data-item-number="${numberOfItemsVisible * (newPage - 1)}"]`
        );
        scrollToElement(elementToScrollInView);
        setPage(newPage);
        break;
      }
      case 'right': {
        const newPage = Math.min(page + 1, totalPages);
        const elementToScrollInView = document.querySelector<HTMLDivElement>(
          `[data-item-number="${numberOfItemsVisible * page}"]`
        );
        scrollToElement(elementToScrollInView);
        setPage(newPage);
        break;
      }
    }
  };

  return (
    <CarouselContainer>
      {page > 1 && (
        <ArrowContainer left onClick={() => handleNavigation('left')}>
          {'<'}
        </ArrowContainer>
      )}
      <Slider ref={sliderRef}>
        <SliderPeek>
          {React.Children.map(props.children, (child, i) => {
            return <CarouselItem data-item-number={i}>{child}</CarouselItem>;
          })}
        </SliderPeek>
      </Slider>
      {page < totalPages && (
        <ArrowContainer right onClick={() => handleNavigation('right')}>
          {'>'}
        </ArrowContainer>
      )}
    </CarouselContainer>
  );
};
