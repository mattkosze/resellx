import { DashboardInputProps } from "../interfaces";

const DashboardInput = ({ title, value, del, rem }: DashboardInputProps) => {
  return (
    <div className="flex flex-col gap-[17.5px]">
      <span className="font-medium text-[18px] text-[#032853]">{title}</span>

      <div className="flex flex-wrap md:flex-nowrap gap-[12.5px]">
        <input
          type="text"
          placeholder={value}
          style={{
            maxWidth: del ? "310px" : "345px",
          }}
          className="w-full font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
        />

        <div className={`flex ${del ? "gap-[8.2px]" : "gap-[12.5px]"}`}>
          <button
            style={{
              width: del ? "60px" : "70px",
              fontSize: del ? "11px" : "13px",
            }}
            className="h-[40px] rounded-[4.5px] bg-[#032853] font-semibold text-white"
          >
            Test
          </button>

          <button
            style={{
              width: del ? "60px" : "70px",
              fontSize: del ? "11px" : "13px",
            }}
            className="h-[40px] rounded-[4.5px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white"
          >
            Save
          </button>

          {del && (
            <button
              onClick={rem}
              className="w-[53px] h-[40px] rounded-[4.5px] bg-[#F0F0F0] font-semibold text-[11px] text-[#7A8CA1]"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardInput;
