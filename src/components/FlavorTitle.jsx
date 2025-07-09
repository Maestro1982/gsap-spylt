import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create('.first-text-split h1', {
      type: 'chars',
    });

    const secondTextSplit = SplitText.create('.second-text-split h1', {
      type: 'chars',
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 30%',
      },
    });

    gsap.to('.flavor-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 10%',
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 1%',
      },
    });
  });
  return (
    <div className='general-title col-center h-full gap-16 2xl:gap-32 xl:gap-24'>
      <div className='overflow-hidden py-3 2xl:py-0 first-text-split'>
        <h1>We have 6</h1>
      </div>
      <div
        style={{
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        }}
        className='flavor-text-scroll'
      >
        <div className='bg-mid-brown pb-5 pt-3 2xl:pt-0 px-3 2xl:px-5'>
          <h2 className='text-milk'>Freaking</h2>
        </div>
      </div>
      <div className='overflow-hidden py-3 2xl:py-0 second-text-split'>
        <h1>Delicious flavors</h1>
      </div>
    </div>
  );
};
export default FlavorTitle;
