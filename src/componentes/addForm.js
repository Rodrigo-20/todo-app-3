import React, { useEffect, useState } from 'react';



const AddForm = props => {
    const { moveDown, values, setValues } = props;

    // useEffect(() => {

    //     const container = document.querySelector('.add-container');
    //     console.log(container)
    //     const form = document.querySelector('.add-form');
    //     const formCoords = form.getBoundingClientRect();
    //     container.style.setProperty('transform', `translateY(-${formCoords.height}px)`);

    // }, [])


    // function moveDown(e) {
    //     const form = document.querySelector('.add-form');
    //     const container = document.querySelector('.add-container');
    //     form.style.setProperty('opacity', '1');
    //     container.classList.add('active')
    //     const icon = e.target;
    //     icon.classList.add('icon-rot');
    //     container.style.setProperty('transform', `translateY(0)`);
    //     if (values.task && values.date) {
    //         console.log('fields arent empty')
    //     }

    return (
        <div className='add-container'>
            <form className='add-form'>
                <div>
                    <label for='task'>Task :</label>
                    <input type='text' name='task' id='task' placeholder='Take out the dog' value={values.task} onChange={setValues} ></input>
                </div>
                <div>
                    <label for='date'>Date</label>
                    <input type='date' id='date' name='date' value={values.date} onChange={setValues}></input>
                </div>
            </form>
            <div className='add-icon'>
                <div onClick={moveDown}>+</div>
            </div>
        </div>
    )

}

export default AddForm;