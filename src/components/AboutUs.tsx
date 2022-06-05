import About from "./../assets/banner-about.png";
import { FiPlayCircle } from "react-icons/fi";

export function AboutUs() {
  return (
    <section className="py-8">
      <span className="text-blue-btn text-center block">About Us</span>
      <h2 className="text-primary font-[600] text-xl text-center py-4">
        Our Teammate
      </h2>

      <p className="py-4 text-secondary font-[300]">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business2
      </p>

      <p className="py-4 text-secondary font-[300]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque tempor
        at ut auctor maecenas,Lorem ipsum d
      </p>

      <div className="flex items-center justify-around py-8">
        <button className="flex items-center justify-center w-[124px] h-[38px] bg-blue-btn rounded-full text-white text-xs drop-shadow-3xl">
          About Us
        </button>
        <button className="flex items-center justify-center w-[150px] h-[38px] border rounded-full text-blue-btn border-blue-btn">
          <FiPlayCircle />
          About Us
        </button>
      </div>

      <img src={About} className="px-4 py-2 mx-auto" alt="Banner about us" />
    </section>
  );
}
