// this is an array
let targetRootArray = [];
let targetIdCounter = 0;
let navigationStack = [];
let globalPercent = 0;
// function to add new element before or after a target specified by id, the current root can be found from navigation stack
function addTarget(idPosition, direction, targetToAdd) {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find target with specified id: ' + id + '.');
    }

    // Perform bounds checking
    if (idPosition < 0 || idPosition > currentTargetRootArray.length) {
        throw new Error('Index out of bounds');
    }

    if (direction === 'left') {
        currentTargetRootArray.splice(idPosition, 0, targetToAdd); // Insert element before index
    } else if (direction === 'right') {
        currentTargetRootArray.splice(idPosition + 1, 0, targetToAdd); // Insert element after index
    } else {
        throw new Error('Invalid position specified. Use "left" or "right".');
    }

    updateParentTargetProgress();
}

function getTargetsAtCurrentLevel() {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;

    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot get targets at current level.');
    }
    return currentTargetRootArray;
}

function findPositionInCurrentRootFromId(targetId) {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find target with specified id: ' + targetId + '.');
    }

    let res = currentTargetRootArray.findIndex(x => x.id == targetId);
    if (res === -1) {
        throw new Error('Cannot find target with specified id: ' + targetId + '.');
    }

    return res;
}

function getProgressOfTargetInCurrentRootFromId(targetId) {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find target root with specified id: ' + targetId + '.');
    }

    const expectedTarget = currentTargetRootArray.find(x => x.id == targetId);
    if (expectedTarget === undefined) {
        throw new Error('Cannot find target with specified id: ' + targetId + '.');
    }
    return expectedTarget.percent;
}

// Function to update an existing target
function updateTarget(title, description, isDone, targetId) {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find target with specified id: ' + targetId + '.');
    }

    let target = currentTargetRootArray.find(x => x.id == targetId);

    if (title != null) {
        target.title = title;
    }
    if (description != null) {
        target.description = description;
    }
    if (isDone != null) {
        target.isDone = isDone;
    }

    if (target.subTargets.length === 0) {
        target.percent = 0;
    } else {
        let doneTargetCount = 0;
        for (subT of target.subTargets) {
            if (subT.isDone === true) {
                doneTargetCount++;
            }
        }
        target.percent = Math.floor(doneTargetCount / target.subTargets.length * 100);
    }

    updateParentTargetProgress();
}

// Function to delete an existing target
function deleteTarget(id) {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find current root array from navigation stack.');
    }

    const index = currentTargetRootArray.findIndex(target => target.id == id);
    if (index === -1) {
        throw new Error('Cannot find target with specified id: ' + id + '.');
    }

    currentTargetRootArray.splice(index, 1);
    updateParentTargetProgress();
}

// factory to create target object
function createTarget() {
    return {
        id: targetIdCounter++,
        title: 'New Target ' + (targetIdCounter - 1),
        description: 'Description of the new target ' + (targetIdCounter - 1),
        percent: 0,
        isDone: false,
        createdDate: Date.now(),
        finishedDate: null,
        subTargets: []
    };
}

function findRootArrayById(id, currentRootArray) {
    for (const target of currentRootArray) {
        if (target.id == id) {
            return target.subTargets;
        }

        const foundTarget = findRootArrayById(id, target.subTargets);
        if (foundTarget) {
            return foundTarget;
        }
    }

    return null; // Return null if the id is not found in the current branch
}

function rearrangeTargets(idList) {
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find current root array from navigation stack.');
    }

    // Create a map from the current targets array for quick lookup
    const targetMap = new Map(currentTargetRootArray.map((target, index) => [target.id, index]));

    // Rearrange targets in place based on the idList
    for (let i = 0; i < idList.length; i++) {
        const targetId = idList[i];
        const currentIndex = targetMap.get(targetId);

        if (currentIndex === undefined) {
            throw new Error('Invalid ID in the list: ' + targetId);
        }

        // Swap elements in place if the current index is not already in place
        if (currentIndex !== i) {
            // Perform the swap
            const temp = currentTargetRootArray[i];
            currentTargetRootArray[i] = currentTargetRootArray[currentIndex];
            currentTargetRootArray[currentIndex] = temp;

            // Update the map with the new indices after each swap
            targetMap.set(currentTargetRootArray[i].id, i);
            targetMap.set(currentTargetRootArray[currentIndex].id, currentIndex);
        }
    }

    console.log('Targets rearranged:', currentTargetRootArray);
}


