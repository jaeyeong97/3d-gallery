import './Loading.css';
const Loading = ({ onClick, addStyle }) => {

    return (
        <div className="loading" >
            <div className='loading_wrap' style={addStyle ? { transform: 'translateZ(799px)' } : {}} >
                <div className='front_wall'>
                    <div className='window'>
                        <div className='city'>🏙️</div>
                    </div>
                    <div className="exit_door" onClick={onClick} style={addStyle ? { transform: 'translate(-50%, 0) rotateY(-120deg)' } : {}}>
                        <div className="deco_wrap">
                            <div className="deco"></div>
                            <div className="deco"></div>
                            <div className="deco"></div>
                            <div className="deco"></div>
                        </div>
                        <div className="handle"></div>
                        <div className="thick1"></div>
                        <div className="thick2"></div>
                    </div>
                    <div className='exit_door_back'></div>
                    <div className='exit_door_shadow'></div>
                </div>
                <div className='bottom_wall'>
                    <div className='road_wrap'>
                        <div className='road'></div>
                        <div className='road'></div>
                        <div className='road'></div>
                        <div className='road'></div>
                        <div className='road'></div>
                        <div className='road'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;