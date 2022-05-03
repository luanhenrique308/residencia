import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AlimentarBancoForm from "../pages/alimentandoBancoForm/index.";

const RootElement = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="alimentarBancoPerguntas" element={<AlimentarBancoForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootElement