import React, { useState } from 'react';
import './breadbox.css';

function Breadbox() {
  const data = [
    {
      type: 'brand',
      technology: [
        {
          subject: 'html',
        },
        {
          subject: 'css',
        },
        {
          subject: 'bootstrap',
        },
      ],
    },
    {
      type: 'environment',
      technology: [
        {
          subject: 'javascript',
        },
        {
          subject: 'react',
        },
        {
          subject: 'typescript',
        },
      ],
    },
  ];

  const [breadbox, setBreadbox] = useState(data);

  const handlerBreadbox = (getItem) => {
    setBreadbox(
      breadbox.map((item) => ({
        ...item,
        technology: item.technology.filter(
          (subItems) => subItems.subject !== getItem
        ),
      }))
    );
  };

  return (
    <div className="breadBoxContainer">
      <h1>Bread-box</h1>
      {breadbox.map((item, index) => {
        return (
          <>
            {item.technology.length !== 0 && (
              <div className="breadbox" key={index}>
                <p className="type">{item.type}</p>
                <ul>
                  {item.technology.map((subItems, i) => {
                    return (
                      <li key={i}>
                        {subItems.subject}
                        <button
                          onClick={() => {
                            handlerBreadbox(subItems.subject);
                          }}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Breadbox;
