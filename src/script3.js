// Select slider inputs
const minSlider = document.querySelector(".min.input-ranges");
const maxSlider = document.querySelector(".max.input-ranges");

// Select elements to display the selected range
const minValueElement = document.getElementById("first");
const maxValueElement = document.getElementById("second");
const currentRangeElement = document.getElementById("third");

// Function to update the displayed range values
function updateRange() {
  const minValue = parseInt(minSlider.value);
  const maxValue = parseInt(maxSlider.value);

  // Ensure the min slider doesn't exceed the max slider value
  if (minValue > maxValue) {
    minSlider.value = maxValue;
    minValueElement.textContent = maxValue.toLocaleString();
  } else {
    minValueElement.textContent = minValue.toLocaleString();
  }

  // Ensure the max slider doesn't go below the min slider value
  if (maxValue < minValue) {
    maxSlider.value = minValue;
    maxValueElement.textContent = minValue.toLocaleString();
  } else {
    maxValueElement.textContent = maxValue.toLocaleString();
  }

  // Update the current range element
  currentRangeElement.textContent = `${minValue.toLocaleString()} - ${maxValue.toLocaleString()}`;
}

// Add event listeners for input events on sliders
minSlider.addEventListener("input", updateRange);
maxSlider.addEventListener("input", updateRange);

// Initial call to set the default values when the page loads
updateRange();
