import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="writeImg"/>
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/> 
                {/* To remove the choose file button display: "none"*/}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea type="text" placeholder="Tell us your story..." className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  );
}
