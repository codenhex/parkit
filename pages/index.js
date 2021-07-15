import Head from 'next/head'
import Link from 'next/link'
import { Component, useEffect, useState } from 'react'

import SiteHeader from '../components/SiteHeader'
import Banner from '../components/Banner'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      lang: 'en'
    }
  }

  componentDidMount(){
    let localLang = window.localStorage.getItem('parkit-lang');
    if(localLang){
      this.setState({lang: localLang});
    } else {
      window.localStorage.setItem('parkit-lang', this.state.lang);
    }
  }

  langChangehandle = (newLang) => {
    if (process.browser) {
      this.setState({lang: newLang});
      window.localStorage.setItem('parkit-lang', newLang);
    }
  }

  render() {
    return (
      <div className="parkit-root">
        <Head>
          <title>Park It | Find the car, bike parking near you...</title>
          <link rel="icon" href="images/icon-32.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet"/>
        </Head>
  
        <SiteHeader lang={this.state.lang} langChange={this.langChangehandle}/>
        <Banner lang={this.state.lang}/>
        {
          /*
          Header
            -- Navigation -- Language /Account / log in / get started / Download
  
          Banner 
          -- Ask user access
          -- Search by location / change location
  
          Parking nearby 
          Tourist spot near by
          Shopping nearby
          Download
          */
        }
  
        <style jsx>{`
          .parkit-header{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 950;
          }
          .parkit-logo{
            display: inline-block;
          }
          .parkit-logo img{
            vertical-align: middle;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            color: #6a6a6a;
          }
  
          * {
            box-sizing: border-box;
          }
  
          h1, h2, h3, h4, h5, h6{
            font-weight: 600;
            color: #092336;
          }
  
          .parkit-container{
            padding: 0 100px;
          }
  
          .parkit-row{
            margin: 0 -16px;
            display: flex;
            flex-wrap: wrap;
          }
  
          .parkit-justify-space-between{
            justify-content: space-between;
          }
          
          .parkit-align-item-center{
            align-items: center;
          }
  
          .parkit-col{
            flex: 1 0 0%;
          }
  
          .parkit-col,
          .parkit-col-fluid{
            padding: 0 16px;
          }
        `}</style>
      </div>
    )
  }
}
export default Home;
