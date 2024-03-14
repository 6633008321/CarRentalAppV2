'use client'
import { MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";



export default function LocationDateReserve(){
    const [reserveDate, setReserveDate] = useState(null);
    const [location, setLocation] = useState('BKK');

    return (
        <div className="bg-slate-100 rounded-lg flex flex-row space-x-5 space-y-2 w-fit px-10 py-5 justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={reserveDate} onChange={(value)=>{setReserveDate(value)}}/>
            </LocalizationProvider>
            <Select
                variant="standard"
                name="location"
                id="location"
                className="h-[2em] w-[200px] "
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
            >
                <MenuItem value="BKK">Bangkok</MenuItem>
                <MenuItem value="CNX">Chiang Mai</MenuItem>
                <MenuItem value="HKT">Phuket</MenuItem>
            </Select>
        </div>
    );
}