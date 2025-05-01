import './status.css'

interface StatusProps {
    statusMessage: string;
}

export const Status: React.FC<StatusProps> = ({ statusMessage }) => {
    return (
        <>
            <div className="status-bar">
                Status: { statusMessage }
            </div>
        </>
    )
}