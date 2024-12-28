import{a as E,b as H}from"./chunk-DTQHJIJF.js";import"./chunk-2Z2LEBYJ.js";import{Bb as f,Cb as y,Ja as o,Ka as b,Sa as w,Xa as x,Xb as T,Yb as M,Zb as z,ac as V,cb as h,eb as S,ib as t,jb as n,kb as l,la as d,lb as k,ma as g,mb as u,na as s,nb as m,oa as p,tb as c,vb as _}from"./chunk-XTDXSHQ4.js";function P(a,v){if(a&1){let e=k();t(0,"h1",2),c(1," Settings "),n(),t(2,"ul",3)(3,"li",3)(4,"div",4)(5,"div",5)(6,"p",6),c(7," Theme "),n(),t(8,"p",7),c(9),f(10,"titlecase"),n()(),t(11,"div",8)(12,"button",9),u("click",function(){d(e);let r=m();return g(r.selectTheme(r.Theme.LIGHT))}),s(),t(13,"svg",10),l(14,"path",11),n()(),p(),t(15,"button",12),u("click",function(){d(e);let r=m();return g(r.selectTheme(r.Theme.SYSTEM))}),s(),t(16,"svg",13),l(17,"path",14),n()(),p(),t(18,"button",15),u("click",function(){d(e);let r=m();return g(r.selectTheme(r.Theme.DARK))}),s(),t(19,"svg",10),l(20,"path",16),n()()()()()()}if(a&2){let e=v,i=m();o(9),_(" (",y(10,4,e.theme),") "),o(3),h("ngClass",e.theme===i.Theme.LIGHT?"bg-primary-700 text-white dark:bg-primary-600":"bg-white text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 focus:text-primary-700 dark:focus:text-primary-500"),o(3),h("ngClass",e.theme===i.Theme.SYSTEM?"bg-primary-700 text-white dark:bg-primary-600":"bg-white text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 focus:text-primary-700 dark:focus:text-primary-500"),o(3),h("ngClass",e.theme===i.Theme.DARK?"bg-primary-700 text-white dark:bg-primary-600":"bg-white text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 focus:text-primary-700 dark:focus:text-primary-500")}}function D(a,v){a&1&&(t(0,"div",1),s(),t(1,"svg",17),l(2,"path",18)(3,"path",19),n(),p(),t(4,"span",20),c(5,"Loading..."),n()())}var $=(()=>{class a{settingsService;settings$;Theme=E;constructor(e){this.settingsService=e,this.settings$=this.settingsService.settings$}selectTheme(e){this.settingsService.setTheme(e)}static \u0275fac=function(i){return new(i||a)(b(H))};static \u0275cmp=w({type:a,selectors:[["app-settings"]],decls:4,vars:3,consts:[[1,"h-full","p-4"],["role","status",1,"flex","h-full","flex-1","items-center","justify-center"],[1,"text-xl","font-semibold","text-gray-900","sm:text-2xl","dark:text-white"],[1,"py-2"],[1,"flex","items-center","space-x-4"],[1,"min-w-0","flex-1"],[1,"truncate","text-base","font-semibold","text-gray-900","dark:text-white"],[1,"truncate","text-sm","font-normal","text-gray-500","dark:text-gray-400"],["role","group",1,"inline-flex","rounded-md","shadow-sm"],["type","button",1,"focus:ring-primary-700","dark:focus:ring-primary-500","inline-flex","h-10","w-10","items-center","justify-center","rounded-s-lg","border","border-gray-200","text-sm","font-medium","focus:z-10","focus:ring-2","dark:border-gray-700",3,"click","ngClass"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"h-5","w-5"],["d","M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule","evenodd","clip-rule","evenodd"],["type","button",1,"focus:ring-primary-700","dark:focus:ring-primary-500","inline-flex","h-10","w-10","items-center","justify-center","border-b","border-t","border-gray-200","text-sm","font-medium","focus:z-10","focus:ring-2","dark:border-gray-700",3,"click","ngClass"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 24 24",1,"h-5","w-5"],["fill-rule","evenodd","d","M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z","clip-rule","evenodd"],["type","button",1,"focus:ring-primary-700","dark:focus:ring-primary-500","inline-flex","h-10","w-10","items-center","justify-center","rounded-e-lg","border","border-gray-200","text-sm","font-medium","focus:z-10","focus:ring-2","dark:border-gray-700",3,"click","ngClass"],["d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"h-8","w-8","animate-spin","fill-blue-600","text-gray-200","dark:text-gray-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"]],template:function(i,r){if(i&1&&(t(0,"div",0),x(1,P,21,6),f(2,"async"),x(3,D,6,0,"div",1),n()),i&2){let C;o(),S((C=y(2,1,r.settings$))?1:3,C)}},dependencies:[V,T,M,z],encapsulation:2,changeDetection:0})}return a})();export{$ as SettingsPage};
