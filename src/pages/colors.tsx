import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BasicsView } from "../views";

const Colorful: NextPage = (props) => {
  const randH = Math.floor(Math.random() * 360);
  const randS = Math.floor(Math.random() * 100);
  const randL = Math.floor(Math.random() * 100);

  const [value, setValue] = useState(0);

  const [colorOne, setColorOne] = useState(0);
  const [hexaOne, setHexaOne] = useState(String);
  const [hslOne, setHslOne] = useState(Object);

  const [colorTwo, setColorTwo] = useState(0);
  const [hexaTwo, setHexaTwo] = useState(String);
  const [hslTwo, setHslTwo] = useState(Object);

  const [colorThree, setColorThree] = useState(0);
  const [hexaThree, setHexaThree] = useState(String);
  const [hslThree, setHslThree] = useState(Object);

  const [colorFour, setColorFour] = useState(0);
  const [hexaFour, setHexaFour] = useState(String);
  const [hslFour, setHslFour] = useState(Object);

  const [colorFive, seColorFive] = useState(0);
  const [hexaFive, setHexaFive] = useState(String);
  const [hslFive, setHslFive] = useState(Object);

  const [colorSix, setcolorSix] = useState(0);
  const [hexaSix, setHexaSix] = useState(String);
  const [hslSix, setHslSix] = useState(Object);

  const [saturation, setSaturation] = useState(0);
  const [light, setLight] = useState(0);

  useEffect(() => {
    // ONE
    let colorOne: number = value;
    setColorOne(colorOne);
    let hslOne: { h: number; s: number; l: number } = {
      h: colorOne,
      s: saturation,
      l: light,
    };
    setHslOne(hslOne);
    setHexaOne(HSLToHex(hslOne));
    console.log(colorOne);
    // TWO
    let colorTwo: number = colorOne + 180;
    setColorTwo(colorTwo);
    let hslTwo: { h: number; s: number; l: number } = {
      h: colorTwo,
      s: saturation,
      l: light,
    };
    setHslTwo(hslTwo);
    setHexaTwo(HSLToHex(hslTwo));
    // Three
    let colorThree: number = colorOne + 60;
    setColorThree(colorThree);
    let hslThree: { h: number; s: number; l: number } = {
      h: colorThree,
      s: saturation,
      l: light,
    };
    setHslThree(hslThree);
    setHexaThree(HSLToHex(hslThree));
    // Four
    let colorFour: number = colorThree + 180;
    setColorFour(colorFour);
    let hslFour: { h: number; s: number; l: number } = {
      h: colorFour,
      s: saturation,
      l: light,
    };
    setHslFour(hslFour);
    setHexaFour(HSLToHex(hslFour));
    let colorFive: number = colorThree + 60;
    // FIVE
    seColorFive(colorFive);
    let hslFive: { h: number; s: number; l: number } = {
      h: colorFive,
      s: saturation,
      l: light,
    };
    setHslFive(hslFive);
    setHexaFive(HSLToHex(hslFive));
    // SIX
    let colorSix: number = colorFive + 180;
    setcolorSix(colorSix);
    let hslSix: { h: number; s: number; l: number } = {
      h: colorSix,
      s: saturation,
      l: light,
    };
    setHslSix(hslSix);
    setHexaSix(HSLToHex(hslSix));
  }, [value, saturation, light]);

  function HSLToHex(hsl: { h: number; s: number; l: number }): string {
    const { h, s, l } = hsl;

    const hDecimal = l / 100;
    const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

      // Convert to Hex and prefix with "0" if required
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  return (
    <>
      <Head>
        <title>Colors Theorycraft</title>
        <meta name="description" content="Colors Theorycraft" />
        <meta property="og:title" content="🏗️ Colors Theorycraft 👷" />
        <meta property="og:site_name" content="krk.finance/colors" />
        <meta property="og:url" content="https://krk.finance/colors" />
        <meta
          property="og:description"
          content="It ain't much, but it's honest work."
        />
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
            className={`w-[150px] h-[150px] border-2 border-white`}
            style={{
              backgroundColor: `hsl(${colorOne}, ${saturation}%,${light}%)`,
            }}
          >
            <div
              className={`border-2 border-red-300 inline text-xl pozey font-bold`}
              style={{
                color: `hsl(${colorTwo}, ${saturation}%,${light}%`,
              }}
            >
              01
            </div>
            <div
              className="pozey"
              style={{
                color: `hsl(${colorTwo}, ${saturation}%,${light}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              {hexaOne}
            </div>
          </div>
          {/* COLOR #2 */}
          <div
            className="w-[150px] h-[150px] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorTwo}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `hsl(${colorOne}, ${saturation}%,${light}%`,
              }}
            >
              02
            </div>
            <div
              className="pozey"
              style={{
                color: `hsl(${colorOne}, ${saturation}%,${light}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              {hexaTwo}
            </div>
          </div>
          {/* COLOR #3 */}
          <div
            className="w-[150px] h-[150px] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorThree}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline text-xl pozey font-bold"
              style={{
                color: `hsl(${colorFour}, ${saturation}%,${light}%`,
              }}
            >
              03
            </div>
            <div
              className="pozey"
              style={{
                color: `hsl(${colorFour}, ${saturation}%,${light}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              {hexaThree}
            </div>
          </div>
          {/* COLOR #4 */}
          <div
            className="w-[150px] h-[150px] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorFour}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `hsl(${colorThree}, ${saturation}%,${light}%`,
              }}
            >
              04
            </div>
            <div
              className="pozey"
              style={{
                color: `hsl(${colorThree}, ${saturation}%,${light}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              {hexaFour}
            </div>
          </div>
          {/* COLOR #5 */}
          <div
            className="w-[150px] h-[150px] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorFive}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `hsl(${colorSix}, ${saturation}%,${light}%`,
              }}
            >
              05
            </div>
            <div
              className="pozey"
              style={{
                color: `hsl(${colorSix}, ${saturation}%,${light}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              {hexaFive}
            </div>
          </div>
          {/* COLOR #6 */}
          <div
            className="w-[150px] h-[150px] border-2 border-white"
            style={{
              backgroundColor: `hsl(${colorSix}, ${saturation}%, ${light}%)`,
            }}
          >
            <div
              className="border-2 border-red-300 inline  text-xl pozey font-bold"
              style={{
                color: `hsl(${colorFive}, ${saturation}%,${light}%`,
              }}
            >
              06
            </div>
            <div
              className="pozey"
              style={{
                color: `hsl(${colorFive}, ${saturation}%,${light}%`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "21px",
                fontWeight: "800",
                width: "100%",
              }}
            >
              {hexaSix}
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
            defaultValue={value}
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
            defaultValue={value}
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
