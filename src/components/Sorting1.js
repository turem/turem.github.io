import React, {Component} from 'react'
import * as PIXI from "pixi.js";
import Line from './Line'
require('../css/sorting1.css');

class BubbleSorting extends Component {

  constructor(props) {
    super(props); 

    this.state = {
        height: 0,
        width: 0,
        size: 0
    }
    this.pixi_cnt = null;
    
    this.x = 0;
    
  }

  componentDidMount() {
    const height = this.divMainContent.clientHeight;
    const width = this.divMainContent.clientWidth/2;
    this.setState({
        height: height/2, 
        width: width-50,
        size: Math.floor(width/2)
    });
    // create Sorter
    this.createNewSorter();
  }

  createNewSorter() {
    this.j = 0;
    this.values = [];
    this.lines = [];
    this.color = 0;
  }

  setNewValues() {
    for(let i = 0; i < this.state.size; i++) {
        this.values.push(Math.random() * this.state.height);
    }
  }

    updatePixiCnt = (element) => {
        // the element is the DOM object that we will use as container to add pixi stage(canvas)
        this.pixi_cnt = element;
        this.app = new PIXI.Application({width: this.state.width, height: this.state.height, backgroundColor : 0x000000, transparent: true});
        if(this.pixi_cnt && this.pixi_cnt.children.length<=0) {
            this.j = 0;
            document.getElementById('pixiCanvas').appendChild(this.app.view);
            this.createNewSorter();
            this.setNewValues();
            this.printLines();
            this.app.ticker.update();
            this.app.ticker.add(this.animate);
            this.app.ticker.stop();
        }
    };

    clearStage() {
        for (var i = this.app.stage.children.length - 1; i >= 0; i--) {	
            this.app.stage.removeChild(this.app.stage.children[i]);
        };
    }

    startNewSorting() {
        this.clearStage();
        this.createNewSorter();
        this.setNewValues();
        this.printLines();
        this.app.ticker.update();
    }

    start = () => {
        console.log(this.state.size);
        if(this.j >= this.state.size) {
            this.startNewSorting();
        }
        this.app.ticker.start();
    }

    stop = () => {
        this.app.ticker.stop();
    }

    animate = delta => {
        if(this.j< this.state.size) {
            this.singleSort(this.j);
            this.j++;
        }
        else {
            this.app.ticker.stop();
        }
    }

    singleSort(j) {
        let i = 0;
        for(i = 0; i < this.state.size - 1 - j; i++) {
            if(this.values[i] > this.values[i+1]){
                let temp = this.values[i];
                this.values[i] = this.values[i+1];
                this.values[i+1] = temp;
            }
            let c = Math.floor((this.values[i]/256)*0xFFFFFF);
            this.lines[i].updatePoints([i*this.state.width/this.state.size,this.state.height, i*this.state.width/this.state.size, this.state.height-this.values[i]],'0x' + c.toString(16) );
            this.lines[i+1].updatePoints([(i+1)*this.state.width/this.state.size,this.state.height, (i+1)*this.state.width/this.state.size, this.state.height-this.values[i+1]],'0x' + c.toString(16));
        }
        let c = Math.floor((this.values[i]/256)*0xFFFFFF);
        this.lines[i].updatePoints([i*this.state.width/this.state.size,this.state.height, i*this.state.width/this.state.size, this.state.height-this.values[i]],'0x' + c.toString(16));
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        });

        // this.startNewSorting();
    }
    

    handleRangeChange = (e) => {
        
        this.setState({
            size: e.target.value
        });

        document.getElementById('field').setAttribute('value',this.state.size);
        
        
        this.startNewSorting();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.startNewSorting();
    }
    

    printLines(){
        for(let i = 0; i < this.state.size; i++) {
            let c = Math.floor((this.values[i]/256)*0xFFFFFF);
            this.lines.push(new Line([i*this.state.width/this.state.size,this.state.height, i*this.state.width/this.state.size, this.state.height-this.values[i]], this.state.width/this.state.size, '0x' + c.toString(16)));
            this.app.stage.addChild(this.lines[i]);
        }
    }
  
render() {
    const updatePixi = this.state.height ? (
        <div id='pixiCanvas' ref={this.updatePixiCnt} />
    ) : (
        <p>Loading ...</p>
    )

    return (
        <div id='main-content' ref={ (divMainContent) => this.divMainContent = divMainContent} >
            <h1>Bubble sorting with Pixi JS</h1>
            <section>
                {updatePixi}
            
                <article>
                    <p> Here will be config</p>
                    <button onClick={this.start} className="waves-effect waves-light btn-large">Start</button>
                    <button onClick={this.stop} className="waves-effect waves-light btn-large">Stop</button>
                    <button onClick={this.stop} className="waves-effect waves-light btn-large">Reset</button>
                    <form onSubmit={this.handleSubmit}>
                        <label>Set table's size</label>
                        <input  id="field" type="text" onInput={this.handleChange} />
                        <p className="range-field">
                            <input type="range" id="test5" min="0" max="100"  onChange={this.handleRangeChange.bind(this)} />
                        </p>
                    </form>
                </article>
            </section>
        </div>
    );
  }
}

export default BubbleSorting;