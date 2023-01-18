import projectsData from '../data/projectsData';

export default function ProjectBoxes() {

    let subArr = projectsData.map(x => {
        return(
            <div className='row col-sm-3'>
                <div className='card-body bg-info'>
                    <div>
                       <h6 className='card-title'>{x.title}</h6>
                    </div>
                    <p className='card-subtitle'>{x.desc}</p>
                </div>
            </div>
            
        )
    })


    return (
        <div className='grid row gap-4 w-75'>
            {subArr}
        </div>
    )
}