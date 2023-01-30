import React from "react";
import {
  ScheduleComponent,
  Resize,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Headers } from "../components";

const Calender = () => {
  console.log("demo present in jan 2021");
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Headers title="Calender" category={"App"} />
      <ScheduleComponent
        height="650px"
        eventSettings={{
          dataSource: scheduleData,
        }}
        // selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Resize, Day, Week, WorkWeek, Month, Agenda, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
