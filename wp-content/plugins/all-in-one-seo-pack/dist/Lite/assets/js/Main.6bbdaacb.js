import{k as d}from"./links.da3be5e7.js";import{a as l}from"./addons.1640e0f5.js";import{o,c as n,r as f,b as _,w as h,B as g}from"./vue.runtime.esm-bundler.c297bd08.js";import{_ as e}from"./_plugin-vue_export-helper.8a32e791.js";import"./index.6d5de07f.js";import"./Caret.8cc4e863.js";/* empty css                                            */import"./default-i18n.3881921e.js";import"./constants.44daa6bb.js";/* empty css                                              */import{R as x,a as $}from"./RequiresUpdate.9ef90abe.js";import"./TruSeoHighlighter.271256b4.js";/* empty css                                              */import{C as v}from"./Index.9eadf328.js";import b from"./Redirects.22d2aac3.js";import"./isArrayLikeObject.10b615a9.js";import"./upperFirst.d65414ba.js";import"./_stringToArray.a4422725.js";import"./RequiresUpdate.15ef4626.js";import"./postContent.d84eb650.js";import"./cleanForSlug.a67f7e84.js";import"./Ellipse.404f2a7a.js";import"./toFinite.c2274946.js";import"./license.9b17b7f1.js";import"./allowed.e458daf4.js";/* empty css             */import"./params.f0608262.js";import"./SaveChanges.f4365226.js";import"./Header.ee1f5460.js";import"./LicenseKeyBar.ceffdc3c.js";import"./LogoGear.680bae68.js";import"./AnimatedNumber.b0eef325.js";import"./numbers.c7cb4085.js";import"./Logo.be6331d8.js";import"./Support.b6dee74c.js";import"./Tabs.bb1d552b.js";import"./TruSeoScore.29220195.js";import"./Information.6e632c27.js";import"./Slide.d2bcb99c.js";import"./Date.c1eb67dc.js";import"./Exclamation.a9500c7c.js";import"./Url.48bd0261.js";import"./Gear.5638ce0a.js";import"./Redirects.714a1c7d.js";import"./Index.2b28d5a5.js";import"./JsonValues.870a4901.js";import"./strings.01407ca7.js";import"./isString.395b35ce.js";import"./ProBadge.55f2290c.js";import"./External.e7677bf7.js";import"./Checkbox.1f4414d4.js";import"./Checkmark.dcb95692.js";import"./Row.b4141467.js";import"./Tooltip.42b4f815.js";import"./Plus.8f11b575.js";import"./Blur.f86c14ff.js";import"./Card.173e6e4f.js";import"./Table.a0011880.js";import"./Index.7d0ce25e.js";import"./RequiredPlans.eed634df.js";import"./AddonConditions.b9f54572.js";const y={};function S(t,r){return o(),n("div")}const R=e(y,[["render",S]]),w={};function A(t,r){return o(),n("div")}const B=e(w,[["render",A]]),C={};function k(t,r){return o(),n("div")}const E=e(C,[["render",k]]),L={};function T(t,r){return o(),n("div")}const M=e(L,[["render",T]]),U={};function q(t,r){return o(),n("div")}const N=e(U,[["render",q]]);const D={setup(){return{redirectsStore:d()}},components:{CoreMain:v,FullSiteRedirect:R,ImportExport:B,Logs:E,Logs404:M,Redirects:b,Settings:N},mixins:[x,$],data(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="redirects"&&this.$route.name!=="groups"&&this.$route.name!=="logs-404"&&this.$route.name!=="logs"&&this.$route.name!=="import-export"},excludeTabs(){var r,m,p,s,i,c,a,u;const t=l.isActive("aioseo-redirects")?this.getExcludedUpdateTabs("aioseo-redirects"):this.getExcludedActivationTabs("aioseo-redirects");return(p=(m=(r=this.redirectsStore.options)==null?void 0:r.logs)==null?void 0:m.log404)!=null&&p.enabled||t.push("logs-404"),(!((c=(i=(s=this.redirectsStore.options)==null?void 0:s.logs)==null?void 0:i.redirects)!=null&&c.enabled)||((u=(a=this.redirectsStore.options)==null?void 0:a.main)==null?void 0:u.method)==="server")&&t.push("logs"),t}}};function F(t,r,m,p,s,i){const c=f("core-main");return o(),_(c,{"page-name":s.strings.pageName,"show-save-button":i.showSaveButton,"exclude-tabs":i.excludeTabs},{default:h(()=>[(o(),_(g(t.$route.name)))]),_:1},8,["page-name","show-save-button","exclude-tabs"])}const Kt=e(D,[["render",F]]);export{Kt as default};