// function to mark target as done (I'm assume that it is target in current root to avoid accidentially mark a target as done at another depth level)
// with constraint that all it sub targets must be marked as done first
// if success return 1, otherwise return 0
function markTargetAsDone(targetId) {
    // check for existence of target with that id
    let currentTargetRootArray = null;

    if (navigationStack.length === 0) {
        currentTargetRootArray = targetRootArray;
    } else {
        currentTargetRootArray = findRootArrayById(navigationStack[navigationStack.length - 1], targetRootArray);
    }

    if (currentTargetRootArray == null) {
        throw new Error('Cannot find current root array from navigation stack.');
    }

    const target = currentTargetRootArray.find(x => x.id == targetId);

    if (target !== undefined) {
        console.log('Target to be mark as done:', target);
    } else {
        throw new Error('Cannot find element with id ' + targetId + ' at current level.');
    }

    // check if all its subtasks done
    let allDone = true;
    for (let subTarget of target.subTargets) {
        if (subTarget.isDone === false) {
            allDone = false;
            break;
        }
    }

    if (!allDone) {
        return 0;
    }

    target.isDone = true;
    target.percent = 100;

    updateParentTargetProgress();

    return 1;
}

// always happy path, return null indicate that it is root, return target parent if deeper than root 
function findParentFromNavigationStack() {
    const traversalStack = [...targetRootArray];
    while (traversalStack.length > 0) {
        const current = traversalStack.pop();

        if (current.id == navigationStack[navigationStack.length - 1]) {
            return current;
        }

        if (current.subTargets && current.subTargets.length > 0) {
            traversalStack.push(...current.subTargets);
        }
    }
    return null;
}

// parent target progress is defined by looking at the top of navigation stack
function updateParentTargetProgress() {
    const parentTarget = findParentFromNavigationStack();
    console.log('parent target', parentTarget);
    // update global percent because this is currenly root
    if (parentTarget === null) {
        let doneCount = 0;
        for (let target of targetRootArray) {
            if (target.isDone === true) {
                doneCount++;
            }
        }
        globalPercent = Math.floor(doneCount / targetRootArray.length * 100);
        console.log(globalPercent);
        return;
    }

    let count = 0;
    for (let subTarget of parentTarget.subTargets) {
        if (subTarget.isDone === true) {
            count++;
        }
    }
    if (parentTarget.subTargets.length === 0) {
        parentTarget.percent = 0;
    } else {
        parentTarget.percent = Math.floor(count / parentTarget.subTargets.length * 100);
    }

    const tolerance = 0.0001;
    if (Math.abs(parentTarget.percent - 100) < tolerance) {
        // approximately equal
    } else {
        parentTarget.isDone = false;
    }
}

function findTargetFromId(targetId) {
    const traversalStack = [...targetRootArray];
    while (traversalStack.length > 0) {
        const current = traversalStack.pop();
        if (current.id == targetId) {
            return current;
        }
        if (current.subTargets && current.subTargets.length > 0) {
            traversalStack.push(...current.subTargets);
        }
    }
    return null;
}

function getTargetNamesFromNavigationStack() {
    const result = [];
    for (let i = 0; i < navigationStack.length; i++) {
        const root = findTargetFromId(navigationStack[i]);
        result.push({
            order: i + 1,
            title: root.title
        })
    }
    return result;
}

//generateTestData();
//doTest();

function generateTestData() {
    addTarget(0, 'right', createTarget());
    navigationStack.push(0);
    addTarget(0, 'right', createTarget());
    addTarget(0, 'right', createTarget());

    // 0
    // 1 2
}

function doTest() {
    navigationStack.push(0);
    console.log(markTargetAsDone(1));
    console.log(markTargetAsDone(2));
    console.log(findParentFromNavigationStack());
}



// Exporting the CRUD methods and necessary variables
module.exports = {
    addTarget,
    updateTarget,
    deleteTarget,
    createTarget,
    getTargetsAtCurrentLevel,
    findPositionInCurrentRootFromId,
    rearrangeTargets,
    markTargetAsDone,
    getProgressOfTargetInCurrentRootFromId,
    getTargetNamesFromNavigationStack,
    navigationStack
};