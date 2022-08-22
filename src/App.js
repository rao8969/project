import AllRoutes from "./Routes/AllRoutes"; 
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <AllRoutes />
    </ChakraProvider>

  );
}

export default App;
