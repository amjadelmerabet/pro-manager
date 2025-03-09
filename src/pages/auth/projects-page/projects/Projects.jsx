import { IoList } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import { MdOutlineFolderOpen } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { IconContext } from "react-icons";

import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="poppins-bold">Your projects</h1>
        <div className="buttons">
          <IconContext.Provider value={{ style: { fontSize: "28px" } }}>
            <div className="icons">
              <div className="view">
                <div className="non-selected">
                  <IoList />
                </div>
                <div className="selected">
                  <HiOutlineViewGrid />
                </div>
              </div>
              <div className="filter poppins-regular">
                <BiFilterAlt />
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="all-projects">
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
        <div className="project">
          <IconContext.Provider value={{ style: { fontSize: "120px" } }}>
            <div className="project-icon">
              <LuFileText />
            </div>
          </IconContext.Provider>
          <div className="project-title">
            <IconContext.Provider value={{ style: { fontSize: "32px" } }}>
              <div className="icon">
                <MdOutlineFolderOpen />
              </div>
            </IconContext.Provider>
            <div className="name poppins-bold">English class</div>
          </div>
          <table className="project-properties">
            <tr>
              <td className="property poppins-bold">State</td>
              <td className="value poppins-regular">In progress</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Category</td>
              <td className="value poppins-regular">School</td>
            </tr>
            <tr>
              <td className="property poppins-bold">Created by</td>
              <td className="value poppins-regular">You</td>
            </tr>
          </table>
          <div className="updated poppins-regular">Updated 2h ago</div>
        </div>
      </div>
    </div>
  );
}
