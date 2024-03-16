"use client";
import useWindowListener from "@/hooks/useWindowListener";
import React, { useEffect, useRef, useState } from "react";

export default function VlogPlayer({
    vdoSrc,
    isPlaying,
}: {
    vdoSrc: string;
    isPlaying: boolean;
}) {
    const vdoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying]);

    useWindowListener("resize", (e)=>{alert('Window width is: '+(e.target as Window).innerWidth)});

    return (
        <video
            src={vdoSrc}
            className="w-[40%]"
            controls
            loop
            muted
            ref={vdoRef}
        ></video>
    );
}
