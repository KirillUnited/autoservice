import * as React from "react";
import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";

const DisabledBackground = styled(Box)({
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    background: "#ccc",
    opacity: 0.5,
    zIndex: 10000
});
export default function Loading() {
    return (
        <>
            <CircularProgress
                size={64}
                sx={{
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 20000
                }}
            />
            <DisabledBackground />
        </>
    );
}