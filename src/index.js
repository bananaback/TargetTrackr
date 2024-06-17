import './styles/styles.css';
import addTaskImage from './images/add-task.png';
import markDoneImage from './images/check-circle.png'

const { addTarget, updateTarget, deleteTarget, createTarget, getTargetsAtCurrentLevel, findPositionInCurrentRootFromId, rearrangeTargets, markTargetAsDone, getProgressOfTargetInCurrentRootFromId, navigationStack } = require('./target-core');

$(document).ready(function () {
    $('.add-target-btn img').attr('src', addTaskImage);
    $('#backButton').hide();

    // Show the add target button if there are no targets
    if (getTargetsAtCurrentLevel().length === 0) {
        $('.targets-container .add-target-btn').show();
    }

    // Use event delegation to handle click on .add-target-btn
    $('.targets-container').off('click', '.add-target-btn').on('click', '.add-target-btn', function () {
        addTarget(0, 'right', createTarget());
        renderTargets();
        $('.targets-container .add-target-btn').hide();
    });

    // Event delegation for clicks on .target elements
    $('.targets-container').off('click', '.target-overview.active').on('click', '.target-overview.active', function (event) {
        // Check if the click originated from a button inside .target
        let nameAttr = $(event.target)[0].name;

        if ($(event.target)[0].id == "colorfill") {
            return;
        }
        if (nameAttr != "update-btn" && nameAttr != "delete-btn" && nameAttr != "done-btn" && nameAttr != "unmark-btn" && nameAttr != "cancel-btn" && nameAttr != "save-btn") {
            handleTargetClick.call(this, event);
        }
    });

    // Event delegation for various button clicks
    $('.targets-container').off('click', '.update-btn').on('click', '.update-btn', handleUpdateButtonClick);
    $('.targets-container').off('click', '.cancelUpdate').on('click', '.cancelUpdate', handleCancelUpdateClick);
    $('.targets-container').off('click', '.saveUpdate').on('click', '.saveUpdate', handleSaveUpdateClick);
    $('.targets-container').off('click', '.done-btn').on('click', '.done-btn', handleDoneButtonClick);
    $('.targets-container').off('click', '.unmark-btn').on('click', '.unmark-btn', handleUnmarkButtonClick);
    $('.targets-container').off('click', '.delete-btn').on('click', '.delete-btn', handleDeleteButtonClick);

    // Context menu setup
    $('.targets-container').off('contextmenu', '.target').on('contextmenu', '.target', showContextMenu);
    $('#menu-add-left').off('click').on('click', () => addNewTarget('left'));
    $('#menu-add-right').off('click').on('click', () => addNewTarget('right'));

    // Drag and drop functionality
    setupDragAndDrop();

    // Mouse wheel scroll functionality
    setupMouseWheelScroll();

    // Handle back navigation
    $('#backButton').off('click').on('click', handleBackButtonClick);

});


function handleUpdateButtonClick() {
    var $target = $(this).closest('.target');
    $target.find('.target-overview').removeClass('active');
    $target.find('.target-update-form').addClass('active');
    setTimeout(() => {
        var updateFormHeight = $target.find('.card.target-update-form.active').height();
        $target.height(updateFormHeight);
    }, 1000);
}

function handleCancelUpdateClick() {
    var $target = $(this).closest('.target');
    $target.find('.target-update-form').removeClass('active');
    $target.find('.target-overview').addClass('active');
    setTimeout(() => {
        var overviewHeight = $target.find('.card.target-overview.active').height();
        $target.height(overviewHeight);
    }, 1000);
}

// Define the function to handle update button click
function handleSaveUpdateClick(event) {

    // Find the closest .target element
    var $target = $(this).closest('.target');
    var targetId = $target.attr('id').split('-')[1]; // Extract id from target element

    // Retrieve updated data from the form
    var updatedTitle = $target.find('.updateTitle').val();
    var updatedDescription = $target.find('.updateDescription').val();

    // Perform further processing (e.g., send data to server, update UI, etc.)
    updateTarget(updatedTitle, updatedDescription, false, targetId);

    // Optionally reset the form fields
    $target.find('.updateForm')[0].reset();

    // Re-render the targets to reflect changes
    renderTargets();
}

