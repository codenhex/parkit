import Link from 'next/link'
import { trans } from '../public/js/helpers'

const SiteHeader = (props) => {

  const { lang } = props;

  return (
    <header className="parkit-header">
        <div className="parkit-container">
          <div className="parkit-row parkit-justify-space-between parkit-align-item-center">
            <div className="parkit-col-fluid">
              <Link href="/">
                <a className="parkit-logo"><img src="images/logo-32.png" alt="Park It | Find the car, bike parking near you..."/></a>
              </Link>
            </div>
            <div className="parkit-col-fluid">
              <nav className="parkit-nav">
                <div className="parkit-lang">
                  <span className="parkit-lang_selected">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5zM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1zm1.9-6.1l-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4zM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12zm3.5 6.6l1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4z" fill="currentColor"></path></svg>
                    <span>{trans(lang, lang)}</span>
                  </span>
                  <span className="parkit-lang_selector">
                    <span onClick={() => props.langChange('en')}>{trans('en', lang)}</span>
                    <span onClick={() => props.langChange('bn')}>{trans('bn', lang)}</span>
                  </span>
                </div>
                <ul className="parkit-menu">
                  <li><Link href="#locations"><a>{trans('Parking Near', lang)}</a></Link></li>
                  <li><Link href="/signin"><a>{trans('Sign In', lang)}</a></Link></li>
                  <li><Link href="#app-download"><a className="btn">{trans('Get App', lang)}</a></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <style jsx>{`
        .parkit-header{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 950;
          padding: 22px 0;
        }
        .parkit-logo{
          display: inline-block;
        }
        .parkit-logo img{
          vertical-align: middle;
        }
        .parkit-lang{
            display: inline-block;
            vertical-align: middle;
            position: relative;
        }
        .parkit-lang_selected{
            display: block;
            position: relative;
            text-transform: uppercase;
            font-weight: 600;
            line-height: 32px;
            cursor: pointer;
            background-color: transparent;
            border-radius: 16px;
            padding: 0 14px;
            transtition: all 0.3s ease;
        }
        .parkit-lang_selected:hover{
          background-color: rgba(0,0,0,0.24);
        }
        .parkit-lang_selected svg{
          display: inline-block;
          vertical-align: middle;
          line-height: inherit;
          margin-right: 4px;
        }
        .parkit-lang_selected span{
          display: inline-block;
          vertical-align: middle;
          line-height: inherit;
        }
        .parkit-lang_selector{
            position: absolute;
            text-transform: uppercase;
            margin: 0;
            border: 1px solid #EDF1F4;
            box-shadow: 0 12px 15px 0 rgb(21 41 52 / 5%);
            border-radius: 0 0 4px 4px;
            right: 0;
            top: 100%;
            padding: 8px 0;
            min-width: 120px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        .parkit-lang:hover .parkit-lang_selector{
          opacity: 1;
          visibility: visible;
        }
        .parkit-lang_selector span{
          display: block;
          cursor: pointer;
          trantition: all 0.3s ease;
          line-height: 24px;
          padding: 4px 16px;
        }
        .parkit-lang_selector span:hover{
          background-color: rgba(0,0,0,0.24);
        }
        .parkit-menu{
            display: inline-block;
            vertical-align: middle;
            position: relative;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .parkit-menu li{
          display: inline-block;
        }
        .parkit-menu li a{
          display: block;
          line-height: 20px;
          color: #111111;
          border: 1px solid transparent;
          text-decoration: none;
          padding: 5px 12px;
          font-size: 14px;
          tranition: all 0.3s ease;
        }
        .parkit-menu li a:hover{
          color: #006b70;
        }
        .parkit-menu li a.btn{
          border-color: #092336;
          margin-left: 12px;
          border-radius: 3px;
        }
        .parkit-menu li a.btn:hover{
          background-color: #006b70;
          border-color: #006b70;
          color: white;
        }
      `}</style>

      </header>
  )
}

export default SiteHeader;