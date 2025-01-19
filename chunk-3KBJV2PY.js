import{a as C}from"./chunk-DTRZGD2N.js";import{a as N,b as F}from"./chunk-BOX7KRZH.js";import"./chunk-TLY2HXBG.js";import{b as H}from"./chunk-WK2KISC4.js";import{a as q,b as R,c as O,d as Q,e as U,f as z,g as Y,m as K,n as X,o as $,p as m}from"./chunk-UOR6ZLJB.js";import{m as E}from"./chunk-VC6ZNM6H.js";import"./chunk-Z2H34PKS.js";import{Ab as b,Bb as j,Db as c,Fb as p,Jb as v,La as n,Ma as P,Ua as W,Za as S,a as _,bc as h,cc as Z,eb as M,gb as G,jb as e,kb as t,l as D,lb as g,m as B,nb as s,ob as J,pa as y,qa as w,rb as V,sb as A,tb as L,ub as r,vb as I,wb as u,yb as f,zb as x}from"./chunk-VICN7ROL.js";function te(k,d){k&1&&(e(0,"div",29),y(),e(1,"svg",33),g(2,"path",34)(3,"path",35),t(),w(),e(4,"span",5),r(5,"Loading..."),t()())}function re(k,d){if(k&1&&(e(0,"div",32)(1,"div",36)(2,"p",37),r(3," Gold Price "),t(),e(4,"p",38),r(5),c(6,"number"),t(),e(7,"p",37),r(8," Wastage/Value Addition (W/VA) "),t(),e(9,"p",38),r(10),c(11,"number"),t(),e(12,"p",37),r(13," Making Charge (MC) "),t(),e(14,"p",38),r(15),c(16,"number"),t(),e(17,"p",37),r(18," Tax "),t(),e(19,"p",38),r(20),c(21,"number"),t()(),e(22,"h3",39),r(23," Total = "),e(24,"mark",40),r(25),c(26,"number"),t()(),e(27,"section",41)(28,"h2",42),r(29," Jewel Price Breakdown "),t(),e(30,"div",43)(31,"div",44)(32,"div",45),r(33),c(34,"number"),t(),e(35,"div"),r(36,"Total"),t()(),e(37,"div",46),g(38,"canvas",47),t()()()()),k&2){let i=J();n(5),u(" ",p(6,9,i.goldPrice,"1.0-0")," "),n(5),u(" ",p(11,12,i.wastageValue,"1.0-0")," "),n(5),u(" ",p(16,15,i.makingCharge,"1.0-0")," "),n(5),u(" ",p(21,18,i.tax,"1.0-0")," "),n(5),I(p(26,21,i.totalAmountPayable,"1.0-0")),n(8),u(" ",p(34,24,i.totalAmountPayable,"1.0-0")," "),n(5),M("type",i.ChartType.DOUGHNUT)("data",i.priceBreakdownChartData)("options",i.priceBreakdownChartOptions)}}var ee=class T{decimalPipe;chart;GSTPercentage=3;ChartType=$;goldWeight=1;wastagePercentage=8;makingCharge=0;goldPricePerGram=0;goldPrice=0;wastageValue=0;tax=0;totalAmountPayable=0;showPriceLoading=!0;priceBreakdownChartData={labels:["Gold","W/VA","MC","Tax"],datasets:[_(_({},m.defaultDoughnutChartDataset),m.getDoughnutChartColors([m.colorGreen,m.colorYellow,m.colorPurple,m.colorBlue]))]};priceBreakdownChartOptions=m.getDoughnutChartOptions(d=>this.decimalPipe.transform(d.parsed,"1.0-0")||"");constructor(d,i,a){this.decimalPipe=d,i.goldRate$.pipe(F(this)).subscribe(o=>{this.goldPricePerGram=o,this.calculateTotalPrice(),this.showPriceLoading=!1,a.markForCheck()})}calculateTotalPrice(){this.goldPrice=this.goldWeight*this.goldPricePerGram,this.wastageValue=this.goldWeight*(this.wastagePercentage/100)*this.goldPricePerGram;let d=this.goldPrice+this.wastageValue+this.makingCharge;this.tax=d*this.GSTPercentage/100,this.totalAmountPayable=d+this.tax,this.priceBreakdownChartData.datasets[0].data=[this.goldPrice,this.wastageValue,this.makingCharge,this.tax],this.chart&&this.chart.update()}static \u0275fac=function(i){return new(i||T)(P(h),P(C),P(v))};static \u0275cmp=W({type:T,selectors:[["app-gold-jewellery-price-calculator"]],viewQuery:function(i,a){if(i&1&&V(E,5),i&2){let o;A(o=L())&&(a.chart=o.first)}},features:[j([C,h])],decls:53,vars:7,consts:[[1,"flex","min-h-full","flex-col","p-4","text-gray-500","dark:text-gray-400"],[1,"m-4","mt-0","text-center","text-2xl","font-semibold","text-gray-900","sm:mb-8","sm:mt-4","dark:text-white"],["id","telegram-channel-alert","role","alert",1,"flex","items-center","rounded-lg","bg-gray-50","p-4","dark:bg-gray-800"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"h-4","w-4","flex-shrink-0","dark:text-gray-300"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"],[1,"sr-only"],[1,"ms-3","text-sm","font-medium","text-gray-800","dark:text-gray-300"],["href","https://t.me/tngoldprice","target","_blank",1,"font-semibold","underline","hover:no-underline"],["type","button","data-dismiss-target","#telegram-channel-alert","aria-label","Close",1,"-mx-1.5","-my-1.5","ms-auto","inline-flex","h-8","w-8","items-center","justify-center","rounded-lg","bg-gray-50","p-1.5","text-gray-500","hover:bg-gray-200","focus:ring-2","focus:ring-gray-400","dark:bg-gray-800","dark:text-gray-300","dark:hover:bg-gray-700","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"h-3","w-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"mt-4",3,"ngSubmit"],[1,"grid","grid-cols-1","md:grid-cols-2","md:gap-10"],[1,"mb-6"],["for","gold-weight",1,"mb-2","block","text-sm","font-medium","text-gray-900","dark:text-white"],["type","number","id","gold-weight","name","gold-weight","placeholder","","required","",1,"focus:border-primary-500","focus:ring-primary-500","dark:focus:border-primary-500","dark:focus:ring-primary-500","block","w-full","rounded-lg","border","border-gray-300","bg-gray-50","p-2.5","text-sm","text-gray-900","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:placeholder-gray-400",3,"ngModelChange","change","ngModel"],["for","wastage",1,"mb-2","block","text-sm","font-medium","text-gray-900","dark:text-white"],["type","number","id","wastage","name","wastage","placeholder","","required","",1,"focus:border-primary-500","focus:ring-primary-500","dark:focus:border-primary-500","dark:focus:ring-primary-500","block","w-full","rounded-lg","border","border-gray-300","bg-gray-50","p-2.5","text-sm","text-gray-900","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:placeholder-gray-400",3,"ngModelChange","change","ngModel"],["for","making-charge",1,"mb-2","block","text-sm","font-medium","text-gray-900","dark:text-white"],["type","number","id","making-charge","name","making-charge","placeholder","","required","",1,"focus:border-primary-500","focus:ring-primary-500","dark:focus:border-primary-500","dark:focus:ring-primary-500","block","w-full","rounded-lg","border","border-gray-300","bg-gray-50","p-2.5","text-sm","text-gray-900","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:placeholder-gray-400",3,"ngModelChange","change","ngModel"],[1,"mb-2","flex","items-center"],["for","gold-price-per-gram",1,"block","text-sm","font-medium","text-gray-900","dark:text-white"],["data-tooltip-target","tooltip-gold-price",1,"cursor-pointer","ps-1"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","currentColor","viewBox","0 0 24 24",1,"h-4","w-4","text-gray-800","dark:text-white"],["fill-rule","evenodd","d","M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z","clip-rule","evenodd"],["id","tooltip-gold-price","role","tooltip",1,"tooltip","invisible","absolute","z-50","inline-block","rounded-lg","bg-yellow-400","px-3","py-2","text-sm","font-medium","text-white","opacity-0","shadow-sm","transition-opacity","duration-300","dark:bg-yellow-500"],["data-popper-arrow","",1,"tooltip-arrow"],[1,"relative"],["type","number","id","gold-price-per-gram","name","gold-price-per-gram","placeholder","","required","",1,"focus:border-primary-500","focus:ring-primary-500","dark:focus:border-primary-500","dark:focus:ring-primary-500","block","w-full","rounded-lg","border","border-gray-300","bg-gray-50","p-2.5","text-sm","text-gray-900","dark:border-gray-600","dark:bg-gray-700","dark:text-white","dark:placeholder-gray-400",3,"ngModelChange","change","ngModel","readonly"],["role","status",1,"absolute","right-3","top-2/4","-translate-y-1/2"],[1,"flex","w-full","justify-center"],["type","submit",1,"bg-primary-700","hover:bg-primary-800","focus:ring-primary-300","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800","w-full","rounded-lg","px-5","py-2.5","text-center","text-sm","font-medium","text-white","focus:outline-none","focus:ring-4","sm:w-auto"],[1,"mt-6"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","h-4","w-4","animate-spin","fill-gray-600","text-gray-200","dark:fill-gray-300","dark:text-gray-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"grid","grid-cols-3","items-center","gap-x-10","gap-y-2"],[1,"col-span-2","leading-none","tracking-tight","text-gray-800","dark:text-gray-300"],[1,"text-right","font-bold","text-black","dark:text-white"],[1,"mt-6","text-center","text-xl","font-bold","leading-none","tracking-tight","text-gray-900","dark:text-white"],[1,"rounded","bg-blue-600","px-2","py-1","text-2xl","font-extrabold","text-white","dark:bg-blue-500"],[1,"mt-6","w-full","rounded-lg","bg-white","p-4","shadow","md:p-6","dark:bg-gray-800"],[1,"mb-4","block","text-center","text-sm","font-medium","text-gray-900","dark:text-white"],[1,"relative","mt-10"],[1,"absolute","-top-5","left-0","flex","h-full","w-full","flex-col","items-center","justify-center"],[1,"text-2xl","font-bold","text-black","dark:text-white"],[1,"relative","h-80","w-full"],["baseChart","",3,"type","data","options"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"h2",1),r(2," Gold Jewellery Price Calculator "),t(),e(3,"div",2),y(),e(4,"svg",3),g(5,"path",4),t(),w(),e(6,"span",5),r(7,"Info"),t(),e(8,"div",6),r(9," Join our "),e(10,"a",7),r(11,"Telegram Channel"),t(),r(12," to get daily gold jewellery price updates and predictions. "),t(),e(13,"button",8)(14,"span",5),r(15,"Dismiss"),t(),y(),e(16,"svg",9),g(17,"path",10),t()()(),w(),e(18,"form",11),s("ngSubmit",function(){return a.calculateTotalPrice()}),e(19,"section",12)(20,"main")(21,"div",13)(22,"label",14),r(23,"Gold Weight (grams)"),t(),e(24,"input",15),b("ngModelChange",function(l){return x(a.goldWeight,l)||(a.goldWeight=l),l}),s("change",function(){return a.calculateTotalPrice()}),t()(),e(25,"div",13)(26,"label",16),r(27,"Wastage/Value Addition (%)"),t(),e(28,"input",17),b("ngModelChange",function(l){return x(a.wastagePercentage,l)||(a.wastagePercentage=l),l}),s("change",function(){return a.calculateTotalPrice()}),t()(),e(29,"div",13)(30,"label",18),r(31,"Making Charge (\u20B9)"),t(),e(32,"input",19),b("ngModelChange",function(l){return x(a.makingCharge,l)||(a.makingCharge=l),l}),s("change",function(){return a.calculateTotalPrice()}),t()(),e(33,"div",13)(34,"div",20)(35,"label",21),r(36,"Gold Price (1 gram) "),t(),e(37,"span",22),y(),e(38,"svg",23),g(39,"path",24),t()(),w(),e(40,"div",25),r(41," Auto-populated with today's online gold price."),g(42,"br"),r(43,"Please confirm with the seller. "),g(44,"div",26),t()(),e(45,"div",27)(46,"input",28),b("ngModelChange",function(l){return x(a.goldPricePerGram,l)||(a.goldPricePerGram=l),l}),s("change",function(){return a.calculateTotalPrice()}),t(),S(47,te,6,0,"div",29),t()(),e(48,"div",30)(49,"button",31),r(50," Calculate "),t()()(),e(51,"aside"),S(52,re,39,27,"div",32),t()()()()),i&2&&(n(24),f("ngModel",a.goldWeight),n(4),f("ngModel",a.wastagePercentage),n(4),f("ngModel",a.makingCharge),n(14),f("ngModel",a.goldPricePerGram),M("readonly",a.showPriceLoading),n(),G(a.showPriceLoading?47:-1),n(5),G(a.totalAmountPayable>0?52:-1))},dependencies:[Z,h,X,z,q,Y,R,O,K,U,Q,E],encapsulation:2,changeDetection:0})};ee=D([H(),N(),B("design:paramtypes",[h,C,v])],ee);export{ee as GoldJewelleryPriceCalculatorPage};
