"use strict";(self.webpackChunkcars=self.webpackChunkcars||[]).push([[953],{953:($,c,t)=>{t.r(c),t.d(c,{AuthModule:()=>X});var a=t(9808),i=t(3563),o=t(2382),_=t(8272),f=t(9150);function h(r){const l=r.value;return l?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(l)?null:{email:!0}:null}var e=t(5e3),p=t(2323),d=t(2802),w=t(4250);function b(r,l){1&r&&(e.TgZ(0,"p",18),e._uU(1,"Please provide a username."),e.qZA())}function T(r,l){1&r&&(e.TgZ(0,"p",18),e._uU(1,"Please enter valid e-mail address."),e.qZA())}function v(r,l){if(1&r&&(e.ynx(0),e.YNc(1,b,2,0,"p",17),e.YNc(2,T,2,0,"p",17),e.BQk()),2&r){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",null==s.f.username||null==s.f.username.errors?null:s.f.username.errors.required),e.xp6(1),e.Q6J("ngIf",null==s.f.username||null==s.f.username.errors?null:s.f.username.errors.email)}}function U(r,l){1&r&&(e.TgZ(0,"p",18),e._uU(1,"Please provide a password."),e.qZA())}function q(r,l){1&r&&(e.TgZ(0,"p",18),e._uU(1,"Please enter valid e-mail address."),e.qZA())}function A(r,l){if(1&r&&(e.ynx(0),e.YNc(1,U,2,0,"p",17),e.YNc(2,q,2,0,"p",17),e.BQk()),2&r){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",null==s.f.password||null==s.f.password.errors?null:s.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==s.f.password||null==s.f.password.errors?null:s.f.password.errors.minLength)}}const C=function(){return["/auth/signup"]};let y=(()=>{class r{constructor(s){this.store=s,this.submiting=!1}ngOnInit(){this.loginForm=new o.cw({username:new o.NI("",[o.kI.required,h]),password:new o.NI("",o.kI.required)}),this.sub=this.store.select(_.yW).subscribe(s=>{this.formValid=s.type,this.message=s,this.submiting=!1})}onSubmit(){this.formValid=this.loginForm.valid;const s=this.loginForm.value;this.formValid?(this.formValid=!1,this.submiting=!0,this.store.dispatch((0,f.m3)(s))):(this.submiting=!1,this.formValid=!0)}get f(){return this.loginForm.controls}ngOnDestroy(){this.sub.unsubscribe()}}return r.\u0275fac=function(s){return new(s||r)(e.Y36(p.yh))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],decls:30,vars:12,consts:[[1,"container"],[1,"row","jc-c"],[1,"col-u-sm-6","py-40"],[1,"h2","mb-20","ta-c","tc-b"],[1,"mb-15","ta-c","fs-12"],[3,"formGroup","ngSubmit"],[1,"mb-20"],["for","username",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],[1,"required","tc-r"],["id","username","type","text","formControlName","username","autocomplete","off","placeholder","E-mail address",1,"field"],[4,"ngIf"],["for","password",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],["id","password","type","password","formControlName","password","autocomplete","off","placeholder","Password",1,"field"],[1,"mb-20","ta-c"],[1,"tc-p","fw-b",3,"routerLink"],[3,"message"],["type","submit",1,"btn","btn--s","tc-w","w-100"],["class","mt-10 tc-r",4,"ngIf"],[1,"mt-10","tc-r"]],template:function(s,n){1&s&&(e._UZ(0,"app-page-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),e._uU(5,"Login"),e.qZA(),e.TgZ(6,"p",4),e._uU(7,"All fields marked with * are required"),e.qZA(),e.TgZ(8,"form",5),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(9,"div",6)(10,"label",7),e._uU(11,"E-mail address "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.YNc(15,v,3,2,"ng-container",10),e.qZA(),e.TgZ(16,"div",6)(17,"label",11),e._uU(18,"Password"),e.TgZ(19,"span",8),e._uU(20,"*"),e.qZA()(),e._UZ(21,"input",12),e.YNc(22,A,3,2,"ng-container",10),e.qZA(),e.TgZ(23,"p",13),e._uU(24,"Don't have an account? "),e.TgZ(25,"a",14),e._uU(26,"Sign up"),e.qZA()(),e._UZ(27,"app-message",15),e.TgZ(28,"button",16),e._uU(29,"Login"),e.qZA()()()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",n.loginForm),e.xp6(6),e.ekj("invalid",(null==n.f.username?null:n.f.username.touched)&&(null==n.f.username||null==n.f.username.errors?null:n.f.username.errors.required)||(null==n.f.username||null==n.f.username.errors?null:n.f.username.errors.username)||(null==n.f.username||null==n.f.username.errors?null:n.f.username.errors.email)||!(null!=n.f.username&&n.f.username.touched)&&n.formValid),e.xp6(1),e.Q6J("ngIf",(null==n.f.username?null:n.f.username.touched)||n.formValid),e.xp6(6),e.ekj("invalid",(null==n.f.password?null:n.f.password.touched)&&(null==n.f.password||null==n.f.password.errors?null:n.f.password.errors.required)||(null==n.f.password||null==n.f.password.errors?null:n.f.password.errors.password)||!(null!=n.f.password&&n.f.password.touched)&&n.formValid),e.xp6(1),e.Q6J("ngIf",(null==n.f.password?null:n.f.password.touched)||n.formValid),e.xp6(3),e.Q6J("routerLink",e.DdM(11,C)),e.xp6(2),e.Q6J("message",n.message),e.xp6(1),e.ekj("loading",n.submiting))},directives:[d.q,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,a.O5,i.yS,w.q],styles:[""]}),r})();var P=t(1055);let I=(()=>{class r{constructor(s){this.store=s}ngOnInit(){this.user$=this.store.select(P.nX)}logout(s){s.target.classList.add("loading"),this.store.dispatch((0,f.RD)())}}return r.\u0275fac=function(s){return new(s||r)(e.Y36(p.yh))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:34,vars:15,consts:[[1,"container"],[1,"row","jc-c"],[1,"col-u-sm-6","py-40"],[1,"h2","mb-40","ta-c","tc-b"],[1,"row-u-sm"],[1,"col-u-sm-6","mb-20"],[1,"tt-u","fs-14","mb-10","tc-p"],[1,"fw-b"],[1,"d-b","tt-u","fs-14","mb-10","tc-p"],[1,"btn","w-100","btn--r","tc-w",3,"click"]],template:function(s,n){if(1&s&&(e._UZ(0,"app-page-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),e._uU(5,"Profile"),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"p",6),e._uU(9,"First name:"),e.TgZ(10,"span",7),e._uU(11),e.ALo(12,"async"),e.qZA()()(),e.TgZ(13,"div",5)(14,"p",6),e._uU(15,"Last name: "),e.TgZ(16,"span",7),e._uU(17),e.ALo(18,"async"),e.qZA()()(),e.TgZ(19,"div",5)(20,"p",8),e._uU(21,"E-mail address: "),e.TgZ(22,"span",7),e._uU(23),e.ALo(24,"async"),e.qZA()()(),e.TgZ(25,"div",5)(26,"p",6),e._uU(27,"Registered on: "),e.TgZ(28,"span",7),e._uU(29),e.ALo(30,"date"),e.ALo(31,"async"),e.qZA()()()(),e.TgZ(32,"button",9),e.NdJ("click",function(m){return n.logout(m)}),e._uU(33,"Logout"),e.qZA()()()()),2&s){let u,m,Z,g;e.xp6(11),e.Oqu(null==(u=e.lcZ(12,4,n.user$))?null:u.firstname),e.xp6(6),e.Oqu(null==(m=e.lcZ(18,6,n.user$))?null:m.lastname),e.xp6(6),e.Oqu(null==(Z=e.lcZ(24,8,n.user$))?null:Z.username),e.xp6(6),e.Oqu(e.xi3(30,10,null==(g=e.lcZ(31,13,n.user$))||null==g._kmd?null:g._kmd.ect,"dd.MM.Y"))}},directives:[d.q],pipes:[a.Ov,a.uU],styles:[""]}),r})();function N(r){return s=>r.value!==s.value?{confirmPasswords:!0}:null}function J(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1,"Please provide a username."),e.qZA())}function L(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1,"Please enter valid e-mail address."),e.qZA())}function Q(r,l){if(1&r&&(e.ynx(0),e.YNc(1,J,2,0,"p",17),e.YNc(2,L,2,0,"p",17),e.BQk()),2&r){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",null==s.f.username||null==s.f.username.errors?null:s.f.username.errors.required),e.xp6(1),e.Q6J("ngIf",null==s.f.username||null==s.f.username.errors?null:s.f.username.errors.email)}}function k(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1,"Please provide a password."),e.qZA())}function F(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1," Password must be at least 6 characters long"),e.qZA())}function V(r,l){if(1&r&&(e.ynx(0),e.YNc(1,k,2,0,"p",17),e.YNc(2,F,2,0,"p",17),e.BQk()),2&r){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",null==s.f.password||null==s.f.password.errors?null:s.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==s.f.password||null==s.f.password.errors?null:s.f.password.errors.minlength)}}function Y(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1,"The passwords do not match."),e.qZA())}function R(r,l){if(1&r&&(e.ynx(0),e.YNc(1,Y,2,0,"p",17),e.BQk()),2&r){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",null==s.f.confirmPassword||null==s.f.confirmPassword.errors?null:s.f.confirmPassword.errors.confirmPasswords)}}function S(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1,"Please provide a firstname."),e.qZA())}function j(r,l){1&r&&(e.TgZ(0,"p",24),e._uU(1,"Please provide a lastname."),e.qZA())}const M=function(){return["/auth/login"]},O=[{path:"",pathMatch:"full",redirectTo:"/login"},{path:"login",component:y},{path:"signup",component:(()=>{class r{constructor(s){this.store=s,this.submiting=!0,this.passwordControl=new o.NI(null,[o.kI.required,o.kI.minLength(6)]),this.registerForm=new o.cw({username:new o.NI("",[o.kI.required,h]),password:this.passwordControl,confirmPassword:new o.NI("",[N(this.passwordControl)]),firstname:new o.NI("",o.kI.required),lastname:new o.NI("",o.kI.required)})}ngOnInit(){this.sub=this.store.select(_.yW).subscribe(s=>{this.formValid=s.type,this.submiting=!1,this.message=s,this.registerForm.reset()})}onSubmit(){this.formValid=this.registerForm.valid;const s=this.registerForm.value;this.formValid?(this.formValid=!1,this.submiting=!0,this.store.dispatch((0,f.aX)(s))):(this.submiting=!1,this.formValid=!0)}get f(){return this.registerForm.controls}ngOnDestroy(){this.sub.unsubscribe()}}return r.\u0275fac=function(s){return new(s||r)(e.Y36(p.yh))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:51,vars:19,consts:[[1,"container"],[1,"row","jc-c"],[1,"col-u-sm-6","py-40"],[1,"h2","mb-20","ta-c","tc-b"],[1,"mb-15","ta-c","fs-12"],[3,"formGroup","ngSubmit"],[1,"mb-20"],["for","username",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],[1,"required","tc-r"],["id","username","type","text","formControlName","username","autocomplete","off","placeholder","E-mail address",1,"field"],[4,"ngIf"],["for","password",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],["id","password","type","password","formControlName","password","autocomplete","off","placeholder","Password",1,"field"],["for","confirmPassword",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],["id","confirmPassword","type","password","formControlName","confirmPassword","autocomplete","off","placeholder","Confirm Password",1,"field"],["for","firstname",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],["id","firstname","type","firstname","formControlName","firstname","autocomplete","off","placeholder","First Name",1,"field"],["class","mt-10 tc-r",4,"ngIf"],["for","lastname",1,"d-b","tt-u","fw-b","fs-12","mb-10","tc-p"],["id","lastname","type","lastname","formControlName","lastname","autocomplete","off","placeholder","Last Name",1,"field"],[1,"mb-20","ta-c"],[1,"tc-p","fw-b",3,"routerLink"],[3,"message"],["type","submit",1,"btn","btn--s","tc-w","w-100"],[1,"mt-10","tc-r"]],template:function(s,n){1&s&&(e._UZ(0,"app-page-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"h1",3),e._uU(5,"Sign Up"),e.qZA(),e.TgZ(6,"p",4),e._uU(7,"All fields marked with * are required"),e.qZA(),e.TgZ(8,"form",5),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(9,"div",6)(10,"label",7),e._uU(11,"E-mail address "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.YNc(15,Q,3,2,"ng-container",10),e.qZA(),e.TgZ(16,"div",6)(17,"label",11),e._uU(18,"Password"),e.TgZ(19,"span",8),e._uU(20,"*"),e.qZA()(),e._UZ(21,"input",12),e.YNc(22,V,3,2,"ng-container",10),e.qZA(),e.TgZ(23,"div",6)(24,"label",13),e._uU(25,"Confirm Password"),e.TgZ(26,"span",8),e._uU(27,"*"),e.qZA()(),e._UZ(28,"input",14),e.YNc(29,R,2,1,"ng-container",10),e.qZA(),e.TgZ(30,"div",6)(31,"label",15),e._uU(32,"First Name"),e.TgZ(33,"span",8),e._uU(34,"*"),e.qZA()(),e._UZ(35,"input",16),e.YNc(36,S,2,0,"p",17),e.qZA(),e.TgZ(37,"div",6)(38,"label",18),e._uU(39,"Last name"),e.TgZ(40,"span",8),e._uU(41,"*"),e.qZA()(),e._UZ(42,"input",19),e.YNc(43,j,2,0,"p",17),e.qZA(),e.TgZ(44,"p",20),e._uU(45,"Already have an account? "),e.TgZ(46,"a",21),e._uU(47,"Log In"),e.qZA()(),e._UZ(48,"app-message",22),e.TgZ(49,"button",23),e._uU(50,"Sign Up"),e.qZA()()()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",n.registerForm),e.xp6(6),e.ekj("invalid",(null==n.f.username?null:n.f.username.touched)&&(null==n.f.username||null==n.f.username.errors?null:n.f.username.errors.required)||(null==n.f.username||null==n.f.username.errors?null:n.f.username.errors.username)||(null==n.f.username||null==n.f.username.errors?null:n.f.username.errors.email)||!(null!=n.f.username&&n.f.username.touched)&&n.formValid),e.xp6(1),e.Q6J("ngIf",(null==n.f.username?null:n.f.username.touched)||n.formValid),e.xp6(6),e.ekj("invalid",(null==n.f.password?null:n.f.password.touched)&&(null==n.f.password||null==n.f.password.errors?null:n.f.password.errors.required)||!(null==n.f.password||null==n.f.password.errors||!n.f.password.errors.minlength)||!(null!=n.f.password&&n.f.password.touched)&&n.formValid),e.xp6(1),e.Q6J("ngIf",(null==n.f.password?null:n.f.password.touched)||n.formValid),e.xp6(6),e.ekj("invalid",(null==n.f.confirmPassword?null:n.f.confirmPassword.touched)&&(null==n.f.confirmPassword||null==n.f.confirmPassword.errors?null:n.f.confirmPassword.errors.confirmPasswords)),e.xp6(1),e.Q6J("ngIf",null==n.f.confirmPassword?null:n.f.confirmPassword.touched),e.xp6(6),e.ekj("invalid",(null==n.f.firstname?null:n.f.firstname.touched)&&(null==n.f.firstname||null==n.f.firstname.errors?null:n.f.firstname.errors.required)||!(null!=n.f.firstname&&n.f.firstname.touched)&&n.formValid),e.xp6(1),e.Q6J("ngIf",(null==n.f.firstname?null:n.f.firstname.touched)&&(null==n.f.firstname||null==n.f.firstname.errors?null:n.f.firstname.errors.required)||n.formValid),e.xp6(6),e.ekj("invalid",(null==n.f.lastname?null:n.f.lastname.touched)&&(null==n.f.lastname||null==n.f.lastname.errors?null:n.f.lastname.errors.required)||!(null!=n.f.lastname&&n.f.lastname.touched)&&n.formValid),e.xp6(1),e.Q6J("ngIf",(null==n.f.lastname?null:n.f.lastname.touched)&&(null==n.f.lastname||null==n.f.lastname.errors?null:n.f.lastname.errors.required)||n.formValid),e.xp6(3),e.Q6J("routerLink",e.DdM(18,M)),e.xp6(2),e.Q6J("message",n.message))},directives:[d.q,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,a.O5,i.yS,w.q],styles:[""]}),r})()},{path:"profile",component:I},{path:"**",redirectTo:"/login"}];let B=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[i.Bz.forChild(O)],i.Bz]}),r})();var D=t(4466);let X=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[a.ez,D.m,B,o.UX]]}),r})()}}]);