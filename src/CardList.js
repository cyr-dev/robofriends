import Card from "./Card";

const CardList = ({robots})  => {
    return (
        <div>
            {
                robots.map(
                    (robot) => {
                        return(
                            <Card name={robot.name} email={robot.email} id={robot.id} key={robot.id} />
                        )
                    }
                )
            }
        </div>
    )
}

export default CardList;