import{N as f,R as d,X as D,d as l,g as i,i as a,l as p,t as c,va as b}from"./chunk-QSFA5LLS.js";var S=D;function w(e){return!!e[S]}var x=Symbol("__destroy"),g=Symbol("__decoratorApplied");function v(e){return typeof e=="string"?Symbol(`__destroy__${e}`):x}function j(e){e.prototype[g]=!0}function O(e,t){e[t]||(e[t]=new i)}function _(e,t){e[t]&&(e[t].next(),e[t].complete(),e[t]=null)}function C(e){e instanceof l&&e.unsubscribe()}function k(e){Array.isArray(e)&&e.forEach(C)}function E(e,t){return function(){if(e&&e.call(this),_(this,v()),t.arrayName&&k(this[t.arrayName]),t.checkProperties)for(let o in this)t.blackList?.includes(o)||C(this[o])}}function A(e,t){e.prototype.ngOnDestroy=E(e.prototype.ngOnDestroy,t)}function B(e,t){let o=e.\u0275pipe;o.onDestroy=E(o.onDestroy,t)}function G(e={}){return t=>{w(t)?B(t,e):A(t,e),j(t)}}var m=7,y=Symbol("CheckerHasBeenSet");function I(e,t){e[y]||T()||(h(()=>p(Promise.resolve()).pipe(c(()=>{let o;try{o=b(e)}catch(P){o=null}let n=o?.lView;if(n==null)return a;let r=n[m]||(n[m]=[]),s=new i;return r.push(function(){h(()=>{s.next(),s.complete()})}),s}),c(()=>Promise.resolve())).subscribe(()=>{(t.observed??t.observers.length>0)&&console.warn(U(e))})),e[y]=!0)}function T(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"}function h(e){let t=d.Zone;return!!t&&typeof t.root?.run=="function"?t.root.run(e):e()}function U(e){return`
  The ${e.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `}var u=!1;function L(e,t,o){let n=e[t];if(u&&typeof n!="function")throw new Error(`${e.constructor.name} is using untilDestroyed but doesn't implement ${t}`);O(e,o),e[t]=function(){n.apply(this,arguments),_(this,o),e[t]=n}}function H(e,t){return o=>{let n=v(t);typeof t=="string"?L(e,t,n):(u&&$(e),O(e,n));let r=e[n];return u&&I(e,r),o.pipe(f(r))}}function $(e){let t=Object.getPrototypeOf(e);if(!(g in t))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}export{G as a,H as b};