function handleDoneButtonClick() {
    var $target = $(this).closest('.target');
    var targetId = $target.attr('id').split('-')[1]; // Extract id from target element
    if (markTargetAsDone(targetId) === 1) {
        // success
        $target.find('.target-overview').addClass('expand');
        $target.find('.card-header').addClass('expand');

        // Set the width of .progress div to 100%
        $target.find('.progress').css('width', '100%');
    } else {
        alert("All sub-targets of this target must be done first.");
    }
}

function handleUnmarkButtonClick() {
    var $target = $(this).closest('.target');
    $target.find('.target-overview').removeClass('expand');
    $target.find('.card-header').removeClass('expand');

    var targetId = $target.attr('id').split('-')[1]; // Extract id from target element

    // Retrieve updated data from the form
    var updatedTitle = $target.find('.updateTitle').val();
    var updatedDescription = $target.find('.updateDescription').val();

    // Perform further processing (e.g., send data to server, update UI, etc.)
    updateTarget(updatedTitle, updatedDescription, false, targetId);

    // Set the width of .progress div to 100%
    $target.find('.progress').css('width', getProgressOfTargetInCurrentRootFromId(targetId) + '%');
}

function handleDeleteButtonClick() {
    var $deleteBtn = $(this);
    var $target = $deleteBtn.closest('.target');
    $target.addClass('deleting');
    let targetWidth = $target.width();
    $target.animate({
        padding: "0px",
        'opacity': '0',
        'margin-left': '-' + targetWidth * 2.95 + 'px',
        'font-size': "0px"
    }, 1000, function () {
        var targetId = $target.attr('id').split('-')[1];
        deleteTarget(targetId);
        $(this).remove();
        // Get current root's targets
        if (getTargetsAtCurrentLevel().length === 0) {
            $('.targets-container .add-target-btn').show();
        }
    });
}

function handleTargetClick(event) {
    // Traverse up from .target-overview to its parent .target
    let $target = $(event.currentTarget).closest('.target');

    // Get the targetId from the parent .target element
    let targetId = $target.attr('id').split('-')[1];

    // Call your function to navigate into the target using the extracted targetId
    navigateIntoTarget(targetId);
}


function showContextMenu(event) {
    event.preventDefault(); // Prevent default context menu
    const $target = $(this);

    // Show context menu at the clicked target position
    $('#context-menu').css({
        display: 'block',
        left: event.pageX,
        top: event.pageY
    });

    // Store the target ID for reference
    $('#context-menu').data('targetId', $target.attr('id'));
}

function setupDragAndDrop() {
    let draggedElement;
    let placeholder;

    $('.targets-container').off('dragstart', 'target').on('dragstart', '.target', function (event) {
        draggedElement = this;
        placeholder = $('<div class="placeholder"></div>');
        setTimeout(() => $(this).addClass('dragging'), 0);
    });

    $('.targets-container').off('dragover').on('dragover', function (event) {
        event.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        if (!draggingElement) return;

        const afterElement = getDragAfterElement(this, event.clientX);
        if (afterElement == null) {
            $(this).append(placeholder);
        } else {
            $(afterElement).before(placeholder);
        }
    });

    $('.targets-container').off('drop').on('drop', function (event) {
        event.preventDefault();
        if (placeholder) {
            $(placeholder).before(draggedElement);
            $(draggedElement).removeClass('dragging');
            placeholder.remove();

            const idList = [];
            $('.targets-container .target').each(function () {
                const id = $(this).attr('id'); // Assuming ID attribute contains 'target-0' format
                if (id) {
                    const parts = id.split('-');
                    if (parts.length === 2 && parts[0] === 'target') {
                        const index = parseInt(parts[1], 10); // Parse the numeric index
                        if (!isNaN(index)) {
                            idList.push(index);
                        }
                    }
                }
            });

            // Pass the ID list to the method in target-core.js
            rearrangeTargets(idList);
        }
    });

    $('.targets-container').off('dragend').on('dragend', '.target', function () {
        $(this).removeClass('dragging');
        if (placeholder) {
            placeholder.remove();
        }
    });
}

