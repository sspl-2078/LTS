import React from 'react'
import './style.css'
const About = () => {
  const a=200;
  return (
    <div className='About'>
      <div className="head">
      <h1 style={{padding:'10px'}}>
        About Us
      </h1>
      <p className='discription'>
        This web application is a minor projected by four students studying computer engineering at himalaya college of engineering, <b>Santu Jhankri Magar</b>,<b> Raghabendra Chaudhary</b>,<b> Sambad Khatiwada </b> and<b> Lokendra Joshi</b>.
      </p>
      <h1>Developing Team</h1>
      </div>
  <div className="developers">
        
      <div className="developer_photo">
          <div className="prince">
        <img  className='hancy_haru 'src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/155456554_1384003541948951_384912651063789294_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=4M_m6fBUmZQQ7kNvgF-Sh9d&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=A5ksOF5rHnvXe8Qf5L8dd4B&oh=00_AYCx-ycDUUH7S8l3gDMT6FTxqCXUdSNS9uuoypcp-RBSag&oe=6766BF0A"width={a} alt="Prince" />
        <div className="role">
            <p>Layout Design And Chatbot</p>
            <h3>Raghabendra Chaudhary</h3>
        </div>
        </div>
        </div>
        <div className="developer_photo">
          <div className="prince">
        <img  className='hancy_haru 'src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/319384606_1777877555932287_1061245700767951226_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=UTuzZfJiS-8Q7kNvgEwlDrU&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AOL6n5NqL-gT2yV-s-B1MlB&oh=00_AYAucp2sgc8e2MRf7gzjvMO19zEudHLm5Qo7ToBphSxFvA&oe=674507CC"width={a} alt="Sambad" />
        <div className="role">
            <p>Frontend And Project Management</p>
            <h3>Sambad Khatiwada</h3>
        </div>
        </div>
        </div>
        <div className="developer_photo">
          <div className="prince">
        <img  className='hancy_haru 'src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/286455834_1441269849644537_4934927569047108976_n.jpg?stp=dst-jpg_s100x100&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=rlb9K4ycpgcQ7kNvgGHDaTH&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AK8enKjCTOXhuA1vPMkLnbr&oh=00_AYDh-kAM0kUv_6Stvy-u0jGr65kfGsBgdVg1Q5Jq5UzfmA&oe=6745132F"width={a} alt="Sambad" />
        <div className="role">
            <p>Backend </p>
            <h3>Santu Jhankri Magar</h3>
        </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
