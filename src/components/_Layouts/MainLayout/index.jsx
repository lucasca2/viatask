import React from 'react';
import Header from "../../Header";


// Styles
import {
  Content
} from './styles';

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <Content {...props} />
    </>
  )
}
