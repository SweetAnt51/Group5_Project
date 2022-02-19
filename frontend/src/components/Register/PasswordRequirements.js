import { useState } from "react";

export default function PasswordRequirements(props) {
  
    
    return (
        <div style={{   margin: 'auto',
                        display: 'flex',
                        width: '800px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        }}>
            
            <p>Password Must Contain Atleast:</p>
            
            <label>1 Special Charecter { props.req.specialChar ? "✅ " : "❌" }</label>
            <label>1 Uppercase Letter { props.req.upperCase ? "✅ " : "❌" }</label>
            <label>1 Lowercase Letter { props.req.lowerCase ? "✅ " : "❌" }</label>
            <label>8 Charecters { props.req.length ? "✅ " : "❌" }</label>
            <label>1 Number { props.req.number ? "✅ " : "❌" }</label>
            <label>Match { props.req.match ? "✅ " : "❌" }</label>

        </div>
    )
}