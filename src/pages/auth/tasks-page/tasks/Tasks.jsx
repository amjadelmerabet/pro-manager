import { IconContext } from "react-icons";
import { BiFilterAlt } from "react-icons/bi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoList } from "react-icons/io5";

import "./Tasks.css";

export default function Tasks() {
  return (
    <div className="tasks">
      <div className="tasks-header">
        <h1 className="poppins-bold">Your tasks</h1>
        <div className="buttons">
          <IconContext.Provider value={{ style: { fontSize: "28px" } }}>
            <div className="icons">
              <div className="view">
                <div className="selected">
                  <IoList />
                </div>
                <div className="non-selected">
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
      <div className="all-tasks">
        <div className="task">
          <div className="name poppins-regular">Finish the English grammar homework</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">You</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Doing</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Design the landing page of the E-Shop application</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">Kim</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Doing</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Finish writing the first chapter of my book</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">You</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Done</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Test the new API that retrieves the users from DB</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">Kim</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">To do</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Make the wireframes for all the necessary pages of the website</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">You</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Done</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Finish the first chapter of JavaScript the crash course</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">You</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Done</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Finish the Math homework</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">You</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Done</div>
            </div>
          </div>
        </div>
        <div className="task">
          <div className="name poppins-regular">Finish the Spanish grammar homework</div>
          <div className="task-properties">
            <div className="pair">
              <div className="property poppins-bold">Assigned to</div>
              <div className="value poppins-regular">You</div>
            </div>
            <div className="pair">
              <div className="property poppins-bold">State</div>
              <div className="value poppins-regular">Doing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
