import Highway from '@dogstudio/highway';
import { TweenMax, TimelineMax } from 'gsap';


class SlideUp extends Highway.Transition{
    in({ from, to, done }){

        const PageIn = new TimelineMax();
            PageIn 
                .fromTo(to, 1,
                     {opacity: 0, bottom: '-100%'}, 
                     {opacity:1, bottom: '0%', ease: Expo.easeInOut, onComplete: function(){
                        done();
                    }}
                );



    }
    out({ from, done }){
        from.remove();
        done();
    }
}


export default SlideUp;