import { FaRegFileImage } from "react-icons/fa";

import "./DiveDeeper.css";

export default function DiveDeeper() {
  return (
    <div className="dive-deeper-section">
      <h2 className="title poppins-bold">Dive Deeper</h2>
      <div className="dive-deeper">
        <div className="feature">
          <div className="screenshot">
            <FaRegFileImage className="attachment-icon" />
          </div>
          <div className="feature-number-circle">
            <div className="feature-number poppins-bold">1</div>
          </div>
          <div className="dive-deeper-text">
            <div className="text">
              <p className="description poppins-bold">
                A secure system to manage user access, ensuring data privacy and
                personalized user experiences.
              </p>
              <ul className="key-points poppins-regular">
                <li>
                  Ensures data security by restricting unauthorized access.
                </li>
                <li>
                  Creates a personalized experience for users based on their
                  accounts.
                </li>
              </ul>
            </div>
            <a href="#" className="readmore poppins-regular-italic">
              Read more ...
            </a>
          </div>
        </div>
        <div className="feature">
          <div className="dive-deeper-text">
            <div className="text">
              <p className="description poppins-bold">
                A dynamic feature that provides live updates on the status of
                tasks, projects, and team activities.
              </p>
              <ul className="key-points poppins-regular">
                <li>Promotes transparency within teams.</li>
                <li>
                  Reduces delays caused by miscommunication or outdated
                  information.
                </li>
                <li>
                  Enhances user experience by making updates instantaneous.
                </li>
              </ul>
            </div>
            <a href="#" className="readmore poppins-regular-italic">
              Read more ...
            </a>
          </div>
          <div className="feature-number-circle">
            <div className="feature-number poppins-bold">2</div>
          </div>
          <div className="screenshot">
            <FaRegFileImage className="attachment-icon" />
          </div>
        </div>
        <div className="feature">
          <div className="screenshot">
            <FaRegFileImage className="attachment-icon" />
          </div>
          <div className="feature-number-circle">
            <div className="feature-number poppins-bold">3</div>
          </div>
          <div className="dive-deeper-text">
            <div className="text">
              <p className="description poppins-bold">
                A flexible tool to help users organize and view relevant data
                quickly.
              </p>
              <ul className="key-points poppins-regular">
                <li>
                  Saves time by reducing the need to sift through unnecessary
                  data.
                </li>
                <li>
                  Helps users focus on the most critical tasks or projects.
                </li>
                <li>
                  Improves workflow organization, especially in complex
                  projects.
                </li>
              </ul>
            </div>
            <a href="#" className="readmore poppins-regular-italic">
              Read more ...
            </a>
          </div>
        </div>
        <div className="feature">
          <div className="dive-deeper-text">
            <div className="text">
              <p className="description poppins-bold">
                Visual and analytical tools to help users measure and understand
                project and team performance.
              </p>
              <ul className="key-points poppins-regular">
                <li>Enhances decision-making with data-driven insights.</li>
                <li>
                  Helps users identify bottlenecks and areas for improvement.
                </li>
                <li>
                  Provides accountability by tracking and showcasing progress.
                </li>
              </ul>
            </div>
            <a href="#" className="readmore poppins-regular-italic">
              Read more ...
            </a>
          </div>
          <div className="feature-number-circle">
            <div className="feature-number poppins-bold">4</div>
          </div>
          <div className="screenshot">
            <FaRegFileImage className="attachment-icon" />
          </div>
        </div>
      </div>
      <a href="#" className="see-more poppins-regular-italic">
        See more features
      </a>
    </div>
  );
}
