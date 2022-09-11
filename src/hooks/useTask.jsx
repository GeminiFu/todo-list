import React, { useState } from "react";
import useWatchState from "./useWatchState";

const useTask = function () {
    // TODO: default empty
    const initTaskList = [{
        "title": "fgdgfdxz",
        "deadline": [
            "",
            ""
        ],
        "file": "",
        "comment": "",
        "id": 0,
        "important": false,
        "completed": false
    },
    {
        "title": "zdfgvcxv",
        "deadline": [
            "",
            ""
        ],
        "file": "",
        "comment": "",
        "id": 1,
        "important": false,
        "completed": false
    }]
    const [taskList, setTaskList] = useState(initTaskList)

    useWatchState('taskList', taskList)

    function addTask(task) {
        task.id = taskList.length
        // TODO: 把 task 調換位置 render 的行為變得很奇怪
        setTaskList([...taskList, task])
    }

    function renderTaskList(filter) {
        const filtList = []


        if (filter === '') {
            return orderTaskList(taskList)
        }

        taskList.forEach(task => {
            if (task.completed === filter) {
                filtList.push(task)
            }
        })

        return orderTaskList(filtList)

        function orderTaskList(filterList) {
            const orderList = []

            filterList.forEach(task => {
                if (task.important) {
                    orderList.push(task)
                }
            })
            filterList.forEach(task => {
                if (!task.important) {
                    orderList.push(task)
                }
            })

            return orderList
        }
    }

    function updateTask(newTask, id) {
        const newTaskList = taskList.map(task => {
            if (task.id === id) {
                return newTask
            } else {
                return task
            }
        })

        setTaskList(newTaskList)
    }

    return {
        addTask,
        renderTaskList,
        updateTask,
    }
}

export default useTask