 this.onmessage = function(e){
    const{data} = e;
    this.addThread.postMessage({"addresult":data.arg1 + data.arg2});
 }