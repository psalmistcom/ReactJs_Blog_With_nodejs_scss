import React from 'react'

const Menu = () => {
    
  const posts = [
    {
      id: 1,
      title: "Where does it come from?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img:"https://media.istockphoto.com/photos/lagos-nigeria-lekkiikoyi-bridge-lagos-landmark-infrastructure-and-picture-id1129845783?k=20&m=1129845783&s=612x612&w=0&h=lwWik3dZEfDt3yTRVxjX4Vp3v6oakafbyMJvojqFPLU="
    }, 
    {
      id: 2,
      title: "Why do we use it?",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      img:"https://media.gettyimages.com/photos/high-angle-view-of-buildings-in-city-picture-id997757812?s=612x612"
    }, 
    {
      id: 3,
      title: "Where can I get some?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
      img:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    },
    {
      id: 4,
      title: "What is Lorem Ipsum",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, c",
      img:"https://images.pexels.com/photos/2193349/pexels-photo-2193349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }

  ]

  return (
    <div className="menu">
        <h1>Other Posts you may like </h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
