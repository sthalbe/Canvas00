const InputHandler = {
    eventType: {
      keyDown: "keydown",
      keyUp: "keyup"
    },
    keys: {}, //keycode (ex:ArrowLeft, ArrowRight)
    listeners: {},
    xAxisInputQueue: [],
    yAxisInputQueue: [],
    result: {
      lastXAxisInput: "none",
      lastYAxisInput: "none"
    },
    
    init: function() {
      document.addEventListener(this.eventType.keyDown, this.handleKeyDown.bind(this));
      document.addEventListener(this.eventType.keyUp, this.handleKeyUp.bind(this));
      this.listeners[this.eventType.keyDown] = [];
      this.listeners[this.eventType.keyUp] = [];
    },

    isKeyDown: function(key) {
      return this.keys[key] === true;
    },
    
    handleKeyDown: function(event) {
      this.keys[event.key] = true;
      console.log("[handleKeyDown]" + event.key);
      if (event.key === "ArrowLeft") {
        this.queuingAxisInput(this.xAxisInputQueue, "left");
      } else if (event.key === "ArrowRight") {
        this.queuingAxisInput(this.xAxisInputQueue, "right");
      } else if (event.key === "ArrowUp") {
        this.queuingAxisInput(this.yAxisInputQueue, "up");
      } else if (event.key === "ArrowDown") {
        this.queuingAxisInput(this.yAxisInputQueue, "down");
      } 

      this.result.lastXAxisInput = this.getLastAxisInput(this.xAxisInputQueue);
      this.result.lastYAxisInput = this.getLastAxisInput(this.yAxisInputQueue);
      this.dispatchEvent(this.eventType.keyDown, this.result);
    },

    queuingAxisInput: function(inputQueue, input) {
      if (inputQueue.length === 2) {
        this.dequeuingAxisInput(inputQueue, input);
      }

      if(inputQueue.indexOf(input) === -1){
        inputQueue.push(input);
      }
    },

    dequeuingAxisInput: function(inputQueue, input) {
      let index = inputQueue.indexOf(input);
      inputQueue.splice(index, 1);
    },

    getLastAxisInput: function(inputQueue) {
      if (inputQueue.length > 0) {
        return inputQueue[inputQueue.length - 1];
      }

      return "none";
    },
    
    handleKeyUp: function(event) {
      this.keys[event.key] = false;
      console.log("[--handleKeyUp]" + event.key);
      if (event.key === "ArrowLeft") {
        this.dequeuingAxisInput(this.xAxisInputQueue, "left");
      } else if (event.key === "ArrowRight") {
        this.dequeuingAxisInput(this.xAxisInputQueue, "right");
      } else if (event.key === "ArrowUp") {
        this.dequeuingAxisInput(this.yAxisInputQueue, "up");
      } else if (event.key === "ArrowDown") {
        this.dequeuingAxisInput(this.yAxisInputQueue, "down");
      } 

      this.result.lastXAxisInput = this.getLastAxisInput(this.xAxisInputQueue);
      this.result.lastYAxisInput = this.getLastAxisInput(this.yAxisInputQueue);
      this.dispatchEvent(this.eventType.keyUp, this.result);
    },
    
    addListener: function(eventType, callback){
        this.listeners[eventType].push(callback);
    },

    removeListener: function(eventType, callback){
        this.listeners[eventType] = this.listeners[eventType].filter(listener => listener !== callback);
    },
    
    dispatchEvent: function(eventType, result) {
      this.listeners[eventType].forEach(callback => {
        callback(result);
      });
    }
  };
  
  export default InputHandler;