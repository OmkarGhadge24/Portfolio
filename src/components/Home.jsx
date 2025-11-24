import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import { locations } from "#constants/index.js"
import useLocationStore from "#store/location.js";
import useWindowStore from "#store/window.js";

const projects = locations.work?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    const handleisOpenProjectFinder =(project) =>{
        setActiveLocation(project);
        openWindow('finder');
    }
    useGSAP(() =>{
        Draggable.create(".folder");

    },[]);
    return (
        <section id="home">
            <ul>
                {
                    projects.map((project) => (
                        <li key={project.name} className={clsx("group folder", project.windowPosition)} onClick={() => handleisOpenProjectFinder(project)}   >
                            <img src='/images/folder.png' alt={project.name} />
                            <p>{project.name}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Home