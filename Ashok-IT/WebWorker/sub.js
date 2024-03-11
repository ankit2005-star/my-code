this.onmessage = function(e){
    const {data}= e;
    this.postMessage({"result2": data.arg1 - data.arg2})
}