import process from"node:process";








export const removeWarningListener=()=>{
if(warningListener!==undefined){
process.off("warning",warningListener)
}
};




export const restoreWarningListener=()=>{
if(warningListener!==undefined&&getWarningListeners().length===0){
process.on("warning",warningListener)
}
};










const getWarningListeners=()=>process.listeners("warning");

const[warningListener]=getWarningListeners();