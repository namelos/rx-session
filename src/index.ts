import { Observable } from 'rxjs'
import * as $ from 'jquery'

const post = (url, body) => fetch(url, {
  method: "POST",
  body
})

const $input = $('#input')
const $upload = $('#upload')

const input$ = Observable.fromEvent($input, 'change')
const upload$ = Observable.fromEvent($upload, 'click')


const getTodos = fetch('/todo')
  .then(res => res.json())

const log = stream$ => stream$
  .subscribe(x => console.log(x))

const display = stream$ => stream$
  .subscribe(x => $('#app').text(x))

const inputs$ = input$
  .map(e => (e as any).target.value)

