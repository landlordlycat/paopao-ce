import{d as V,a as W,_ as J,b as Z,c as G}from"./content-BMjusBPS.js";import{d as K,H as Q,c as q,r as U,e as l,f as $,k as a,ar as X,w as n,j as u,F as Y,u as ee,y as h,bk as i,A as _,x as m,q as c,Z as r,h as z}from"./@vue-CQsYufSu.js";import{u as te}from"./vuex-DNAxYlmG.js";import{u as se}from"./vue-router-zwGLnBy5.js";import{V as oe,A as ne,B as ae}from"./index-v3l9hw1O.js";import{c as le}from"./copy-to-clipboard-CA7crPat.js";import{k as ie,l as ue,n as ce,o as re,r as pe,s as _e,t as me,J as de,R as ve,q as he}from"./@vicons-C3A8jsfr.js";import{j as f,o as fe,M as ke,e as ge,P as ye,a as we,O as be}from"./naive-ui-DNcWoFGl.js";const xe={class:"post-item"},$e={class:"nickname-wrap"},Ce={class:"username-wrap"},Oe={class:"timestamp-mobile"},qe={class:"item-header-extra"},ze=["innerHTML"],Re=K({__name:"mobile-post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(T,{emit:S}){const g=se(),C=te(),y=Q(!0),o=T,w=S,d=t=>()=>z(f,null,{default:()=>z(t)}),B=q(()=>{let t=[];return o.isOwner||t.push({label:"私信 @"+o.post.user.username,key:"whisper",icon:d(pe)}),!o.isOwner&&o.addFollowAction&&(o.post.user.is_following?t.push({label:"取消关注 @"+o.post.user.username,key:"unfollow",icon:d(_e)}):t.push({label:"关注 @"+o.post.user.username,key:"follow",icon:d(me)})),!o.isOwner&&o.addFriendAction&&(o.post.user.is_friend?t.push({label:"删除好友 @"+o.post.user.username,key:"delete",icon:d(de)}):t.push({label:"添加朋友 @"+o.post.user.username,key:"requesting",icon:d(ve)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(he)}),t}),F=async t=>{switch(t){case"copyTweetLink":le(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":w("send-whisper",o.post.user);break;case"delete":case"requesting":w("handle-friend-action",o.post);break;case"follow":case"unfollow":w("handle-follow-action",o.post);break}},e=q({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},o.post);return t.contents.map(s=>{(+s.type==1||+s.type==2)&&t.texts.push(s),+s.type==3&&t.imgs.push(s),+s.type==4&&t.videos.push(s),+s.type==6&&t.links.push(s),+s.type==7&&t.attachments.push(s),+s.type==8&&t.charge_attachments.push(s)}),t},set:t=>{o.post.upvote_count=t.upvote_count,o.post.collection_count=t.collection_count}}),A=()=>{ne({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},P=()=>{ae({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},b=t=>{g.push({name:"post",query:{id:t}})},L=(t,s)=>{const p=t.target.dataset.detail;if(p&&p!=="post"){const v=p.split(":");v.length===2&&(C.commit("refresh"),v[0]==="tag"?g.push({name:"home",query:{q:v[1],t:"tag"}}):g.push({name:"user",query:{s:v[1]}}))}else p&&p==="post"?y.value=!y.value:b(s)};return(t,s)=>{const p=fe,v=U("router-link"),x=ke,M=ge,H=ye,O=W,j=J,D=Z,N=G,I=we,R=be;return l(),$("div",xe,[a(R,{"content-indented":""},X({avatar:n(()=>[a(p,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[u("span",$e,[a(v,{onClick:s[0]||(s[0]=h(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[_(m(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",Ce," @"+m(e.value.user.username),1),e.value.is_top?(l(),c(x,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[_(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(x,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[_(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(x,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[_(" 好友可见 ")]),_:1})):r("",!0),u("div",null,[u("span",Oe,m(i(oe)(e.value.created_on))+" "+m(e.value.ip_loc),1)])]),"header-extra":n(()=>[u("div",qe,[a(H,{placement:"bottom-end",trigger:"click",size:"small",options:B.value,onSelect:F},{default:n(()=>[a(M,{quaternary:"",circle:""},{icon:n(()=>[a(i(f),null,{default:n(()=>[a(i(ie))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(l(),c(O,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c(O,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(j,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(D,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(N,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[a(I,{justify:"space-between"},{default:n(()=>[u("div",{class:"opt-item",onClick:h(A,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ue))]),_:1}),_(" "+m(e.value.upvote_count),1)]),u("div",{class:"opt-item",onClick:s[3]||(s[3]=h(k=>b(e.value.id),["stop"]))},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ce))]),_:1}),_(" "+m(e.value.comment_count),1)]),u("div",{class:"opt-item",onClick:h(P,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(re))]),_:1}),_(" "+m(e.value.collection_count),1)])]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[u("div",{onClick:s[2]||(s[2]=k=>b(e.value.id))},[(l(!0),$(Y,null,ee(e.value.texts,k=>(l(),$("span",{key:k.id,class:"post-text",onClick:s[1]||(s[1]=h(E=>L(E,e.value.id),["stop"])),innerHTML:i(V)(k.content,"展开","收起",i(C).state.profile.tweetMobileEllipsisSize,y.value)},null,8,ze))),128))])]),key:"0"}:void 0]),1024)])}}}),Te={class:"nickname-wrap"},Se={class:"username-wrap"},Be={class:"item-header-extra"},Fe={class:"timestamp"},Ae=["innerHTML"],Ee=K({__name:"post-item",props:{post:{},isOwner:{type:Boolean},addFriendAction:{type:Boolean},addFollowAction:{type:Boolean}},emits:["send-whisper","handle-follow-action","handle-friend-action"],setup(T,{emit:S}){const g=se(),C=te(),y=Q(!0),o=T,w=S,d=t=>()=>z(f,null,{default:()=>z(t)}),B=q(()=>{let t=[];return o.isOwner||t.push({label:"私信 @"+o.post.user.username,key:"whisper",icon:d(pe)}),!o.isOwner&&o.addFollowAction&&(o.post.user.is_following?t.push({label:"取消关注 @"+o.post.user.username,key:"unfollow",icon:d(_e)}):t.push({label:"关注 @"+o.post.user.username,key:"follow",icon:d(me)})),!o.isOwner&&o.addFriendAction&&(o.post.user.is_friend?t.push({label:"删除好友 @"+o.post.user.username,key:"delete",icon:d(de)}):t.push({label:"添加朋友 @"+o.post.user.username,key:"requesting",icon:d(ve)})),t.push({label:"复制链接",key:"copyTweetLink",icon:d(he)}),t}),F=async t=>{switch(t){case"copyTweetLink":le(`${window.location.origin}/#/post?id=${e.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板");break;case"whisper":w("send-whisper",o.post.user);break;case"delete":case"requesting":w("handle-friend-action",o.post);break;case"follow":case"unfollow":w("handle-follow-action",o.post);break}},e=q({get:()=>{let t=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},o.post);return t.contents.map(s=>{(+s.type==1||+s.type==2)&&t.texts.push(s),+s.type==3&&t.imgs.push(s),+s.type==4&&t.videos.push(s),+s.type==6&&t.links.push(s),+s.type==7&&t.attachments.push(s),+s.type==8&&t.charge_attachments.push(s)}),t},set:t=>{o.post.upvote_count=t.upvote_count,o.post.collection_count=t.collection_count}}),A=()=>{ne({id:e.value.id}).then(t=>{t.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count>0?e.value.upvote_count-1:0}}).catch(t=>{console.log(t)})},P=()=>{ae({id:e.value.id}).then(t=>{t.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count>0?e.value.collection_count-1:0}}).catch(t=>{console.log(t)})},b=t=>{g.push({name:"post",query:{id:t}})},L=(t,s)=>{const p=t.target.dataset.detail;if(p&&p!=="post"){const v=p.split(":");v.length===2&&(C.commit("refresh"),v[0]==="tag"?g.push({name:"home",query:{q:v[1],t:"tag"}}):g.push({name:"user",query:{s:v[1]}}))}else p&&p==="post"?y.value=!y.value:b(s)};return(t,s)=>{const p=fe,v=U("router-link"),x=ke,M=ge,H=ye,O=W,j=J,D=Z,N=G,I=we,R=be;return l(),$("div",{class:"post-item",onClick:s[3]||(s[3]=k=>b(e.value.id))},[a(R,{"content-indented":""},X({avatar:n(()=>[a(p,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[u("span",Te,[a(v,{onClick:s[0]||(s[0]=h(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[_(m(e.value.user.nickname),1)]),_:1},8,["to"])]),u("span",Se," @"+m(e.value.user.username),1),e.value.is_top?(l(),c(x,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[_(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(l(),c(x,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[_(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(l(),c(x,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[_(" 好友可见 ")]),_:1})):r("",!0)]),"header-extra":n(()=>[u("div",Be,[u("span",Fe,m(e.value.ip_loc?e.value.ip_loc+" · ":e.value.ip_loc)+" "+m(i(oe)(e.value.created_on)),1),a(H,{placement:"bottom-end",trigger:"hover",size:"small",options:B.value,onSelect:F},{default:n(()=>[a(M,{quaternary:"",circle:""},{icon:n(()=>[a(i(f),null,{default:n(()=>[a(i(ie))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(l(),c(O,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(l(),c(O,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(l(),c(j,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(l(),c(D,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(l(),c(N,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[a(I,{justify:"space-between"},{default:n(()=>[u("div",{class:"opt-item hover",onClick:h(A,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ue))]),_:1}),_(" "+m(e.value.upvote_count),1)]),u("div",{class:"opt-item hover",onClick:s[2]||(s[2]=h(k=>b(e.value.id),["stop"]))},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(ce))]),_:1}),_(" "+m(e.value.comment_count),1)]),u("div",{class:"opt-item hover",onClick:h(P,["stop"])},[a(i(f),{size:"18",class:"opt-item-icon"},{default:n(()=>[a(i(re))]),_:1}),_(" "+m(e.value.collection_count),1)])]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[(l(!0),$(Y,null,ee(e.value.texts,k=>(l(),$("span",{key:k.id,class:"post-text hover",onClick:s[1]||(s[1]=h(E=>L(E,e.value.id),["stop"])),innerHTML:i(V)(k.content,"展开","收起",i(C).state.profile.tweetWebEllipsisSize,y.value)},null,8,Ae))),128))]),key:"0"}:void 0]),1024)])}}});export{Ee as _,Re as a};
