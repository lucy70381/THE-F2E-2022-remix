const Characters = () => (
  <div
    id="characters"
    className="container fixed bottom-0 left-1/2 z-10 -translate-x-1/2"
  >
    <div className="flex items-end justify-around md:mx-8">
      {["character_f2e", "character_ui", "character_team"].map((item) => (
        <img
          key={item}
          src={`./character/${item}.gif`}
          className="w-1/4 object-contain"
          alt="character_f2e"
        />
      ))}
    </div>
  </div>
);

export default Characters;