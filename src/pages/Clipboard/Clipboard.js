import React,{useState,useEffect} from 'react';
import './Clipboard.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Clipboard=()=>{
    const [Clipboardtext, setClipboardtext] = useState("");
    navigator.clipboard.readText()
    .then(text => {
     setClipboardtext(text);
     console.log(text);
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
     /*
      navigator.clipboard.readText()
      .then(text => {
        setClipboardtext(text);
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });*/
    
    return(
      <div>
          
        <Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <Typography>Clipboard</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    <textarea placeholder="Type or edit" value={Clipboardtext} onClick={()=>{
      
    }}></textarea>
  </Typography>
</AccordionDetails>
</Accordion>
        </div>
    )
  }
  
  export default Clipboard;
