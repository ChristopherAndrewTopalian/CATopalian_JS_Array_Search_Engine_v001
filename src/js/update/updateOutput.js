// updateOutput.js

function updateOutput(data = records)
{
    let output = ge('outputDiv');

    output.innerHTML = '';

    for (let x = 0; x < data.length; x++)
    {
        let firstNameDiv = ce('div')
        firstNameDiv.innerHTML = data[x].firstName;
        output.append(firstNameDiv);

        //-//

        let lastNameDiv = ce('div')
        lastNameDiv.innerHTML = data[x].lastName;
        output.append(lastNameDiv);

        //-//

        output.append(ce('hr'));
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

