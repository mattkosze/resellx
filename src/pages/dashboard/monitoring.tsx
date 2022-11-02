import { useState } from "react";
import { DashboardInput } from "../../components";

const Dashboard = () => {
  const [websites, setWebsites] = useState([
    {
      title: "A-Ma-Maniere",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "AtmosUSA",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Cncpts",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Kith",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "ShoePalace",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "ShopNiceKicks",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Undefeated",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Union LA",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Xhibition",
      value: "Webhook URL...",
      id: `website-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
  ]);

  const [groups, setGroups] = useState([
    {
      title: "Announcements",
      value: "Webhook URL...",
      id: `group-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Main-Monitor",
      value: "Webhook URL...",
      id: `group-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "All-Profit-Monitor",
      value: "Webhook URL...",
      id: `group-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Good-Profit-Monitor",
      value: "Webhook URL...",
      id: `group-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Medium-Profit-Monitor",
      value: "Webhook URL...",
      id: `group-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
    {
      title: "Bad-Profit-Monitor",
      value: "Webhook URL...",
      id: `group-input-${Math.floor(Math.random() * 1252581)}`,
      deletable: false,
    },
  ]);

  const [newWebsiteData, setNewWebsiteData] = useState({
    title: "",
    value: "",
    id: "",
  });

  const [newGroupData, setNewGroupData] = useState({
    title: "",
    value: "",
    id: "",
  });

  const [onOrOff, setOnOrOff] = useState(true);
  return (
    <div>
      <div className="flex flex-col gap-[50px] px-[75px] md:px-[125px] pt-[150px] pb-[25px] bg-[#F0F0F0]">
        <div className="flex items-center gap-[20px] flex-wrap">
          <span className="font-semibold text-[18px] text-[#032853] whitespace-nowrap">
            Monitoring Status
          </span>

          <div className="flex gap-[15px]">
            <button
              onClick={() => setOnOrOff(true)}
              className={`w-[60px] h-[35px] rounded-[3.5px] ${
                onOrOff
                  ? "bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF]"
                  : "bg-[#CCCCCC]"
              } font-semibold text-[13px] text-white`}
            >
              On
            </button>

            <button
              onClick={() => setOnOrOff(false)}
              className={`w-[60px] h-[35px] rounded-[3.5px] ${
                !onOrOff
                  ? "bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF]"
                  : "bg-[#CCCCCC]"
              } font-semibold text-[13px] text-white`}
            >
              Off
            </button>
          </div>

          <span className="font-medium text-[18px] text-[#7A8CA1] w-[726px]">
            This is the Monitoring Management Page, here you can manage
            webhooks, create new monitoring groups, and control your ResellX
            preferences.
          </span>
        </div>

        <div className="flex justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[40px] px-[35px] gap-[65px] overflow-hidden flex-wrap">
          <div className="flex flex-col gap-[35px]">
            <span className="font-semibold text-[26px] text-[#032853]">
              Monitoring Websites
            </span>

            <div className="flex flex-col gap-[25px]">
              {websites.map((website, index) => {
                return (
                  <DashboardInput
                    key={`website-input-${index}`}
                    title={website.title}
                    value={website.value}
                    id={website.id}
                    del={website.deletable && index === websites.length - 1}
                    rem={() => {
                      setWebsites(
                        websites.filter((item) => item.id !== website.id)
                      );
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-[35px]">
            <span className="font-semibold text-[26px] text-[#032853]">
              Monitoring Groups
            </span>

            <div className="flex flex-col gap-[25px]">
              {groups.map((group, index) => {
                return (
                  <DashboardInput
                    key={`group-input-${index}`}
                    title={group.title}
                    value={group.value}
                    id={group.id}
                    del={group.deletable && index === groups.length - 1}
                    rem={() => {
                      setGroups(groups.filter((item) => item.id !== group.id));
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap w-full gap-[40px]">
          <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[40px] px-[35px] gap-[20px] w-full">
            <span className="font-medium text-[18px] text-[#032853]">
              Add New Website
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                onChange={(e) =>
                  setNewWebsiteData({
                    ...newWebsiteData,
                    title: e.target.value,
                  })
                }
                value={newWebsiteData.title}
                type="text"
                placeholder="Webhook Name"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <input
                type="text"
                placeholder="Website Link"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <input
                onChange={(e) =>
                  setNewWebsiteData({
                    ...newWebsiteData,
                    value: e.target.value,
                  })
                }
                value={newWebsiteData.value}
                type="text"
                placeholder="Webhook URL"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />
            </div>

            <button
              onClick={() => {
                if (newWebsiteData.title === "" || newWebsiteData.value === "")
                  return;

                setWebsites([
                  ...websites,
                  {
                    ...newWebsiteData,
                    id: `website-input-${Math.floor(Math.random() * 1252581)}`,
                    deletable: true,
                  },
                ]);

                setNewWebsiteData({
                  title: "",
                  value: "",
                  id: "",
                });
              }}
              className="h-[40px] rounded-[4.5px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[16px]"
            >
              Save
            </button>
          </div>

          <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[40px] px-[35px] gap-[20px] w-full">
            <span className="font-medium text-[18px] text-[#032853]">
              Add New Group
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                onChange={(e) =>
                  setNewGroupData({
                    ...newGroupData,
                    title: e.target.value,
                  })
                }
                value={newGroupData.title}
                type="text"
                placeholder="Group Name"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <select className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]">
                <option value="">Select Website</option>
                {websites.map((website) => {
                  return <option value={website.title}>{website.title}</option>;
                })}
              </select>

              <input
                onChange={(e) =>
                  setNewGroupData({
                    ...newGroupData,
                    value: e.target.value,
                  })
                }
                value={newGroupData.value}
                type="text"
                placeholder="Webhook URL"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />
            </div>

            <button
              onClick={() => {
                setGroups([
                  ...groups,
                  {
                    ...newGroupData,
                    id: `group-input-${Math.floor(Math.random() * 1252581)}`,
                    deletable: true,
                  },
                ]);

                setNewGroupData({
                  title: "",
                  value: "",
                  id: "",
                });
              }}
              className="h-[40px] rounded-[4.5px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[16px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
