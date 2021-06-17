import { react } from 'react'


export default function AboutPage() {

    return (<><div className="d-flex justify-content-center row pb-5 pt-5" id="About">
        <div className="container filter">
        
        <div className="d-flex justify-content-between w-85"> 
            <h1>Hi, dear lecturer.</h1>
            <span className="mt-2"><i class="fas fa-envelope-open-text"></i></span>
        </div>
            <p> My name is Mario Gonzalez, Im a software developer who has interest in to learn and improve the web.</p>
            <p>This is my first app with React,Im made this app as a personal proyect to proof my abilities with react,
                even if Im not making any post in this api I have learn alot about React basic </p>
            <p>Movie Master app consume data from <a className="btn btn-link" href="https://developers.themoviedb.org/3" target="blank">MovieDb API</a>.</p>
            <ul style={{listStyle:"none",}}>
                <li className="mb-3">My Linkedin: <a href="https://www.linkedin.com/in/Mariog108/" target="blank" className="btn btn-outline-primary" > <i class="fab fa-linkedin-in"></i> Mario's Github  </a></li>
                <li className="mb-3">My Github profile: <a href="https://github.com/MarioG108" target="blank" className="btn btn-outline-info" > <i class="fab fa-github"></i> Mario's Github  </a></li>
                <li className="mb-3">Proyect Repository: <a href="https://github.com/MarioG108/MovieApp" target="blank" className="btn btn-outline-info" > <i class="fab fa-github"></i> Github Repository </a></li>
            </ul>
            <h5>-Mario gonzazlez</h5>
        </div >

    </div></>)
}