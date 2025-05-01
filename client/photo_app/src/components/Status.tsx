// import React from 'react';
import { APIResult } from '../types';

export function Status({ code, message }: APIResult) {

    return (
        <>
            <div className="status-bar">
                <p>Status: {message} ({code})</p>
            </div>
        </>
    )
}