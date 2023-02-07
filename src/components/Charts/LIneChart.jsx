// import React from "react";
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   DateTime,
//   LineSeries,
//   Legend,
//   Tooltip,
// } from "@syncfusion/ej2-react-charts";
// import { useStateContext } from "../../contexts/ContextProvider";
// import {
//   lineCustomSeries,
//   LinePrimaryYAxis,
//   LinePrimaryXAxis,
// } from "../../data/dummy";
// const LineChart = () => {
//   const { currentMode } = useStateContext();
//   return (
//     <ChartComponent
//       id="line_chart"
//       primaryXAxis={LinePrimaryXAxis}
//       primaryYAxis={LinePrimaryYAxis}
//       tooltip={{ enable: true }}
//       chartArea={{ border: { width: 0 } }}
//       background={currentMode === "Dark" ? "#33373E" : "#fff"}
//     >
//       <Inject services={[DateTime, LineSeries, Legend, Tooltip]} />
//       <SeriesCollectionDirective>
//         {lineCustomSeries.map((item, index) => (
//           <SeriesDirective key={index} {...item} />
//         ))}
//       </SeriesCollectionDirective>
//     </ChartComponent>
//   );
// };

// export default LineChart;
