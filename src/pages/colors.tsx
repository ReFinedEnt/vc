import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BasicsView } from "../views";
// Utils
import { toHSL } from "utils/colors.utils";
import { HSLToHex } from "utils/colors.utils";
// Types
import { HSL } from "utils/types.utils";

const Colorful: NextPage = (props) => {
  const randH: number = Math.floor(Math.random() * 360);
  const randS: number = Math.floor(Math.random() * 100);
  const randL: number = Math.floor(Math.random() * 100);
  const randHSLObj: HSL = {
    h: randH,
    s: randS,
    l: randL,
  };
  const randHSL = "hsl(" + randH + ", " + randS + "%, " + randL + "%)";
  console.log(randHSL);
  const [value, setValue] = useState(0);

  const [colorOne, setColorOne] = useState(0);
  const [hexaOne, setHexaOne] = useState(String);
  const [hslOne, setHslOne] = useState(String);

  const [colorTwo, setColorTwo] = useState(0);
  const [hexaTwo, setHexaTwo] = useState(String);
  const [hslTwo, setHslTwo] = useState(String);

  const [colorThree, setColorThree] = useState(0);
  const [hexaThree, setHexaThree] = useState(String);
  const [hslThree, setHslThree] = useState(String);

  const [colorFour, setColorFour] = useState(0);
  const [hexaFour, setHexaFour] = useState(String);
  const [hslFour, setHslFour] = useState(String);

  const [colorFive, seColorFive] = useState(0);
  const [hexaFive, setHexaFive] = useState(String);
  const [hslFive, setHslFive] = useState(String);

  const [colorSix, setcolorSix] = useState(0);
  const [hexaSix, setHexaSix] = useState(String);
  const [hslSix, setHslSix] = useState(String);

  const [saturation, setSaturation] = useState(0);
  const [light, setLight] = useState(0);

  const hslStr = ({ h, s, l }: HSL) => {
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
  };

  useEffect(() => {
    // ONE
    let colorOne: number = value;
    setColorOne(colorOne);
    let hslOne: HSL = {
      h: colorOne,
      s: saturation,
      l: light,
    };
    const hslStrOne = hslStr(hslOne);
    setHslOne(hslStrOne);
    setHexaOne(HSLToHex(hslOne));
    console.log(colorOne);
    // TWO
    let colorTwo: number = colorOne + 180;
    setColorTwo(colorTwo);
    let hslTwo: HSL = {
      h: colorTwo,
      s: saturation,
      l: light,
    };
    const hslStrTwo = hslStr(hslTwo);
    setHslTwo(hslStrTwo);
    setHexaTwo(HSLToHex(hslTwo));
    // Three
    let colorThree: number = colorOne + 60;
    setColorThree(colorThree);
    let hslThree: HSL = {
      h: colorThree,
      s: saturation,
      l: light,
    };
    const hslStrThree = hslStr(hslThree);
    setHslThree(hslStrThree);
    setHexaThree(HSLToHex(hslThree));
    // Four
    let colorFour: number = colorThree + 180;
    setColorFour(colorFour);
    let hslFour: HSL = {
      h: colorFour,
      s: saturation,
      l: light,
    };
    const hslStrFour = hslStr(hslFour);
    setHslFour(hslStrFour);
    setHexaFour(HSLToHex(hslFour));
    let colorFive: number = colorThree + 60;
    // FIVE
    seColorFive(colorFive);
    let hslFive: HSL = {
      h: colorFive,
      s: saturation,
      l: light,
    };
    const hslStrFive = hslStr(hslFive);
    setHslFive(hslStrFive);
    setHexaFive(HSLToHex(hslFive));
    // SIX
    let colorSix: number = colorFive + 180;
    setcolorSix(colorSix);
    let hslSix: HSL = {
      h: colorSix,
      s: saturation,
      l: light,
    };
    const hslStrSix = hslStr(hslSix);
    setHslSix(hslStrSix);
    setHexaSix(HSLToHex(hslSix));
  }, [
    value,
    saturation,
    light,
    hslOne,
    hslTwo,
    hslThree,
    hslFour,
    hslFive,
    hslSix,
  ]);

  return (
    <>
      <Head>
        <title>Colors Theorycraft</title>
        <meta name="description" content="Colors Theorycraft" />
        <meta property="og:title" content="🏗️ Colors Theorycraft 👷" />
        <meta property="og:site_name" content="krk.finance/colors" />
        <meta property="og:url" content="https://krk.finance/colors" />
        <meta property="og:description" content="We learn & buidl stuff." />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/theorycraft.png"
        />
      </Head>
      <div className="container sm:mb-44 lg:mb-44 w-full flex flex-col grow align-center items-center z-[50]">
        <h1 className="py-2 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF] w-100">
          Color Theorycraft
        </h1>
        <div className="grid grid-rows-2 grid-flow-col gap-2">
          {/* COLOR #1 */}
          <div
            className={`sm:w-[15vw] lg:w-[10vw] lg:h-[10vw] border-2 border-white`}
            style={{
              backgroundColor: `${hslOne}`,
            }}
          >
            <div
              className={`border-2 border-red-300 inline text-xl pozey font-bold`}
              style={{
                color: `${hslTwo}`,
              }}
            >
              01
            </div>
            <div
              className="pozey"
              style={{
                color: `${hslOne}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              <input
                type="text"
                name="hexaFive"
                id="hexaFive"
                defaultValue={hexaOne}
                className="w-full text-center"
                onChange={(event) => {
                  try {
                    console.log(`input value : ${event.target.value}`);
                    const eventHsl = toHSL(event.target.value);
                    console.log(eventHsl);
                    const eventHslSrt = hslStr(eventHsl);
                    console.log(eventHslSrt);
                    setHslOne(eventHslSrt);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </div>
          </div>
          {/* COLOR #2 */}
          <div
            className="sm:w-[15vw] lg:w-[10vw] lg:h-[10vw] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorTwo}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `${hslOne}`,
              }}
            >
              02
            </div>
            <div
              className="pozey"
              style={{
                color: `${hslTwo}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              <input
                type="text"
                name="hexaTwo"
                id="hexaTwo"
                defaultValue={hexaTwo}
                className="w-full text-center"
                onChange={(event) => {
                  try {
                    console.log(`input value : ${event.target.value}`);
                    const eventHsl = toHSL(event.target.value);
                    console.log(eventHsl);
                    const eventHslSrt = hslStr(eventHsl);
                    setHslTwo(eventHslSrt);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </div>
          </div>
          {/* COLOR #3 */}
          <div
            className="sm:w-[15vw] lg:w-[10vw] lg:h-[10vw] border-2 border-white"
            style={{
              backgroundColor: `${hslThree}`,
            }}
          >
            <div
              className="border-2 border-red-300 inline text-xl pozey font-bold"
              style={{
                color: `${hslFour}`,
              }}
            >
              03
            </div>
            <div
              className="pozey"
              style={{
                color: `${hslFour}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              <input
                type="text"
                name="hexaThree"
                id="hexaThree"
                defaultValue={hexaThree}
                className="w-full text-center"
              />
            </div>
          </div>
          {/* COLOR #4 */}
          <div
            className="sm:w-[15vw] lg:w-[10vw] lg:h-[10vw] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorFour}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `${hslThree}`,
              }}
            >
              04
            </div>
            <div
              className="pozey"
              style={{
                color: `${hslThree}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              <input
                type="text"
                name="hexaFour"
                id="hexaFour"
                defaultValue={hexaFour}
                className="w-full text-center"
              />
            </div>
          </div>
          {/* COLOR #5 */}
          <div
            className="sm:w-[15vw] lg:w-[10vw] lg:h-[10vw] border-2 border-white"
            style={{
              backgroundColor: `${hslFive}`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `${hslSix}`,
              }}
            >
              05
            </div>
            <div
              className="pozey"
              style={{
                color: `${hslFive}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              <input
                type="text"
                name="hexaFive"
                id="hexaFive"
                defaultValue={hexaFive}
                className="w-full text-center"
              />
            </div>
          </div>
          {/* COLOR #6 */}
          <div
            className="sm:w-[15vw] lg:w-[10vw] lg:h-[10vw] border-2 border-white"
            style={{
              backgroundColor: `${hslSix}`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `${hslFive}`,
              }}
            >
              06
            </div>
            <div
              className="pozey"
              style={{
                color: `${hslFive}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              <input
                type="text"
                name="hexaSix"
                id="hexaSix"
                defaultValue={hexaSix}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>
        {/* INPUT */}
        <div className="z-[50] w-full mt-5 max-w-[960px]">
          <p>Hue :</p>
          <input
            type="range"
            min="0"
            max="360"
            defaultValue={value}
            onChange={(event) => {
              console.log(event.target.value);
              setValue(parseInt(event.target.value));
            }}
            className="range ranger-accent bg-white z-[9999]"
            id="input"
          />
          <p>Saturation :</p>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={saturation}
            onChange={(event) => {
              console.log(event.target.value);
              setSaturation(parseInt(event.target.value));
            }}
            className="range ranger-accent bg-white z-[9999]"
            id="input"
          />
          <p>Lightness :</p>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={light}
            onChange={(event) => {
              console.log(event.target.value);
              setLight(parseInt(event.target.value));
            }}
            className="range ranger-accent bg-white z-[9999]"
            id="input"
          />
        </div>
      </div>
    </>
  );
};

export default Colorful;
