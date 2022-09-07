import React, { useState } from "react";
import useWatchState from "./useWatchState";

const useTask = function () {
    const initTaskList = []
    const [taskList, setTaskList] = useState(initTaskList)

    useWatchState('taskList', taskList)

    function addTask(task) {
        setTaskList([task, ...taskList])
    }

    return {
        addTask,
    }
}

export default useTask