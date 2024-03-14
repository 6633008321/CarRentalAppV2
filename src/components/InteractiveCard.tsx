"use client";
import React from "react";

export default function InteractiveCard({
    children, contentName
}: {
    children: React.ReactNode, contentName:string
}) {
    function onCardSelected() {
        alert("heyy " + contentName);
    }

    function onMouseAction(event: React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
        }else{
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");
        }
    }
    return (
        <div
            className="w-full h-[300px] rounded-lg shadow-lg"
            onMouseOver={(e)=>onMouseAction(e)}
            onMouseOut ={(e)=>onMouseAction(e)}
        >
            {children}
        </div>
    );
}
