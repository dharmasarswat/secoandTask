import '../css/sprintBacklog.css'

const SprintBacklog = () => {
    return (
        <div className="sprintBacklogBox">
            <div className="multipleBoxWraper">
                {new Array(3).fill(0).map((data, index) => (<div className="box"></div>))}
                <div className="box">
                    Task Workout
                </div>
            </div>
            <div className="textBold textLarge">Sprint Backlog</div>
        </div>
    )
}

export default SprintBacklog