import "./Widgets.css";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widget">
        <div className="widget-name poppins-semibold">Projects in progress</div>
        <div className="widget-value poppins-bold">8</div>
        <a href="" className="show-list-link poppins-regular-italic">Show the list</a>
      </div>
      <div className="widget">
        <div className="widget-name poppins-semibold">Tasks assigned to you</div>
        <div className="widget-value poppins-bold">23</div>
        <a href="" className="show-list-link poppins-regular-italic">Show the list</a>
      </div>
      <div className="widget">
        <div className="widget-name poppins-semibold">Today's tasks</div>
        <div className="widget-value poppins-bold">5</div>
        <a href="" className="show-list-link poppins-regular-italic">Show the list</a>
      </div>
      <div className="widget">
        <div className="widget-name poppins-semibold">Tasks for this week</div>
        <div className="widget-value poppins-bold">13</div>
        <a href="" className="show-list-link poppins-regular-italic">Show the list</a>
      </div>
      <div className="widget">
        <div className="widget-name poppins-semibold">Inbox</div>
        <div className="widget-value poppins-bold">7</div>
        <a href="" className="show-list-link poppins-regular-italic">Show the list</a>
      </div>
      <div className="widget">
        <div className="widget-name poppins-semibold">Completed tasks</div>
        <div className="widget-value poppins-bold">45</div>
        <a href="" className="show-list-link poppins-regular-italic">Show the list</a>
      </div>
    </div>
  )
}