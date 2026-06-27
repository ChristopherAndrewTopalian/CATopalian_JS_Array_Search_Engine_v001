// makeTitleOfApp.js

function makeTitleOfApp()
{
    // Create the container brick
    let mainDiv = ce('div');

    // Create the text brick
    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JS_Array_Search_Engine';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JS Array Search Engine';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(0, 255, 255)';

    // Snap the text brick inside the container brick (on the workbench)
    mainDiv.append(titleAndLink);

    // Hand the finished piece back to the factory manager
    return mainDiv; 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

