import React, { useState } from "react";
import { LayoutGroup,motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

function Card(props) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <LayoutGroup>
      {expanded ?  <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />: <CompactCard param={props} setExpanded={()=>setExpanded(true)} />}
    </LayoutGroup>
  );
}

//Comapact card
function CompactCard({ param,setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>last 24hrs</span>
      </div>
    </motion.div>
  );
}


// //Expanded card
function ExpandedCard({param,setExpanded}){
    const data={
        options:{
            chart:{
                type:'pie',
                height:'auto',
            },
            dropShadow:{
                enabled: false,
                enabledOnseries: undefined,
                top: 0,left:0,blur:3,color:'#000',opacity:0.35
            },
            fill:{
                colors:["#fff"],
                type:'gradient'
            },
            dataLabels:{
                enabled:false
            
            },
            stroke:{
                curve:'smooth',
                colors:["white"],
            },
            tooltip:{
                x:{
                    format: "dd/MM/yy",

                },

            },
            grid:{
                show: true
            },
            xaxis: {
              type: "datetime",
              categories: [
                "2018-09-11",
                "2018-09-12",
                "2018-09-13",
                "2018-09-14",
                "2018-09-15",
                "2018-09-16",
                "2018-09-17",
              ],
            },
        
        }
    }
    return(
        <motion.div className="ExpandedCard" style={{background:param.color.backGround,boxShadow:param.color.boxShadow,position: 'absolute'}}  >
        <div style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
        <UilTimes onClick={setExpanded}
        
        />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
        <Chart series={param.series} type='area' options={data.options} /> 
        </div>
        <span>last 24 hrs</span>

        
        </motion.div>
    )
}

export default Card;
