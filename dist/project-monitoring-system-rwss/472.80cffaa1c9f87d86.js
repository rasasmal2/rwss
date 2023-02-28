"use strict";(self.webpackChunkProjectMonitoringSystem_RWSS=self.webpackChunkProjectMonitoringSystem_RWSS||[]).push([[472],{9664:(Z,M,r)=>{r.d(M,{h:()=>g});var n=r(4537),u=r(92),c=r(8692),e=r(8659),x=r(9665),P=r(8033),v=r(1379);function A(m,i){if(1&m&&(n.TgZ(0,"mat-option",5),n._uU(1),n.qZA()),2&m){const s=i.$implicit,h=n.oxw();n.Q6J("value",h.valueOnly?s.name:s),n.xp6(1),n.hij(" ",s.name," ")}}function N(m,i){1&m&&(n.TgZ(0,"mat-option"),n._uU(1," No result found "),n.qZA())}function T(m,i){1&m&&(n.TgZ(0,"mat-error"),n._uU(1," This field is "),n.TgZ(2,"strong"),n._uU(3,"required"),n.qZA()())}class g{constructor(i){this.controlContainer=i,this.type="",this.valueOnly=!1,this.control=u.TO,this.onChangeValue=new n.vpe,this.searchFilterCtrl=new u.p4}ngOnChanges(i){this.optionList&&this.optionList.length>0&&(this.options=JSON.parse(JSON.stringify(this.optionList))),this.controlContainer&&this.formControlName&&(this.selectCtrl=this.controlContainer.control?.get(this.formControlName),console.log("this.control=",this.selectCtrl))}ngOnInit(){this.optionList&&this.optionList.length>0&&(this.options=JSON.parse(JSON.stringify(this.optionList)),console.log("this.options==",this.options))}writeValue(i){console.log("value----=",i)}registerOnChange(i){}registerOnTouched(i){}setDisabledState(i){}onSelect(i){console.log("value==",i),this.onChangeValue.emit(i)}search(){let i=this.searchFilterCtrl.value;console.log("query",i);let s=this.select(i);console.log("result=",s),this.options=s}select(i){let s=[];for(let h of this.optionList)h.name.toLowerCase().indexOf(i)>-1&&s.push(h);return s}}g.\u0275fac=function(i){return new(i||g)(n.Y36(u.gN))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-select-search"]],inputs:{label:"label",type:"type",placeholder:"placeholder",formControlName:"formControlName",optionList:"optionList",valueOnly:"valueOnly",style:"style"},outputs:{onChangeValue:"onChangeValue"},features:[n._Bn([{provide:u.JU,useExisting:(0,n.Gpc)(()=>g),multi:!0}]),n.TTD],decls:9,vars:9,consts:[["ngDefaultControl","",3,"formControl","placeholder","openedChange","selectionChange"],["matInput","","focused","'true'","type","text","autocomplete","off","placeholder","search",1,"myInput-search",3,"formControl","keyup"],["myInput",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"]],template:function(i,s){if(1&i){const h=n.EpF();n.TgZ(0,"mat-form-field")(1,"mat-label"),n._uU(2),n.qZA(),n.TgZ(3,"mat-select",0),n.NdJ("openedChange",function(){n.CHM(h);const C=n.MAs(5);return n.KtG(C.focus())})("selectionChange",function(C){return s.onSelect(C.value)}),n.TgZ(4,"input",1,2),n.NdJ("keyup",function(){return s.search()}),n.qZA(),n.YNc(6,A,2,2,"mat-option",3),n.YNc(7,N,2,0,"mat-option",4),n.qZA(),n.YNc(8,T,4,0,"mat-error",4),n.qZA()}2&i&&(n.Akn(s.style),n.xp6(2),n.Oqu(s.label),n.xp6(1),n.Q6J("formControl",s.selectCtrl)("placeholder",s.placeholder),n.xp6(1),n.Q6J("formControl",s.searchFilterCtrl),n.xp6(2),n.Q6J("ngForOf",s.options),n.xp6(1),n.Q6J("ngIf",s.options&&0==s.options.length),n.xp6(1),n.Q6J("ngIf",s.selectCtrl.hasError("required")))},dependencies:[c.sg,c.O5,u.Fj,u.JJ,u.oH,e.KE,e.hX,e.TO,x.Nt,P.gD,v.ey],styles:[".myInput-search[_ngcontent-%COMP%]{padding:10px;border-bottom:1px solid!important;width:100%}"]})},2472:(Z,M,r)=>{r.r(M),r.d(M,{ManageProjectsModule:()=>_});var n=r(8692),u=r(3580),c=r(92),e=r(4537),x=r(8292),P=r(2135),v=r(5554),A=r(8489),N=r(9664),T=r(6909),g=r(324),m=r(3538),i=r(3911),s=r(8659),h=r(9665);function S(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," No. "),e.qZA())}function C(o,t){if(1&o&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&o){const a=t.index;e.xp6(1),e.hij(" ",a+1," ")}}function O(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Milestone"),e.qZA())}function b(o,t){if(1&o&&(e.TgZ(0,"td",19)(1,"p"),e._uU(2),e.qZA()()),2&o){const a=t.$implicit;e.xp6(2),e.Oqu(a.milestone)}}function w(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Start Time"),e.qZA())}function J(o,t){if(1&o&&(e.TgZ(0,"td",19)(1,"p"),e._uU(2),e.qZA()()),2&o){const a=t.$implicit;e.xp6(2),e.Oqu(a.startDate)}}function R(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," End Time"),e.qZA())}function L(o,t){if(1&o&&(e.TgZ(0,"td",19)(1,"p"),e._uU(2),e.qZA()()),2&o){const a=t.$implicit;e.xp6(2),e.Oqu(a.endDate)}}function I(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Timeline"),e.qZA())}function F(o,t){if(1&o&&(e.TgZ(0,"td",19)(1,"p"),e._uU(2),e.qZA()()),2&o){const a=t.$implicit;e.xp6(2),e.Oqu(a.timeline)}}function Q(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Payment %"),e.qZA())}function U(o,t){if(1&o&&(e.TgZ(0,"td",19)(1,"p"),e._uU(2),e.qZA()()),2&o){const a=t.$implicit;e.xp6(2),e.Oqu(a.payment)}}function Y(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Enter Progress %"),e.qZA())}const E=function(){return{standalone:!0}};function k(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"td",19)(1,"mat-form-field",20)(2,"input",21),e.NdJ("ngModelChange",function(l){const y=e.CHM(a).$implicit;return e.KtG(y.progress=l)}),e.qZA()()()}if(2&o){const a=t.$implicit;e.xp6(2),e.Q6J("value",a.progress)("ngModel",a.progress)("ngModelOptions",e.DdM(3,E))}}function B(o,t){1&o&&(e.TgZ(0,"th",18),e._uU(1," Enter Payment Made (Cr)"),e.qZA())}function G(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"td",19)(1,"mat-form-field",22)(2,"input",23),e.NdJ("ngModelChange",function(l){const y=e.CHM(a).$implicit;return e.KtG(y.paymentMode=l)}),e.qZA()()()}if(2&o){const a=t.$implicit;e.xp6(2),e.Q6J("value",a.paymentMode)("ngModel",a.paymentMode)("ngModelOptions",e.DdM(3,E))}}function V(o,t){1&o&&e._UZ(0,"tr",24)}function H(o,t){1&o&&e._UZ(0,"tr",25)}class D{constructor(t,a,p){this.fb=t,this._formBuilder=a,this.tosasService=p,this.dataList=[],this.displayedColumns=["position","milestone","startDate","endDate","timeline","payment","progress","paymentMode"],this.columnNames=[],this.dataSource=new i.by,this.isLoading=!0,this.VOForm=c.nJ,this.isEditableNew=!0,this.paginator=m.NW,this.changeMilestone=new e.vpe}ngOnInit(){this.dataSource=new i.by([{milestone:"Survey, Design & Drawing",startDate:"Apr-2022",endDate:"Sep-2022",timeline:"6 months",payment:"1%",progress:"",paymentMode:""},{milestone:"Construction of Intake Well",startDate:"Oct-2022",endDate:"Apr-2023",timeline:"7 months",payment:"3%",progress:"",paymentMode:""},{milestone:"Supply of pipes, laying ,fitting & fixing from Raw water source to WTP",startDate:"Oct-2022",endDate:"May-2023",timeline:"8 months",payment:"3%",progress:"",paymentMode:""},{milestone:"Completion of WTP work",startDate:"Oct-2022",endDate:"Aug-2023",timeline:"11 months",payment:"3%",progress:"",paymentMode:""},{milestone:"Supply of pipes, laying ,fitting & fixing from Clear water rising main to Elevated storage Reservoirs",startDate:"Mar-2023",endDate:"Aug-2023",timeline:"6 months",payment:"20%",progress:"",paymentMode:""},{milestone:"Design, Construction, Testing & Commissioning of ESR",startDate:"Oct-2022",endDate:"Aug-2023",timeline:"11 months",payment:"30%",progress:"",paymentMode:""},{milestone:"Supply of HDPE Pipes, laying and jointing to complete distribution system",startDate:"Oct-2022",endDate:"Aug-2023",timeline:"11 months",payment:"30%",progress:"",paymentMode:""},{milestone:"Supplying, fitting & fixing of flow meter, PLC Scada and all other Instruments",startDate:"Oct-2022",endDate:"Nov-2023",timeline:"2 months",payment:"3%",progress:"",paymentMode:""},{milestone:"Completion of inspection, Testing, Trial Run & final Acceptance",startDate:"Dec-2023",endDate:"Feb-2024",timeline:"3 months",payment:"10%",progress:"",paymentMode:""}])}submit(t){this.tosasService.success("Milestone Submitted Successfully")}save(t){this.tosasService.success("Milestone Saved Successfully")}onClickEditTableAction(t){console.log("edit event==",t)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}onPaginateChange(t,a){setTimeout(p=>{let y=0==t.length?0:`${t.pageSize*t.pageIndex+1} - ${t.length<t.pageSize*(t.pageIndex+1)?t.length:t.pageSize*(t.pageIndex+1)}`,X=`Page ${0==t.length?"0 of 0":`${t.pageIndex+1} of ${t.getNumberOfPages()}`} (${y} of ${t.length})`;a.length>=1&&(a[0].innerHTML=X)},0,t.pageIndex)}saveandnext(){console.log("this.VOForm ==",this.VOForm.value)}}function K(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"section",6)(1,"div",7)(2,"div",8)(3,"h5"),e._uU(4,"Search Project"),e.qZA()(),e.TgZ(5,"div",9)(6,"form",10),e._UZ(7,"app-select-search",11)(8,"app-text-field",12)(9,"app-date-picker",13)(10,"app-date-picker",14),e.TgZ(11,"div",15)(12,"app-button",16),e.NdJ("click",function(l){e.CHM(a);const d=e.oxw();return e.KtG(d.onSearchProject(l))}),e.qZA()()()()()()}if(2&o){const a=e.oxw();e.xp6(6),e.Q6J("formGroup",a.projectFormGroup),e.xp6(1),e.Q6J("label","Project Type")("placeholder","Select Project Type")("optionList",a.projectTypeList),e.xp6(1),e.Akn(""),e.Q6J("isReadOnly","false")("maxlength",100)("label","Project Name")("placeholder","Enter Project Name"),e.xp6(1),e.Q6J("label","Project Start Date")("placeholder","Enter Project Start Date"),e.xp6(1),e.Q6J("label","Project End Date")("placeholder","Enter Project End Date"),e.xp6(2),e.Akn("float:right;margin-right:10px;"),e.Q6J("text","Search")("btnId","default")("type","submit")}}function q(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"section",17)(1,"div",7)(2,"div",8)(3,"h5"),e._uU(4,"Project List"),e.qZA()(),e.TgZ(5,"div",9)(6,"ag-grid-angular",18),e.NdJ("gridReady",function(l){e.CHM(a);const d=e.oxw();return e.KtG(d.onGridReady(l))})("cellClicked",function(l){e.CHM(a);const d=e.oxw();return e.KtG(d.onCellClicked(l))}),e.qZA()()()()}if(2&o){const a=e.oxw();e.xp6(6),e.Q6J("columnDefs",a.columnDefs)("defaultColDef",a.defaultColDef)("rowData",a.rowData)("paginationAutoPageSize",!0)("pagination",!0)("suppressRowClickSelection",!0)}}function W(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"section",19)(1,"div",20)(2,"span",21),e.NdJ("click",function(){e.CHM(a);const l=e.oxw();return e.KtG(l.goBack())}),e._UZ(3,"i",22),e._uU(4," Back "),e.qZA()(),e._UZ(5,"app-milestone-details"),e.qZA()}}D.\u0275fac=function(t){return new(t||D)(e.Y36(c.QS),e.Y36(c.QS),e.Y36(x._W))},D.\u0275cmp=e.Xpm({type:D,selectors:[["app-milestone-details"]],viewQuery:function(t,a){if(1&t&&e.Gf(m.NW,5),2&t){let p;e.iGM(p=e.CRH())&&(a.paginator=p.first)}},outputs:{changeMilestone:"changeMilestone"},decls:35,vars:13,consts:[[1,"card"],[1,"mat-elevation-z8","card-body"],["autocomplete","off"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","milestone"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","timeline"],["matColumnDef","payment"],["matColumnDef","progress"],["matColumnDef","paymentMode"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"text","btnId","type","click"],["mat-header-cell",""],["mat-cell",""],[2,"width","100px"],["matInput","","placeholder","Enter Progress %",3,"value","ngModel","ngModelOptions","ngModelChange"],[2,"width","150px"],["matInput","","placeholder","Enter Payment Made (Cr)",3,"value","ngModel","ngModelOptions","ngModelChange"],["mat-header-row",""],["mat-row",""]],template:function(t,a){1&t&&(e.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"form",2)(4,"table",3,4),e.ynx(6,5),e.YNc(7,S,2,0,"th",6),e.YNc(8,C,2,1,"td",7),e.BQk(),e.ynx(9,8),e.YNc(10,O,2,0,"th",6),e.YNc(11,b,3,1,"td",7),e.BQk(),e.ynx(12,9),e.YNc(13,w,2,0,"th",6),e.YNc(14,J,3,1,"td",7),e.BQk(),e.ynx(15,10),e.YNc(16,R,2,0,"th",6),e.YNc(17,L,3,1,"td",7),e.BQk(),e.ynx(18,11),e.YNc(19,I,2,0,"th",6),e.YNc(20,F,3,1,"td",7),e.BQk(),e.ynx(21,12),e.YNc(22,Q,2,0,"th",6),e.YNc(23,U,3,1,"td",7),e.BQk(),e.ynx(24,13),e.YNc(25,Y,2,0,"th",6),e.YNc(26,k,3,4,"td",7),e.BQk(),e.ynx(27,14),e.YNc(28,B,2,0,"th",6),e.YNc(29,G,3,4,"td",7),e.BQk(),e.YNc(30,V,1,0,"tr",15),e.YNc(31,H,1,0,"tr",16),e.qZA(),e.TgZ(32,"div")(33,"app-button",17),e.NdJ("click",function(l){return a.submit(l)}),e.qZA(),e.TgZ(34,"app-button",17),e.NdJ("click",function(l){return a.save(l)}),e.qZA()()()()()()),2&t&&(e.xp6(4),e.Q6J("dataSource",a.dataSource),e.xp6(26),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(2),e.Akn("float:right;margin-right:10px;"),e.Q6J("text","Submit")("btnId","primary")("type","submit"),e.xp6(1),e.Akn("float:right;margin-right:10px;"),e.Q6J("text","Save as draft")("btnId","secondary")("type","submit"))},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.On,c.F,s.KE,h.Nt,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,T.r]});class j{constructor(t,a,p,l){this.toastService=t,this.cmnService=a,this._formBuilder=p,this.router=l,this.showProjectList=!1,this.showProjectDetails=!1,this.showProjectSearch=!0,this.columnDefs=[{field:"projectName",cellStyle:{color:"#046A38",cursor:"pointer"},cellRenderer:d=>'<span title="'+d.value+'">'+d.value+"</span>"},{field:"projectType"},{field:"projectStartDate"},{field:"projectEndDate"},{field:"circle"},{field:"division"}],this.defaultColDef={flex:1,minWidth:150,filter:!0},this.projectFormGroup=c.nJ,this.projectTypeList=[{code:"SVMW",name:"SVMW"},{code:"Mega",name:"Mega"}],this.projectList=[{code:"001",name:"Project 1"},{code:"002",name:"Project 2"}],this.executingAgencyList=[{code:"001",name:"Executing Ahency 1"},{code:"002",name:"Executing Ahency 2"}]}ngOnInit(){this.projectFormGroup=this._formBuilder.group({projectName:[""],projectType:[""],projectStartDate:[""],projectEndDate:[""]})}onGridReady(t){this.rowData=[{projectName:"Execution of Rural Piped water project in Khurdah District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2024",circle:"C3",division:"D2",projectValue:"300Cr",executingAgency:"TPL",registeredAddress:"Mumbai",contactPerson:"S Ghosh"},{projectName:"Execution of Rural Piped water project in Puri District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2024",circle:"C1",division:"D1",projectValue:"200Cr",executingAgency:"L&T",registeredAddress:"Mumbai",contactPerson:"S Mehta"},{projectName:"Execution of Rural Piped water project in Balangir District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2024",circle:"C4",division:"D1",projectValue:"200Cr",executingAgency:"NCC",registeredAddress:"Hydrabad",contactPerson:"S Muttu"},{projectName:"Execution of Rural Piped water project in Ganjam District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2024",circle:"C2",division:"D1",projectValue:"300Cr",executingAgency:"NCC",registeredAddress:"Hydrabad",contactPerson:"S Muttu"},{projectName:"Execution of Rural Piped water project in Koraput District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2024",circle:"C5",division:"D1",projectValue:"300Cr",executingAgency:"NCC",registeredAddress:"Hydrabad",contactPerson:"S Muttu"},{projectName:"Execution of Rural Piped water project in Koraput District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2023",circle:"C5",division:"D1",projectValue:"100Cr",executingAgency:"NCC",registeredAddress:"Hydrabad",contactPerson:"S Muttu"},{projectName:"Execution of Rural Piped water project in Malkangiri District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2025",circle:"C7",division:"D4",projectValue:"400Cr",executingAgency:"NCC",registeredAddress:"Hydrabad",contactPerson:"S Muttu"},{projectName:"Execution of Rural Piped water project in Angul District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2025",circle:"C1",division:"D3",projectValue:"200Cr",executingAgency:"Tata",registeredAddress:"Mumbai",contactPerson:"P Rao"},{projectName:"Execution of Rural Piped water project in Nayagarh District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2025",circle:"C2",division:"D1",projectValue:"300Cr",executingAgency:"NCC",registeredAddress:"Hydrabad",contactPerson:"S Muttu"},{projectName:"Execution of Rural Piped water project in Kendrapara District",projectType:"Mega",projectStartDate:"04/01/2022",projectEndDate:"03/30/2024",circle:"C1",division:"D2",projectValue:"200Cr",executingAgency:"L&T",registeredAddress:"Mumbai",contactPerson:"S Mehta"}]}onCellClicked(t){window.scroll({top:0,left:0,behavior:"smooth"}),this.showProjectDetails=!0,this.showProjectList=!1,this.showProjectSearch=!1}onSearchProject(t){t.preventDefault(),this.projectFormGroup.value.projectName||this.projectFormGroup.value.projectType||this.projectFormGroup.value.projectStartDate||this.projectFormGroup.value.projectEndDate?this.showProjectList=!0:this.toastService.warning("Please select one search field")}goBack(){this.showProjectDetails=!1,this.showProjectList=!0,this.showProjectSearch=!0}}j.\u0275fac=function(t){return new(t||j)(e.Y36(x._W),e.Y36(P.R),e.Y36(c.QS),e.Y36(u.F0))},j.\u0275cmp=e.Xpm({type:j,selectors:[["app-project-search"]],decls:9,vars:3,consts:[[1,"container",2,"padding-top","10px"],[1,"row"],[1,"col-lg-10","col-md-10","heading-cls"],["id","main-section","class","search-project-dashboard",4,"ngIf"],["id","search-project-table","class","search-project-table",4,"ngIf"],["id","project-dashboard-details","class","project-dashboard-details",4,"ngIf"],["id","main-section",1,"search-project-dashboard"],[1,"container"],[1,"label-header"],[1,"marginTopForFormCustomClass1"],["id","frmIndexPage",3,"formGroup"],["formControlName","projectType",1,"property-form",3,"label","placeholder","optionList"],["formControlName","projectName",1,"property-form",3,"isReadOnly","maxlength","label","placeholder"],["formControlName","projectStartDate",1,"property-form",3,"label","placeholder"],["formControlName","projectEndDate",1,"property-form",3,"label","placeholder"],[2,"height","40px"],[3,"text","btnId","type","click"],["id","search-project-table",1,"search-project-table"],[1,"ag-theme-alpine",2,"width","100%","height","50vh",3,"columnDefs","defaultColDef","rowData","paginationAutoPageSize","pagination","suppressRowClickSelection","gridReady","cellClicked"],["id","project-dashboard-details",1,"project-dashboard-details"],[1,"container",2,"margin-bottom","10px"],[2,"cursor","pointer",3,"click"],[1,"icofont-arrow-left","go-back"]],template:function(t,a){1&t&&(e.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"span"),e._uU(5,"Manage Projects"),e.qZA()()()()(),e.YNc(6,K,13,19,"section",3),e.YNc(7,q,7,6,"section",4),e.YNc(8,W,6,0,"section",5)),2&t&&(e.xp6(6),e.Q6J("ngIf",a.showProjectSearch),e.xp6(1),e.Q6J("ngIf",a.showProjectList),e.xp6(1),e.Q6J("ngIf",a.showProjectDetails))},dependencies:[n.O5,c._Y,c.JJ,c.JL,c.nD,c.sg,c.u,v.N8,A.a,N.h,T.r,g.L,D],styles:[".search-project-dashboard[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.label-header[_ngcontent-%COMP%]{background:#a1c1e1;text-align:center;padding:1px;border-radius:3px}.search-project-table[_ngcontent-%COMP%], .project-dashboard-details[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}.marginTopForFormCustomClass1[_ngcontent-%COMP%]{margin-top:10px}.go-back[_ngcontent-%COMP%]:hover{color:#01458e}"]});const $=[{path:"",component:j}];class f{}f.\u0275fac=function(t){return new(t||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[u.Bz.forChild($),u.Bz]});var z=r(3281);class _{}_.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[n.ez,f,z.m]})}}]);