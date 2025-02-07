'use client';

import { Button, Drawer, Typography } from "@mui/material";
import Image from "next/image";
import dynamic from 'next/dynamic';
import MainMenu from "@/components/MainMenu";
import '../app/globals.css'

const SideBar = dynamic(() => import('../components/SideBar'), { ssr: false });


export default function Home() {
  return (
    // Contains Entire Page (Has background)
    <div id="master-container" style = {{backgroundColor: '#F2F2F2', height: '100vh' }}>
      
      <SideBar/>
      <MainMenu/>
      
    </div>
  );
}
