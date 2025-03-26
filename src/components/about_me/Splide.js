import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import children1 from "../../assets/img/photo_2025-03-21_12-56-23.jpg"
import children2 from "../../assets/img/photo_2025-03-21_12-57-30.jpg"
const AboutSplide = props => {
    return (
        <div class="flex flex-wrap gap-10 justify-evenly max-w-6xl mx-auto -mt-80 ">
            <Splide 
                options={ {
                    type     : 'loop',
                    height   : '10rem',
                    focus    : 'center',
                    autoWidth: true,
                    autoScroll: {
                        speed: 1,
                      },
                  } }
                aria-label="My Favorite Images">
                <SplideSlide>
                    <img src={children1} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={children2} alt="Image 2"/>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default AboutSplide;