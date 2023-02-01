import React from 'react';
import projectsData from '../data/projectsData';

export default function Projects() {

    let rowss = [];
    
    function makeRows (){
        let rowNum = (projectsData.length);
        
            for(let i = 0; i < rowNum; i++ ){

                let borderColor = "";

                if(projectsData[i].id % 2){
                    borderColor = "danger"
                }else{
                    borderColor = "success"
                }

                rowss.push(
                <div key={i} className={"row col-md-3 border rounded border-2 border-" + borderColor} id={i+1}>
                    <div className='pt-2 card-dots-wrapper'>
                        {projectsData[i].link && <a href={projectsData[i].link} className={"git-icon navbar-icon text-" + borderColor}><ion-icon name="logo-github"></ion-icon></a>}
                        <h5 className={'pt-2 bold text-' + borderColor}>{projectsData[i].title}</h5>
                        <p className='small'>{projectsData[i].desc}</p>
                        <p className='tech-font'>{projectsData[i].tech}</p>
                    </div>
                </div>)
            }
    }

    makeRows();

    return(
        <div className="text-white py-5 px-sm-0 px-5" style={{background: "var(--background)"}}>
            <div className="container mt-3">
                <div className='text-center pb-5'>
                    <h1 className='text-danger'>Check out my projects!</h1>
                    <p className='about-text'>Here you can see projects that I made and, if you are lucky, even the source code.</p>
                </div>
                <div className="row gap-5 justify-content-center">
                    {rowss}
                </div>
            </div>
        </div>
    )
}