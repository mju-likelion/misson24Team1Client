// import React, { useEffect, useState } from 'react';
import React from 'react';
import useSound from 'use-sound';

import mySound from '../sound/../../assets/sounds/schoolRing.MP3';

// import styles from './train.module.scss';

const index = () => {
  const [playSound] = useSound(mySound);
  return (
    <div>
      <button type="button" onClick={() => playSound()}>
        playSound
      </button>
    </div>
  );
};

export default index;
