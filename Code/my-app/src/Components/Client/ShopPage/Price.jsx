export default function Price () {
  return (
    <>
      <div className="pt-4">
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          Price
        </h3>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            name="min"
            id="min"
            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
            placeholder="min"
          />
          <span className="mx-3 text-gray-500">-</span>
          <input
            type="text"
            name="max"
            id="max"
            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
            placeholder="max"
          />
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          Color
        </h3>
        <div className="flex items-center gap-2">
          <div className="color-selector">
            <input type="radio" name="color" id="red" className="hidden" />
            <label
              for="red"
              className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
              style="background-color: #fc3d57;"
            ></label>
          </div>
          <div className="color-selector">
            <input type="radio" name="color" id="black" className="hidden" />
            <label
              for="black"
              className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
              style="background-color: #000;"
            ></label>
          </div>
          <div className="color-selector">
            <input type="radio" name="color" id="white" className="hidden" />
            <label
              for="white"
              className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
              style="background-color: #fff;"
            ></label>
          </div>
        </div>
      </div>
    </>
  );
}
