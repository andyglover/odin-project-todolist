
export default (function logic () {
    let project = [];
    function addTask(input){
        project.push(new Task(input));
        console.log(project);
    }
    function Task(title) {
        this.title = title;
    }
    return { addTask };
})()