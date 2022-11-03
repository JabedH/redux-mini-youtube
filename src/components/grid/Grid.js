import React from "react";

const Grid = () => {
  return (
    // <!-- Video Grid -->
    <section class="pt-12">
      <section class="pt-12">
        <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          <div class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <div class="w-full flex flex-col">
              <div class="relative">
                <a href="video.html">
                  <img
                    src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                    class="w-full h-auto"
                    alt="Some video title"
                  />
                </a>

                <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  12:10
                </p>
              </div>

              <div class="flex flex-row mt-2 gap-2">
                <a href="#" class="shrink-0">
                  <img
                    src="https://avatars.githubusercontent.com/u/73503432?v=4"
                    class="rounded-full h-6 w-6"
                    alt="Learn with Sumit"
                  />
                </a>

                <div class="flex flex-col">
                  <a href="video.html">
                    <p class="text-slate-900 text-sm font-semibold">
                      Video title
                    </p>
                  </a>
                  <a
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                  >
                    Learn with Sumit
                  </a>
                  <p class="text-gray-400 text-xs mt-1">
                    200 views . May 3, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12">some error happened</div>
        </div>
      </section>
    </section>
  );
};

export default Grid;
