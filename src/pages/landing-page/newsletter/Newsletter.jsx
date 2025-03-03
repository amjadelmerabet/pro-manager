import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <h2 className="title poppins-bold">Join our Newsletter</h2>
      <form className="join-our-newsletter">
        <input type="text" name="email" id="email" className="email poppins-regular" placeholder="Type your email here ..." />
        <input type="submit" value="Submit" className="poppins-bold" />
      </form>
    </div>
  )
}