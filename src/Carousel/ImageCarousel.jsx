import React, { useEffect, useState }from 'react';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './ImageCarousel.css';

function ImageCarousel(props) {
    const [slideImages, setSlideImages] = useState([])
    const [currentSearchText, setCurrentSearchText] = useState()
    
    useEffect(() => {
        // Anything in here is fired on component mount.
        console.log('carousel props', props, currentSearchText)
        if ((props) && (props.searchText !== currentSearchText)) { 
            console.log('loading imaged')
            loadImages(props)
        }
        
    }, [props]);

    function loadImages(){
        setSlideImages([]);
        const imageUrl = `https://api.unsplash.com/search/photos?page=1&client_id=284ab250f4d0cd5fe2d1538ffa5d30a58d76e96fadfc90362d0a7aeb3191ef20&query=${props.searchText}`;
        console.log('images url ', imageUrl)
        fetch(imageUrl)
        .then(res => res.json())
        .then((data) => {
          
          let images = data.results
          var imagesInstance = [];   
          for(var i=0;i<images.length; i++){  
            imagesInstance[i] = images[i].urls['raw']+"&fit=crop&w=400&h=400";          
          }
         
         
          setSlideImages(getRandomArrayElements(imagesInstance, 10))
          setCurrentSearchText (props.searchText)
          console.log('images download ', imagesInstance)
        })
        .catch(console.log)
     }

     const getRandomArrayElements = function(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }

    return (
         
            <Carousel className="carosel"
            plugins={[
                 
                'centered',
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2,
                    },    
                },
                {
                    resolve: slidesToScrollPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
              
            ]}   
            >
           {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt={props.english} />
              </div>
            ))}
            </Carousel>
         
    );
}

 
  
export default ImageCarousel;