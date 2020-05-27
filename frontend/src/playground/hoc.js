
const Info = ({info = 'felipe'} = {}) => (
    <div>
        <h1>Some Info</h1>
        <p>the info is: {info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>this is private info. Please dont share</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAut = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAut ? <WrappedComponent {...props} /> : <p>you cant see this >:(</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AutInfo   = requireAut(Info);
