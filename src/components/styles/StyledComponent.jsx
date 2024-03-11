import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
border: 0,
clip: "rect(0 0 0 0)",
height: 1,
margin :-1,
overflow: "hidden",
padding: 0 ,
position: "absolute",
whiteSpace: "nowrap",
width:1,
});



export const Links = styled(Link)`
text-decoration: none;
color:black;
padding:1rem;
&:hover{
    background-color:rgba(0,0,0,0.1) 
}
`;

export const InputBox = styled ("input")`
width:100%;
height:100%;
border:none;
otline:none;
padding: 0 3rem;
background-color:rgba(0,0,0,0.3) ;
`;

 export default Links;

export const SearchField = styled("input")`
padding:0.5rem 1.5rem;
width:20vmax;
border:none;
outline:none;
border-radius:5px;
background-color:#f1f1f1;
font-size:1.1rem;
`