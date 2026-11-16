// ============================================================
// ========== MPF ELETRÔNICOS - SCRIPT FINAL ==================
// ============================================================

const WHATSAPP_LOJA = '5521999294181'; 

const produtos = [
  { id: 1, nome: 'Fone MOX Pro', marca: 'mox', preco: 299.90, desc: 'Fone bluetooth com cancelamento de ruído e bateria de 30h.',
    fotos: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600', 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600', 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600'] },
  { id: 2, nome: 'Caixa MOX Sound', marca: 'mox', preco: 449.90, desc: 'Caixa de som portátil à prova d\'água com 40W.',
    fotos: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600', 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600', 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600', 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=600'] },
  { id: 3, nome: 'Smartphone Dotcell X', marca: 'dotcell', preco: 1899.00, desc: 'Tela 6.7", 128GB, câmera tripla 64MP.',
    fotos: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600', 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600', 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600'] },
  { id: 4, nome: 'Tablet Dotcell Pad', marca: 'dotcell', preco: 1499.00, desc: 'Tablet 10.5", 64GB, ideal para estudos e trabalho.',
    fotos: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600', 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600', 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600', 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600', 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=600'] },
  { id: 5, nome: 'Sony WH-1000XM5', marca: 'sony', preco: 2499.00, desc: 'Headphone premium com cancelamento de ruído líder de mercado.',
    fotos: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600', 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600', 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600'] },
  { id: 6, nome: 'Sony Xperia 5', marca: 'sony', preco: 3299.00, desc: 'Smartphone com câmera profissional e tela 4K.',
    fotos: ['https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600', 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600', 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600'] },
  { id: 7, nome: 'Philips Fone SHB', marca: 'philips', preco: 349.90, desc: 'Fone bluetooth com design ergonômico e som cristalino.',
    fotos: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600', 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600'] },
  { id: 8, nome: 'Philips Caixa BT', marca: 'philips', preco: 599.90, desc: 'Caixa de som bluetooth 30W com graves profundos.',
    fotos: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600', 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600', 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600', 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=600'] }
];

const formatBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function mostrarToast(msg, tipo = 'sucesso') {
  const toast = document.getElementById('toast');
  if (!toast) return alert(msg);
  toast.innerText = msg;
  toast.className = 'toast show' + (tipo === 'erro' ? ' error' : '');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========== SLIDER ==========
let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');

if (slides.length > 0 && dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => irParaSlide(i);
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dots span');

  window.irParaSlide = function (index) {
    slides[slideAtual].classList.remove('active');
    dots[slideAtual].classList.remove('active');
    slideAtual = (index + slides.length) % slides.length;
    slides[slideAtual].classList.add('active');
    dots[slideAtual].classList.add('active');
  };

  document.getElementById('nextSlide')?.addEventListener('click', () => irParaSlide(slideAtual + 1));
  document.getElementById('prevSlide')?.addEventListener('click', () => irParaSlide(slideAtual - 1));
  setInterval(() => irParaSlide(slideAtual + 1), 5000);
}

// ========== PRODUTOS E MODAL ==========
const grid = document.getElementById('produtosGrid');

function renderizarProdutos(lista) {
  if (!grid) return;
  grid.innerHTML = lista.map(p => `
    <div class="produto-card" onclick="abrirModal(${p.id})">
      <img src="${p.fotos[0]}" alt="${p.nome}">
      <div class="produto-info">
        <span class="marca">${p.marca}</span>
        <h4>${p.nome}</h4>
        <p class="preco">${formatBRL(p.preco)}</p>
        <button class="btn-comprar" onclick="event.stopPropagation(); adicionarAoCarrinho(${p.id})">🛒 Comprar</button>
      </div>
    </div>
  `).join('');
}
renderizarProdutos(produtos);

window.filtrarCategoria = function (marca) {
  const filtrados = produtos.filter(p => p.marca === marca);
  document.getElementById('tituloProdutos').innerText = `Produtos ${marca.toUpperCase()}`;
  renderizarProdutos(filtrados);
  document.querySelector('.produtos')?.scrollIntoView({ behavior: 'smooth' });
};

let produtoSelecionado = null;

window.abrirModal = function (id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;
  produtoSelecionado = p;

  document.getElementById('modalMarca').innerText = p.marca;
  document.getElementById('modalNome').innerText = p.nome;
  document.getElementById('modalPreco').innerText = formatBRL(p.preco);
  document.getElementById('modalDesc').innerText = p.desc;
  document.getElementById('fotoPrincipal').src = p.fotos[0];

  const miniaturas = document.getElementById('miniaturas');
  miniaturas.innerHTML = p.fotos.map((foto, i) =>
    `<img src="${foto}" onclick="trocarFoto(this, '${foto}')" class="${i === 0 ? 'active' : ''}">`
  ).join('');

  const btn = document.getElementById('btnAddCarrinho');
  if (btn) btn.onclick = () => adicionarAoCarrinho(p.id);

  document.getElementById('modalProduto').style.display = 'flex';
};

window.trocarFoto = function (el, src) {
  document.getElementById('fotoPrincipal').src = src;
  document.querySelectorAll('#miniaturas img').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
};

window.fecharModal = function () { document.getElementById('modalProduto').style.display = 'none'; };
document.getElementById('modalProduto')?.addEventListener('click', (e) => { if (e.target.id === 'modalProduto') fecharModal(); });

// ========== PESQUISA ==========
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

if (searchBtn && searchInput) {
  searchBtn.onclick = () => {
    const termo = searchInput.value.toLowerCase().trim();
    if (!termo) return renderizarProdutos(produtos);
    const resultado = produtos.filter(p => p.nome.toLowerCase().includes(termo) || p.marca.toLowerCase().includes(termo));
    document.getElementById('tituloProdutos').innerText = resultado.length ? `Resultados para "${termo}"` : 'Nenhum produto encontrado';
    renderizarProdutos(resultado);
  };
  searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') searchBtn.click(); });
}

// ========== CARRINHO ==========
let carrinho = JSON.parse(localStorage.getItem('mpf_carrinho')) || [];
function salvarCarrinho() { localStorage.setItem('mpf_carrinho', JSON.stringify(carrinho)); atualizarContador(); }
function atualizarContador() {
  const qtd = carrinho.reduce((s, i) => s + i.quantidade, 0);
  const el = document.getElementById('cartCount');
  if (el) el.innerText = qtd;
}

window.adicionarAoCarrinho = function (id) {
  const prod = produtos.find(p => p.id === id);
  if (!prod) return;
  const item = carrinho.find(i => i.id === id);
  if (item) item.quantidade++;
  else carrinho.push({ id, nome: prod.nome, preco: prod.preco, foto: prod.fotos[0], marca: prod.marca, quantidade: 1 });
  salvarCarrinho();
  mostrarToast(`✅ "${prod.nome}" adicionado!`);
};

window.removerDoCarrinho = function (id) { carrinho = carrinho.filter(i => i.id !== id); salvarCarrinho(); renderizarCarrinho(); };
window.alterarQtd = function (id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;
  item.quantidade += delta;
  if (item.quantidade <= 0) return removerDoCarrinho(id);
  salvarCarrinho(); renderizarCarrinho();
};
window.limparCarrinho = function () {
  if (!confirm('Tem certeza que deseja limpar todo o carrinho?')) return;
  carrinho = []; salvarCarrinho(); renderizarCarrinho(); mostrarToast('🗑️ Carrinho esvaziado');
};
window.abrirCarrinho = function () { renderizarCarrinho(); document.getElementById('modalCarrinho').style.display = 'flex'; };
window.fecharCarrinho = function () { document.getElementById('modalCarrinho').style.display = 'none'; };
document.getElementById('modalCarrinho')?.addEventListener('click', (e) => { if (e.target.id === 'modalCarrinho') fecharCarrinho(); });
document.getElementById('cartBtn')?.addEventListener('click', abrirCarrinho);

window.renderizarCarrinho = function () {
  const container = document.getElementById('carrinhoItens');
  const resumo = document.getElementById('carrinhoResumo');
  const vazio = document.getElementById('carrinhoVazio');
  if (!container || !resumo || !vazio) return;

  if (carrinho.length === 0) {
    container.innerHTML = ''; resumo.style.display = 'none'; vazio.style.display = 'block'; return;
  }
  vazio.style.display = 'none'; resumo.style.display = 'block';

  container.innerHTML = carrinho.map(item => `
    <div class="carrinho-item">
      <img src="${item.foto}" alt="${item.nome}">
      <div class="carrinho-item-info">
        <span class="item-marca">${item.marca}</span>
        <h4>${item.nome}</h4>
        <p class="item-preco">${formatBRL(item.preco)}</p>
        <div class="qtd-controle">
          <button onclick="alterarQtd(${item.id}, -1)">−</button>
          <span>${item.quantidade}</span>
          <button onclick="alterarQtd(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="btn-remover" onclick="removerDoCarrinho(${item.id})" title="Remover"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');

  const subtotal = carrinho.reduce((s, i) => s + i.preco * i.quantidade, 0);
  document.getElementById('subtotal').innerText = formatBRL(subtotal);
  document.getElementById('total').innerText = formatBRL(subtotal);
};

// ========== WHATSAPP (UMA VIA APENAS) ==========
window.finalizarPedidoWhatsApp = function () {
  if (carrinho.length === 0) {
    mostrarToast('⚠️ Seu carrinho está vazio!', 'erro');
    return;
  }

  const subtotal = carrinho.reduce((s, i) => s + i.preco * i.quantidade, 0);
  const user = getUsuarioLogado();
  
  let msg = `*🛒 NOVO PEDIDO - MPF ELETRÔNICOS*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

  if (user) {
    msg += `*👤 CLIENTE:*\nNome: ${user.nome}\nTelefone: ${user.telefone}\n\n━━━━━━━━━━━━━━━━━━━━━\n\n`;
  }

  msg += `*📦 PRODUTOS:*\n\n`;

  carrinho.forEach((item, i) => {
    msg += `*${i + 1}. ${item.nome}*\nMarca: ${item.marca.toUpperCase()}\nQtd: ${item.quantidade} x ${formatBRL(item.preco)}\nSubtotal: *${formatBRL(item.preco * item.quantidade)}*\n\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━━\n*💰 SUBTOTAL:* ${formatBRL(subtotal)}\n*🚚 FRETE:* A combinar\n*✅ TOTAL:* *${formatBRL(subtotal)}*\n━━━━━━━━━━━━━━━━━━━━━\n\nOlá! Gostaria de finalizar este pedido. 😊\nAguardo instruções para pagamento e entrega.`;

  if (user) {
    const pedidos = JSON.parse(localStorage.getItem('mpf_pedidos')) || [];
    pedidos.push({ data: new Date().toISOString(), total: formatBRL(subtotal), itens: carrinho.map(i => ({ nome: i.nome, quantidade: i.quantidade })) });
    localStorage.setItem('mpf_pedidos', JSON.stringify(pedidos));
  }

  window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, '_blank');
  mostrarToast('📲 Redirecionando para o WhatsApp...');
};

// ========== LOGIN / CADASTRO ==========
function getUsuarios() { return JSON.parse(localStorage.getItem('mpf_usuarios')) || []; }
function salvarUsuarios(lista) { localStorage.setItem('mpf_usuarios', JSON.stringify(lista)); }
window.getUsuarioLogado = function () { return JSON.parse(localStorage.getItem('mpf_logado')) || null; };
function salvarSessao(user) { localStorage.setItem('mpf_logado', JSON.stringify(user)); }
function limparSessao() { localStorage.removeItem('mpf_logado'); }

document.getElementById('loginBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modalLogin');
  if (!modal) return;
  modal.style.display = 'flex';
  const logado = getUsuarioLogado();
  if (logado) mostrarAreaLogado(logado);
  else mudarAba('login');
});

window.fecharModalLogin = function () { document.getElementById('modalLogin').style.display = 'none'; };
document.getElementById('modalLogin')?.addEventListener('click', (e) => { if (e.target.id === 'modalLogin') fecharModalLogin(); });

window.mudarAba = function (aba) {
  const telas = ['formLogin', 'formCadastro', 'formRecuperar', 'formEditarPerfil', 'areaLogado'];
  telas.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
  const tabLogin = document.getElementById('tabLogin');
  const tabCadastro = document.getElementById('tabCadastro');
  if (tabLogin) tabLogin.classList.remove('active');
  if (tabCadastro) tabCadastro.classList.remove('active');

  if (aba === 'login') { document.getElementById('formLogin').style.display = 'block'; if (tabLogin) tabLogin.classList.add('active'); }
  else if (aba === 'cadastro') { document.getElementById('formCadastro').style.display = 'block'; if (tabCadastro) tabCadastro.classList.add('active'); }
  else if (aba === 'recuperar') { document.getElementById('formRecuperar').style.display = 'block'; }
  else if (aba === 'editar') { document.getElementById('formEditarPerfil').style.display = 'block'; }
};

window.fazerCadastro = function (e) {
  e.preventDefault();
  const nome = document.getElementById('cadNome').value.trim();
  const email = document.getElementById('cadEmail').value.trim().toLowerCase();
  const telefone = document.getElementById('cadTelefone').value.trim();
  const senha = document.getElementById('cadSenha').value;
  const senha2 = document.getElementById('cadSenha2').value;
  if (senha !== senha2) { alert('⚠️ As senhas não coincidem!'); return; }
  const usuarios = getUsuarios();
  if (usuarios.some(u => u.email === email)) { alert('⚠️ E-mail já cadastrado.'); mudarAba('login'); return; }
  const novoUser = { nome, email, telefone, senha };
  usuarios.push(novoUser); salvarUsuarios(usuarios);
  const { senha: _, ...userSemSenha } = novoUser;
  salvarSessao(userSemSenha);
  alert(`🎉 Bem-vindo(a), ${nome}!`);
  mostrarAreaLogado(userSemSenha); atualizarBotaoLogin();
};

window.fazerLogin = function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const senha = document.getElementById('loginSenha').value;
  const usuario = getUsuarios().find(u => u.email === email && u.senha === senha);
  if (!usuario) { alert('❌ E-mail ou senha incorretos.'); return; }
  const { senha: _, ...userSemSenha } = usuario;
  salvarSessao(userSemSenha);
  mostrarAreaLogado(userSemSenha); atualizarBotaoLogin();
};

window.fazerLogout = function () {
  if (!confirm('Deseja sair da conta?')) return;
  limparSessao(); fecharModalLogin(); atualizarBotaoLogin(); mostrarToast('👋 Você saiu da conta.');
};

window.mostrarAreaLogado = function (user) {
  document.getElementById('formLogin').style.display = 'none';
  document.getElementById('formCadastro').style.display = 'none';
  document.getElementById('areaLogado').style.display = 'block';
  document.getElementById('userNome').innerText = user.nome;
  document.getElementById('userEmail').innerText = user.email;
  document.getElementById('userTelefone').innerText = user.telefone;
  document.getElementById('userAvatar').innerText = user.nome.charAt(0).toUpperCase();
  document.getElementById('modalLogin').style.display = 'flex';
};

window.atualizarBotaoLogin = function () {
  const btn = document.getElementById('loginBtn');
  if (!btn) return;
  const user = getUsuarioLogado();
  if (user) btn.innerHTML = `<i class="fas fa-user-check"></i><span>${user.nome.split(' ')[0]}</span>`;
  else btn.innerHTML = `<i class="fas fa-user"></i><span>Login</span>`;
};

window.abrirEdicaoPerfil = function() {
  const user = getUsuarioLogado();
  if (!user) return;
  document.getElementById('areaLogado').style.display = 'none';
  document.getElementById('formEditarPerfil').style.display = 'block';
  document.getElementById('editNome').value = user.nome;
  document.getElementById('editTelefone').value = user.telefone;
};

window.cancelarEdicao = function() {
  document.getElementById('formEditarPerfil').style.display = 'none';
  document.getElementById('areaLogado').style.display = 'block';
};

window.salvarEdicaoPerfil = function(e) {
  e.preventDefault();
  const userLogado = getUsuarioLogado();
  if (!userLogado) return;
  const novoNome = document.getElementById('editNome').value.trim();
  const novoTelefone = document.getElementById('editTelefone').value.trim();
  let usuarios = getUsuarios();
  const index = usuarios.findIndex(u => u.email === userLogado.email);
  if (index !== -1) {
    usuarios[index].nome = novoNome;
    usuarios[index].telefone = novoTelefone;
    salvarUsuarios(usuarios);
    const { senha: _, ...userAtualizado } = usuarios[index];
    salvarSessao(userAtualizado);
    alert('✅ Perfil atualizado!');
    document.getElementById('formEditarPerfil').style.display = 'none';
    mostrarAreaLogado(userAtualizado); atualizarBotaoLogin();
  }
};

window.recuperarSenha = function(e) {
  e.preventDefault();
  const email = document.getElementById('recEmail').value.trim().toLowerCase();
  const usuario = getUsuarios().find(u => u.email === email);
  if (!usuario) { alert('❌ E-mail não encontrado.'); return; }
  const msg = `*🔑 RECUPERAÇÃO DE SENHA - MPF*\n\nOlá, esqueci minha senha.\nMeu e-mail é: ${usuario.email}`;
  window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, '_blank');
  alert('📲 Redirecionando para o WhatsApp...');
  mudarAba('login');
};

