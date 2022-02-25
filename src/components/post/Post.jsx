import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" className="postImg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium doloribus rerum explicabo dolorem, commodi earum blanditiis molestiae vero ipsam fuga quod ut quae nesciunt deserunt aspernatur cum debitis quibusdam minus?
        </p>
    </div>
  );
}