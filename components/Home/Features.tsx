import React from "react";

const Features = () => {
  return (
    <>
      <div className="flex items-center gap-24 justify-center px-10 md:px-32 lg:px-40 xl:px-[350px] my-32">
        <div className="relative">
          <img
            src="https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/02/home2-image-1.jpg"
            alt="perfume"
            className="max-w-[485px] max-h-[550px]"
          />
          <div className="absolute border border-black w-full h-full top-[-20px] left-[-20px]"></div>
        </div>

        <div className="text-[#232323]">
          <h1 className="text-[35px] font-quentin text-primary">Features</h1>
          <p className="font-raleway uppercase text-[38px] font-light mb-2">
            Only High Quality is the Core Value For Us
          </p>
          <p className="font-bold leading-8">
            Palfmoon yellow moray tompot blenny, cuchia tompot blenny; smelt
            southern flounder grunt sculpin yellowbanded perch.
          </p>
          <p className="text-[#616161] my-6 leading-8">
            Searobin freshwater hatchetfish sea bass orangestriped triggerfish
            white croaker. Pollock pencil catfish airbreathing catfish vendace
            pygmy sunfish spaghetti. Dogteeth tetra coley. Merluccid hake redlip
            blenny discus snake mudhead large-eye bream scissor-tail rasbora
            opaleye char dogfish beachsalmon, sand tilefish. Spiny eel skipping
            goby fierasfer tarwhine Blind goby tidewater goby rocket danio
            armorhead catfish streamer.
          </p>
          <button className="animate-button w-[160px] h-[50px]">
            Explore more
          </button>
        </div>
      </div>

      <div className="flex items-center gap-24 justify-center px-10 md:px-32 lg:px-40 xl:px-[350px] my-32">
        <div className="text-[#232323]">
          <h1 className="text-[35px] font-quentin text-primary">Features</h1>
          <p className="font-raleway uppercase text-[38px] font-light mb-2">
            A PERFUME THAT MAKES DRESSING COMPLETE
          </p>
          <p className="font-bold leading-8">
            Palfmoon yellow moray tompot blenny, cuchia tompot blenny; smelt
            southern flounder grunt sculpin yellowbanded perch.
          </p>
          <p className="text-[#616161] my-6 leading-8">
            Searobin freshwater hatchetfish sea bass orangestriped triggerfish
            white croaker. Pollock pencil catfish airbreathing catfish vendace
            pygmy sunfish spaghetti. Dogteeth tetra coley. Merluccid hake redlip
            blenny discus snake mudhead large-eye bream scissor-tail rasbora
            opaleye char dogfish beachsalmon, sand tilefish. Spiny eel skipping
            goby fierasfer tarwhine Blind goby tidewater goby rocket danio
            armorhead catfish streamer.
          </p>
          <button className="animate-button w-[160px] h-[50px]">
            Explore more
          </button>
        </div>

        <div className="relative">
          <img
            src="https://8ded8880.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/02/home2-image-2.jpg"
            alt="perfume"
            className="max-w-[485px] max-h-[550px]"
          />
          <div className="absolute border border-black w-full h-full top-[-20px] left-[-20px]"></div>
        </div>
      </div>
    </>
  );
};

export default Features;
