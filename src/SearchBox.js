
const SearchBox = ({onSearch}) => {
    return (
        <div className="pa2"> 
            <input 
                className="pa3 b--green bg-lightest-blue br3"
                placeholder="Search Robots..."
                onChange={onSearch}
            />
        </div>
    )
}


export default SearchBox;

