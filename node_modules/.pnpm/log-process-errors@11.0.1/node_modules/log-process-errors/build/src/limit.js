import{emitWarning}from"node:process";











export const isLimited=(value,event,previousEvents)=>{
if(previousEvents.length<MAX_EVENTS||isLimitedWarning(event,value)){
return false
}

emitWarning(`${PREFIX} "${event}" until process is restarted.`);
return true
};


const isLimitedWarning=(event,value)=>
event==="warning"&&value.message.startsWith(PREFIX);

export const MAX_EVENTS=100;
export const PREFIX=`Cannot log more than ${MAX_EVENTS}`;