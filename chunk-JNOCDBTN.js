var f=function(t){return t.Monthly="12",t.Quarterly="4",t.Yearly="1",t.Maturity="0",t}(f||{}),l=function(t){return t.None="0",t.Monthly="12",t.Quarterly="4",t.Yearly="1",t}(l||{}),T=function(t){return t[t.Maturity=0]="Maturity",t[t.Installment=1]="Installment",t}(T||{});var A=Math.pow(10,8)*24*60*60*1e3,Q=-A;var M=864e5;var O=3600;var g=O*24,b=g*7,S=g*365.2425,H=S/12,w=H*3,d=Symbol.for("constructDateFrom");function c(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&d in t?t[d](e):t instanceof Date?new t.constructor(e):new Date(e)}function i(t,e){return c(e||t,t)}function h(t,e,o){let n=i(t,o?.in);return isNaN(e)?c(o?.in||t,NaN):(e&&n.setDate(n.getDate()+e),n)}function x(t){let e=i(t),o=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return o.setUTCFullYear(e.getFullYear()),+t-+o}function p(t,...e){let o=c.bind(null,t||e.find(n=>typeof n=="object"));return e.map(o)}function D(t,e){let o=i(t,e?.in);return o.setHours(0,0,0,0),o}function Y(t,e,o){let[n,r]=p(o?.in,t,e),a=D(n),s=D(r),u=+a-x(a),m=+s-x(s);return Math.round((u-m)/M)}function F(t,e,o){let[n,r]=p(o?.in,t,e),a=N(n,r),s=Math.abs(Y(n,r));n.setDate(n.getDate()-a*s);let u=+(N(n,r)===-a),m=a*(s-u);return m===0?0:m}function N(t,e){let o=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return o<0?-1:o>0?1:o}function I(t,e){let o=i(t,e?.in);return o.setHours(23,59,59,999),o}function y(t,e){let o=i(t,e?.in),n=o.getMonth(),r=n-n%3+3;return o.setMonth(r,0),o.setHours(23,59,59,999),o}function _(t,e){return+i(t)==+i(e)}var lt=(()=>{class t{static YEAR_IN_DAYS=365;static FINANCIAL_YEAR_START_MONTH=3;static getNextCompoundingOrPayoutDate(o,n){let r=new Date(o);if(n===l.Monthly||n===f.Monthly)r.setMonth(r.getMonth()+1);else if(n===l.Quarterly||n===f.Quarterly)r=t.getNextFinancialQuarterEndDate(r);else if(n===l.Yearly||n===f.Yearly)for(let a=4;a>0;a--)r=t.getNextFinancialQuarterEndDate(r);else r=null;return r}static getDepositMaturityDate(o,n,r,a=0){let s=new Date(o);return s.setFullYear(s.getFullYear()+n),s.setMonth(s.getMonth()+r),s.setDate(s.getDate()+a),s}static convertDepositTermToYears(o,n,r=0){let a=o||0,s=n||0,u=r||0;return a+s/12+u/365}static getDifferenceInDays(o,n){return F(o,n)}static getFinancialYear(o){let n=o.getFullYear();o.getMonth()<this.FINANCIAL_YEAR_START_MONTH&&n--;let a=new Date(n,this.FINANCIAL_YEAR_START_MONTH,1),s=I(new Date(n+1,this.FINANCIAL_YEAR_START_MONTH-1,31));return{start:a,end:s}}static getNextFinancialQuarterEndDate(o){let n=I(o),r=y(n);return _(r,n)&&(n=h(n,1),r=y(n)),r}}return t})();export{f as a,l as b,T as c,c as d,i as e,lt as f};
