import AppImage from "./../assets/app.png";
import AppBig from "./../assets/app-big.png";
import AppDesign from "./../assets/app-design.png";

export function Jobs() {
  return (
    <section className="py-8">
      <span className="text-blue-btn text-center block">Our Portfolio</span>
      <h2 className="text-primary font-[600] text-xl text-center py-4">
        What do we do
      </h2>

      <p className="py-4 text-secondary text-center font-[300]">
        all projects that we have already done , proven can help to use more
        comfortable, then can used by client from our business
      </p>

      <div className="mx-auto font-bold text-white text-xl flex flex-col items-center gap-6">
        <div className="relative">
          <img src={AppImage} className="px-4 py-2" alt="Banner about us" />
          <p className="absolute bottom-4 left-8">Design Furniture App</p>
        </div>
        <div className="relative">
          <img src={AppBig} className="px-4 py-2" alt="Banner about us" />
          <p className="absolute bottom-4 left-8">Cloud App</p>
        </div>
        <div className="relative">
          <img src={AppDesign} className="px-4 py-2" alt="Banner about us" />
          <p className="absolute bottom-4 left-8">Design Byte App</p>
        </div>

        <button className="border border-blue-btn text-blue-btn font-[900] rounded-full w-[196px] h-[44px] text-base">
          See All Portfolio
        </button>
      </div>
    </section>
  );
}
