const Settings = () => {
  return (
    <div className="flex flex-col gap-[50px] px-[50px] md:px-[150px] lg:px-[200px] pt-[150px] pb-[25px] bg-[#F0F0F0]">
      <div className="flex items-center flex-wrap">
        <span className="font-medium text-[18px] text-[#7A8CA1] w-[726px]">
          This is the Settings page, here you can manage your personal
          preferences, your profit pings preferences, and your ResellX
          subscription.
        </span>
      </div>

      <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[40px] px-[35px] gap-[40px] overflow-hidden flex-wrap">
        <span className="font-semibold text-[26px] text-[#032853]">
          Personal Information
        </span>

        <div className="flex gap-[30px] flex-wrap justify-between">
          <div className="flex flex-col gap-[27.5px]">
            <div className="flex items-center gap-[20px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Discord Linked to*
              </span>

              <span className="font-semibold text-[16px] text-[#628FFF] underline underline-offset-[2.5px] cursor-pointer">
                Edit
              </span>
            </div>

            <div className="flex gap-[20px] items-center">
              <div className="w-[45px] h-[45px] border-[2px] border-[#CCCCCC] rounded-full">
                <img className="w-full h-full" src="" alt="" />
              </div>

              <span className="font-semibold text-[#7A8CA1] text-[18px]">
                poopsicle#0001
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Email*
              </span>

              <span className="font-semibold text-[16px] text-[#628FFF] underline underline-offset-[2.5px] cursor-pointer">
                Save
              </span>
            </div>

            <input
              type="text"
              placeholder="email@email.com"
              className="font-semibold text-[#032853] text-[14px] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Phone Number
              </span>

              <span className="font-semibold text-[16px] text-[#628FFF] underline underline-offset-[2.5px] cursor-pointer">
                Save
              </span>
            </div>

            <input
              type="text"
              placeholder="123-456-7890"
              className="font-semibold text-[#032853] text-[14px] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Home State
              </span>

              <span className="font-semibold text-[16px] text-[#628FFF] underline underline-offset-[2.5px] cursor-pointer">
                Save
              </span>
            </div>

            <select className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px] less-select">
              <option value="">State</option>
            </select>
          </div>
        </div>

        <span className="font-semibold text-[26px] text-[#032853]">
          Profit Preferences
        </span>

        <div className="flex flex-wrap gap-[75px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Bad Profit*
              </span>

              <span className="font-semibold text-[16px] text-[#628FFF] underline underline-offset-[2.5px] cursor-pointer">
                Save
              </span>
            </div>

            <div className="flex items-center gap-[15px]">
              <span className="font-semibold text-[#7A8CA1] text-[18px]">
                Less than:
              </span>

              <input
                type="text"
                placeholder="XX%"
                className="font-medium text-[14px] text-[#032853] h-[35px] w-[57.5px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[12.5px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[20px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Good Profit*
              </span>

              <span className="font-semibold text-[16px] text-[#628FFF] underline underline-offset-[2.5px] cursor-pointer">
                Save
              </span>
            </div>

            <div className="flex items-center gap-[15px]">
              <span className="font-semibold text-[#7A8CA1] text-[18px]">
                More than:
              </span>

              <input
                type="text"
                placeholder="XX%"
                className="font-medium text-[14px] text-[#032853] h-[35px] w-[57.5px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[12.5px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[27.5px]">
          <span className="font-semibold text-[26px] text-[#032853]">
            Subscription Preferences
          </span>

          <button className="w-full max-w-[475px] h-[35px] rounded-[3.5px] bg-[#F0F0F0] font-semibold text-[13px] text-[#7A8CA1]">
            Manage Via WHOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
