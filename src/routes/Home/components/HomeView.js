import React from 'react'
import EagleImg from '../assets/eagle.jpg'
import GerImg from '../assets/ger.jpg'
import github from '../assets/gitHub.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import social from '../assets/social.jpg'
import { IndexLink, Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div className="home">
    <div className="about-me">
      <h1>Noah Peden: Front End Developer</h1>
      <p>Noah is a front-end web developer, Colorado native, and returned Peace Corps Volunteer to Mongolia. He is passionate about anything to do with Github work flows, React, and new frameworks. His dream is to live and work in downtown Denver and go to all the Rockies/Broncos games he can while skiing in the winter and hiking in the summer.
    </p>
    <ul>
        <p>Here are some of Noah's <strong>skills</strong> that don't involve lighting dung fires or hungting with eagles:
        </p>
      <li><span>Vanilla Javascript, jQuery, Sass, HTML, CSS, Git</span></li>
      <li><span>React, React Router, Redux, Ember, Node.js, Express.js</span></li>
      <li><span>Testing: Mocha, Chai, Enzyme, Jest, Selenium</span></li>
      <li><span>Foreign languages: Portuguese, Spanish, Mongolian</span></li>
    </ul>
    </div>
  <div className="contact">

        <div className="hovereffect1">
            <img className="img-responsive1" src={EagleImg} alt=""/>
                <div className="overlay1">
                  <h2 className="contact-me">Contact Me</h2>
    				<p>
    				  <a href="mailto:noahpede@gmail.com" className="email-me">Email me!</a>
    				</p>
                </div>
        </div>
  </div>
  <div className="Projects">
      <div className="hovereffect1">
          <img className="img-responsive1" src={GerImg} alt=""/>
            <div className="overlay1">
                <h2>PROJECTS</h2>
                <Link to="/projects">
				 <p>
					View My Projects Here
				</p>
      </Link>
      </div>
    </div>
  </div>
  <div className="social">
    <div className="background-image"></div>
    <div className="content">
    <a href="http://www.twitter.com/noahpeden"><img className="twitter" src={twitter}/></a>
    <a href="http://www.github.com/noahpeden"><img className="github" src={github}/></a>
    <a href="http://www.linkedin.com/in/noahpeden"><img className="linkedin" src={linkedin}/></a>
    </div>
  </div>
</div>
)

export default HomeView
