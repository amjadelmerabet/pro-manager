import NetherlandsFlag from "../../../../assets/images/Netherlands flag.webp";
import { MdOutlineEdit, MdCheckBoxOutlineBlank } from "react-icons/md";

import "./Settings.css";
import { IconContext } from "react-icons";

export default function Settings() {
  return (
    <div className="settings">
      <div className="profile-settings-section">
        <h2 className="section-title poppins-semibold">Profile</h2>
        <div className="profile-settings">
          <button className="edit-button poppins-medium">
            <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
              <div className="edit-icon">
                <MdOutlineEdit />
              </div>
            </IconContext.Provider>
            <span>Edit</span>
          </button>
          <table className="profile-settings-properties">
            <tr>
              <td className="setting poppins-bold">First name</td>
              <td className="value poppins-regular">
                Jack
                <div className="readonly-filter"></div>
              </td>
            </tr>
            <tr>
              <td className="setting poppins-bold">Last name</td>
              <td className="value poppins-regular">
                Hertzog
                <div className="readonly-filter"></div>
              </td>
            </tr>
            <tr>
              <td className="setting poppins-bold">Phone</td>
              <td className="value poppins-regular">
                +31 98 06 93 88
                <div className="readonly-filter"></div>
              </td>
            </tr>
            <tr>
              <td className="setting poppins-bold">Country</td>
              <td className="value poppins-regular country">
                <div>
                  <div className="country-name poppins-regular">
                    Netherlands
                  </div>
                  <img
                    src={NetherlandsFlag}
                    style={{ height: "20px", borderRadius: "2.5px" }}
                    alt="Netherlands flag"
                    className="country-flag"
                  />
                </div>
                <div className="readonly-filter"></div>
              </td>
            </tr>
            <tr>
              <td className="setting poppins-bold">City</td>
              <td className="value poppins-regular">
                Amsterdam
                <div className="readonly-filter"></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="themes-settings-section">
        <h2 className="section-title poppins-semibold">Themes</h2>
        <div className="themes-settings">
          <button className="edit-button poppins-medium">
            <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
              <div className="edit-icon">
                <MdOutlineEdit />
              </div>
            </IconContext.Provider>
            <span>Edit</span>
          </button>
          <div className="theme-picker">
            <div className="theme-picker-label poppins-bold">Theme picker</div>
            <ul className="themes">
              <li className="theme poppins-bold theme0 default selected">
                Default
              </li>
              <li className="theme poppins-bold theme1"></li>
              <li className="theme poppins-bold theme2"></li>
              <li className="theme poppins-bold theme3"></li>
              <li className="theme poppins-bold theme4"></li>
              <li className="theme poppins-bold theme5"></li>
            </ul>
          </div>
          <div className="customize-your-theme">
            <div className="select-customize">
              <IconContext.Provider value={{ style: { fontSize: "24px", cursor: "pointer" } }}>
                <div className="check-icon">
                  <MdCheckBoxOutlineBlank />
                </div>
              </IconContext.Provider>
              <span className="poppins-bold">Customize</span>
            </div>
            <form className="custom-theme-form">
              <div className="readonly-filter"></div>
              <div className="form-input">
                <label htmlFor="font-color" className="poppins-regular">
                  Font color
                </label>
                <div className="color-picker"></div>
              </div>
              <div className="form-input">
                <label htmlFor="" className="poppins-regular">
                  Background color
                </label>
                <div className="color-picker"></div>
              </div>
              <div className="form-input">
                <label htmlFor="" className="poppins-regular">
                  Header color
                </label>
                <div className="color-picker"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
