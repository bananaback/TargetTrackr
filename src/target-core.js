// this is an array
let targetRootArray = [];
let targetIdCounter = 0;
let navigationStack = [];

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
}

/*
addTarget(0, 'right', createTarget());
navigationStack.push(0);
addTarget(0, 'right', createTarget());
addTarget(0, 'right', createTarget());

updateTarget("heheboi", "okay", true, 1);
*/

// factory to create target object
function createTarget() {
    return {
        id: targetIdCounter++,
        title: 'New Target ' + (targetIdCounter - 1),
        description: 'Description of the new target ' + (targetIdCounter - 1),
        percent: 0,
        isDone: false,
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


// Exporting the CRUD methods and necessary variables
module.exports = {
    addTarget,
    updateTarget,
    deleteTarget,
    createTarget,
    getTargetsAtCurrentLevel,
    findPositionInCurrentRootFromId,
    rearrangeTargets,
    navigationStack
};