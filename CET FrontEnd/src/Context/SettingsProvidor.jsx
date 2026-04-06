import React, { createContext, useState } from 'react';
import axios from "axios"

export const SettingsContext = createContext();

const backEndUrl = "http://localhost:3000"

const SettingsProvider = ({ children }) => {

    return (
        <SettingsContext.Provider value={
            {backEndUrl}
        }>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;