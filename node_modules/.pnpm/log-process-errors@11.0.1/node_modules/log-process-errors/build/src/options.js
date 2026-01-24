import isPlainObj from"is-plain-obj";


export const validateOptions=(opts)=>{
getOptions(opts)
};


export const getOptions=(opts={})=>{
if(!isPlainObj(opts)){
throw new TypeError(`Options must be a plain object: ${opts}`)
}

const{exit,onError=defaultOnError,...unknownOpts}=opts;

validateExit(exit);

if(typeof onError!=="function"){
throw new TypeError(`Option "onError" must be a function: ${onError}`)
}

validateUnknownOpts(unknownOpts);

return{exit,onError}
};

const validateExit=(exit)=>{
if(exit!==undefined&&typeof exit!=="boolean"){
throw new TypeError(`Option "exit" must be a boolean: ${exit}`)
}
};



const defaultOnError=(error)=>{

console.error(error)
};

const validateUnknownOpts=(unknownOpts)=>{
const[unknownOpt]=Object.keys(unknownOpts);

if(unknownOpt!==undefined){
throw new TypeError(`Option "${unknownOpt}" is unknown.`)
}
};