goog.provide('firebaseui.auth.ui.element.multiFactorModal');

goog.require('firebaseui.auth.soy2.strings');
goog.require('firebaseui.auth.ui.element');
goog.require('goog.dom.classlist');
goog.requireType('goog.ui.Component');


goog.scope(function() {
var element = firebaseui.auth.ui.element;

    element.multiFactorModal.getmultiFactorModalElements = function() {
        return this.getElementByClass('div.enrolled-second-factors');
    };
}
