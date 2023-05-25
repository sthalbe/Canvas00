const InputHandler = {
    eventType: {
        keyDown: "keydown",
        keyUp: "keyup"
    },
    keys: {},
    listeners: {},
    
    init: function() {
      document.addEventListener("keydown", this.handleKeyDown.bind(this));
      document.addEventListener("keyup", this.handleKeyUp.bind(this));
      this.listeners[this.eventType.keyDown] = [];
      this.listeners[this.eventType.keyUp] = [];
    },
    
    handleKeyDown: function(event) {
      this.keys[event.key] = true;
      this.emitEvent("keydown", event.key);
    },
    
    handleKeyUp: function(event) {
      this.keys[event.key] = false;
      this.emitEvent("keyup", event.key);
    },
    
    isKeyDown: function(key) {
      return this.keys[key] === true;
    },
    
    addListner: function(eventType, callback){
        this.listeners[eventType].push(callback);
    },

    removeListner: function(eventType, callback){
        this.listeners[eventType] = this.listeners[eventType].filter(listener => listener !== callback);
    },
    
    dispatchEvent: function(eventType, key) {
      this.listeners[eventType].forEach(callback => {
        callback(key);
      });
    }
  };
  
  // Export the InputHandler object
  export default InputHandler;