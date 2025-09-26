import "./App.css"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import { useState } from "react"
import lisaupperud2 from "./assets/lisaupperud2-small.jpg"
import code from "./assets/code.svg"
import dice from "./assets/dice.svg"
import adventure from "./assets/adventure.svg"
import hand from "./assets/hand.svg"
import api from "./assets/api.svg"
import security from "./assets/security.svg"
import web from "./assets/webservice.svg"
import flask from "./assets/flask.svg"
import fitness from "./assets/fitness.svg"
import portfolio from "./assets/portfolio.svg"
import computer from "./assets/computer.svg"
import database from "./assets/database.svg"
import sql from "./assets/sql.svg"
import next from "./assets/next.svg"
import prev from "./assets/prev.svg"
import git from "./assets/github.svg"
import linkedin from "./assets/linkedin.png"
import cv from "./assets/cv.svg"

const cards = [
  {
    title: "About Me",
    text: `I'm Lisa, a 25-year-old developer in training from Stockholm, Sweden. My passion for coding was sparked when my brother showed me an online library he had built. I was immediately intrigued and decided to pursue a career in tech. I went on to take a course in C# in the beginning of 2024 and then applied to Stockholms Technical Institute, where I have been studying since September 2024.
    Seeing as I'm a person who likes structure and rules, code made sense to me. 
    I've worked several years in the bar industry, which has been great for developing my social skills and ability to adapt to quickly changing situations. However, I felt that I needed a new challenge and wanted to work with something that truly challenged me intellectually.
    Aside from challenging my mind with coding, I like to challenge my body in the gym or in nature. I spent my teenage years in Försvarsutbildarna, an organization for youth in Sweden to take part in military training.
    Whether it's hitting PRs in the gym, walking that extra mile on a hike, or finally solving that annoying bug, I thrive on challenges and see them as the best way to learn and grow.`,
    image: lisaupperud2,
    skills: ["Positive", "Comminicative", "Curious", "Adaptable", "Structured"],
    projects: [
      {
        name: "GitHub",
        link: "https://github.com/lisaupperud",
        icon: git,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/lisaupperud/",
        icon: linkedin,
      },
      {
        name: "CV",
        link: "/cv.pdf",
        icon: cv,
      },
    ],
  },
  {
    title: "Object Oriented Programming",
    text: `My first real encounter with OOP was in my C# course, where I learned the basics of classes, objects, inheritance, and polymorphism. It was a bit overwhelming at first, but once I started at STI my understanding really clicked. 
    We dove deeper into OOP concepts like encapsulation and abstraction, and I began to see how these principles could be applied in real-world scenarios. As a structured and organized person, I found that OOP aligned well with my way of thinking.
    I enjoy the clarity and modularity that OOP brings to coding, making it easier to manage and maintain complex projects. 
    Working on various projects, both solo and in teams, has helped me solidify my understanding of OOP and its practical applications. `,
    image: code,
    projects: [
      {
        name: "Dice Game",
        link: "https://github.com/lisaupperud/java-a-projektarbete.git",
        icon: dice,
      },
      {
        name: "Adventure Game",
        link: "https://github.com/lisaupperud/java-b-projektarbete.git",
        icon: adventure,
      },
      {
        name: "Go Fish!",
        link: "https://github.com/lisaupperud/CardGame.git",
        icon: hand,
      },
    ],
    skills: ["Java", "C#", ".NET", "Maven", "Gradle"],
  },
  {
    title: "API & Web Services",
    text: `Building my first API in Spring Security was tough with all the annotations and beans, but I got the gist of it.
    At Svea Bank, developing a validation API in C#, I started connecting the dots — different languages and frameworks, but the same principles.
    I learned how to structure an API, handle requests and responses, secure it, and work with status codes, errors, and exceptions.
    Getting it to work in Swagger, Scalar, or Postman was one thing, but communicating with stakeholders taught me the value of clear documentation.
    Working with APIs also gave me my first taste of fullstack projects, which made coding even more fun with both backend logic and frontend visuals.`,
    image: api,
    projects: [
      {
        name: "Spring Security",
        link: "https://github.com/yourusername/awesome-app",
        icon: security,
      },
      {
        name: "To-Do App",
        link: "https://github.com/lisaupperud/ToDo_Webservice.git",
        icon: web,
      },
    ],
    skills: ["API", "Spring", "Fullstack"],
  },
  {
    title: "Test Driven Development",
    text: `I’ve gotten a solid understanding of TDD through my studies at STI (Java, TypeScript) and at Svea Bank (C#).
    It was tough to change my mindset at first, but I quickly noticed the time saved when making sure the code worked from the start.
    Writing tests first makes me think about edge cases and leads to better code, while also helping me understand errors and exceptions better.
    Automating tests in pipelines has been a great way to double-check myself before pushing to production.
    I’ve really gone from hating tests to actually enjoying writing them.`,
    image: flask,
    projects: [
      {
        name: "Dice Game - Console Game",
        link: "https://github.com/yourusername/awesome-app",
        icon: dice,
      },
      {
        name: "Adventure Game - Console Game",
        link: "https://github.com/yourusername/cool-library",
        icon: adventure,
      },
      {
        name: "Go Fish! - Console Game",
        link: "https://github.com/lisaupperud/CardGame.git",
        icon: hand,
      },
    ],
    skills: ["JUnit", "xUnit", "Jest", "CI/CD", "Mocking"],
  },
  {
    title: "Frontend and Frameworks - React & Angular",
    text: `We did a long course in frontend development with frameworks, mainly React and some Angular, at STI. I had dabbled a bit in HTML and CSS before, but this was the first time I really got to dive deep into it and work with SPA. I found it really hard to work with Typescript, to be honest. It just didn't make sinse to me like Java or C# did.
    I never really got the hang of it, and I still struggle with it. However, I do understand the principles behind it, and I enjoy working with it as side project to better learn and understand it. I do really enjoy building websites and web-apps, as I like the design aspect of it.
    I like the fact that you can see the results of your work immediately and that you can make it look really good with some effort. I also like the fact that you can make it interactive and that you can make it do things that are not possible with traditional websites.`,
    image: computer,
    projects: [
      {
        name: "Portfolio Website",
        link: "https://lisaupperud.github.io/myWebsite/",
        icon: portfolio,
      },
      {
        name: "Starka År - Fitness App",
        link: "https://fitness-app-teal-sigma.vercel.app/",
        icon: fitness,
      },
      {
        name: "Spring Security",
        link: "https://github.com/nanawally/lisaanna.git",
        icon: security,
      },
    ],
    skills: ["React", "Angular", "SPA", "Version Control", "Consuming APIs"],
  },
  {
    title: "Database Management",
    text: `Throughout my studies, I've learnt the fundamentals of database management with both SQL and NoSQL databases. Starting with SQL databases, learning how to connect to a local database and handle CRUD operations was my first step. I got to understand the structure of a relational database, how to design tables and write efficient queries.
    Moving on to NoSQL databases, I got to explore the flexibility and scalability they offer. At first, I couldn't wuite understand why they would be a better alternative, but when working with MongoDB, I noticed that it was a much better option when working with unstructured data and offered a lot more flexibility in terms of data modeling.
    I really appriciate how working with queries help lessen the code base and make it more efficient, as well as the fact that it makes it easier to understand the data and how it's structured.`,
    image: database,
    projects: [
      {
        name: "Relational Database ",
        link: "https://github.com/lisaupperud/databas-projektarbete.git",
        icon: sql,
      },
      {
        name: "Spring Security with SQL",
        link: "https://github.com/nanawally/lisaanna.git",
        icon: security,
      },
      {
        name: "To-Do App with NoSQL",
        link: "https://github.com/lisaupperud/ToDo_Webservice.git",
        icon: web,
      },
    ],
    skills: ["SQL", "NoSQL", "MongoDB", "Version Control", "CRUD"],
  },
  // ...other cards...
]

function App() {
  const [index, setIndex] = useState(0)

  const nextCard = () => setIndex((i) => (i + 1) % cards.length)
  const prevCard = () => setIndex((i) => (i - 1 + cards.length) % cards.length)

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="slideshow">
          <button onClick={prevCard}>
            <img src={prev} alt="Prevoius" />
          </button>
          <Card {...cards[index]} />
          <button onClick={nextCard}>
            <img src={next} alt="Next" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
