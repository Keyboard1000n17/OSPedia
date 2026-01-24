import process from"node:process";













export const exitProcess=(exit,event)=>{
if(!shouldExit(exit,event)){
return
}

process.exitCode=EXIT_CODE;
setTimeout(forceExitProcess,EXIT_TIMEOUT).unref()
};

const shouldExit=(exit,event)=>{
if(!isExitEvent(event)){
return false
}

if(exit!==undefined){
return exit
}

return process.listeners(event).length<=1
};

const isExitEvent=(event)=>
event==="uncaughtException"||event==="unhandledRejection";


const forceExitProcess=()=>{

process.exit(EXIT_CODE)
};

export const EXIT_TIMEOUT=3000;
export const EXIT_CODE=1;