import styled from "styled-components"; 
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { FormInput, Label } from "../inputs";

export default function Accordion(props) { 
  return (  
    <Container>
 <AccordionSelector>
        <span>{props.Aname}</span>
        <BsChevronDown  />
    </AccordionSelector>
   <FormContainer > 
        <Label >{props.lbl1}</Label> 
        <FormInput   type="number" width={"5em"} height={"1.2em"} min={"0"}  value={props.value} onChange={e=> props.vFunk(e.target.value)}/> 
        <Label  >{props.lbl2}</Label> 
        <select onChange={e=>(props.uFunk(e.target.value))} value={props.u}> 
            {
                props.opts.map((unit)=>( 
                    <option value={unit} key={unit}>
                        {unit}
                    </option>
                ))
            }  
            </select> 
   </FormContainer> 
    </Container>
   
  )
}
const Container = styled.div`
    .hidden{
        display:none;
        transition: 0.3s;
    }
    @media (max-width: 500px) {
    font-size: 90%;  
  }
`
const FormContainer = styled.div`
display:grid; 
grid-template-columns: 1fr 0.2fr; 
gap:.8em;
min-width:15em;
color:rgba(24,24,24,0.5);
background-color: white; 
border-radius: 0 0 .8em .8em ;
padding: .6em 2.5em .6em .3em; 
 color: rgba(24, 24, 24, 0.6);
select{
  outline: none;
  border: 2px solid var(--secondary-color);
  border-radius: 0.3em;
  padding: 0em 0.2em;
  width: max-content; 
  color: var(--text-grey);
  flex-grow: 0;
   &:focus {
      outline: none;
      color: var(--text-grey);
    }
  option { 
      text-align: center;
      font-size: 0.9em;
    }
}  
@media (max-width: 420px) { 
    gap: .2em;
    grid-template-columns: 1fr;
  }
@media (max-width: 330px) { 
    font-size: 100%;
    gap: .2em;
    grid-template-columns: 1fr;
  }
 
@media (max-width: 200px) {
    font-size: 80%;  
    gap: .1em;
  }
`
const AccordionSelector = styled.div`
    display:flex;
    justify-content: space-between;
    justify-items : center; 
    color:var(--text-grey);
    background: linear-gradient(10deg,white,var(--primary-color));
    border-radius: 0.5em 0.5em 0 0 ;
    padding: 0.1em 0.5em 0.2em 0.8em;
    gap:1.5em;
    height:1.2em; 
    width:6em;
    svg{
        color: var(--primary-dark); 
        margin-top:2px;    
    }   

`
const FormRow = styled.div`
 
 ` 