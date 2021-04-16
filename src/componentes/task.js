import React from 'react';

const TaskList = props => {
    const { list } = props
    return (

        <div className='task-list'>
            {list.map(task => {
                return (
                    <div>
                        <h3>{task.date}</h3>
                        <ul>
                            {
                                task.tasks.map(
                                    item => {
                                        return <li>{item}</li>
                                    }
                                )
                            }
                        </ul>
                    </div>
                )
            })}

        </div>
    )
}

export default TaskList;