import logo from "../Assessts/logo_blue.svg"
import dashboard from "../Assessts/menu items/Category.svg"
import uploadIcon from "../Assessts/menu items/Chart.svg"
import invoice from "../Assessts/menu items/Ticket.svg"
import schedule from "../Assessts/menu items/Document.svg"
import calender from "../Assessts/menu items/Calendar.svg"
import settings from "../Assessts/menu items/Setting.svg"
import noti from "../Assessts/menu items/Notification.svg"
const Menu = () => {
  const menuItems = [
    { icon: dashboard, label: 'Dashboard' },
    { icon: uploadIcon, label: 'Upload' },
    { icon: invoice, label: 'Invoice' },
    { icon: schedule, label: 'Schedule' },
    { icon: calender, label: 'Calendar' },
    { icon: noti, label: 'Notification' },
    { icon: settings, label: 'Settings' },
  ];

  return (
    <nav className="flex flex-col items-start justify-start pt-[1px] text-base text-gray-200 font-nunito pb-32">
      <div className="hidden md:flex self-stretch " />
      {menuItems.map((menuItem, index) => (
        <div key={index} className="flex flex-row items-start justify-start py-0 px-[31px]">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row gap-2 cursor-pointer">
              <img src={menuItem.icon} alt="my-logo" className="max-w-28 max-h-28"/>
            <p className="leading-6 text-abovebase text-[#030229]">{menuItem.label}</p>
          </div>
          </div>
        </div>
      ))}

    </nav>
  );
};

export default Menu;
