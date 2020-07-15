import React from "react";
import "./Home.css";
import { Amplify } from 'aws-amplify';
import config from './config';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    </div>
  );
}