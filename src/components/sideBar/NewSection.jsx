function NewSection() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Today news</h3>
      <div className="space-y-4">
        <div className="bg-[#323539] rounded-lg overflow-hidden">
          <img
            src="/imagees/hike-2.png"
            alt="News 1"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold mb-1">
              Five questions you should answer truthfully
            </h4>
            <p className="text-xs text-[#d9e4ed]">2h ago</p>
          </div>
        </div>

        <div className="bg-[#323539] rounded-lg overflow-hidden">
          <img
            src="/imagees/hike-1.png"
            alt="News 2"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold mb-1">
              Ten unbelievable facts about mountains
            </h4>
            <p className="text-xs text-[#d9e4ed]">2h ago</p>
          </div>
        </div>

        <div className="bg-[#323539] rounded-lg overflow-hidden">
          <img
            src="/imagees/hike-3.png"
            alt="News 2"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold mb-1">
              Ten unbelievable facts about mountains
            </h4>
            <p className="text-xs text-[#d9e4ed]">2h ago</p>
          </div>
        </div>

        <div className="bg-[#323539] rounded-lg overflow-hidden">
          <img
            src="/imagees/hike-1.png"
            alt="News 2"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold mb-1">
              Ten unbelievable facts about mountains
            </h4>
            <p className="text-xs text-[#d9e4ed]">2h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
