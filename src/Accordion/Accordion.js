import React, { useState } from 'react';
import './Accordion.css';

const data = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    content:
      'Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.',
  },
  {
    title: 'Dignissimos sequi architecto?',
    content:
      'Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.',
  },
  {
    title: 'Voluptas praesentium facere?',
    content:
      'Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.',
  },
];

function Accordion() {
  const [clicked, setClicked] = useState(-1);
  const onToggle = (index) => {
    setClicked((previousState) => (previousState === index ? -1 : index));
  };

  return (
    <div className="accordionContainer">
      <h1>Accordion</h1>
      <div className="accordionWrapper">
        <div className="accordion">
          {data.map((ele, index) => (
            <div className="accordionContent" key={index}>
              <div className="title" onClick={() => onToggle(index)}>
                <h3>{ele.title}</h3>
                <span className="controller">
                  {clicked === index ? '-' : '+'}
                </span>
              </div>
              <div className={clicked === index ? 'open' : 'content'}>
                {ele.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
