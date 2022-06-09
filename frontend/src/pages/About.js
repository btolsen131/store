import React from 'react'
import {container} from 'react-bootstrap'

const About = () => {
  return (
    <div className="container">
    <h1>About Page</h1>
    <div>
      <h4>About this project</h4>
      <p>
        This is a small portfolio project created by Brian Olsen (Username: brianolsen).
        This project is a small eCommerce website featuring a eclectic items that would be available for purchase in my dream store.
        **None of this is actually for sale**
      </p>
      <h4>How is it made?</h4>
      <p>
        This project is built using Django for the backend and React for the frontend. The website design was created
        using Bootstrap classes. Currently, the website uses a local SQLite database to store the Item and Order data.
        if this project is made active online, I will upgrade the database to MySQL or PostgreSQL.
      </p>
      <h4> About the creator</h4>
      <p>
        My name is Brian Olsen, and I am a self-taught full stack developer. I have experience with Python(Flask and Django),
        R, SQL, JavaScript(React and NodeJS), HTML and CSS. While I spend my spare time learning and developing my programming skills,
        my day-to-day work is in the financial services industry. I am currently the Operations Manager of one of the world's largest
        Quantitative Asset Management firms. This background has provided a strong analytical mindset and improved my decision making
        and problem solving skills.
      </p>
      <p>
        If you wish to contact me, please feel free to reach out <a href="https://www.linkedin.com/in/briantolsen/">here</a>.
      </p>
    </div>
    </div>
  )
}

export default About