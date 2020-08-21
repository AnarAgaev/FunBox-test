import { createContext } from "react";

const {
  Provider: DataServiceProvider,
  Consumer: DataServiceConsumer
} = createContext();

export {
  DataServiceProvider,
  DataServiceConsumer
};