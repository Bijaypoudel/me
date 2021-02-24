import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

function Project() {


    function Hero({ children }) {
        return (
          <div className="hero">
            <div className="hero-body">{children}</div>
          </div>
        );
      }
  return (
    <div className="main">
        
        <Hero>
          <div className="container">
            <h1 id='Project_title'>PROJECTS</h1>
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}



function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}


function Info() {
    return (
      <div className="info">
        Springy cards from{' '}
        <a target="_blank" href="https://bit.ly/382KSdo">
          divjoy.com
        </a>
        <div className="notice">(best viewed at larger screen width)</div>
      </div>
    );
  }

const cards = [
  {
    title: 'University Student Advising System',
    description:
    "Developed intuitive Advising System for university of Louisiana Monroe capable of handling 9000 active users[React JS, Node JS, Express JS, MYSQL]",
    image: 'http://ec2-3-135-197-150.us-east-2.compute.amazonaws.com/ulm.png',
    imageRatio: 784 / 1016
  },
  {
    title: 'Dynamic & Responsive Portfolio Website',
    description:
    "Currently, building a fully responsive and interactive personal portfolio website",
    image: 'https://i.imgur.com/MVtoeFu.png',
    imageRatio: 839 / 1133
  }];
export default Project;