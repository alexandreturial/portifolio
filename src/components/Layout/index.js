import React from "react"
import {TransitionPortal} from 'gatsby-plugin-transition-link'
import Aside from "../Aside";
import MenuBar from "../MenuBar";

import GlobalStyles from '../../styles/global';

import * as S from './styles'

const Layout = ({ children }) => {
  return (
    <S.ContainerLayout>
      <GlobalStyles/>
      <TransitionPortal level="top">
        <Aside/>
      </TransitionPortal>
      
      <S.MainLayout>{children}</S.MainLayout>
      <TransitionPortal level="top">
        <MenuBar/>
      </TransitionPortal>
    </S.ContainerLayout>
  )
}


export default Layout
