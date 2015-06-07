var App = Ember.Application.create();

App.RootView = Flame.View.extend({
    childViews: ['splitView'],

    splitView: Flame.VerticalSplitView.extend({
        leftWidth: 250,
        minLeftWidth: 200,

        leftView: Flame.View.extend({
            childViews: ['titleView', 'buttonView'],

            titleView: Flame.LabelView.extend({
                layout: { left: 5, right: 5, top: 10 },
                textAlign: Flame.ALIGN_CENTER,
                value: 'Flame.js'
            }),

            buttonView: Flame.ButtonView.extend({
                layout: { left: 5, right: 5, top: 40 },
                title: 'Flame!',
                action: function() {
                    Flame.AlertPanel.info({
                        title: 'Hi!',
                        message: 'This is a Flame.AlertPanel'
                    }).popup();
                }
            })
        }),

        rightView: Flame.View.extend({
            childViews: ['labelView','button0','button1','button2',
            'button3','button4','button5','button6','button7','button8',
            'button9','buttonPlus', 'buttonDot', 'buttonEquals', 'buttonMinus',
            'buttonMultiply', 'buttonDivide'],

            labelView: Flame.LabelView.extend({
                layout: { left: 50, top: 20 },
                value: 'Hello World!'
            }),

            buttonDivide: Flame.ButtonView.extend({
                layout: { left: 110, top: 50, width: 30 },
                title: '÷',
                action: function() {
                    /* value: 1 */
                }
            }),

            button7: Flame.ButtonView.extend({
                layout: { left: 5, top: 80, width: 30 },
                title: '7',
                action: function() {
                    /* value: 1 */
                }
            }),

            button8: Flame.ButtonView.extend({
                layout: { left: 40, top: 80, width: 30 },
                title: '8',
                action: function() {
                    /* value: 1 */
                }
            }),

            button9: Flame.ButtonView.extend({
                layout: { left: 75, top: 80, width: 30 },
                title: '9',
                action: function() {
                    /* value: 1 */
                }
            }),

            buttonMultiply: Flame.ButtonView.extend({
                layout: { left: 110, top: 80, width: 30 },
                title: 'X',
                action: function() {
                    /* value: 1 */
                }
            }),

            button4: Flame.ButtonView.extend({
                layout: { left: 5, top: 110, width: 30 },
                title: '4',
                action: function() {
                    /* value: 1 */
                }
            }),

            button5: Flame.ButtonView.extend({
                layout: { left: 40, top: 110, width: 30 },
                title: '5',
                action: function() {
                    /* value: 1 */
                }
            }),

            button6: Flame.ButtonView.extend({
                layout: { left: 75, top: 110, width: 30 },
                title: '6',
                action: function() {
                    /* value: 1 */
                }
            }),

            buttonMinus: Flame.ButtonView.extend({
                layout: { left: 110, top: 110, width: 30 },
                title: '-',
                action: function() {
                    /* value: 1 */
                }
            }),

            button1: Flame.ButtonView.extend({
                layout: { left: 5, top: 140, width: 30 },
                title: '1',
                action: function() {
                    /* value: 1 */
                }
            }),

            button2: Flame.ButtonView.extend({
                layout: { left: 40, top: 140, width: 30 },
                title: '2',
                action: function() {
                    /* value: 1 */
                }
            }),

            button3: Flame.ButtonView.extend({
                layout: { left: 75, top: 140, width: 30 },
                title: '3',
                action: function() {
                    /* value: 1 */
                }
            }),

            button0: Flame.ButtonView.extend({
                layout: { left: 5, top: 170, width: 30 },
                title: '0',
                action: function() {
                    /* value: 1 */
                }
            }),

            buttonDot: Flame.ButtonView.extend({
                layout: { left: 40, top: 170, width: 30 },
                title: '.',
                action: function() {
                    /* value: 1 */
                }
            }),

            buttonEquals: Flame.ButtonView.extend({
                layout: { left: 75, top: 170, width: 30 },
                title: '=',
                action: function() {
                    /* value: 1 */
                }
            }),

            buttonPlus: Flame.ButtonView.extend({
                layout: { left: 110, top: 140, width: 30, height: 55 },
                title: '+',
                action: function() {
                    /* value: 1 */
                }
            }),
        })
    })
});
