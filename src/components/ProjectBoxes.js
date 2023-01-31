import React from 'react';
import projectsData from '../data/projectsData';


export default function ProjectBoxes() {

    // let subArr = projectsData.map(x => {
    //     return(
    //         <div className='row col-sm-3'>
    //             <div className='card-body bg-info'>
    //                 <div>
    //                    <h6 className='card-title'>{x.title}</h6>
    //                 </div>
    //                 <p className='card-subtitle'>{x.desc}</p>
    //             </div>
    //         </div>
            
    //     )
    // })

    

    let rowss = [];
    
    function makeRows (){
        let rowNum = (projectsData.length);
        
            for(let i = 0; i < rowNum; i++ ){
                rowss.push(
                <div key={i} className='row col-md-3 border border-2 border-primary' id={i+1}>
                    <div className='pt-2 card-dots-wrapper'>
                        {projectsData[i].link && <a href={projectsData[i].link} className="git-icon navbar-icon"><ion-icon name="logo-github"></ion-icon></a>}
                        <h5 className='pt-2'>{projectsData[i].title}</h5>
                        <p className='small'>{projectsData[i].desc}</p>
                    </div>
                </div>)
            }
    }

    makeRows();

    return (
        <div className="row gap-5 justify-content-center">
            {rowss}
        </div>
    )
}