function composeTypes(status) {
    if (status === "error") {
        console.log("Status is " + status);
    }
    else if (status === "success") {
        console.log("Status is " + status);
    }
    else if (status === "loading") {
        console.log("Status is " + status);
    }
    else {
        console.log("Incorrect status!");
    }
}
composeTypes("success");
