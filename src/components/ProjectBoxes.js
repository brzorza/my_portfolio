import projectsData from '../data/projectsData';

export default function ProjectBoxes() {

    // let masterArr = [];


    // let i = 1;

    // function subArr() {
    //     for(let j = i; j < (i*3); j++){
    //         return(
    //         <div className='row col-sm'>
    //             {projectsData[j].id}
    //         </div>
    //     )
    // }
    // }

    // while (i <= (Math.ceil(projectsData.length / 3))){
    //     masterArr.push([<div className='row'>{subArr}</div>]);
    //     i++;
    // }

    let subArr = projectsData.map(x => {
        return(
            <div className='row col-sm bg-info m-3'>
                <div>
                    <h6>{x.title}</h6>
                    <p>{x.description}</p>
                </div>
            </div>
        )
    })


    return (
        <>
            {subArr}
        </>
    )
}