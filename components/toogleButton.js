function toogleButton() {
  return (
    <>
      <div className="flex justify-start mt-8 items-center ml-10" role="button">
        <p className="mr-2 text-lg font-bold text-white">New Listings</p>
        <div className="cursor-pointer w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm">
          <input
            defaultChecked
            type="checkbox"
            name="toggle"
            id="toggle2"
            className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle2"
            className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full cursor-pointer"
          />
        </div>
        <p className="ml-2 text-lg font-bold text-gray-800">Bill Annually</p>
      </div>
    </>
  );
}

export default toogleButton;
