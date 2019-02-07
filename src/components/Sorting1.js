import React, {Component} from 'react'
import * as PIXI from "pixi.js";
import Line from './Line'
require('../css/sorting1.css');

class BubbleSorting extends Component {

  constructor(props) {
    super(props); 

    this.state = {
        height: 0,
        width: 0
    }
    this.pixi_cnt = null;
    
    // create Sorter
    this.createNewSorter();
    
  }

  componentDidMount() {
    const height = this.divMainContent.clientHeight;
    const width = this.divMainContent.clientWidth;
    this.setState({
        height: height/2, 
        width: width-50
    });
  }

  createNewSorter() {
    this.values = [];
    this.lines = [];
    this.size = this.state.width;
    this.color = 0;
  }

  setNewValues() {
    for(let i = 0; i < this.size; i++) {
        this.values.push(Math.random() * this.state.height);
    }
  }

    updatePixiCnt = (element) => {
        // the element is the DOM object that we will use as container to add pixi stage(canvas)
        this.pixi_cnt = element;
        this.size = this.state.width;
        this.setNewValues();
        this.app = new PIXI.Application({width: this.state.width, height: this.state.height, backgroundColor : 0x1099bb});
        
        if(this.pixi_cnt && this.pixi_cnt.children.length<=0) {
            this.printLines();
            this.j = 0;
            document.getElementById('main-content').appendChild(this.app.view);
            this.app.ticker.add(this.animate);
        }
    };

    animate = delta => {
        if(this.j< this.size) {
            this.singleSort(this.j);
            this.j++;
        }
        else {
            for (var i = this.app.stage.children.length - 1; i >= 0; i--) {	
                this.app.stage.removeChild(this.app.stage.children[i]);
            };
            this.j=0;
            this.createNewSorter();
            this.setNewValues();
            this.printLines();
        }
    }

    singleSort(j) {
        let i = 0;
        for(i = 0; i < this.size - 1 - j; i++) {
            if(this.values[i] > this.values[i+1]){
                let temp = this.values[i];
                this.values[i] = this.values[i+1];
                this.values[i+1] = temp;
            }
            this.lines[i].updatePoints([i,this.state.height, i+1, this.state.height-this.values[i]],0 );
            this.lines[i+1].updatePoints([i+1,this.state.height, i+2, this.state.height-this.values[i+1]],0);
        }
        let c = Math.floor((this.values[i]/500)*0xFFFFFF);
        this.lines[i].updatePoints([i,this.state.height, i+1, this.state.height-this.values[i]],'0x' + c.toString(16));
    }

    printLines(){
        for(let i = 0; i < this.size; i++) {
            this.lines.push(new Line([i,this.state.height, i+1, this.state.height-this.values[i]], 1, 0x000000));
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
            {updatePixi}
        </div>
    );
  }
}

export default BubbleSorting;