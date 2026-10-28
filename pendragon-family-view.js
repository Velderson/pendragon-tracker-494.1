// pendragon-family-view.js — Player Families tab.
// Reads TREE_DATA (pendragon-treedata.js, generated from the spreadsheet by
// build-treedata.py). If pendragon-treedata-gm.js is present locally it also
// defines TREE_DATA_GM, and a GM view appears. Never deploy the GM file.
//
// Three views over one model:  Household · Lineage · Roll  + a detail panel.
// Children hang off the union (marriage, concubinage, liaison) they were born
// from, so half-siblings stay apart.

(function(){
'use strict';

const CSS = `
.fv.family-section{animation:none;min-width:0}
.fv .family-tabs{flex-wrap:wrap}
.fv{--fv-spouse:#5c4b8a;--fv-dim:#8d7550;--fv-soft:rgba(201,180,138,.55);font-size:15px}
.fv .fv-bar{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;padding:.6rem 1.4rem;
  border-bottom:1px solid var(--parchment-shadow);background:rgba(0,0,0,.05)}
.fv .fv-bar+.fv-bar{background:rgba(0,0,0,.09)}
.fv .fv-lab{font-family:'Cinzel',serif;font-size:.56rem;letter-spacing:.15em;text-transform:uppercase;color:var(--steel);margin-right:.15rem}
.fv .fv-pill{font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;padding:.4rem .78rem;
  border:1px solid var(--parchment-shadow);background:transparent;color:var(--steel);cursor:pointer;border-radius:2px}
.fv .fv-pill:hover{border-color:var(--gold);color:var(--ink)}
.fv .fv-pill.on{background:var(--ink);border-color:var(--ink);color:var(--gold-light)}
.fv .fv-pill.gm{border-color:var(--blood);color:var(--blood)}
.fv .fv-pill.gm.on{background:var(--blood);color:var(--parchment)}
.fv .fv-q{font-family:'Crimson Pro',serif;font-size:.92rem;padding:.32rem .55rem;border:1px solid var(--parchment-shadow);
  background:var(--parchment-dark);color:var(--ink);border-radius:2px;width:170px}
.fv .fv-main{display:grid;grid-template-columns:1fr 270px;min-height:520px}
.fv .fv-stage{padding:1.2rem 1.4rem 2.5rem;overflow:auto;min-width:0}
.fv .fv-side{border-left:1px solid var(--parchment-shadow);background:rgba(0,0,0,.04);padding:1.1rem 1.1rem 2rem}
.fv .fv-gmflag{background:#200808;color:#f0c8c0;font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.12em;
  text-transform:uppercase;padding:.45rem 1.4rem;border-bottom:1px solid var(--blood)}
/* card */
.fv .c{position:relative;text-align:left;display:block;width:100%;background:var(--parchment);
  border:1px solid var(--parchment-shadow);border-left:3px solid var(--parchment-shadow);border-radius:2px;
  padding:.48rem .6rem;cursor:pointer;font:inherit;color:inherit}
.fv .c:hover{border-color:var(--gold);filter:brightness(1.03)}
.fv .c:focus-visible{outline:2px solid var(--gold-light);outline-offset:2px}
.fv .c.sel{border-color:var(--gold);box-shadow:inset 0 0 0 1px var(--gold-light)}
.fv .c .nm{font-family:'Cinzel',serif;font-size:.8rem;line-height:1.2;display:block;color:var(--ink)}
.fv .c .rl{font-size:.8rem;color:var(--steel);font-style:italic;display:block;margin-top:.06rem}
.fv .c .ag{font-size:.74rem;color:var(--steel)}
.fv .c.dead{border-left-color:var(--blood);background:repeating-linear-gradient(-45deg,transparent 0 7px,rgba(139,26,26,.05) 7px 14px),var(--parchment)}
.fv .c.dead .nm{color:#7d3230;text-decoration:line-through;text-decoration-color:rgba(139,26,26,.5)}
.fv .c.dead::after{content:'✕';position:absolute;right:.4rem;bottom:.18rem;color:#a01010;font-weight:900;font-size:1.3rem;line-height:1;text-shadow:0 0 1px #a01010}
.fv .row.dead .nm::before,.fv .gp-dead::before{content:'✕ ';color:#a01010;font-weight:900}
.fv .c .st{display:inline-block;margin-top:.22rem;font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;padding:.08rem .35rem;border-radius:2px;border:1px solid}
.fv .st.mad{color:#7a2a6a;border-color:#7a2a6a;background:rgba(122,42,106,.07)}
.fv .st.away{color:#2a5a7a;border-color:#2a5a7a;background:rgba(42,90,122,.07)}
.fv .st.playing{color:#7a5a10;border-color:#b8902a;background:rgba(184,144,42,.1)}
.fv .c.madx{border-left-style:double;border-left-width:4px}
.fv .c.awayx{opacity:.86}
.fv .fv-state{margin:0 1.4rem .2rem;padding:.5rem .8rem;border:1px solid #7a2a6a;border-left:4px solid #7a2a6a;background:rgba(122,42,106,.06);font-size:.88rem;color:var(--ink)}
.fv .fv-state b{font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:#7a2a6a;margin-right:.4rem}
.fv .c.pcx{border-left:4px solid var(--gold-light)}
.fv .c.pcx .nm{font-weight:700}
.fv .c.spou{border-left-color:var(--fv-spouse)}
.fv .c.unk{border-left-color:#9a8a5a;border-left-style:dashed}
.fv .c.gmx{outline:1px dashed var(--blood);outline-offset:-3px}
.fv .c .mk{position:absolute;top:.38rem;right:.42rem;font-size:.68rem;letter-spacing:.08em;color:var(--steel)}
.fv .c.hit{box-shadow:0 0 0 2px var(--gold-light)}
.fv .c.bast .nm::after{content:' ◇';color:var(--steel);font-size:.7em}
.fv .c.flat{cursor:default}
/* household */
.fv .band{margin-bottom:1.4rem}
.fv .band>h2{font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-dim);margin:0 0 .1rem;font-weight:600}
.fv .band>.cap{font-size:.84rem;color:var(--steel);font-style:italic;margin:0 0 .5rem}
.fv .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.5rem}
.fv .rule{height:1px;background:var(--fv-soft);margin:1.4rem 0}
.fv .un{border-left:2px solid var(--fv-spouse);padding:.1rem 0 .3rem .7rem;margin:.65rem 0 .85rem}
.fv .un.anon{border-left-style:dashed;border-left-color:var(--fv-dim)}
.fv .un.gmu{border-left-color:var(--blood)}
.fv .uh{font-family:'Cinzel',serif;font-size:.78rem;margin-bottom:.15rem;display:flex;align-items:baseline;gap:.45rem;flex-wrap:wrap;color:var(--ink)}
.fv:not(.gm) .uid{display:none}
.fv .uid{font-family:monospace;font-size:.62rem;color:var(--steel);border:1px solid var(--parchment-shadow);padding:.02rem .25rem;border-radius:2px}
.fv .um{font-family:'Crimson Pro',serif;font-size:.8rem;font-style:italic;color:var(--steel)}
.fv .unote{font-size:.82rem;color:var(--steel);font-style:italic;margin:.1rem 0 .4rem}
.fv .gmtag{font-family:'Cinzel',serif;font-size:.5rem;letter-spacing:.12em;color:var(--parchment);background:var(--blood);padding:.06rem .3rem;border-radius:2px}
.fv .anon-nm{font-style:italic;color:var(--steel)}
/* lineage */
.fv .tier{display:flex;justify-content:center;align-items:stretch;gap:.5rem;flex-wrap:wrap;padding:.5rem 0}
.fv .tier .c{width:150px}
.fv .tier.cz{max-width:760px;margin:0 auto;gap:.4rem}
.fv .tier.cz .c{width:118px;padding:.36rem .46rem}
.fv .tier.cz .c .nm{font-size:.72rem}
.fv .tl{font-family:'Cinzel',serif;font-size:.52rem;letter-spacing:.16em;text-transform:uppercase;color:var(--steel);text-align:center}
.fv .stem{width:1px;height:16px;background:var(--parchment-shadow);margin:0 auto}
.fv .chip{font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.08em;padding:.42rem .7rem;border:1px dashed var(--parchment-shadow);
  background:transparent;color:var(--steel);cursor:pointer;border-radius:2px;align-self:center}
.fv .chip:hover{border-color:var(--gold);border-style:solid;color:var(--ink)}
.fv .fnote{text-align:center;font-size:.84rem;color:var(--steel);font-style:italic;margin:.1rem 0 .9rem}
/* roll */
.fv .out{font-size:.92rem;line-height:1.5}
.fv .out ul{list-style:none;margin:0;padding-left:1.1rem;border-left:1px solid var(--fv-soft)}
.fv .out>ul{padding-left:0;border:0}
.fv .out li{margin:.14rem 0}
.fv .out .row{display:flex;gap:.5rem;align-items:baseline;padding:.12rem .3rem;border-radius:2px;cursor:pointer}
.fv .out .row:hover{background:rgba(201,180,138,.25)}
.fv .out .row.sel{background:rgba(212,170,69,.25);box-shadow:inset 2px 0 0 var(--gold-light)}
.fv .out .row.hit{box-shadow:inset 0 0 0 2px var(--gold-light)}
.fv .out .nm{font-family:'Cinzel',serif;font-size:.8rem;color:var(--ink)}
.fv .out .row.dead .nm{color:#7d3230;text-decoration:line-through;text-decoration-color:rgba(139,26,26,.45)}
.fv .out .rl{color:var(--steel);font-style:italic;font-size:.84rem}
.fv .out .ag{color:var(--steel);font-size:.78rem;margin-left:auto;white-space:nowrap}
.fv .out .tw{color:var(--steel);font-family:monospace;font-size:.75rem}
.fv .out .ugrp{font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.08em;color:var(--fv-spouse);padding:.1rem .3rem}
/* panel */
.fv .fv-side h3{font-family:'Cinzel',serif;font-size:1rem;margin:0 0 .1rem;line-height:1.25;color:var(--ink)}
.fv .fv-side .role{font-style:italic;color:var(--steel);font-size:.9rem;margin:0 0 .7rem}
.fv .kv{display:flex;justify-content:space-between;gap:.6rem;font-size:.86rem;padding:.25rem 0;border-bottom:1px dotted var(--fv-soft)}
.fv .kv dt{font-family:'Cinzel',serif;font-size:.54rem;letter-spacing:.13em;text-transform:uppercase;color:var(--steel);padding-top:.18rem;white-space:nowrap}
.fv .kv dd{margin:0;text-align:right;color:var(--ink)}
.fv .note{margin-top:.8rem;padding:.6rem .7rem;background:var(--parchment);border:1px solid var(--fv-soft);border-left:3px solid var(--gold);font-size:.88rem;line-height:1.45;color:var(--ink)}
.fv .note.gmn{border-left-color:var(--blood)}
.fv .note b{font-family:'Cinzel',serif;font-size:.52rem;letter-spacing:.15em;text-transform:uppercase;color:var(--gold-dim);display:block;margin-bottom:.25rem;font-weight:600}
.fv .note.gmn b{color:var(--blood)}
.fv .relbtn{margin-top:.9rem;width:100%;font-family:'Cinzel',serif;font-size:.58rem;letter-spacing:.13em;text-transform:uppercase;padding:.5rem;
  border:1px solid var(--gold);background:transparent;color:var(--gold-dim);cursor:pointer;border-radius:2px}
.fv .relbtn:hover{background:var(--ink);color:var(--gold-light);border-color:var(--ink)}
.fv .empty{font-size:.88rem;color:var(--steel);font-style:italic;line-height:1.5}
.fv .lnk{background:none;border:0;padding:0;font:inherit;color:inherit;cursor:pointer;text-decoration:underline dotted;text-underline-offset:2px}
.fv .legend{display:flex;flex-wrap:wrap;gap:.9rem;font-size:.8rem;color:var(--steel);padding:.65rem 1.4rem;border-top:1px solid var(--parchment-shadow);background:rgba(0,0,0,.05)}
.fv .legend i{display:inline-block;width:3px;height:11px;vertical-align:-1px;margin-right:.3rem}
@media(max-width:820px){.fv .fv-main{grid-template-columns:1fr}.fv .fv-side{border-left:0;border-top:1px solid var(--parchment-shadow)}.fv .tier .c{width:132px}}
`;

const S = { pc:null, view:'household', focus:null, sel:null, q:'', gm:false, open:new Set() };
let M = null;

const esc = s => String(s==null?'':s).replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const nm  = n => (n && n.label || '').split('\n')[0].trim();
const age = n => +(n && n.age) || 0;
const byAge = (a,b) => age(b) - age(a);

function data(){ return (S.gm && typeof TREE_DATA_GM !== 'undefined') ? TREE_DATA_GM : TREE_DATA; }
function hasGM(){ return typeof TREE_DATA_GM !== 'undefined'; }

/* ══ model ═══════════════════════════════════════════════════════════ */
function model(pc){
  const t = data()[pc];
  const nodes = [];
  t.generations.forEach((g,gi) => g.forEach(n => nodes.push(Object.assign({}, n, {gi}))));
  const by = new Map(nodes.map(n => [n.id, n]));
  const unions = (t.unions || []).slice();
  const uby = new Map(unions.map(u => [u.id, u]));
  const kids = new Map();
  nodes.forEach(n => { if(n.parentId) (kids.get(n.parentId) || kids.set(n.parentId, []).get(n.parentId)).push(n.id); });
  const self = nodes.find(n => n.pc), father = nodes.find(n => n.isfather), mother = nodes.find(n => n.ismother);
  return {pc, t, nodes, by, unions, uby, kids, self, father, mother,
          entourage: t.entourage || [], manors: t.manors || []};
}

const childOf  = id => (M.kids.get(id) || []).map(i => M.by.get(i)).filter(Boolean);
const parentOf = n  => n && n.parentId ? M.by.get(n.parentId) : null;
const unionsOf = id => M.unions.filter(u => u.a === id || u.b === id);
const partnerIn = (u, id) => u.a === id ? {id:u.b, name:u.bName} : {id:u.a, name:u.aName};
function mateOf(n){
  if(!n) return null;
  if(n.spouseOf && M.by.get(n.spouseOf)) return M.by.get(n.spouseOf);
  const w = M.nodes.find(x => x.spouseOf === n.id && x.status !== 'dead') || M.nodes.find(x => x.spouseOf === n.id);
  if(w) return w;
  const u = unionsOf(n.id).find(u => /marriage/i.test(u.type) && M.by.get(partnerIn(u, n.id).id));
  return u ? M.by.get(partnerIn(u, n.id).id) : null;
}
const sibsOf = n => n && n.parentId ? childOf(n.parentId).filter(x => x.id !== n.id) : [];
const alive  = n => (n.status || 'alive') === 'alive';
function descend(rootId){
  const out = [], q = [rootId], seen = new Set([rootId]);
  while(q.length){ (M.kids.get(q.shift()) || []).forEach(id => {
    if(seen.has(id)) return; seen.add(id);
    const n = M.by.get(id); if(n){ out.push(n); q.push(id); } }); }
  return out;
}
function partnerHtml(p){
  if(p.id && M.by.get(p.id)) return `<button class="lnk" onclick="FV.pick('${p.id}')">${esc(nm(M.by.get(p.id)))}</button>`;
  return p.id ? esc(p.name) : `<span class="anon-nm">${esc(p.name || 'an unnamed woman')}</span>`;
}
function unionLabel(u){
  const one = p => p.id ? esc(p.name) : `<span class="anon-nm">${esc(p.name)}</span>`;
  return `${one({id:u.a, name:u.aName})} &amp; ${one({id:u.b, name:u.bName})}`;
}

/* ══ standing: madness, quests, who is played ═══════════════════════════ */
function stateTags(n){
  const t = [];
  if(n.mad) t.push('<span class="st mad" title="' + esc(n.mad) + '">Mad</span>');
  if(n.away) t.push('<span class="st away" title="' + esc(n.away) + '">On a quest</span>');
  if(n.playing) t.push('<span class="st playing" title="' + esc(n.playing) + '">Played now</span>');
  return t.join(' ');
}
function standing(n){
  if(n.status === 'dead') return 'Dead' + (n.died ? ' (' + esc(n.died) + ')' : '');
  if(n.status === 'unknown') return 'Fate unknown';
  return 'Living' + (n.mad ? ' — mad' : n.away ? ' — away on a quest' : '');
}
/* ══ card ════════════════════════════════════════════════════════════ */
function card(n, opt){
  opt = opt || {};
  if(!n) return '';
  if(n.ghost) n = Object.assign({}, n, {label: String(n.label).replace(/\n/g,' '), status:'alive'});
  const cls = ['c'];
  if(n.pc) cls.push('pcx');
  if(n.status === 'dead') cls.push('dead');
  if(n.status === 'unknown') cls.push('unk');
  if(n.spouseOf || n.formerSpouseOf || n.iswife) cls.push('spou');
  if(n.illegitimate) cls.push('bast');
  if(S.gm && n.visible) cls.push('gmx');
  if(n.mad) cls.push('madx');
  if(n.away) cls.push('awayx');
  if(S.sel === n.id) cls.push('sel');
  if(S.q && nm(n).toLowerCase().includes(S.q)) cls.push('hit');
  if(opt.flat) cls.push('flat');
  const marks = [n.pc ? '★' : '', n.note ? '✦' : ''].filter(Boolean).join(' ');
  const line2 = opt.rel != null ? opt.rel : (n.role || '');
  const act = opt.flat ? '' : `onclick="${opt.jump ? `FV.focusOn('${n.id}')` : `FV.pick('${n.id}')`}"`;
  return `<button class="${cls.join(' ')}" ${act}>
    ${marks ? `<span class="mk">${marks}</span>` : ''}
    <span class="nm">${esc(nm(n))}</span>
    ${line2 ? `<span class="rl">${esc(line2)}</span>` : ''}
    ${n.age ? `<span class="ag">Age ${esc(n.age)}</span>` : ''}
    ${stateTags(n)}
  </button>`;
}
const band = (h, cap, body) => body ? `<section class="band"><h2>${h}</h2>${cap ? `<p class="cap">${cap}</p>` : ''}${body}</section>` : '';
const grid = arr => arr.filter(Boolean).length ? `<div class="grid">${arr.join('')}</div>` : '';

function unionBlock(u, forId, opts){
  opts = opts || {};
  const p = partnerIn(u, forId);
  const kids = u.children.map(id => M.by.get(id)).filter(Boolean).sort(byAge);
  const meta = [u.type, u.began ? 'from ' + u.began : '', u.ended || ''].filter(Boolean).join(' · ');
  const cls = ['un', p.id ? '' : 'anon', u.gm ? 'gmu' : ''].filter(Boolean).join(' ');
  return `<div class="${cls}">
    <div class="uh"><span class="uid">${u.id}</span> ${opts.both ? unionLabel(u) : partnerHtml(p)}
      <span class="um">${esc(meta)}</span>${u.gm ? ' <span class="gmtag">GM only</span>' : ''}</div>
    ${u.note ? `<p class="unote">${esc(u.note)}</p>` : ''}
    ${kids.length ? grid(kids.map(k => card(k, {rel: (u.gm && k.union !== u.id) ? 'In truth: ' + (k.role || 'child') : (k.role || '')})))
                  : `<p class="unote">${opts.noKids || 'No children recorded.'}</p>`}
  </div>`;
}

/* ══ A · HOUSEHOLD ═══════════════════════════════════════════════════ */
function viewHousehold(){
  const s = M.self, out = [];
  const mine = unionsOf(s.id).sort((a,b) => (/marriage/i.test(b.type)?1:0) - (/marriage/i.test(a.type)?1:0));
  const claimed = new Set(mine.flatMap(u => u.children));
  const loose = childOf(s.id).filter(k => !claimed.has(k.id)).sort(byAge);
  const otherSpouses = M.nodes.filter(n => n.spouseOf === s.id || n.formerSpouseOf === s.id);
  out.push(band('Hearth', 'Each marriage or liaison with the children born of it — half-siblings stay apart.',
    grid([card(s, {rel:'The knight himself'}), ...otherSpouses.map(w => card(w, {rel: w.role || 'Wife'}))]) +
    mine.map(u => unionBlock(u, s.id, {noKids: /marriage/i.test(u.type) ? 'No children yet.' : 'No children recorded.'})).join('') +
    (loose.length ? `<div class="un anon"><div class="uh"><span class="uid">?</span><span class="anon-nm">mother not recorded</span></div>${grid(loose.map(k => card(k)))}</div>` : '')));

  // Elders: parents, their union, grandparents
  const gps = M.nodes.filter(n => n.gi === 0);
  const gpCards = gps.flatMap(g => (g.members && g.members.length) ? g.members.map(m => card(Object.assign({gi:0}, m), {rel:m.role, flat:true})) : []);
  const birth = s.union && M.uby.get(s.union);
  out.push(band('Elders', birth ? `Parents — ${unionLabel(birth)}, ${esc(birth.type.toLowerCase())}${birth.ended ? ' · ' + esc(birth.ended) : ''}.` : 'Parents and grandparents.',
    grid([M.father ? card(M.father, {rel:'Father'}) : '', M.mother ? card(M.mother, {rel:'Mother'}) : '', ...gpCards])));

  // Brothers and sisters, grouped by the union they came from
  const sibs = sibsOf(s);
  if(sibs.length){
    const groups = new Map();
    sibs.forEach(b => { const k = b.union || '_'; (groups.get(k) || groups.set(k, []).get(k)).push(b); });
    const html = [...groups.entries()].map(([k, list]) => {
      const u = M.uby.get(k);
      list.sort(byAge);
      if(!u) return grid(list.map(b => card(b)));
      const same = k === s.union;
      return `<div class="un${u.a && u.b ? '' : ' anon'}${u.gm ? ' gmu' : ''}"><div class="uh"><span class="uid">${u.id}</span>
        ${same ? 'Full brothers and sisters' : 'By ' + partnerHtml(partnerIn(u, (M.father && (u.a === M.father.id || u.b === M.father.id)) ? M.father.id : (M.mother ? M.mother.id : u.a)))}
        ${u.gm ? '<span class="gmtag">GM only</span>' : ''}</div>
        ${S.gm && u.note ? `<p class="unote">${esc(u.note)}</p>` : ''}${grid(list.map(b => card(b)))}</div>`;
    }).join('');
    out.push(band('Brothers and sisters', '', html));
  }

  // Nephews and nieces — children of brothers and sisters, and who they married
  const nieces = sibs.flatMap(b => descend(b.id));
  const sibSpouses = M.nodes.filter(n => n.spouseOf && sibs.some(b => b.id === n.spouseOf));
  if(nieces.length || sibSpouses.length) out.push(band('Their spouses and children', '',
    grid([...sibSpouses.map(n => card(n)), ...nieces.sort(byAge).map(n => card(n))])));

  // Wider kin, folded per side
  const direct = new Set([s.id, M.father && M.father.id, M.mother && M.mother.id, ...sibs.map(n => n.id), ...childOf(s.id).map(n => n.id),
                          ...nieces.map(n => n.id), ...sibSpouses.map(n => n.id)]);
  const kin = gps.map(root => {
    const folk = descend(root.id).filter(n => !direct.has(n.id) && !n.isfather && !n.ismother);
    const married = M.nodes.filter(n => n.spouseOf && folk.some(f => f.id === n.spouseOf) && !direct.has(n.id));
    if(!folk.length) return '';
    const unc = folk.filter(n => n.gi === 1), cous = folk.filter(n => n.gi > 1);
    const side = /pat/.test(root.id) ? 'Father’s side' : 'Mother’s side';
    const key = 'k_' + root.id;
    const isOpen = S.open.has(key);
    return `<div style="margin-bottom:1rem">
      <div class="tl" style="text-align:left;margin-bottom:.35rem">${side} — ${unc.length} uncles and aunts · ${cous.length} cousins and their children</div>
      ${grid(unc.filter(alive).map(u => card(u)))}
      <button class="chip" style="margin-top:.45rem" onclick="FV.toggle('${key}')">${isOpen ? 'Fold this side' : 'Open all ' + (folk.length + married.length) + ' kin'}</button>
      ${isOpen ? grid([...unc.filter(n => !alive(n)).map(u => card(u)), ...cous.sort(byAge).map(c => card(c)), ...married.map(m => card(m))]) : ''}
    </div>`;
  }).join('');
  out.push(band('Wider kin', 'Folded by default. Open a side only when it matters.', kin));

  // In-laws and others on the sheet who are not blood kin of the PC
  const kinIds = gps.flatMap(g => descend(g.id).map(n => n.id));
  const placed = new Set([...direct, ...kinIds, ...M.nodes.filter(n => n.spouseOf && kinIds.includes(n.spouseOf)).map(n => n.id)]);
  const others = M.nodes.filter(n => n.gi > 0 && !placed.has(n.id) && !(n.spouseOf === s.id || n.formerSpouseOf === s.id));
  if(others.length) out.push(band('Married in', 'Spouses of kin, and their children.', grid(others.sort(byAge).map(n => card(n)))));

  if(M.entourage.length) out.push(band('Household', 'Sworn men, servants, wards.',
    grid(M.entourage.map(e => card(Object.assign({}, e, {id: e.id || 'ent_' + e.label}), {rel: e.role || ''})))));
  if(M.manors.length) out.push(band('Lands', '',
    grid(M.manors.map(m => `<div class="c flat" style="border-left-color:#4a6a30"><span class="nm">🏰 ${esc(m.label)}</span><span class="rl">${esc(m.role || m.note || '')}</span></div>`))));
  return out.join('<div class="rule"></div>');
}

/* ══ B · LINEAGE ═════════════════════════════════════════════════════ */
function viewLineage(){
  const f = M.by.get(S.focus) || M.self;
  const dad = parentOf(f);
  let mum = null;
  if(f.union && M.uby.get(f.union)){ const u = M.uby.get(f.union); const other = dad && (u.a === dad.id ? u.b : u.a); mum = other ? M.by.get(other) : null; }
  if(!mum && dad && !dad.ghost) mum = mateOf(dad);
  const gps = [parentOf(dad), parentOf(mum)].filter(Boolean).filter((g,i,a) => a.findIndex(x => x.id === g.id) === i);
  const unc = dad && !dad.ghost ? sibsOf(dad) : [];
  const aun = mum && !mum.ghost ? sibsOf(mum) : [];
  const mate = mateOf(f), sibs = sibsOf(f), kids = childOf(f.id).sort(byAge);

  const folded = (list, key, lab) => {
    if(!list.length) return '';
    if(S.open.has(key)) return list.map(u => card(u, {jump:true})).join('') + `<button class="chip" onclick="FV.toggle('${key}')">fold</button>`;
    return `<button class="chip" onclick="FV.toggle('${key}')">+ ${list.length} ${lab}</button>`;
  };
  const cousinTier = (list, key, label) => {
    if(!S.open.has(key)) return '';
    const c = list.flatMap(u => childOf(u.id)).sort(byAge);
    return c.length ? `<div class="tl" style="margin-top:.5rem">${label} — ${c.length}</div><div class="tier cz">${c.map(x => card(x, {jump:true})).join('')}</div>` : '';
  };
  const t = [];
  if(gps.length) t.push(`<div class="tl">Grandparents</div><div class="tier">${gps.map(g => card(g, {rel: g.ghost ? (g.members || []).map(nm).join(', ') : (g.role || ''), flat: !!g.ghost})).join('')}</div><div class="stem"></div>`);
  if(dad || mum) t.push(`<div class="tl">Parents &amp; their siblings</div>
    <div class="tier">${folded(unc, 'u_' + f.id, 'on the father’s side')}
      ${dad && !dad.ghost ? card(dad, {rel:'Father', jump:true}) : ''}${mum && !mum.ghost ? card(mum, {rel:'Mother', jump:true}) : ''}
      ${folded(aun, 'a_' + f.id, 'on the mother’s side')}</div><div class="stem"></div>`);
  t.push(`<div class="tl">${f.pc ? 'The knight' : 'In focus'}</div>
    <div class="tier">${sibs.length && !S.open.has('s_' + f.id)
        ? `<button class="chip" onclick="FV.toggle('s_${f.id}')">+ ${sibs.length} siblings</button>`
        : sibs.map(b => card(b, {jump:true})).join('')}
      ${card(f)}${card(mate, {rel:'Married'})}</div>`);
  t.push(cousinTier(unc, 'u_' + f.id, 'Cousins on the father’s side'));
  t.push(cousinTier(aun, 'a_' + f.id, 'Cousins on the mother’s side'));
  if(kids.length) t.push(`<div class="stem"></div><div class="tl">Children</div><div class="tier">${kids.map(k => card(k, {jump:true})).join('')}</div>`);
  const back = f.id !== M.self.id
    ? `<p class="fnote">Centred on ${esc(nm(f))}. <button class="chip" onclick="FV.focusOn(null)">back to ${esc(M.pc)}</button></p>`
    : `<p class="fnote">Open a side to see the cousins. Click any name to centre the chart on them.</p>`;
  return back + t.join('');
}

/* ══ C · ROLL ════════════════════════════════════════════════════════ */
function viewRoll(){
  const seen = new Set();
  function row(n, rel, last, depth){
    const cls = ['row', n.status === 'dead' && !n.ghost ? 'dead' : '', S.sel === n.id ? 'sel' : '',
                 S.q && nm(n).toLowerCase().includes(S.q) ? 'hit' : ''].filter(Boolean).join(' ');
    return `<div class="${cls}" onclick="FV.pick('${n.id}')">
      <span class="tw">${depth ? (last ? '└' : '├') : '●'}</span>
      <span class="nm">${n.pc ? '★ ' : ''}${esc(n.ghost ? String(n.label).replace(/\n/g,' ') : nm(n))}</span>
      <span class="rl">${n.ghost ? '' : esc(rel || n.role || '')}</span>
      <span class="ag">${n.age ? 'age ' + esc(n.age) : ''}${n.note ? ' ✦' : ''}${n.mad ? ' · mad' : n.away ? ' · on a quest' : n.playing ? ' · played now' : ''}</span></div>`;
  }
  function li(n, rel, last, depth){
    if(!n || seen.has(n.id)) return '';
    seen.add(n.id);
    const kids = childOf(n.id).sort(byAge);
    const us = unionsOf(n.id);
    const sub = [];
    if(us.length){
      // group children under each union this person is part of
      const used = new Set();
      us.forEach(u => {
        const p = partnerIn(u, n.id);
        const pn = p.id && M.by.get(p.id);
        const ck = kids.filter(k => u.children.includes(k.id));
        ck.forEach(k => used.add(k.id));
        if(pn && !seen.has(pn.id)){ seen.add(pn.id); sub.push(`<li>${row(pn, u.type.toLowerCase(), false, depth+1)}</li>`); }
        else if(!pn) sub.push(`<li><div class="ugrp">${esc(u.type)} · ${p.id ? esc(p.name) : '<i>' + esc(p.name) + '</i>'}${u.gm ? ' · GM' : ''}</div></li>`);
        if(ck.length) sub.push(`<li><ul>${ck.map((k,i) => li(k, null, i === ck.length-1, depth+2)).join('')}</ul></li>`);
      });
      kids.filter(k => !used.has(k.id)).forEach((k,i,a) => sub.push(li(k, null, i === a.length-1, depth+1)));
    } else {
      const mate = mateOf(n);
      if(mate && !seen.has(mate.id)){ seen.add(mate.id); sub.push(`<li>${row(mate, 'married', !kids.length, depth+1)}</li>`); }
      kids.forEach((k,i) => sub.push(li(k, null, i === kids.length-1, depth+1)));
    }
    return `<li>${row(n, rel, last, depth)}${sub.length ? `<ul>${sub.join('')}</ul>` : ''}</li>`;
  }
  const roots = M.nodes.filter(n => !n.parentId && !n.spouseOf && !n.formerSpouseOf);
  const body = roots.map((r,i) => li(r, null, i === roots.length-1, 0)).join('');
  const rest = M.nodes.filter(n => !seen.has(n.id));
  return `<div class="out"><ul>${body}${rest.map((r,i) => li(r, null, i === rest.length-1, 0)).join('')}</ul></div>`;
}

/* ══ detail panel ════════════════════════════════════════════════════ */
function panel(){
  let n = M.by.get(S.sel);
  if(!n){
    const e = M.entourage.find(e => (e.id || 'ent_' + e.label) === S.sel);
    if(e) n = Object.assign({}, e, {id: e.id || 'ent_' + e.label, household:true});
  }
  if(!n) return `<p class="empty">Pick anyone to read their record.<br><br>✦ marks a person with a written note. ◇ marks a child born out of wedlock.</p>`;
  const rows = [];
  if(n.age) rows.push(['Age', esc(n.age)]);
  rows.push(['Standing', standing(n)]);
  if(n.mad) rows.push(['Madness', esc(n.mad)]);
  if(n.away) rows.push(['Away', esc(n.away)]);
  if(n.playing) rows.push(['At the table', esc(n.playing)]);
  if(n.standIn && M.by.get(n.standIn)) rows.push(['Played instead', `<button class="lnk" onclick="FV.pick('${n.standIn}')">${esc(nm(M.by.get(n.standIn)))}</button>`]);
  if(n.glory) rows.push(['Glory', esc(n.glory)]);
  if(!n.household){
    const bu = n.union && M.uby.get(n.union);
    if(bu) rows.push(['Child of', unionLabel(bu) + ` <span class="uid">${bu.id}</span>`]);
    else { const p = parentOf(n); if(p && !p.ghost) rows.push(['Child of', `<button class="lnk" onclick="FV.pick('${p.id}')">${esc(nm(p))}</button>`]); }
    if(S.gm && n.trueUnion && M.uby.get(n.trueUnion)){ const tu = M.uby.get(n.trueUnion); rows.push(['In truth', unionLabel(tu) + ` <span class="gmtag">GM</span>`]); }
    const us = unionsOf(n.id);
    us.forEach(u => rows.push([u.type, partnerHtml(partnerIn(u, n.id)) + (u.ended ? ` <span class="um">(${esc(u.ended)})</span>` : '') + (u.gm ? ' <span class="gmtag">GM</span>' : '')]));
    if(!us.length){ const m = mateOf(n); if(m) rows.push(['Married to', `<button class="lnk" onclick="FV.pick('${m.id}')">${esc(nm(m))}</button>`]); }
    const k = childOf(n.id).concat(us.flatMap(u => u.children).map(id => M.by.get(id)).filter(Boolean)).filter((x,i,a) => a.indexOf(x) === i);
    if(k.length) rows.push(['Children', k.sort(byAge).map(c => `<button class="lnk" onclick="FV.pick('${c.id}')">${esc(nm(c))}</button>`).join(', ')]);
    if(n.illegitimate) rows.push(['Birth', 'Out of wedlock']);
  }
  if(S.gm && n.visible) rows.push(['Visibility', `<span class="gmtag">${esc(n.visible)}</span>`]);
  if(S.gm && n.id && /^p\d{4}$/.test(n.id)) rows.push(['PID', `<span class="uid">${n.id}</span>`]);
  return `<h3>${esc(nm(n))}</h3><p class="role">${esc(n.role || '—')}</p>
    <dl style="margin:0">${rows.map(([a,b]) => `<div class="kv"><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>
    ${n.note ? `<div class="note${S.gm && n.visible ? ' gmn' : ''}"><b>${S.gm && n.visible ? 'Chronicle — GM only' : 'Chronicle'}</b>${esc(n.note)}</div>` : ''}
    ${S.view === 'lineage' && M.by.has(n.id) && !n.ghost ? `<button class="relbtn" onclick="FV.focusOn('${n.id}')">Centre chart here</button>` : ''}`;
}

/* ══ render ══════════════════════════════════════════════════════════ */
function injectCSS(){
  if(document.getElementById('fv-css')) return;
  const st = document.createElement('style'); st.id = 'fv-css'; st.textContent = CSS; document.head.appendChild(st);
}
function pcBanner(){
  const s = M.self; if(!s || !s.mad) return '';
  const alt = s.standIn && M.by.get(s.standIn);
  return `<div class="fv-state"><b>${esc(nm(s))} is mad</b>${esc(s.mad)}.${alt ? ` His player rides as <button class="lnk" onclick="FV.pick('${alt.id}')">${esc(nm(alt))}</button>.` : ''}</div>`;
}
let host = null;
function render(el){
  injectCSS();
  if(el) host = el;
  if(typeof TREE_DATA === 'undefined'){ host.innerHTML = '<div class="empty-state"><h3>No family data</h3>pendragon-treedata.js did not load.</div>'; return; }
  if(S.gm && !hasGM()) S.gm = false;
  const pcs = Object.keys(data());
  if(!S.pc || !pcs.includes(S.pc)) S.pc = pcs[0];
  M = model(S.pc);
  const qFocused = document.activeElement && document.activeElement.id === 'fvQ';
  const views = [['household','Household'],['lineage','Lineage'],['roll','Roll']];
  host.innerHTML = `<div class="family-section fv${S.gm ? ' gm' : ''}">
    <div class="family-tabs">${pcs.map(c => `<button class="family-tab${c === S.pc ? ' active' : ''}" onclick="FV.setPC('${c}')">${c}</button>`).join('')}</div>
    ${S.gm ? '<div class="fv-gmflag">GM view — includes secret unions, hidden people and GM-only notes. Local file only.</div>' : ''}
    ${pcBanner()}
    <div class="fv-bar">
      <span class="fv-lab">View</span>
      ${views.map(([k,l]) => `<button class="fv-pill${S.view === k ? ' on' : ''}" onclick="FV.setView('${k}')">${l}</button>`).join('')}
      ${hasGM() ? `<button class="fv-pill gm${S.gm ? ' on' : ''}" onclick="FV.setGM(${!S.gm})" title="Only available where pendragon-treedata-gm.js is present">🗝 GM view</button>` : ''}
      <span style="flex:1"></span>
      <label class="fv-lab" for="fvQ">Find</label>
      <input id="fvQ" class="fv-q" placeholder="name…" autocomplete="off" value="${esc(S.q)}" oninput="FV.find(this.value)">
    </div>
    <div class="fv-main">
      <div class="fv-stage">${S.view === 'household' ? viewHousehold() : S.view === 'lineage' ? viewLineage() : viewRoll()}</div>
      <aside class="fv-side">${panel()}</aside>
    </div>
    <div class="legend">
      <span><i style="background:var(--gold-light)"></i>Player knight</span>
      <span><i style="background:#5c4b8a"></i>Married in</span>
      <span><b style="color:#a01010">✕</b> Dead</span>
      <span class="st mad" style="font-size:.5rem">Mad</span><span class="st away" style="font-size:.5rem">On a quest</span>
      <span><i style="background:#9a8a5a"></i>Fate unknown</span>
      <span>◇ born out of wedlock</span><span>✦ has a note</span>
      <span>Dashed line = partner whose name was never recorded</span>
    </div>
  </div>`;
  if(qFocused){ const q = document.getElementById('fvQ'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}

window.FV = {
  render,
  setPC(c){ S.pc = c; S.focus = null; S.sel = null; S.open.clear(); render(); },
  setView(v){ S.view = v; render(); },
  setGM(on){ S.gm = !!on && hasGM(); S.focus = null; render(); },
  pick(id){ S.sel = id; render(); },
  focusOn(id){ if(id === null){ S.focus = null; render(); return; } const n = M.by.get(id); if(n && !n.ghost) S.focus = id; S.sel = id; render(); },
  toggle(k){ S.open.has(k) ? S.open.delete(k) : S.open.add(k); render(); },
  find(v){ S.q = String(v || '').trim().toLowerCase(); render(); },
  state: S
};
})();
