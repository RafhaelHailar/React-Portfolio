import { useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const onMouseHover = function(event) {
        let target = event.target;
        
        if (target.nodeName === "A") return;

        let x = event.clientX,
            y = event.clientY;
        let targetBox = target.getBoundingClientRect();

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

    const onMouseOut = function(event) {
        let target = event.target;

        if (target.nodeName === "A") return;

        target.style.setProperty("--card-x",``);
        target.style.setProperty("--card-y",``);
        target.style.transform = '';
    }

    useEffect(
        () => {
            const project_cards = document.querySelectorAll(".project-cards > a");
            for (let i = 0;i < project_cards.length;i++) {
                let card = project_cards[i];
                card.addEventListener("mousemove",e => onMouseHover(e));
                card.addEventListener("mouseout",e => onMouseOut(e));
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
                <Link to="/preview?id=4">
                    <div>
                        <img src="https://raw.githubusercontent.com/RafhaelHailar/Long-Stick/master/images/current_look.jpeg" width="100%" />
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        <img src="https://raw.githubusercontent.com/RafhaelHailar/RentGal-_SAMPLE/master/images/current_look.jpeg" width="100%" />
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        <img src="https://raw.githubusercontent.com/RafhaelHailar/Long-Stick/master/images/current_look.jpeg" width="100%" />
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        <img src="https://raw.githubusercontent.com/RafhaelHailar/Long-Stick/master/images/current_look.jpeg" width="100%" />
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        <img src="https://raw.githubusercontent.com/RafhaelHailar/Long-Stick/master/images/current_look.jpeg" width="100%" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;