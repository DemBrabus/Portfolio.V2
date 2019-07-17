const Run = () => {
    console.log('Portfolio.V2');



    const ProjectLink1 = document.getElementById('ProjectLink1');
    const ProjectLink2 = document.getElementById('ProjectLink2');
    const ProjectLink3 = document.getElementById('ProjectLink3');
    const ProjectLink4 = document.getElementById('ProjectLink4');
    const ProjectLink5 = document.getElementById('ProjectLink5');
    const Window = document.getElementById('Window');

    const Project1Hover = () => {
        Window.classList.add('Project1Window');
        console.log('IN 1');
    }
    const Project1Disable = () => {
        Window.classList.remove('Project1Window');
    }

        const Project2Hover = () => {
        Window.classList.add('Project2Window');
        }
        const Project2Disable = () => {
            Window.classList.remove('Project2Window');
        }

    const Project3Hover = () => {
        Window.classList.add('Project3Window');
    }
    const Project3Disable = () => {
        Window.classList.remove('Project3Window');
    }

        const Project4Hover = () => {
        Window.classList.add('Project4Window');
        }
        const Project4Disable = () => {
            Window.classList.remove('Project4Window');
        }

    const Project5Hover = () => {
        
        Window.classList.add('Project5Window');
    }
    const Project5Disable = () => {
        Window.classList.remove('Project5Window');
    }







    ProjectLink1.addEventListener('mouseover', Project1Hover);
    ProjectLink1.addEventListener('mouseleave', Project1Disable);

        ProjectLink2.addEventListener('mouseover', Project2Hover);
        ProjectLink2.addEventListener('mouseleave', Project2Disable);

    ProjectLink3.addEventListener('mouseover', Project3Hover);
    ProjectLink3.addEventListener('mouseleave', Project3Disable);

        ProjectLink4.addEventListener('mouseover', Project4Hover);
        ProjectLink4.addEventListener('mouseleave', Project4Disable);

    ProjectLink5.addEventListener('mouseover', Project5Hover);
    ProjectLink5.addEventListener('mouseleave', Project5Disable);

}


export default Run;