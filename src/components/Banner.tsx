import BannerMobile from "./../assets/banner-mobile.png";

export function Banner() {
  return (
    <main className="pt-20 text-center">
      <h1 className="text-primary font-[900] text-2xl">
        Make your dream business goal come true
      </h1>
      <p className="text-secondary text-sm py-6 font-[300]">
        when you need us for improve your business, then come with us to help
        your business have reach it, you just sit and feel that goal.{" "}
      </p>
      <button className="w-36 h-9 bg-blue-btn rounded-3xl text-white drop-shadow-3xl text-xs">
        Start Project
      </button>

      <img src={BannerMobile} className="py-4 mx-auto" alt="Banner Mobile" />
    </main>
  );
}
