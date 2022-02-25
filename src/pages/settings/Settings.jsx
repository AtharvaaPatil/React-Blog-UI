import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Atharva" />
            <label>Email</label>
            <input type="email" placeholder="atharva@gmail.com" />
            <label>Username</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
