"use client";

import Image from "next/image";
import sheggy_scuvi from "./sheggy_scuvi.png";
import car from "./car.png";
import { useState } from "react";

export default function Home() {
  const [accordions, setAccordions] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col ">
            <h1>$SHGGY</h1>
            <p>
              the most memeable memecoin in existence. The dogs have had their
              day, it’s time for Sheggy to take reign.
            </p>
          </div>
          <div className="col">
            <Image src={sheggy_scuvi} height={300} alt={""}></Image>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="hr border-3 opacity-50" />
          </div>
        </div>
        <div id="about" className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <h1>how to buy</h1>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Image src={car} height={300} alt={""}></Image>
              </div>
              <div className="col">
                <div className="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={
                          accordions.item1
                            ? "accordion-button"
                            : "accordion-button collapsed"
                        }
                        type="button"
                        onClick={() =>
                          setAccordions({
                            ...accordions,
                            item1: !accordions.item1,
                          })
                        }
                      >
                        <strong>Create wallet</strong>
                      </button>
                    </h2>
                    <div
                      className={
                        accordions.item1
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse"
                      }
                    >
                      <div className="accordion-body">
                        download metamask or your wallet of choice from the app
                        store or google play store for free. Desktop users,
                        download the google chrome extension by going to
                        metamask.io.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                      >
                        <strong>Get Some ETH</strong>
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse">
                      <div className="accordion-body">
                        have ETH in your wallet to switch to $PEPE. If you don’t
                        have any ETH, you can buy directly on metamask, transfer
                        from another wallet, or buy on another exchange and send
                        it to your wallet.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                      >
                        <strong>Go to Uniswap</strong>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        connect to Uniswap. Go to app.uniswap.org in google
                        chrome or on the browser inside your Metamask app.
                        Connect your wallet. Paste the $PEPE token address into
                        Uniswap, select Pepe, and confirm. When Metamask prompts
                        you for a wallet signature, sign.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                      >
                        <strong>Swap ETH for $SHGGY</strong>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        Swap ETH for $SHGGY. We have ZERO taxes so you don’t
                        need to worry about buying with a specific slippage,
                        although you may need to use slippage during times of
                        market volatility.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <hr className="hr border-3 opacity-50" />
          </div>
        </div>
        <div id="how-to-buy" className="row">
          <div className="col">
            <h1>tokenomics</h1>
            <p>Total supply: 190,000,000,000,000</p>
            <p>LP tokens burned. No taxes, no bullshit.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="hr border-3 opacity-50" />
          </div>
        </div>
        <div id="how-to-buy" className="row">
          <div className="col">
            <h1>roadmap</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
