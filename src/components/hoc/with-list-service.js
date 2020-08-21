import React from "react";
import { DataServiceConsumer } from "../data-service-context";

const withListService = () => (Wrapped) => {

  return (props) => {
    return (
      <DataServiceConsumer>
        {
          (dataService) => {
            return (
              <Wrapped { ...props } dataService={ dataService } />
            );
          }
        }
      </DataServiceConsumer>
    );
  }
};

export default withListService;