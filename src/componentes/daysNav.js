import React from 'react';


const getDays = (d) => {//consigue los siguientes 4 dias 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = d;
    let week = {};
    for (let i = 0; i < 5; i++) {
        week[`day${i}`] = {
            day: days[(today.getDay() + i) % days.length],
            number: (today.getDate() + i) % 31 === 0 ? 31 : (today.getDate() + i) % 31
        }
    }
    return week
}

const DaysNav = props => {
    const { date } = props;
    const week = getDays(date);
    let daysElement = [];
    for (let i = 0; i < 5; i++) {
        daysElement.push(week[`day${i}`])
    }
    console.log(daysElement)
    return (

        <div className='nav-days'>
            {daysElement.map(
                d => {
                    return <div className='day'>
                        <p> {d.day} </p>
                        <p>{d.number}</p>    </div>
                })}
        </div>
    )
}
export default DaysNav;



