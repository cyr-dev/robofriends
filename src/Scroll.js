
const Scroll = ({children}) => {
    return(
        <div style={{overflowY:'scroll',height:"500px", border:'3px solid #f5f5f5'}}>
            {children}
        </div>
    )
}

export default Scroll;