import { Chart } from "chart.js";
import icons from "../img/sprite.svg"

class View {
    _parentElement = document.querySelector('.container')
    _form = document.querySelector('.mainbox__form')
    _data;
    _chart;
    _ctx = document.getElementById('chart').getContext('2d')
    _canvasUsed = false
    addHandlerExchange(handler) {
        const fromInput = document.querySelector('#currenciesFrom')
        const toInput = document.querySelector('#currenciesTo')
        const amountInput = document.querySelector('#amount')
        this._parentElement.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--exchange')
            if (!btn || amountInput.value === '') return
            handler(fromInput.value, toInput.value, amountInput.value)
        })
    }
    handlerErrorClose(e){
        const btn = e.target.closest('.error-box--close')
        if (!btn) return
        const errBox = btn.closest('.error-box')
        errBox.remove()
        setTimeout(() => location.reload(),500)
    }
    render(data) {
        this._data = data
        //Render form markup
        const markup = `
            <label for="amount" class="mainbox__form--label">
                    <span class="mainbox__form--label--text">Amount:</span>
                    <input type="number" id="amount" class="mainbox__form--label--input" value="${this._data.currencyAmount}">
            </label>
            <label for="exchanged" class="mainbox__form--label">
                 <span class="mainbox__form--label--text text--exchanged">Exchanged:</span>
                 <input type="number" id="exchanged" class="mainbox__form--label--input" readonly value="${this._data.exchangedMoney}">
            </label>
            <span class="mainbox__form--info">Money exchanged from 1${this._data.currencyFrom} = ${this._data.exchangeRate}${this._data.currencyTo}</span>
            <button class="btn btn--exchange mainbox__form--btn" type="button">Exchange!</button>`
        this._clear(this._form)
        this._form.insertAdjacentHTML("afterbegin", markup)

        //Render chart
        if (this._canvasUsed) this._chart.destroy();
        this._chart = new Chart(this._ctx, this._data.chartOptions)
        this._canvasUsed = true
    }
    renderSpinner() {
        const markup = `
         <div class="spinner">
            <svg class="">
                <use href="${icons}#icon-spinner" class=""></use>
            </svg>
        </div> `
        this._clear(this._form)
        this._form.insertAdjacentHTML('afterbegin', markup)
    }
    renderError(err){
        const markup = `
            <div class="error-box">
                <svg class="error-box--error">
                    <use xlink:href="${icons}#icon-error"></use>
                </svg>
                <p>${err.message}</p>
                <svg class="error-box--close">
                    <use xlink:href="${icons}#icon-close"></use>
                </svg>
            </div>`
        this._clear(this._parentElement)
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
        this._parentElement.addEventListener('click', (e) => this.handlerErrorClose(e))
    }
    _clear(domNode) {domNode.innerHTML = ''}
}
export default new View