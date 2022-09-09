import React, { useState } from "react";
import useWatchState from "./useWatchState";

const useTask = function () {
    const initTaskList = []
    const [taskList, setTaskList] = useState(initTaskList)

    useWatchState('taskList', taskList)

    function addTask(task) {
        setTaskList([task, ...taskList])
    }

    function filterTaskList(filters = []) {
        const filtList = []

        if (!filters.length) {
            for (const i in taskList) {
                filtList.unshift(taskList[i])
            }

            return filtList
        }

        for (const i in taskList) {
            for (const j in filters) {
                if (taskList[i].filters[j]) {
                    filtList.unshift(taskList[i])
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