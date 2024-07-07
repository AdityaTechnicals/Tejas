import React from 'react';
import './Container.css';
import Button from './Button';

const Container = () => {
  return (
    <div className="container">
      <div className="left">
        <a href="/reportscan.html">
          <Button id="bone">
            <h1>Report <br /> Scan</h1>
          </Button>
        </a>
      </div>
      <div className="right">
        <a href="/nutritioncheck.html">
          <Button id="btw">
            <h1>Nutrition <br /> Check</h1>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Container;