window.verMeusPedidos = function () {
  const pedidos = JSON.parse(localStorage.getItem('mpf_pedidos')) || [];
  if (pedidos.length === 0) { alert('📦 Nenhum pedido ainda.'); return; }
  const lista = pedidos.map((p, i) => `Pedido ${i + 1} — ${new Date(p.data).toLocaleDateString('pt-BR')}\nTotal: ${p.total}\nItens: ${p.itens.map(it => `${it.quantidade}x ${it.nome}`).join(', ')}`).join('\n\n');
  alert(`📦 Seus pedidos:\n\n${lista}`);
};

window.enviarContato = function (e) {
  e.preventDefault(); alert('✅ Mensagem enviada!'); e.target.reset();
};

// ========== PWA / SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => console.log('✅ SW registrado!')).catch(err => console.warn('⚠️ SW falhou:', err));
  });
}

let deferredPrompt = null;
const banner = document.getElementById('pwaInstallBanner');
const btnInstall = document.getElementById('pwaInstallBtn');
const btnDismiss = document.getElementById('pwaDismissBtn');
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

window.addEventListener('beforeinstallprompt', (e) => {
  if (isStandalone || localStorage.getItem('pwa_dismissed') === 'true') return;
  e.preventDefault(); deferredPrompt = e;
  setTimeout(() => banner?.classList.add('show'), 3000);
});

