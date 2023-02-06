import React, { useState } from 'react';
import './Stepper.css';

const data = [
  {
    name: 'Erik Erickson',
    position: 'Initial Requester',
  },
  {
    name: 'Sally Summers',
    position: 'Supervisor',
  },
  {
    name: 'Matthew Devaney',
    position: 'Manager',
  },
  {
    name: 'Executive Team',
    position: 'ET',
  },
  {
    name: 'Executive Team',
    position: 'ET',
  },
];
const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepHandler = (index) => {
    setActiveStep(index);
  };
  return (
    <div className="stepperContainer">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="subContainer"
            onClick={() => {
              stepHandler(index);
            }}
          >
            <div className="img">
              <div
                className={activeStep >= index ? 'checkBox active' : 'checkBox'}
              ></div>
            </div>
            <div className="stepperContent">
              <span>{item.name}</span>
              <p>{item.position}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
