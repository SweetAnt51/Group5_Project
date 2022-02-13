


function ApplicationInfo(props){


    return (
        <div>
            <h2>Application ID</h2>
            <p>{props.item.app_id}</p>
            <h2>Major</h2>
            <p>{props.item.major}</p>
            <h2>Status</h2>
            <p>{`${props.item.status.charAt(0).toUpperCase()}${props.item.status.slice(1)}`}</p>
        </div>
    )
}

export default ApplicationInfo