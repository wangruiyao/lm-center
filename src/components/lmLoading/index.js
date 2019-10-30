import './loading.css'

const doc = window.document;
const $body = doc.body || doc.head;
const $loading = doc.createElement('div');
$loading.classList.add('lm-loading')
$loading.innerHTML = `<div class="out">
                        <div class="fade-in">
                          <div class="container">
                            <div class="one common"></div>
                            <div class="two common"></div>
                            <div class="three common"></div>
                            <div class="four common"></div>
                            <div class="five common"></div>
                            <div class="six common"></div>
                            <div class="seven common"></div>
                            <div class="eight common"></div>
                          </div>
                        </div>`

const Loading = {
  isshow: false,
  show() {
    this.isshow = true;
    try {
      $body.appendChild($loading)
    } catch (e) {
    }
  },
  hide() {
    try {
      if ($loading.parentNode === $body) {
        setTimeout(function(){
          $body.removeChild($loading)
        }, 300);

      }
    } catch (e) {
    }
  }
};

export default Loading