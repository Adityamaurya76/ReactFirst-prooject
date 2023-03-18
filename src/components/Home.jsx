import React from 'react'
import vg from "../assets/2.webp"
import{AiFillGoogleCircle,AiFillAmazonCircle,AiOutlineYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>solution to all your technical problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>
          we are your one and only solution to the tech problem
          you face
          everyday. We are leading tech company whose aim is to
          increase the 
          problem solving ability in children.
        </p>
      </div>
    </div>
  
    <div className="home3" id="about">
      <div>
      <h1>Who we are</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officiis neque voluptas, blanditiis eligendi dolorem quasi natus!
          Velit atque numquam explicabo ullam impedit vitae dicta eveniet quam 
          repellendus labore deleniti, officiis consequatur repudiandae.
           Cupiditate temporibus exercitationem nostrum. Id repudiandae incidunt
            fugiat neque ratione ut laudantium quis debitis aliquam tempora hic 
            dolorem maxime eveniet
             quasi natus dolore, quaerat suscipit voluptatum deleniti ad optio.
              Nihil optio dignissimos sequi quae molestias dolore voluptate ut.
      </p>
      </div>
    </div>
  
  <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>
      <article>
      <div style={{
    animationDelay:".3s",
      }}>
        <AiFillGoogleCircle/>
        <p>Google</p>
      </div>
      <div style={{
    animationDelay:".5s",
      }}>
     <AiFillAmazonCircle/>
        <p>Amazon</p>
      </div>
      <div style={{
    animationDelay:".7s",
      }}>
        <AiOutlineYoutube/>
        <p>Youtube</p>
      </div>
      <div style={{
    animationDelay:".9s",
      }}>
        <AiFillInstagram/>
        <p>Instagram</p>
      </div>
      </article>
    </div>
  </div>
   </>
  );
};

export default Home