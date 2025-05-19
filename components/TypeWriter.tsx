"use client";
import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
    return (
<Typewriter
options={{
    autoStart: true,
    loop: true,
    delay: 75,
    cursor: '|',
    cursorClassName: 'typewriter-cursor',}}   
  onInit={(typewriter) => {
    typewriter.typeString('Tombstone Saddles')
      .pauseFor(2500)
      .deleteChars(7)
        .typeString('Cones')    
        .pauseFor(2500)
        .deleteAll()
        .typeString('Seasonal Arrangements')
        .pauseFor(2500)
        .deleteAll()
        .typeString('& Custom Made Orders')
      .deleteAll()
      .start();
  }}
/>
    );
}
