import { Link } from "react-router-dom";

export default function Home() {
    return (
        <article id="top" className="wrapper style1">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-5-large col-12-medium">
                        <span className="image fit"><img src={require("./../assets/images/pic00.jpg")} alt="" /></span>
                    </div>
                    <div className="col-8 col-7-large col-12-medium">
                        <header>
                            <h1>Hi. I'm <strong>Mohammad Asif</strong>.</h1>
                        </header>
                        <p>I'm a Software Developer in <strong>Dallas, TX,</strong> mainly interested in <strong>backend development</strong> and <strong>cloud infrastructure</strong>.</p>
                        <Link to="/aboutme" className="button large scrolly">Learn more about me</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}