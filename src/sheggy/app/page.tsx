"use client";

import Image from "next/image";
import sheggy_scuvi from "./sheggy_scuvi.png";
import car from "./car.png";
import token_allocation from "./token_allocation.png";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col ">
            <h1 id="about">$SHGGY</h1>
            <p>
              Sheggy is THE high tier quality meme coin. He is the truest
              representor of our state of mind when we decide to jump into the
              market, always overdosed under the influence of copium, hopium,
              denial and greed. Sheggys always likes to munch on his best pal
              Scubby's scubby snack and maybe for that reason, he is unable to
              speak normally. Now that Sheggy has arguably lost his mind after
              the countless of failed trades, he is seeking one and one thing
              only: conquering the crypto space as a currency himself and became
              the canine professor of the doggos. With your help, he can achieve
              that and he can finally have piece if nothing else. Do not be like
              Sheggy who always buy high and sell low, this is your opportunity
              to hop in and buckle up for a hopium rocket ride!
            </p>
          </div>
          <div className="col">
            <Image src={sheggy_scuvi} height={300} alt={""}></Image>
          </div>
        </div>
        <div id="how-to-buy" className="row">
          <div className="col">
            <hr className="hr border-3 opacity-50" />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <div className="row">
              <div className="col">
                <h1>how to buy</h1>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col text-center ">
                <Image src={car} height={300} alt={""}></Image>
              </div>
              <div className="col">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Create a Wallet</div>
                      download metamask or your wallet of choice from the app
                      store or google play store for free. Desktop users,
                      download the google chrome extension by going to
                      metamask.io.
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Get Some ETH</div>
                      have ETH in your wallet to switch to $SHGGY. If you don’t
                      have any ETH, you can buy directly on metamask, transfer
                      from another wallet, or buy on another exchange and send
                      it to your wallet.
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Go to Uniswap</div>
                      connect to Uniswap. Go to app.uniswap.org in google chrome
                      or on the browser inside your Metamask app. Connect your
                      wallet. Paste the $SHGGY token address into Uniswap,
                      select Sheggy, and confirm. When Metamask prompts you for
                      a wallet signature, sign.
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Swap ETH for $SHGGY</div>
                      swap ETH for $SHGGY. We have ZERO taxes so you don’t need
                      to worry about buying with a specific slippage, although
                      you may need to use slippage during times of market
                      volatility.
                    </div>
                  </li>
                </ol>
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
            <p>
              FUCK rug pulls! $SHGGY contract has no owner, no tax set methods,
              no blacklist or any restriction possibilities. It's a pure ERC20
              OpenZeppelin contract.
            </p>
            <p>LP tokens locked.</p>
            <p>Total supply: 200,000,000,000,000</p>
            <p>
              <strong>Contract Address: 0x000000000000000</strong>
            </p>
          </div>
          <div className="col">
            {" "}
            <Image src={token_allocation} height={400} alt={""}></Image>
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
            <p>
              $SHGGY is doesn't guarantee anything, there's no formal team or
              roadmap - he is a shitcoin with no spectations or intrinsic
              value.. but then again is there value in anything at all?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
