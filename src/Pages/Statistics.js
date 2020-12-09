import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

// Load the full build.
var _ = require("lodash");

export default function Statistics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  };


  var result = _(data)
    .groupBy((x) => x.activity)
    .map((value, key) => ({
      activity: key,
      duration: _.sumBy(value, "duration"),
    }))
    .value();

  console.log(result);

  return (
     <div>
      <BarChart
        width={1000}
        height={500}
       data= {result}
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 10,
        }}
      >
        <XAxis dataKey="activity" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="duration" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}