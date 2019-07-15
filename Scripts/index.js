import Highway from '@dogstudio/highway';
import SlideUp from './PageTransition';


const H = new Highway.Core({

    transitions: {
        default: SlideUp
    }
    
    // portfolio: SlideUp,
    // about: SlideUp,
});



//We can assign specific transitions(classes) to particular pages: or set a default: