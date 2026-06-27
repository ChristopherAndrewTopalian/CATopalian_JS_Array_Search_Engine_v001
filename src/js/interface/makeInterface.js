// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //--//

    mainDiv.append(makeTitleOfApp());

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let searchbox = ce('input');
    searchbox.id = 'searchbox';
    searchbox.type = 'text';
    searchbox.placeholder = 'search';
    mainDiv.append(searchbox);

    let searchBtn = ce('button');
    searchBtn.textContent = 'Search';
    searchBtn.onclick = function()
    {
        // Grab the search term and make it lowercase
        let term = searchbox.value.toLowerCase();

        // Filter the main records array
        let searchResults = records.filter(function(entry)
        {
            // Check if the term exists in the first name
            let matchFirst = entry.firstName.toLowerCase().includes(term);
            
            // Check if the term exists in the last name
            let matchLast = entry.lastName.toLowerCase().includes(term);

            // The Logic Gate: Return true if EITHER matches (|| means OR)
            return matchFirst || matchLast; 
        });

        // Send the newly filtered array to the display
        updateOutput(searchResults);
    };
    mainDiv.append(searchBtn);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let firstNameDiv = ce('input');
    firstNameDiv.id = 'firstNameDiv';
    firstNameDiv.type = 'text';
    firstNameDiv.textContent = '';
    firstNameDiv.placeholder = 'First Name';
    mainDiv.append(firstNameDiv);

    //-//

    let lastNameDiv = ce('input');
    lastNameDiv.id = 'lastNameDiv';
    lastNameDiv.type = 'text';
    lastNameDiv.textContent = '';
    lastNameDiv.placeholder = 'Last Name';
    mainDiv.append(lastNameDiv);

    //-//

    let addEntryBtn = ce('button');
    addEntryBtn.textContent = 'Add';
    addEntryBtn.onclick = function()
    {
        let entry =
        {
            firstName: firstNameDiv.value,

            lastName: lastNameDiv.value
        };

        records.push(entry);

        firstNameDiv.value = '';
        lastNameDiv.value = '';

        updateOutput();
    };

    mainDiv.append(addEntryBtn);

    //-//

    let outputDiv = ce('div');
    outputDiv.id = 'outputDiv';
    outputDiv.innerHTML = JSON.stringify(records, null, 2);
    mainDiv.append(outputDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

