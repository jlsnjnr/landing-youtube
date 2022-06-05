import {
  FiArrowRight,
  FiMonitor,
  FiPenTool,
  FiSettings,
  FiTv,
} from "react-icons/fi";

export function Services() {
  return (
    <section className="py-8">
      <span className="text-blue-btn text-center block">Our Services</span>
      <h2 className="text-primary font-[600] text-xl text-center py-4">
        Perfect and Fast Movement
      </h2>
      <p className="text-center py-4 text-secondary">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business
      </p>
      <a href="" className="flex items-center text-blue-btn font-bold">
        Read more <FiArrowRight className="ml-2 animate-pulse" />
      </a>

      <div className="w-[266px] h-[269px] border border-[#E5E5E5] rounded-[30px] flex items-center flex-col justify-evenly mx-auto p-8 drop-shadow-strong bg-white my-8">
        <div className="w-[100px] h-[100px] rounded-full bg-blue-btn flex items-center justify-center text-white">
          <FiMonitor size={42} />
        </div>
        <p className="font-bold text-center px-12">Social Media Management</p>
      </div>

      <div className="w-[266px] h-[269px] border border-[#E5E5E5] rounded-[30px] flex items-center flex-col justify-evenly mx-auto p-8 drop-shadow-strong bg-white my-8">
        <div className="w-[100px] h-[100px] rounded-full bg-orange-bg flex items-center justify-center text-white">
          <FiSettings size={42} />
        </div>
        <p className="font-bold text-center px-8">Search Engine Opimization</p>
      </div>

      <div className="w-[266px] h-[269px] border border-[#E5E5E5] rounded-[30px] flex items-center flex-col justify-evenly mx-auto p-8 drop-shadow-strong bg-white my-8">
        <div className="w-[100px] h-[100px] rounded-full bg-green-bg flex items-center justify-center text-white">
          <FiPenTool size={42} />
        </div>
        <p className="font-bold text-center px-8">Design</p>
      </div>

      <div className="w-[266px] h-[269px] border border-[#E5E5E5] rounded-[30px] flex items-center flex-col justify-evenly mx-auto p-8 drop-shadow-strong bg-white my-8">
        <div className="w-[100px] h-[100px] rounded-full bg-yellow-bg flex items-center justify-center text-white">
          <FiTv size={42} />
        </div>
        <p className="font-bold text-center px-8">Ads</p>
      </div>
    </section>
  );
}
