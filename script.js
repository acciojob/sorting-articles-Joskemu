//your JS code here. If required.
// List of band names
const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to remove the words 'a', 'an', and 'the' when sorting
function cleanBandName(name) {
    // Split the band name into words and remove 'a', 'an', and 'the'
    return name.split(' ').filter(word => !['a', 'an', 'the'].includes(word.toLowerCase())).join(' ');
}

// Sort bands alphabetically ignoring the words 'a', 'an', and 'the'
const sortedBands = bands.sort((a, b) => {
    const cleanedA = cleanBandName(a);
    const cleanedB = cleanBandName(b);
    return cleanedA.localeCompare(cleanedB);
});

// Function to display the sorted band list in the HTML
function displayBands() {
    const listElement = document.getElementById('band');
    
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        listElement.appendChild(listItem);
    });
}

// Call the function to display bands on page load
displayBands();
