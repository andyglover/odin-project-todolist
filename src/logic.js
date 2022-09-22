export default (function logic () {
    let projects = [];
    let currentProject;
    addProject("default");
    
    function addTask(input){
        currentProject.array.push(new Task(input));
    }

    function addProject(title){
        projects.push(new Project(title));
        currentProject = projects.find(x => x.title == title);
    }

    function switchProject(title){
        currentProject = projects.find(x => x.title == title);
    }

    function Task(title) {
        this.title = title;
    }

    function Project(title){
        this.title = title;
        this.array = [];
    }

    function getProjectsArray(){
        return projects;
    }
    function getProjectArray(){
        return currentProject.array;
    }

    function getProjectTitle(){
        return currentProject.title;
    }

    function deleteTask(index){
        currentProject.array.splice(index, 1);
    }
    function deleteProject(index){
        if(projects.length>1){
            projects.splice(index, 1);
            if(projects.indexOf(currentProject)==-1){
                currentProject=projects[0]
            }
        }
    }

    return { currentProject, addTask, deleteTask, deleteProject, getProjectsArray, getProjectArray, getProjectTitle, addProject, switchProject };
})()
