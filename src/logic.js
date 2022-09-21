
export default (function logic () {
    let project = [];
    let currentProject = project;
    
    function addTask(input){
        currentProject.push(new Task(input));
        console.log(currentProject);
    }
    function Task(title) {
        this.title = title;
    }

    function getProject(){
        return currentProject;
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