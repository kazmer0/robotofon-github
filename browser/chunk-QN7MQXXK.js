import{a as b}from"./chunk-2RSDRAZ4.js";import{A as f,c as n,h as r,n as i,r as a,s,v as l,x as u}from"./chunk-X2CIDNKF.js";var m=(()=>{class c{constructor(t){this.bluetoothService=t}connect(){return n(this,null,function*(){try{yield this.bluetoothService.connectToESP32(),alert("Connected to ESP32")}catch{}})}connectToESP32(){return n(this,null,function*(){let t=yield navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]}),e;try{t=yield navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]}),e=yield(yield(yield t.gatt.connect()).getPrimaryService("4fafc201-1fb5-459e-8fcc-c5c9c331914b")).getCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8")}catch{}})}static{this.\u0275fac=function(e){return new(e||c)(i(b))}}static{this.\u0275cmp=r({type:c,selectors:[["app-connect-button"]],standalone:!0,features:[f],decls:2,vars:0,consts:[[3,"click"]],template:function(e,o){e&1&&(a(0,"button",0),l("click",function(){return o.connect()}),u(1,"Connect to ESP32"),s())},styles:["button[_ngcontent-%COMP%]{background-color:#6f6f6f;border:0;height:25px;width:130px;border-radius:10px;color:#fff}button[_ngcontent-%COMP%]:hover{background-color:#7fffd4}button[_ngcontent-%COMP%]:active{background-color:#add8e6}"]})}}return c})();export{m as a};
