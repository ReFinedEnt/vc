import Image from 'next/image';
import type { FC } from 'react';
import yoursolanabro from '../../assets/img/yoursolanabro.png';
const YourSolanaBro: FC = () => (
  <div className="absolute left-0 w-[320px] h-[320px] z-[999]" id="yoursolanabro">
    <Image
      src={yoursolanabro}
      layout="fill"
      objectFit="contain"
      alt="your solana bro"
      id="yoursolanabro"
    />
  </div>
);

export default YourSolanaBro;
