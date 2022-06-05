import Woman from "./../assets/woman.png";

export function Testimonial() {
  return (
    <section className="py-8">
      <span className="text-blue-btn text-center block">Testimonial</span>
      <h2 className="text-primary font-[600] text-xl text-center py-4">
        People Talk about us
      </h2>

      <div className="w-full h-[257px] bg-white drop-shadow-strong rounded-3xl p-6 my-6">
        <div className="flex items-center">
          <img src={Woman} alt="Woman Image" />
          <div className="ml-6">
            <span className="block text-blue-btn font-bold">Angel Rose</span>
            <p className="text-secondary">Creative Manager</p>
          </div>
        </div>

        <p className="text-secondary py-6 font-[300]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit”
        </p>
      </div>
    </section>
  );
}
