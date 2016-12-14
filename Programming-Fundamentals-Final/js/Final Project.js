/*

Problem Statement:
Create a function to calculate weekly salary.  This will calculate a peron's
hours wooked during the week, the weekend, and overtime hours.  It will also
calculate full time vs part time.

Nouns:
weekely salary, hours worked, hours, full time, part time, week

Verbs:
create, Calculate, function

*/

/* Pseudocode

BEGIN
	Init totalHours = 0
	Init otHours = 0
	Init weekendHours = 0
	Init baseHours = 0
	Init weekPay = 0
	Init basePay = 0
	Init employeeType = ""

	Prompt "Are you a full time or part time employee"

	If employeeType = fullTIME
		basePay = 14
	else
		basePay = 12

	Prompt "Do you work days or nights?"

		If nights
			basePay = basePay + 2
		else
			baesPay = basePay

		Prompt "Total Hours"

		Calculate
		baseHours = totalhours - weekendHours
		otHours = totalhours - 40
			if otHours <= 40
				otHours = 0

		weekpay = (baseHours * basePay) + (otHours * otPay) +
	            (weekendHours * weekendPay)

		display weekpay

END

*/

/*
Test Plans:

full or parttime worker
day or night shift
total hours
weekend hours
expected paycheck

Test 1:
Fulltime
day
40 hours
0 weekendHours
$560

standard week

Test 2:
part-time
nights
40 hours
0 weekendHours
$560

This turns out to be the same because of the night differential

Test 3:
full-time
nights
40 hours
0 weekendHours
$640

This should be more than test 1 due to night differential

Test 4:
full-time
nights
60 hours
20 weekendHours
$1170

calculate for weekend hours + overtime hours

Test 5:
full-time
nights
60 hours
60 weekendHours
$1590

calculate for when only working weekends, overtime included in this test

Test 6:
full-time
nights
0 hours
0 weekendHours
$0

0 hours this week.

Test 7:
full-time
nights
30 hours
0 weekend hours
$480

Test for under 40 hours, 0 overtime.

Test 8:
full-time
nights
30 hours
15 weekend hours
$517.50

Test for less than 40 hours, but weekend hours included.
Slightly more than test 7 due to weekend hours.

Some other notes:

Since weekend hours are not seperate from total hours, weekend hours cannot
exceed total hours, they are a sum (weekday hours, overtime hours, weekend hours).

Hours will not be calculated for negative vaules, ex. -20 hours worked this week.
These tests plans will be excluded.  Program will not calculate these values.

This will NOT calculate someone who works days AND nights in one week, sorry.

Overtime pay is 1.5x basepay , always.

Taxes not calculated.

*/

/* For future development

Create logic to make function calculate weekend overtime.
Calculate for people who work both shifts in a given week.
Create salary estimator (weekley paycheck * 52 is a good start)
	-Exceptions for holidays, holiday pay, vacation pay etc.
Create profit share calclator
Create web form
Fix html/css
Import database of workers.

*/


























*/
