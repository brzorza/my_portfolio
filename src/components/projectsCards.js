import projectsData from "../data/projectsData";

export default function ProjectCards() {

    // let card = projectsData.map(x => {
    //     return(
    //         <div className="row col-sm-4">
    //             <p>{x.title}</p>
    //             <p>{x.description}</p>
    //         </div>
    //     )
    // })

    const allCards= [];

    
        for(let i = 0 ; i < projectsData.length; i++){
            return(
                allCards.push(<p>{projectsData}</p>)
            )
        }
    

    

    return(
        // <div className="row">
        //     {card}
        // </div>

        {allCards}
    )
}