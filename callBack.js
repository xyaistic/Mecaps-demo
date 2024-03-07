function prepareStarter(callback) {
    console.log("Preparing the starter...");
    setTimeout(() => {
        console.log("Starter is ready!");
        callback();
    }, 1000);
}

function prepareMainCourse(callback) {
    console.log("Preparing the main course...");
    setTimeout(() => {
        console.log("Main course is ready!");
        callback();
    }, 1000);
}

function prepareDessert(callback) {
    console.log("Preparing the dessert...");
    setTimeout(() => {
        console.log("Dessert is ready!");
        callback();
    }, 1000);
}

prepareStarter(() => {
    prepareMainCourse(() => {
        prepareDessert(() => {
            console.log("All courses are ready!");
        });
    });
});