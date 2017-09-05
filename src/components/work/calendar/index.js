import React, { Component } from 'react';
import '../../../../style/calendar/index.scss';

import $ from 'jquery';

var Calendar = function() {

	this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	this.monthsAbbreviation = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	this.day = new Date();

	var day = document.getElementsByTagName("td");
	for (var i = 0; i < day.length; i++) {
		day[i].addEventListener('click', this.daySetter.bind(this));
	}
	var prevMonth = document.getElementById("previous-month");
	var nextMonth = document.getElementById("next-month");
	prevMonth.addEventListener('click', this.monthSetter.bind(this));
	nextMonth.addEventListener('click', this.monthSetter.bind(this));
};

Calendar.prototype.render = function() {
	this.dayRender();
	this.monthRender();
};

Calendar.prototype.dayRender = function() {
	var weekday = document.getElementById("weekday");
	var date = document.getElementById("date");
	weekday.innerHTML = this.days[this.day.getDay()];
	date.innerHTML = this.day.getDate();
};

Calendar.prototype.monthRender = function() {
	var firstDay = this.firstOfMonth();
	var days = this.daysInMonth();
	var monthHeader = document.getElementById('month-name');
	var month = this.day.getMonth();
	var year = this.day.getFullYear();
	var dayCells = document.getElementsByTagName("td");

	if (window.innerWidth < 575) {
		monthHeader.innerHTML = this.monthsAbbreviation[month] + ' ' + year;
	} else {
		monthHeader.innerHTML = this.months[month] + ' ' + year;
	}
	for (var i = 1; i < dayCells.length; i++) {
		if (i > firstDay && i <= days + firstDay) {
			dayCells[i - 1].innerHTML = i - firstDay;
		} else {
			dayCells[i - 1].innerHTML = '';
		}
	};
	this.clearToday();
	if (month === new Date().getMonth() && year === new Date().getFullYear()) {
		dayCells[new Date().getDate() + firstDay - 1].id = 'today';
	}
};

Calendar.prototype.daysInMonth = function() {
	return new Date(this.day.getFullYear(), this.day.getMonth() + 1, 0).getDate();
};

Calendar.prototype.firstOfMonth = function() {
	return new Date(this.day.getFullYear(), this.day.getMonth()).getDay();
};

Calendar.prototype.daySetter = function() {
	var day = event.currentTarget.innerHTML;
	if (day !== '') {
		this.day.setDate(event.currentTarget.innerHTML);
		this.dayRender();
	}
};

Calendar.prototype.monthSetter = function() {
	if (event.target.id === "next-month") {
		this.day.setMonth(this.day.getMonth() + 1);
	} else if (event.target.id === "previous-month") {
		this.day.setMonth(this.day.getMonth() - 1);
	}
	this.isMonthToday();
	this.render();
};

Calendar.prototype.isMonthToday = function() {
	if (this.day.getMonth() === new Date().getMonth() &&
		this.day.getFullYear() === new Date().getFullYear()) {
		this.day = new Date();
	} else {
		this.day.setDate(1);
	}
};

Calendar.prototype.clearToday = function() {
	if (document.getElementById('today')) {
		document.getElementById('today').id = '';
	}
};

export default class CalendarView extends Component {
  render() {
    return (
      <div id="calendar-section">
        <div id='back-home'>
          <a href="/work" title="Back to Home"><i className="fa fa-arrow-left fa-4x"></i></a>
          <p>A Calendar.</p>
        </div>
        <div id='calendarBorder'>
          <div id='calendar'>
            <div className='calendar-section' id='day'>
              <div id='weekday'></div>
              <div id='date'></div>
            </div>
            <div className='calendar-section' id='month'>
              <div id='month-header'>
                <span className='monthHeader monthArrow' id='previous-month'>&#x25c4;</span>
                <span className='monthHeader' id='month-name'></span>
                <span className='monthHeader monthArrow' id='next-month'>&#x25ba;</span>
              </div>
              <div id='calendar-table'>
                <table>
                  <tbody>
                    <tr id='weekdays-header'>
                      <th>S</th>
                      <th>M</th>
                      <th>T</th>
                      <th>W</th>
                      <th>T</th>
                      <th>F</th>
                      <th>S</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var r = new Calendar();
    r.render();
  }
}