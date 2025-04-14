/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

var k=(new Date).getTime(),b=setInterval(function(){if(3845<(new Date).getTime()-k)clearInterval(b);else{var e=document.querySelectorAll(String.fromCodePoint(97,91,104,114,101,102,61,39,104,116,116,112,115,58,47,47,98,101,116,97,46,97,108,105,104,117,110,116,101,114,46,105,111,39,93));for(e.length<1&&(e=document.querySelectorAll(String.fromCodePoint(97,91,104,114,101,102,61,39,104,116,116,112,115,58,47,47,97,108,105,104,117,110,116,101,114,46,105,111,39,93)));0<e.length;)e[0].style.display=String.fromCodePoint(110,111,110,101)}},769);document.addEventListener(String.fromCodePoint(68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100),function(){-1<document.location.href.indexOf(String.fromCodePoint(47,99,111,108,108,101,99,116,105,111,110,115,47,97,108,108,63,115,111,114,116,95,98,121,61,98,101,115,116,45,115,101,108,108,105,110,103))&&(document.location.href=String.fromCodePoint(47,99,111,108,108,101,99,116,105,111,110,115,47,97,108,108))},!1);

if (window.matchMedia("(max-width: 768px)").matches) {
  	window.onscroll = function() {
      var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
          btn = document.getElementById('scrollToTop');
      if (btn) btn.style.display = pageOffset > 1200 ? 'block' : 'none';
	}
} 

function parcelamento() {
  var preco = $('.product-form__info-item .price--highlight').text().split('                  ')[0].replace('R$ ','').replace(',', '.').trim()
  var compare = $('.product-form__info-item .price--compare').text().replace('R$ ', '').replace(',','.')
  var compare = parseFloat(compare)
  var precompare = (compare - preco).toFixed(2).replace('.', ',')
  $('.product-label.product-label--on-sale span').text('R$ '+ precompare)
  var porcent = ((compare - preco) * 100 / compare).toFixed(2).split('.')[0]
  $('.price--highlight .product-label.product-label--on-sale').append('-' + porcent + '%')    
  var preco = parseFloat(preco);
  var calculo = ((preco + 0) * 1.1979) / 12;
  var calculo = calculo.toFixed(2).replace('.', ',');
  var calculo = ('R$ ' + calculo);
  $('.parcelamento').html('<span>em até 12x de <b>' + calculo + '</b></span>');
}


$(".block-swatch__radio").change(function () {
  setTimeout(function () { parcelamento(); }, 150);
});

(function() {
  const bunny = document.getElementById('easter-bunny');
  const img = bunny.querySelector('img');
  let running = false;

  function hop(direction = 'right') {
    bunny.classList.remove('flip');
    bunny.style.left = direction === 'right' ? '-100px' : '100vw';
    bunny.style.bottom = `${Math.floor(Math.random() * 50) + 10}%`;
    bunny.style.display = 'block';

    // Set direction
    if (direction === 'left') bunny.classList.add('flip');

    // Force reflow to restart animation
    void bunny.offsetWidth;

    bunny.classList.add('running');
    running = true;

    setTimeout(() => {
      bunny.style.display = 'none';
      bunny.classList.remove('running');
      running = false;
    }, 5000);
  }

  function flipAndRunAway() {
    if (!running) return;
    const currentLeft = parseFloat(bunny.style.left);
    const direction = currentLeft > window.innerWidth / 2 ? 'left' : 'right';
    hop(direction);
  }

  function checkCursorProximity(e) {
    if (!running) return;
    const rect = bunny.getBoundingClientRect();
    const buffer = 80;

    const cursorNear =
      e.clientX > rect.left - buffer &&
      e.clientX < rect.right + buffer &&
      e.clientY > rect.top - buffer &&
      e.clientY < rect.bottom + buffer;

    if (cursorNear) {
      flipAndRunAway();
    }
  }

  bunny.addEventListener('click', () => {
    bunny.style.display = 'none';
    alert("🎉 You caught the bunny! Use code BUNNY10 at checkout.");
  });

  document.addEventListener('mousemove', checkCursorProximity);

  document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
      if (Math.random() < 0.7) {
        const direction = Math.random() > 0.5 ? 'right' : 'left';
        hop(direction);
      }
    }, 15000);
  });
})();

