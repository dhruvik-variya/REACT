import React, { useState } from 'react';

const Task = () => {
    let [data, setData] = useState({
        task: "",
        date: "",
        isCompleted: false,
    });

    let [list, setList] = useState([]);
    let [id, updatedId] = useState(null);

    let handleInput = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            setList(
                list.map((item) =>
                    item.id === id ? { ...item, task: data.task, date: data.date } : item
                )
            );
            updatedId(null);
        } else {
            setList([...list, { ...data, id: Date.now() }]);
        }
        setData({ task: "", date: "" }); 
    };

    const handleUpdate = (id) => {
        const updatedData = list.find((item) => item.id === id);
        setData({ task: updatedData.task, date: updatedData.date });
        updatedId(id); // Store the id of the item being updated
    };

    const handleDelete = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const handleStatus = (id) => {
        setList(
            list.map((item) =>
                item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={data.task}
                    onChange={handleInput}
                />
                <input
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleInput}
                />
                <input type="submit" />
            </form>

            <hr />

            {list.map(({ task, date, isCompleted, id }) => (
                <div key={id}>
                    <h3>{task}</h3>
                    <p>Due date: {date}</p>
                    <button onClick={() => handleUpdate(id)}>Edit</button>
                    <button onClick={() => handleStatus(id)}>
                        {isCompleted ? "Completed" : "Pending"}
                    </button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Task;
