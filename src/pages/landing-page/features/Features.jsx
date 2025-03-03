import { RiUserLine, RiTimeLine } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";

import "./Features.css";

export default function Features() {

  return (
    <div className="features-section">
      <h2 className="title poppins-bold">Powerful Features</h2>
      <div className="features">
        <div className="feature">
          <div className="feature-header">
            <div className="feature-icon">
              <RiUserLine />
            </div>
            <div className="feature-name poppins-bold">
              User authentication
            </div>
          </div>
          <div className="feature-overview poppins-regular">
            Securely manage user access with features like sign-up, login, and
            password recovery. Ensure that only authorized users can access
            their personalized dashboards and project data.
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <div className="feature-icon">
              <RiTimeLine />
            </div>
            <div className="feature-name poppins-bold">
              Real time tracking
            </div>
          </div>
          <div className="feature-overview poppins-regular">
            Keep up-to-date with live updates on task progress, project
            milestones, and team activities. See changes as they happen,
            ensuring transparency and efficient decision-making.
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <div className="feature-icon">
              <BiFilterAlt />
            </div>
            <div className="feature-name poppins-bold">
              Advanced filters
            </div>
          </div>
          <div className="feature-overview poppins-regular">
            Quickly narrow down tasks and projects by applying filters such as
            status, priority, due date, or team member. Save time and find
            exactly what you need with minimal effort.
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <div className="feature-icon">
              <HiOutlineChartPie />
            </div>
            <div className="feature-name poppins-bold">
              Charts & reports
            </div>
          </div>
          <div className="feature-overview poppins-regular">
            Visualize your progress and performance through detailed charts and
            reports. Gain insights into task completion rates, team
            productivity, and project timelines for better planning.
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <div className="feature-icon">
              <PiUsersThree />
            </div>
            <div className="feature-name poppins-bold">
              Team collaboration
            </div>
          </div>
          <div className="feature-overview poppins-regular">
            Work seamlessly with your team by assigning tasks, sharing updates,
            and communicating in real-time. Enhance productivity and keep
            everyone aligned with a centralized workspace.
          </div>
        </div>
        <div className="feature">
          <div className="feature-header">
            <div className="feature-icon">
              <HiOutlineSearch />
            </div>
            <div className="feature-name poppins-bold">Advanced search</div>
          </div>
          <div className="feature-overview poppins-regular">
            Find tasks, projects, or team members instantly with a powerful
            search feature. Search using keywords,  poppins-regulartags, or custom parameters to
            locate specific information with ease.
          </div>
        </div>
      </div>
    </div>
  );
}
