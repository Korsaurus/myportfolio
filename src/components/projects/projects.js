import React from "react";
import "./projects.css"
import Gregori from "../../utils/imgs/Gregori.png"

export default function Projects() {

    return (
        <div>
            <h2>Projects</h2>
                <article>
                    <div className="project-imgwrap">
                        <img className="project-image" src={Gregori} alt="" />
                    </div>
                    <div className="project-textwrap">
                        <h3>GREGORIS PIZZA</h3>
                        <div >
                        <p className="project-text">
                            GREGORIS PIZZA BABIDABOOPY
                        </p>
                        </div>
                        <a href="https://gregorispizza.netlify.app/">Link to live demo.</a>
                    </div>
                </article>
                <article>
                    <div className="project-imgwrap-right">
                        <img className="project-image-right" src={Gregori} alt="" />
                    </div>
                <div className="project-textwrap-left">
                        <h3></h3>
                        <div >
                        <p className="project-text-left">
                            2
                        </p>
                        </div>
                        <a href="">Link to live demo.</a>
                    </div>
                </article>
                <article>
                    <div className="project-imgwrap">
                        <img className="project-image" src={Gregori} alt="" />
                    </div>
                    <div className="project-textwrap">
                        <h3>GREGORIS PIZZA</h3>
                        <div >
                        <p className="project-text">
                            GREGORIS PIZZA BABIDABOOPY
                        </p>
                        </div>
                        <a href="https://gregorispizza.netlify.app/">Link to live demo.</a>
                    </div>
                </article>
                <br />
                <article>
                    <div className="project-imgwrap-right">
                        <img className="project-image-right" src={Gregori} alt="" />
                    </div>
                <div className="project-textwrap-left">
                        <h3>GREGORIS PIZZA</h3>
                        <div >
                        <p className="project-text-left">
                            GREGORIS PIZZA BABIDABOOPY
                        </p>
                        </div>
                        <a href="https://gregorispizza.netlify.app/">Link to live demo.</a>
                    </div>
                    
                </article>
                <article>
                    <div className="project-imgwrap">
                        <img className="project-image" src={Gregori} alt="" />
                    </div>
                    <div className="project-textwrap">
                        <h3>GREGORIS PIZZA</h3>
                        <div >
                        <p className="project-text">
                            GREGORIS PIZZA BABIDABOOPY
                        </p>
                        </div>
                        <a href="https://gregorispizza.netlify.app/">Link to live demo.</a>
                    </div>
                </article>
                <br />
                <article>
                    <div className="project-imgwrap-right">
                        <img className="project-image-right" src={Gregori} alt="" />
                    </div>
                <div className="project-textwrap-left">
                        <h3>GREGORIS PIZZA</h3>
                        <div >
                        <p className="project-text-left">
                            GREGORIS PIZZA BABIDABOOPY
                        </p>
                        </div>
                        <a href="https://gregorispizza.netlify.app/">Link to live demo.</a>
                    </div>                    
                </article>
        </div>
    )
}