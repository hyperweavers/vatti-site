import{$ as V,Hb as ve,Jb as re,Ka as s,Kb as N,Lb as v,Na as D,Nb as oe,Pa as x,Ta as te,Ua as u,V as j,Va as c,X as g,Y as pe,Z as Q,Za as _e,a as l,b as d,bb as ne,da as ge,db as ie,i as de,ka as ee,mb as C,n as ce,pa as y,ra as me,s as he,ta as I,xa as b,y as fe,zb as m}from"./chunk-XTDXSHQ4.js";var we=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(s(D),s(b))};static \u0275dir=u({type:n})}return n})(),B=(()=>{class n extends we{static \u0275fac=(()=>{let e;return function(r){return(e||(e=y(n)))(r||n)}})();static \u0275dir=u({type:n,features:[c]})}return n})(),S=new V("");var Ze={provide:S,useExisting:g(()=>Se),multi:!0};function Xe(){let n=oe()?oe().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ye=new V(""),Se=(()=>{class n extends we{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Xe())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(s(D),s(b),s(Ye,8))};static \u0275dir=u({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&C("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[m([Ze]),c]})}return n})();function se(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}var Z=new V(""),Ie=new V("");function Ke(n){return t=>{if(se(t.value)||se(n))return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Je(n){return se(n.value)?{required:!0}:null}function ye(n){return null}function xe(n){return n!=null}function Ne(n){return _e(n)?ce(n):n}function Oe(n){let t={};return n.forEach(e=>{t=e!=null?l(l({},t),e):t}),Object.keys(t).length===0?null:t}function ke(n,t){return t.map(e=>e(n))}function Qe(n){return!n.validate}function Pe(n){return n.map(t=>Qe(t)?t:e=>t.validate(e))}function et(n){if(!n)return null;let t=n.filter(xe);return t.length==0?null:function(e){return Oe(ke(e,t))}}function le(n){return n!=null?et(Pe(n)):null}function tt(n){if(!n)return null;let t=n.filter(xe);return t.length==0?null:function(e){let i=ke(e,t).map(Ne);return fe(i).pipe(he(Oe))}}function ue(n){return n!=null?tt(Pe(n)):null}function Ce(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function nt(n){return n._rawValidators}function it(n){return n._rawAsyncValidators}function ae(n){return n?Array.isArray(n)?n:[n]:[]}function U(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ve(n,t){let e=ae(t);return ae(n).forEach(r=>{U(e,r)||e.push(r)}),e}function be(n,t){return ae(t).filter(e=>!U(n,e))}var L=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},E=class extends L{name;get formDirective(){return null}get path(){return null}},F=class extends L{_parent=null;name=null;valueAccessor=null},W=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},rt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},on=d(l({},rt),{"[class.ng-submitted]":"isSubmitted"}),sn=(()=>{class n extends W{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(s(F,2))};static \u0275dir=u({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ie("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[c]})}return n})(),an=(()=>{class n extends W{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(s(E,10))};static \u0275dir=u({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&ie("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[c]})}return n})();var O="VALID",H="INVALID",A="PENDING",k="DISABLED",w=class{},$=class extends w{value;source;constructor(t,e){super(),this.value=t,this.source=e}},R=class extends w{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},G=class extends w{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},M=class extends w{status;source;constructor(t,e){super(),this.status=t,this.source=e}};function Re(n){return(X(n)?n.validators:n)||null}function ot(n){return Array.isArray(n)?le(n):n||null}function Ge(n,t){return(X(t)?t.asyncValidators:n)||null}function st(n){return Array.isArray(n)?ue(n):n||null}function X(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function at(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new j(1e3,"");if(!i[e])throw new j(1001,"")}function lt(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new j(1002,"")})}var q=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return v(this.statusReactive)}set status(t){v(()=>this.statusReactive.set(t))}_status=N(()=>this.statusReactive());statusReactive=x(void 0);get valid(){return this.status===O}get invalid(){return this.status===H}get pending(){return this.status==A}get disabled(){return this.status===k}get enabled(){return this.status!==k}errors;get pristine(){return v(this.pristineReactive)}set pristine(t){v(()=>this.pristineReactive.set(t))}_pristine=N(()=>this.pristineReactive());pristineReactive=x(!0);get dirty(){return!this.pristine}get touched(){return v(this.touchedReactive)}set touched(t){v(()=>this.touchedReactive.set(t))}_touched=N(()=>this.touchedReactive());touchedReactive=x(!1);get untouched(){return!this.touched}_events=new de;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ve(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ve(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(be(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(be(t,this._rawAsyncValidators))}hasValidator(t){return U(this._rawValidators,t)}hasAsyncValidator(t){return U(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(d(l({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new G(!0,i))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new G(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(d(l({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new R(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new R(!0,i))}markAsPending(t={}){this.status=A;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new M(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(d(l({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=k,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new $(this.value,i)),this._events.next(new M(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(d(l({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(d(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===A)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new $(this.value,e)),this._events.next(new M(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(d(l({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=Ne(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new M(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(H)?H:O}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new R(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new G(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){X(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ot(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=st(this._rawAsyncValidators)}},z=class extends q{constructor(t,e,i){super(Re(e),Ge(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){lt(this,!0,t),Object.keys(t).forEach(i=>{at(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Y=new V("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function ut(n,t){return[...t.path,n]}function Be(n,t,e=K){Te(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),ct(n,t),ft(n,t),ht(n,t),dt(n,t)}function De(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function dt(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Te(n,t){let e=nt(n);t.validator!==null?n.setValidators(Ce(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=it(n);t.asyncValidator!==null?n.setAsyncValidators(Ce(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();De(t._rawValidators,r),De(t._rawAsyncValidators,r)}function ct(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&je(n,t)})}function ht(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&je(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ft(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function pt(n,t){n==null,Te(n,t)}function gt(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function mt(n){return Object.getPrototypeOf(n.constructor)===B}function _t(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function vt(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===Se?e=o:mt(o)?i=o:r=o}),r||i||e||null}var yt={provide:E,useExisting:g(()=>Ct)},P=Promise.resolve(),Ct=(()=>{class n extends E{callSetDisabledState;get submitted(){return v(this.submittedReactive)}_submitted=N(()=>this.submittedReactive());submittedReactive=x(!1);_directives=new Set;form;ngSubmit=new I;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new z({},le(e),ue(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){P.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Be(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){P.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){P.then(()=>{let i=this._findContainer(e.path),r=new z({});pt(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){P.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){P.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),_t(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(s(Z,10),s(Ie,10),s(Y,8))};static \u0275dir=u({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&C("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[m([yt]),c]})}return n})();function Ae(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Me(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Vt=class extends q{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(Re(e),Ge(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Me(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ae(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ae(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Me(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var bt={provide:F,useExisting:g(()=>Dt)},Ee=Promise.resolve(),Dt=(()=>{class n extends F{_changeDetectorRef;callSetDisabledState;control=new Vt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new I;constructor(e,i,r,o,a,_){super(),this._changeDetectorRef=a,this.callSetDisabledState=_,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=vt(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),gt(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Be(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ee.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&re(i);Ee.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ut(e,this._parent):[e]}static \u0275fac=function(i){return new(i||n)(s(E,9),s(Z,10),s(Ie,10),s(S,10),s(ve,8),s(Y,8))};static \u0275dir=u({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[m([bt]),c,ee]})}return n})(),un=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=u({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),At={provide:S,useExisting:g(()=>Mt),multi:!0},Mt=(()=>{class n extends B{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=y(n)))(r||n)}})();static \u0275dir=u({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&C("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[m([At]),c]})}return n})(),Et={provide:S,useExisting:g(()=>wt),multi:!0};var Ft=(()=>{class n{_accessors=[];add(e,i){this._accessors.push([e,i])}remove(e){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===e){this._accessors.splice(i,1);return}}select(e){this._accessors.forEach(i=>{this._isSameGroup(i,e)&&i[1]!==e&&i[1].fireUncheck(e.value)})}_isSameGroup(e,i){return e[0].control?e[0]._parent===i._control._parent&&e[1].name===i.name:!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wt=(()=>{class n extends B{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=ge(Y,{optional:!0})??K;constructor(e,i,r,o){super(e,i),this._registry=r,this._injector=o}ngOnInit(){this._control=this._injector.get(F),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static \u0275fac=function(i){return new(i||n)(s(D),s(b),s(Ft),s(me))};static \u0275dir=u({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(i,r){i&1&&C("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},standalone:!1,features:[m([Et]),c]})}return n})();var St={provide:S,useExisting:g(()=>Ue),multi:!0};function He(n,t){return n==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function It(n){return n.split(":")[0]}var Ue=(()=>{class n extends B{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i=this._getOptionId(e),r=He(i,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){let i=It(e);return this._optionMap.has(i)?this._optionMap.get(i):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=y(n)))(r||n)}})();static \u0275dir=u({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&C("change",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[m([St]),c]})}return n})(),dn=(()=>{class n{_element;_renderer;_select;id;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(He(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||n)(s(b),s(D),s(Ue,9))};static \u0275dir=u({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})(),xt={provide:S,useExisting:g(()=>Le),multi:!0};function Fe(n,t){return n==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function Nt(n){return n.split(":")[0]}var Le=(()=>{class n extends B{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i;if(Array.isArray(e)){let r=e.map(o=>this._getOptionId(o));i=(o,a)=>{o._setSelected(r.indexOf(a.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let a=o;for(let _=0;_<a.length;_++){let T=a[_],J=this._getOptionValue(T.value);r.push(J)}}else{let a=i.options;for(let _=0;_<a.length;_++){let T=a[_];if(T.selected){let J=this._getOptionValue(T.value);r.push(J)}}}this.value=r,e(r)}}_registerOption(e){let i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){let i=Nt(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=y(n)))(r||n)}})();static \u0275dir=u({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&C("change",function(a){return r.onChange(a.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[m([xt]),c]})}return n})(),cn=(()=>{class n{_element;_renderer;_select;id;_value;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Fe(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Fe(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||n)(s(b),s(D),s(Le,9))};static \u0275dir=u({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})();function Ot(n){return typeof n=="number"?n:parseFloat(n)}var We=(()=>{class n{_validator=ye;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):ye,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=u({type:n,features:[ee]})}return n})();var kt={provide:Z,useExisting:g(()=>Pt),multi:!0},Pt=(()=>{class n extends We{min;inputName="min";normalizeInput=e=>Ot(e);createValidator=e=>Ke(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=y(n)))(r||n)}})();static \u0275dir=u({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&ne("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[m([kt]),c]})}return n})(),Rt={provide:Z,useExisting:g(()=>Gt),multi:!0};var Gt=(()=>{class n extends We{required;inputName="required";normalizeInput=re;createValidator=e=>Je;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=y(n)))(r||n)}})();static \u0275dir=u({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&ne("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[m([Rt]),c]})}return n})();var Bt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=te({type:n});static \u0275inj=Q({})}return n})();var hn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Y,useValue:e.callSetDisabledState??K}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=te({type:n});static \u0275inj=Q({imports:[Bt]})}return n})();var h="#1A56DB",f="#FF6384",p="#9CA3AF",$e="rgba(156, 163, 175, 0.2)",Tt=function(n){return n.BAR="bar",n.BUBBLE="bubble",n.DOUGHNUT="doughnut",n.LINE="line",n.PIE="pie",n.POLAR_AREA="polarArea",n.RADAR="radar",n.SCATTER="scatter",n}(Tt||{}),jt={data:[],borderWidth:0,hoverBorderWidth:0},gn=[d(l({},jt),{borderColor:[h,f],hoverBorderColor:[h,f],backgroundColor:[h,f],hoverBackgroundColor:[h,f]})],qe={data:[],borderWidth:4,tension:.4,pointHoverRadius:6,spanGaps:!0,pointRadius:0,pointHoverBorderWidth:0,borderCapStyle:"round"},mn=d(l({},qe),{borderColor:h,hoverBorderColor:h,backgroundColor:h,hoverBackgroundColor:h}),_n=d(l({},qe),{borderColor:f,hoverBorderColor:f,backgroundColor:f,hoverBackgroundColor:f}),ze={barThickness:"flex",maxBarThickness:15,minBarLength:2,data:[]};var vn=d(l({},ze),{borderColor:h,hoverBorderColor:h,backgroundColor:h,hoverBackgroundColor:h}),yn=d(l({},ze),{borderColor:f,hoverBorderColor:f,backgroundColor:f,hoverBackgroundColor:f}),Cn={id:"verticalHoverLine",beforeDatasetsDraw(n){let{ctx:t,chartArea:{top:e,bottom:i}}=n;t.save(),n.getDatasetMeta(0).data.forEach(r=>{r.active===!0&&(t.beginPath(),t.setLineDash([5,5]),t.strokeStyle="rgba(156, 163, 175, 0.5)",t.moveTo(r.x,e),t.lineTo(r.x,i),t.stroke())})}},Vn={id:"increaseLegendSpacing",beforeInit(n){let t=n.legend;if(t&&t.fit){let e=t.fit;t.fit=function(){e.call(this),this.height+=20}}}},bn=n=>({responsive:!0,maintainAspectRatio:!1,cutout:"70%",plugins:{legend:{position:"bottom",labels:{color:p,usePointStyle:!0,padding:25,boxWidth:9,boxHeight:9},onClick:()=>({})},tooltip:{boxWidth:8,boxHeight:8,bodySpacing:5,boxPadding:5,callbacks:{label:n||void 0,labelColor:t=>({borderColor:t.dataset.backgroundColor?t.dataset.backgroundColor[t.dataIndex]:"#fff",backgroundColor:t.dataset.backgroundColor?t.dataset.backgroundColor[t.dataIndex]:"#fff",borderWidth:3})}}}}),Dn=(n,t,e,i,r)=>({responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{labels:{color:p,usePointStyle:!0,padding:25,boxWidth:6,boxHeight:6},onClick:()=>({})},tooltip:{caretSize:e?5:0,boxWidth:8,boxHeight:8,bodySpacing:5,boxPadding:5,callbacks:{title:r||void 0,label:i||void 0}}},scales:{x:{title:{display:!!n,color:p,text:n||""},grid:{display:!1},ticks:{color:p}},y:{beginAtZero:!0,title:{display:!!t,color:p,text:t||""},grid:{drawTicks:!1,color:$e},border:{display:!1,dash:[5,3]},ticks:{color:p,padding:10}}}}),An=(n,t,e,i,r,o)=>({responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{labels:{color:p,usePointStyle:!0,padding:25,boxWidth:9,boxHeight:9},onClick:()=>({})},tooltip:{caretSize:i?5:0,boxWidth:8,boxHeight:8,bodySpacing:5,boxPadding:5,callbacks:{title:o||void 0,label:r||void 0,labelColor:a=>({borderColor:a.dataset.backgroundColor?a.dataset.backgroundColor.toString():"#fff",backgroundColor:a.dataset.backgroundColor?a.dataset.backgroundColor.toString():"#fff",borderWidth:3})}}},scales:{x:{stacked:!0,title:{display:!!n,color:p,text:n||""},grid:{display:!1},ticks:{color:p}},y:{stacked:!0,beginAtZero:!0,title:{display:!!t,color:p,text:t||""},grid:{drawTicks:!1,color:$e},border:{display:!1,dash:[5,3]},ticks:{color:p,padding:10}}}});export{Se as a,sn as b,an as c,Ct as d,Dt as e,un as f,Mt as g,wt as h,Ue as i,dn as j,cn as k,Pt as l,Gt as m,hn as n,Tt as o,jt as p,gn as q,mn as r,_n as s,vn as t,yn as u,Cn as v,Vn as w,bn as x,Dn as y,An as z};
