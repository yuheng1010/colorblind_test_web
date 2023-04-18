import React, { useDebugValue, useEffect, useContext, useState, useSyncExternalStore } from 'react';
// import { BrowserRouter, Switch, Route, Routes, Link, NavLink, Redirect } from "react-router-dom";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TestArea from './components/testArea';
import InsertData from './components/insertData';
// import Button from 'next/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  var hostname = "http://localhost:7000/api/v1";
  const [posX, setposX] = React.useState(0);
  const [posY, setposY] = React.useState(0);
  const [tru, setTru] = React.useState(true);


  return (
    <>
      <TestArea />
    </>
    
  )
}
