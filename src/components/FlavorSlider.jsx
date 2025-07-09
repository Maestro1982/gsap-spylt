import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { flavorlists } from '../constants';

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.flavor-section',
          start: '2% top',
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to('.flavor-section', {
        x: `-${scrollAmount + 1500}px`,
        ease: 'power1.inOut',
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top top',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    titleTl
      .to('.first-text-split', {
        xPercent: -30,
        ease: 'power1.inOut',
      })
      .to(
        '.flavor-text-scroll',
        {
          xPercent: -22,
          ease: 'power1.inOut',
        },
        '<'
      )
      .to(
        '.second-text-split',
        {
          xPercent: -10,
          ease: 'power1.inOut',
        },
        '<'
      );
  });
  return (
    <div ref={sliderRef} className='slider-wrapper'>
      <div className='flavors'>
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 w-96 md:w-[90vw] lg:w-[50vw] h-80 md:h-[50vh] lg:h-[70vh] flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt='background color'
              className='absolute bottom-0'
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt='drink image'
              className='drinks'
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt='color element'
              className='elements'
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlavorSlider;