// Helper function to get the element after the current dragging position
function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.target:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function setupMouseWheelScroll() {
    const acceleration = 0.2; // Acceleration factor
    const stopDeceleration = 1.5; // Deceleration factor when stopping
    const timeConstant = 16; // Interval in milliseconds (corresponds to roughly 60 fps)

    let velocity = 0;
    let animationFrame = null;

    $('.targets-container').on('wheel', function (event) {
        event.preventDefault(); // Prevent default scroll behavior

        const container = $(this)[0];
        const delta = event.originalEvent.deltaY || event.originalEvent.detail || event.originalEvent.wheelDelta;

        velocity += delta * acceleration; // Calculate velocity

        // Clear previous animation frame to prevent overlap
        cancelAnimationFrame(animationFrame);

        // Smooth scroll animation function
        function smoothScroll() {
            // Adjust scroll left based on velocity
            container.scrollLeft += velocity;

            // Apply deceleration
            if (Math.abs(velocity) > 0.5) { // Normal deceleration
                velocity *= 0.95; // Adjust deceleration factor as needed
            } else { // Stop deceleration when velocity is low
                velocity = 0;
                return; // Exit animation loop
            }

            // Recursive call for smooth animation
            animationFrame = requestAnimationFrame(smoothScroll);
        }

        // Start smooth scrolling animation
        smoothScroll();
    });

    $('#stopScrollButton').on('click', function () {
        velocity *= -stopDeceleration; // Apply rapid deceleration to stop scrolling
    });

    $(window).on('unload', function () {
        cancelAnimationFrame(animationFrame); // Cleanup animation frame on document unload
    });
}

function addNewTarget(direction) {
    const newTarget = createTarget();

    const targetId = $('#context-menu').data('targetId').split('-')[1];
    const $target = $('#target-' + targetId);
    const $newTarget = $(createTargetElement(newTarget)); // Create new target DOM element

    if (direction === 'left') {
        $target.before($newTarget); // Add new target to the left
    } else {
        $target.after($newTarget); // Add new target to the right
    }

    let idPosition = findPositionInCurrentRootFromId(targetId);

    addTarget(idPosition, direction, newTarget);

    $('#context-menu').hide();
}

function createTargetElement(target) {
    const progressBarWidth = `${target.percent}%`; // Calculate progress bar width
    const isDoneClass = target.isDone === true ? 'expand' : '';
    return `
        <div class="target" draggable="true" id="target-${target.id}">
            <div class="card target-overview ${isDoneClass} active">
                <div class="card-header ${isDoneClass}">
                    ${target.title}
                    <div class="unmark-wrapper">
                        <div class="unmark-btn" name="unmark-btn">
                            <img src="${markDoneImage}" alt="check-circle">
                            <div class="colorfill" id="colorfill"></div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <p>${target.description}</p>
                    <div class="progress-bar" id="progressBar">
                        <div class="progress" id="progress" style="width: ${progressBarWidth};"></div>
                    </div>
                </div>
                <div class="buttons-container">
                    <button class="update-btn" name="update-btn">Update</button>
                    <button class="delete-btn" name="delete-btn">Delete</button>
                    <button class="done-btn" name ="done-btn">Done</button>
                </div>
            </div>
            <div class="card target-update-form">
                <form class="updateForm">
                    <label for="updateTitle">Title:</label>
                    <input id="updateTitle" type="text" class="updateTitle" name="updateTitle" value="${target.title}">
                    <br>
                    <label for="updateDescription">Description:</label>
                    <textarea id="updateDescription" class="updateDescription" name="updateDescription">${target.description}</textarea>
                    <br>
                    <button type="button" class="saveUpdate" name="save-btn">Save</button>
                    <button type="button" class="cancelUpdate" name="cancel-btn">Cancel</button>
                </form>
            </div>
        </div>
    `;
}

function renderTargets() {
    // Clear existing target elements
    $('.targets-container .target').remove();

    const currentTargets = getTargetsAtCurrentLevel();
    console.log('current targets: ', currentTargets);
    // Render current targets
    currentTargets.forEach(target => {
        const targetHtml = createTargetElement(target);
        $('.targets-container').append(targetHtml);
    });

    // Show or hide the add target button based on the number of targets
    if (currentTargets.length === 0) {
        $('.targets-container .add-target-btn').show();
    } else {
        $('.targets-container .add-target-btn').hide();
    }

    // Show or hide the back button
    if (navigationStack.length === 0) {
        $('#backButton').hide();
    } else {
        $('#backButton').show();
    }
}

function navigateIntoTarget(targetId) {
    navigationStack.push(targetId);
    $('#context-menu').hide();
    renderTargets();
}

function handleBackButtonClick() {
    $('#context-menu').hide();
    if (navigationStack.length > 0) {
        navigationStack.pop();
        renderTargets();
    }
}