btnInstall?.addEventListener('click', async () => {
  if (!deferredPrompt) { alert('📱 Use o menu do navegador para instalar.'); return; }
  deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; banner?.classList.remove('show');
});
btnDismiss?.addEventListener('click', () => { banner?.classList.remove('show'); localStorage.setItem('pwa_dismissed', 'true'); });
window.addEventListener('appinstalled', () => { banner?.classList.remove('show'); mostrarToast('🎉 App instalado!'); });

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  atualizarContador(); atualizarBotaoLogin();
  console.log('✅ MPF Eletrônicos carregado com sucesso!');
});
// ============================================================
// ========== CONTROLE DO PIX =================================
// ============================================================

window.abrirPix = function() {
  if (carrinho.length === 0) {
    if (typeof mostrarToast === 'function') mostrarToast('⚠️ Adicione itens no carrinho antes de pagar!', 'erro');
    else alert('Adicione itens no carrinho antes de pagar!');
    return;
  }
  fecharCarrinho(); // Fecha a tela do carrinho
  document.getElementById('modalPix').style.display = 'flex'; // Abre a tela do PIX
};

window.fecharModalPix = function() {
  document.getElementById('modalPix').style.display = 'none';
  abrirCarrinho(); // Volta para o carrinho se fechar o PIX
};

