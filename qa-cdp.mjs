const targets = await (await fetch('http://127.0.0.1:9222/json/list')).json();
const page = targets.find((item) => item.type === 'page' && (item.url.startsWith('http://127.0.0.1:8765') || item.url.includes('hr-workbench-2026.wittyokapi128.chatgpt.site')));
if (!page) throw new Error('Preview page was not found.');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve,reject) => { ws.onopen = resolve; ws.onerror = reject; });
let nextId = 0;
const pending = new Map();
ws.onmessage = (event) => { const message = JSON.parse(event.data); if (message.id && pending.has(message.id)) { const p=pending.get(message.id); pending.delete(message.id); message.error ? p.reject(message.error) : p.resolve(message.result); } };
function call(method,params={}) { const id=++nextId; ws.send(JSON.stringify({id,method,params})); return new Promise((resolve,reject)=>pending.set(id,{resolve,reject})); }
async function evaluate(expression) { const result=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true}); if(result.exceptionDetails) throw new Error(result.exceptionDetails.text); return result.result?.value; }
async function wait(expression) { for(let i=0;i<60;i++){if(await evaluate(expression))return; await new Promise(r=>setTimeout(r,100));} const state=await evaluate("({url:location.href,title:document.title,text:document.body.innerText.slice(0,500),hasFns:!!document.querySelector('script[src*=hr-functions]')})"); throw new Error(`Timed out: ${expression}; ${JSON.stringify(state)}`); }
async function mouse(selector) { const found=await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)return false;e.scrollIntoView({behavior:'instant',block:'center'});return true})()`); if(!found)throw new Error(`Missing ${selector}`); await new Promise(r=>setTimeout(r,250)); const rect=await evaluate(`(()=>{const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2,top:r.top,bottom:r.bottom}})()`); await call('Input.dispatchMouseEvent',{type:'mouseMoved',x:rect.x,y:rect.y,buttons:0}); await call('Input.dispatchMouseEvent',{type:'mousePressed',x:rect.x,y:rect.y,button:'left',buttons:1,clickCount:1}); await new Promise(r=>setTimeout(r,70)); await call('Input.dispatchMouseEvent',{type:'mouseReleased',x:rect.x,y:rect.y,button:'left',buttons:0,clickCount:1}); }
async function domClick(selector) { const ok=await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)return false;e.click();return true})()`); if(!ok)throw new Error(`Missing ${selector}`); }
await call('Page.enable'); await call('Runtime.enable');
await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1200,deviceScaleFactor:1,mobile:false});
try { await call('Browser.grantPermissions',{origin:'http://127.0.0.1:8765',permissions:['clipboardReadWrite','clipboardSanitizedWrite']}); } catch {}
if (page.url.startsWith('https://')) await call('Page.reload',{ignoreCache:true});
await wait("document.querySelector('#open-hr-functions')");
console.log('before open',await evaluate("(async()=>({resource:performance.getEntriesByType('resource').filter(r=>r.name.includes('hr-functions')).map(r=>r.name+':'+r.responseStatus),catalog:await fetch('assets/hr-functions-catalog.json').then(r=>({status:r.status,body:r.headers.get('content-type')})).catch(e=>String(e)),card:!!document.querySelector('#open-hr-functions'),dialog:!!document.querySelector('#task-dialog')}))()"));
await domClick('#open-hr-functions'); await new Promise(r=>setTimeout(r,500)); console.log('after open',await evaluate("({open:document.querySelector('#task-dialog').open,text:document.querySelector('#dialog-content').innerText.slice(0,220),cards:document.querySelectorAll('.function-top-card').length})")); await wait("document.querySelector('#task-dialog').open && document.querySelectorAll('.function-top-card').length===10");
const top=await evaluate("[...document.querySelectorAll('.function-top-card strong')].map(e=>e.textContent)");
await domClick('[data-view-all]'); await wait("document.querySelectorAll('.function-list-card').length===108");
const all=await evaluate("[...document.querySelectorAll('.function-list-toggle strong')].map(e=>e.textContent)");
const sorted=await evaluate("(()=>{const a=[...document.querySelectorAll('.function-list-toggle strong')].map(e=>e.textContent);return a.every((v,i)=>!i||a[i-1].localeCompare(v)<=0)})()");
await evaluate("(()=>{const e=document.querySelector('#function-search');e.value='DATEDIF';e.dispatchEvent(new Event('input',{bubbles:true}))})()");
await wait("document.querySelectorAll('.function-list-card').length===1");
await domClick('[data-function-toggle="DATEDIF"]'); await wait("document.querySelector('[data-function-card=DATEDIF] .function-detail:not([hidden])')");
const formula=await evaluate("document.querySelector('[data-function-card=DATEDIF] .function-formula code').textContent");
await domClick('[data-copy="DATEDIF"]'); await new Promise(r=>setTimeout(r,250));
const copyStatus=await evaluate("document.querySelector('[data-copy=DATEDIF]').textContent");
console.log(JSON.stringify({topCount:top.length,top,allCount:all.length,sorted,searchCount:1,formula,copyStatus}));
ws.close();
