import React, { useEffect } from "react";
import format from "date-fns/format";
import Glide from '@glidejs/glide'

export default class WorkPreview extends React.Component {

  render() {

    const {entry, widgetsFor, getAsset} = this.props;

    const vidContainer = {
      padding: '56.25% 0 0 0',
      position: 'relative',
    };

    const iFrame = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    }

    return (
      <div className="text-sm uppercase text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 tracking-wide transition-all">
        <div className="animate__animated animate__fadeIn p-2">
          <div className="border border-solid border-gray-900 dark:border-white overflow-hidden">

            <div className="marquee2" data-duplicated='true' data-direction='left' data-pauseOnHover='false' data-gap='200' data-speed='100' data-startVisible='true'>
              <span className="text-6xl font-semibold">{ entry.getIn(["data", "inPageTitle"])}</span>
            </div>

            <div className="w-full flex flex-row font-semibold border-t border-b border-gray-900 dark:border-white">
              <div className="p-5 w-1/2">
                { format(entry.getIn(["data", "date"]), "MMM D, YYYY") }
              </div>
              <div className="p-5 w-1/2 border-l border-solid border-gray-900 dark:border-white">
                { entry.getIn(["data", "tags"])}
              </div>
            </div>

            <div className="max-w-5xl mx-auto py-10 text-4xl normal-case p-5">
              { entry.getIn(["data", "description"])}
            </div>

            <div className="px-5">
              <div style={vidContainer}>
                <iframe src={ entry.getIn(["data", "video"])} style={iFrame} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>

            <div className="max-w-5xl mx-auto py-10 normal-case markdown p-5 flex flex-wrap">
              {this.props.widgetsFor('sections').map(function(section, index) {
                return (
                  <div className="w-full md:w-1/2 p-2" key={index}>
                    <h4 className="font-semibold mb-2">{section.getIn(['data', 'subtitle'])}</h4>
                    <p>{section.getIn(['data', 'copy'])}</p>
                  </div>
                );
              })}
            </div>

            <div className="carousel pb-10 mx-auto px-5 md:px-0">
              <div className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">

                    {this.props.widgetsFor('carousel').map(function(slide, index) {
                      return (
                        <li className="glide__slide" key={index}>

                          {slide.getIn(['data', 'image']) ?
                            <img className="w-full" src={getAsset(slide.getIn(['data', 'image']))}/>
                            : null
                          }

                          {slide.getIn(['data', 'video']) ?
                            <video autoplay muted loop id="myVideo" className="w-full">
                              <source src={slide.getIn(['data', 'video'])} type="video/mp4"/>
                            </video>
                            : null
                          }

                          <p className="pt-3">{slide.getIn(['data', 'alt'])}</p>
                        </li>
                      )
                    })}

                  </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="carousel-arrow glide__arrow--left" data-glide-dir="<">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  </button>
                  <button className="carousel-arrow glide__arrow--right" data-glide-dir=">">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
