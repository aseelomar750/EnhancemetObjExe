/* Task 1: Compile Participant Details with Shorthand Property Names */
/* Task 1: Compile Participant Details with Shorthand Property Names */
const fName = "Aseel";
const age = 25;
const studyField="web developer";

// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const participant={
    fName,
    age,
    studyField
};

/* Task 2: Implement a Shorthand Function for Participant Info */
const participantCopy = {
    ...participant,
    displayInfo() {
        console.log(`Participant: ${this.fName}, Age: ${this.age}, Study Field: ${this.studyField}`);
    }
};

// Call the displayInfo method
participantCopy.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
const participantAnotherCopy = {
    ...participant,
    displayInfo: function() {
        console.log(`Participant: ${this.fName}, Age: ${this.age}, Study Field: ${this.studyField}`);
    }
};

// Call the displayInfo method
participantAnotherCopy.displayInfo();


// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantArrowCopy = {
    fName,
    age,
    studyField,
    displayInfo: () => {
        console.log(`Participant: ${this.fName}, Age: ${this.age}, Study Field: ${this.studyField}`);
    }
};



/*
 * Observations:
 * TODO: Explain here. Arrow functions do not have their own this its show values from different sources/scopes
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(participant, key, value) {
    return {
       ...participant,
        [key]: value
    };
}
// updateParticipantInfo('project','cis125');
