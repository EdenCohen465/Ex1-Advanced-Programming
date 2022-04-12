function Record(){
    const { recorderState, ...handlers} = useRecorders();
    const {audio} = recorderState;

    return (
        <section className="voice-recorder">

        <div className="recorder-container">
            <RecorderControls recorderState={recorderState} handlers={handlers}/>
            
        </div>
        </section>
    );



}