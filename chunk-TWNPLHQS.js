import{a as S}from"./chunk-7NJ4IP35.js";import{b as I}from"./chunk-3XUPBBRC.js";import{a as j}from"./chunk-ORXHLDD3.js";import{B as D,C as A,D as T,I as b,d as m,e as w,g as k,h as E,i as C,j as u,k as h,m as l,n as O,o as x,p as _,q as z,r as o,s as a,t as s,u as P,v as f,w as g,x as p,y,z as F}from"./chunk-X2CIDNKF.js";var B=(()=>{class t{constructor(n){this.dataSender=n,this.isPlaying=!1,this.currentTimeout=null,this.currentIndex=0,this.ciao_bella=[new e("E",500),new e("A",500),new e("B",500),new e("C5",500),new e("A",2e3),new e("E",500),new e("A",500),new e("B",500),new e("C5",500),new e("A",2e3),new e("E",500),new e("A",500),new e("B",500),new e("C5",1e3),new e("B",500),new e("A",500),new e("C5",1e3),new e("B",500),new e("A",500),new e("E",1e3),new e("E",1e3),new e("E",1e3),new e("D",500),new e("E",500),new e("F",500),new e("F",500),new e("F",2e3),new e("E",500),new e("D",500),new e("F",500),new e("E",500),new e("D",2e3),new e("C4",500),new e("B",1e3),new e("E",1e3),new e("B",1e3),new e("C5",1e3),new e("A",2e3),new e("E",500),new e("A",500),new e("B",500),new e("C5",500),new e("A",2e3),new e("E",500),new e("A",500),new e("B",500),new e("C5",500),new e("A",2e3),new e("E",500),new e("A",500),new e("B",500),new e("C5",1e3),new e("B",500),new e("A",500),new e("C5",1e3),new e("B",500),new e("A",500),new e("E",1e3),new e("E",1e3),new e("E",1e3),new e("D",500),new e("E",500),new e("F",500),new e("F",2e3),new e("F",500),new e("E",500),new e("D",500),new e("F",500),new e("E",2e3),new e("D",500),new e("C4",500),new e("B",1e3),new e("E",1e3),new e("B",1e3),new e("C5",1e3),new e("A",2e3)],this.can_can=[new e("C4",1),new e("C4",1),new e("D",1),new e("F",1),new e("E",1),new e("D",1),new e("G",1),new e("G",1),new e("G",1),new e("A",1),new e("E",1),new e("F",1),new e("D",1),new e("D",1),new e("D",1),new e("F",1),new e("E",1),new e("D",1),new e("C4",1),new e("C5",1),new e("B",1),new e("A",1),new e("G",1),new e("F",1),new e("E",1),new e("D",1),new e("C4",1),new e("C4",1),new e("D",1),new e("F",1),new e("E",1),new e("D",1),new e("G",1),new e("G",1),new e("G",1),new e("A",1),new e("E",1),new e("F",1),new e("D",1),new e("D",1),new e("D",1),new e("F",1),new e("E",1),new e("D",1),new e("C4",1),new e("G",1),new e("D",1),new e("E",1),new e("C4",1)],this.hbd=[new e("C",1),new e("C",1),new e("D",1),new e("C",1),new e("F",1),new e("E",1),new e("C",1),new e("C",1),new e("D",1),new e("C",1),new e("G",1),new e("F",1),new e("C",1),new e("C",1),new e("C5",1),new e("A",1),new e("F",1),new e("E",1),new e("D",1),new e("C5",1),new e("C5",1),new e("A",1),new e("F",1),new e("G",1),new e("F",1)],this.jingle=[new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("G",1),new e("C4",1),new e("D",1),new e("E",1),new e("F",1),new e("F",1),new e("F",1),new e("F",1),new e("F",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("D",1),new e("D",1),new e("E",1),new e("D",1),new e("G",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("G",1),new e("C4",1),new e("D",1),new e("E",1),new e("F",1),new e("F",1),new e("F",1),new e("F",1),new e("F",1),new e("E",1),new e("E",1),new e("E",1),new e("E",1),new e("G",1),new e("G",1),new e("F",1),new e("D",1),new e("C4",1)]}sendNote(n){switch(n){case"C4":this.dataSender.C4_hang();break;case"D4":case"D":this.dataSender.D_hang();break;case"E4":case"E":this.dataSender.E_hang();break;case"F4":case"F":this.dataSender.F_hang();break;case"G4":case"G":this.dataSender.G_hang();break;case"A4":case"A":this.dataSender.A_hang();break;case"B4":case"B":this.dataSender.B_hang();break;case"C5":this.dataSender.C5_hang();break}}playMusic(n){switch(n){case"Ciao Bella":this.musicToPlay=this.ciao_bella;break;case"Can Can":this.musicToPlay=this.can_can;break;case"Happy birthday to you!":this.musicToPlay=this.hbd;break;case"Jingle bells":this.musicToPlay=this.jingle;break}console.log("adat fogadva, music: ",n),this.isPlaying=!0,this.currentIndex=0,this.playNextNote()}pauseMusic(){this.isPlaying=!1,this.currentTimeout&&(clearTimeout(this.currentTimeout),this.currentTimeout=null),console.log("Music paused")}resumeMusic(){this.isPlaying||(this.isPlaying=!0,this.playNextNote(),console.log("Music resumed"))}rewindMusic(){this.pauseMusic(),this.currentIndex=0}playNextNote(){this.currentIndex<this.musicToPlay.length&&this.isPlaying?(this.sendNote(this.musicToPlay[this.currentIndex].key),this.currentTimeout=setTimeout(()=>{this.currentIndex++,this.playNextNote()},this.musicToPlay[this.currentIndex].duration)):this.currentIndex>=this.musicToPlay.length&&(console.log("Finished playing the music."),this.isPlaying=!1)}static{this.\u0275fac=function(i){return new(i||t)(k(S))}}static{this.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),e=class{constructor(d,n){this.key=d,this.duration=n}};var v=(()=>{class t{constructor(){}getAll(){return[{index:0,name:"Ciao Bella",length:60,remainingTime:60,imageURL:"",isPlaying:!1},{index:1,name:"Can Can",length:35,remainingTime:35,imageURL:"",isPlaying:!1},{index:2,name:"Happy birthday to you!",length:80,remainingTime:80,imageURL:"",isPlaying:!1},{index:3,name:"Jingle bells",length:60,remainingTime:60,imageURL:"",isPlaying:!1}]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function R(t,d){if(t&1){let n=P();o(0,"button",20),f("click",function(){u(n);let r=g().$implicit,c=g();return h(c.playFromList(r.index))}),s(1,"img",21),a()}}function V(t,d){if(t&1){let n=P();o(0,"button",20),f("click",function(){u(n);let r=g().$implicit,c=g();return h(c.pauseFromList(r.index))}),s(1,"img",22),a()}}function q(t,d){if(t&1){let n=P();o(0,"li")(1,"div",5)(2,"div",6),s(3,"i",7),a(),o(4,"div",8)(5,"div",9)(6,"div",10),s(7,"div",11),a()()(),o(8,"div",12)(9,"div",13),p(10),a(),o(11,"div",14),p(12),a()(),o(13,"div",15),p(14),a(),o(15,"div",16),x(16,R,2,0,"button",17)(17,V,2,0,"button",17),o(18,"button",18),f("click",function(){let r=u(n).$implicit,c=g();return h(c.rewind(r.index))}),s(19,"img",19),a()()()()}if(t&2){let n=d.$implicit,i=g();l(6),z("width",100/n.length*(n.length-n.remainingTime),"%"),l(4),y(n.length),l(2),F("-",n.remainingTime,""),l(2),y(n.name),l(2),_("ngIf",i.zenek[n.index].isPlaying==!1),l(),_("ngIf",i.zenek[n.index].isPlaying==!0)}}var N=(()=>{class t{constructor(n,i){this.zenedoboz=n,this.zenekservice=i,this.readOnly=!1,this.zenek=[]}ngOnInit(){this.zenek=this.zenekservice.getAll()}playFromList(n){this.zenek.forEach(i=>{i.index==n&&(this.zenek[n].isPlaying=!0,this.countdown(this.zenek[n].remainingTime,n),this.zenek[n].remainingTime===this.zenek[n].length&&this.zenedoboz.playMusic(this.zenek[n].name),this.zenedoboz.resumeMusic())})}pauseFromList(n){this.zenek[n].isPlaying=!1,this.zenedoboz.pauseMusic()}countdown(n,i){let r,c=()=>{r=setInterval(()=>{n>0?(n-=1,console.log(n),this.zenek[i].remainingTime=n):(clearInterval(r),this.zenek[i].remainingTime=this.zenek[i].length,this.pauseFromList(i))},1e3)};this.zenek[i].isPlaying===!0&&c();let $=setInterval(()=>{this.zenek[i].isPlaying===!1?clearInterval(r):this.zenek[i].isPlaying===!0&&!r&&c()},100)}rewind(n){this.zenedoboz.rewindMusic(),this.pauseFromList(n),this.zenek[n].remainingTime=this.zenek[n].length}static{this.\u0275fac=function(i){return new(i||t)(O(B),O(v))}}static{this.\u0275cmp=E({type:t,selectors:[["app-zenedoboz"]],decls:11,vars:1,consts:[["lang","en"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"playerContainer"],[4,"ngFor","ngForOf"],["id","music-player",1,"rectangle"],["id","music-logo",1,"music-logo"],[1,"fas","fa-music"],["id","controls",1,"controls"],[1,"progress-container"],[1,"progress-bar"],[1,"progress-bar-circle"],["id","controls-time",1,"controls-time"],[1,"starts-time"],[1,"ends-time"],["id","music-name",1,"music-name"],["id","player-btn",1,"player-btn"],[3,"click",4,"ngIf"],[1,"rewind",3,"click"],["src","/robotofon/src/assets/svg/rewind-svgrepo-com.svg"],[3,"click"],["src","/robotofon/src/assets/svg/play-button-svgrepo-com.svg","alt","button"],["src","/robotofon/src/assets/svg/pause-button-svgrepo-com.svg"]],template:function(i,r){i&1&&(o(0,"html",0)(1,"head"),s(2,"meta",1)(3,"meta",2),o(4,"title"),p(5,"Document"),a()(),o(6,"body"),s(7,"app-navigation-bar"),o(8,"div",3)(9,"ul"),x(10,q,20,7,"li",4),a()()()()),i&2&&(l(10),_("ngForOf",r.zenek))},dependencies:[D,A,I],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box;font-family:Raleway,sans-serif}[_ngcontent-%COMP%]:root{--darktheme: #000;--lightheme: #cad3f2;--dark: #333;--light: #fff;--gradOrange: #D5A64A;--gradPink: #E132F2;--gradAqua: #0ACCCC;--gradBlue: #1919D3}body[_ngcontent-%COMP%]{background-color:#000;overflow:scroll}.playerContainer[_ngcontent-%COMP%]{width:100vw;height:100vh;display:flex;align-items:center;justify-content:space-around}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;flex-wrap:wrap;width:100%;background-color:transparent}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;list-style-type:none}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]{position:relative;background:linear-gradient(to bottom right,#faf9f9a4,#ffffff25);border:.1px solid rgba(206,206,206,.583);border-radius:20px;max-width:300px;width:300px;height:450px;z-index:1;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .music-logo[_ngcontent-%COMP%]{border:.1px solid rgba(206,206,206,.583);border-radius:20px;width:220px;height:220px;display:flex;justify-content:center;align-items:center;box-shadow:0 0 5px inset #fff;color:var(--light);transition:.5s ease-in}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .music-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:6rem}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{height:4px;width:210px;background-color:#d3d3d3;display:flex;justify-content:center;border-radius:5px}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{width:100%;height:100%}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-radius:5px;width:10%;height:100%;background-color:red;display:flex;align-items:center;justify-content:flex-end}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-bar-circle[_ngcontent-%COMP%]{width:10px;height:10px;background-color:red}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .controls-time[_ngcontent-%COMP%]{width:210px;display:flex;justify-content:space-between;align-items:center;color:var(--light);font-weight:200}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .music-name[_ngcontent-%COMP%]{color:var(--light);font-size:1.2rem;font-weight:400}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]{width:210px;display:flex;justify-content:space-evenly;align-items:center;color:var(--light);font-size:20px}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:none}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px;cursor:pointer}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:80%}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:active{opacity:100%}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   .rewind[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;cursor:pointer}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   .rewind[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:80%}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .player-btn[_ngcontent-%COMP%]   .rewind[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:active{opacity:100%}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .light-theme[_ngcontent-%COMP%]{background-color:var(--lightheme)!important}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .light[_ngcontent-%COMP%]{color:var(--light)!important}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dark[_ngcontent-%COMP%]{color:var(--dark)!important}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bgdark[_ngcontent-%COMP%]{background:var(--dark)!important}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bglight[_ngcontent-%COMP%]{background:var(--lightheme)!important}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]{opacity:.95}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .leftslider[_ngcontent-%COMP%]{float:left!important}.playerContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bolder[_ngcontent-%COMP%]{font-weight:400!important}"]})}}return t})();var U=[{path:"",component:N}],Z=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=w({imports:[b.forChild(U),b]})}}return t})();var ge=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=w({imports:[T,j,Z]})}}return t})();export{ge as ZenedobozPageModule};
