import{inspect}from"node:util";

import isErrorInstance from"is-error-instance";

import{PREFIX}from"./limit.js";













export const isRepeated=(value,previousEvents)=>{
const previousEvent=getPreviousEvent(value);

if(previousEvents.includes(previousEvent)){
return true
}


previousEvents.push(previousEvent);
return false
};






const getPreviousEvent=(value)=>{
const previousEvent=isErrorInstance(value)?
serializeError(value):
stableSerialize(value);
return previousEvent.slice(0,FINGERPRINT_MAX_LENGTH)
};





const serializeError=({name,message,stack})=>{
const messageA=String(message).includes(PREFIX)?`${message}\n`:"";
const stackA=serializeStack(stack);
return`${name}\n${messageA}${stackA}`
};

const serializeStack=(stack)=>
String(stack).
split("\n").
filter(isStackLine).
slice(0,STACK_TRACE_MAX_LENGTH).
join("\n");

const isStackLine=(line)=>STACK_TRACE_LINE_REGEXP.test(line);

const STACK_TRACE_LINE_REGEXP=/^\s+at /u;
const STACK_TRACE_MAX_LENGTH=10;











const stableSerialize=(value)=>inspect(value,INSPECT_OPTS);

const INSPECT_OPTS={getters:true,sorted:true};

const FINGERPRINT_MAX_LENGTH=1e4;