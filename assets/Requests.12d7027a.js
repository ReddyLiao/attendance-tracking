import{d as e,u as a}from"./index.a3134965.js";import{r as l,o as t,c as s,m as n,l as o,E as r,G as u,e as c,b as d,a as i,k as p,H as m,I as v,q as f,t as b,F as y,J as A,j as L}from"./vendor.c1a3f826.js";const q={};q.render=function(e,a,c,d,i,p){const m=l("v-date-picker");return t(),s(m,{mode:"dateTime","minute-increment":30},{default:n((({inputValue:e,inputEvents:a})=>[o("input",r({class:"\n          px-2\n          py-1\n          border\n          rounded\n          focus:outline-none focus:border-blue-300\n        ",value:e},u(a)),null,16,["value"])])),_:1})};const h={components:{DatePick:q},setup(){const a=c(new Date),l=c(new Date),t=d({note:"",timestamp1:i((()=>Date.parse(a.value))),timestamp2:i((()=>Date.parse(l.value))),type:""});return{date1:a,date2:l,sendDayOff:async()=>{"ok"===(await e(t)).data.status?alert("sent successfully"):alert("Please try again")},reqArr:t}}},D=o("h4",null,"Request a Leave",-1),g={class:"row g-3"},k={class:"col-md-4"},w=o("label",{for:"validationDefault01",class:"form-label"},"Leave Type",-1),I=A('<option disabled value="">Select Leave Type</option><option class="dropdown-item" value="Annual">Annual Leave</option><option class="dropdown-item" value="Sick">Sick Leave</option><option class="dropdown-item" value="Casual">Casual Leave</option><option class="dropdown-item" value="Others">Others</option>',5),T={class:"col-md-4"},V=o("label",{for:"validationStartTime",class:"form-label"},null,-1),S=o("span",{class:"input-group-text"}," Start Time",-1),x={class:"col-md-4"},R=o("label",{for:"validationEndTime",class:"form-label"},null,-1),O=o("span",{class:"input-group-text"}," End Time",-1),U={class:"col-md-3 mx-auto"},C=o("label",{class:"form-label"},"Total Days: ",-1),E={class:"col-12"};h.render=function(e,a,n,r,u,c){const d=l("DatePick");return t(),s(y,null,[D,o("form",g,[o("div",k,[w,p(o("select",{class:"form-select","onUpdate:modelValue":a[1]||(a[1]=e=>r.reqArr.type=e),required:""},[I],512),[[m,r.reqArr.type]]),p(o("input",{type:"text",class:"form-control",placeholder:"Reason / Other leave type","onUpdate:modelValue":a[2]||(a[2]=e=>r.reqArr.note=e)},null,512),[[v,r.reqArr.note]])]),o("div",T,[V,S,o(d,{class:"form-control",modelValue:r.date1,"onUpdate:modelValue":a[3]||(a[3]=e=>r.date1=e)},null,8,["modelValue"])]),o("div",x,[R,O,o(d,{class:"form-control",modelValue:r.date2,"onUpdate:modelValue":a[4]||(a[4]=e=>r.date2=e)},null,8,["modelValue"])]),o("div",U,[C,f(b(Math.floor((r.reqArr.timestamp2-r.reqArr.timestamp1)/864e5)),1)]),o("div",E,[o("button",{class:"btn btn-primary",type:"submit",onClick:a[5]||(a[5]=(...e)=>r.sendDayOff&&r.sendDayOff(...e))}," Send Requests ")])])],64)};const j={components:{LeaveRequest:h},setup(){L((()=>{e.dispatch("getUserInfo")}));const e=a();return{userInfoArr:i((()=>e.getters.getUserInfo))}}},P=o("h1",null,"Leave Requests",-1),F={class:"table table-bordered"},G=o("thead",null,[o("tr",null,[o("th",{scope:"col"}),o("th",{scope:"col"},"Annual Leave"),o("th",{scope:"col"},"Casual Leave"),o("th",{scope:"col"},"Sick Leave")])],-1),H=o("td",{scope:"col"},"Total Allowance (Days)",-1),J=o("td",{scope:"col"},"Allowance Remaining (Days)",-1),M=o("div",{class:"p-3"},null,-1);j.render=function(e,a,n,r,u,c){const d=l("LeaveRequest");return t(),s(y,null,[P,o("div",null,[o("table",F,[G,o("tbody",null,[o("tr",null,[H,o("td",null,b(r.userInfoArr.originAnnualLeave),1),o("td",null,b(r.userInfoArr.originCasualLeave),1),o("td",null,b(r.userInfoArr.originSickLeave),1)]),o("tr",null,[J,o("td",null,b(r.userInfoArr.annualLeave),1),o("td",null,b(r.userInfoArr.casualLeave),1),o("td",null,b(r.userInfoArr.sickLeave),1)])])])]),M,o(d)],64)};export default j;
