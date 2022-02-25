import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" alt="" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Atharva</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit natus, ex quaerat fuga sequi quae eveniet repudiandae saepe numquam earum facere cupiditate, porro, harum magnam magni doloribus mollitia non?
                Earum possimus expedita, maxime tempore, velit iste eaque minus ea consectetur soluta repellat quidem quod ex nostrum labore laboriosam, reiciendis recusandae deleniti! In eveniet nesciunt ipsum, voluptas hic a magni.
                Porro, beatae omnis quia sit qui ex, explicabo facere eum optio animi debitis similique magnam at totam mollitia in est ullam placeat voluptates, reiciendis veritatis. Tenetur ipsa magnam commodi ab?
            </p>
        </div>
    </div>
  )
}
