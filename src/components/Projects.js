import ProjectBoxes from './ProjectBoxes';

export default function Projects() {
    return(
        <div className="text-white py-5" style={{background: "var(--background)"}}>
            <div className="container">
                <div className="row">
                    <ProjectBoxes />
                </div>
            </div>
        </div>
    )
}