document.getElementById('modalPix')?.addEventListener('click', (e) => { 
  if (e.target.id === 'modalPix') fecharModalPix(); 
});

// Função para copiar a chave PIX
window.copiarChavePix = function() {
  const input = document.getElementById('chavePix');
  if (!input) return;
  
  input.select();
  input.setSelectionRange(0, 99999); // Para funcionar no celular
  
  try {
    document.execCommand('copy');
    if (typeof mostrarToast === 'function') mostrarToast('✅ Chave PIX copiada!');
    const btn = document.getElementById('btnCopiarPix');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
      }, 3000);
    }
  } catch (err) {
    alert('Não foi possível copiar automaticamente. Por favor, selecione e copie manualmente.');
  }
};

// Função para enviar no WhatsApp avisando que pagou
window.confirmarPagamentoPix = function() {
  const user = getUsuarioLogado();
  let msg = `*💳 PEDIDO PAGO VIA PIX - MPF ELETRÔNICOS*\n\n`;
  
  if (user) {
    msg += `*👤 CLIENTE:*\nNome: ${user.nome}\nTelefone: ${user.telefone}\n\n`;
  }
  
  msg += `Olá! Acabei de realizar o pagamento do pedido via PIX. 😊\nSegue o comprovante em anexo.\n\nAguardo as instruções de entrega!`;
  
  window.open(`https://wa.me/${WHATSAPP_LOJA}?text=${encodeURIComponent(msg)}`, '_blank');
  fecharModalPix();
};