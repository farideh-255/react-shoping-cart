import React from 'react'
import Chart from '../../../components/charts/lineChart/Chart'
import FeaturedInfo from '../../../components/featuredInfo/featuredInfo'
import './home.scss'
import {userData} from "../../../dummyData"
import WidgetLg from '../../../components/widgetLg/WidgetLg'
import WidgetSm from '../../../components/widgetSml/WidgetSm'
import SideBar from '../../../components/sidebar/SideBar';
import Topbar from '../../../components/topbar/Topbar';

export default function Home() {
  return (

    <div className="App-container">
        Astro Admin
      <Topbar />
      <div className="adminContainer">
        <SideBar />
      
       
          <div className='home-container'>
            <FeaturedInfo />
            <Chart  data={userData} title="User Analytics" grid dataKey1="uv" dataKey2="pv" />
            <div className="homewidgets">
              <WidgetSm />
              <WidgetLg />
            </div>
          </div>
      
      </div>
    </div>

  )
}
