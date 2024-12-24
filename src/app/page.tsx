"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ScribbleLogoFull from "./ScribbleFull";
import ScribbleLogo from "./ScribbleLogo";

export default function Home() {
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  }, [copy]);

  const darkColors = [
    { color: "#D5F379" },
    { color: "#09412E" },
    { color: "#B185E7" },
    { color: "#399BDF" },
    { color: "#DF447F" },
  ];

  return (
    <main className="w-full px-2 m-auto ">
      {copy && (
        <div className="fixed bottom-5 z-[9999] right-5 bg-card-dark text-black bg-pink p-2 rounded-md">
          Copied to clipboard
        </div>
      )}
      <section className=" max-w-screen-2xl mx-auto  border-l border-r border-muted border-dotted relative h-[calc(100dvh-95px)] flex  flex-col justify-center gap-20 ">
        <div className=" relative z-10">
          <h1 className=" px-4   font-medium text-6xl  w-full  font-display text-green ">
            <span className=" font-bold text-accentTeal-dark">
              Scribble Dao
            </span>{" "}
            <br />
            Brand Guidelines
          </h1>
          <hr className=" mt-4 border-dotted border-muted" />
          <p className=" px-4 mt-4 text-xl font-light font-mono text-green/80 text-muted-dark">
            This is a guide to the Scribble Dao branding.
          </p>
          <hr className=" mt-4 border-dotted border-muted" />
        </div>
      </section>
      <div className=" max-w-screen-2xl  mx-auto  w-full border-dotted border border-muted ">
        <div className=" relative z-10">
          <h2 className=" text-3xl w-fit text-pink font-semibold  font-display px-5 py-2 border-r   border-dotted border-muted">
            Index
          </h2>
          <hr className=" border-dotted border-muted" />
          <ul className=" flex gap-4 flex-wrap px-4   text-muted-dark ">
            <li className="  border-r py-2  text-purple  font-semibold  border-dotted border-muted pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#Logo">Logo</Link>
            </li>
            <li className="  border-r  py-2  text-purple font-semibold   border-dotted border-muted pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#colors">Colors</Link>
            </li>
            <li className="  border-r  py-2  text-purple font-semibold   border-dotted border-muted pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#Typography">Typography</Link>
            </li>
            <li className="  border-r  py-2   text-purple font-semibold border-dotted border-muted pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#Visual">Visual Elements</Link>
            </li>
          </ul>
        </div>
      </div>
      <section
        style={{
          alignItems: "start",
        }}
        id="Logo"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted border max-w-screen-2xl m-auto"
      >
        <div className=" sticky mt-10 top-10 text-green  font-semibold">
          <h2 className=" px-4 font-medium text-3xl  w-full  text-green ">
            Logo
          </h2>
          <hr className="  mt-4 border-dotted border-muted" />
          <p className=" px-4  w-full pt-5  font-semibold text-muted-dark">
            logo are of 2 types
          </p>

          <ul className=" px-4  w-full pt-5 text-sm  font-semibold text-muted-dark list-disc ml-8">
            <li>Full Logo for navbar/footer on ui & posts</li>
            <li>Motif for everything else</li>
          </ul>

          <br />
          <br />
          <p className=" px-4  w-full pt-5  font-semibold text-muted-dark">
            The logo aspect ratios are fixed you can configure the height to get
            any size you want
          </p>
          <hr className=" mt-4 border-dotted border-muted" />
        </div>

        <div className=" pt-10 w-full overflow-hidden border-l border-dotted border-muted">
          <h3 className="px-4  text-green text-3xl font-medium font-display ">
            Scribble Logo
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <ScribbleLogoFull />
          <hr className="  border-dotted border-muted" />
          <h3 className="px-4 mt-10  text-green text-3xl font-medium font-display ">
            Motif
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <ScribbleLogo />
        </div>
      </section>

      <section
        style={{
          alignItems: "start",
        }}
        id="colors"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted border max-w-screen-2xl m-auto"
      >
        <div className=" sticky mt-10 top-10  ">
          <h2 className=" text-green px-4 font-medium text-3xl  w-full font-display  ">
            Colors
          </h2>
          <hr className="  mt-4 border-dotted border-muted" />
          <p className=" px-4  w-full pt-5 text-green font-semibold text-muted-dark">
            Click on the color to copy the hex code
            <br />
          </p>

          <hr className=" mt-4 border-dotted border-muted" />
        </div>

        <div className=" pt-10 border-l border-dotted border-muted">
          <h3 className="px-4  text-3xl text-green font-medium font-display ">
            Colors
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="p-4 pb-10 bg-secondary-dark  w-full flex gap-4 flex-wrap ">
            {darkColors.map((color, index) => (
              <div
                key={index}
                style={{
                  color: color.color,
                  backgroundColor:
                    color.color === "#09412E" ? "#eee" : "#121212",
                }}
                className=" cursor-pointer w-44   font-medium  border-4 overflow-hidden border-black rounded-md mb-4"
                onClick={() => {
                  navigator.clipboard.writeText(color.color);
                  setCopy(true);
                }}
              >
                <div
                  className=" w-full aspect-square"
                  style={{ backgroundColor: color.color }}
                ></div>

                <div className=" text-md  p-2 my-1">{color.color}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          alignItems: "start",
        }}
        id="Typography"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted border max-w-screen-2xl m-auto"
      >
        <div className=" sticky mt-10 top-10  ">
          <h2 className=" px-4 text-green font-medium text-3xl  w-full font-display  ">
            Typography
          </h2>
          <hr className="  mt-4 border-dotted border-muted" />
          <p className=" px-4  w-full pt-5  font-medium text-green">
            All fonts are available on google fonts
            <br />
            <br />
            Default Font: Fredoka
            <br />
            Help Font: Borel
            <br />
            Display Font: Pixelify Sans
          </p>

          <hr className=" mt-4 border-dotted border-muted" />
        </div>

        <div className=" pt-10 w-full  text-green overflow-hidden border-l border-dotted border-muted">
          <h3 className="px-4  text-3xl font-medium font-display ">Heading</h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="p-4 pb-10   font-display font-medium  w-full gap-4 ">
            <div className=" text-xl text-muted-dark">Fredoka</div>
            <h4 className=" mt-2 text-5xl">
              The quick brown fox jumps over the lazy dog
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat labore expedita ipsam corrupti nostrum, officia eaque
              molestias voluptas iure vel aliquid porro. Expedita nihil
              veritatis error officiis corrupti reprehenderit quidem dignissimos
              deserunt praesentium voluptas totam repellendus fugit neque magnam
              dolores nobis harum facilis obcaecati qui dolore molestias quaerat
              ab, enim quos.
            </p>
            <Link
              href="https://fonts.google.com/specimen/Fredoka"
              target="_blank"
            >
              <button className="btn mt-10 bg-white text-green border-green border-2 font-display text-xl hover:bg-white/80">
                See font on google fonts
              </button>
            </Link>
          </div>
          <hr className="  border-dotted border-muted" />
          <h3 className="px-4  font-handwriting text-3xl font-medium font-display mt-10 ">
            Help
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="p-4 pb-10  font-light  w-full gap-4 ">
            <div className=" text-xl  font-bold font-handwriting text-muted-dark">
              Borel
            </div>
            <p className=" mt-2 text-xl font-handwriting  leading-[1.9rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat labore expedita ipsam corrupti nostrum, officia eaque
              molestias voluptas iure vel aliquid porro. Expedita nihil
              veritatis error officiis corrupti reprehenderit quidem dignissimos
              deserunt praesentium voluptas totam repellendus fugit neque magnam
              dolores nobis harum facilis obcaecati qui dolore molestias quaerat
              ab, enim quos.
            </p>
            <Link
              href="https://fonts.google.com/specimen/Borel"
              target="_blank"
            >
              <button className="btn mt-10 bg-white text-green border-green border-2 font-display text-xl hover:bg-white/80">
                See font on google fonts
              </button>
            </Link>
          </div>
          <hr className="  mt-4 border-dotted border-muted" />
          <h3 className="px-4  font-mono text-3xl font-medium font-display mt-10 ">
            Display
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="p-4 pb-10  font-light  w-full gap-4 ">
            <div className=" text-xl  font-bold font-mono text-muted-dark">
              Pixelify Sans
            </div>
            <h4 className=" mt-2  font-mono text-5xl">
              The quick brown fox jumps over the lazy dog
            </h4>
            <Link
              href="https://fonts.google.com/specimen/Pixelify+Sans"
              target="_blank"
            >
              <button className="btn mt-10 bg-white text-green border-green border-2 font-display text-xl hover:bg-white/80">
                See font on google fonts
              </button>
            </Link>
          </div>
          <hr className="  border-dotted border-muted" />
          <h3 className="px-4  text-3xl font-medium font-display mt-10 ">
            CSS Embed Code
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="p-4 pb-10  font-light  w-full gap-4 ">
            <div className=" text-xl font-medium text-muted-dark">
              Be Vietnam pro + outfit
            </div>
            <p className=" mt-2  font-medium break-words overflow-hidden w-full   whitespace-normal ">
              {` @import url("https://fonts.googleapis.com/css2?family=Borel&family=Fredoka:wght@300..700&family=Pixelify+Sans:wght@400..700&display=swap");`}
            </p>

            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  ` @import url("https://fonts.googleapis.com/css2?family=Borel&family=Fredoka:wght@300..700&family=Pixelify+Sans:wght@400..700&display=swap");`
                );
                setCopy(true);
              }}
              className="btn mt-10 bg-white text-green border-green border-2 font-display text-xl hover:bg-white/80"
            >
              copy to clipboard
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          alignItems: "start",
        }}
        id="Visual"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted border max-w-screen-2xl m-auto"
      >
        {/* <div className=" sticky mt-10 top-10  ">
          <h2 className=" px-4 font-medium text-3xl  w-full font-display text-primary-dark ">
            Visual Elements
          </h2>
          <hr className="  mt-4 border-dotted border-muted" />
          <p className=" px-4  w-full pt-5  font-light text-muted-dark">
            All elements should follow the following guidelines -
          </p>

          <ul className=" px-4  w-full pt-5 text-sm  font-light text-muted-dark list-disc ml-8">
            <li>No human hands or faces. </li>
            <li>Minimal singular objects.</li>
            <li>More solid colors than gradients.</li>
          </ul>
          <hr className=" mt-4 border-dotted border-muted" />
        </div>

        <div className=" pt-10 w-full overflow-hidden border-l border-dotted border-muted">
          <h3 className="px-4  text-3xl font-medium font-display ">
            Example Illustration
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="   font-display font-medium  w-full gap-4 ">
            <div className=" w-full aspect-square relative">
              <Image
                src="/exapleIllustrations.png"
                alt="illustration"
                fill
              ></Image>
            </div>
          </div>
          <hr className="  border-dotted border-muted" />
          <h3 className="px-4 mt-10  text-3xl font-medium font-display ">
            Example Posts
          </h3>
          <hr className="  mt-4 border-dotted border-muted" />
          <div className="   font-display font-medium  w-full gap-4 ">
            <div className=" w-full aspect-square relative">
              <Image
                src="/exapleIllustrations.png"
                alt="illustration"
                fill
              ></Image>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
