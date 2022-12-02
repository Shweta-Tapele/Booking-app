import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Stay with us, Feel at home</h1>
      <span className="mailDesc"><h2>Sign up soon!</h2></span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button><h2>Subscribe</h2></button>
      </div>
    </div>
  )
}

export default MailList