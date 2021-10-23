import * as React from "react";
import "./Dashboard.css";
import {NavLink} from "react-router-dom";
import Clipboard from "../Clipboard/Clipboard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/material";

const Dashboard=()=>{
  return(
   <div className ="dash_container">
       <div className ="left_container">
            <h1 className ="left_heading">Notification Sync</h1>
            <div className ="left_options">
                <NavLink to="/dash_board" className ="navlinks">Home</NavLink>
                <NavLink to="/settings"  className ="navlinks">Settings</NavLink>
            </div>
       </div>
       <div className ="middle_container">
         <div className ="mid_header">
             <div className ="header_title">Notification</div>
             <div className="header_title">SMS</div>
         </div>
       </div>
       <div className ="right_container">
       <div>
          <Clipboard/>
          </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Files</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button>Send File to device</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>

       </div>
   </div>
  )
}

export default Dashboard;