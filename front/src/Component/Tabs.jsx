import { Tab } from '@mui/material'
import React from 'react'

const Tabs = (props) => {
  return (
    <>
    <Tab value={props.value} label={props.label}/>
    </>
  )
}

export default Tabs
