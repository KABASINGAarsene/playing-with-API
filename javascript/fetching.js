// async function fetchExercises(muscle) {
//     const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '10d0efdfc8msh696bb6ebd801110p141c19jsnd0d6316659b1',
//             'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
        
//         displayExercises(data, muscle);
//     } catch (error) {
//         console.error('Error fetching exercises:', error.message);
//         document.getElementById('exercise-info').innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
//     }
// }

// const exerciseGifs = {
//     // Arm Exercises
//     "Incline Hammer Curls": "pics/incline hammer curls.gif",
//     "Wide-grip barbell curl": "pics/wide-grip barbell curl.gif",
//     "EZ-bar spider curl": "pics/EZ-bar spider curl.gif",

//     // Chest Exercises
//     "Dumbbell Bench Press": "pics/BENCHPRESS.gif",
//     "Pushups": "pics/pushups GIF by Hockey Training.gif",
//     "Close-grip bench press": "pics/close-grip bench press.gif",

//     // Abs Exercises
//     "Landmine twist": "pics/Landmine twist.gif",
//     "Elbow plank": "pics/elbowplank.gif",
//     "Bottoms Up": "pics/Bottoms Up.gif",

//     // Legs Exercises
//     "Single-Leg Press": "pics/Single-Leg Press.gif",
//     "Clean from Blocks": "pics/block-clean.gif",
//     "Barbell Full Squat": "pics/Barbell Full Squat.gif"
// };


// function displayExercises(exercises, muscle) {
//     const exerciseInfoDiv = document.getElementById('exercise-info');

//     if (exercises.length === 0) {
//         exerciseInfoDiv.innerHTML = `<p>No exercises found for ${muscle}.</p>`;
//         return;
//     }


//     // Format exercise data
//     let exerciseHTML = `<h2>${muscle.toUpperCase()} Exercises</h2>`;
    
//     exercises.slice(0, 3).forEach(exercise => {
//         exerciseHTML += `
//             <div class="exercise-card">
//                 <h3>${exercise.name}</h3>
//                  ${gifPath ? `<img src="${gifPath}" alt="${exercise.name} GIF" class="exercise-gif">` : ''}
//                 <p><strong>Type:</strong> ${exercise.type}</p>
//                 <p><strong>Equipment:</strong> ${exercise.equipment}</p>
//                 <p><strong>Instructions:</strong> ${exercise.instructions}</p>
//             </div>
//         `;
//     });

//     exerciseHTML += `<button onclick="closeExerciseInfo()">Close</button>`;

//     exerciseInfoDiv.innerHTML = exerciseHTML;
//     exerciseInfoDiv.style.display = 'block';
// }

// function closeExerciseInfo() {
//     document.getElementById('exercise-info').style.display = 'none';
// }

async function fetchExercises(muscle) {
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '10d0efdfc8msh696bb6ebd801110p141c19jsnd0d6316659b1',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        displayExercises(data, muscle);
    } catch (error) {
        console.error('Error fetching exercises:', error.message);
        document.getElementById('exercise-info').innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
    }
}

const exerciseGifs = {
    // Arm Exercises
    "Incline Hammer Curls": "pics/Incline Hammer Curls.gif",
    "Wide-grip barbell curl": "pics/Wide-grip barbell curl.gif",
    "EZ-bar spider curl": "pics/EZ-bar spider curl.gif",

    // Chest Exercises
    "Dumbbell Bench Press": "pics/BENCHPRESS.gif",
    "Pushups": "pics/pushups GIF by Hockey Training.gif",
    "Close-grip bench press": "pics/close-grip bench press.gif",

    // Abs Exercises
    "Landmine twist": "pics/Landmine twist.gif",
    "Elbow plank": "pics/elbowplank.gif",
    "Bottoms Up": "pics/Bottoms up.gif",

    // Legs Exercises
    "Single-Leg Press": "pics/single-leg press.gif",
    "Clean from Blocks": "pics/block-clean.gif",
    "Barbell Full Squat": "pics/Barbell Full Squat.gif"
};

function displayExercises(exercises, muscle) {
    const exerciseInfoDiv = document.getElementById('exercise-info');

    if (exercises.length === 0) {
        exerciseInfoDiv.innerHTML = `<p>No exercises found for ${muscle}.</p>`;
        return;
    }

    let exerciseHTML = `<h2>${muscle.toUpperCase()} Exercises</h2>`;
    
    exercises.slice(0, 3).forEach(exercise => {
        const gifPath = exerciseGifs[exercise.name] || ""; // Get the GIF path if it exists

        exerciseHTML += `
            <div class="exercise-card">
                <h3>${exercise.name}</h3>
                ${gifPath ? `<img src="${gifPath}" alt="${exercise.name} GIF" class="exercise-gif">` : ''}
                <p><strong>Type:</strong> ${exercise.type}</p>
                <p><strong>Equipment:</strong> ${exercise.equipment}</p>
                <p><strong>Instructions:</strong> ${exercise.instructions}</p>
            </div>
        `;
    });

    exerciseHTML += `<button onclick="closeExerciseInfo()">Close</button>`;

    exerciseInfoDiv.innerHTML = exerciseHTML;
    exerciseInfoDiv.style.display = 'block';
}

function closeExerciseInfo() {
    document.getElementById('exercise-info').style.display = 'none';
}
