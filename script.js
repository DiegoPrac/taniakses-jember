'use strict';
// Seluruh data ditulis lokal dan fiktif. Tidak ada permintaan jaringan atau penyimpanan.
const crops = [
  {name:'Padi',icon:'🌾',price:6500,kind:'Gabah kering panen',farmer:'Pak Budi',area:'Semboro',stock:500,color:'#e9e8ce'},
  {name:'Jagung',icon:'🌽',price:5200,kind:'Pipilan kering',farmer:'Bu Sari',area:'Bangsalsari',stock:300,color:'#f3eccd'},
  {name:'Cabai',icon:'🌶️',price:32000,kind:'Cabai merah segar',farmer:'Pak Hasan',area:'Wuluhan',stock:80,color:'#f1e0d7'},
  {name:'Kopi',icon:'☕',price:42000,kind:'Biji kopi kering',farmer:'Bu Rini',area:'Silo',stock:120,color:'#e7ded2'},
  {name:'Tomat',icon:'🍅',price:8000,kind:'Tomat segar',farmer:'Pak Joko',area:'Ambulu',stock:150,color:'#e5ead8'}
];
const rupiah = value => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(value);
document.querySelector('#price-grid').innerHTML = crops.map(c=>`<article class="price-card"><span class="crop-icon" aria-hidden="true">${c.icon}</span><h3>${c.name}</h3><strong>${rupiah(c.price)}</strong><small>per kg · DEMO</small></article>`).join('');
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const products = document.querySelector('#products');
function renderProducts(){
  const query=search.value.trim().toLocaleLowerCase('id-ID');
  const filtered=crops.filter(c=>(category.value==='semua'||c.name===category.value)&&`${c.name} ${c.kind} ${c.farmer} ${c.area}`.toLocaleLowerCase('id-ID').includes(query));
  products.innerHTML=filtered.map(c=>`<article class="product-card"><div class="product-art" style="--art:${c.color}"><span class="badge">ILUSTRASI · FIKTIF</span><span class="produce" aria-hidden="true">${c.icon}</span></div><div class="product-body"><h3>${c.kind}</h3><p>${c.farmer} · ${c.area}, Jember</p><p>Petani dan penawaran fiktif</p><div class="product-price"><b>${rupiah(c.price)}</b> <small>/ kg · demo</small></div><div class="stock"><span>Stok contoh</span><b>${c.stock} kg</b></div><button class="button secondary" data-crop="${c.name}" aria-label="Simulasi hubungi ${c.farmer}, ${c.name}">Simulasi hubungi petani ↗</button></div></article>`).join('');
  document.querySelector('#result-count').textContent=`${filtered.length} penawaran contoh ditampilkan`;
  document.querySelector('#empty').hidden=filtered.length!==0;
}
search.addEventListener('input',renderProducts);category.addEventListener('change',renderProducts);
document.querySelector('#reset').addEventListener('click',()=>{search.value='';category.value='semua';renderProducts();search.focus();});
renderProducts();
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigasi');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const dialog=document.querySelector('#contact-dialog');let trigger;
products.addEventListener('click',event=>{
  const button=event.target.closest('[data-crop]');if(!button)return;
  const crop=crops.find(c=>c.name===button.dataset.crop);trigger=button;
  document.querySelector('#contact-detail').textContent=`${crop.farmer} (fiktif) · ${crop.kind} · ${crop.area}`;
  document.querySelector('#sample-message').textContent=`Halo ${crop.farmer}, saya tertarik dengan ${crop.kind.toLowerCase()}. Apakah stok masih tersedia? Boleh saya mengetahui kualitas, harga terkini, dan pilihan pengirimannya? Terima kasih.`;
  document.querySelector('#simulation-status').textContent='';
  document.querySelector('#simulate').disabled=false;
  dialog.showModal();document.body.classList.add('modal-open');
});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(trigger?.isConnected)trigger.focus();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#simulate').addEventListener('click',()=>{document.querySelector('#simulation-status').textContent='Simulasi selesai. Tidak ada pesan yang dikirim, pesanan dibuat, atau data disimpan.';document.querySelector('#simulate').disabled=true;});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
