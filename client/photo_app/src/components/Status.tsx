interface StatusProps {
    statusMessage: string;
}

export const Status: React.FC<StatusProps> = ({ statusMessage }) => {
    console.log("rendering status component !");

    return (
        <>
            <div className="status-bar">
                <p>Status: { statusMessage }</p>
            </div>
        </>
    )
}