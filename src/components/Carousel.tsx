import { FC } from "react";
import Image from "next/image";

// 1st chunk
import image1 from "assets/img/0.png";
import image2 from "assets/img/1.png";
import image3 from "assets/img/2.png";
import image4 from "assets/img/3.png";
import image5 from "assets/img/4.png";
import image6 from "assets/img/5.png";
import image7 from "assets/img/6.png";
import image8 from "assets/img/7.png";
// 2nd chunk
import image9 from "assets/img/8.png";
import image10 from "assets/img/9.png";
import image11 from "assets/img/10.png";
import image12 from "assets/img/11.png";
import image13 from "assets/img/12.png";
import image14 from "assets/img/13.png";
import image15 from "assets/img/14.png";
import image16 from "assets/img/15.png";
// 3rd chunk
import image17 from "assets/img/16.png";
import image18 from "assets/img/17.png";
import image19 from "assets/img/18.png";
import image20 from "assets/img/19.png";
import image21 from "assets/img/20.png";
import image22 from "assets/img/21.png";
import image23 from "assets/img/22.png";
import image24 from "assets/img/23.png";

const Carousel: FC = () => {
  return (
    <>
      {/* START 1ST PART */}
      <div className="w-full hidden absolute z-[-3] md:flex justify-evenly leaf">
        <div>
          <Image src={image1} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image2} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image3} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image4} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image5} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image6} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image7} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image8} alt="" width={180} height={180} />
        </div>
      </div>
      {/* END 1ST PART */}

      {/* START 2ND PART */}
      <div className="w-full hidden absolute z-[-3] md:flex justify-evenly fael">
        <div>
          <Image src={image9} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image10} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image11} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image12} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image13} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image14} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image15} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image16} alt="" width={180} height={180} />
        </div>
      </div>
      {/* END 2ND PART */}

      {/* START 3RD PART */}
      <div className="w-full hidden absolute z-[-3] md:flex justify-evenly leaf2">
        <div>
          <Image src={image17} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image18} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image19} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image20} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image21} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image22} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image23} alt="" width={180} height={180} />
        </div>
        <div>
          <Image src={image8} alt="" width={180} height={180} />
        </div>
      </div>
      {/* END 3RD PART */}
    </>
  );
};

export default Carousel;
