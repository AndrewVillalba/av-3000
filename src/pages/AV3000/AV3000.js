import './AV3000.scss';

function AV3000() {

    return (
        <>
        <div className='beatpad'>
            <div className='beatpad-top'>
                <div className='display'>
                    <button className='display-add'>+</button>
                    <div className='display-screen'></div>
                </div>
                <div className='bottom'>
                    <div className='bottom-sliders'>
                        <div className='bottom-sliders__left'></div>
                        <div className='bottom-sliders__right'></div>
                    </div>
                    <div className='bottom-buttons'></div>
                    <div className='bottom-pads'>
                        <div className='bottom-pads-row-one'>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                        </div>
                        <div className='bottom-pads-row-two'>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                        </div>
                        <div className='bottom-pads-row-three'>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                        </div>
                        <div className='bottom-pads-row-four'>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button>
                            <button className='bottom-pads-pad'></button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='beatpad-front'></div>
        </div>
        </>
    )
}

export default AV3000;