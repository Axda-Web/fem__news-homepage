export default function HomePageLoading() {
  return (
    <div className="space-y-16 md:space-y-20 xl:space-y-24">
      <div className="xl:grid xl:h-[511px] xl:grid-cols-3 xl:gap-x-7 space-y-16 md:space-y-20 xl:space-y-0">
        <div className="md:grid md:grid-cols-2 md:grid-rows-[repeat(2, auto)] md:col-span-2 md:row-span-2 md:gap-6">
          <div className="sm:hidden mb-6 w-[343px] h-[300px] bg-slate-200 animate-pulse" />
          <div className="hidden sm:block sm:col-span-2 w-[730px] h-[300px] bg-slate-200 animate-pulse" />
          <div className="space-y-4 mb-4 sm:mb-0">
            <div className="bg-slate-200 animate-pulse h-12 w-[260px]"></div>
            <div className="bg-slate-200 animate-pulse h-12 w-[260px]"></div>
            <div className="bg-slate-200 animate-pulse h-12 w-[260px]"></div>
          </div>
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-start space-y-6 sm:space-y-0">
            <div className="bg-slate-200 animate-pulse h-24 w-full"></div>
            <div className="bg-slate-200 animate-pulse h-12 w-[180px]"></div>
          </div>
        </div>
        <div className="sm:row-span-2 bg-slate-200 animate-pulse px-6 py-8">
          <div className="bg-slate-300 animate-pulse h-12 w-24"></div>
          <div className="divide-y-2 divide-slate-300">
            <div className="py-8">
              <div className="mb-2">
                <div className="bg-slate-300 animate-pulse h-5 w-full"></div>
              </div>
              <div className="bg-slate-300 animate-pulse h-12 w-full"></div>
            </div>
            <div className="py-8">
              <div className="mb-2">
                <div className="bg-slate-300 animate-pulse h-5 w-full"></div>
              </div>
              <div className="bg-slate-300 animate-pulse h-12 w-full"></div>
            </div>
            <div className="py-8">
              <div className="mb-2">
                <div className="bg-slate-300 animate-pulse h-5 w-full"></div>
              </div>
              <div className="bg-slate-300 animate-pulse h-12 w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:flex md:flex-wrap md:items-center xl:justify-between md:gap-6 space-y-8 md:space-y-0">
          <div>
            <div className="flex gap-x-6 justify-between max-w-[350px]">
              <div className="bg-slate-200 animate-pulse w-[100px] h-[127px]" />
              <div className="flex flex-col justify-between py-1">
                <span className="bg-slate-200 animate-pulse w-10 h-8"></span>
                <div>
                  <div className="bg-slate-200 animate-pulse h-5 w-[200px]"></div>
                </div>
                <div className="bg-slate-200 animate-pulse h-12 w-[200px]"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-x-6 justify-between max-w-[350px]">
              <div className="bg-slate-200 animate-pulse w-[100px] h-[127px]" />
              <div className="flex flex-col justify-between py-1">
                <span className="bg-slate-200 animate-pulse w-10 h-8"></span>
                <div>
                  <div className="bg-slate-200 animate-pulse h-5 w-[200px]"></div>
                </div>
                <div className="bg-slate-200 animate-pulse h-12 w-[200px]"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-x-6 justify-between max-w-[350px]">
              <div className="bg-slate-200 animate-pulse w-[100px] h-[127px]" />
              <div className="flex flex-col justify-between py-1">
                <span className="bg-slate-200 animate-pulse w-10 h-8"></span>
                <div>
                  <div className="bg-slate-200 animate-pulse h-5 w-[200px]"></div>
                </div>
                <div className="bg-slate-200 animate-pulse h-12 w-[200px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
