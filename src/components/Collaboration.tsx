import CollaborationImage from "./../assets/imageCollaboration.png";

export function Collaboration () {
  return (
    <section className="py-8 text-center">
      <img src={CollaborationImage} alt="Collaboration Image" />
      <h2 className="mt-12 text-primary font-[700] text-2xl">Interesting Collaboration With Us?</h2>
      <p className="py-4 text-secondary font-[300]">Help you to reach your business goal</p>
      <button className="bg-blue-btn text-white rounded-full drop-shadow-3xl text-sm font-bold w-36 h-9">Get Started</button>
    </section>
  )
}