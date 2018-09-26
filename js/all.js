(function(NES_API) {
    var $ = NES_API.SELECTOR;

    // NES_API.add('slider', {
    //     constructor: function() {
    //         var self = this;
    //         this.slider = $.find('[data-slider]');
    //         this.tabs = this.slider.findAll('[data-slider-tab]');
    //         this.contents = this.slider.findAll('[data-slider-content]');
    //         this.leftArrow = this.slider.find('[data-slider-prev]');
    //         this.rightArrow = this.slider.find('[data-slider-next]');
    //         this.scroller = this.slider.find('[data-slider-scroller]');
    //         this.slideWidth = this.scroller.el.offsetWidth;
    //         this.activeIndex = 1;

    //         this.tabs.forEach(function(tab) {
    //             tab.addEvent('click', function(e) {
    //                 var id = e.target.getAttribute('data-slider-tab');
    //                 self.activeIndex = id;
    //                 self.show();
    //             });
    //         });

    //         this.leftArrow.addEvent('click', function() {
    //             self.activeIndex--;
    //             if (self.activeIndex < 1) {
    //                 self.activeIndex = 1;
    //             }
    //             self.show();
    //         });
    //         this.rightArrow.addEvent('click', function() {
    //             self.activeIndex++;
    //             if (self.activeIndex > self.tabs.length) {
    //                 self.activeIndex = self.tabs.length;
    //             }
    //             self.show();
    //         });
    //         this.updateArrows();
    //         window.addEventListener('resize', function() {
    //             self.slideWidth = self.scroller.el.offsetWidth;
    //             self.show();
    //         });
    //     },

    //     show() {
    //         var self = this;
    //         var offset = -this.slideWidth * (this.activeIndex - 1);
    //         this.scroller.style('transform', 'translateX(' + offset + 'px)');

    //         this.tabs.forEach(function(a) { a.removeClass('active') });
    //         this.tabs[this.activeIndex - 1].addClass('active');

    //         this.updateArrows();
    //     },
    //     updateArrows() {
    //         this.activeIndex == 1 ? this.leftArrow.addClass('hidden') : this.leftArrow.removeClass('hidden');
    //         this.activeIndex == this.tabs.length ? this.rightArrow.addClass('hidden') : this.rightArrow.removeClass('hidden');
    //     }
    // });

    // NES_API.add('modal', {
    //     constructor: function() {
    //         var self = this;
    //         this.popupBtns = $.findAll('[data-modal-open]');
    //         this.modalOverlay = $.find('#modal-overlay');
    //         this.closeBtns = $.findAll('[data-modal-close]');
    //         this.activeModal;

    //         this.popupBtns.forEach(function(btn) {
    //             btn.addEvent('click', function(e) {
    //                 e.preventDefault();
    //                 var id = e.currentTarget.getAttribute('data-modal-open');
    //                 e.stopPropagation();
    //                 self.openModal(id);
    //             });
    //         });


    //         this.closeBtns.forEach(function(btn) {
    //             btn.addEvent('click', function(e) {
    //                 self.activeModal.removeClass('opened');
    //                 self.modalOverlay.removeClass('opened');
    //             });
    //         });


    //         window.addEventListener('click', function(e) {
    //             if (self.activeModal && !self.activeModal.find('.modal-body').el.contains(e.target)) {
    //                 self.closeModal();
    //             }
    //         }, false);
    //     },

    //     closeModal: function(e) {
    //         if (this.activeModal) {
    //             this.activeModal.removeClass('opened');
    //             this.modalOverlay.removeClass('opened');
    //             if(this.activeModal.find('.btn')) {
    //                 this.activeModal.find('.btn').removeEvent('click', this.onBtnClick.bind(this));
    //             }

    //             if(this.activeModal.find('iframe')){
    //                 var iframe = this.activeModal.find('iframe').el;
    //                 var iframeSrc = iframe.src;
    //                     iframe.src = iframeSrc;
    //             }
    //         }
    //     },

    //     openModal: function(id) {
    //         var self = this;
    //         this.closeModal();
    //         this.modalOverlay.addClass('opened');
    //         this.activeModal = $.find('.modal[data-modal="' + id + '"]');
    //         this.activeModal.addClass('opened');

    //         if(this.activeModal.find('.btn')) {
    //             this.activeModal.find('.btn').addEvent('click', this.onBtnClick.bind(this));
    //         }

    //     },

    //     onBtnClick: function() {
    //         this.closeModal();
    //     }
    // });


    // NES_API.add('paralax', {
    //     constructor: function() {        
    //         var counterItems = $.findAll('[data-paralax]');
    //         var images = document.querySelector('.advantages__wrapper');

    //         window.addEventListener('scroll', function(e) {
    //             if (isInViewport(images)) {
    //                 counterItems.forEach(function(item) {
    //                     var val = (offset(images).top - window.pageYOffset) / 2 * parseFloat(item.getAttr('data-paralax')); //checkScrollSpeed() + 'px';
    //                     item.style('transform', 'translateY(' + val + 'px)');
    //                 });
    //             }
    //         });

    //         var checkScrollSpeed = (function(settings) {
    //             settings = settings || {};

    //             var lastPos, newPos, timer, delta,
    //                 delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    //             function clear() {
    //                 lastPos = null;
    //                 delta = 0;
    //             }

    //             clear();

    //             return function() {
    //                 newPos = window.scrollY;
    //                 if (lastPos != null) { // && newPos < maxScroll 
    //                     delta = newPos - lastPos;
    //                 }
    //                 lastPos = newPos;
    //                 clearTimeout(timer);
    //                 timer = setTimeout(clear, delay);
    //                 return delta;
    //             };
    //         })();
    //     }
    // });


    // function offset(el) {
    //     var rect = el.getBoundingClientRect(),
    //         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    // }

    // function isInViewport(el) {
    //     var top = el.offsetTop;
    //     var left = el.offsetLeft;
    //     var width = el.offsetWidth;
    //     var height = el.offsetHeight;

    //     while (el.offsetParent) {
    //         el = el.offsetParent;
    //         top += el.offsetTop;
    //         left += el.offsetLeft;
    //     }

    //     return (
    //         top < (window.pageYOffset + window.innerHeight) &&
    //         left < (window.pageXOffset + window.innerWidth) &&
    //         (top + height) > window.pageYOffset &&
    //         (left + width) > window.pageXOffset
    //     );
    // };


    // function Form(form) {
    //     var self = this;
    //     this.controls = [];
    //     this.form = form;
    //     this.subscriptions = [];

    //     form.querySelectorAll('input').forEach(function(input) {
    //         self.controls.push(new Input(input, self));
    //     });

    //     form.onsubmit = function(e) {
    //         e.preventDefault();
    //         var focusState = false;

    //         self.controls.forEach(function(ctrl) {
    //             if (!focusState) {
    //                 ctrl.input.focus();
    //                 if (!ctrl.validate()) {
    //                     focusState = true;
    //                 }
    //             }
    //         });

    //         var errors = self.controls.reduce(function(a, b) {
    //             b = b.valid ? 0 : 1;
    //             return a + b;
    //         }, 0);

    //         if (errors === 0) {
    //             self.subscriptions.forEach(function(fn) { fn.call(self, self.getJson()) });
    //             self.controls.forEach(function(ctrl) {
    //                 ctrl.input.value = '';
    //                 ctrl.clear();
    //             })
    //         }
    //     };
    // };

    // Form.prototype.getJson = function() {
    //     var data = {};
    //     this.controls.forEach(function(c) {
    //         data[c.input.getAttribute('name')] = c.value;
    //     });
    //     return data;
    // };
    // Form.prototype.validate = function() {
    //     this.controls.forEach(function(ctrl) {
    //         ctrl.validate()
    //     });
    // };

    // Form.prototype.onSubmit = function(fn) {
    //     this.subscriptions.push(fn);
    // };


    // function Input(input, parent) {
    //     var self = this;
    //     this.parent = parent;
    //     // this.msg = document.createElement('div');
    //     this.pattern = getPattern(input.getAttribute('data-pattern'));
    //     this.errorText = input.getAttribute('data-error-text');
    //     this.input = input;
    //     this.valid = false;
    //     this.value = input.value;
    //     input.oninput = function() {
    //         self.value = this.type === 'checkbox' ? this.checked : this.value;
    //         self.parent.validate();
    //     };
    // }

    // Input.prototype.validate = function() {
    //     var value = this.input.value;
    //     if (this.input.getAttribute('data-pattern') === 'phone') {
    //         value = value.replace(/[^0-9]/g, '');
    //     }
    //     if (this.pattern.test(value)) {
    //         this.removeError();
    //     } else {
    //         this.addError();
    //     }

    //     return this.valid;
    // };

    // Input.prototype.addError = function() {
    //     this.input.classList.add('invalid');
    //     this.input.classList.remove('valid');
    //     this.input.setCustomValidity(this.errorText);
    //     this.valid = false;
    // };

    // Input.prototype.removeError = function() {
    //     this.input.classList.add('valid');
    //     this.input.classList.remove('invalid');
    //     this.input.setCustomValidity('');
    //     this.valid = true;
    // };

    // Input.prototype.clear = function() {
    //     this.input.classList.remove('valid');
    //     this.input.classList.remove('invalid');
    //     this.input.setCustomValidity('');
    //     this.valid = false;
    // };

    // function getPattern(o) {
    //     var pattern;
    //     switch (o) {
    //         case 'email':
    //             pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //             break;

    //         case 'login':
    //             pattern = /^(?=.*[A-Za-z]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
    //             break;

    //         case 'phone':
    //             pattern = /^[0-9]{11,11}$/;
    //             break;
    //     }

    //     return pattern;
    // }


    // var forms = $.findAll('.main-form');
    // forms.forEach(function(form) {
    //     var formInst = new Form(form.el);
    //     formInst.onSubmit(function(e) {
    //         NES_API.modal.openModal('thx');
    //     });
    // });

    NES_API.init();
}(window.NES_API));


// $('.phone-input').mask("+3 (000) 000 00 00", {});