var App = Ember.Application.create();

App.displayController = Ember.Object.create({
    currentFunction: '',
    currentValue: 0,
    displayValue: 0,
    newNumberStart: false,
    hasDecimals: false,
    reset: function () {
        this.set('currentFunction', '');
        this.set('currentValue', 0);
        this.set('displayValue', 0);
        this.set('newNumberStart', false);
    },
    updateFunction: function(func) {
        this.set('newNumberStart', true);

        currentValue = Number(this.get('currentValue'));
        displayValue = Number(this.get('displayValue'));

        switch(this.get('currentFunction')) {
            case '':
                newValue = displayValue;
                break;
            case 'add':
                newValue = currentValue + displayValue;
                break;
            case 'minus':
                newValue = currentValue - displayValue;
                break;
            case 'multiply':
                newValue = currentValue * displayValue;
                break;
            case 'divide':
                newValue = currentValue / displayValue;
                break;
            default:
                break;
        }
        this.set('currentValue', newValue);

        if(this.get('currentFunction') != '') {
            this.set('displayValue',this.get('currentValue'));
        }
        this.set('currentFunction', func);
    },
    updateNumber: function(num) {
        displayValue = this.get('displayValue');
        hasDecimals = this.get('hasDecimals');
        if(hasDecimals) {
            newDisplayValue = displayValue + '.' + num;
            this.set('displayValue', newDisplayValue);
            this.toggleProperty('hasDecimals');
        }
        else if(displayValue == 0 || this.get('newNumberStart')) {
            this.set('displayValue', num);
            this.set('newNumberStart', false)
        } else {
            newDisplayValue = displayValue + '' + num;
            this.set('displayValue', newDisplayValue);
        }
    },
    displayResult: function() {
        this.set('newNumberStart', true);

        currentValue = Number(this.get('currentValue'));
        displayValue = Number(this.get('displayValue'));

        switch(this.get('currentFunction')) {
            case '':
                newValue = displayValue;
                break;
            case 'add':
                newValue = currentValue + displayValue;
                break;
            case 'minus':
                newValue = currentValue - displayValue;
                break;
            case 'multiply':
                newValue = currentValue * displayValue;
                break;
            case 'divide':
                newValue = currentValue / displayValue;
                break;
            default:
                break;
        }
        this.set('currentValue', newValue);

        this.set('displayValue', newValue);
        this.set('currentFunction', '');
    },
    addDot: function() {
        if(this.get('displayValue') % 1 === 0) {
            this.set('hasDecimals', true);
        }
    }
});

App.RootView = Flame.View.extend({
    layout: { width: 145, height: 200, left: 20, top: 20 },
    childViews: ['display','buttonReset','buttonDivide',
        'button7','button8','button9','buttonMultiply',
        'button4','button5','button6','buttonMinus',
        'button1','button2','button3','buttonPlus',
        'button0','buttonDot','buttonEquals'
        ],

    display: Flame.TextFieldView.extend({
        layout: { left: 5, top: 20, width: 135 },
        valueBinding: 'App.displayController.displayValue'
    }),

    buttonReset: Flame.ButtonView.extend({
        layout: { left: 75, top: 50, width: 30 },
        title: 'CE',
        action: function() {
            App.displayController.reset();
        }
    }),

    buttonDivide: Flame.ButtonView.extend({
        layout: { left: 110, top: 50, width: 30 },
        title: '÷',
        action: function() {
            App.displayController.updateFunction('divide');
        }
    }),

    button7: Flame.ButtonView.extend({
        layout: { left: 5, top: 80, width: 30 },
        title: '7',
        action: function() {
            App.displayController.updateNumber(7);
        }
    }),

    button8: Flame.ButtonView.extend({
        layout: { left: 40, top: 80, width: 30 },
        title: '8',
        action: function() {
            App.displayController.updateNumber(8);
        }
    }),

    button9: Flame.ButtonView.extend({
        layout: { left: 75, top: 80, width: 30 },
        title: '9',
        action: function() {
            App.displayController.updateNumber(9);
        }
    }),

    buttonMultiply: Flame.ButtonView.extend({
        layout: { left: 110, top: 80, width: 30 },
        title: 'X',
        action: function() {
            App.displayController.updateFunction('multiply');
        }
    }),

    button4: Flame.ButtonView.extend({
        layout: { left: 5, top: 110, width: 30 },
        title: '4',
        action: function() {
            App.displayController.updateNumber(4);
        }
    }),

    button5: Flame.ButtonView.extend({
        layout: { left: 40, top: 110, width: 30 },
        title: '5',
        action: function() {
            App.displayController.updateNumber(5);
        }
    }),

    button6: Flame.ButtonView.extend({
        layout: { left: 75, top: 110, width: 30 },
        title: '6',
        action: function() {
            App.displayController.updateNumber(6);
        }
    }),

    buttonMinus: Flame.ButtonView.extend({
        layout: { left: 110, top: 110, width: 30 },
        title: '-',
        action: function() {
            App.displayController.updateFunction('minus');
        }
    }),

    button1: Flame.ButtonView.extend({
        layout: { left: 5, top: 140, width: 30 },
        title: '1',
        action: function() {
            App.displayController.updateNumber(1);
        }
    }),

    button2: Flame.ButtonView.extend({
        layout: { left: 40, top: 140, width: 30 },
        title: '2',
        action: function() {
            App.displayController.updateNumber(2);
        }
    }),

    button3: Flame.ButtonView.extend({
        layout: { left: 75, top: 140, width: 30 },
        title: '3',
        action: function() {
            App.displayController.updateNumber(3);
        }
    }),

    button0: Flame.ButtonView.extend({
        layout: { left: 5, top: 170, width: 30 },
        title: '0',
        action: function() {
            App.displayController.updateNumber(0);
        }
    }),

    buttonDot: Flame.ButtonView.extend({
        layout: { left: 40, top: 170, width: 30 },
        title: '.',
        action: function() {
            App.displayController.addDot();
        }
    }),

    buttonEquals: Flame.ButtonView.extend({
        layout: { left: 75, top: 170, width: 30 },
        title: '=',
        action: function() {
            App.displayController.displayResult();
        }
    }),

    buttonPlus: Flame.ButtonView.extend({
        layout: { left: 110, top: 140, width: 30, height: 55 },
        title: '+',
        action: function() {
            App.displayController.updateFunction('add');
        }
    }),

});
