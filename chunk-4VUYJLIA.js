import{a as h}from"./chunk-NWYHCUBP.js";import{a as p,b as f}from"./chunk-SDBT725J.js";import{a as O}from"./chunk-OB7JJPSF.js";import{E as M,J as m,c as b,e as d,h as u,i as C,m as a,n as P,p as r,s as o,t as c,u as s,w as l,y as i}from"./chunk-D7EYJVWN.js";var y=(()=>{class _{constructor(t,n){this.funcs=t,this.bluetoothService=n,this.lastPlayed="",this.areButtonsDisabled=!1}connect(){return b(this,null,function*(){try{yield this.bluetoothService.connectToESP32(),alert("Connected to ESP32")}catch{alert("Failed to connect to ESP32")}})}connectToESP32(){return b(this,null,function*(){let t=yield navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]}),n;try{t=yield navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]}),n=yield(yield(yield t.gatt.connect()).getPrimaryService("4fafc201-1fb5-459e-8fcc-c5c9c331914b")).getCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8"),alert("Bluetooth connected")}catch(e){console.error("Error connecting to Bluetooth device:",e)}})}checkConnectionStatus(){this.bluetoothService.isDeviceConnected()?console.log("The device is connected."):console.log("The device is not connected.")}play_C4(){this.funcs.C4_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("C4"),n=document.getElementById("gomb_C4");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--C)",n.style.backgroundColor="var(--C)",this.areButtonsDisabled=!1},500))}play_D(){this.funcs.D_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("D"),n=document.getElementById("gomb_D");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--D)",n.style.backgroundColor="var(--D)",this.areButtonsDisabled=!1},500))}play_E(){this.funcs.E_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("E"),n=document.getElementById("gomb_E");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--E)",n.style.backgroundColor="var(--E)",this.areButtonsDisabled=!1},500))}play_F(){this.funcs.F_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("F"),n=document.getElementById("gomb_F");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--F)",n.style.backgroundColor="var(--F)",this.areButtonsDisabled=!1},500))}play_G(){this.funcs.G_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("G"),n=document.getElementById("gomb_G");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--G)",n.style.backgroundColor="var(--G)",this.areButtonsDisabled=!1},500))}play_A(){this.funcs.A_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("A"),n=document.getElementById("gomb_A");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--A)",n.style.backgroundColor="var(--A)",this.areButtonsDisabled=!1},500))}play_B(){this.funcs.B_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("B"),n=document.getElementById("gomb_B");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--B)",n.style.backgroundColor="var(--B)",this.areButtonsDisabled=!1},500))}play_C5(){this.funcs.C5_hang(),this.areButtonsDisabled=!0;let t=document.getElementById("C5"),n=document.getElementById("gomb_C5");t!=null&&n!=null&&(t.style.backgroundColor="#262626",n.style.backgroundColor="#262626",setTimeout(()=>{t.style.backgroundColor="var(--C)",n.style.backgroundColor="var(--C)",this.areButtonsDisabled=!1},500))}ngOnInit(){document.addEventListener("keydown",t=>{switch(t.key){case"A":case"a":this.play_C4();break;case"S":case"s":this.play_D;break;case"D":case"d":this.play_E;break;case"F":case"f":this.play_F;break;case"G":case"g":this.play_G;break;case"H":case"h":this.play_A;break;case"J":case"j":this.play_B;break;case"K":case"k":this.play_C5;break;default:break}})}static{this.\u0275fac=function(n){return new(n||_)(P(h),P(p))}}static{this.\u0275cmp=u({type:_,selectors:[["app-taviranyito"]],decls:71,vars:16,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, orientation=landscape"],["http-equiv","content-security-policy","content","upgrade-insecure-requests"],[1,"content"],[1,"xilofon_container"],["id","felso_palca",1,"palca"],["id","also_palca",1,"palca"],[1,"xilofon"],["id","C4",1,"hangjegy",3,"click","disabled"],["id","D",1,"hangjegy",3,"click","disabled"],["id","E",1,"hangjegy",3,"click","disabled"],["id","F",1,"hangjegy",3,"click","disabled"],["id","G",1,"hangjegy",3,"click","disabled"],["id","A",1,"hangjegy",3,"click","disabled"],["id","B",1,"hangjegy",3,"click","disabled"],["id","C5",1,"hangjegy",3,"click","disabled"],[1,"gomb_container"],["id","gomb_C4",1,"gomb",3,"click","disabled"],["id","gomb_D",1,"gomb",3,"click","disabled"],["id","gomb_E",1,"gomb",3,"click","disabled"],["id","gomb_F",1,"gomb",3,"click","disabled"],["id","gomb_G",1,"gomb",3,"click","disabled"],["id","gomb_A",1,"gomb",3,"click","disabled"],["id","gomb_B",1,"gomb",3,"click","disabled"],["id","gomb_C5",1,"gomb",3,"click","disabled"]],template:function(n,e){n&1&&(o(0,"html",0)(1,"head"),s(2,"meta",1)(3,"meta",2),o(4,"title"),i(5,"T\xE1vir\xE1nyt\xF3"),c(),s(6,"meta",3),c(),o(7,"body"),s(8,"app-header"),o(9,"div",4)(10,"div",5),s(11,"div",6)(12,"div",7),o(13,"div",8)(14,"button",9),l("click",function(){return e.play_C4()}),c(),o(15,"button",10),l("click",function(){return e.play_D()}),c(),o(16,"button",11),l("click",function(){return e.play_E()}),c(),o(17,"button",12),l("click",function(){return e.play_F()}),c(),o(18,"button",13),l("click",function(){return e.play_G()}),c(),o(19,"button",14),l("click",function(){return e.play_A()}),c(),o(20,"button",15),l("click",function(){return e.play_B()}),c(),o(21,"button",16),l("click",function(){return e.play_C5()}),c()()(),o(22,"div",17)(23,"button",18),l("click",function(){return e.play_C4()}),o(24,"p"),i(25,"D\xF3(C) "),s(26,"br")(27,"br"),i(28,"A"),c()(),o(29,"button",19),l("click",function(){return e.play_D()}),o(30,"p"),i(31,"R\xE9(D) "),s(32,"br")(33,"br"),i(34,"S"),c()(),o(35,"button",20),l("click",function(){return e.play_E()}),o(36,"p"),i(37,"Mi(E) "),s(38,"br")(39,"br"),i(40,"D"),c()(),o(41,"button",21),l("click",function(){return e.play_F()}),o(42,"p"),i(43,"F\xE1(F) "),s(44,"br")(45,"br"),i(46,"F"),c()(),o(47,"button",22),l("click",function(){return e.play_G()}),o(48,"p"),i(49,"Sz\xF3(G) "),s(50,"br")(51,"br"),i(52,"G"),c()(),o(53,"button",23),l("click",function(){return e.play_A()}),o(54,"p"),i(55,"L\xE1(A) "),s(56,"br")(57,"br"),i(58,"H"),c()(),o(59,"button",24),l("click",function(){return e.play_B()}),o(60,"p"),i(61,"Ti(B) "),s(62,"br")(63,"br"),i(64,"J"),c()(),o(65,"button",25),l("click",function(){return e.play_C5()}),o(66,"p"),i(67,"D\xF3(C) "),s(68,"br")(69,"br"),i(70,"K"),c()()()()()()),n&2&&(a(14),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(),r("disabled",e.areButtonsDisabled),a(2),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled),a(6),r("disabled",e.areButtonsDisabled))},dependencies:[f],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0}body[_ngcontent-%COMP%]{position:relative;background-color:#000;width:100%;height:100vh}label[_ngcontent-%COMP%]{cursor:pointer}.content[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;align-items:center;flex-flow:column;background-color:#000;z-index:-1}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;width:100%;max-width:1200px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .palca[_ngcontent-%COMP%]{position:absolute;background-color:#fff;width:70%;height:30px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   #felso_palca[_ngcontent-%COMP%]{transform:rotate(13deg);top:42%}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   #also_palca[_ngcontent-%COMP%]{transform:rotate(2deg);bottom:5%}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end;position:relative}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   .hangjegy[_ngcontent-%COMP%]{margin:5px;border:none;border-radius:5px;background-color:#ccc;color:#fff;font-size:1.2em;cursor:pointer;transition:background-color .3s ease;display:flex;justify-content:center;align-items:center;position:relative}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   .hangjegy[_ngcontent-%COMP%]:before, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   .hangjegy[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;transform:translate(-50%);width:10px;height:10px;background-color:#fff;border-radius:50%;z-index:1}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   .hangjegy[_ngcontent-%COMP%]:before{top:25%}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   .hangjegy[_ngcontent-%COMP%]:after{bottom:10%}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #C4[_ngcontent-%COMP%]{background-color:var(--C);width:80px;height:400px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #D[_ngcontent-%COMP%]{background-color:var(--D);width:80px;height:360px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #E[_ngcontent-%COMP%]{background-color:var(--E);width:80px;height:335px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #F[_ngcontent-%COMP%]{background-color:var(--F);width:80px;height:305px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #G[_ngcontent-%COMP%]{background-color:var(--G);width:80px;height:280px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #A[_ngcontent-%COMP%]{background-color:var(--A);width:80px;height:250px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #B[_ngcontent-%COMP%]{background-color:var(--B);width:80px;height:230px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #C5[_ngcontent-%COMP%]{background-color:var(--C);width:80px;height:200px}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #C4[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #D[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #E[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #F[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #G[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #A[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #B[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #C5[_ngcontent-%COMP%]:hover{background-color:#bbb}.content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #C4[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #D[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #E[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #F[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #G[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #A[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #B[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .xilofon[_ngcontent-%COMP%]   #C5[_ngcontent-%COMP%]:active{background-color:#262626}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]{margin-top:10vh}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   .gomb[_ngcontent-%COMP%]{width:100px;height:100px;border:none;border-radius:5px;background-color:#ccc;font-size:1.2em;cursor:pointer;transition:background-color .3s ease}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_C4[_ngcontent-%COMP%]{background-color:var(--C)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_D[_ngcontent-%COMP%]{background-color:var(--D)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_E[_ngcontent-%COMP%]{background-color:var(--E)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_F[_ngcontent-%COMP%]{background-color:var(--F)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_G[_ngcontent-%COMP%]{background-color:var(--G)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_A[_ngcontent-%COMP%]{background-color:var(--A)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_B[_ngcontent-%COMP%]{background-color:var(--B)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_C5[_ngcontent-%COMP%]{background-color:var(--C)}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_C4[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_D[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_E[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_F[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_G[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_A[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_B[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_C5[_ngcontent-%COMP%]:hover{background-color:#bbb}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_C4[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_D[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_E[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_F[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_G[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_A[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_B[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #gomb_C5[_ngcontent-%COMP%]:active{background-color:#262626}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #C4[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #D[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #E[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #F[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #G[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #A[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #B[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #C5[_ngcontent-%COMP%]:hover{background-color:#bbb}.content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #C4[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #D[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #E[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #F[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #G[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #A[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #B[_ngcontent-%COMP%]:active, .content[_ngcontent-%COMP%]   .gomb_container[_ngcontent-%COMP%]   #C5[_ngcontent-%COMP%]:active{background-color:#262626}.width-display[_ngcontent-%COMP%]{font-size:24px;padding:20px;border:2px solid black;border-radius:10px;background-color:#d3d3d3}@media screen and (orientation: portrait){body[_ngcontent-%COMP%]{transform:rotate(90deg);width:250vw;height:250vw;position:absolute}body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;top:0}body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .palca[_ngcontent-%COMP%]{width:900px}}@media (max-width: 1000px) and (orientation: landscape){body[_ngcontent-%COMP%]{width:900px;height:250vh}body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;top:100svh}body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .xilofon_container[_ngcontent-%COMP%]   .palca[_ngcontent-%COMP%]{width:900px}}']})}}return _})();var x=[{path:"",component:y}],k=(()=>{class _{static{this.\u0275fac=function(n){return new(n||_)}}static{this.\u0275mod=C({type:_})}static{this.\u0275inj=d({imports:[m.forChild(x),m]})}}return _})();var L=(()=>{class _{static{this.\u0275fac=function(n){return new(n||_)}}static{this.\u0275mod=C({type:_})}static{this.\u0275inj=d({imports:[M,O,k]})}}return _})();export{L as TaviranyitoPageModule};
