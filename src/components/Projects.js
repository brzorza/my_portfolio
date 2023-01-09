import ProjectCards from './projectsCards';

export default function Projects() {
    return(
        <div className="text-white py-5" style={{background: "var(--background)"}}>
            <div className="container text-center">
                <ProjectCards />
            </div>
        </div>
    )
}