import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { posts } from "../../posts";
import projects from "../../projects";

const Projects = () => {
    const location = useLocation();
    const paths = location.pathname.split("/");
    const currPath = paths[paths.length - 1];

    let rafProjects = projects;

    if (currPath !== "projects") rafProjects = rafProjects.slice(0,2);

    const onMouseHover = function(event,container) {
        let target = container.querySelector('div');
        
        let x = event.clientX,
            y = event.clientY;
        let targetBox = container.getBoundingClientRect();

        const maxAngle = 40;
        const targetHalf = targetBox.width / 2;
        const targetHalfY = targetBox.height / 2;
        const targetMid = targetBox.x + targetHalf;
        const targetMidY = targetBox.y + targetHalfY;
        let rotateX = (targetMid - x) / targetHalf * maxAngle;
        let rotateY = (y - targetMidY) / targetHalfY * maxAngle;
        
        target.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;

        target.style.setProperty("--card-x",`${x - targetBox.x}px`);
        target.style.setProperty("--card-y",`${y - targetBox.y}px`);

    }   

    const onMouseOut = function(event,container) {
        let target = container.querySelector('div');

        target.style.transition = '.3s linear'; 
        target.style.setProperty("--card-x",``);
        target.style.setProperty("--card-y",``);
        target.style.transform = '';
    }

    const onMouseEnter = function(container) {
        let target = container.querySelector('div');
        target.style.transition = '';
    }

    useEffect(
        () => {
            const project_cards = document.querySelectorAll(".project-cards > a");
            for (let i = 0;i < project_cards.length;i++) {
                let card = project_cards[i];
                card.addEventListener("mousemove",e => onMouseHover(e,card));
                card.addEventListener("mouseout",e => onMouseOut(e,card));
                card.addEventListener("mouseover",() => onMouseEnter(card));
            }
        },[]
    );

    return (
        <div className="bg-blackish p-4 rounded">
            <div className="text-white text-">
	    <a href="#" className="active hover:underline font-bold text-lg">
                    Projects
                </a>
            </div>
            <div className="project-cards">
                { rafProjects.map(id => {
                    const {media} = posts[id];
                    return <Link key={id} to={`/preview?id=${id}`}>
                                <div>
                                    <img src={media} width="100%" />
                                </div>
                            </Link>
                })}
            </div>

            {
                currPath === "projects" ?
                    <></>
                : <Link className="text-white bg-grayish text-sm font-bold py-1.5 inline-block w-full text-center" to="/rafhael/projects">See all</Link>
            }
        </div>
    );
}

export default Projects;
