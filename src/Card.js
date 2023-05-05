
const Card = ({name,email,id}) => {
    return (
        <div className="tc bg-light-blue pa3 ma2 br3 dib grow shadow-5 bw">
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;