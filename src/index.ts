import { Observable } from 'rxjs'

import * as $ from 'jquery'

const $app = $('#app')

const source$ = Observable.of(1, 2, 3)

source$.subscribe(console.log.bind(console))

