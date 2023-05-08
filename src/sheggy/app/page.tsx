import Image from "next/image";
import sheggy_scuvi from "./sheggy_scuvi.png";

export default function Home() {
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
            <Image src={sheggy_scuvi} alt={""} width={450}></Image>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="hr border-3 border-white opacity-50" />
          </div>
        </div>
        <div id="about" className="row">
          <div className="col">
            <h1>about</h1>
            <p>
              Hey there, I'm Sheggy! Along with my best pal, Scooby, we're here
              to introduce you to the newest meme coin sensation: Sheggy coin.
              With my scruffy beard, insatiable appetite, and laid-back
              attitude, I'm the perfect mascot for a silly and fun meme coin.
              Whether you're a fan of the original Scooby-Doo cartoons or just
              love a good meme, Sheggy coin is the perfect addition to your
              crypto portfolio. So come on, grab a Scooby snack, and let's ride
              the Sheggy coin wave all the way to the moon!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="hr border-3 border-white opacity-50" />
          </div>
        </div>
        <div id="how-to-buy" className="row">
          <div className="col">
            <h1>how to buy</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="hr border-3 border-white opacity-50" />
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
            <hr className="hr border-3 border-white opacity-50" />
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
