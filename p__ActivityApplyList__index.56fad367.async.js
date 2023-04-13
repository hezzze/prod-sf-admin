"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[804],{64317:function(k,B,e){var h=e(1413),n=e(91),U=e(85893),f=e(22270),T=e(67294),C=e(66758),$=e(54425),A=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],g=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],z=T.forwardRef(function(t,I){var j=t.fieldProps,D=t.children,S=t.params,Z=t.proFieldProps,y=t.mode,i=t.valueEnum,R=t.request,L=t.showSearch,v=t.options,d=(0,n.Z)(t,A),u=(0,T.useContext)(C.Z);return(0,U.jsx)($.Z,(0,h.Z)((0,h.Z)({valueEnum:(0,f.h)(i),request:R,params:S,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,h.Z)({options:v,mode:y,showSearch:L,getPopupContainer:u.getPopupContainer},j),ref:I,proFieldProps:Z},d),{},{children:D}))}),M=T.forwardRef(function(t,I){var j=t.fieldProps,D=t.children,S=t.params,Z=t.proFieldProps,y=t.mode,i=t.valueEnum,R=t.request,L=t.options,v=(0,n.Z)(t,g),d=(0,h.Z)({options:L,mode:y||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},j),u=(0,T.useContext)(C.Z);return(0,U.jsx)($.Z,(0,h.Z)((0,h.Z)({valueEnum:(0,f.h)(i),request:R,params:S,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,h.Z)({getPopupContainer:u.getPopupContainer},d),ref:I,proFieldProps:Z},v),{},{children:D}))}),b=z,O=M,F=b;F.SearchSelect=O,F.displayName="ProFormComponent",B.Z=F},59793:function(k,B,e){e.r(B),e.d(B,{default:function(){return L}});var h=e(15009),n=e.n(h),U=e(99289),f=e.n(U),T=e(5574),C=e.n(T),$=e(97857),A=e.n($),g=e(35312);function z(v,d,u){return M.apply(this,arguments)}function M(){return M=f()(n()().mark(function v(d,u,w){return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,g.request)("/api/v1/admin/activity/apply/list",A()({method:"POST",headers:{"Content-Type":"application/json"},params:A()({},d),data:u},w||{})));case 1:case"end":return p.stop()}},v)})),M.apply(this,arguments)}function b(v,d,u){return O.apply(this,arguments)}function O(){return O=f()(n()().mark(function v(d,u,w){return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,g.request)("/api/v1/admin/activity/apply/modify",A()({method:"POST",headers:{"Content-Type":"application/json"},params:A()({},d),data:u},w||{})));case 1:case"end":return p.stop()}},v)})),O.apply(this,arguments)}var F=e(37476),t=e(64317),I=e(18814),j=e(68405),D=e(2048),S=e(2453),Z=e(85265),y=e(67294),i=e(85893),R=function(){var d=(0,y.useState)(!1),u=C()(d,2),w=u[0],W=u[1],p=(0,y.useState)(!1),H=C()(p,2),q=H[0],J=H[1],G=(0,y.useRef)(),_=(0,y.useState)(),Q=C()(_,2),a=Q[0],K=Q[1],ee=(0,g.useModel)("@@initialState"),E=ee.initialState,te=function(){var c=f()(n()().mark(function l(r){var o,P;return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=S.ZP.loading("Configuring"),console.log(r),s.prev=2,s.next=5,b({},{data:{status:+r.status},search:{apply_id:a==null?void 0:a.apply_id}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E==null||(P=E.currentUser)===null||P===void 0?void 0:P.token)}});case 5:return o(),S.ZP.success("Configuration is successful"),s.abrupt("return",!0);case 10:return s.prev=10,s.t0=s.catch(2),o(),S.ZP.error("Configuration failed, please try again!"),s.abrupt("return",!1);case 15:case"end":return s.stop()}},l,null,[[2,10]])}));return function(r){return c.apply(this,arguments)}}();function ae(c,l){return Y.apply(this,arguments)}function Y(){return Y=f()(n()().mark(function c(l,r){var o,P,m,s,N;return n()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,z({},{page:{page:l.current,page_size:l.pageSize},sort:{create_at:r.created_at==="ascend"?"asc":"desc"}},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E==null||(o=E.currentUser)===null||o===void 0?void 0:o.token)}});case 2:return N=x.sent,x.abrupt("return",{data:(P=N.data)===null||P===void 0||(m=P.list)===null||m===void 0?void 0:m.map(function(V){return Object.assign(V,{status:V.status,create_at:+"".concat(V.create_at,"000"),update_at:+"".concat(V.update_at,"000")})}),success:!0,total:(s=N.data)===null||s===void 0?void 0:s.total});case 4:case"end":return x.stop()}},c)})),Y.apply(this,arguments)}var re=(0,g.useIntl)(),X=[{title:"\u7533\u8BF7ID",dataIndex:"apply_id",tip:"The rule name is the unique key",render:function(l,r){return(0,i.jsx)("a",{onClick:function(){K(r),J(!0)},children:l})}},{title:"\u7528\u6237ID",dataIndex:"user_id",valueType:"text"},{title:"\u6D3B\u52A8ID",dataIndex:"activity_id",valueType:"text"},{title:"\u59D3\u540D",dataIndex:"name",valueType:"text"},{title:"\u624B\u673A\u53F7",dataIndex:"mobile",valueType:"digit"},{title:"\u62A5\u540D\u7406\u7531",dataIndex:"reason",valueType:"textarea"},{title:"\u7533\u8BF7\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{2:{text:"\u72B6\u60012",status:"Default"},0:{text:"\u72B6\u60010",status:"Processing"},1:{text:"\u72B6\u60011",status:"Success"},3:{text:"\u72B6\u60013",status:"Error"}}},{title:"\u521B\u5EFA\u65F6\u95F4",sorter:!0,dataIndex:"create_at",valueType:"dateTime"},{title:"\u66F4\u65B0\u65F6\u95F4",sorter:!0,dataIndex:"update_at",valueType:"dateTime"},{title:(0,i.jsx)(g.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(l,r){return[(0,i.jsx)("a",{onClick:function(){W(!0),K(r)},children:"\u7F16\u8F91"},"config")]}}];return(0,i.jsxs)(I._z,{children:[(0,i.jsx)(j.Z,{headerTitle:re.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:G,rowKey:"apply_id",search:{labelWidth:120},request:ae,columns:X,rowSelection:!1}),(0,i.jsx)(F.Y,{title:"\u66F4\u65B0\u6D3B\u52A8\u7533\u8BF7",width:640,initialValues:{status:"".concat(a==null?void 0:a.status)},onFinish:function(){var c=f()(n()().mark(function l(r){var o;return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,te(r);case 2:o=m.sent,o&&(W(!1),K(void 0),G.current&&G.current.reload());case 4:case"end":return m.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),open:w,children:(0,i.jsx)(t.Z,{name:"status",label:"\u72B6\u6001",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u72B6\u6001\uFF01"}],valueEnum:{0:"\u72B6\u60010",1:"\u72B6\u60011",2:"\u72B6\u60012",3:"\u72B6\u60013"}})}),(0,i.jsx)(Z.Z,{width:600,open:q,onClose:function(){K(void 0),J(!1)},closable:!1,children:(a==null?void 0:a.apply_id)&&(0,i.jsx)(D.vY,{column:2,title:a==null?void 0:a.apply_id,request:f()(n()().mark(function c(){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{data:a||{}});case 1:case"end":return r.stop()}},c)})),params:{id:a==null?void 0:a.apply_id},columns:X})})]})},L=R}}]);
