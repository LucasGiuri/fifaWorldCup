import React, { useEffect, useState } from 'react';

import Img from '../../components/image/image';
import ARG from '../../commons/images/ARG.png';
import COL from '../../commons/images/COL.png';
import BRA from '../../commons/images/BRA.png';
import ESP from '../../commons/images/ESP.png';
import JAP from '../../commons/images/JAP.png';
import MEX from '../../commons/images/MEX.png';
import BEL from '../../commons/images/BEL.png';
import GER from '../../commons/images/GER.png';
import CHI from '../../commons/images/CHI.png';
import SWE from '../../commons/images/SWE.png';
import FRA from '../../commons/images/FRA.png';
import URU from '../../commons/images/URU.png';
import CRO from '../../commons/images/CRO.png';
import ITA from '../../commons/images/ITA.png';
import ENG from '../../commons/images/ENG.png';
import RUS from '../../commons/images/RUS.png';

const flags = [
  { id: 'ARG', img: ARG },
  { id: 'COL', img: COL },
  { id: 'BRA', img: BRA },
  { id: 'ESP', img: ESP },
  { id: 'JAP', img: JAP },
  { id: 'MEX', img: MEX },
  { id: 'BEL', img: BEL },
  { id: 'GER', img: GER },
  { id: 'CHI', img: CHI },
  { id: 'SWE', img: SWE },
  { id: 'FRA', img: FRA },
  { id: 'URU', img: URU },
  { id: 'CRO', img: CRO },
  { id: 'ITA', img: ITA },
  { id: 'ENG', img: ENG },
  { id: 'RUS', img: RUS }
];

type Props = {
  src: String
}

function Image(props: Props) {
  const { src } = props;
  const [flag, setFlag] = useState('-');

  function getFlag(src) {
    const content = flags.find((flag) => flag.id === src);
    return content && content.img || '-';
  }

  useEffect(() => {
    setFlag(getFlag(src));
  }, [src]);


  return <Img src={flag} />
}

export default Image;
