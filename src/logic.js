
export default (function logic () {
    let currentProject = new Project("default");
    
    function addTask(input){
        currentProject.array.push(new Task(input));
        console.log(currentProject);
    }
    function Task(title) {
        this.title = title;
    }

    function Project(title){
        this.title = title;
        this.array = [];
    }

    function getProject(){
        return currentProject.array;
    }
    
    function createNewProject(title) {
        title = [];
        currentProject = title;
    }
    function promptForProjectName(){
        let input = prompt("Project name?","Project");
        if(input != null){
            createNewProject(input);
        }
    }

    return { addTask, getProject, createNewProject, promptForProjectName };
})()