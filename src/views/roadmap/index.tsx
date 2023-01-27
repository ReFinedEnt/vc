// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Components
import { RequestAirdrop } from "../../components/RequestAirdrop";
import pkg from "../../../package.json";
import { SideQuests } from "./components/sidequests";
import { Legend } from "./components/legend";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

export const RoadMap: FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);
  // return (
  //   <>
  //     <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] w-100">
  //       Roadmap
  //     </h1>
  //     <div className="container">
  //       <article className="episode">
  //         <div className="episode__number">ØØ</div>
  //         <div className="episode__content">
  //           <div className="title">Prologue</div>
  //           <div className="story">
  //             <p>
  //               Everything started back in 2020 : I was studying web-development
  //               on my own and spending unreasonable amount of time playing
  //               video-games before COVID locked up the whole world into
  //               quarantine.
  //             </p>
  //             <p className="mt-5">
  //               Everyone was now sitting at their desk in front of their
  //               computer, either working remotely or sharing information and
  //               anger on social medias.
  //             </p>
  //             <p className="mt-5">We got forced to enter the Metaverse.</p>
  //             <p className="mt-5">
  //               I've started my crypto-journey with{' '}
  //               <a
  //                 href="https://www.piratechain.org/"
  //                 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
  //               >
  //                 PirateChain
  //               </a>{' '}
  //               thanks to{' '}
  //               <a
  //                 href=""
  //                 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]"
  //               >
  //                 Jeff Berwick
  //               </a>{' '}
  //               : a highly controversial freedom minded content creator
  //             </p>
  //             <p className="mt-5">We do not endorse his content 🥸</p>
  //             <p className="mt-5">
  //               I've followed the white rabbit, and digged the rabbit-hole 🐇
  //             </p>
  //             <p className="mt-5">Knowledge takes time, effort and focus :</p>
  //             <ul className="mt-5">
  //               <li>Bitcoin, Ethereum &amp; Altcoins, L2's</li>
  //               <li>Smart-Contracts : Solidity, Rust </li>
  //               <li></li>
  //             </ul>
  //           </div>
  //         </div>
  //       </article>

  //       <article className="episode">
  //         <div className="episode__number">Ø1</div>
  //         <div className="episode__content">
  //           <div className="title">Phase 1</div>
  //           <div className="story">
  //             <p>
  //               I've followed the white rabbit, and digged the rabbit-hole 🐇
  //             </p>
  //             <p className="mt-5">Knowledge takes time, effort and focus :</p>
  //             <p className="mt-5">
  //               "Unhand me buffoon and I'll tell my mother the queen to spare
  //               your life," she said indignantly.
  //             </p>
  //             <p>
  //               Oooh! How lovely. As if her mother the queen could help her
  //               right now. This one was charming. It almost made me want to let
  //               go of her. Ha ha! As if. All that planning to infiltrate the
  //               castle and kidnap her would not go to waste. But while she was
  //               in my possession, I might as well have a little fun with her.
  //             </p>
  //             <p>
  //               "I doubt your highness will spare my life if I let you go," I
  //               said to her. She stopped squirming in an instant. "You're a
  //               girl?" she asked with bathed breath. The corner of my mouth
  //               perked up into a smirk. "Last time I checked yes," I told her.
  //             </p>
  //             <p>
  //               "What do you want from me? Do you want money? Power? Men? I can
  //               give you all of that." She tried to sit but it was too much of
  //               an effort, considering she was bound like that. I stifled a
  //               smile. "I have money," I said. "Lots of it in fact. Power comes
  //               with money, so that is not an issue. As for men. Well let's just
  //               say that I like women more."
  //             </p>
  //             <p>
  //               "Then what do you want?" she asked in a small voice. I walked
  //               steadily to her and kneeled on the floor. Once I did, I brought
  //               her to a sitting position and leaned to her head so I could
  //               whisper. "I want your body."
  //             </p>
  //           </div>
  //         </div>
  //       </article>

  //       <article className="episode">
  //         <div className="episode__number">Ø2</div>
  //         <div className="episode__content">
  //           <div className="title">Phase 2</div>
  //           <div className="story">
  //             <p>
  //               She froze in an instant and squirmed away from me. "You're a
  //               lunatic! Jerk! You're an ugly son of a-" I removed the cover on
  //               her head and watched her mouth slack open as she blinked in a
  //               confused daze at me. I heard her breath hitch as she took a good
  //               look at my face. We studied each other for a while.
  //             </p>
  //             <p>
  //               Her gray eyes took in my features. She licked her thin lips
  //               nervously and asked, "What color are your eyes. They are the
  //               strangest green."
  //             </p>
  //             <p>
  //               I smirked at her. "They're called forest green princess." Before
  //               she could ask another question, I took her in my arms and hauled
  //               her to the bedroom. It was not without difficulty of course. She
  //               kept wriggling against me and even threatened to bite me. What a
  //               charming princess, I thought in disdain.
  //             </p>
  //             <p>
  //               Once we were inside the bedroom, which would be her holding room
  //               or her cell if you want to call it that, I set her down on the
  //               bed where she squirmed some more. I looked her in the eyes. "If
  //               you want me to untie you, you'll stop twitching like that. You
  //               look like a maggot."
  //             </p>
  //             <p>
  //               "I am not!" she said heatedly. I clicked my tongue at her. "Sure
  //               you're not princess."
  //             </p>
  //             <p>
  //               She stared daggers at me. "Why did you kidnap me? You're a low
  //               life! You're the lowest!" she seethed. I gave her a patronizing
  //               look. "And you're a saint princess?" I asked with a smile.
  //               "Don't ask questions that you'll regret knowing the answer to."
  //             </p>
  //             <p>"Are you going to kill me?" she choked. </p>
  //             <p>
  //               "If I wanted to, I would have done it a long time ago. So to
  //               answer your question, no I'm not going to kill you. But I am
  //               going to hold you here for a long time. Look around you
  //               princess. Stare at the four corners of this room because you'll
  //               get to memorize it while you're here."
  //             </p>
  //             <p>
  //               I pointed to the windows. "Those are barred. Even if you cut
  //               that lovely honey colored hair of yours to make a Rapunzel-like
  //               rope, you'll never escape from here." I tilted my chin to the
  //               door where she followed with her gaze. "That is made with metal
  //               and is locked with a security code that only I know of."
  //             </p>
  //           </div>
  //         </div>
  //       </article>

  //       <article className="episode">
  //         <div className="episode__number">Ø3</div>
  //         <div className="episode__content">
  //           <div className="title">Phase 3</div>
  //           <div className="story">
  //             <p>
  //               "Scream all you want," I continued. "This hideout is located
  //               miles from any town or road. No one will ever hear you. In this
  //               little world of ours, I'm your only friend. I will feed you,
  //               talk to you when I want to, and do things that need be. If
  //               you're not nice to me, you'll never see the daylight again. Do
  //               you understand?"
  //             </p>
  //             <p>"I despise you," she said savagely. </p>
  //             <p>
  //               "Well I'm very sorry to hear that," I said with a shrug. "But
  //               your attitude will not help you at all princess." I stood up and
  //               walked to the door.{' '}
  //             </p>
  //             <p>
  //               "Wait!" she called out. "Aren't you going to remove my
  //               restraints?"{' '}
  //             </p>
  //             <p>
  //               Her question made me smile to myself. "Say please," I said. Her
  //               jaw clenched. "Are you freaking kidding me?" she said loudly.{' '}
  //             </p>
  //             <p>
  //               "I don't think her highness would appreciate your smart mouth
  //               princess." I faced her and grinned widely. "I'll only remove
  //               that if you say please." She closed her eyes for an instant and
  //               deliberated whether to say it or not. She thought better of it
  //               and said, "Please remove it."
  //             </p>
  //             <p>
  //               I walked back to her and leaned down so I could untie the ropes.
  //               "See? I know there's some manners left in you," I teased. She
  //               pursed her lips and didn't reply. I knew she was angry at me for
  //               kidnapping her and doing this. But who cares? I had my own
  //               reasons.{' '}
  //             </p>
  //             <p>
  //               My hands deftly removed the knots on the rope. Once she was
  //               untied, the princess moved her hands around and sat on the edge
  //               of the bed. She stunned me by elbowing my stomach and running to
  //               the direction of the door. Years of judo training kicked in. I
  //               pounced on her and pinned her to the ground where I straddled
  //               her.
  //             </p>
  //             <p>
  //               "You shouldn't have done that," I told her. "My stomach is going
  //               to bruise. You're lucky that I don't have a photo shoot right
  //               now." She writhed against my grip. "What are you saying? Let me
  //               go this instant!"
  //             </p>
  //             <p>
  //               "I'm warning you princess. If you do that again, I'll rip your
  //               clothes off and let you stay here completely naked." That made
  //               her stop. "When I release you, you're going to walk back to the
  //               bed. Understand?" She nodded. I stood up and helped her to her
  //               feet. She headed to the direction of the bed and sat down as
  //               instructed.{' '}
  //             </p>
  //           </div>
  //         </div>
  //       </article>
  //     </div>
  //   </>
  // );

  return (
    <div className="my-2 max-h-[66vh] w-full flex-col flex justify-center align-center">
      <div className="w-full flex flex-col justify-center items-center">
        <ul className="steps steps-vertical">
          <li
            data-content="📑"
            className="step step-success"
            id="step-whitepaper"
          >
            <div>
              <a
                href="https://docs.krk.finance/"
                target={"_blank"}
                rel="noreferrer"
                className="roadmap-glitch"
                data-content="Whitepaper"
              >
                Whitepaper{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline p-0 m-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </a>
            </div>
          </li>
          {/* <li data-content="🌐" className="step step-success" id="step-DEX">
            <a
              href="https://dex.krk.finance"
              target={"_blank"}
              rel="noreferrer"
              className="roadmap-glitch"
              data-content="DEX UI"
            >
              DEX UI{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline p-0 m-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </li> */}
          <li data-content="🔁" className="step step-success" id="step-swap">
            <a
              href="https://krk.finance/swap"
              target={"_blank"}
              rel="noreferrer"
              // className="mini-glitch"
              // data-content="Swap"
            >
              Swap{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline p-0 m-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </li>
          <li data-content="🪙" className="step step-success" id="step-token">
            <a
              href="https://solscan.io/token/6d5Sz3eEXXTvqGXye3XjFzhPT6ozzBoMDYdJd9sLCQSq"
              target={"_blank"}
              rel="noreferrer"
              // className="mini-glitch"
              // data-content="NFT PvP Game"
            >
              $KRK Token{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline p-0 m-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </li>

          <li data-content="🔒" className="step step-secondary" id="step-pvp">
            $KRK Vesting{" "}
          </li>
          <li data-content="✅" className="step">
            Whitelist
          </li>
          <li data-content="🔥" className="step" id="step-burn">
            Quest Burn Event ⚔️
          </li>
          <li data-content="🪂" className="step">
            $KRK Airdrop
          </li>
          <li data-content="💧" className="step" id="step-token">
            $KRK Liquidity
          </li>
          <li data-content="🍬" className="step" id="step-gov">
            {/* <a
              href="https://krk.finance/swap"
              target={'_blank'}
              rel="noreferrer"
              // className="mini-glitch"
              // data-content="NFT DAO"
            > */}
            Mint{" "}
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline p-0 m-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a> */}
          </li>
          <li data-content="🥩" className="step" id="step-steak">
            NFT Staking
          </li>

          {/* <li data-content="🌐" className="step step-warning" id="step-DEX">
            AMM
          </li> */}
          {/* <li data-content="🏦" className="step" id="step-staking">
            Governance
          </li> */}
          <li data-content="🏆" className="step" id="step-network">
            <Link href="https://thenetworkstate.com/">NFT DAO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
