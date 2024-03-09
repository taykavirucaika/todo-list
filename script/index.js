let elements = [];

function submit(){
    let a = {
        subject : document.getElementById('subject').value,
        homework : document.getElementById('homework').value,
        completed : false
    };
    elements.push(a);
    render();
}

function render(){
    const elRender = elements.map((a, index) => (
        <div key={index} className="element">
            <p className="sub">{a.subject}:</p>
            <p className="homework">{a.homework}</p>
            <button id="check" style={{backgroundColor: 'red', transition: '0.4s'}} onClick={(event) => {event.target.style.backgroundColor = 'lime'}}></button>
            <button onClick={() => deleteElement(index)} style={{ borderRadius: '0 10px 10px 0', border: 'solid 1px' }}>delete!</button>
        </div>
    ));
    ReactDOM.render(elRender, document.getElementById('root'));
}

function deleteElement(index){
    elements.splice(index, 1);render();
}

//для чего менять формат файла с .js на .jsx 
//если даже при .jsx нельзя использовать jsx технологию,это можно делать только с помощью babel