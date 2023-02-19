"use strict";(self.webpackChunkProjectMonitoringSystem_RWSS=self.webpackChunkProjectMonitoringSystem_RWSS||[]).push([[875],{4875:(R,g,a)=>{a.r(g),a.d(g,{MasterModule:()=>d});var A=a(8692),m=a(3580),h=a(3911),i=a(92),s=a(4536),e=a(4537),v=a(4639),y=a(8489),b=a(9664),C=a(6909);function O(n,t){if(1&n){const o=e.EpF();e.TgZ(0,"div",4)(1,"div")(2,"form",5),e.NdJ("ngSubmit",function(f){e.CHM(o);const u=e.oxw();return e.KtG(u.onSubmitForm(f))}),e._UZ(3,"app-text-field",6)(4,"app-select-search",7)(5,"app-select-search",8)(6,"app-select-search",9)(7,"app-select-search",10),e.TgZ(8,"mat-slide-toggle",11),e._uU(9,"Active"),e.qZA(),e._UZ(10,"app-button",12),e.qZA()()()}if(2&n){const o=e.oxw();e.xp6(2),e.Q6J("formGroup",o.officeForm),e.xp6(1),e.Akn("width:100%"),e.Q6J("label","Office Name")("placeholder","Enter Office Name")("isReadOnly","false")("maxlength",100),e.xp6(1),e.Akn("width:100%;"),e.Q6J("label","Office Type")("placeholder","Select Office Type")("optionList",o.officeTypeList),e.xp6(1),e.Akn("width:100%;"),e.Q6J("label","Specify District")("placeholder","Select District")("optionList",o.districtList),e.xp6(1),e.Akn("width:100%;"),e.Q6J("label","Wing")("placeholder","Select Wing")("optionList",o.wingList),e.xp6(1),e.Akn("width:100%;"),e.Q6J("label","LAC")("placeholder","Select LAC")("optionList",o.lacList),e.xp6(3),e.Akn("bottom: 10px;position: absolute;right: 15px;z-index: 9;"),e.Q6J("type","submit")("text","Add")("btnId","primary")}}class l{constructor(t,o,c){this._formBuilder=t,this.dialogRef=o,this.data=c,this.officeForm=i.nJ,this.districtList=[{code:"81",name:"BAJALI"},{code:"8",name:"BAKSA"},{code:"10",name:"BARPETA"},{code:"31",name:"CACHAR"},{code:"1",name:"CHIRANG"},{code:"12",name:"DHEMAJI"}],this.wingList=[{code:"81",name:"Wing 1"},{code:"8",name:"Wing 2"},{code:"5",name:"Wing 3"}],this.officeTypeList=[{code:"81",name:"Type 1"},{code:"8",name:"Type 2"},{code:"5",name:"Type 3"}],this.lacList=[{code:"81",name:"LAC 1"},{code:"8",name:"LAC 2"},{code:"5",name:"LAC 3"}]}ngOnInit(){this.officeForm=this._formBuilder.group({officeName:["",i.kI.required],officeType:["",i.kI.required],district:["",i.kI.required],wing:["",i.kI.required],lac:["",i.kI.required],isActive:[!0]})}onSubmitForm(t){this.officeForm.valid&&this.dialogRef.close(this.officeForm.value)}onNoClick(){this.dialogRef.close()}}l.\u0275fac=function(t){return new(t||l)(e.Y36(i.QS),e.Y36(s.so),e.Y36(s.WI))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-add-edit-office"]],decls:6,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content","",4,"ngIf"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","value","Close",1,"lgf-btn",3,"type","text","btnId"],["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["formControlName","officeName",1,"property-form",3,"label","placeholder","isReadOnly","maxlength"],["formControlName","officeType",1,"property-form",3,"label","placeholder","optionList"],["formControlName","district",1,"property-form",3,"label","placeholder","optionList"],["formControlName","wing",1,"property-form",3,"label","placeholder","optionList"],["formControlName","lac",1,"property-form",3,"label","placeholder","optionList"],["formControlName","isActive"],["value","Submit",1,"lgf-btn",3,"type","text","btnId"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"h1",0),e._uU(2),e.qZA(),e.YNc(3,O,11,32,"div",1),e.TgZ(4,"div",2),e._UZ(5,"app-button",3),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(null==o.data?null:o.data.title),e.xp6(1),e.Q6J("ngIf",o.data&&o.data.component),e.xp6(2),e.Akn("position: absolute;bottom: 10px;right: 12%;"),e.Q6J("type","submit")("text","Close")("btnId","warn"))},dependencies:[A.O5,i._Y,i.JJ,i.JL,i.nD,i.sg,i.u,s.ZT,s.uh,s.xY,s.H8,v.Rr,y.a,b.h,C.r]});var T=a(8292),L=a(2135),S=a(9357);class p{constructor(t,o,c,f,u){this.toastService=t,this.cmnService=o,this._formBuilder=c,this.router=f,this.dialog=u,this.dataList=[],this.displayedColumns=[{col:"officeName",name:"Office Name"},{col:"officeType",name:"Office Type"},{col:"parentOffice",name:"Parent Office"},{col:"district",name:"District"},{col:"wing",name:"Wing"},{col:"lac",name:"LAC"},{col:"Action",name:"Action",iconType:"edit_view"}],this.dataSource=new h.by,this.searchOfcFrm=i.nJ,this.officeTypeList=[{code:1,name:"Office 1"},{code:2,name:"Office 2"}],this.districtList=[{code:"81",name:"BAJALI"},{code:"8",name:"BAKSA"},{code:"10",name:"BARPETA"},{code:"31",name:"CACHAR"},{code:"1",name:"CHIRANG"},{code:"12",name:"DHEMAJI"}]}ngOnInit(){this.dataSource=new h.by(this.dataList),this.searchOfcFrm=this._formBuilder.group({officeName:[""],officeType:[""],district:[""]})}searchOffice(){this.searchOfcFrm.value.officeName||this.searchOfcFrm.value.officeType||this.searchOfcFrm.value.district||this.toastService.warning("Please select atleast one field")}openDialog(){this.dialog.open(l,{width:"800px",data:{component:l,title:"Add Office"}}).afterClosed().subscribe(o=>{console.log("res==",o),o&&(this.dataList.push({roadNumber:"RRO",roadName:o.associatedRoad.name,viewRoadInMap:"View",district:o.district.name,roadLength:0}),this.dataSource=new h.by(this.dataList))})}onClickRoadTableAction(t){console.log("event--",t),t&&t.element&&"Edit"==t.action&&this.editRoadChaonage(t.element)}editRoadChaonage(t){console.log(t),this.dialog.open(l,{width:"800px",data:{element:t,originalform:this,component:l,title:"Edit Office"}}).afterClosed().subscribe(f=>{console.log("The dialog was closed")})}}p.\u0275fac=function(t){return new(t||p)(e.Y36(T._W),e.Y36(L.R),e.Y36(i.QS),e.Y36(m.F0),e.Y36(s.uw))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-office"]],decls:21,vars:29,consts:[[1,"associated-cls"],[2,"float","left"],["value","Submit",1,"lgf-btn",3,"type","text","btnId","click"],["id","search-project-dashboard",1,"search-project-dashboard"],[1,"label-header"],[1,"marginTopForFormCustomClass1"],["id","searchOfcFrm","novalidate","novalidate",3,"formGroup"],[1,"row"],[1,"col-sm-12"],["formControlName","officeName",1,"property-form",3,"label","placeholder","isReadOnly","maxlength"],["formControlName","officeType",1,"property-form",3,"label","placeholder","optionList"],["formControlName","district",1,"property-form",3,"label","placeholder","optionList"],[3,"dataList","displayedColumns","onClickAction"]],template:function(t,o){1&t&&(e.TgZ(0,"section")(1,"div")(2,"div",0)(3,"h3",1),e._uU(4,"Office"),e.qZA(),e.TgZ(5,"app-button",2),e.NdJ("click",function(){return o.openDialog()}),e.qZA()(),e.TgZ(6,"div")(7,"section",3)(8,"div",4)(9,"h5"),e._uU(10,"Search Office"),e.qZA()(),e.TgZ(11,"div",5)(12,"form",6)(13,"div",7)(14,"div",8),e._UZ(15,"app-text-field",9)(16,"app-select-search",10)(17,"app-select-search",11),e.TgZ(18,"app-button",2),e.NdJ("click",function(){return o.searchOffice()}),e.qZA()()()()()()(),e.TgZ(19,"div")(20,"app-table",12),e.NdJ("onClickAction",function(f){return o.onClickRoadTableAction(f)}),e.qZA()()()()),2&t&&(e.xp6(5),e.Akn("float:right;"),e.Q6J("type","submit")("text","Add")("btnId","primary"),e.xp6(7),e.Q6J("formGroup",o.searchOfcFrm),e.xp6(3),e.Akn("width:30%"),e.Q6J("label","Office Name")("placeholder","Enter Office Name")("isReadOnly","false")("maxlength",100),e.xp6(1),e.Akn("width:30%"),e.Q6J("label","Office Type")("placeholder","Select Office Type")("optionList",o.officeTypeList),e.xp6(1),e.Akn("width:30%"),e.Q6J("label","District")("placeholder","Select District")("optionList",o.districtList),e.xp6(1),e.Akn(""),e.Q6J("type","submit")("text","Search")("btnId","accent"),e.xp6(2),e.Q6J("dataList",o.dataSource)("displayedColumns",o.displayedColumns))},dependencies:[i._Y,i.JJ,i.JL,i.nD,i.sg,i.u,y.a,b.h,C.r,S.a]});const J=[{path:"office",component:p}];class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(J),m.Bz]});var x=a(3281);class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[A.ez,r,x.m]})}}]);