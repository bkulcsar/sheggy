"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row" id="about">
          <div className="col-lg-6 col-12">
            <div className="row">
              <div className="col">
                <h1>$SHGGY</h1>
                <p>
                  Sheggy is THE high tier quality meme coin. He is the truest
                  representor of our state of mind when we decide to jump into
                  the market, always overdosed under the influence of copium,
                  hopium, denial and greed. Sheggys always likes to munch on his
                  best pal Scubby's scubby snack and maybe for that reason, he
                  is unable to speak normally. Now that Sheggy has arguably lost
                  his mind after the countless of failed trades, he is seeking
                  one and one thing only: conquering the crypto space as a
                  currency himself and became the canine professor of the
                  doggos. With your help, he can achieve that and he can finally
                  have piece if nothing else. Do not be like Sheggy who always
                  buy high and sell low, this is your opportunity to hop in and
                  buckle up for a hopium rocket ride!
                </p>
              </div>
            </div>
            <div className="row justify-content-center gap-4">
              <div className="col-1">
                <a href="https://twitter.com/sheggyCoin" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
              <div className="col-1">
                <a href="https://t.me/SheggyETH" target="_blank">
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img src="/sheggy_scuvi.png" className="w-75 h-auto"></img>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <hr className="hr border-3 opacity-50" />
          </div>
        </div>
        <div className="row" id="how-to-buy">
          <div className="col ">
            <div className="row">
              <div className="col">
                <h1>how to buy</h1>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 text-center">
                <img src="/car.png" className="w-50 h-auto"></img>
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
        <div id="tokenomics" className="row">
          <div className="col">
            <h1>tokenomics</h1>
            <p>
              FUCK rug pulls! $SHGGY contract has no owner, no tax set methods,
              no blacklist or any restriction possibilities. It's a pure ERC20
              OpenZeppelin contract.
            </p>
            <p>LP tokens are locked.</p>
            <p>Total supply: 173,960,000,000,000</p>
            <p>
              <strong>Contract Address: </strong>
              <a
                href="https://etherscan.io/address/0x1a865b1d205713e5e392e7f7f83edd66851b6f43"
                target="_blank"
              >
                0x1A865B1D205713E5e392E7F7f83edd66851B6f43
              </a>
            </p>
          </div>
          <div className="col-lg-6 col-12 justify-content-center text-center">
            <img src="/token_allocation.png" className="w-75 h-auto"></img>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="hr border-3 opacity-50" />
          </div>
        </div>
        <div id="roadmap" className="row">
          <div className="col">
            <h1 className="">roadmap</h1>
            <div className="row">
              <div className="col-6 mt-3">
                <div className="card border-success">
                  <div className="card-body text-success">
                    <h5 className="card-title">Phase 1</h5>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-success">
                        Create Twitter account and Website
                      </li>

                      <li className="list-group-item bg-success-subtle">
                        Build a $SHGGY community
                      </li>
                      <li className="list-group-item">
                        Smart Contract and Fairlaunch creation on PinkSale
                      </li>
                      <li className="list-group-item">
                        LP creation and LP lock
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 text-center mt-5 mt-lg-0">
                <img src="/roadmap.png" className="img-fluid"></img>
              </div>
              <div className="col-lg-3 col-0"></div>
              <div className="col-6 mt-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Phase 2</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Post-launch Marketing</li>
                      <li className="list-group-item">
                        CoinGecko/CoinMarketCap Listings
                      </li>
                      <li className="list-group-item">1,000+ Holders</li>
                      <li className="list-group-item">
                        NFT Airdrop to the active holders with gamification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6"></div>
              <div className="col-6 mt-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Phase 3</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">DAO creation</li>
                      <li className="list-group-item">10,000+ Holders</li>
                      <li className="list-group-item">CEX Listing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
