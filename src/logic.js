
export default (function logic () {
    let projects = [];
    let defaultProject = new Project("default");
    let currentProject = defaultProject;
    
    function addTask(input){
        currentProject.array.push(new Task(input));
        console.log(`Current project: ${currentProject.title}`);
        console.log(currentProject.array);
    }
    
    function addProject(title){
        projects.push(new Project(title));
    }

    function Task(title) {
        this.title = title;
    }

    function Project(title){
        this.title = title;
        this.array = [];
    }

    function getProjectArray(){
        return currentProject.array;
    }

    function getProjectTitle(){
        return currentProject.title;
    }
    
    function createNewProject(title) {
        title = [];
        currentProject = title;
    }
    // function promptForProjectName(){
    //     let input = prompt("Project name?","Project");
    //     if(input != null){
    //         createNewProject(input);
    //     }
    // }

    return { addTask, getProjectArray, getProjectTitle,createNewProject,  };
})()