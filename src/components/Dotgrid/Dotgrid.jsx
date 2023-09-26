import React, { useEffect, useState } from "react";
import anime from "animejs";

const Dotgrid = () => {
  const [timer, setTimer] = useState(null);
  const numberOfDots = 500;

  const animateAllDotsFromClickedWrapper = (clickedWrapper) => {
    const allDots = document.querySelectorAll(".dot-point");

    anime({
      targets: allDots,
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: "easeOutSine", duration: 250 },
        { value: 0.35, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [25, 20],
        from: clickedWrapper.dataset.index, // Start from the clicked wrapper's index
      }),
    });
  };

  // Function to start the animation every 30 seconds with a random dot as the starting point
  const startAnimationEvery30Seconds = () => {
    const allDots = document.querySelectorAll(".dot-point");
    const randomDotIndex = Math.floor(Math.random() * allDots.length); // Choose a random dot

    animateAllDotsFromClickedWrapper(
      allDots[randomDotIndex].closest(".dotgrid_dotWrapper__Qf5dS")
    );

    const newTimer = setTimeout(startAnimationEvery30Seconds, 20000); // Repeat every 30 seconds
    setTimer(newTimer);
  };

  // ComponentDidMount equivalent - Start the animation when the component mounts
  useEffect(() => {
    startAnimationEvery30Seconds();

    // ComponentWillUnmount equivalent - Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Event handler to start the animation from the clicked dot's wrapper
  const handleDotClick = (e) => {
    if (e.target.closest(".dotgrid_dotWrapper__Qf5dS")) {
      animateAllDotsFromClickedWrapper(
        e.target.closest(".dotgrid_dotWrapper__Qf5dS")
      );
    }
  };

  const dotElements = Array.from({ length: numberOfDots }, (_, index) => (
    <div className="dotgrid_dotWrapper__Qf5dS" data-index={index}>
      <div
        className="dotgrid_dot__JnSZ6 dot-point"
        data-index={index}
        key={index}
      />
    </div>
  ));

  return (
    <div
      style={{ gridTemplateColumns: "repeat(25, 21fr)" }}
      className="dotgrid_dotGrid__fIloK"
      onClick={handleDotClick}
    >
      {dotElements}
    </div>
  );
};

export default Dotgrid;
