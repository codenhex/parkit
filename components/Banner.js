import { trans } from "../public/js/helpers";

const Banner = (props) => {

    const { lang } = props;

    return(
        <div className="parkit-banner">
          <div className="parkit-caption">
              <div className="parkit-container">
                  <h1>{trans('Park anytime, anywhere', lang)}</h1>
                  
              </div>
          </div>
          
          <style jsx>{`
            .parkit-banner{
                background-image: url('images/banner.png');
                height: 100vh;
                min-height: 600px;
                background-size: contain;
                background-position: bottom center;
                background-repeat: no-repeat;
            }
          `}</style>
        </div>
    )
}

export default Banner;