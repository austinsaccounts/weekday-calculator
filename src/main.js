import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import { backEnd } from './weekday-calc.js';
import $ from 'jquery';


$(document).ready(function() {
  $('#date-form').submit(function() {
    event.preventDefault(event);
    let evalDate = $('#date-input').val();
    console.log(evalDate);
    let inputDateObj = new Date(evalDate);
    console.log(inputDateObj);
    let dayResult = backEnd(inputDateObj);
    $('#day-output').text(dayResult);
    
  })
});
