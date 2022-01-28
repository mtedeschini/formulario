import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Tooltip = ({tooltipText, styleTooltip}) => {
    
    return (
        <>
            <div className="tooltip" style= {styleTooltip} >
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span className="tooltiptext">{tooltipText}</span>
            </div>
        </>
    )
}

export default Tooltip;