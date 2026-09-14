(function () {
  'use strict';
  function requestLink(contact, title, values) {
    const phone = String(contact.whatsapp || '').replace(/\D/g, '');
    const email = String(contact.email || '').trim();
    const message = [title, 'السيارة: ' + values.car, 'رقم القطعة / الشاص: ' + (values.part || 'غير محدد'), 'التفاصيل: ' + values.details].join('\n');
    if (/^[1-9]\d{7,14}$/.test(phone)) return { href: 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message), channel: 'whatsapp' };
    if (/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) return { href: 'mailto:' + email + '?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(message), channel: 'email' };
    return null;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = { requestLink }; return; }
  function init() {
    const dialog = document.getElementById('pmp-request-dialog');
    const form = document.getElementById('pmp-request-form');
    const result = document.getElementById('pmp-request-result');
    let opener, requestTitle = 'طلب قطع تعديل';
    document.querySelectorAll('[data-pmp-request]').forEach(button => {
      button.addEventListener('click', event => {
        if (!dialog || typeof dialog.showModal !== 'function') return;
        event.preventDefault(); opener = button; requestTitle = button.dataset.pmpRequest;
        document.getElementById('pmp-request-title').textContent = requestTitle;
        result.replaceChildren(); dialog.showModal();
      });
    });
    if (dialog) {
      dialog.querySelector('.pmp-dialog-close').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => {
        if (event.target !== dialog) return;
        const r = dialog.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
      });
      dialog.addEventListener('close', () => { if (opener) opener.focus(); });
    }
    if (form) {
      form.addEventListener('input', () => result.replaceChildren());
      form.addEventListener('submit', event => {
        event.preventDefault(); if (!form.reportValidity()) return;
        const data = new FormData(form);
        const destination = requestLink(dialog.dataset, requestTitle, { car: data.get('car'), part: data.get('part'), details: data.get('details') });
        result.replaceChildren(); const note = document.createElement('p');
        note.textContent = destination ? 'الرسالة جاهزة. افتحها وأرسلها لتصلنا؛ لم يتم إرسال الطلب بعد.' : 'قناة استقبال الطلبات غير متاحة حاليًا. راجع وسائل التواصل أسفل الصفحة.';
        result.append(note); if (!destination) return;
        const link = document.createElement('a'); link.className = 'pmp-send'; link.href = destination.href;
        link.textContent = destination.channel === 'whatsapp' ? 'فتح الطلب في واتساب' : 'فتح الطلب في البريد';
        if (destination.channel === 'whatsapp') { link.target = '_blank'; link.rel = 'noopener'; }
        result.append(link); link.focus();
      });
    }
    const host = document.getElementById('pmp-product-list');
    function showProducts(ids, title) {
      const list = document.createElement('salla-products-list');
      list.setAttribute('source', ids ? 'selected' : 'latest');
      if (ids) list.setAttribute('source-value', JSON.stringify(ids));
      list.setAttribute('limit', '32'); host.replaceChildren(list);
      document.getElementById('pmp-product-heading').textContent = title;
      document.getElementById('pmp-catalog-status').textContent = 'عرض ' + title;
    }
    document.querySelectorAll('[data-pmp-group]').forEach(link => {
      link.addEventListener('click', event => {
        if (!host || !window.salla) return;
        let ids; try { ids = JSON.parse(link.dataset.productIds); } catch (_) { return; }
        if (!Array.isArray(ids) || !ids.length || !ids.every(id => Number.isSafeInteger(id) && id > 0)) return;
        event.preventDefault(); showProducts(ids, link.dataset.title);
        document.getElementById('pmp-products').scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    });
    const all = document.querySelector('[data-pmp-all]');
    if (all) all.addEventListener('click', event => { if (!host || !window.salla) return; event.preventDefault(); showProducts(null, 'جميع المنتجات'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
