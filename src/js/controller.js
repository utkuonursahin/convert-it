'use strict'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model'
import View from "./view";

const controlExchange = async function (from, to, amount) {
    try {
        model.setInitials(from, to, amount)
        View.renderSpinner()
        await model.getCurrencyData()
        model.setCurrencyData()
        model.setChartOptions()
        View.render(model.state)
    } catch (err) {
        View.renderError(err)
    }
}

const init = function () {
    View.addHandlerExchange(controlExchange)
}
init()
