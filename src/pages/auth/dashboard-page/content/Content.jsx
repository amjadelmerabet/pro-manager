import { MdOutlineCheckBox, MdOutlineFolderOpen } from "react-icons/md";
import "./Content.css";
import Widgets from "../widgets/Widgets";

export default function Content() {
  return (
    <div className="content">
      <main className="main-content">
        <div className="recent-pages">
          <h3 className="poppins-bold recent-section-title">Recent pages</h3>
          <div className="recent-pages-list">
            <div className="recent-page selected-page">
              <div className="recent-page-header">
                <div className="recent-page-icon">
                  <MdOutlineCheckBox />
                </div>
                <h4 className="poppins-regular recent-page-title">
                  Finish the first chapter
                </h4>
              </div>
              <table className="poppins-regular recent-page-properties">
                <tr>
                  <td className="property poppins-bold">Status</td>
                  <td className="value poppins-regular">Doing</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Assigned to</td>
                  <td className="value poppins-regular">You</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated at</td>
                  <td className="value poppins-regular">Yesterday</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated by</td>
                  <td className="value poppins-regular">You</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Created at</td>
                  <td className="value poppins-regular">12/20/2024</td>
                </tr>
              </table>
              <a href="#" className="open-link poppins-regular-italic">
                Click to open
              </a>
            </div>
            <div className="recent-page">
              <div className="recent-page-header">
                <div className="recent-page-icon">
                  <MdOutlineFolderOpen />
                </div>
                <h4 className="poppins-regular recent-page-title">
                  English class
                </h4>
              </div>
              <table className="poppins-regular recent-page-properties">
                <tr>
                  <td className="property poppins-bold">Status</td>
                  <td className="value poppins-regular">In progress</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Category</td>
                  <td className="value poppins-regular">Homework</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated at</td>
                  <td className="value poppins-regular">Yesterday</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated by</td>
                  <td className="value poppins-regular">You</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Created at</td>
                  <td className="value poppins-regular">12/20/2024</td>
                </tr>
              </table>
              <a href="#" className="open-link poppins-regular-italic">
                Click to open
              </a>
            </div>
            <div className="recent-page">
              <div className="recent-page-header">
                <div className="recent-page-icon">
                  <MdOutlineCheckBox />
                </div>
                <h4 className="poppins-regular recent-page-title">
                  Setup Node JS on my ...
                </h4>
              </div>
              <table className="poppins-regular recent-page-properties">
                <tr>
                  <td className="property poppins-bold">Status</td>
                  <td className="value poppins-regular">Done</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Assigned to</td>
                  <td className="value poppins-regular">Aiden Kim</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated at</td>
                  <td className="value poppins-regular">Last Friday</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated by</td>
                  <td className="value poppins-regular">You</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Created at</td>
                  <td className="value poppins-regular">01/05/2025</td>
                </tr>
              </table>
              <a href="#" className="open-link poppins-regular-italic">
                Click to open
              </a>
            </div>
            <div className="recent-page">
              <div className="recent-page-header">
                <div className="recent-page-icon">
                  <MdOutlineCheckBox />
                </div>
                <h4 className="poppins-regular recent-page-title">
                  Database modeling
                </h4>
              </div>
              <table className="poppins-regular recent-page-properties">
                <tr>
                  <td className="property poppins-bold">Status</td>
                  <td className="value poppins-regular">Doing</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Assigned to</td>
                  <td className="value poppins-regular">Aiden Kim</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated at</td>
                  <td className="value poppins-regular">02/25/2025</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Updated by</td>
                  <td className="value poppins-regular">Aiden Kim</td>
                </tr>
                <tr>
                  <td className="property poppins-bold">Created at</td>
                  <td className="value poppins-regular">02/20/2025</td>
                </tr>
              </table>
              <a href="#" className="open-link poppins-regular-italic">
                Click to open
              </a>
            </div>
          </div>
        </div>
        <Widgets />
        <div className="quick-actions-section">
          <h3 className="quick-actions-title poppins-bold">Quick actions</h3>
          <ul className="quick-actions">
            <li className="quick-action poppins-regular">Create a new task</li>
            <li className="quick-action poppins-regular">
              Create a new project
            </li>
            <li className="quick-action poppins-regular">
              Complete today's tasks
            </li>
          </ul>
        </div>
      </main>
      <nav className="selected-page-info">
        <div className="selected-page-header">
          <div className="selected-page-icon">
            <MdOutlineCheckBox />
          </div>
          <div className="selected-page-title poppins-bold">
            Finish the first chapter of grammar
          </div>
        </div>
        <div className="selected-page-content">
          <table className="selected-page-properties">
            <tr>
              <td className="selected-page-property poppins-bold">Status</td>
              <td className="selected-page-value poppins-regular">Doing</td>
            </tr>
            <tr>
              <td className="selected-page-property poppins-bold">
                Assigned to
              </td>
              <td className="selected-page-value poppins-regular">You</td>
            </tr>
            <tr>
              <td className="selected-page-property poppins-bold">
                Updated at
              </td>
              <td className="selected-page-value poppins-regular">Yesterday</td>
            </tr>
            <tr>
              <td className="selected-page-property poppins-bold">
                Updated by
              </td>
              <td className="selected-page-value poppins-regular">You</td>
            </tr>
            <tr>
              <td className="selected-page-property poppins-bold">
                Created at
              </td>
              <td className="selected-page-value poppins-regular">
                12/20/2024
              </td>
            </tr>
            <tr>
              <td className="selected-page-property poppins-bold">
                Created by
              </td>
              <td className="selected-page-value poppins-regular">Aiden Kim</td>
            </tr>
            <tr>
              <td className="selected-page-property poppins-bold">Priority</td>
              <td className="selected-page-value poppins-regular">High</td>
            </tr>
          </table>
          <h4 className="description-property-label poppins-bold">Description</h4>
          <p className="selected-page-description poppins-regular">
            "Finish the first chapter of grammar" involves reading,
            understanding, and completing all exercises or examples in the first
            chapter of a grammar book or study material. Focus on key concepts,
            definitions, and rules presented in the chapter. Ensure you practice
            any included questions or assignments to solidify your
            understanding. Mark the chapter as complete once you're confident
            with the material.
          </p>
        </div>
      </nav>
    </div>
  );
}
