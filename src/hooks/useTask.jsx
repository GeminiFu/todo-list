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

    // useWatchState('taskList', taskList)

    function addTask(task) {
        task.id = taskList.length
        // TODO: 把 task 調換位置 render 的行為變得很奇怪
        setTaskList([...taskList, task])
    }

    function filterTaskList(filters = []) {
        const filtList = []

        if (!filters.length) {
            for (const i in taskList) {
                // TODO: 把 push 改成unshift render 的行為變得很奇怪
                filtList.push(taskList[i])
            }

            return filtList
        }

        for (const i in taskList) {
            for (const j in filters) {
                if (taskList[i].filters[j]) {
                    filtList.push(taskList[i])
                }
            }
        }

        return filtList
    }

    return {
        addTask,
        filterTaskList,
    }
}

export default useTask