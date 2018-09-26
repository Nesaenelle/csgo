(function() {


    function Form(form) {
        var self = this;
        this.controls = [];
        this.form = form;
        this.subscriptions = [];

        form.querySelectorAll('input').forEach(function(input) {
            self.controls.push(new Input(input, self));
        });

        form.onsubmit = function(e) {
            e.preventDefault();
            var focusState = false;

            self.controls.forEach(function(ctrl) {
                if (!focusState) {
                    ctrl.input.focus();
                    if (!ctrl.validate()) {
                        focusState = true;
                    }
                }
            });

            var errors = self.controls.reduce(function(a, b) {
                b = b.valid ? 0 : 1;
                return a + b;
            }, 0);

            if (errors === 0) {
                self.subscriptions.forEach(function(fn) { fn.call(self, self.getJson()) });
                self.controls.forEach(function(ctrl) {
                    ctrl.input.value = '';
                    ctrl.clear();
                })
            }
        };
    };

    Form.prototype.getJson = function() {
        var data = {};
        this.controls.forEach(function(c) {
            data[c.input.getAttribute('name')] = c.value;
        });
        return data;
    };
    Form.prototype.validate = function() {
        this.controls.forEach(function(ctrl) {
            ctrl.validate()
        });
    };

    Form.prototype.onSubmit = function(fn) {
        this.subscriptions.push(fn);
    };


    function Input(input, parent) {
        var self = this;
        this.parent = parent;
        // this.msg = document.createElement('div');
        this.pattern = getPattern(input.getAttribute('data-pattern'));
        this.errorText = input.getAttribute('data-error-text');
        this.input = input;
        this.valid = false;
        this.value = input.value;
        input.oninput = function() {
            self.value = this.type === 'checkbox' ? this.checked : this.value;
            self.parent.validate();
        };
    }

    Input.prototype.validate = function() {
        var value = this.input.value;
        if (this.input.getAttribute('data-pattern') === 'phone') {
            value = value.replace(/[^0-9]/g, '');
        }
        if (this.pattern.test(value)) {
            this.removeError();
        } else {
            this.addError();
        }

        return this.valid;
    };

    Input.prototype.addError = function() {
        this.input.classList.add('invalid');
        this.input.classList.remove('valid');
        this.input.setCustomValidity(this.errorText);
        this.valid = false;
    };

    Input.prototype.removeError = function() {
        this.input.classList.add('valid');
        this.input.classList.remove('invalid');
        this.input.setCustomValidity('');
        this.valid = true;
    };

    Input.prototype.clear = function() {
        this.input.classList.remove('valid');
        this.input.classList.remove('invalid');
        this.input.setCustomValidity('');
        this.valid = false;
    };

    function getPattern(o) {
        var pattern;
        switch (o) {
            case 'email':
                pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                break;

            case 'login':
                pattern = /^(?=.*[A-Za-z]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
                break;

            case 'phone':
                pattern = /^[0-9]{11,11}$/;
                break;
        }

        return pattern;
    }


    var forms = document.querySelectorAll('.play-form');
    forms.forEach(function(form) {
        var formInst = new Form(form);
        formInst.onSubmit(function(e) {
            window.open('ty_page.html', '_black');
        });
    });

}());
